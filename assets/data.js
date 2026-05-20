/**
 * Experience Map Data
 * corners: 节点数据
 * sections: 赛段数据（预留）
 * bridges: 桥梁数据（预留）
 */
window.EXPERIENCE_DATA = {
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
          src: "https://img.xiliab.online/uploads/my_biye.jpg",
          author: "LLXiao",
          desc: "毕业证书。"
        },
        {
          src: "https://img.xiliab.online/uploads/my_xuewei.jpg",
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
          src: "https://img.xiliab.online/uploads/JX_jifang.jpg",
          author: "LLXiao",
          desc: "暖通机房的设计施工。"
        },
        {
          src: "https://img.xiliab.online/uploads/JX_egg.jpg",
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
          src: "https://img.xiliab.online/uploads/Say_hello.jpg",
          author: "LLXiao",
          desc: "<strong>转行</strong><br/><span style='opacity:0.7;'>用体验连接人和技术，让复杂变得自然。</span>"
        },
        {
          type: "video",
          src: "https://img.xiliab.online/uploads/模型打印演示.mp4",
          thumb: "https://img.xiliab.online/uploads/3D_print.jpg",
          desc: "<strong>3D打印操作界面</strong><br/><span style='opacity:0.7;'>这是为某品牌3D打印机设计打印界面的交互演示视频。</span>"
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
          src: "https://img.xiliab.online/uploads/ZJ_air_machine.jpg",
          author: "LLXiao",
          desc: "<strong>设计让设备更懂人心</strong><br/><span style='opacity:0.7;'>将人机交互与工业设计相结合，打造直观实用的软硬件体验。</span>"
        },
        {
          src: "https://img.xiliab.online/uploads/ZJ_logo_street.jpg",
          author: "LLXiao",
          desc: "<strong>兆晶科技</strong><br/><span style='opacity:0.7;'>一进一出，循环往复，只留下室外清新有益身心的空气。设计的这个标志反映了新风机的运作方式，也暗示着兆晶将一直守护每个家的新鲜健康空气。</span>"
        },
        {
          src: "https://img.xiliab.online/uploads/logo_clothes.jpg",
          author: "LLXiao",
          desc: "<strong>T-shirt</strong>"
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
          src: "https://img.xiliab.online/uploads/xinfeng_scene_01.jpg",
          author: "LLXiao",
          desc: "<strong>极简空气管理体验</strong><br/><span style='opacity:0.7;'>整个流程步数少、路径清晰、操作便捷，精准契合用户“想呼吸好空气，而非控制设备”的真实动机，体现出高效直观的智能产品体验设计理念。</span>"
        },
        {
          src: "https://img.xiliab.online/uploads/xinfeng_scene_02.jpg",
          author: "LLXiao",
          desc: "<strong>智能设备协同体验</strong><br/><span style='opacity:0.7;'>整体流程易理解、误操作风险低，强化了“控制权可授权、设备共管理”的家庭场景价值，体现出产品对多用户协同体验的深度考虑与贴心设计。</span>"
        },
        {
          src: "https://img.xiliab.online/uploads/xinfeng_scene_other.jpg",
          author: "LLXiao",
          desc: "<strong>场景全覆盖</strong><br/><span style='opacity:0.7;'>通过将功能模块轻量化、流程化，使用户可在不同场景下高效完成任务。</span>"
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
          src: "https://img.xiliab.online/uploads/JLM_logo.jpg",
          author: "LLXiao",
          desc: "<strong>金蓝盟商学院</strong><br/><span style='opacity:0.7;'>整体造型厚重稳健，采用立体结构强化了专业与信任感，蓝色主调凸显理性、科技与咨询属性。通过“盟”字拼音首字母“M”抽象演绎，寓意合作与联盟，既具识别性又富象征意义，兼顾品牌精神与视觉传播效果。</span>"
        },
        {
          src: "https://img.xiliab.online/uploads/JLM_donghua.gif",
          author: "LLXiao",
          desc: "<strong>品牌加载动画</strong><br/><span style='opacity:0.7;'>既保留了品牌识别度，又通过旋转与缩放的节奏变化传达出“协作流动、持续进展”的品牌精神。整体风格简洁现代，适用于企业官网或数字平台的等待场景，增强用户等待时的心理预期与品牌记忆点。</span>"
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
          src: "https://img.xiliab.online/uploads/JLM_sxy_06.jpg",
          author: "LLXiao",
          desc: "<strong>洞察体验问题</strong><br/><span style='opacity:0.7;'>识别出38个故障点、21项产品优化、260个交互问题与182个视觉改进项，结合可用性原则（如防错、易取、一致性等）进行了系统梳理，为后续设计优化提供了明确的落脚点与量化依据。</span>"
        },
        {
          src: "https://img.xiliab.online/uploads/JLM_sxy_09.jpg",
          author: "LLXiao",
          desc: "<strong>提升信息可达性与操作效率</strong><br/><span style='opacity:0.7;'>课程模块按岗位与难度分类，帮助用户精准匹配所需内容；左侧导航布局明确，增强层级感与页面掌控力；下拉答题筛选则通过位置与样式改进，提升信息查找效率与响应速度。整体设计在内容组织、导航引导和操作便捷性上实现精细化提升。</span>"
        },
        {
          src: "https://img.xiliab.online/uploads/JLM_sxy_10.jpg",
          author: "LLXiao",
          desc: "<strong>打造沉浸式学习体验</strong><br/><span style='opacity:0.7;'>界面元素简化后，整体更聚焦于核心内容，减少视觉干扰；支持区域最小化与视图切换，增强用户自主控制感。整体设计更贴近真实学习场景，极大改善了使用流畅性与学习专注度。</span>"
        },
        {
          src: "https://img.xiliab.online/uploads/JLM_sxy_11.jpg",
          author: "LLXiao",
          desc: "<strong>认知统一化设计</strong><br/><span style='opacity:0.7;'>有效降低了用户学习成本和操作误差，同时提升了设计的复用效率和系统可扩展性，为复杂业务流程提供了可控、易用的设计基础。</span>"
        },
        {
          src: "https://img.xiliab.online/uploads/JLM_sxy_12.jpg",
          author: "LLXiao",
          desc: "<strong>高参与感学习体验</strong><br/><span style='opacity:0.7;'>整体设计不仅提升了学习平台的专业感，也增强了互动性与用户黏性，体现出精细化的用户运营思维与智能化产品能力。</span>"
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
          src: "https://img.xiliab.online/uploads/3vj_introduce.jpg",
          author: "LLXiao",
          desc: "<strong>三维家</strong><br/><span style='opacity:0.7;'>一个面向家装设计行业的全链路可视化平台，融合了3D设计、户型建模、施工图生成等关键模块。</span>"
        },
        {
          src: "https://img.xiliab.online/uploads/3vj_jxw_ww.jpg",
          author: "LLXiao",
          desc: "<strong>维维</strong><br/><span style='opacity:0.7;'>吉祥物整体造型圆润亲和，采用极简拟人化风格，配合蓝色面罩与安全帽，精准传达出“专业、智能、值得信赖”的品牌形象，呼应了 3Vjia 在家装设计领域的专业定位。胸前的图纸符号直观表明其“设计助理”角色，功能感与亲和力兼具。</span>"
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
          src: "https://img.xiliab.online/uploads/3VJ_web.jpg",
          author: "LLXiao",
          desc: "<strong>专业可信、技术驱动</strong><br/><span style='opacity:0.7;'>从“产品能力”到“服务对象”，逐步构建完整的信息路径，极大降低了设计门槛，优化了从方案设计到交付的整个决策流程。</span>"
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
          src: "https://img.xiliab.online/uploads/YG_langshi_logo.jpg",
          author: "LLXiao",
          desc: "<strong>浪石</strong><br/><span style='opacity:0.7;'>以简洁几何形式巧妙融合“礁石”与“海浪”的意象，左稳右动，寓意稳固基础上的持续创新。橙色赋予科技感与活力，整体设计现代、富有张力，具备良好的识别性与适配性。</span>"
        },
        {
          src: "https://img.xiliab.online/uploads/YG_banner.jpg",
          author: "LLXiao",
          desc: "<strong>银光科技</strong><br/><span style='opacity:0.7;'>一家专注于私域流量管理和企业数字化营销的科技公司。其核心产品矩阵涵盖SaaS、PaaS平台和增值服务，旨在帮助企业实现高效的客户获取、运营和转化。</span>"
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
          src: "https://img.xiliab.online/uploads/YG_wl_16.jpg",
          author: "LLXiao",
          desc: "<strong>以用户为中心的客户营销全流程体验设计</strong><br/><span style='opacity:0.7;'>从获客、沟通到成交的完整路径，具体分析了每一阶段的关键任务、用户行为及不同角色（后台、销售、客户）的互动模式。同时，针对每阶段的用户痛点，明确提出了有针对性的产品优化机会。</span>"
        },
        {
          src: "https://img.xiliab.online/uploads/YG_wl_18.jpg",
          author: "LLXiao",
          desc: "<strong>设计目标与策略定义</strong><br/><span style='opacity:0.7;'>设计的核心目标——提升沟通效率与签单率，并围绕这一目标制定了三大设计策略：重构信息架构提升内容发现性，优化页面布局简化操作流程，以及引入智能技术功能增强沟通有效性。</span>"
        },
        {
          src: "https://img.xiliab.online/uploads/YG_wl_22.jpg",
          author: "LLXiao",
          desc: "<strong>设计验证成果</strong><br/><span style='opacity:0.7;'>产品设计在实际业务环境中的成功落地，有效验证了设计目标的实现。</span>"
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
          src: "https://img.xiliab.online/uploads/YG_jq_home.jpg",
          author: "LLXiao",
          desc: "<strong>打造更智能、更高效的SCRM产品</strong><br/><span style='opacity:0.7;'>告别传统的一对一销售瓶颈，全面洞察客户需求，自动生成多条优质线索并智能分配给合适的销售人员，轻松实现转化效果最大化。产品具备完善的线索管理和销售分析功能，让营销决策精准可控。界面设计直观友好，数据洞察深入全面，助力企业高效实现销售增长。</span>"
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
          src: "https://img.xiliab.online/uploads/YG_lanmu_01.jpg",
          author: "LLXiao",
          desc: "<strong>转化率提高13%，员工工作量减少38%，涉及用户超十万</strong><br/><span style='opacity:0.7;'>不少行业营销都十分依靠私域流量的运营。随着抖音/快手等短视频软件流行，通过视频提高成交转化成为了十分有效的手段。调研中不少中小公司使用人工进行重复繁琐的邀客看视频转化。导致没有足够的精力针对高价值客户进行销售转化。这给了我们一个独特的机会。</span>"
        },
        {
          src: "https://img.xiliab.online/uploads/YG_lanmu_02.jpg",
          author: "LLXiao",
          desc: "<strong>目标一：提高观看视频客户数；目标二：提高视频观看完播率；目标三：提高成交转化率</strong><br/><span style='opacity:0.7;'>企业在私域流量运营、内容分发与客户管理方面存在传统营销手段枯燥、数据割裂、重复工作量大等难题。通过对整个流程的跟进分析，，只有少部分是因为重复添加无效和跟进不及时导致的流失，主要在视频观看阶段的流失。原因包括开播提醒不够，视频未成体系化及枯燥无味，客户没有耐心看完。而转化率也有很大提升空间。</span>"
        },
        {
          src: "https://img.xiliab.online/uploads/YG_lanmu_03.jpg",
          author: "LLXiao",
          desc: "<strong>统一设置，自动化流程，规范化工作，降低员工工作量和培训成本</strong><br/><span style='opacity:0.7;'>我们把员工当前最繁琐重复的工作通过提前设置，极大程度地降低员工工作量。让员工仅仅只需要点击发送就可完成会员的激活邀约回访工作。话术的统一减少了员工培训的成本和时间，避免了出错的可能性。</span>"
        },
        {
          src: "https://img.xiliab.online/uploads/YG_lanmu_04.jpg",
          author: "LLXiao",
          desc: "<strong>视频观看完整率提升21%，成交转化率增加10%</strong><br/><span style='opacity:0.7;'>设计的产品显著降低了员工的工作量，提升了会员的转化率。</span>"
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
          src: "https://img.xiliab.online/uploads/keep_going_myself.jpg",
          author: "LLXiao",
          desc: "<strong>keep going</strong>",
        },
      ],
    },
  ]
};
