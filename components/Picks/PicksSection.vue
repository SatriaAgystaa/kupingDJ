<template>
  <section class="container w-full bg-[#330100] mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
    <!-- Background Effect (dibungkus agar hanya aura yang overflow-hidden) -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <img
        src="/icons/picks/effect.svg"
        alt="Aura Background"
        class="absolute bottom-0 left-0 w-full max-w-[550px] h-auto opacity-80"
      />
    </div>

    <div class="mx-auto relative z-10">
      <!-- Header Section -->
      <div class="flex flex-col lg:flex-row lg:items-start text-white lg:justify-between mb-24">
        <h2 class="text-4xl lg:text-7xl mb-6 lg:mb-0 font-glancyr-medium tracking-wide relative z-20">
          KUPING DJ PICKS<br />MIXTAPE &<br /> ALBUM
        </h2>
        <div class="max-w-lg relative z-20">
          <p class="text-white leading-relaxed font-geist-regular">
            Explore the best mixtapes and albums curated just for you by Kuping DJ! Discover unique sounds and elevate your music experience.
          </p>
        </div>
      </div>

      <!-- Picks Cards (harus bisa keluar bebas dari batas section) -->
      <div class="absolute right-0 top-32 z-30 w-1/2">
        <PickCard
          v-for="(pick, index) in picks"
          :key="index"
          :pick="pick"
          class="w-full"
        />
      </div>

      <!-- Scroll Down Indicator -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-20">
        <div class="space-y-8">
          <div class="flex items-center gap-2 pt-4 font-glancyr-light">
            <span class="text-xl text-white tracking-wider">
              SCROLL DOWN
            </span>
            <img 
              src="/icons/baseicons/mouse_line_white.svg" 
              alt="Scroll Down Icon" 
              class="w-5 h-5"
            >
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
