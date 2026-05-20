<?PHP
header("Cache-Control: no-cache");
require_once("env.php");

$debug = !$isProduction;
$ext = $debug ? "" : ".min";

// 缓存策略：基于文件修改时间的 MD5 哈希
$assets_files = $debug
    ? ['assets/main.css', 'assets/data.js', 'assets/image-modal.js', 'assets/main.js']
    : ['assets/main.min.css', 'assets/data.min.js', 'assets/image-modal.min.js', 'assets/main.min.js'];
$hash_str = "";
foreach ($assets_files as $f) {
    if (file_exists(__DIR__ . '/' . $f)) {
        $hash_str .= filemtime(__DIR__ . '/' . $f);
    }
}
$v = substr(md5($hash_str), 0, 8);
$lastEditTime = $v; // 兼容旧变量名

$extraHead = "";
$canonicalUrl = rtrim($siteUrl, '/') . '/';

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
    <title>LLXiao — 体验地图 | 用户体验设计作品集</title>
    <meta name="robots" content="noodp"/>
    <meta name="author" content="LLXiao" />
    <meta name="description" content="十四年用户体验设计实践，从机械工程到B端复杂系统，用设计驱动产品价值增长。交互式地图呈现完整职业历程与作品集。"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
    <meta name="format-detection" content="telephone=no">

    <link rel="canonical" href="{$canonicalUrl}"/>
    <meta property="og:url" content="{$canonicalUrl}"/>
    <meta property="og:type" content="website">
    <meta property="og:title" content="LLXiao — 体验地图">
    <meta property="og:description" content="十四年用户体验设计实践，从机械工程到B端复杂系统，用设计驱动产品价值增长。交互式地图呈现完整职业历程与作品集。">
    <meta property="og:image" content="https://img.xiliab.online/uploads/screenshot.jpg">

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="LLXiao — 体验地图" />
    <meta name="twitter:description" content="十四年用户体验设计实践，从机械工程到B端复杂系统，用设计驱动产品价值增长。交互式地图呈现完整职业历程与作品集。" />
    <meta name="twitter:site" content="@xiliab" />
    <meta name="twitter:image" content="https://img.xiliab.online/uploads/screenshot.jpg" />

    <link rel="stylesheet" href="{$assetsDir}/main{$ext}.css?v={$v}"/>
    {$extraHead}
    <link rel="stylesheet" href="{$assetsDir}/sm/result.css"/>
    <link rel="icon" href="{$assetsDir}/fav.png">

	</head>
