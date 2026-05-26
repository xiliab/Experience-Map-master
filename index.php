<?PHP
header("Cache-Control: no-cache");
require_once("env.php");

$debug = !$isProduction;
$ext = $debug ? "" : ".min";

// 缓存策略：基于文件修改时间的 MD5 哈希
$assets_files = $debug
  ? ['assets/main.css', 'assets/data.js', 'assets/image-modal.js', 'assets/main.js']
  : ['assets/main.min.css', 'assets/data.min.js', 'assets/image-modal.min.js', 'assets/main.min.js'];
$brand_files = ['assets/logo.svg', 'assets/fav.png'];
$hash_str = "";
foreach ($assets_files as $f) {
  if (file_exists(__DIR__ . '/' . $f)) {
    $hash_str .= filemtime(__DIR__ . '/' . $f);
  }
}
$v = substr(md5($hash_str), 0, 8);
$brand_hash_str = "";
foreach ($brand_files as $f) {
  if (file_exists(__DIR__ . '/' . $f)) {
    $brand_hash_str .= filemtime(__DIR__ . '/' . $f);
  }
}
$brandV = substr(md5($brand_hash_str), 0, 8);
$lastEditTime = $v; // 兼容旧变量名

$extraHead = "";
$canonicalUrl = rtrim($siteUrl, '/') . '/';
$pageTitle = "LLXiao的体验地图 | 用户体验设计作品集与B端复杂系统案例";
$pageDescription = "LLXiao的用户体验设计作品集，呈现14年从机械工程到B端复杂系统、SCRM、AI托管、智能硬件与内容运营自动化的设计实践。";
$ogImage = "https://img.xiliab.online/uploads/screenshot.jpg";
$profileKeywords = "LLXiao,用户体验设计,UX设计,B端产品设计,SCRM,AI托管,智能硬件,广州,作品集";
$caseList = [
  [
    "name" => "智能家居 · 新风系统",
    "company" => "兆晶",
    "description" => "面向家庭空气管理场景，将新风设备参数与控制流程转化为清晰、低学习成本的移动端体验。",
    "keywords" => ["C端体验", "智能硬件", "微信小程序", "空气管理"],
    "image" => "https://img.xiliab.online/uploads/xinfeng_scene_01.jpg"
  ],
  [
    "name" => "企业学习 · 商学院",
    "company" => "金蓝盟",
    "description" => "面向企业学习平台，系统识别体验问题并沉淀量化迭代依据，支持课程与学习流程优化。",
    "keywords" => ["B端产品", "企业学习", "平台体验", "可用性审查"],
    "image" => "https://img.xiliab.online/uploads/JLM_sxy_06.jpg"
  ],
  [
    "name" => "家装设计 · 三维家",
    "company" => "三维家",
    "description" => "面向家装设计工具，梳理从方案创建到展示交付的任务路径，支持专业设计流程连续推进。",
    "keywords" => ["B端产品", "设计工具", "3D可视化", "任务路径"],
    "image" => "https://img.xiliab.online/uploads/3VJ_web.jpg"
  ],
  [
    "name" => "全渠道私域 · 微聊",
    "company" => "银光",
    "description" => "面向私域运营团队，组织客户触达、会话跟进与销售协作路径，提升多角色协作效率。",
    "keywords" => ["私域运营", "企业微信", "销售协作", "客户触达"],
    "image" => "https://img.xiliab.online/uploads/YG_wl_16.jpg"
  ],
  [
    "name" => "SCRM · 金桥",
    "company" => "银光",
    "description" => "围绕客户画像、线索管理与销售分析建立统一信息框架，支持私域运营团队持续跟进。",
    "keywords" => ["SCRM", "客户画像", "线索管理", "销售分析"],
    "image" => "https://img.xiliab.online/uploads/YG_jq_home.jpg"
  ],
  [
    "name" => "AI托管 · 智能客服接待",
    "company" => "银光",
    "description" => "面向企业客服接待场景，将权限说明、AI回复机制与人工接管组织为可控、可信的智能服务体验。",
    "keywords" => ["AI产品", "智能客服", "人机协同", "可信AI"],
    "image" => "https://img.xiliab.online/uploads/ai-tuoguan-access-overview.jpg"
  ],
  [
    "name" => "内容运营 · 栏目系统",
    "company" => "银光",
    "description" => "面向私域内容运营场景，通过自动邀约与行为追踪，推动视频完播率提升21%、员工工作量降低38%。",
    "keywords" => ["AI自动化", "私域运营", "数据追踪", "内容运营"],
    "image" => "https://img.xiliab.online/uploads/YG_lanmu_01.jpg"
  ],
  [
    "name" => "继续前行 · 体验永不停",
    "company" => "下一段旅程",
    "description" => "围绕个人成长、体验观察与持续实践，沉淀跨领域设计判断并指向下一段旅程。",
    "keywords" => ["个人成长", "体验观察", "持续实践", "设计方法"],
    "image" => "https://img.xiliab.online/uploads/keep_going_myself.jpg"
  ],
  [
    "name" => "加载动画 · 等待中的品牌反馈",
    "company" => "金蓝盟",
    "description" => "通过动效节奏、状态反馈与品牌识别，让系统等待时间更可感知、更有秩序。",
    "keywords" => ["动效设计", "加载反馈", "品牌体验", "状态反馈"],
    "image" => "https://img.xiliab.online/uploads/JLM_donghua.gif"
  ],
  [
    "name" => "企业IP角色 · 品牌人格延展",
    "company" => "三维家",
    "description" => "围绕企业品牌识别与传播场景，设计可延展、可应用的 IP 角色形象。",
    "keywords" => ["品牌设计", "IP角色", "视觉延展", "品牌识别"],
    "image" => "https://img.xiliab.online/uploads/3vj_jxw_ww.jpg"
  ],
  [
    "name" => "3D打印机操作界面 · 设备交互反馈",
    "company" => "三维家",
    "description" => "面向3D打印设备操作场景，组织状态可视化、流程引导与打印过程反馈。",
    "keywords" => ["设备交互", "3D打印", "操作界面", "过程反馈"],
    "image" => "https://img.xiliab.online/uploads/3D_print.jpg"
  ],
];
$itemListElements = [];
foreach ($caseList as $idx => $case) {
  $itemListElements[] = [
    "@type" => "ListItem",
    "position" => $idx + 1,
    "item" => [
      "@type" => "CreativeWork",
      "@id" => $canonicalUrl . "#case-" . ($idx + 1),
      "name" => $case["name"],
      "description" => $case["description"],
      "creator" => ["@id" => $canonicalUrl . "#person"],
      "sourceOrganization" => [
        "@type" => "Organization",
        "name" => $case["company"]
      ],
      "about" => $case["keywords"],
      "keywords" => implode(",", $case["keywords"]),
      "image" => $case["image"],
      "inLanguage" => "zh-Hans"
    ]
  ];
}
$structuredData = [
  "@context" => "https://schema.org",
  "@graph" => [
    [
      "@type" => "Person",
      "@id" => $canonicalUrl . "#person",
      "name" => "LLXiao",
      "jobTitle" => "用户体验设计师",
      "url" => $canonicalUrl,
      "email" => "mailto:xiliab@icloud.com",
      "address" => [
        "@type" => "PostalAddress",
        "addressLocality" => "广州",
        "addressCountry" => "CN"
      ],
      "knowsAbout" => ["用户体验设计", "B端复杂系统", "SCRM", "AI托管", "智能硬件体验", "私域运营自动化", "设计系统"]
    ],
    [
      "@type" => "WebSite",
      "@id" => $canonicalUrl . "#website",
      "url" => $canonicalUrl,
      "name" => "LLXiao的体验地图",
      "description" => $pageDescription,
      "inLanguage" => "zh-Hans",
      "publisher" => ["@id" => $canonicalUrl . "#person"]
    ],
    [
      "@type" => "ProfilePage",
      "@id" => $canonicalUrl . "#profile",
      "url" => $canonicalUrl,
      "name" => $pageTitle,
      "description" => $pageDescription,
      "isPartOf" => ["@id" => $canonicalUrl . "#website"],
      "mainEntity" => ["@id" => $canonicalUrl . "#person"],
      "primaryImageOfPage" => [
        "@type" => "ImageObject",
        "url" => $ogImage
      ],
      "about" => ["用户体验设计作品集", "B端产品设计", "AI产品设计", "广州设计师"]
    ],
    [
      "@type" => "ItemList",
      "@id" => $canonicalUrl . "#case-list",
      "name" => "LLXiao 用户体验设计项目案例",
      "numberOfItems" => count($caseList),
      "itemListElement" => $itemListElements
    ]
  ]
];
$structuredDataJson = json_encode($structuredData, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT | JSON_HEX_TAG | JSON_HEX_AMP | JSON_HEX_APOS | JSON_HEX_QUOT);

