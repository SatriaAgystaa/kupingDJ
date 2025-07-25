<!-- PicksSection.vue -->
<template>
  <section class="w-full bg-[#330100] relative overflow-visible">
    <div class="container mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
      <!-- Background Effect -->
      <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/icons/picks/effect.svg"
          alt="Aura Background"
          class="absolute bottom-0 left-0 w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px] h-auto opacity-80"
        />
      </div>

      <div class="mx-auto relative z-10">
        <!-- Header Section -->
        <div class="flex flex-col lg:flex-row lg:items-start text-white lg:justify-between mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 lg:mb-0 font-glancyr-medium tracking-wide relative z-20 leading-tight">
            KUPING DJ PICKS<br />MIXTAPE &<br /> ALBUM
          </h2>
          <div class="max-w-md sm:max-w-lg relative z-20 mt-4 sm:mt-0">
            <p class="text-white leading-relaxed font-geist-regular text-sm sm:text-base md:text-[15px]">
              Explore the best mixtapes and albums curated just for you by Kuping DJ! Discover unique sounds and elevate your music experience.
            </p>
          </div>
        </div>

        <!-- Picks Cards -->
        <div class="relative lg:absolute right-0 top-0 lg:top-20 z-30 w-full lg:w-1/2 mt-8 lg:mt-0">
          <PickCard
            v-for="(pick, index) in picks"
            :key="index"
            :pick="pick"
            class="w-full md:w-full lg:w-[700px] mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          />
        </div>

        <!-- Scroll Down Indicator -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-20 mt-12 sm:mt-16 md:mt-20 lg:mt-0">
          <div class="space-y-4 sm:space-y-6 md:space-y-8">
            <div class="flex items-center gap-2 pt-4 font-glancyr-light">
              <span class="text-lg sm:text-xl md:text-2xl text-white tracking-wider">
                SCROLL DOWN
              </span>
              <img 
                src="/icons/baseicons/mouse_line_white.svg" 
                alt="Scroll Down Icon" 
                class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PickCard from './PicksCard.vue'
import { picks } from '~/data/picks'
</script>

<style scoped>
section {
  font-family: 'Inter', sans-serif;
}

@media (max-width: 1023px) {
  .lg\:max-w-md {
    max-width: 100%;
  }
}
</style>