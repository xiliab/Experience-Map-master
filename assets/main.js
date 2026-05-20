/**
 * Experience Map Main Logic
 * 负责 Vue 根实例初始化、滚动逻辑及事件绑定
 */

const root = document.querySelector(':root');
const body = document.querySelector('body');

// 初始主题检测
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  root.classList.add('dark');
}

const d = new Vue({
  el: '#app',
  data: {
    p: 0,
    w: 1000,
    h: 1004,
    mX: 0,
    mY: 0,
    lang: typeof lang !== 'undefined' ? lang : 'cn',
    showModal: false,
    showAllCornerNames: false,
    darkMode: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
    showCorner: false,
    showSection: false,
    showBridges: false,
    showSections: false,
    currentCorner: null,
    scrollDistance: 0,
    cornerStart: 0,
    cornerEnd: 0,
    sectionStart: 0,
    sectionEnd: 0,
    currentImageIndex: 0,
    modalContent: "",
    modalType: "",
    // 从全局数据对象中获取
    sections: window.EXPERIENCE_DATA.sections,
    bridges: window.EXPERIENCE_DATA.bridges,
    corners: window.EXPERIENCE_DATA.corners,
    aboutContent: "网页设计 & 开发：LLXiao</a><br/><br/><strong>联系我:</strong><br/>· 邮箱：xiliab@icloud.com<br/>· <a target='_blank' rel='noopener noreferrer' href='https://youtu.be/sqhoFEWHWfM?si=RfWSVIaOmMpQtxpL'>赛车游戏的交互视频</a><br/><br/><strong>致谢:</strong><br/>· jjying、LXM、一言一语",
  },
  methods: {
    innerModal(e) {
      e.stopPropagation();
    },
    toggleLang() {
      this.lang = this.lang === 'en' ? 'cn' : 'en';
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      if (this.darkMode) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    },
    setP(percentage) {
      const clamped = Math.max(0, Math.min(1, percentage));
      animateScrollTo(progressToScrollY(clamped), getScrollDuration());
    },
    openModal(type, idx = 0) {
      this.modalType = type;
      this.currentImageIndex = idx;
      this.showModal = true;
    },
    openAbout() {
      this.modalContent = this.aboutContent;
      this.openModal('text');
    }
  }
});

let isScrolling = false;
let scrollAnimFrame = null;

function getNodePositions() {
  return d.corners.map((corner) => (corner.st + corner.ed) / 2);
}

function getScrollMax() {
  return body.scrollHeight - window.innerHeight;
}

function progressToScrollY(progress) {
  return progress * getScrollMax();
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function getScrollDuration() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 150 : 500;
}

/**
 * 根据进度 p 获取当前节点索引（与 updateScrollDistance 一致，交界取后一段）
 */
function getCurrentNodeIndex(p) {
  let index = 0;
  d.corners.forEach((corner, i) => {
    if (p >= corner.st && p <= corner.ed) {
      index = i;
    }
  });
  return index;
}

function animateScrollTo(targetY, duration, onComplete) {
  if (scrollAnimFrame) {
    cancelAnimationFrame(scrollAnimFrame);
    scrollAnimFrame = null;
  }

  const maxScroll = getScrollMax();
  const clampedTarget = Math.max(0, Math.min(maxScroll, targetY));
  const startY = window.scrollY;
  const delta = clampedTarget - startY;

  if (Math.abs(delta) < 1 || duration <= 0) {
    window.scrollTo(0, clampedTarget);
    updateScrollDistance();
    isScrolling = false;
    body.classList.remove("is-node-scrolling");
    if (onComplete) onComplete();
    return;
  }

  isScrolling = true;
  body.classList.add("is-node-scrolling");
  const startTime = performance.now();

  function step(now) {
    const elapsed = now - startTime;
    const t = Math.min(1, elapsed / duration);
    const y = startY + delta * easeOutCubic(t);
    window.scrollTo(0, y);
    updateScrollDistance();

    if (t < 1) {
      scrollAnimFrame = requestAnimationFrame(step);
    } else {
      window.scrollTo(0, clampedTarget);
      updateScrollDistance();
      scrollAnimFrame = null;
      isScrolling = false;
      body.classList.remove("is-node-scrolling");
      if (onComplete) onComplete();
    }
  }

  scrollAnimFrame = requestAnimationFrame(step);
}

function goToNodeIndex(index) {
  const positions = getNodePositions();
  if (index < 0 || index >= positions.length || isScrolling) return;
  animateScrollTo(progressToScrollY(positions[index]), getScrollDuration());
}

function onWheel(e) {
  if (d.showModal) return;
  if (Math.abs(e.deltaY) < 10) return;

  e.preventDefault();

  if (isScrolling) return;

  const currentIndex = getCurrentNodeIndex(d.p);
  const nextIndex = e.deltaY > 0 ? currentIndex + 1 : currentIndex - 1;
  goToNodeIndex(nextIndex);
}

/**
 * 更新滚动进度及关联状态
 */
function updateScrollDistance() {
  d.showCorner = false;
  d.showSection = false;
  d.currentCorner = null;
  
  let progress = window.scrollY / (body.scrollHeight - window.innerHeight);
  if (progress > 1) progress = 1;
  if (progress < 0) progress = 0;

  body.style.setProperty('--p', progress);
  d.p = progress;

  // 检测当前所在的节点 (Corner)
  d.corners.forEach((corner) => {
    if (progress >= corner.st && progress <= corner.ed) {
      d.showCorner = true;
      d.cornerStart = corner.st;
      d.cornerEnd = corner.ed;
      d.currentCorner = corner;
    }
  });

  // 检测当前所在的赛段 (Section)
  d.sections.forEach((section) => {
    if (progress >= section.st && progress <= section.ed) {
      d.showSection = true;
      d.sectionStart = section.st;
      d.sectionEnd = section.ed;
    }
  });
}

/**
 * 更新页面宽高比例类
 */
function updatePageHeight() {
  if (window.innerHeight < window.innerWidth) {
    body.classList.remove("vertical");
    body.classList.add("horizontal");
  } else {
    body.classList.remove("horizontal");
    body.classList.add("vertical");
  }
}

// 事件监听
window.addEventListener("wheel", onWheel, { passive: false });
window.addEventListener('scroll', updateScrollDistance);
window.addEventListener('resize', () => {
  updateScrollDistance();
  updatePageHeight();
});

window.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    d.showModal = false;
  }
});

document.addEventListener('scroll', () => {
  if (window.scrollY > 2) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});

document.querySelector('.experience-map > .inner').addEventListener('mousemove', function (event) {
  const innerRect = this.getBoundingClientRect();
  d.mX = (event.clientX - innerRect.left) / innerRect.width;
  d.mY = (event.clientY - innerRect.top) / innerRect.height;
});

// 移动端触控支持，增加节流处理
let ticking = false;
document.querySelector('.experience-map > .inner').addEventListener('touchmove', function (event) {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const innerRect = event.currentTarget.getBoundingClientRect();
      const touch = event.touches[0];
      d.mX = (touch.clientX - innerRect.left) / innerRect.width;
      d.mY = (touch.clientY - innerRect.top) / innerRect.height;
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

// 初始化执行
updateScrollDistance();
updatePageHeight();
