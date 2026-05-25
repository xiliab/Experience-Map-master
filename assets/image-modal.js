/**
 * Image Modal Component
 * 负责图片/视频弹窗展示及翻页
 */
Vue.component('image-modal', {
  props: ['images', 'initialIndex'],
  data() {
    return {
      currentIndex: this.initialIndex || 0,
      closeBtnLeft: '50%',
      closeBtnTop: 'auto',
      closeBtnTransform: 'translateX(-50%)',
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
    },
    updateCloseBtn() {
      this.$nextTick(() => {
        const card = this.$refs.modalCard;
        if (card) {
          const rect = card.getBoundingClientRect();
          this.closeBtnLeft = rect.left + rect.width / 2 + 'px';
          this.closeBtnTop = rect.bottom + 24 + 'px';
          this.closeBtnTransform = 'translate(-50%, 0)';
        }
      });
    }
  },
  mounted() {
    // 禁止页面滚动
    document.body.style.overflow = 'hidden';
    this.updateCloseBtn();
    window.addEventListener('resize', this.updateCloseBtn);
  },
  updated() {
    this.updateCloseBtn();
  },
  beforeDestroy() {
    // 恢复页面滚动
    document.body.style.overflow = '';
    window.removeEventListener('resize', this.updateCloseBtn);
  },
  template: `
    <div class="modal-bg"
      @click.self="$emit('close')"
      style="position:fixed;left:0;top:0;right:0;bottom:0;background:rgba(0,0,0,.7);z-index:10000;display:flex;align-items:center;justify-content:center;">

      <div style="display:flex;flex-direction:column;align-items:center;">
        <div ref="modalCard"
          class="modal-content"
          :style="isProject
            ? 'position:relative;background:#fff;padding:0;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.25);width:min(920px, calc(100vw - 48px));max-width:90vw;max-height:calc(100vh - 120px);overflow:auto;display:flex;flex-direction:column;align-items:stretch;color:#222;'
            : 'position:relative;background:#fff;padding:24px;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.25);max-width:80vw;max-height:calc(100vh - 140px);overflow:auto;display:flex;flex-direction:column;align-items:center;'">
          <article v-if="isProject" style="padding: clamp(24px, 4vw, 48px);">
            <header style="margin-bottom:28px;">
              <div v-if="current.company" style="font-size:14px;color:#777;margin-bottom:8px;">{{ current.company }}</div>
              <h2 style="font-size:clamp(28px, 5vw, 48px);line-height:1.05;margin:0;color:#111;">{{ current.title }}</h2>
              <p v-if="current.subtitle" style="font-size:16px;line-height:1.7;color:#555;margin:16px 0 0 0;">{{ current.subtitle }}</p>
              <div v-if="currentMeta.length" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:18px;">
                <span
                  v-for="tag in currentMeta"
                  :key="tag"
                  style="font-size:12px;color:#b91c1c;background:#fee2e2;border:1px solid #fecaca;border-radius:999px;padding:4px 10px;">
                  {{ tag }}
                </span>
              </div>
            </header>
            <div v-if="current.article" v-html="current.article" style="font-size:16px;line-height:1.85;color:#333;margin-bottom:30px;"></div>
            <figure v-for="(media, idx) in currentMedia" :key="media.src || idx" style="margin:0 0 28px 0;">
              <img
                v-if="!media.type || media.type === 'image'"
                :src="media.src"
                :alt="media.desc || current.title"
                @error="$event.target.onerror=null;$event.target.src='assets/fav.png'"
                style="width:100%;max-height:none;object-fit:contain;border-radius:10px;background:#f2f2f2;box-shadow:0 2px 10px rgba(0,0,0,0.08);" />
              <video
                v-else-if="media.type === 'video'"
                :src="media.src"
                style="width:100%;border-radius:10px;background:#000;"
                controls></video>
              <figcaption v-if="media.desc" v-html="media.desc" style="font-size:14px;line-height:1.65;color:#555;margin-top:12px;"></figcaption>
            </figure>
          </article>
          <template v-else>
          <div style="max-width:70vw;max-height:calc(100vh - 220px);display:flex;align-items:center;justify-content:center;">
            <img v-if="!current.type || current.type === 'image'" 
                 :src="current.src" 
                 :alt="current.desc || '项目图片'"
                 @error="$event.target.onerror=null;$event.target.src='assets/fav.png'"
                 style="min-width: 300px; min-height: 200px; max-width:70vw;max-height:calc(100vh - 220px);object-fit:contain;border-radius:8px;background:#eee;color:transparent;" />
            <video v-else-if="current.type === 'video'" :src="current.src" style="min-width: 300px; min-height: 200px; max-width:70vw;max-height:calc(100vh - 220px);border-radius:8px;background:#000;" controls autoplay></video>
          </div>
          <div style="margin:20px 0 0 0; display:flex; gap:10px; justify-content:center; align-items:center;">
            <span
              v-for="(img, idx) in images"
              :key="idx"
              :style="{
                display: 'inline-block',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: idx === currentIndex ? '#444' : '#ccc',
                opacity: idx === currentIndex ? 1 : 0.4,
                transition: 'background 0.2s'
              }"
            ></span>
          </div>
          <div v-if="current.desc" v-html="current.desc" style="margin:24px 0 0 0; font-size:16px; color:#222; width:100%; max-width:680px; text-align:left;"></div>
          <div v-if="current.author" style="margin-top:4px;font-size:13px;color:#666;"></div>
          </template>
        </div>
        <div style="display: flex; gap: 20px; align-items: center; position: absolute; bottom: 20px; left: 0; right: 0; justify-content: center; z-index: 12; flex-wrap: nowrap;">
          <button
            @click="prevImage"
            :disabled="currentIndex === 0"
            style="flex: 0 0 auto; font-size:28px;background:#444;color:#fff;border:none;border-radius:50%;width:44px;height:44px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;box-shadow:0 2px 6px rgba(0,0,0,0.1);"
            :style="{ opacity: currentIndex === 0 ? 0.3 : 1, cursor: currentIndex === 0 ? 'not-allowed' : 'pointer' }">
            ‹
          </button>
          <button
            @click="$emit('close')"
            style="
              flex: 0 0 auto;
              padding: 8px 24px;
              font-size: 16px;
              white-space: nowrap;
              border: none;
              border-radius: 6px;
              background: #444;
              color: #fff;
              cursor: pointer;
              box-shadow: 0 2px 6px rgba(0,0,0,0.08);
            "
          >关闭</button>
          <button
            @click="nextImage"
            :disabled="currentIndex === images.length-1"
            style="flex: 0 0 auto; font-size:28px;background:#444;color:#fff;border:none;border-radius:50%;width:44px;height:44px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;box-shadow:0 2px 6px rgba(0,0,0,0.1);"
            :style="{ opacity: currentIndex === images.length-1 ? 0.3 : 1, cursor: currentIndex === images.length-1 ? 'not-allowed' : 'pointer' }">
            ›
          </button>
        </div>
      </div>
    </div>
  `
});
