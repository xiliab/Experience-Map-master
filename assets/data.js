/**
 * Experience Map Data
 * corners: 节点数据
 *   ch: 职位/阶段标题
 *   company: 公司或学校名称
 *   de: 城市
 *   more: 详情 HTML
 */
window.EXPERIENCE_DATA = {
  corners: [
    {
      st: 0.0,
      ed: 0.01,
      x: 0.5150,
      y: 0.8830,
      h: "l",
      v: "m",
      ch: "启程 · 广东工业大学",
      company: "广东工业大学",
      de: "广州",
      more: "2012 年，我从广东工业大学材料与能源学院毕业，获工学学士学位。四年理工科训练塑造了我的系统思维能力，也为后来转向用户体验设计埋下了种子——用工程思维理解技术，用设计思维触达人心。",
      imgs: [
        {
          src: "https://img.xiliab.online/uploads/my_biye.jpg",
          author: "LLXiao",
          desc: "广东工业大学工学学士毕业证书"
        },
        {
          src: "https://img.xiliab.online/uploads/my_xuewei.jpg",
          author: "LLXiao",
          desc: "广东工业大学工学学士学位证书"
        },
      ],
    },
    {
      st: 0.01,
      ed: 0.15,
      x: 0.5820,
      y: 0.6880,
      h: "r",
      v: "m",
      ch: "机械设计师",
      company: "子律节能技术有限公司",
      de: "广州",
      more: "以实地测绘数据为基础，在 UG 中完成三维建模与工程出图，跟进生产全流程以确保制造精度，并通过数据驱动的迭代持续优化设计方案。这段工程实践让我深入理解了产品从概念到落地的完整链路，也积累了宝贵的跨领域协作经验。",
      stats: [
        { val: "2", unit: "类", label: "结构设计", icon: "<img src='assets/结构设计.webp' alt='结构设计' loading='lazy' decoding='async' />" },
        { val: "2", unit: "项", label: "项目落地", icon: "<img src='assets/项目落地.webp' alt='项目落地' loading='lazy' decoding='async' />" },
        { val: "全流程", unit: "", label: "产品优化", icon: "<img src='assets/产品优化.webp' alt='产品优化' loading='lazy' decoding='async' />" }
      ],
    },
    {
      st: 0.15,
      ed: 0.22,
      x: 0.7240,
      y: 0.5510,
      h: "c",
      v: "t",
      ch: "UI设计师",
      company: "朗岸文化公司",
      de: "广州",
      more: "负责产品界面视觉设计、组件规范制定与多端适配，与产品和开发团队协作推动设计方案高效落地。这一阶段我系统性地建立了自己的设计方法论——从视觉执行走向体验思维。",
      stats: [
        { val: "3", unit: "款", label: "页面设计", icon: "<img src='assets/页面设计.webp' alt='页面设计' loading='lazy' decoding='async' />" },
        { val: "1", unit: "套", label: "组件规范", icon: "<img src='assets/组件规范.webp' alt='组件规范' loading='lazy' decoding='async' />" },
        { val: "多端", unit: "", label: "交付效率", icon: "<img src='assets/交付效率.webp' alt='交付效率' loading='lazy' decoding='async' />" }
      ],
    },
    {
      st: 0.22,
      ed: 0.3,
      x: 0.8800,
      y: 0.4420,
      h: "l",
      v: "m",
      ch: "高级UI设计师",
      company: "兆晶科技公司",
      de: "广州",
      more: "主导兆晶科技全线产品的用户体验设计与视觉方案，完成从产品流程规划到高保真输出的全流程设计。其中新风机手机端控制界面，将复杂设备操作转化为直观交互，显著提升了产品易用性与用户满意度。同时深度参与了品牌视觉体系的构建，包括品牌标志设计与 VI 规范制定。",
      stats: [
        { val: "3", unit: "项", label: "核心项目", icon: "<img src='assets/核心项目.webp' alt='核心项目' loading='lazy' decoding='async' />" },
        { val: "1", unit: "套", label: "设计体系", icon: "<img src='assets/设计体系.webp' alt='设计体系' loading='lazy' decoding='async' />" },
        { val: "2", unit: "端", label: "软硬件互通", icon: "<img src='assets/软硬件互通.webp' alt='软硬件互通' loading='lazy' decoding='async' />" }
      ],
    },
    {
      st: 0.3,
      ed: 0.365,
      x: 0.8920,
      y: 0.3140,
      h: "r",
      v: "m",
      ch: "C端体验",
      company: "移动端与智能硬件体验",
      de: "广州",
      more: "面向消费者真实生活场景的体验设计，强调低学习成本、即时反馈与自然操作路径。通过移动端控制、家庭共享与状态可视化，让复杂设备能力转化为用户能直接感知的日常价值。",
      projects: [
        {
          title: "智能家居 · 新风系统",
          subtitle: "一款智能控制新风机的微信小程序，让用户实时监测家中空气质量，远程调控新风机，一键引入新鲜空气。",
          company: "兆晶科技公司",
          meta: ["C端", "智能硬件", "微信小程序"],
          thumb: "https://img.xiliab.online/uploads/xinfeng_scene_01.jpg",
          article: `
一款智能控制新风机的微信小程序，让用户实时监测家中空气质量，远程调控新风机，一键引入新鲜空气。<br/><br/>
核心能力：<br/>
• 实时环境监测：精准展示 PM2.5、CO₂ 等关键空气质量指标。<br/>
• 远程智能控制：随时随地开关设备、调节风量，定制舒适家居环境。<br/>
• 多人协作共享：邀请家人共同管理，兼顾便捷与安心。<br/><br/>
设计亮点在于将复杂设备控制逻辑转化为极简操作路径，让用户关注的是「呼吸好空气」而非「操控一台机器」。
`,
          media: [
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
      ],
    },
    {
      st: 0.365,
      ed: 0.4,
      x: 0.7900,
      y: 0.2400,
      h: "r",
      v: "m",
      ch: "设计经理",
      company: "金蓝盟公司",
      de: "广州",
      more: "主导产品前期的战略定位与需求分析，输出高质量的交互方案与界面视觉；同时负责设计团队管理与新人培养，把控设计产出质量与项目进度。从执行者到管理者，我开始用更宏观的视角理解产品价值与设计策略的关系。",
      stats: [
        { val: "4", unit: "项", label: "部门协作", icon: "<img src='assets/部门协作.webp' alt='部门协作' loading='lazy' decoding='async' />" },
        { val: "2", unit: "类", label: "设计交付", icon: "<img src='assets/设计交付.webp' alt='设计交付' loading='lazy' decoding='async' />" },
        { val: "1", unit: "支", label: "团队培养", icon: "<img src='assets/团队培养.webp' alt='团队培养' loading='lazy' decoding='async' />" }
      ],
    },
    {
      st: 0.435,
      ed: 0.51,
      x: 0.8000,
      y: 0.0500,
      h: "c",
      v: "b",
      ch: "业务线设计负责人",
      company: "三维家公司",
      de: "广州",
      more: "带领约十人的 UED 团队，负责公司平台产品部的全盘设计工作。通过优化团队工作流与设计规范，系统性提升设计效率与输出质量；与业务部门深度协作，打通产品设计流程中的关键瓶颈，推动用户体验成为产品决策的核心要素之一。",
      stats: [
        { val: "1", unit: "套", label: "流程优化", icon: "<img src='assets/流程优化.webp' alt='流程优化' loading='lazy' decoding='async' />" },
        { val: "1", unit: "条", label: "产品迭代", icon: "<img src='assets/产品迭代.webp' alt='产品迭代' loading='lazy' decoding='async' />" },
        { val: "全盘", unit: "", label: "质量把控", icon: "<img src='assets/质量把控.webp' alt='质量把控' loading='lazy' decoding='async' />" }
      ],
    },
    {
      st: 0.51,
      ed: 0.62,
      x: 0.4700,
      y: 0.1780,
      h: "c",
      v: "t",
      ch: "B端产品",
      company: "企业级复杂系统体验",
      de: "广州",
      more: "面向企业组织、专业设计师、销售与客服团队的复杂系统体验设计，重点处理多角色协作、流程效率、信息架构、数据决策与业务增长之间的关系。",
      projects: [
        {
          title: "企业学习 · 商学院",
          subtitle: "为企业管理者与职场人士打造实战型商业知识服务平台，覆盖课程学习、内训定制与咨询服务。",
          company: "金蓝盟公司",
          meta: ["B端", "企业学习", "平台体验"],
          thumb: "https://img.xiliab.online/uploads/JLM_sxy_06.jpg",
          article: `
为企业管理者与职场人士打造实战型商业知识服务平台。<br/><br/>
核心能力：<br/>
• 体系化课程矩阵覆盖管理、营销、财务、领导力等核心领域。<br/>
• 灵活学习模式：在线课程 + 线下集训，适配多样化场景需求。<br/>
• 企业内训定制：针对团队痛点定制化培训方案。<br/>
• 咨询顾问服务：提供行业解决方案与实战指导。<br/><br/>
该项目中我系统梳理了 38 个故障点、21 项产品优化机会、260 个交互问题及 182 个视觉改进项，为后续迭代提供了明确的量化依据。`,
          media: [
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
          title: "家装设计 · 三维家",
          subtitle: "为家装设计行业打造的全链路可视化平台，集成 3D 设计、户型建模、施工图生成等核心功能。",
          company: "三维家公司",
          meta: ["B端", "设计工具", "3D可视化"],
          thumb: "https://img.xiliab.online/uploads/3VJ_web.jpg",
          article: `
为家装设计行业打造的全链路可视化平台，集成 3D 设计、户型建模、施工图生成等核心功能。<br/><br/>
核心能力：<br/>
• 与方案库、课程学习、素材模型、设计师对接等全流程服务打通，覆盖从灵感获取到设计落地的完整链路。<br/>
• 支持在线新建或上传已有方案，快速生成可 360° 全景浏览的 3D 设计方案。<br/>
• 面向专业设计师与 DIY 用户双向适配，操作门槛低、出图效率高。<br/><br/>
通过优化信息架构与任务路径，大幅降低了设计工具的使用门槛，让用户更关注创意本身而非工具操作。`,
          media: [
            {
              src: "https://img.xiliab.online/uploads/3VJ_web.jpg",
              author: "LLXiao",
              desc: "<strong>专业可信、技术驱动</strong><br/><span style='opacity:0.7;'>从“产品能力”到“服务对象”，逐步构建完整的信息路径，极大降低了设计门槛，优化了从方案设计到交付的整个决策流程。</span>"
            },
          ],
        },
        {
          title: "全渠道私域 · 微聊",
          subtitle: "面向企业的全渠道在线客服与客户关系管理系统，帮助企业整合多平台客户沟通与运营。",
          company: "银光科技公司",
          meta: ["B端", "CRM", "客服系统"],
          thumb: "https://img.xiliab.online/uploads/YG_wl_16.jpg",
          article: "面向企业的全渠道在线客服与客户关系管理系统，帮助企业高效整合多平台客户沟通与运营。<br/><br/>核心能力：<br/>• 全平台统一客服接入，PC / 移动端全覆盖。<br/>• 客户标签画像与精准营销，支持自动化分层运营。<br/>• 智能回复与数据分析，全链路跟踪客服绩效。<br/><br/>从获客、沟通到成交的完整路径梳理，帮助企业在每一个触点上优化客户体验。",
          media: [
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
          title: "SCRM · 金桥",
          subtitle: "面向私域电商的社交客户关系管理系统，整合多平台数据并支持自动化运营。",
          company: "银光科技公司",
          meta: ["B端", "SCRM", "私域电商"],
          thumb: "https://img.xiliab.online/uploads/YG_jq_home.jpg",
          article: "面向私域电商的社交客户关系管理系统，整合多平台数据，支持自动化运营与企业微信侧边栏客户资料实时展示。<br/><br/>核心能力：<br/>• 统一管理微信、抖音等多平台客户资源，全流程跟进闭环。<br/>• 自动化营销引擎联动订单与云仓，高效驱动转化。<br/>• 企业微信侧边栏实时呈现客户画像，赋能精准服务决策。",
          media: [
            {
              src: "https://img.xiliab.online/uploads/YG_jq_home.jpg",
              author: "LLXiao",
              desc: "<strong>打造更智能、更高效的 SCRM 产品</strong><br/><span style='opacity:0.7;'>全面洞察客户需求，自动生成优质线索并智能分配至销售团队，实现转化效果最大化。产品具备完善的线索管理与销售分析功能，让营销决策精准可控。界面直观友好，数据洞察深入全面，助力企业高效实现销售增长。</span>"
            },
          ],
        },
      ],
    },
    {
      st: 0.62,
      ed: 0.72,
      x: 0.1800,
      y: 0.3050,
      h: "l",
      v: "t",
      ch: "设计负责人",
      company: "银光科技公司",
      de: "广州",
      more: "主导银光科技全线产品的用户体验设计，覆盖客户端、手机端与管理后台三大用户端。建立跨平台组件规范体系，提升产品一致性与设计交付效率。其中企业微信赋能营销平台已助力超百家企业客户实现业务增长，获得市场广泛认可。",
      stats: [
        { val: "1", unit: "套", label: "设计体系", icon: "<img src='assets/设计体系.webp' alt='设计体系' loading='lazy' decoding='async' />" },
        { val: "100", unit: "+", label: "业务增长", icon: "<img src='assets/业务增长.webp' alt='业务增长' loading='lazy' decoding='async' />" },
        { val: "全线", unit: "", label: "产品策略", icon: "<img src='assets/产品策略.webp' alt='产品策略' loading='lazy' decoding='async' />" }
      ],
    },
    {
      st: 0.72,
      ed: 0.88,
      x: 0.2380,
      y: 0.6350,
      h: "l",
      v: "m",
      ch: "AI / 自动化",
      company: "智能运营与流程自动化",
      de: "广州",
      more: "围绕重复运营任务、客户行为追踪与数据辅助决策的自动化体验设计。这里重点展示如何把繁琐流程拆解为可配置、可追踪、可复用的产品能力。",
      projects: [
        {
          title: "内容运营 · 栏目系统",
          subtitle: "面向私域场景的内容运营工具，通过自动邀约、行为追踪与数据分析，提升客户激活与转化效率。",
          company: "银光科技公司",
          meta: ["AI / 自动化", "私域运营", "数据追踪"],
          thumb: "https://img.xiliab.online/uploads/YG_lanmu_01.jpg",
          article: "面向私域场景的内容运营工具，通过自动邀约、行为追踪与数据分析，提升客户激活与转化效率。<br/><br/>核心能力：<br/>• 渠道定向推送：根据客户来源自动发送绑定链接与个性化欢迎语。<br/>• 行为智能追踪：记录观看与互动行为，自动打标签实现精准触达。<br/>• 企业微信侧边栏实时客户数据展示，辅助高效跟进与转化。<br/><br/>成果：视频观看完整率提升 21%，成交转化率提升 10%，员工工作量降低 38%。",
          media: [
            {
              src: "https://img.xiliab.online/uploads/YG_lanmu_01.jpg",
              author: "LLXiao",
              desc: "<strong>转化率提高13%，员工工作量减少38%，涉及用户超十万</strong><br/><span style='opacity:0.7;'>不少行业营销都十分依靠私域流量的运营。随着抖音/快手等短视频软件流行，通过视频提高成交转化成为了十分有效的手段。调研中不少中小公司使用人工进行重复繁琐的邀客看视频转化。导致没有足够的精力针对高价值客户进行销售转化。这给了我一个独特的机会。</span>"
            },
            {
              src: "https://img.xiliab.online/uploads/YG_lanmu_02.jpg",
              author: "LLXiao",
              desc: "<strong>目标一：提高观看视频客户数；目标二：提高视频观看完播率；目标三：提高成交转化率</strong><br/><span style='opacity:0.7;'>企业在私域流量运营、内容分发与客户管理方面存在传统营销手段枯燥、数据割裂、重复工作量大等难题。通过对整个流程的跟进分析，只有少部分是因为重复添加无效和跟进不及时导致的流失，主要在视频观看阶段的流失。原因包括开播提醒不够，视频未成体系化及枯燥无味，客户没有耐心看完。而转化率也有很大提升空间。</span>"
            },
            {
              src: "https://img.xiliab.online/uploads/YG_lanmu_03.jpg",
              author: "LLXiao",
              desc: "<strong>统一设置，自动化流程，规范化工作，降低员工工作量和培训成本</strong><br/><span style='opacity:0.7;'>我将员工最繁琐重复的工作通过预设配置自动化，极大降低了员工的工作量。员工仅需点击发送即可完成会员的激活、邀约与回访。话术的统一减少了培训成本与出错率。</span>"
            },
            {
              src: "https://img.xiliab.online/uploads/YG_lanmu_04.jpg",
              author: "LLXiao",
              desc: "<strong>视频观看完整率提升21%，成交转化率增加10%</strong><br/><span style='opacity:0.7;'>该产品显著降低了员工工作量，提升了会员转化率。</span>"
            },
          ],
        },
      ],
    },
    {
      st: 0.88,
      ed: 0.94,
      x: 0.3700,
      y: 0.7600,
      h: "l",
      v: "m",
      ch: "人生在继续，体验永不停",
      company: "下一段旅程",
      de: "广州",
      more: "交互不止于屏幕，人生亦是界面。一念起，万相动。<br/>每个当下，都是一次设计；每段经历，都是一种体验。<br/>用设计的心去生活，用生活的感去做设计。",
      imgs: [
        {
          src: "https://img.xiliab.online/uploads/keep_going_myself.jpg",
          author: "LLXiao",
          desc: "<strong>继续前行</strong>",
        },
      ],
    },
  ]
};
