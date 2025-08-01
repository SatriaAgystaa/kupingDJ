<template>
  <section class="w-full bg-white">
    <div class="mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
      <div class="flex flex-col lg:flex-row lg:items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <!-- Left side - Title and Navigation -->
        <div class="lg:w-1/3 px-4 sm:px-5 md:px-6 lg:px-0">
          <div class="space-y-4 sm:space-y-2 md:space-y-4 lg:space-y-6">
            <h2 class="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-glancyr-medium text-black leading-tight tracking-tight">
              EXPLORE OUR ALBUM GENRE
            </h2>

            <!-- Navigation arrows -->
            <div class="flex gap-2 xs:gap-3 sm:gap-4">
              <button 
                @click="scrollLeft"
                class="w-10 h-10 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-black flex items-center justify-center hover:bg-black/90 transition-all duration-300 group"
                :disabled="isLeftDisabled"
                :class="{ 'opacity-50 cursor-not-allowed': isLeftDisabled }"
                aria-label="Scroll left"
              >
                <img 
                  src="/icons/baseicons/arrow_right_line.svg" 
                  alt="Right arrow" 
                  class="w-5 h-5 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 transition-all duration-300 group-hover:-translate-x-0.5"
                >
              </button>
              <button 
                @click="scrollRight"
                class="w-10 h-10 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-black flex items-center justify-center hover:bg-black/90 transition-all duration-300 group"
                :disabled="isRightDisabled"
                :class="{ 'opacity-50 cursor-not-allowed': isRightDisabled }"
                aria-label="Scroll right"
              >
                <img 
                  src="/icons/baseicons/arrow_left_line.svg" 
                  alt="Left arrow" 
                  class="w-5 h-5 xs:w-5 xs:h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 transition-all duration-300 group-hover:translate-x-0.5"
                >
              </button>
            </div>
          </div>
        </div>

        <!-- Right side - Genre cards -->
        <div class="lg:w-2/3 relative">
          <div 
            ref="cardsContainer"
            class="flex lg:grid gap-3 xs:gap-4 sm:gap-5 md:gap-6 overflow-x-auto lg:overflow-x-hidden scrollbar-hide 
                   px-0 sm:px-0 md:px-0 lg:px-0
                   lg:grid-flow-col lg:auto-cols-[minmax(240px,1fr)]"
            @scroll="handleScroll"
          >
            <GenreCard 
              v-for="genre in genres" 
              :key="genre.id" 
              :genre="genre" 
              class="shrink-0 w-[160px] xs:w-[180px] sm:w-[200px] md:w-[220px] lg:w-auto font-geist-regular"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import GenreCard from './GenreCard.vue'
import { genres } from '~/data/genres'

const cardsContainer = ref(null)
const currentScrollPosition = ref(0)
const maxScrollPosition = ref(0)
const windowWidth = ref(0)
const isMobileView = computed(() => windowWidth.value < 1024)

const updateDimensions = () => {
  windowWidth.value = window.innerWidth
  if (cardsContainer.value && cardsContainer.value.scrollWidth) {
    maxScrollPosition.value = cardsContainer.value.scrollWidth - cardsContainer.value.clientWidth
  }
}

const isLeftDisabled = computed(() => {
  return currentScrollPosition.value <= 0
})

const isRightDisabled = computed(() => {
  return currentScrollPosition.value >= maxScrollPosition.value - 1
})

const scrollLeft = () => {
  if (!cardsContainer.value || isLeftDisabled.value) return
  
  if (isMobileView.value) {
    const cardWidth = getCardWidth()
    cardsContainer.value.scrollBy({
      left: -cardWidth,
      behavior: 'smooth'
    })
  } else {
    const cardWidth = 240
    const newPosition = Math.max(0, currentScrollPosition.value - cardWidth)
    cardsContainer.value.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    })
  }
}

const scrollRight = () => {
  if (!cardsContainer.value || isRightDisabled.value) return
  
  if (isMobileView.value) {
    const cardWidth = getCardWidth()
    cardsContainer.value.scrollBy({
      left: cardWidth,
      behavior: 'smooth'
    })
  } else {
    const cardWidth = 240
    const newPosition = Math.min(maxScrollPosition.value, currentScrollPosition.value + cardWidth)
    cardsContainer.value.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    })
  }
}

const getCardWidth = () => {
  if (windowWidth.value < 400) return 160
  if (windowWidth.value < 640) return 180
  if (windowWidth.value < 768) return 200
  if (windowWidth.value < 1024) return 220
  return 240
}

const handleScroll = () => {
  if (cardsContainer.value) {
    currentScrollPosition.value = cardsContainer.value.scrollLeft
    if (!isMobileView.value) {
      maxScrollPosition.value = cardsContainer.value.scrollWidth - cardsContainer.value.clientWidth
    }
  }
}

onMounted(() => {
  windowWidth.value = window.innerWidth
  
  // Gunakan nextTick untuk memastikan elemen sudah dirender
  nextTick(() => {
    updateDimensions()
    
    // Tambahkan event listener setelah elemen pasti ada
    if (cardsContainer.value) {
      cardsContainer.value.addEventListener('scroll', handleScroll)
    }
  })
  
  window.addEventListener('resize', updateDimensions)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateDimensions)
  if (cardsContainer.value) {
    cardsContainer.value.removeEventListener('scroll', handleScroll)
  }
})
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Extra small devices */
@media (max-width: 1023px) {
  .flex {
    gap: 0.75rem;
  }
  .lg\:w-1\/3 {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}

/* Tablet portrait */
@media (min-width: 768px) and (max-width: 1023px) {
  .flex {
    gap: 1rem;
  }
}
</style>