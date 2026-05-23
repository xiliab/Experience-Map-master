/**
 * Experience Map Main Logic
 * 负责 Vue 根实例初始化、滚动逻辑及事件绑定
 */

const root = document.querySelector(':root');
const body = document.querySelector('body');
const MAP_TILT_MAX = 8;
const MAP_PERSPECTIVE = 900;
let mapContainer = null;
let mapInner = null;
let rings = [];

function getMapTiltMax() {
  return body.classList.contains('vertical') ? 5 : MAP_TILT_MAX;
}

function updateMapTilt(mx, my) {
  if (!mapInner) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    mapInner.style.transform = '';
    return;
  }
  const tiltMax = getMapTiltMax();
  const rotY = (mx - 0.5) * tiltMax * 2;
  const rotX = (my - 0.5) * -tiltMax * 2;
  mapInner.style.transform =
    `perspective(${MAP_PERSPECTIVE}px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
}

function resetMapTilt() {
  if (typeof d !== 'undefined') {
    d.mX = 0.5;
    d.mY = 0.5;
  }
  updateMapTilt(0.5, 0.5);
}

let prevMx = 0.5, prevMy = 0.5;
let ringIndex = 0;
let lastRippleTs = 0;
let mouseStopTimer = null;
let rippleTimers = [];

function triggerRipple() {
  if (!rings.length) return;
  const el = rings[ringIndex % rings.length];
  ringIndex++;
  el.classList.remove('play');

  // 计算涟漪偏移方向（跟随地图倾斜）
  const shiftX = (d.mX - 0.5) * 200; // 视差位移强度，基于 viewBox 单位
  const shiftY = (d.mY - 0.5) * 200;
  el.style.setProperty('--rx', `${shiftX}px`);
  el.style.setProperty('--ry', `${shiftY}px`);

  // 以鼠标的对称点为原点放大，实现涟漪朝向鼠标滑落的张力感
  const originX = (1 - d.mX) * 100;
  const originY = (1 - d.mY) * 100;
  el.style.transformOrigin = `${originX}% ${originY}%`;

  void el.getBoundingClientRect();
  el.classList.add('play');
}

function clearRippleTimers() {
  rippleTimers.forEach(t => clearTimeout(t));
  rippleTimers = [];
}

let lastClientX = null;
let lastClientY = null;

function setMapPointerFromEvent(event) {
  // 屏蔽由于 DOM 改变引起的幻影 mousemove 事件
  if (event.clientX === lastClientX && event.clientY === lastClientY) {
    return;
  }
  lastClientX = event.clientX;
  lastClientY = event.clientY;

  const rect = mapContainer.getBoundingClientRect();
  const mx = (event.clientX - rect.left) / rect.width;
  const my = (event.clientY - rect.top) / rect.height;
  d.mX = Math.max(0, Math.min(1, mx));
  d.mY = Math.max(0, Math.min(1, my));
  updateMapTilt(d.mX, d.mY);

  const vel = Math.abs(mx - prevMx) + Math.abs(my - prevMy);
  prevMx = mx;
  prevMy = my;

  const isHoveringNode = event.target.closest('.corner-name') !== null;

  // 只要走到这里，说明鼠标发生了物理位移，清除之前的定时器（移动中不触发）
  if (mouseStopTimer) clearTimeout(mouseStopTimer);
  clearRippleTimers();

  // 只有当有实质性移动，且不在节点上时，才设定“停下”检测定时器
  if (!isHoveringNode && vel > 0.001) {
    mouseStopTimer = setTimeout(() => {
      // 停下 150ms 后，连续触发 3 次涟漪，间隔不同
      triggerRipple();
      rippleTimers.push(setTimeout(triggerRipple, 600));
      rippleTimers.push(setTimeout(triggerRipple, 1500));
    }, 150);
  }
}

function initMapTilt() {
  mapContainer = document.querySelector('.experience-map');
  mapInner = document.querySelector('.experience-map > .inner');
  rings = Array.from(document.querySelectorAll('.ripple-ring'));
  if (!mapContainer || !mapInner) return;

  let mouseTicking = false;
  mapContainer.addEventListener('mousemove', function(e) {
    if (!mouseTicking) {
      window.requestAnimationFrame(() => {
        setMapPointerFromEvent(e);
        mouseTicking = false;
      });
      mouseTicking = true;
    }
  }, { passive: true });
  mapContainer.addEventListener('mouseleave', resetMapTilt);

  let ticking = false;
  mapContainer.addEventListener('touchmove', function (event) {
    if (!event.touches.length) return;
    if (!ticking) {
      const touch = event.touches[0];
      window.requestAnimationFrame(() => {
        setMapPointerFromEvent(touch);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  mapContainer.addEventListener('touchend', resetMapTilt);
  mapContainer.addEventListener('touchcancel', resetMapTilt);
}

// 默认浅色模式
// 如果需要，可以重新启用跟随系统：if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) { root.classList.add('dark'); }

const d = new Vue({
  el: '#app',
  data: {
    p: 0,
    w: 1000,
    h: 1004,
    mX: 0,
    mY: 0,
    showModal: false,
    showAllCornerNames: false,
    darkMode: false, // 默认浅色模式
    showCorner: false,
    currentCorner: null,
    scrollDistance: 0,
    cornerStart: 0,
    cornerEnd: 0,
    currentImageIndex: 0,
    modalContent: "",
    modalType: "",
    corners: window.EXPERIENCE_DATA.corners,
    aboutContent: "网页设计与开发：LLXiao<br/><br/><strong>联系</strong><br/>· 邮箱：xiliab@icloud.com<br/><br/><strong>关于本站</strong><br/>· 这是一个以交互式体验地图形式呈现的个人作品集。<br/>· SVG 赛道轨迹由我亲自绘制，覆盖 2012 年至今的 14 个成长节点。<br/>· 本站为纯静态页面，基于 Vue 2 + PHP 构建，未使用第三方建站工具。<br/><br/><strong>致谢</strong><br/>· 感谢 jjying、LXM、一言一语一直以来的支持与鼓励。",
  },
  methods: {
    innerModal(e) {
      e.stopPropagation();
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
  const positions = d.corners.map((corner) => (corner.st + corner.ed) / 2);
  positions.push(1.0); // Include the very end for the "Restart" button screen
  return positions;
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
  let minDiff = Infinity;
  let closestIndex = 0;
  const positions = getNodePositions();
  positions.forEach((pos, i) => {
    const diff = Math.abs(pos - p);
    if (diff < minDiff) {
      minDiff = diff;
      closestIndex = i;
    }
  });
  return closestIndex;
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

  const descEl = e.target.closest('.desc');
  if (descEl) {
    const isAtTop = descEl.scrollTop === 0;
    const isAtBottom = descEl.scrollTop + descEl.clientHeight >= descEl.scrollHeight - 1;
    const canScroll = descEl.scrollHeight > descEl.clientHeight;
    
    if (canScroll) {
      if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
        // Boundary reached -> intercept to map
      } else {
        // Has space to scroll -> allow native
        return;
      }
    }
  }

  if (Math.abs(e.deltaY) < 10) return;
  e.preventDefault();
  if (isScrolling) return;

  const currentIndex = getCurrentNodeIndex(d.p);
  const nextIndex = e.deltaY > 0 ? currentIndex + 1 : currentIndex - 1;
  goToNodeIndex(nextIndex);
}

let touchStartY = 0;
let touchMode = null;
let initialDescEl = null;

window.addEventListener("touchstart", (e) => {
  touchStartY = e.touches[0].clientY;
  initialDescEl = e.target.closest('.desc');
  touchMode = null;
}, { passive: true });

window.addEventListener("touchmove", (e) => {
  if (d.showModal) return;
  
  const currentY = e.touches[0].clientY;
  const deltaY = touchStartY - currentY;
  
  // Decide scroll mode on first significant move
  if (touchMode === null && Math.abs(deltaY) > 1) {
    if (initialDescEl) {
      const isAtTop = initialDescEl.scrollTop <= 0;
      const isAtBottom = initialDescEl.scrollTop + initialDescEl.clientHeight >= initialDescEl.scrollHeight - 1;
      const canScroll = initialDescEl.scrollHeight > initialDescEl.clientHeight;
      
      if (canScroll) {
        if ((isAtTop && deltaY < 0) || (isAtBottom && deltaY > 0)) {
          touchMode = 'map_scroll';
        } else {
          touchMode = 'desc_scroll';
        }
      } else {
        touchMode = 'map_scroll';
      }
    } else {
      touchMode = 'map_scroll';
    }
  }
  
  if (touchMode === 'desc_scroll') {
    touchStartY = currentY;
    return;
  }
  
  if (touchMode === 'map_scroll') {
    e.preventDefault();
    
    if (isScrolling) return;
    
    const swipeThreshold = 20; // 触发翻页的滑动阈值
    if (Math.abs(deltaY) > swipeThreshold) {
      const currentIndex = getCurrentNodeIndex(d.p);
      const nextIndex = deltaY > 0 ? currentIndex + 1 : currentIndex - 1;
      goToNodeIndex(nextIndex);
      // 重置起始点，避免动画结束后原地重复触发
      touchStartY = currentY;
    }
  }
}, { passive: false });

/**
 * 更新滚动进度及关联状态
 */
let lastActiveCorner = null;

function updateScrollDistance() {
  d.showCorner = false;
  d.currentCorner = null;
  
  let progress = window.scrollY / (body.scrollHeight - window.innerHeight);
  if (progress > 1) progress = 1;
  if (progress < 0) progress = 0;

  body.style.setProperty('--p', progress);
  d.p = progress;

  // Mascot Follow & Rotate Logic
  const trackPath = document.getElementById('track');
  const mascotEl = document.getElementById('mascot');
  if (trackPath && mascotEl) {
    if (!window.cachedTrackLength) {
      window.cachedTrackLength = trackPath.getTotalLength();
    }
    const totalLength = window.cachedTrackLength;
    const currentLength = progress * totalLength;
    const pt = trackPath.getPointAtLength(currentLength);
    
    const prevPt = trackPath.getPointAtLength(Math.max(0, currentLength - 2));
    const nextPt = trackPath.getPointAtLength(Math.min(totalLength, currentLength + 2));
    const dx = nextPt.x - prevPt.x;
    
    if (dx < -0.1) {
      window._mascotScaleX = -1;
    } else if (dx > 0.1) {
      window._mascotScaleX = 1;
    }
    const scaleX = window._mascotScaleX || 1;
    
    mascotEl.style.transform = `translate(${pt.x}px, ${pt.y}px) scaleX(${scaleX})`;
  }

  // 检测当前所在的节点 (Corner)
  let foundCorner = null;
  d.corners.forEach((corner) => {
    if (progress >= corner.st && progress <= corner.ed) {
      d.showCorner = true;
      d.cornerStart = corner.st;
      d.cornerEnd = corner.ed;
      d.currentCorner = corner;
      foundCorner = corner;
    }
  });

  if (lastActiveCorner !== foundCorner) {
    lastActiveCorner = foundCorner;
    const descEl = document.querySelector('.desc');
    if (descEl) descEl.scrollTop = 0;
  }

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
let scrollTicking = false;
window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    window.requestAnimationFrame(() => {
      updateScrollDistance();
      scrollTicking = false;
    });
    scrollTicking = true;
  }
}, { passive: true });
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

// 初始化执行
updateScrollDistance();
updatePageHeight();
initMapTilt();
