<template>
  <section class="w-full">
    <div class="container mx-auto py-8 sm:py-10 lg:py-14 px-4 sm:px-6 md:px-10 lg:px-12 relative z-10">
      <div class="flex flex-col lg:flex-row lg:items-start gap-12">
        <!-- Left side - Title and Navigation -->
        <div class="lg:w-1/3 lg:sticky lg:top-8">
          <div class="space-y-8">
            <h2 class="text-4xl lg:text-5xl font-glancyr-medium text-black leading-tight">
              EXPLORE OUR ALBUM GENRE
            </h2>

            <!-- Updated Navigation arrows -->
            <div class="flex gap-4">
              <button 
                @click="scrollLeft"
                class="w-10 h-10 md:w-14 md:h-14 rounded-full bg-black flex items-center justify-center hover:bg-black/90 transition-all duration-300 group"
                :disabled="currentIndex === 0"
                :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
                aria-label="Scroll left"
              >
                <img 
                  src="/icons/baseicons/arrow_right_line.svg" 
                  alt="Right arrow" 
                  class="w-5 h-5 md:w-7 md:h-7 transition-all duration-300 group-hover:-translate-x-1"
                >
              </button>
              <button 
                @click="scrollRight"
                class="w-10 h-10 md:w-14 md:h-14 rounded-full bg-black flex items-center justify-center hover:bg-black/90 transition-all duration-300 group"
                :disabled="currentIndex >= genres.length - visibleCards"
                :class="{ 'opacity-50 cursor-not-allowed': currentIndex >= genres.length - visibleCards }"
                aria-label="Scroll right"
              >
                <img 
                  src="/icons/baseicons/arrow_left_line.svg" 
                  alt="Left arrow" 
                  class="w-5 h-5 md:w-7 md:h-7 transition-all duration-300 group-hover:translate-x-1"
                >
              </button>
            </div>
          </div>
        </div>

        <!-- Right side - Genre cards -->
        <div class="lg:w-2/3 relative">
          <div 
            ref="cardsContainer"
            class="grid grid-flow-col gap-4 overflow-x-hidden"
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
import { ref, computed } from 'vue'
import GenreCard from './GenreCard.vue'
import { genres } from '~/data/genres'

const cardsContainer = ref(null)
const currentIndex = ref(0)
const cardWidth = 250 // Adjust based on your card width
const containerPadding = 32 // Adjust based on your container padding

const visibleCards = computed(() => {
  if (!cardsContainer.value) return 4
  const containerWidth = cardsContainer.value.clientWidth - containerPadding
  return Math.floor(containerWidth / cardWidth)
})

const scrollLeft = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
    if (cardsContainer.value) {
      cardsContainer.value.scrollBy({
        left: -cardWidth,
        behavior: 'smooth'
      })
    }
  }
}

const scrollRight = () => {
  if (currentIndex.value < genres.length - visibleCards.value) {
    currentIndex.value++
    if (cardsContainer.value) {
      cardsContainer.value.scrollBy({
        left: cardWidth,
        behavior: 'smooth'
      })
    }
  }
}
</script>