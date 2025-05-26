let rootURL = document.baseURI
var root = document.querySelector(':root')
const body = document.querySelector('body');
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  root.classList.add('dark')
}


var d = new Vue({
  el: '#app',
  data: {
    p: 0,
    w: 1000,
    h: 1004,
    mX: 0,
    mY: 0,
    lang: lang,
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
    sections: [
      /*{
        st: 0.0,
        ed: 0.143,
        x: 0.1,
        y: 0.1,
        h: "c",
        v: "m",
        ch: "\u8d5b\u6bb51",
        en: "Section 1",
        de: "Abschnitt 1"
      },
      {
        st: 0.857,
        ed: 1.0,
        x: 0.394,
        y: 0.568,
        h: "c",
        v: "m",
        ch: "\u8d5b\u6bb57",
        en: "Section 7",
        de: "Abschnitt 7"
      }*/
    ],

    bridges: [
      /*{
        stx: 0.1,
        sty: 0.1,
        edx: 0.115,
        edy: 0.12,
        pt: 0.015,
        x: 0.108,
        y: 0.11,
        h: "c",
        v: "m",
        ch: "\u6865\u68811"
      },
      {
        stx: 0.1,
        sty: 0.367,
        edx: 0.115,
        edy: 0.387,
        pt: 0.957,
        x: 0.108,
        y: 0.377,
        h: "c",
        v: "m",
        ch: "\u6865\u68813"
      }*/
    ],
    corners: [
      {
        st: 0.0,
        ed: 0.01,
        x: 0.051,
        y: 0.349,
        h: "c",
        v: "m",
        ch: "2012毕业",
        en: "广工大学",
        de: "广州",
        more: "2012年，我从广东工业大学材料与能源学院毕业了。",
        imgs: [
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/Certificate_of_Graduation.jpg",
            author: "LLXiao",
            desc: "毕业证书。"
          },
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/Certificate_of_Bachelors_Degree.jpg",
            author: "LLXiao",
            desc: "学士学位证书。"
          },
        ],
      },
      {
        st: 0.01,
        ed: 0.15,
        x: 0.178,
        y: 0.40,
        h: "c",
        v: "m",
        ch: "机械设计师",
        en: "子律节能公司",
        de: "广州",
        more: "通过仪器实地建模获取数据，在UG中导入数据后进行设计，然后完成生产出图，跟进产品生产确保质量，获取数据进行优化迭代。",
        imgs: [
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/3a31b41f_fb6c_4c76.jpg",
            author: "LLXiao",
            desc: "暖通机房的设计施工。"
          },
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/cb4bd329_3ee8_4046.jpg",
            author: "LLXiao",
            desc: "自动化养殖设备的设计生产。"
          },
        ],
      },
      {
        st: 0.15,
        ed: 0.22,
        x: 0.316,
        y: 0.794,
        h: "c",
        v: "m",
        ch: "UI设计师",
        en: "朗岸文化公司",
        de: "广州",
        more: "负责产品界面视觉设计、组件规范制定与多端适配，并与产品和开发团队协作推动设计高效落地与持续优化。",
        imgs: [
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/Say_hello.jpg",
            author: "LLXiao",
            desc: "转行成为UI&UX设计师。<br/>用体验连接人和技术，让复杂变得自然。"
          },
          {
            type: "video",
            src: "https://cdn.jsdelivr.net/gh/xiliab/my_video@main/%E6%A8%A1%E5%9E%8B%E6%89%93%E5%8D%B0%E6%BC%94%E7%A4%BA.mp4",
            thumb: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/Model_Library_Empty_State.jpg", // 你的视频封面
            desc: "这是为某品牌3D打印机设计打印界面的交互演示视频。"
          }
        ],
      },
      {
        st: 0.22,
        ed: 0.3,
        x: 0.33,
        y: 0.864,
        h: "c",
        v: "m",
        ch: "高级UI设计师",
        en: "兆晶科技公司",
        de: "广州",
        more: "负责用户体验设计及视觉设计工作，完成产品流程规划与视觉设计方案，提升用户满意度；负责新风机设备手机端控制界面的设计，提升用户交互体验和产品易用性。",
        imgs: [
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/ad_air_machine.jpg",
            author: "LLXiao",
            desc: "公司设计制造销售的产品类别之一。"
          },
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/Zhaojin_logo_22_09_56.jpg",
            author: "LLXiao",
            desc: "当时为兆晶科技设计的logo。"
          },
        ],
      },
      {
        st: 0.3,
        ed: 0.365,
        x: 0.67,
        y: 0.97,
        h: "c",
        v: "m",
        ch: "智能家居-新风",
        en: "兆晶科技公司",
        de: "广州",
        more: `
一款智能控制新风机的微信小程序，实时监测家中空气质量，一键开启新风机，快速换入新鲜洁净空气。<br/>
核心功能：<br/>
• 实时监测：精准显示家中PM2.5、CO₂等空气质量数据。<br/>
• 远程控制：随时开关新风机，调节风量，定制清新家居环境。<br/>
• 多人共享：邀请家人或朋友共同管理设备，便捷又安心。<br/>
呼吸健康，一手掌控！
`,
        imgs: [
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/xinfeng_scene_01.jpg",
            author: "LLXiao",
            desc: "新风小程序的使用场景一，从使用场景梳理交互流程，确保用户在使用过程中不会困惑复杂。"
          },
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/xinfeng_scene_02.jpg",
            author: "LLXiao",
            desc: "新风小程序的使用场景二，从使用场景梳理交互流程，确保用户在使用过程中不会困惑复杂。"
          },
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/xinfeng_scene_other.jpg",
            author: "LLXiao",
            desc: "新风小程序的其它使用场景。"
          },
        ],
      },
      {
        st: 0.365,
        ed: 0.4,
        x: 0.55,
        y: 0.75,
        h: "c",
        v: "m",
        ch: "设计经理",
        en: "金蓝盟公司",
        de: "广州",
        more: "主导产品的前期战略定位、需求分析，提供高质量的交互方案和界面视觉；负责团队的管理工作及新人的培训，确保团队设计产出的质量和进度。",
        imgs: [
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/JLM_logo.jpg",
            author: "LLXiao",
            desc: "为金蓝盟公司设计的logo.<br/>金蓝盟集团成立于1998年，目前六大核心业务板块：培训、咨询、在线商学院、数字化转型、上市助推和资本投资。<br/>"
          },
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/JLM_gif_smooth.gif",
            author: "LLXiao",
            desc: "金蓝盟公司logo加载动画。"
          },
        ],
      },
      {
        st: 0.4,
        ed: 0.435,
        x: 0.45,
        y: 0.635,
        h: "c",
        v: "m",
        ch: "企业学习-商学院",
        en: "金蓝盟公司",
        de: "广州",
        more: `
为企业管理者、创业者及职场人士提供实战型商业知识服务，助力提升管理能力与商业决策水平。<br/>
核心功能：<br/>
• 体系化课程：覆盖管理、营销、财务、领导力等领域。<br/>
• 灵活形式：在线学习+线下集训，适配不同场景需求。<br/>
• 企业内训：根据团队痛点定制培训内容。<br/>
• 咨询顾问：提供行业解决方案与实战指导。`,
        imgs: [
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/JLM_sxy_06.jpg",
            author: "LLXiao",
            desc: "金蓝盟商学院"
          },
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/JLM_sxy_09.jpg",
            author: "LLXiao",
            desc: "金蓝盟商学院"
          },
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/JLM_sxy_10.jpg",
            author: "LLXiao",
            desc: "金蓝盟商学院"
          },
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/JLM_sxy_11.jpg",
            author: "LLXiao",
            desc: "金蓝盟商学院"
          },
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/JLM_sxy_12.jpg",
            author: "LLXiao",
            desc: "金蓝盟商学院"
          },
        ],
      },
      {
        st: 0.435,
        ed: 0.51,
        x: 0.7,
        y: 0.665,
        h: "c",
        v: "m",
        ch: "业务线设计负责人",
        en: "三维家公司",
        de: "广州",
        more: "带领10人左右的UED团队，负责公司平台产品部的设计工作提升团队设计效率和质量；与业务部门紧密合作，优化产品设计流程和用户体验；推动团队的跨职能协作，提升整体设计质量和交付效果。",
        imgs: [
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/3vj_introduce.jpg",
            author: "LLXiao",
            desc: "三维家公司介绍。"
          },
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/3vj_jxw_ww.jpg",
            author: "LLXiao",
            desc: "团队为三维家设计的吉祥物。"
          },
        ],
      },
      {
        st: 0.51,
        ed: 0.58,
        x: 0.76,
        y: 0.44,
        h: "c",
        v: "m",
        ch: "家装-三维家",
        en: "三维家公司",
        de: "广州",
        more: `
为用户提供的家装设计软件获取与在线设计入口，集成了从初级到专业设计师的核心工具与上手通道。<br/>
核心功能：<br/>
• 与“方案库”、“课程学习”、“素材模型”、“找设计师”等全流程服务打通，帮助用户从灵感—设计—落地高效协作。<br/>
• 支持在线新建或上传已有效果图，快速生成可360°全景的3D方案。<br/>
• 面向家装设计师和 DIY 用户，门槛低、操作简便。`,
        imgs: [
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/3vj_jxw_ww.jpg",
            author: "LLXiao",
            desc: "团队为三维家设计的吉祥物。"
          },
          
        ],
      },
      {
        st: 0.58,
        ed: 0.72,
        x: 0.84,
        y: 0.3,
        h: "c",
        v: "m",
        ch: "设计负责人",
        en: "银光科技公司",
        de: "广州",
        more: "主导公司产品线的用户体验设计工作，涵盖客户端、手机端后台三大用户端的交互设计，建立组件规范提升产品一致性和用户体验；完成企业微信赋能企业营销平台设计，助力超百家企业客户实现业务提升，获得市场广泛认可。",
        imgs: [
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/YG_langshi_logo.jpg",
            author: "LLXiao",
            desc: "为公司浪石品牌设计的一个logo。"
          },
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/YG_banner.jpg",
            author: "LLXiao",
            desc: "银光是一家专注于私域流量管理和企业数字化营销的科技公司。<br/>其核心产品矩阵涵盖SaaS、PaaS平台和增值服务，旨在帮助企业实现高效的客户获取、运营和转化。"
          },
        ],
      },
      {
        st: 0.72,
        ed: 0.8,
        x: 0.78,
        y: 0.04,
        h: "c",
        v: "m",
        ch: "全渠道私域-微聊",
        en: "银光科技公司",
        de: "广州",
        more: "一款面向企业的全渠道在线客服与客户关系管理（CRM）系统，旨在帮助企业高效整合和管理来自多个平台的客户沟通与运营。<br/>核心功能：<br/>• 全平台统一客服，多渠道接入，PC/手机都能用。<br/>• 客户标签与精准营销，自动生成画像，支持个性化运营。<br/>• 智能回复与数据分析，自动回复、记录保存、客服绩效全掌握。",
        imgs: [
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/YG_wl_16.jpg",
            author: "LLXiao",
            desc: "微聊"
          },
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/YG_wl_18.jpg",
            author: "LLXiao",
            desc: "微聊"
          },
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/YG_wl_22.jpg",
            author: "LLXiao",
            desc: "微聊"
          },
        ],
      },
      {
        st: 0.8,
        ed: 0.88,
        x: 0.56,
        y: 0.18,
        h: "c",
        v: "m",
        ch: "SCRM-金桥",
        en: "银光科技公司",
        de: "广州",
        more: "面向私域电商的SCRM系统，整合多平台数据，支持自动化运营和企微侧边栏展示客户资料，提升转化效率。<br/>核心功能：<br/>• 统一管理微信、抖音等平台客户，全流程跟进。<br/>• 自动化营销、订单与云仓联动，高效转化。<br/>• 侧边栏实时显示客户信息，助力精准服务。",
        imgs: [
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/YG_langshi_logo.jpg",
            author: "LLXiao",
            desc: "为公司浪石品牌设计的一个logo。"
          },
        ],
      },
      {
        st: 0.88,
        ed: 0.94,
        x: 0.33,
        y: 0.06,
        h: "c",
        v: "m",
        ch: "录播-栏目系统",
        en: "银光科技公司",
        de: "广州",
        more: "一款私域内容运营工具，通过自动邀请、行为追踪和数据分析，提升客户激活与转化效率。<br/>核心功能：<br/>• 根据客户来源，定向推送绑定链接与欢迎语。<br/>• 记录观看与互动，自动打标签，实现精准触达。<br/>• 支持企微侧边栏查看客户数据，辅助高效跟进与转化。",
        imgs: [
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/YG_langshi_logo.jpg",
            author: "LLXiao",
            desc: "为公司浪石品牌设计的一个logo。"
          },
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/YG_langshi_logo.jpg",
            author: "LLXiao",
            desc: "为公司浪石品牌设计的一个logo。"
          },
        ],
      },
      {
        st: 0.94,
        ed: 0.999,
        x: 0.18,
        y: 0.22,
        h: "c",
        v: "m",
        ch: "人生在继续，体验永不停",
        en: "未知",
        de: "广州",
        more: "交互不止在屏幕上，人生亦是界面。一念起，万相动。<br/>每个当下，都是一次设计；每段经历，都是一种体验。<br/>用设计的心，去过生活；用生活的感，去做设计。",
        imgs: [
          {
            src: "https://cdn.jsdelivr.net/gh/xiliab/my-images@main/keep_going_myself.jpg",
            author: "LLXiao",
            desc: "keep going",
          },
        ],
      },

    ],
    aboutContent: "网页设计 & 开发：LLXiao</a><br/><br/><strong>联系我:</strong><br/>· 邮箱：xiliab@icloud.com<br/>· <a target='_blank' href='https://youtu.be/sqhoFEWHWfM?si=RfWSVIaOmMpQtxpL'>赛车游戏的交互视频</a><br/><br/><strong>致谢:</strong><br/>· jjying、LXM、一言一语",
    modalContent: "",
    modalType: "text"
  },
  methods: {
    innerModal: function (e) {
      e.stopPropagation()
    },
    toggleLang() {
      this.lang = this.lang === 'en' ? 'cn' : 'en'
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode
      if (this.darkMode == true) {
        root.classList.add("dark")
      }
      else {
        root.classList.remove("dark")
      }
    },
    setP: function (percentage) {
      this.p = percentage
      window.scrollTo(0, (body.scrollHeight - window.innerHeight) * percentage);
      updateScrollDistance()
    },
    openModal: function (type, media = null) {
      this.modalType = type
      if (type == 'text') {
        this.modalContent = this.aboutContent
      }
      // 图片
      if (type == 'image' || (media && media.type === 'image')) {
        this.modalContent = "<img src='" + media.src + "' style='max-width:100%;max-height:60vh;'/>";
        // 加一段介绍
        if (media.desc) {
          this.modalContent += `<div class="modal-desc">${media.desc}</div>`;
        }
        if (media.url) {
          this.modalContent += "<div class='source-in-modal'>@<a href='" + media.url + "' target='_blank'>" + media.author + "</a></div>"
        }
      }
      // 视频
      if (type == 'video' || (media && media.type === 'video')) {
        this.modalContent = `
      <video controls autoplay style="max-width:100%;max-height:60vh;background:#000;">
        <source src="${media.src}" type="video/mp4">
        您的浏览器不支持视频播放。
      </video>
    `;
        // 视频介绍文字
        if (media.desc) {
          this.modalContent += `<div class="modal-desc">${media.desc}</div>`;
        }
        if (media.url) {
          this.modalContent += "<div class='source-in-modal'>@<a href='" + media.url + "' target='_blank'>" + media.author + "</a></div>"
        }
      }
      this.showModal = true
    }

  }
})


