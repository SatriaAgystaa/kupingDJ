<template>
  <div class="artist-section w-full overflow-hidden bg-white">
    <div class="container mx-auto py-6 xs:py-7 sm:py-8 md:py-10 lg:py-12 xl:py-12 2xl:py-12 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-10 xl:px-12 2xl:px-12 relative z-10">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 sm:mb-8 md:mb-12">
        <h2 class="text-xl xs:text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl mb-3 sm:mb-4 md:mb-0 font-glancyr-medium">TOP GROSSING ARTIST</h2>
        <div class="flex gap-2 sm:gap-3 md:gap-4 self-end md:self-auto">
          <button 
            @click="slideLeft" 
            class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black flex items-center justify-center hover:bg-black/90 transition-all duration-300 group"
            :disabled="currentIndex === 0"
            :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
          >
            <img src="/icons/baseicons/arrow_right_line.svg" alt="Previous" 
                 class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all duration-300 group-hover:-translate-x-1" />
          </button>
          <button 
            @click="slideRight" 
            class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black flex items-center justify-center hover:bg-black/90 transition-all duration-300 group"
            :disabled="currentIndex >= artists.length - visibleCards"
            :class="{ 'opacity-50 cursor-not-allowed': currentIndex >= artists.length - visibleCards }"
          >
            <img src="/icons/baseicons/arrow_left_line.svg" alt="Next" 
                 class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <!-- Artist Cards Grid -->
      <div class="relative w-full overflow-hidden">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6 w-full">
          <div 
            v-for="artist in visibleArtists" 
            :key="artist.id"
            class="flex flex-col items-center gap-3 sm:gap-4"
          >
            <div class="artist-card group relative overflow-hidden rounded-full shadow-md hover:shadow-lg transition-all duration-300 w-full aspect-square">
              <img 
                :src="artist.image" 
                :alt="artist.name"
                class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 class="text-black font-geist-semibold text-center text-lg sm:text-xl md:text-xl lg:text-2xl w-full">
              {{ artist.name }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { artists } from '@/data/artists'

const currentIndex = ref(0)
const windowWidth = ref(0)
const isClient = typeof window !== 'undefined'

const visibleCards = computed(() => {
  if (!isClient) return 2
  if (windowWidth.value >= 1536) return 5
  if (windowWidth.value >= 1280) return 5
  if (windowWidth.value >= 1024) return 4
  if (windowWidth.value >= 768) return 3
  return 2
})

const visibleArtists = computed(() => {
  return artists.slice(currentIndex.value, currentIndex.value + visibleCards.value)
})

const slideLeft = () => {
  if (currentIndex.value > 0) currentIndex.value--
}

const slideRight = () => {
  if (currentIndex.value < artists.length - visibleCards.value) currentIndex.value++
}

const handleResize = () => {
  if (isClient) {
    windowWidth.value = window.innerWidth
  }
}

onMounted(() => {
  if (isClient) {
    windowWidth.value = window.innerWidth
    window.addEventListener('resize', handleResize)
  }
})

onUnmounted(() => {
  if (isClient) {
    window.removeEventListener('resize', handleResize)
  }
})
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 100%;
}

.artist-card {
  transition: all 0.3s ease;
}

.grid-cols-2 .artist-card {
  min-width: calc(50% - 0.5rem);
}

.grid-cols-3 .artist-card {
  min-width: calc(33.333% - 0.67rem);
}

.grid-cols-4 .artist-card {
  min-width: calc(25% - 0.75rem);
}

.grid-cols-5 .artist-card {
  min-width: calc(20% - 0.8rem);
}

@media (max-width: 640px) {
  .grid-cols-2 .artist-card {
    min-width: calc(50% - 0.5rem);
  }
}
</style>