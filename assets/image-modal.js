/**
 * Image Modal Component
 * 负责图片/视频弹窗展示及翻页
 */
Vue.component('image-modal', {
  props: ['images', 'initialIndex'],
  data() {
    return {
      currentIndex: this.initialIndex || 0,
      previousBodyOverflow: '',
    }
  },
  watch: {
    initialIndex(val) {
      this.currentIndex = val || 0;
    },
    images() {
      this.currentIndex = this.initialIndex || 0;
    }
  },
  computed: {
    current() {
      return this.images && this.images[this.currentIndex] || {};
    },
    isProject() {
      return !!(this.current && (this.current.media || this.current.article || this.current.title));
    },
    currentMedia() {
      if (this.isProject) {
        return this.current.media || [];
      }
      return this.current ? [this.current] : [];
    },
    currentMeta() {
      if (!this.current || !this.current.meta) return [];
      return Array.isArray(this.current.meta) ? this.current.meta : [this.current.meta];
    }
  },
  methods: {
    prevImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.scrollToTop();
      }
    },
    nextImage() {
      if (this.images && this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
        this.scrollToTop();
      }
    },
    scrollToTop() {
      this.$nextTick(() => {
        const card = this.$refs.modalCard;
        if (card) card.scrollTop = 0;
      });
    }
  },
  mounted() {
    // 禁止页面滚动
    this.previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  },
  beforeDestroy() {
    // 恢复页面滚动
    document.body.style.overflow = this.previousBodyOverflow;
  },
  template: `
    <div class="image-modal-backdrop" @click.self="$emit('close')">

      <div class="image-modal-shell">
        <div ref="modalCard"
          :class="['image-modal-card', isProject ? 'image-modal-card--project' : 'image-modal-card--media']">
          <article v-if="isProject" class="project-modal-article">
            <header class="project-modal-header">
              <div v-if="current.company" class="project-modal-company">{{ current.company }}</div>
              <h2 class="project-modal-title">{{ current.title }}</h2>
              <p v-if="current.subtitle" class="project-modal-subtitle">{{ current.subtitle }}</p>
              <div v-if="currentMeta.length" class="project-modal-tags" aria-label="项目标签">
                <span v-for="tag in currentMeta" :key="tag" class="project-modal-tag">
                  {{ tag }}
                </span>
              </div>
            </header>
            <div v-if="current.article" v-html="current.article" class="project-modal-body"></div>
            <figure v-for="(media, idx) in currentMedia" :key="media.src || idx" class="project-modal-figure">
              <img
                v-if="!media.type || media.type === 'image'"
                :src="media.src"
                :alt="media.desc || current.title"
                @error="$event.target.onerror=null;$event.target.src='assets/fav.png'"
                class="project-modal-media" />
              <video
                v-else-if="media.type === 'video'"
                :src="media.src"
                class="project-modal-media project-modal-video"
                controls></video>
              <figcaption v-if="media.desc" v-html="media.desc" class="project-modal-caption"></figcaption>
            </figure>
          </article>
          <div v-else class="image-modal-media-viewer">
          <div class="image-modal-media-stage">
            <img v-if="!current.type || current.type === 'image'" 
                 :src="current.src" 
                 :alt="current.desc || '项目图片'"
                 @error="$event.target.onerror=null;$event.target.src='assets/fav.png'"
                 class="image-modal-preview-media" />
            <video v-else-if="current.type === 'video'" :src="current.src" class="image-modal-preview-media" controls autoplay></video>
          </div>
          <div class="image-modal-dots" aria-label="媒体位置">
            <span
              v-for="(img, idx) in images"
              :key="idx"
              :class="['image-modal-dot', { 'is-active': idx === currentIndex }]"
            ></span>
          </div>
          <div v-if="current.desc" v-html="current.desc" class="image-modal-description"></div>
          <div v-if="current.author" class="image-modal-author"></div>
          </div>
        </div>
        <div class="image-modal-toolbar" role="group" aria-label="作品弹窗操作">
          <button
            type="button"
            class="image-modal-nav image-modal-nav--prev"
            @click="prevImage"
            :disabled="currentIndex === 0"
            aria-label="上一个作品">
            ‹
          </button>
          <button
            type="button"
            class="image-modal-close"
            @click="$emit('close')"
            aria-label="关闭作品弹窗"
          >关闭</button>
          <button
            type="button"
            class="image-modal-nav image-modal-nav--next"
            @click="nextImage"
            :disabled="currentIndex === images.length-1"
            aria-label="下一个作品">
            ›
          </button>
        </div>
      </div>
    </div>
  `
});