document.addEventListener('scroll', function (e) {
  if (window.scrollY > 2) {
    document.body.classList.add("scrolled")
  }
  else {
    document.body.classList.remove("scrolled")
  }
});


function updateScrollDistance() {
  d.showCorner = false
  d.showSection = false
  d.showCornerDesc = false
  d.currentCorner = null
  let progress = window.scrollY / (body.scrollHeight - window.innerHeight)
  if (progress > 1) {
    progress = 1
  }
  body.style.setProperty('--p', progress)
  d.p = progress
  d.corners.forEach((corner, i) => {
    if (progress > corner.st && progress < corner.ed) {
      d.showCorner = true
      d.cornerStart = corner.st
      d.cornerEnd = corner.ed
      d.currentCorner = corner
    }
  })
  d.sections.forEach((section, i) => {
    if (progress > section.st && progress < section.ed) {
      d.showSection = true
      d.sectionStart = section.st
      d.sectionEnd = section.ed
    }
  })
}

function updatePageHeight() {
  if (window.innerHeight < window.innerWidth) {
    body.classList.remove("vertical")
    body.classList.add("horizontal")
  }
  else {
    body.classList.remove("horizontal")
    body.classList.add("vertical")
  }
}

window.addEventListener('scroll', updateScrollDistance)
window.addEventListener('resize', function () {
  updateScrollDistance()
  updatePageHeight()
})

updateScrollDistance()
updatePageHeight()

window.addEventListener("keyup", function (e) {
  if (e.key === "Escape") {
    d.showModal = false
  }
})

document.querySelector('.experience-map > .inner').addEventListener('mousemove', function (event) {
  const innerRect = this.getBoundingClientRect();
  d.mX = (event.clientX - innerRect.left) / innerRect.width
  d.mY = (event.clientY - innerRect.top) / innerRect.height
});
