<template>
  <div v-if="aboutData" class="relative w-full h-[250px] xs:h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px] overflow-hidden">
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
      class="absolute bottom-0 left-0 w-[150px] xs:w-[180px] sm:w-[220px] md:w-[350px] lg:w-[450px] xl:w-[550px] 2xl:w-[650px] opacity-80 mix-blend-lighten pointer-events-none z-10"
    />

    <!-- Content -->
    <div class="mx-auto py-6 xs:py-7 sm:py-8 md:py-10 lg:py-12 xl:py-12 2xl:py-12 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-10 xl:px-12 2xl:px-12 relative z-10 h-full flex flex-col justify-end">
      <!-- Title and Description Container -->
      <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between w-full">
        <!-- Title (Left) with relative positioning -->
        <div class="relative mb-2 sm:mb-2 md:mb-2 lg:mb-2">
          <h2 class="text-2xl xs:text-2.5xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5.5xl font-glancyr-medium text-white tracking-wide relative z-30">
            {{ aboutData.title }}
          </h2>
        </div>
        
        <!-- Description (Right) -->
        <div class="lg:max-w-[45%] xl:max-w-md relative z-30">
          <p class="text-white leading-relaxed font-glancyr-light text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg">
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

/* Custom text sizes for better scaling */
.text-2\.5xl {
  font-size: 1.75rem;
  line-height: 2.25rem;
}
.text-3\.5xl {
  font-size: 2rem;
  line-height: 2.5rem;
}
.text-5\.5xl {
  font-size: 3.5rem;
  line-height: 1;
}
</style>