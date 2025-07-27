<!-- GenreSection.vue -->
<template>
  <section class="w-full bg-white">
    <div class="container mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
      <div class="flex flex-col lg:flex-row lg:items-start gap-8 sm:gap-10 md:gap-12">
        <!-- Left side - Title and Navigation -->
        <div class="lg:w-1/3 lg:sticky lg:top-8">
          <div class="space-y-6 sm:space-y-8">
            <h2 class="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-glancyr-medium text-black leading-tight tracking-tight">
              EXPLORE OUR ALBUM GENRE
            </h2>

            <!-- Navigation arrows -->
            <div class="flex gap-3">
              <button 
                @click="scrollLeft"
                class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-black flex items-center justify-center hover:bg-black/90 transition-all duration-300 group"
                :disabled="currentIndex === 0"
                :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
                aria-label="Scroll left"
              >
                <img 
                  src="/icons/baseicons/arrow_right_line.svg" 
                  alt="Right arrow" 
                  class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all duration-300 group-hover:-translate-x-1"
                >
              </button>
              <button 
                @click="scrollRight"
                class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-black flex items-center justify-center hover:bg-black/90 transition-all duration-300 group"
                :disabled="currentIndex >= genres.length - visibleCards"
                :class="{ 'opacity-50 cursor-not-allowed': currentIndex >= genres.length - visibleCards }"
                aria-label="Scroll right"
              >
                <img 
                  src="/icons/baseicons/arrow_left_line.svg" 
                  alt="Left arrow" 
                  class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all duration-300 group-hover:translate-x-1"
                >
              </button>
            </div>
          </div>
        </div>

        <!-- Right side - Genre cards -->
        <div class="lg:w-2/3 relative">
          <div 
            ref="cardsContainer"
            class="grid grid-flow-col auto-cols-[minmax(200px,1fr)] sm:auto-cols-[minmax(220px,1fr)] md:auto-cols-[minmax(240px,1fr)] gap-4 sm:gap-5 md:gap-6 overflow-x-auto scrollbar-hide"
          >
            <GenreCard 
              v-for="genre in genres" 
              :key="genre.id" 
              :genre="genre" 
              class="font-geist-regular"
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
const currentIndex = ref(0)
const cardWidth = ref(240) // Default card width

const updateCardWidth = () => {
  if (window.innerWidth < 640) {
    cardWidth.value = 200
  } else if (window.innerWidth < 768) {
    cardWidth.value = 220
  } else {
    cardWidth.value = 240
  }
}

const visibleCards = computed(() => {
  if (!cardsContainer.value) return 4
  const containerWidth = cardsContainer.value.clientWidth
  return Math.floor(containerWidth / cardWidth.value)
})

const scrollLeft = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
    cardsContainer.value.scrollBy({
      left: -cardWidth.value,
      behavior: 'smooth'
    })
  }
}

const scrollRight = () => {
  if (currentIndex.value < genres.length - visibleCards.value) {
    currentIndex.value++
    cardsContainer.value.scrollBy({
      left: cardWidth.value,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  updateCardWidth()
  window.addEventListener('resize', updateCardWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateCardWidth)
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
</style>