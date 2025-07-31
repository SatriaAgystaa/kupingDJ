<template>
  <section class="w-full bg-[#330100] relative overflow-visible">
    <div class="mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
      <!-- Background Effect -->
      <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/icons/picks/effect.svg"
          alt="Aura Background"
          class="absolute bottom-0 left-0 w-full max-w-[300px] xs:max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[550px] h-auto opacity-80"
        />
      </div>

      <div class="mx-auto relative z-10">
        <!-- Header Section -->
        <div class="flex flex-col lg:flex-row lg:items-start text-white lg:justify-between mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <h2 class="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 xs:mb-6 sm:mb-8 lg:mb-0 font-glancyr-medium tracking-wide relative z-20 leading-tight flex flex-col">
            <span>A MESSAGE FROM</span>
            <span>THE VISIONARY</span>
            <span>BEHIND</span>
            <span>KUPING DJ</span>
          </h2>
          <div class="max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg relative z-20 mt-3 xs:mt-4 sm:mt-6 lg:mt-0">
            <p class="text-white leading-relaxed font-geist-regular text-xs xs:text-sm sm:text-base md:text-[15px]">
              Dive into a world of curated mixtapes and albums tailored for you by Kuping DJ! Uncover fresh beats and enhance your musical journey.
            </p>
          </div>
        </div>

        <!-- Picks Cards -->
        <div class="relative lg:absolute right-0 top-0 lg:top-20 z-30 w-full lg:w-1/2 mt-6 sm:mt-8 md:mt-10 lg:mt-0">
          <PickCard
            v-for="(pick, index) in picks"
            :key="index"
            :pick="pick"
            class="w-full md:w-full lg:w-[600px] xl:w-[700px] mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12"
          />
        </div>

        <!-- Scroll Down Indicator -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 relative z-20 mt-8 sm:mt-12 md:mt-16 lg:mt-0">
          <div class="space-y-3 sm:space-y-4 md:space-y-6">
            <div class="flex items-center gap-2 pt-2 sm:pt-4 font-glancyr-light">
              <span class="text-base sm:text-lg md:text-xl xl:text-2xl text-white tracking-wider">
                SCROLL DOWN
              </span>
              <img 
                src="/icons/baseicons/mouse_line_white.svg" 
                alt="Scroll Down Icon" 
                class="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PickCard from './ProfileCard.vue'
import { picks } from '~/data/profileabout'
</script>

<style scoped>
section {
  font-family: 'Inter', sans-serif;
}

/* Extra small devices (phones, 400px and down) */
@media (max-width: 400px) {
  h2 {
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  
  .max-w-xs {
    max-width: 100%;
  }
  
  .flex.items-center.gap-2 {
    gap: 0.5rem;
  }
  
  img[alt="Scroll Down Icon"] {
    width: 0.875rem;
    height: 0.875rem;
  }
}

/* Tiny devices (phones, 320px and down) */
@media (max-width: 320px) {
  h2 {
    font-size: 1.75rem;
  }
  
  p {
    font-size: 0.75rem;
  }
  
  span[class*="text-white"] {
    font-size: 0.875rem;
  }
  
  img[alt="Aura Background"] {
    max-width: 250px;
  }
}

/* Tablet portrait mode */
@media (min-width: 768px) and (max-width: 1023px) and (orientation: portrait) {
  .lg\:w-1\/2 {
    width: 100%;
  }
  
  .lg\:absolute {
    position: relative;
  }
  
  .lg\:top-20 {
    top: 0;
  }
}

/* Tablet landscape mode */
@media (min-width: 768px) and (max-width: 1023px) and (orientation: landscape) {
  .lg\:w-1\/2 {
    width: 55%;
  }
}

/* Smooth transitions for all elements */
img {
  transition: opacity 0.3s ease;
}

/* Ensure text remains readable on all devices */
.text-white {
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
}
</style>