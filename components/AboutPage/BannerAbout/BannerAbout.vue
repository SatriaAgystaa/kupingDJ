<template>
  <div v-if="aboutData" class="relative w-full h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[500px] 2xl:h-[500px] overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0 group">
      <img 
        :src="aboutData.image" 
        :alt="aboutData.title"
        class="w-full h-full object-cover object-center grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    </div>

    <!-- Aura SVG positioned near the title -->
    <img
      src="/icons/baseicons/aura.svg"
      alt="Aura Background"
      class="absolute bottom-0 left-0 w-[200px] xs:w-[250px] sm:w-[300px] md:w-[500px] lg:w-[600px] xl:w-[700px] 2xl:w-[800px] opacity-80 mix-blend-lighten pointer-events-none z-10"
    />

    <!-- Content -->
    <div class="relative z-20 h-full flex flex-col justify-end pb-12 xs:pb-12 sm:pb-12 md:pb-12 lg:pb-12 xl:pb-12 px-12 xs:px-5 sm:px-6 md:px-12 lg:px-12 xl:px-12 2xl:px-12">
      <!-- Title and Description Container -->
      <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between">
        <!-- Title (Left) with relative positioning -->
        <div class="relative">
          <h2 class="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-glancyr-medium text-white tracking-wide relative z-30">
            {{ aboutData.title }}
          </h2>
        </div>
        
        <!-- Description (Right) -->
        <div class="lg:max-w-md relative z-30">
          <p class="text-white leading-relaxed font-glancyr-light text-xs sm:text-sm md:text-base lg:text-lg">
            {{ aboutData.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { bannerAbout } from '~/data/bannerabout'

// Get the about data
const aboutData = bannerAbout
</script>

<style scoped>
/* Smooth transition for the grayscale effect */
img {
  transition: filter 500ms ease-in-out;
}
</style>