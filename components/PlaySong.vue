<template>
  <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
    <!-- Desktop View (unchanged) -->
    <div class="hidden lg:flex flex-row items-center justify-between w-full max-w-[2000px] mx-auto px-6 xl:px-12 py-4 relative font-geist gap-4">
      <!-- Left Section -->
      <div class="flex items-center gap-2 w-[280px] flex-shrink-0 relative">
        <!-- Close Button -->
        <button
          @click="$emit('close')"
          class="text-gray-500 hover:text-black transition shrink-0"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="currentColor" viewBox="0 0 24 24">
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
          class="w-16 h-16 object-cover rounded"
        />

        <!-- Title & Artist -->
        <div class="truncate flex-1 min-w-0">
          <h3 class="text-lg font-geist-semibold truncate leading-tight">
            {{ currentMixtape.title }}
          </h3>
          <div class="flex items-center gap-1.5 mt-1.5">
            <img
              :src="currentMixtape.artistImage"
              :alt="currentMixtape.artist"
              class="w-5 h-5 rounded-full"
            />
            <span class="text-md font-geist-regular text-gray-700 truncate">{{ currentMixtape.artist }}</span>
          </div>
        </div>
      </div>

      <!-- Center Section -->
      <div class="flex items-center flex-1 max-w-[800px] px-6">
        <!-- Favorite Button -->
        <button
          @click="toggleFavorite"
          class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-red-500 transition mr-3 shrink-0"
        >
          <img src="/icons/baseicons/like_black.svg" class="w-5 h-5" alt="">
        </button>

        <!-- Play/Pause Button -->
        <button
          @click="togglePlay"
          class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition mr-3 shrink-0"
        >
          <img :src="isPlaying ? '/icons/baseicons/pause.svg' : '/icons/baseicons/play_black.svg'" class="w-6 h-6" alt="">
        </button>

        <!-- Progress + Duration -->
        <div class="flex flex-col flex-1 min-w-0">
          <!-- Progress Bar -->
          <div class="h-2 bg-gray-200 rounded-full overflow-hidden relative mb-1.5">
            <div
              class="absolute top-0 left-0 h-full bg-[#A10501] transition-all duration-300"
              :style="{ width: progressPercentage + '%' }"
            ></div>
          </div>
          <!-- Duration -->
          <div class="text-md font-geist-semibold text-black whitespace-nowrap">
            {{ formatTime(currentTime) }} - {{ formatTime(duration) }}
          </div>
        </div>
      </div>

      <!-- Right Section -->
      <div class="flex flex-col justify-between items-end w-[260px] flex-shrink-0 gap-2">
        <!-- Price -->
        <div class="text-lg font-geist-semibold text-black leading-tight w-full text-right">
          {{ currentMixtape.price }}
        </div>

        <!-- Date & BPM -->
        <div class="flex justify-between w-full text-sm text-gray-500">
          <div class="flex items-center gap-1.5">
            <img src="/icons/baseicons/date.svg" alt="Date" class="w-4 h-4" />
            <span class="font-geist-regular">{{ currentMixtape.date }}</span>
          </div>
          <span class="font-geist-semibold">{{ currentMixtape.bpm }}BPM</span>
        </div>

        <!-- Buttons -->
        <div class="flex w-full">
          <button
            @click="$emit('buy-now')"
            class="flex-1 border border-[#A10501] text-[#A10501] text-sm font-glancyr-semibold py-2 px-3 hover:bg-[#A10501] hover:text-white transition-all active:scale-[0.98]"
          >
            BUY NOW
          </button>
          <button
            @click="$emit('add-to-cart')"
            class="border border-black text-black ml-2 p-2 hover:bg-black hover:text-white transition-all active:scale-95"
          >
            <img src="/icons/baseicons/cart_black.svg" alt="Cart" class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>

    <!-- Tablet View (768px - 1023px) -->
    <div class="hidden md:flex lg:hidden flex-col px-6 py-4 gap-4">
      <!-- Top Row - Song Info and Controls -->
      <div class="flex items-center justify-between w-full">
        <!-- Left Section - Song Info -->
        <div class="flex items-center gap-4 flex-1 min-w-0">
          <img
            :src="currentMixtape.image"
            :alt="currentMixtape.title"
            class="w-14 h-14 object-cover rounded"
          />
          <div class="truncate">
            <h3 class="text-md font-geist-semibold truncate leading-tight">
              {{ currentMixtape.title }}
            </h3>
            <div class="flex items-center gap-1.5 mt-1">
              <img
                :src="currentMixtape.artistImage"
                :alt="currentMixtape.artist"
                class="w-4 h-4 rounded-full"
              />
              <span class="text-sm font-geist-regular text-gray-600 truncate">{{ currentMixtape.artist }}</span>
            </div>
          </div>
        </div>

        <!-- Center Section - Controls -->
        <div class="flex items-center gap-4">
          <button
            @click="toggleFavorite"
            class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-red-500 transition shrink-0"
          >
            <img src="/icons/baseicons/like_black.svg" class="w-5 h-5" alt="">
          </button>
          
          <button
            @click="togglePlay"
            class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition shrink-0"
          >
            <img :src="isPlaying ? '/icons/baseicons/pause.svg' : '/icons/baseicons/play_black.svg'" class="w-6 h-6" alt="">
          </button>
        </div>
      </div>

      <!-- Middle Row - Progress Bar -->
      <div class="h-1.5 bg-gray-200 rounded-full overflow-hidden relative w-full">
        <div
          class="absolute top-0 left-0 h-full bg-[#A10501] transition-all duration-300"
          :style="{ width: progressPercentage + '%' }"
        ></div>
      </div>

      <!-- Bottom Row - Duration, Price and Actions -->
      <div class="flex items-center justify-between w-full">
        <!-- Duration -->
        <div class="text-sm font-geist-semibold text-black">
          {{ formatTime(currentTime) }} - {{ formatTime(duration) }}
        </div>

        <!-- Price and BPM -->
        <div class="flex items-center gap-4">
          <div class="text-sm font-geist-semibold text-black">
            {{ currentMixtape.price }}
          </div>
          <div class="text-xs font-geist-semibold text-gray-500">
            {{ currentMixtape.bpm }}BPM
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex items-center gap-3">
          <button
            @click="$emit('buy-now')"
            class="border border-[#A10501] text-[#A10501] text-sm font-glancyr-semibold py-1.5 px-4 hover:bg-[#A10501] hover:text-white transition-all active:scale-[0.98]"
          >
            BUY NOW
          </button>
          <button
            @click="$emit('add-to-cart')"
            class="border border-black text-black p-2 hover:bg-black hover:text-white transition-all active:scale-95"
          >
            <img src="/icons/baseicons/cart_black.svg" alt="Cart" class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile View (up to 767px) -->
    <div class="flex md:hidden flex-col px-4 py-3 gap-3">
      <!-- Progress Bar -->
      <div class="h-1 bg-gray-200 rounded-full overflow-hidden relative w-full">
        <div
          class="absolute top-0 left-0 h-full bg-[#A10501] transition-all duration-300"
          :style="{ width: progressPercentage + '%' }"
        ></div>
      </div>

      <!-- Song Info and Controls -->
      <div class="flex items-center justify-between w-full">
        <!-- Song Info -->
        <div class="flex items-center gap-3 flex-1 min-w-0">
          <img
            :src="currentMixtape.image"
            :alt="currentMixtape.title"
            class="w-12 h-12 object-cover rounded"
          />
          <div class="truncate">
            <h3 class="text-sm font-geist-semibold truncate leading-tight">
              {{ currentMixtape.title }}
            </h3>
            <div class="flex items-center gap-1 mt-0.5">
              <span class="text-xs font-geist-regular text-gray-600 truncate">{{ currentMixtape.artist }}</span>
              <span class="text-xs font-geist-regular text-gray-500 mx-1">•</span>
              <span class="text-xs font-geist-regular text-gray-500">{{ formatTime(currentTime) }}/{{ formatTime(duration) }}</span>
            </div>
          </div>
        </div>

        <!-- Controls -->
        <div class="flex items-center gap-2">
          <button
            @click="toggleFavorite"
            class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:border-red-500 transition shrink-0"
          >
            <img src="/icons/baseicons/like_black.svg" class="w-4 h-4" alt="">
          </button>
          
          <button
            @click="togglePlay"
            class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition shrink-0"
          >
            <img :src="isPlaying ? '/icons/baseicons/pause.svg' : '/icons/baseicons/play_black.svg'" class="w-5 h-5" alt="">
          </button>
        </div>
      </div>

      <!-- Price and Buy Button -->
      <div class="flex items-center justify-between w-full">
        <div class="text-sm font-geist-semibold text-black">
          {{ currentMixtape.price }}
        </div>
        <div class="flex items-center gap-2">
          <button
            @click="$emit('buy-now')"
            class="border border-[#A10501] text-[#A10501] text-xs font-glancyr-semibold py-1 px-3 hover:bg-[#A10501] hover:text-white transition-all active:scale-[0.98]"
          >
            BUY NOW
          </button>
          <button
            @click="$emit('add-to-cart')"
            class="border border-black text-black p-1.5 hover:bg-black hover:text-white transition-all active:scale-95"
          >
            <img src="/icons/baseicons/cart_black.svg" alt="Cart" class="w-3.5 h-3.5" />
          </button>
        </div>
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

/* Fixed player styling */
.fixed {
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  border-top: 1px solid #e5e7eb;
}

/* Mobile specific styles */
@media (max-width: 767px) {
  .fixed {
    padding-bottom: env(safe-area-inset-bottom);
  }
}
</style>