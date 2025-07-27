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

    <!-- Content -->
    <div class="relative z-10 h-full flex flex-col justify-end pb-6 xs:pb-6 sm:pb-8 md:pb-8 lg:pb-10 xl:pb-10 px-4 xs:px-5 sm:px-6 md:px-12 lg:px-12 xl:px-12 2xl:px-12">
      <!-- Artist Name -->
      <h1 class="text-3xl xs:text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-glancyr-medium text-white tracking-wider">
        {{ artist.name }}
      </h1>

      <!-- Mintage Sold -->
      <div class="flex items-center">
        <p class="text-white text-xs xs:text-sm sm:text-md md:text-lg lg:text-xl font-glancyr-light">
          {{ formatNumber(artist.mintageSold) }} Mixtape Sold
        </p>
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
/* No additional styles needed */
</style>