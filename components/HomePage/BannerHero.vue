<template>
  <div class="relative overflow-hidden bg-[#A10501]">
    <div class="flex">
      <div 
        ref="scroller"
        class="flex whitespace-nowrap text-white font-bold font-glancyr-extralight items-center h-full tracking-wider py-3 sm:py-3 md:py-5"
        :style="{ transform: `translateX(${scrollPosition}px)` }"
      >
        <!-- Content remains the same -->
        <template v-for="(item, index) in items" :key="`content-${index}`">
          <span class="phrase">{{ item }}</span>
          <span class="dot mx-4">•</span>
        </template>
        
        <template v-for="(item, index) in items" :key="`dup-content-${index}`">
          <span class="phrase">{{ item }}</span>
          <span class="dot mx-4">•</span>
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
      speed: -1.5, // slightly faster speed
      items: [
        "DISCOVER THE ULTIMATE EXPERIENCE",
        "DISCOVER THE ULTIMATE EXPERIENCE",
        "DISCOVER THE ULTIMATE EXPERIENCE"
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
      // Adjust speed based on screen size
      if (this.windowWidth < 640) {
        this.speed = -1.0; // slower on mobile
      } else if (this.windowWidth < 1024) {
        this.speed = -1.2; // medium on tablet
      } else {
        this.speed = -1.5; // default on desktop
      }
    },
    startScrolling() {
      const animate = () => {
        this.scrollPosition += this.speed;
        
        // Reset position when scrolled one full width
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
/* Smooth scrolling effect */
[ref="scroller"] {
  will-change: transform;
}

.phrase {
  display: inline-block;
  font-size: clamp(1rem, 2vw + 0.5rem, 1.5rem); /* Responsive font size */
}

.dot {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 8px;
  height: 8px;
  font-size: clamp(0.875rem, 1.5vw + 0.5rem, 1.5rem); /* Responsive dot size */
  line-height: 1;
  vertical-align: middle;
  color: #ffffff;
}

/* Adjust padding for smaller screens */
@media (max-width: 640px) {
  [ref="scroller"] {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
}
</style>