echo
  <<<HTML
<html lang="zh-Hans">
	<head>
      <style>
    .bridge-name,
    .section-name {
      display: none !important;
    }
  [v-cloak],.hidden-area{display: none;}
  </style>
    <meta charset="UTF-8">
    <title>{$pageTitle}</title>
    <meta name="robots" content="index, follow"/>
    <meta name="author" content="LLXiao" />
    <meta name="description" content="{$pageDescription}"/>
    <meta name="keywords" content="{$profileKeywords}"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
    <meta name="format-detection" content="telephone=no">
    <meta name="theme-color" content="#f4efe3">

    <link rel="canonical" href="{$canonicalUrl}"/>
    <meta property="og:url" content="{$canonicalUrl}"/>
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="LLXiao的体验地图">
    <meta property="og:locale" content="zh_CN">
    <meta property="og:title" content="{$pageTitle}">
    <meta property="og:description" content="{$pageDescription}">
    <meta property="og:image" content="{$ogImage}">

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{$pageTitle}" />
    <meta name="twitter:description" content="{$pageDescription}" />
    <meta name="twitter:site" content="@xiliab" />
    <meta name="twitter:creator" content="@xiliab" />
    <meta name="twitter:image" content="{$ogImage}" />
    <script type="application/ld+json">
{$structuredDataJson}
    </script>

    <link rel="stylesheet" href="{$assetsDir}/main{$ext}.css?v={$v}"/>
    {$extraHead}
    <link rel="stylesheet" href="{$assetsDir}/sm/result.css"/>
    <link rel="icon" href="{$assetsDir}/fav.png?v={$brandV}">
    <link rel="apple-touch-icon" href="{$assetsDir}/fav.png?v={$brandV}">

	</head>
