<template>
  <div class="mixtape-section w-full overflow-hidden bg-[#f7f7f7]">
    <div class="container mx-auto px-4 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-10 relative z-10">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 sm:mb-8 md:mb-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 md:mb-0 font-glancyr-medium">{{ title }}</h2>
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
            :disabled="currentIndex >= mixtapes.length - visibleCards"
            :class="{ 'opacity-50 cursor-not-allowed': currentIndex >= mixtapes.length - visibleCards }"
          >
            <img src="/icons/baseicons/arrow_left_line.svg" alt="Next" 
                 class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <!-- Mixtape Cards Grid -->
      <div class="relative w-full overflow-hidden">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 w-full">
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
            :isCarousel="false"
            class="w-full h-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { mixtapes } from '@/data/mixtapes'
import MixtapeCard from './MixtapeCard.vue'

const props = defineProps({
  title: {
    type: String,
    default: 'NEW ARRIVAL MIXTAPE'
  }
})

const currentIndex = ref(0)
const windowWidth = ref(0)
const isClient = typeof window !== 'undefined'

const visibleCards = computed(() => {
  if (!isClient) return 2
  if (windowWidth.value >= 1536) return 6
  if (windowWidth.value >= 1280) return 5
  if (windowWidth.value >= 1024) return 4
  if (windowWidth.value >= 768) return 3
  return 2
})

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

.container {
  width: 100%;
  max-width: 100%;
}

/* Responsive card sizing */
.mixtape-card {
  transition: all 0.3s ease;
}

.grid-cols-2 .mixtape-card {
  min-width: calc(50% - 0.5rem);
}

.grid-cols-3 .mixtape-card {
  min-width: calc(33.333% - 0.67rem);
}

.grid-cols-4 .mixtape-card {
  min-width: calc(25% - 0.75rem);
}

.grid-cols-5 .mixtape-card {
  min-width: calc(20% - 0.8rem);
}

.grid-cols-6 .mixtape-card {
  min-width: calc(16.666% - 0.83rem);
}

@media (max-width: 640px) {
  .grid-cols-2 .mixtape-card {
    min-width: calc(50% - 0.5rem);
  }
}
</style>