<template>
  <div class="mixtape-section w-full overflow-hidden">
    <div class="mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <h2 class="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-glancyr-medium tracking-wide">
          NEW ARRIVAL MIXTAPE
        </h2>
        <div class="flex gap-2 xs:gap-3 sm:gap-4 self-end md:self-auto">
          <button 
            @click="slideLeft" 
            class="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black flex items-center justify-center hover:bg-black/90 transition-all duration-300 group"
            :disabled="currentIndex === 0"
            :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
          >
            <img src="/icons/baseicons/arrow_right_line.svg" alt="Previous" 
                 class="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all duration-300 group-hover:-translate-x-0.5" />
          </button>
          <button 
            @click="slideRight" 
            class="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black flex items-center justify-center hover:bg-black/90 transition-all duration-300 group"
            :disabled="currentIndex >= mixtapes.length - visibleCards"
            :class="{ 'opacity-50 cursor-not-allowed': currentIndex >= mixtapes.length - visibleCards }"
          >
            <img src="/icons/baseicons/arrow_left_line.svg" alt="Next" 
                 class="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all duration-300 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      <!-- Mixtape Cards Grid -->
      <div class="relative w-full overflow-hidden mb-6">
        <div class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 md:gap-6 w-full">
          <MixtapeCard
            v-for="mixtape in mixtapes"
            :key="mixtape.id"
            :artist="mixtape.artist"
            :artistImage="mixtape.artistImage"
            :title="mixtape.title"
            :price="mixtape.price"
            :image="mixtape.image"
            :likes="mixtape.likes"
            :downloads="mixtape.downloads"
            :rating="mixtape.rating"
            :bpm="mixtape.bpm"
            :date="mixtape.date"
            v-bind="mixtape"
             :is-playing="currentTrack?.id === mixtape.id && isPlaying"
            @play="handlePlay(mixtape)"
      @toggle-favorite="handleToggleFavorite"
            class="w-full h-auto"
          />
        </div>
      </div>

      <!-- Explore Button Section -->
      <NuxtLink to="/mixtape" class="flex justify-center">
        <div class="flex group font-glancyr-light hover:scale-105 transition-all duration-300">
          <!-- Red Button -->
          <button 
            class="bg-red-800 text-white px-3 py-1.5 xs:px-4 xs:py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 font-semibold tracking-wide text-xs xs:text-sm sm:text-base md:text-lg
                   transition-all duration-300 group-hover:bg-red-700"
          >
            EXPLORE ALL MIXTAPE
          </button>

          <!-- Black Icon Section -->
          <div 
            class="bg-black px-3 py-2 xs:px-4 xs:py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 flex items-center justify-center 
                   transition-all duration-300 group-hover:bg-gray-900"
          >
            <img 
              src="/icons/baseicons/arrow_white.svg" 
              alt="arrow" 
              class="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1" 
            />
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, inject } from 'vue'
import { mixtapes } from '@/data/mixtapes'
import MixtapeCard from './MixtapeCard.vue'

const { currentTrack, isPlaying, play, pause } = inject('audioPlayer')

const handleToggleFavorite = (id) => {
  const index = mixtapes.findIndex(m => m.id === id)
  if (index !== -1) {
    mixtapes[index].isFavorited = !mixtapes[index].isFavorited
  }
}

const props = defineProps({
  title: {
    type: String,
    default: 'NEW ARRIVAL MIXTAPE'
  }
})

const currentIndex = ref(0)
const windowWidth = ref(0)
const isClient = typeof window !== 'undefined'
const currentlyPlayingId = ref(null)

const visibleCards = computed(() => {
  if (!isClient) return 2
  if (windowWidth.value >= 1536) return 6
  if (windowWidth.value >= 1280) return 5
  if (windowWidth.value >= 1024) return 4
  if (windowWidth.value >= 768) return 3
  return 2
})


const handlePlay = (mixtape) => {
  play(mixtape)
}

// Tambahkan fungsi handlePause
const handlePause = () => {
  pause()
}

const slideLeft = () => {
  if (currentIndex.value > 0) currentIndex.value--
}

const slideRight = () => {
  if (currentIndex.value < mixtapes.length - visibleCards.value) currentIndex.value++
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
/* Smooth transitions for all interactive elements */
button, .group {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Perfectly aligned icons in buttons */
button img {
  display: block;
  margin: auto;
}

/* Responsive grid adjustments */
@media (max-width: 479px) {
  .grid-cols-1 .mixtape-card {
    min-width: 100%;
  }
}

@media (min-width: 480px) and (max-width: 639px) {
  .xs\:grid-cols-2 .mixtape-card {
    min-width: calc(50% - 0.5rem);
  }
}

@media (min-width: 640px) and (max-width: 767px) {
  .sm\:grid-cols-2 .mixtape-card {
    min-width: calc(50% - 0.625rem);
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .md\:grid-cols-3 .mixtape-card {
    min-width: calc(33.333% - 0.75rem);
  }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  .lg\:grid-cols-4 .mixtape-card {
    min-width: calc(25% - 0.9375rem);
  }
}

@media (min-width: 1280px) {
  .xl\:grid-cols-4 .mixtape-card {
    min-width: calc(25% - 1.125rem);
  }
}
</style>