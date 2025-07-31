<template>
  <div class="artist-section bg-white text-gray-900">
    <div class="mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
      <!-- Header Section -->
      <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 sm:mb-8 md:mb-10 lg:mb-12 pt-6 sm:pt-8 md:pt-10 lg:pt-12">
        <h2 class="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-glancyr-medium tracking-wide mb-3 sm:mb-4 md:mb-6 lg:mb-8">
          THE ARTIST
        </h2>
        <div class="lg:max-w-md">
          <p class="text-black leading-relaxed font-geist-regular text-xs xs:text-sm sm:text-md md:text-base">
            Meet the talented artists featured on Kuping DJ! Discover their latest mixtapes and albums, and immerse yourself in their creative journeys.
          </p>
        </div>
      </div>

      <!-- Carousel Section -->
      <div class="relative">
        <!-- Navigation Arrows -->
        <button 
          @click="slideLeft" 
          class="absolute left-0 top-1/2 -translate-y-1/2 z-10 
                 w-10 h-10 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center 
                 bg-gray-500/20 backdrop-blur-md text-white"
          :disabled="currentIndex === 0"
          :class="{ 
            'opacity-50 pointer-events-none': currentIndex === 0,
            'transition-transform duration-200 hover:scale-105': currentIndex > 0
          }"
        >
          <img src="/icons/baseicons/arrow_right_line.svg" alt="Previous" class="w-5 h-5 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
        </button>
        
        <button 
          @click="slideRight" 
          class="absolute right-0 top-1/2 -translate-y-1/2 z-10 
                 w-10 h-10 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center 
                 bg-gray-500/20 backdrop-blur-md text-white"
          :disabled="currentIndex >= artists.length - visibleCards"
          :class="{ 
            'opacity-50 pointer-events-none': currentIndex >= artists.length - visibleCards,
            'transition-transform duration-200 hover:scale-105': currentIndex < artists.length - visibleCards
          }"
        >
          <img src="/icons/baseicons/arrow_left_line.svg" alt="Next" class="w-5 h-5 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
        </button>

        <!-- Cards Container -->
        <div class="overflow-hidden">
          <div 
            class="flex transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] mb-6 sm:mb-8 md:mb-10 lg:mb-12"
            :style="{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }"
          >
            <ArtistCard
              v-for="(artist, index) in artists"
              :key="index"
              :artist="artist"
              :index="index"
              :visible-cards="visibleCards"
              :is-hovered="hoveredIndex === index"
              @hover-change="handleHoverChange"
            />
          </div>
        </div>
      </div>

      <!-- Explore Button Section -->
      <div class="flex justify-center">
        <div class="flex group font-glancyr-light hover:scale-105 transition-all duration-300">
          <!-- Red Button -->
          <button 
            class="bg-red-800 text-white px-3 py-1.5 xs:px-4 xs:py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 font-semibold tracking-wide text-xs xs:text-sm sm:text-base md:text-lg
                   transition-all duration-300 group-hover:bg-red-700"
          >
            EXPLORE ALL ARTISTS
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
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import ArtistCard from './ArtistCard.vue'
import { artists } from '~/data/artists'

const currentIndex = ref(0)
const hoveredIndex = ref(null)
const windowWidth = ref(0)

// Responsive visible cards
const visibleCards = computed(() => {
  if (windowWidth.value >= 1920) return 6 // 2xl+
  if (windowWidth.value >= 1536) return 5 // 2xl
  if (windowWidth.value >= 1280) return 4 // xl
  if (windowWidth.value >= 1024) return 3 // lg
  if (windowWidth.value >= 768) return 2  // md
  if (windowWidth.value >= 640) return 2  // sm
  if (windowWidth.value >= 480) return 1  // xs
  return 1 // mobile
})

const slideLeft = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const slideRight = () => {
  if (currentIndex.value < artists.length - visibleCards.value) {
    currentIndex.value++
  }
}

const handleHoverChange = (index) => {
  hoveredIndex.value = index
}

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth
  if (currentIndex.value > artists.length - visibleCards.value) {
    currentIndex.value = Math.max(0, artists.length - visibleCards.value)
  }
}

onMounted(() => {
  updateWindowWidth()
  window.addEventListener('resize', updateWindowWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth)
})
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

button:not(:disabled):hover img {
  transform: scale(1.1);
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.flex.transition-transform {
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}

/* Extra small devices (phones, 400px and down) */
@media (max-width: 400px) {
  .flex.group {
    transform-origin: center;
  }
  
  button[class*="bg-red-800"] {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    font-size: 0.65rem;
  }
  
  div[class*="bg-black"] {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
}

/* Tiny devices (phones, 320px and down) */
@media (max-width: 320px) {
  button[class*="bg-red-800"] {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-size: 0.6rem;
  }
  
  div[class*="bg-black"] {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  
  .absolute.left-0 {
    left: -0.5rem;
  }
  
  .absolute.right-0 {
    right: -0.5rem;
  }
}
</style>