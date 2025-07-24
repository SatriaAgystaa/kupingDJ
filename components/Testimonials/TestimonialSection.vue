<template>
  <section class="w-full mx-auto bg-white">
    <div class="container mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-14 relative">
      <!-- Header Section -->
      <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <div class="mb-4 lg:mb-0">
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-5xl font-glancyr-medium leading-tight">
            WHAT PEOPLE SAID<br>ABOUT KUPING DJ
          </h2>
        </div>
        <div class="lg:max-w-md">
          <p class="text-gray-800 text-sm sm:text-base md:text-[15px] lg:text-base leading-relaxed font-geist-regular">
            Discover what our users are saying about Kuping DJ! From seamless music discovery to an extensive library of mixtapes and albums.
          </p>
        </div>
      </div>

      <!-- Carousel Container -->
      <div class="relative overflow-hidden">
        <!-- Navigation Arrows -->
        <button
          @click="slideLeft"
          class="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-gray-500/20 backdrop-blur-sm text-white transition-all duration-300 hover:bg-gray-500/30 hover:scale-105"
          :disabled="currentIndex === 0"
          :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
        >
          <img src="/icons/baseicons/arrow_right_line.svg" alt="Previous" class="w-4 h-4 sm:w-5 sm:h-5 transform" />
        </button>

        <button
          @click="slideRight"
          class="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-gray-500/20 backdrop-blur-sm text-white transition-all duration-300 hover:bg-gray-500/30 hover:scale-105"
          :disabled="currentIndex >= maxIndex"
          :class="{ 'opacity-50 cursor-not-allowed': currentIndex >= maxIndex }"
        >
          <img src="/icons/baseicons/arrow_left_line.svg" alt="Next" class="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <!-- Cards Container -->
        <div class="overflow-hidden">
          <div
            class="flex transition-transform duration-500 ease-out"
            :style="{ 
              transform: `translateX(calc(-${currentIndex * cardWidth}% - ${currentIndex * gapSize}px))`,
              gap: `${gapSize}px`
            }"
          >
            <TestimonialCard
              v-for="(testimonial, index) in testimonials"
              :key="index"
              :testimonial="testimonial"
              class="flex-shrink-0"
              :style="{ width: `calc(${cardWidth}% - ${gapSize * (visibleCards - 1) / visibleCards}px)` }"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import TestimonialCard from './TestimonialCard.vue'
import { testimonials } from '~/data/testimonials'

const currentIndex = ref(0)
const windowWidth = ref(0)
const gapSize = 16 // gap-4 = 16px

// Responsive settings
const visibleCards = computed(() => {
  if (windowWidth.value >= 1280) return 2 // xl
  if (windowWidth.value >= 1024) return 2 // lg
  return 1 // md and below
})

const cardWidth = computed(() => 100 / visibleCards.value)
const maxIndex = computed(() => Math.max(testimonials.length - visibleCards.value, 0))

const slideLeft = () => {
  if (currentIndex.value > 0) currentIndex.value--
}

const slideRight = () => {
  if (currentIndex.value < maxIndex.value) currentIndex.value++
}

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  if (process.client) {
    windowWidth.value = window.innerWidth
    window.addEventListener('resize', updateWindowWidth)
  }
})

onBeforeUnmount(() => {
  if (process.client) {
    window.removeEventListener('resize', updateWindowWidth)
  }
})
</script>

<style scoped>
/* Custom scrollbar for better UX */
::-webkit-scrollbar {
  display: none;
}

/* Navigation arrows hover effect */
button:not(:disabled):hover img {
  transform: scale(1.15);
  transition: transform 0.2s ease;
}

button:not(:disabled):hover {
  transform: scale(1.05);
}

/* Disabled state for navigation buttons */
button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

button:disabled:hover {
  background-color: rgba(229, 231, 235, 0.1);
  transform: none !important;
}

/* Smoother carousel movement */
.flex.transition-transform {
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}
</style>