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
      if (this.currentIndex < this.images.length - 1) {
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
      style="position:fixed;left:0;top:0;width:100vw;height:100vh;background:rgba(0,0,0,.7);z-index:10000;display:flex;align-items:center;justify-content:center;">

      <div style="display:flex;flex-direction:column;align-items:center;">
        <div ref="modalCard"
          class="modal-content"
          style="position:relative;background:#fff;padding:24px;border-radius:12px;box-shadow:0 8px 32px rgba(0,0,0,0.25);max-width:80vw;max-height:calc(100vh - 140px);overflow:auto;display:flex;flex-direction:column;align-items:center;">
          <div style="max-width:70vw;max-height:calc(100vh - 220px);display:flex;align-items:center;justify-content:center;">
            <img v-if="!current.type || current.type === 'image'" 
                 :src="current.src" 
                 :alt="current.desc || '项目图片'"
                 @error="$event.target.onerror=null;$event.target.src='assets/fav.png'"
                 style="min-width: 300px; min-height: 200px; max-width:70vw;max-height:calc(100vh - 220px);object-fit:contain;border-radius:8px;background:#eee;color:transparent;" />
            <video v-else-if="current.type === 'video'" :src="current.src" style="min-width: 300px; min-height: 200px; max-width:70vw;max-height:calc(100vh - 220px);border-radius:8px;background:#000;" controls autoplay></video>
          </div>          <div style="margin:20px 0 0 0; display:flex; gap:10px; justify-content:center; align-items:center;">
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
        </div>
        <div style="display: flex; gap: 32px; align-items: center; position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); z-index: 12;">
          <button
            @click="prevImage"
            :disabled="currentIndex === 0"
            style="font-size:28px;background:#444;color:#fff;border:none;border-radius:50%;width:44px;height:44px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;box-shadow:0 2px 6px rgba(0,0,0,0.1);"
            :style="{ opacity: currentIndex === 0 ? 0.3 : 1, cursor: currentIndex === 0 ? 'not-allowed' : 'pointer' }">
            ‹
          </button>
          <button
            @click="$emit('close')"
            style="
              padding: 8px 36px;
              font-size: 18px;
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
            style="font-size:28px;background:#444;color:#fff;border:none;border-radius:50%;width:44px;height:44px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;box-shadow:0 2px 6px rgba(0,0,0,0.1);"
            :style="{ opacity: currentIndex === images.length-1 ? 0.3 : 1, cursor: currentIndex === images.length-1 ? 'not-allowed' : 'pointer' }">
            ›
          </button>
        </div>
      </div>
    </div>
  `
});
