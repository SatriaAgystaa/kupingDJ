<template>
  <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between w-full max-w-[1200px] md:max-w-[1400px] lg:max-w-[1600px] xl:max-w-[1800px] 2xl:max-w-[2000px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-14 relative font-geist gap-3 sm:gap-4 md:gap-5 lg:gap-6">
    <!-- Left Section -->
    <div class="flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-3.5 w-full sm:w-[200px] md:w-[240px] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] flex-shrink-0 relative">
      <!-- Close Button -->
      <button
        @click="$emit('close')"
        class="text-gray-500 hover:text-black transition shrink-0"
        aria-label="Close"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-6 lg:w-6 xl:h-7 xl:w-7 2xl:h-8 2xl:w-8 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path
            fill-rule="evenodd"
            d="M6.225 4.811a.75.75 0 011.06 0L12 9.525l4.715-4.714a.75.75 0 111.06 1.06L13.06 10.5l4.714 4.715a.75.75 0 11-1.06 1.06L12 11.56l-4.715 4.715a.75.75 0 01-1.06-1.06L10.94 10.5 6.225 5.785a.75.75 0 010-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <!-- Mixtape Image -->
      <img
        :src="currentMixtape.image"
        :alt="currentMixtape.title"
        class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[72px] lg:h-[72px] xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 object-cover"
      />

      <!-- Title & Artist -->
      <div class="truncate flex-1 min-w-0">
        <h3 class="text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl font-geist-semibold truncate leading-tight">
          {{ currentMixtape.title }}
        </h3>
        <div class="flex items-center gap-1 sm:gap-1.5 md:gap-1.5 lg:gap-2 mt-0.5 sm:mt-1 md:mt-1.5 lg:mt-2">
          <img
            :src="currentMixtape.artistImage"
            :alt="currentMixtape.artist"
            class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-5 lg:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 rounded-full"
          />
          <span class="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl font-geist-regular text-gray-700 truncate">{{ currentMixtape.artist }}</span>
        </div>
      </div>
    </div>

    <!-- Center Section -->
    <div class="flex items-center w-full sm:flex-1 sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] px-0 sm:px-4 md:px-6">
      <!-- Favorite Button -->
      <button
        @click="toggleFavorite"
        class="w-10 h-10 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full border border-gray-300 hover:border-red-500 transition mr-2 sm:mr-3 shrink-0"
      >
        <img src="/icons/baseicons/like_black.svg" class="w-5 h-5 sm:w-5 sm:h-5" alt="">
      </button>

      <!-- Play/Pause Button -->
      <button
        @click="stopPlayback"
        class="w-10 h-10 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition mr-2 sm:mr-3 shrink-0"
      >
        <img src="/icons/baseicons/pause.svg" class="w-5 h-5 sm:w-6 sm:h-6" alt="">
      </button>

      <!-- Progress + Duration -->
      <div class="flex flex-col flex-1 min-w-0">
        <!-- Progress Bar -->
        <div class="h-2 sm:h-2 bg-gray-200 rounded-full overflow-hidden relative mb-1 sm:mb-1.5">
          <div
            class="absolute top-0 left-0 h-full bg-[#A10501] transition-all duration-300"
            :style="{ width: progressPercentage + '%' }"
          ></div>
        </div>
        <!-- Duration -->
        <div class="text-sm sm:text-md font-geist-semibold text-black whitespace-nowrap">
          {{ formatTime(currentTime) }} - {{ formatTime(duration) }}
        </div>
      </div>
    </div>

    <!-- Right Section -->
    <div class="flex flex-col justify-between items-stretch sm:items-end w-full sm:w-[200px] md:w-[230px] lg:w-[260px] flex-shrink-0 gap-2 sm:gap-2">
      <!-- Price -->
      <div class="text-lg sm:text-lg md:text-xl font-geist-semibold text-black leading-tight w-full text-left sm:text-right">
        {{ currentMixtape.price }}
      </div>

      <!-- Date & BPM -->
      <div class="flex justify-between w-full text-sm sm:text-sm text-gray-500">
        <div class="flex items-center gap-1.5">
          <img src="/icons/baseicons/date.svg" alt="Date" class="w-4 h-4 sm:w-4 sm:h-4" />
          <span class="font-geist-regular">{{ currentMixtape.date }}</span>
        </div>
        <span class="font-geist-semibold">{{ currentMixtape.bpm }}BPM</span>
      </div>

      <!-- Buttons -->
      <div class="flex w-full">
        <button
          @click="$emit('buy-now')"
          class="flex-1 border border-[#A10501] text-[#A10501] text-sm sm:text-sm font-glancyr-semibold py-2 px-3 sm:py-2 sm:px-3 hover:bg-[#A10501] hover:text-white transition-all active:scale-[0.98]"
        >
          BUY NOW
        </button>
        <button
          @click="$emit('add-to-cart')"
          class="border border-black text-black ml-2 p-2 sm:p-2 hover:bg-black hover:text-white transition-all active:scale-95"
        >
          <img src="/icons/baseicons/cart_black.svg" alt="Cart" class="w-4 h-4 sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { mixtapes } from '~/data/mixtapes'

const props = defineProps({
  mixtapeId: {
    type: Number,
    default: 1 // Default to first mixtape
  }
})

// State
const currentMixtape = ref(mixtapes.find(m => m.id === props.mixtapeId) || mixtapes[0])
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(215) // 3:35 in seconds
let interval: NodeJS.Timeout

// Computed
const progressPercentage = computed(() => {
  return (currentTime.value / duration.value) * 100
})

// Methods
const togglePlay = () => {
  isPlaying.value = !isPlaying.value
  if (isPlaying.value) {
    startPlayback()
  } else {
    pausePlayback()
  }
}

const startPlayback = () => {
  interval = setInterval(() => {
    if (currentTime.value < duration.value) {
      currentTime.value += 1
    } else {
      stopPlayback()
    }
  }, 1000)
}

const pausePlayback = () => {
  clearInterval(interval)
}

const stopPlayback = () => {
  isPlaying.value = false
  currentTime.value = 0
  clearInterval(interval)
}

const toggleFavorite = () => {
  currentMixtape.value.isFavorited = !currentMixtape.value.isFavorited
}

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`
}

// Lifecycle
onMounted(() => {
  // Initialize with first mixtape if none provided
  if (!currentMixtape.value) {
    currentMixtape.value = mixtapes[0]
  }
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
/* Optimized transitions */
.transition {
  transition-property: color, background-color, border-color, transform;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Better text truncation */
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Button interactions */
.active\:scale-\[0\.98\]:active {
  transform: scale(0.98);
}

.active\:scale-95:active {
  transform: scale(0.95);
}

/* Container adjustments */
@media (min-width: 1536px) {
  .container {
    max-width: 1400px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
</style>