<body>
<section class="seo-summary" aria-label="LLXiao用户体验设计作品集摘要">
  <h2>LLXiao 用户体验设计作品集</h2>
  <p>LLXiao 是来自广州的用户体验设计师，经历覆盖机械设计、UI设计、设计管理、B端复杂系统、C端智能硬件、SCRM、AI托管和内容运营自动化。</p>
  <p>体验地图包含 11 个职业与能力节点，项目案例包括智能家居新风系统、企业学习商学院、家装设计三维家、全渠道私域微聊、SCRM金桥、AI托管智能客服接待、内容运营栏目系统、继续前行、加载动画、企业IP角色、3D打印机操作界面。</p>
  <p>公开项目经历采用公司简称：子律、朗岸、兆晶、金蓝盟、三维家、银光。广东工业大学作为教育经历保留完整名称。</p>
  <p>量化成果包括商学院体验审查梳理 38 个故障点、21 项产品优化机会、260 个交互问题及 182 个视觉改进项；栏目系统推动视频观看完整率提升 21%、员工工作量降低 38%。</p>
</section>
<div id="app" :class="[showAllCornerNames ? 'show-all-corners' : '']">
  <main class="experience-map">
    <div class="inner">
      <svg viewBox="0 0 2163 2552" class="ripple-svg" width="10000px" height="10040px" xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;">
        <g class="ripple-ring r1"><use href="#track"/></g>
        <g class="ripple-ring r2"><use href="#track"/></g>
        <g class="ripple-ring r3"><use href="#track"/></g>
        <g class="ripple-ring r4"><use href="#track"/></g>
        <g class="ripple-ring r5"><use href="#track"/></g>
        <g class="ripple-ring r6"><use href="#track"/></g>
      </svg>
      <img src="{$assetsDir}/广州.webp" class="map-bg" alt="广州体验地图背景" fetchpriority="high" />
      <svg viewBox="0 0 2163 2552" class="main-svg" width="10000px" height="10040px" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <path d="M1117.0,2377.0 L1190.0,2394.0 1220.0,2474.0 1302.0,2493.0 1379.0,2546.0 1451.0,2502.0 1551.0,2533.0 1646.0,2451.0 1630.0,2280.0 1551.0,2110.0 1480.0,2067.0 1445.0,1968.0 1361.0,1938.0 1258.0,1784.0 1258.0,1665.0 1240.0,1575.0 1353.0,1506.0 1426.0,1515.0 1583.0,1411.0 1775.0,1483.0 1897.0,1506.0 1910.0,1396.0 2015.0,1371.0 2035.0,1333.0 1993.0,1285.0 2007.0,1081.0 1979.0,1016.0 2029.0,1016.0 2143.0,1075.0 2157.0,1000.0 2114.0,870.0 2062.0,775.0 1873.0,685.0 1775.0,585.0 1786.0,526.0 1687.0,458.0 1750.0,404.0 2089.0,224.0 2054.0,146.0 2077.0,89.0 2035.0,13.0 1836.0,6.0 1646.0,6.0 1543.0,95.0 1296.0,162.0 1277.0,206.0 1314.0,296.0 1240.0,411.0 1153.0,382.0 1117.0,336.0 992.0,365.0 796.0,296.0 709.0,445.0 616.0,469.0 584.0,544.0 433.0,639.0 433.0,725.0 34.0,760.0 6.0,815.0 52.0,948.0 169.0,994.0 215.0,1158.0 98.0,1320.0 78.0,1411.0 147.0,1531.0 328.0,1575.0 433.0,1575.0 456.0,1665.0 594.0,1763.0 639.0,1860.0 647.0,1948.0 796.0,1991.0 757.0,2043.0 998.0,2162.0 1064.0,2146.0 1147.0,2265.0 Z" id="track"/>
        </defs>

        <use href="#track" class="base-layer-1"/>
        <use href="#track" class="base-layer-2"/>

        <g class="corner" :class=" showCorner ? 'show' : 'hidden' " :style=" '--st:' + cornerStart + ';--ed:' + cornerEnd" >
          <use href="#track" class="path"></use>
        </g>

        <use href="#track" class="active-layer"/>

        <g id="mascot">
          <image href="{$assetsDir}/mascot.png" x="-180" y="-180" width="360" height="360" />
        </g>
      </svg>


      <div v-for="c in corners" class="corner-name" :class="[ (c.st < p) || showAllCornerNames ? 'show' : 'hidden', c.h, c.v, c.st < p && p < c.ed ? 'highlighted' : '' ]" :style=" '--x:' + c.x + ';--y:' + c.y " @click="setP( (c.st + c.ed) / 2)">
        <div>
            <div>
              {{c.ch}}
            </div>
        </div>
      </div>

      <div class="mid " v-cloak>

        <div class="msg" v-if="p == 0">
          <div class="inner" v-if="p == 0" v-cloak>
            <p class="title-font msg-title">LLXiao的体验地图</p>
            <p>我相信，设计的本质不是让界面更好看，而是让人与技术的关系更自然。从机械工程到用户体验，这条非典型的路让我始终带着系统思维做设计——在复杂的 B 端产品里，每一个操作路径的优化，都可能意味着一个真实用户在工作中少了一次停顿。</p>
            <div class="indicator">
              <div>向下滚动开始体验</div>
              <svg viewBox="0 0 100 100" class="scroll-arrow">
                <path d="M10 20l40 30l40 -30"/>
                <path d="M10 60l40 30l40 -30"/>
              </svg>
            </div>
          </div>
        </div>

        <div class="title-font miles"  v-if="p != 0">
          <span v-if="p > 0">{{ (p * 13.88).toFixed(2)}}</span><span v-else>0.00</span> <em>年</em>
        </div>
      </div>
    </div>
  </main>
  <aside class="desc skew-p">
    <div class="logo">
      <div class="inner skew-n">
        <img class="brand-mark" src="{$assetsDir}/logo.svg?v={$brandV}" alt="" aria-hidden="true"/>
        <h1 class="title-font">LLXiao<span> 的体验地图</span></h1>
      </div>
    </div>
    <div class="corner-info">
      <div class="inner" v-if="currentCorner && p > 0" v-cloak>
        <div class="primary skew-n title-font" v-if="currentCorner.ch" :class="currentCorner.ch == currentCorner.nk ? 'qt' : ''" v-cloak>{{currentCorner.ch}}</div>
        <div class="nickname qt skew-n title-font" v-if="currentCorner.nk && currentCorner.ch != currentCorner.nk" v-cloak>{{currentCorner.nk}}</div>
        <div class="secondary skew-n" v-if="currentCorner.company" v-cloak>
          <span class="extra" v-if="currentCorner.de">
            <svg viewBox="0 0 120 140" class="skew-p" xmlns="http://www.w3.org/2000/svg">
    <path d="M115.990776,56.8152656 L115.992733,56.8152656 C115.45668,25.1484255 89.233155,-0.26159701 57.5062893,0.00203294923 C25.7011677,0.267615723 0,26.0857764 0,57.8951721 C0,86.3047176 18.9085625,114.192862 47.008271,132.715307 C53.6874053,137.118904 62.3757577,137.083753 69.0529355,132.676251 C97.4754493,113.915562 116.479875,85.5763178 115.990776,56.8152656 Z M57.9993009,84.4612607 C42.9291864,84.4612607 30.7114965,72.2659341 30.7114965,57.2234039 C30.7114965,42.1808737 42.9291864,29.985547 57.9993009,29.985547 C73.0694154,29.985547 85.2871053,42.1808737 85.2871053,57.2234039 C85.2871053,72.2659341 73.0694154,84.4612607 57.9993009,84.4612607 Z" 
          fill="#999" />
  </svg> {{currentCorner.de}}
          </span>
          <span class="extra" v-if="currentCorner.company">
            <svg viewBox="0 0 150 140" class="skew-p" xmlns="http://www.w3.org/2000/svg">
  <path d="M142.876625,52.0583481 L82.9854299,3.53409445 C77.1689389,-1.17803148 68.8291171,-1.17803148 63.0126261,3.53409445 L3.12143062,52.0583481 C-3.02359888,57.0375268 0.512563304,66.9397643 8.43636597,66.9397643 L9.96436129,66.9397643 C13.1408808,66.9397643 15.7866844,69.3606553 16.0549584,72.5111034 L20.05574,119.618817 C20.6506084,126.620242 26.5312519,132 33.5899682,132 L112.411976,132 C119.468748,132 125.351336,126.620242 125.946204,119.618817 L129.946986,72.5111034 C130.21526,69.3606553 132.861063,66.9397643 136.035639,66.9397643 L137.563634,66.9397643 C145.487437,66.9397643 149.023599,57.0375268 142.878569,52.0583481 L142.876625,52.0583481 Z M91.9376162,115.063439 C91.9376162,118.039722 89.5134303,120.450937 86.5254801,120.450937 L59.6378171,120.450937 C56.6479229,120.450937 54.225681,118.037787 54.225681,115.063439 L54.225681,96.8361231 C54.225681,86.469446 62.6685355,78.0650259 73.0826206,78.0650259 C83.4967057,78.0650259 91.9395602,86.469446 91.9395602,96.8361231 L91.9395602,115.063439 L91.9376162,115.063439 Z"
    fill="#999" /> </svg> {{currentCorner.company}}
          </span>
        </div>
        <div class="more skew-n" v-if="currentCorner.more" v-html="currentCorner.more"></div>
      </div>
      <div class="inner desc-msg" v-if="p == 1" v-cloak>
        <div class="ending skew-n" v-if="p > 0.999">
          人生继续 体验不停
          <div class='btn skew-p' @click="setP(0.001)">
            <div class='skew-n title-font'>重新体验</div>
          </div>
        </div>
      </div>
      <div class="stats-row" v-if="currentCorner && currentCorner.stats" v-cloak>
        <div class="stat-item skew-n" v-for="(stat, idx) in currentCorner.stats" :key="idx">
          <div class="stat-icon" v-html="stat.icon"></div>
          <div class="stat-info">
            <div class="stat-value title-font">{{ stat.val }}<span class="stat-unit">{{ stat.unit }}</span></div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
          <div class="stat-divider" v-if="idx !== currentCorner.stats.length - 1"></div>
        </div>
      </div>
      <div class="thumbs project-thumbs" v-if="currentCorner && currentCorner.projects" v-cloak>
        <div class="thumb project-thumb" v-for="(project, idx) in currentCorner.projects" :key="project.title" @click="openProjectModal(idx)">
  <img
    class="skew-n"
    :src="project.thumb"
    :alt="project.title"
    loading="lazy"
    decoding="async"
  />
  <div class="project-thumb-title skew-n">{{ project.title }}</div>
