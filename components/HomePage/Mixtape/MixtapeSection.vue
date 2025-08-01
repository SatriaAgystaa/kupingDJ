<template>
  <div class="mixtape-section w-full">
    <div class="mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-glancyr-medium tracking-wide">
          NEW ARRIVAL MIXTAPE
        </h2>
        <div class="flex gap-2 sm:gap-3 md:gap-4 self-end md:self-auto">
          <button 
            @click="slideLeft" 
            class="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black flex items-center justify-center hover:bg-black/90 transition-all duration-300 group"
            :disabled="currentIndex === 0"
            :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
          >
            <img src="/icons/baseicons/arrow_right_line.svg" alt="Previous" 
                 class="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all duration-300 group-hover:-translate-x-1" />
          </button>
          <button 
            @click="slideRight" 
            class="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black flex items-center justify-center hover:bg-black/90 transition-all duration-300 group"
            :disabled="currentIndex >= maxIndex"
            :class="{ 'opacity-50 cursor-not-allowed': currentIndex >= maxIndex }"
          >
            <img src="/icons/baseicons/arrow_left_line.svg" alt="Next" 
                 class="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <!-- Mixtape Cards -->
      <div class="relative w-full overflow-hidden mb-6">
        <div 
          class="flex transition-transform duration-300 ease-out"
          :style="{ transform: `translateX(-${currentIndex * cardWidth}px)` }"
          ref="slider"
        >
          <div 
            v-for="mixtape in mixtapes" 
            :key="mixtape.id"
            class="flex-shrink-0"
            :style="{ width: `${cardWidth}px` }"
          >
            <MixtapeCard
              :artist="mixtape.artist"
              :artist-image="mixtape.artistImage"
              :title="mixtape.title"
              :price="mixtape.price"
              :image="mixtape.image"
              :likes="mixtape.likes"
              :downloads="mixtape.downloads"
              :rating="mixtape.rating"
              :bpm="mixtape.bpm"
              :date="mixtape.date"
              :is-playing="currentTrack?.id === mixtape.id && isPlaying"
              @play="handlePlay(mixtape)"
              @toggle-favorite="handleToggleFavorite"
            />
          </div>
        </div>
      </div>

      <!-- Explore Button Section -->
      <NuxtLink to="/mixtape" class="flex justify-center">
        <div class="flex group font-glancyr-light hover:scale-105 transition-all duration-300">
          <!-- Red Button -->
          <div 
            class="bg-red-800 text-white px-3 py-1.5 xs:px-4 xs:py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 font-semibold tracking-wide text-xs xs:text-sm sm:text-base md:text-lg
                   transition-all duration-300 group-hover:bg-red-700"
          >
            EXPLORE ALL MIXTAPES
          </div>

          <!-- Black Icon Section -->
          <div 
            class="bg-black px-3 py-2 xs:px-4 xs:py-2 sm:px-5 sm:py-2.5 md:px-4 md:py-3 flex items-center justify-center 
                   transition-all duration-300 group-hover:bg-gray-900"
          >
            <img 
              src="/icons/baseicons/arrow_white.svg" 
              alt="arrow" 
              class="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" 
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

// Slider functionality
const currentIndex = ref(0)
const cardWidth = ref(300)
const slider = ref(null)
const windowWidth = ref(0)
const isClient = typeof window !== 'undefined'

const visibleCards = computed(() => {
  if (!isClient) return 1
  if (windowWidth.value >= 1280) return 4  // Large desktop
  if (windowWidth.value >= 1024) return 4 // Desktop
  if (windowWidth.value >= 768) return 2  // Tablet (changed from 3 to 2)
  if (windowWidth.value >= 640) return 2  // Small tablet
  return 1                               // Mobile
})

const maxIndex = computed(() => Math.max(0, mixtapes.length - visibleCards.value))

const handlePlay = (mixtape) => play(mixtape)
const handlePause = () => pause()

const handleToggleFavorite = (id) => {
  const index = mixtapes.findIndex(m => m.id === id)
  if (index !== -1) mixtapes[index].isFavorited = !mixtapes[index].isFavorited
}

const slideLeft = () => currentIndex.value > 0 && currentIndex.value--
const slideRight = () => currentIndex.value < maxIndex.value && currentIndex.value++

const updateCardWidth = () => {
  if (isClient && slider.value) {
    const containerWidth = slider.value.offsetWidth
    cardWidth.value = containerWidth / visibleCards.value
  }
}

const handleResize = () => {
  if (isClient) {
    windowWidth.value = window.innerWidth
    updateCardWidth()
  }
}

onMounted(() => {
  if (isClient) {
    windowWidth.value = window.innerWidth
    updateCardWidth()
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
.mixtape-section {
  --card-gap: 1rem;
}

@media (min-width: 640px) {
  .mixtape-section {
    --card-gap: 1.5rem; /* Increased gap for better spacing */
  }
}

@media (min-width: 768px) {
  .mixtape-section {
    --card-gap: 2rem; /* Larger gap for tablet view */
  }
}

@media (min-width: 1024px) {
  .mixtape-section {
    --card-gap: 1.75rem;
  }
}

/* Card padding adjustments */
.flex-shrink-0 {
  padding-left: calc(var(--card-gap) / 2);
  padding-right: calc(var(--card-gap) / 2);
}

/* Smooth transitions */
button, .group {
  transition: all 0.3s ease;
}

/* Prevent layout shift */
img {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>