<template>
  <div v-if="artist" class="relative w-full h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[500px] 2xl:h-[500px] overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <img 
        :src="artist.image" 
        :alt="artist.name"
        class="w-full h-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    </div>

    <!-- Content Container -->
    <div class="mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10 h-full flex flex-col justify-end">
      <!-- Artist Info -->
      <div class="w-full mx-auto">
        <!-- Artist Name -->
        <h1 class="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-glancyr-medium text-white tracking-wider leading-tight uppercase">
          {{ artist.name }}
        </h1>

        <!-- Mintage Sold -->
        <div class="flex items-center mt-2 xs:mt-2 sm:mt-2 md:mt-2 lg:mt-2 xl:mt-2">
          <p class="text-white text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl font-glancyr-light tracking-normal">
            {{ formatNumber(artist.mintageSold) }} Mixtape Sold
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { artists } from '~/data/artists'

// Get the first artist
const artist = artists[0]

const formatNumber = (num) => {
  return new Intl.NumberFormat('en-US').format(num)
}
</script>

<style scoped>
/* Smooth transitions for responsive changes */
img {
  transition: all 0.3s ease;
}

/* Optimized for mobile touch targets */
@media (max-width: 640px) {
  .flex.items-center {
    min-height: 24px; /* Ensure proper touch target size */
  }
}

/* Performance optimization for background image */
.absolute.inset-0.z-0 {
  will-change: transform;
  backface-visibility: hidden;
  transform: translate3d(0,0,0);
}
</style>