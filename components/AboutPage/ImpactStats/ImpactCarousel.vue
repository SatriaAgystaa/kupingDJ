<!-- ImpactCarousel.vue -->
<template>
  <div class="relative overflow-hidden bg-white mx-auto pt-8 sm:pt-10 md:pt-12 lg:pt-24 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12">
    <div class="flex">
      <div 
        ref="scroller"
        class="flex whitespace-nowrap text-black font-bold font-glancyr-extralight items-center h-full tracking-wider py-3 sm:py-4 md:py-5"
        :style="{ transform: `translateX(${scrollPosition}px)` }"
      >
        <template v-for="(item, index) in items" :key="`content-${index}`">
          <span class="phrase">{{ item }}</span>
          <span class="dot mx-6 sm:mx-8 md:mx-10">•</span>
        </template>
        
        <template v-for="(item, index) in items" :key="`dup-content-${index}`">
          <span class="phrase">{{ item }}</span>
          <span class="dot mx-6 sm:mx-8 md:mx-10">•</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: 0,
      animationFrameId: null,
      speed: -1.5,
      items: [
        "IMPACT STATS",
        "IMPACT STATS",
        "IMPACT STATS"
      ],
      windowWidth: 0
    };
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    window.addEventListener('resize', this.handleResize);
    this.adjustSpeed();
    this.startScrolling();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
    this.stopScrolling();
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
      this.adjustSpeed();
    },
    adjustSpeed() {
      if (this.windowWidth < 640) {
        this.speed = -1.0;
      } else if (this.windowWidth < 1024) {
        this.speed = -1.2;
      } else {
        this.speed = -1.5;
      }
    },
    startScrolling() {
      const animate = () => {
        this.scrollPosition += this.speed;
        const scrollerWidth = this.$refs.scroller?.scrollWidth / 2 || 0;
        if (Math.abs(this.scrollPosition) >= scrollerWidth) {
          this.scrollPosition = 0;
        }
        this.animationFrameId = requestAnimationFrame(animate);
      };
      animate();
    },
    stopScrolling() {
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
      }
    }
  }
};
</script>

<style scoped>
[ref="scroller"] {
  will-change: transform;
}

.phrase {
  display: inline-block;
  font-size: clamp(2.5rem, 6vw, 6rem);
  line-height: 1;
}

.dot {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(1.5rem, 3vw, 3rem);
  line-height: 1;
  vertical-align: middle;
  color: #000000;
}

@media (max-width: 640px) {
  [ref="scroller"] {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
}
</style>