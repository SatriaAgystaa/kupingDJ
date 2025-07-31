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
      class="absolute bottom-0 left-0 w-[150px] xs:w-[180px] sm:w-[220px] md:w-[350px] lg:w-[450px] xl:w-[550px] 2xl:w-[650px] opacity-80 mix-blend-lighten pointer-events-none z-10"
    />

    <!-- Content -->
    <div class="mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10 h-full flex flex-col justify-end">
      <!-- Title and Description Container -->
      <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between w-full">
        <!-- Title (Left) with relative positioning -->
        <div class="relative mb-2 sm:mb-2 md:mb-2 lg:mb-2">
          <h2 class="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-glancyr-medium text-white tracking-wide relative z-30">
            {{ aboutData.title }}
          </h2>
        </div>
        
        <!-- Description (Right) -->
        <div class="lg:max-w-[45%] xl:max-w-md relative z-30">
          <p class="text-white leading-relaxed font-glancyr-light text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl">
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

/* Performance optimization for background image */
.absolute.inset-0.z-0 {
  will-change: transform;
  backface-visibility: hidden;
  transform: translate3d(0,0,0);
}

/* Optimized for mobile touch targets */
@media (max-width: 640px) {
  .flex.items-center {
    min-height: 24px; /* Ensure proper touch target size */
  }
}
</style>