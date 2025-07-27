<!-- ProfileSection.vue -->
<template>
  <section class="w-full bg-[#330100] relative overflow-visible">
    <div class="mx-auto mx-auto py-6 xs:py-7 sm:py-8 md:py-10 lg:py-12 xl:py-12 2xl:py-12 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-10 xl:px-12 2xl:px-12 relative z-10">
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
        <div class="flex flex-col lg:flex-row lg:items-start text-white lg:justify-between mb-10 sm:mb-12 md:mb-16 lg:mb-20">
          <h2 class="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 lg:mb-0 font-glancyr-medium tracking-wide relative z-20 leading-tight flex flex-col">
            <span>A MESSAGE FROM</span>
            <span>THE VISIONARY</span>
            <span>BEHIND</span>
            <span>KUPING DJ</span>
          </h2>
          <div class="max-w-md sm:max-w-lg relative z-20 mt-4 sm:mt-0">
            <p class="text-white leading-relaxed font-geist-regular text-sm xs:text-base sm:text-lg md:text-base">
              Dive into a world of curated mixtapes and albums tailored for you by Kuping DJ! Uncover fresh beats and enhance your musical journey.
            </p>
          </div>
        </div>

        <!-- Profile Cards -->
        <div class="relative lg:absolute right-0 top-0 lg:top-24 z-30 w-full lg:w-1/2 mt-8 lg:mt-0">
          <ProfileCard
            v-for="(pick, index) in picks"
            :key="index"
            :pick="pick"
            class="w-full lg:w-[650px] xl:w-[700px] mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          />
        </div>

        <!-- Scroll Down Indicator -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-20 mt-10 sm:mt-12 md:mt-16 lg:mt-0">
          <div class="space-y-4 sm:space-y-6 md:space-y-8">
            <div class="flex items-center gap-2 pt-4 font-glancyr-light">
              <span class="text-lg sm:text-xl md:text-2xl text-white tracking-wider">
                SCROLL DOWN
              </span>
              <img 
                src="/icons/baseicons/mouse_line_white.svg" 
                alt="Scroll Down Icon" 
                class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProfileCard from './ProfileCard.vue'
import { picks } from '~/data/profileabout'
</script>

<style>
/* Custom text sizes for perfect scaling */
.text-2\.5xl {
  font-size: 1.75rem;
  line-height: 2.25rem;
}
.text-3\.5xl {
  font-size: 2rem;
  line-height: 2.5rem;
}
</style>