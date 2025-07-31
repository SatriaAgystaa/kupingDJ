<template>
  <section class="w-full mx-auto bg-white">
    <div class="mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
      <!-- Header Section -->
      <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">
        <div class="mb-3 sm:mb-4 md:mb-5 lg:mb-0">
          <h2 class="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-5xl font-glancyr-medium leading-tight tracking-tight">
            WHAT PEOPLE SAID<br>ABOUT KUPING DJ
          </h2>
        </div>
        <div class="lg:max-w-md">
          <p class="text-black text-xs xs:text-sm sm:text-base md:text-[15px] lg:text-base leading-relaxed font-geist-regular">
            Discover what our users are saying about Kuping DJ! From seamless music discovery to an extensive library of mixtapes and albums.
          </p>
        </div>
      </div>

      <!-- Carousel Container -->
      <div class="relative overflow-hidden">
        <!-- Navigation Arrows -->
        <button
          @click="slideLeft"
          class="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center bg-gray-500/20 backdrop-blur-sm text-white transition-all duration-300 hover:bg-gray-500/30 hover:scale-105"
          :disabled="currentIndex === 0"
          :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }"
          aria-label="Previous testimonial"
        >
          <img src="/icons/baseicons/arrow_right_line.svg" alt="Previous" class="w-5 h-5 xs:w-5 xs:h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 transform transition-transform duration-200" />
        </button>

        <button
          @click="slideRight"
          class="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 xs:w-10 xs:h-10 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center bg-gray-500/20 backdrop-blur-sm text-white transition-all duration-300 hover:bg-gray-500/30 hover:scale-105"
          :disabled="currentIndex >= maxIndex"
          :class="{ 'opacity-50 cursor-not-allowed': currentIndex >= maxIndex }"
          aria-label="Next testimonial"
        >
          <img src="/icons/baseicons/arrow_left_line.svg" alt="Next" class="w-5 h-5 xs:w-5 xs:h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 transition-transform duration-200" />
        </button>

        <!-- Cards Container -->
        <div class="overflow-hidden" ref="carouselContainer">
          <div
            class="flex transition-transform duration-500 ease-out"
            :style="{ 
              transform: `translateX(${translateX}px)`,
              gap: `${gapSize}px`
            }"
          >
            <TestimonialCard
              v-for="(testimonial, index) in testimonials"
              :key="index"
              :testimonial="testimonial"
              class="flex-shrink-0"
              :style="{ width: `${cardPixelWidth}px` }"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import TestimonialCard from './TestimonialCard.vue'
import { testimonials } from '~/data/testimonials'

const currentIndex = ref(0)
const windowWidth = ref(0)
const gapSize = ref(16)
const carouselContainer = ref<HTMLElement | null>(null)

const visibleCards = computed(() => {
  if (windowWidth.value >= 1920) return 3
  if (windowWidth.value >= 1024) return 2
  if (windowWidth.value >= 768) return 1
  return 1
})

const cardPixelWidth = computed(() => {
  if (!carouselContainer.value) return 0
  return carouselContainer.value.offsetWidth / visibleCards.value - gapSize.value
})

const maxIndex = computed(() => Math.max(testimonials.length - Math.floor(visibleCards.value), 0))

// TranslateX berbeda untuk mobile/tablet dan desktop
const translateX = computed(() => {
  if (!carouselContainer.value) return 0

  const containerWidth = carouselContainer.value.offsetWidth
  const cardWidth = cardPixelWidth.value

  if (windowWidth.value < 1024) {
    // Mobile & tablet → center
    const centerOffset = (containerWidth - cardWidth) / 2
    return -(currentIndex.value * (cardWidth + gapSize.value)) + centerOffset
  } else {
    // Desktop → normal
    return -(currentIndex.value * (cardWidth + gapSize.value))
  }
})

const slideLeft = () => {
  if (currentIndex.value > 0) currentIndex.value--
}

const slideRight = () => {
  if (currentIndex.value < maxIndex.value) currentIndex.value++
}

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth
  if (windowWidth.value < 640) gapSize.value = 12
  else if (windowWidth.value < 768) gapSize.value = 14
  else gapSize.value = 16
}

onMounted(() => {
  if (process.client) {
    updateWindowWidth()
    window.addEventListener('resize', updateWindowWidth)
  }
})

onBeforeUnmount(() => {
  if (process.client) {
    window.removeEventListener('resize', updateWindowWidth)
  }
})

watch(windowWidth, () => {
  currentIndex.value = Math.min(currentIndex.value, maxIndex.value)
})
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

button:not(:disabled):hover img {
  transform: scale(1.15);
}

button:not(:disabled):hover {
  transform: scale(1.05) translateY(-50%);
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

button:disabled:hover {
  background-color: rgba(229, 231, 235, 0.1);
  transform: translateY(-50%) !important;
}

.flex.transition-transform {
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}
</style>