</div>

</div>
      <div class="thumbs" v-else-if="currentCorner && currentCorner.imgs" v-cloak>
        <div class="thumb" v-for="(img, idx) in currentCorner.imgs" :key="img.src">
  <img
    v-if="!img.type || img.type === 'image'"
    class="skew-n"
    :src="img.thumb || img.src"
    :alt="img.desc || currentCorner.ch"
    loading="lazy"
    decoding="async"
    @click="openModal('image', idx)"
  />
  <div v-else-if="img.type === 'video'" aria-label="视频作品预览">
    <img
      class="skew-n"
      :src="img.thumb || 'https://cdn.jsdelivr.net/gh/xiliab/my-images@main/video_default_thumb.jpg'"
      :alt="img.desc || currentCorner.ch"
      loading="lazy"
      decoding="async"
      @click="openModal('video', idx)"
    />
    <span aria-hidden="true">▶</span>
  </div>
</div>

</div>

    </div>
    <div class="controls">

      <div class="inner skew-n">

      <div class="footer-content">
        <p class="record-text" style="text-align: center; font-size: 14px; color: #999; white-space: nowrap; margin: 0;">
          <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">粤ICP备2025426060号</a> 
          <span style="margin: 0 6px;">|</span>
          <a href="https://beian.mps.gov.cn/#/query/webSearch?code=44011802001137" rel="noopener noreferrer" target="_blank" style="display: inline-flex; align-items: center; gap: 2px;">
            <img src="https://img.xiliab.online/uploads/备案图标.png" style="width: 14px; height: 14px; vertical-align: middle;"> <span class="hide-vertical">粤公网安备</span>44011802001137号</a>
        </p>
      </div>

        <div @click="openAbout" role="button" class="link">
          关于本站
        </div>

        <div class="toggle-group" :class=" showAllCornerNames ? 'on' : 'off' " @click="showAllCornerNames = !showAllCornerNames">
          <span>所有工作</span>
          <div class="toggle"></div>
        </div>

        <div class="toggle-group" :class=" darkMode ? 'on' : 'off' " @click="toggleDarkMode()">
          <span>深色模式</span>
          <div class="toggle"></div>
        </div>

      </div>
    </div>
  </aside>

  <div class="modal text" :class="[showModal && modalType == 'text' ? 'show' : '']" @click="showModal = false">
    <div class="inner" @click.stop>
      <div class="modal-content skew-n" v-html="modalContent" @click="showModal = false"></div>
      <div class="modal-close skew-n" @click="showModal = false">
        <svg viewBox="0 0 30 30">
          <circle cx="15" cy="15" r="12"/>
          <path d="M10 10L20 20M20 10L10 20"/>
        </svg>
      </div>
    </div>
  </div>


<!-- 图片/视频弹窗（image-modal 组件） -->
<image-modal
  v-if="showModal && (modalType === 'image' || modalType === 'video' || modalType === 'project')"
  :images="currentCorner ? (currentCorner.projects || currentCorner.imgs) : []"
  :initial-index="currentImageIndex"
  @close="showModal = false"
></image-modal>

  <div class="all-names title-font"><template v-for="c in corners" >{{c.ch}} <template v-if="c.nk && c.ch != c.nk">{{c.nk}} </template></template> </div>
</div>
<script src='{$assetsDir}/vue-2.6.11.min.js'></script>
<script src='{$assetsDir}/data{$ext}.js?v={$v}'></script>
<script src='{$assetsDir}/image-modal{$ext}.js?v={$v}'></script>
<script src="{$assetsDir}/main{$ext}.js?v={$v}"></script>
<!-- 多余 -->
<!-- <script src="vue-2.6.11.min.js"></script> -->
<!-- <script src="main.js" defer></script> -->
</body>
</html>
HTML;