<body>
<div id="app" :class="[showAllCornerNames ? 'show-all-corners' : '']">
  <div class="experience-map">
    <div class="inner">
      <svg viewBox="1 0 1000 1004" class="main-svg" width="10000px" height="10040px" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <path d="
      M6,350
      Q1,363 2,368
      Q15,376.5 28,385
      Q24.5,401 21,417
      Q22,422 23,427
      Q27.5,430.5 32,434
      Q44.5,436.5 57,439
      Q61,442.5 65,446
      Q62.5,465.5 60,485
      Q62,493 64,501
      Q86.5,515 109,529
      Q118.5,533 128,537
      Q138.5,535.5 149,534
      Q168,546 187,558
      Q187,564 187,570
      Q174.5,597 162,624
      Q166.5,627.5 171,631
      Q181.5,633.5 192,636
      Q196,645.5 200,655
      Q206.5,661.5 213,668
      Q234,676.5 255,685
      Q251.5,694 248,703
      Q231,725 214,747
      Q214.5,753 215,759
      Q225,764 235,769
      Q243.5,769.5 252,770
      Q265.5,761.5 279,753
      Q311,741.5 343,730
      Q351,730 359,730
      Q367.5,734 376,738
      Q399,753.5 422,769
      Q425,787.5 428,806
      Q425,809 422,812
      Q389,818 356,824
      Q354,828.5 352,833
      Q355.5,839 359,845
      Q374,858 389,871
      Q394.5,883 400,895
      Q403.5,898 407,901
      Q431.5,906.5 456,912
      Q466.5,928.5 477,945
      Q491.5,950.5 506,956
      Q518.5,967 531,978
      Q545.5,980.5 560,982
      Q573,991 586,1000
      Q592.5,1000 599,1000
      Q609.5,994 620,988
      Q626.5,981.5 633,975
      Q633,970.5 633,966
      Q621,951 609,936
      Q592.5,928.5 576,921
      Q560.5,897 545,873
      Q544.5,868 544,863
      Q551.5,862 559,861
      Q560.5,856 562,851
      Q540,814.5 519,778
      Q503,765 487,752
      Q482.5,740 478,728
      Q477,718.5 476,709
      Q498,698 520,687
      Q533.5,657 547,627
      Q569,628.5 591,630
      Q606,624 621,618
      Q642.5,614 664,610
      Q678.5,617 693,624
      Q714,621.5 735,619
      Q751.5,628.5 768,638
      Q776,638 784,638
      Q789,624 794,610
      Q806.5,603.5 819,597
      Q821,588.5 823,580
      Q830,571 837,562
      Q832.5,547.5 828,533
      Q834,522 840,511
      Q839.5,492 839,473
      Q846.5,474 854,475
      Q861,489 868,503
      Q879,503.5 890,504
      Q900.5,509 911,514
      Q916.5,509 922,504
      Q923.5,497.5 925,491
      Q921.5,478 918,465
      Q922,452 926,439
      Q922,432.5 919,425
      Q913,421.5 907,418
      Q906,415 905,412
      Q910,396.5 915,381
      Q913.5,374 912,367
      Q907,361 902,356
      Q894,353.5 886,351
      Q883.5,343.5 881,336
      Q876.5,330.5 872,325
      Q861.5,322 851,319
      Q843.5,311.5 836,304
      Q825.5,300.5 815,297
      Q809.5,285.5 804,274
      Q789.5,266.5 775,259
      Q774.5,257 774,255
      Q781.5,247 789,239
      Q793.5,224.5 798,210
      Q816.5,208 835,206
      Q842.5,197 850,188
      Q862,186.5 874,185
      Q886.5,172 899,159
      Q904.5,159 910,159
      Q920,164 930,169
      Q936.5,166.5 943,164
      Q950,157.5 957,151
      Q961,132 966,113
      Q982.5,90.5 999,68
      Q995.5,56.5 992,45
      Q991.5,33 991,21
      Q950,2.5 938,0
      Q930,2.5 922,5
      Q887.5,8.5 853,12
      Q840,8 827,4
      Q779.5,8.5 732,13
      Q724.5,24 717,35
      Q704,44 691,53
      Q685.5,65.5 680,78
      Q671.5,85 663,92
      Q660.5,102 658,112
      Q644,114.5 630,117
      Q624.5,132 619,147
      Q612.5,149.5 606,152
      Q599.5,150 593,148
      Q581,138 569,128
      Q557.5,138.5 546,149
      Q540,146 534,143
      Q528.5,132.5 523,122
      Q513,114 503,106
      Q504.5,84 506,62
      Q504,52 502,42
      Q498,38.5 494,35
      Q483.5,32.5 473,30
      Q461.5,38 450,46
      Q439,42 428,39
      Q418,47 408,55
      Q394.5,57.5 381,60
      Q377.5,62.5 374,65
      Q366,82.5 358,100
      Q359.5,113.5 361,127
      Q359,131 357,135
      Q347,143.5 337,151
      Q329.5,161 322,171
      Q309.5,176.5 297,182
      Q287.5,199 278,216
      Q262.5,219.5 247,223
      Q238,232 229,241
      Q221,245 213,249
      Q209.5,258 206,267
      Q198.5,273.5 191,280
      Q187,289.5 183,299
      Q158.5,308.5 134,318
      Q118.5,315.5 103,313
      Q83.5,322.5 64,332
      Q48,330 32,328
      Q22,335 12,342 Z" id="track"/>
        </defs>
        
        <g class="section" :class=" showSection ? 'show' : 'hidden' " :style=" '--st:' + sectionStart + ';--ed:' + sectionEnd" >
          <use href="#track" class="path"></use>
        </g>

        <use href="#track" class="base base2"/>

        <g class="extras">
          <!-- <path v-for="c in bridges" class="bridge" :d=" 'M' + w * c.stx + ' ' + h * c.sty + 'L' + w * c.edx + ' ' + h * c.edy"/> -->
          <path class="bridge" d="M6 350 L-10 343" transform="translate(8, 4)"/>
        </g>

        <use href="#track" class="base"/>

        <g class="corner" :class=" showCorner ? 'show' : 'hidden' " :style=" '--st:' + cornerStart + ';--ed:' + cornerEnd" >
          <use href="#track" class="path"></use>
        </g>

        <use href="#track" class="progress"/>
      </svg>
      <div class="all-names">
  <div
    v-for="corner in corners"
    class="corner-name"
    :class="[corner.h, corner.v, { show: currentCorner && corner.ch === currentCorner.ch }]"
    :style="{'--x': corner.x, '--y': corner.y}"
  >
    <div><div>{{ corner.ch }}</div></div>
  </div>
