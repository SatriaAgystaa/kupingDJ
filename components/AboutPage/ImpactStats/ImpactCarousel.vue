<template>
  <div class="relative overflow-hidden bg-white mx-auto pt-8 sm:pt-10 md:pt-12 lg:pt-24 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12">
    <!-- Carousel dari kanan ke kiri -->
    <div class="flex">
      <div 
        ref="scrollerLeft"
        class="flex whitespace-nowrap text-black font-bold font-glancyr-extralight items-center h-full tracking-wider py-3 sm:py-4 md:py-5"
        :style="{ transform: `translateX(${scrollPositionLeft}px)` }"
      >
        <template v-for="(item, index) in items" :key="`content-left-${index}`">
          <span class="phrase">{{ item }}</span>
          <span class="dot mx-6 sm:mx-8 md:mx-10">•</span>
        </template>
        <template v-for="(item, index) in items" :key="`dup-content-left-${index}`">
          <span class="phrase">{{ item }}</span>
          <span class="dot mx-6 sm:mx-8 md:mx-10">•</span>
        </template>
      </div>
    </div>

    <!-- Carousel dari kiri ke kanan -->
    <div class="flex">
      <div 
        ref="scrollerRight"
        class="flex whitespace-nowrap text-black font-bold font-glancyr-extralight items-center h-full tracking-wider py-3 sm:py-4 md:py-5"
        :style="{ transform: `translateX(${scrollPositionRight}px)` }"
      >
        <template v-for="(item, index) in items" :key="`content-right-${index}`">
          <span class="phrase">{{ item }}</span>
          <span class="dot mx-6 sm:mx-8 md:mx-10">•</span>
        </template>
        <template v-for="(item, index) in items" :key="`dup-content-right-${index}`">
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
      scrollPositionLeft: 0,
      animationFrameIdLeft: null,
      scrollPositionRight: 0,
      animationFrameIdRight: null,
      speedLeft: -1.5,
      speedRight: 1.5,
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

    // Set posisi awal untuk scroll kanan → kiri tetap 0,
    // tapi scroll kiri → kanan dimulai dari -setengah width supaya tidak kosong
    this.$nextTick(() => {
      const scrollerWidth = this.$refs.scrollerRight?.scrollWidth / 2 || 0;
      this.scrollPositionRight = -scrollerWidth;
      this.startScrolling();
    });
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
        this.speedLeft = -1.0;
        this.speedRight = 1.0;
      } else if (this.windowWidth < 1024) {
        this.speedLeft = -1.2;
        this.speedRight = 1.2;
      } else {
        this.speedLeft = -1.5;
        this.speedRight = 1.5;
      }
    },
    startScrolling() {
      const animateLeft = () => {
        this.scrollPositionLeft += this.speedLeft;
        const scrollerWidth = this.$refs.scrollerLeft?.scrollWidth / 2 || 0;
        if (Math.abs(this.scrollPositionLeft) >= scrollerWidth) {
          this.scrollPositionLeft = 0;
        }
        this.animationFrameIdLeft = requestAnimationFrame(animateLeft);
      };

      const animateRight = () => {
        this.scrollPositionRight += this.speedRight;
        const scrollerWidth = this.$refs.scrollerRight?.scrollWidth / 2 || 0;
        if (this.scrollPositionRight >= 0) {
          this.scrollPositionRight = -scrollerWidth;
        }
        this.animationFrameIdRight = requestAnimationFrame(animateRight);
      };

      animateLeft();
      animateRight();
    },
    stopScrolling() {
      if (this.animationFrameIdLeft) cancelAnimationFrame(this.animationFrameIdLeft);
      if (this.animationFrameIdRight) cancelAnimationFrame(this.animationFrameIdRight);
    }
  }
};
</script>

<style scoped>
[ref="scrollerLeft"],
[ref="scrollerRight"] {
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
  [ref="scrollerLeft"],
  [ref="scrollerRight"] {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
}
</style>