</div>
      <div v-for="c in bridges" class="corner-name bridge-name" :class="[ (c.pt < p) || showAllCornerNames ? 'show' : 'hidden', c.h, c.v, c.pt - 0.001 < p && p < c.pt + 0.001 ? 'highlighted' : '']" :style=" '--x:' + c.x + ';--y:' + c.y " @click="setP(c.pt)">
        <div>
            <div>
              {{c.ch}}
            </div>
        </div>
      </div>
      <div v-for="c in sections" class="corner-name section-name" :class="[ (c.st < p) || showAllCornerNames ? 'show' : 'hidden', c.h, c.v, c.st < p && p < c.ed ? 'highlighted' : '']" :style=" '--x:' + c.x + ';--y:' + c.y " @click="setP((c.st + c.ed) / 2)">
        <div>
            <div>
              {{c.ch}}
            </div>
        </div>
      </div>
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
  </div>
  <div class="desc skew-p">
    <div class="logo">
      <div class="inner skew-n">
        <span class="title-font">L<span></span>LXiao<span></span>的体验地图</span>
        <img src="{$assetsDir}/logo.svg" alt="LLXiao的体验地图"/>
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
      <div class="thumbs" v-if="currentCorner && currentCorner.imgs" v-cloak>
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
        <p style="text-align: center; font-size: 14px; color: #999;">
    <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">粤ICP备2025426060号</a> 
    <span style="margin: 0 12px;">|</span>
    <a href="https://beian.mps.gov.cn/#/query/webSearch?code=44011802001137" rel="noopener noreferrer" target="_blank" style="display: inline-flex; align-items: center; gap: 4px;">
      <img src="https://img.xiliab.online/uploads/备案图标.png" style="width: 14px; height: 14px; margin-right: 4px; vertical-align: middle;"> 粤公网安备44011802001137号</a>
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
  </div>

  <div class="modal text" :class="[showModal && modalType == 'text' ? 'show' : '']" @click="showModal = false">
    <div class="inner" @click="innerModal(event)">
      <div class="modal-content skew-n" v-html="modalContent" @click="showModal = false"></div>
      <div class="modal-close skew-n" @click="showModal = false">
        <svg viewBox="0 0 30 30">
          <circle cx="15" cy="15" r="12"/>
          <path d="M10 10L20 20M20 10L10 20"/>
        </svg>
      </div>
    </div>
  </div>

  <div
  class="modal"
  :class="[
    showModal && (modalType == 'image' || modalType == 'video') ? 'show' : '',
    modalType
  ]"
  @click="showModal = false"
>
  <div class="inner" @click="innerModal(event)">
    <div class="modal-content skew-n" v-html="modalContent"></div>
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
  v-if="showModal && (modalType === 'image' || modalType === 'video')"
  :images="currentCorner.imgs"
  :initial-index="currentImageIndex"
  @close="showModal = false"
/>
<div
  v-if="showModal && modalType === 'text'"
  class="modal-bg"
  style="position:fixed;left:0;top:0;width:100vw;height:100vh;background:rgba(0,0,0,.7);z-index:10000;display:flex;align-items:center;justify-content:center;">
  <div class="modal-content"
    style="background:#fff;padding:32px 40px 32px 40px;border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,0.25);max-width:80vw;max-height:80vh;overflow:auto;display:flex;flex-direction:column;align-items:center;">
    <div v-html="modalContent" style="font-size:17px;color:#222;"></div>
    <button
      @click="showModal = false"
      style="margin-top: 32px; padding: 8px 36px; font-size:18px; border:none; border-radius:6px; background:#444; color:#fff; cursor:pointer;">
      关闭
    </button>
  </div>
</div>
</div>
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