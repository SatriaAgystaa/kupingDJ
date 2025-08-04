<template>
  <div class="flex items-start sm:items-center gap-3 sm:gap-4 py-3 sm:py-4">
    <!-- Custom Checkbox -->
    <label class="custom-checkbox">
      <input 
        type="checkbox" 
        v-model="isSelected"
        class="opacity-0 absolute"
      >
      <span class="checkmark"></span>
    </label>
    
    <!-- Content Container -->
    <div class="flex-1 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
      <!-- Image and Details Row -->
      <div class="flex-1 flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">
        <!-- Image -->
        <div class="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
          <img 
            :src="mixtape.image" 
            :alt="mixtape.title"
            class="w-full h-full object-cover"
            loading="lazy"
          />
          <button
            @click="handlePlayClick"
            class="absolute inset-0 flex items-center justify-center transition-all bg-black/30 hover:bg-black/40 active:bg-black/50 touch-manipulation"
            :aria-label="isCurrentlyPlaying ? 'Pause' : 'Play'"
          >
            <img 
              :src="isCurrentlyPlaying ? '/icons/baseicons/pause.svg' : '/icons/baseicons/play.svg'" 
              :alt="isCurrentlyPlaying ? 'Pause' : 'Play'" 
              class="w-5 h-5 sm:w-6 sm:h-6 opacity-90 hover:opacity-100 active:scale-95 transition-all pointer-events-none"
              loading="lazy"
            />
          </button>
        </div>

        <!-- Details -->
        <div class="flex-1 min-w-0 font-geist-regular">
          <!-- Artist -->
          <div class="flex items-center gap-1 sm:gap-2 mb-0 sm:mb-1">
            <img 
              :src="mixtape.artistImage" 
              :alt="mixtape.artist"
              class="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover border border-gray-200 flex-shrink-0"
              loading="lazy"
            />
            <span class="text-sm sm:text-md font-geist-medium text-gray-900 break-words line-clamp-1">{{ mixtape.artist }}</span>
          </div>
          
          <!-- Title -->
          <h3 class="text-base sm:text-lg font-geist-semibold text-black break-words line-clamp-2">{{ mixtape.title }}</h3>
          
          <!-- Progress Bar (only show when playing) -->
          <div v-if="isCurrentlyPlaying && mixtape.music" class="mt-1 mb-1">
            <div class="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div 
                class="h-full bg-[#A10501] transition-all duration-300 ease-linear rounded-full transform-gpu" 
                :style="{ width: currentProgress + '%' }"
              ></div>
            </div>
          </div>
          
          <!-- Stats -->
          <div class="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-1 flex items-center flex-wrap gap-1 sm:gap-2">
            <div class="flex items-center gap-1">
              <img 
                src="/icons/baseicons/download_gray.svg" 
                alt="Downloads" 
                class="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                loading="lazy"
              />
              <span class="break-words">{{ mixtape.downloads }}</span>
            </div>
            <span class="flex-shrink-0">•</span>
            <span class="break-words">{{ mixtape.bpm }}BPM</span>
          </div>
        </div>
      </div>

      <!-- Price and Delete Button - Moves below on mobile -->
      <div class="flex sm:flex-row items-center sm:items-center justify-between gap-2 sm:gap-2 w-full sm:w-auto pl-0 sm:pl-2 ml-0 sm:ml-auto">
        <div class="text-base sm:text-lg font-geist-semibold text-black whitespace-nowrap">
          {{ mixtape.price }}
        </div>
        <button 
          @click="$emit('delete')"
          class="text-gray-400 hover:text-[#A10501] transition-colors flex-shrink-0"
          aria-label="Delete item"
        >
          <img 
            src="/icons/baseicons/trash.svg" 
            alt="Delete" 
            class="w-4 h-4 sm:w-5 sm:h-5"
            loading="lazy"
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Mixtape } from '~/data/mixtapes'
import { computed, inject } from 'vue'

const props = defineProps<{
  mixtape: Mixtape
  selected: boolean
}>()

const emit = defineEmits(['update:selected', 'delete'])

// Inject audio player from layout
const audioPlayer = inject<ReturnType<typeof import('~/composables/useAudioPlayer').useAudioPlayer>>('audioPlayer')
const { play, pause, isTrackPlaying, getTrackProgress } = audioPlayer || {}

const isSelected = computed({
  get() {
    return props.selected
  },
  set(value) {
    emit('update:selected', value)
  }
})

// Check if this mixtape is playing
const isCurrentlyPlaying = computed(() => {
  if (!isTrackPlaying || !props.mixtape.music) return false
  return isTrackPlaying(props.mixtape)
})

// Get current progress
const currentProgress = computed(() => {
  if (!audioPlayer?.getTrackProgress || !props.mixtape.music) return 0
  return audioPlayer.getTrackProgress(props.mixtape)
})

// Handle play/pause
const handlePlayClick = () => {
  if (!play || !pause || !props.mixtape.music) return
  
  if (isCurrentlyPlaying.value) {
    pause()
  } else {
    play(props.mixtape)
  }
}
</script>

<style scoped>
.custom-checkbox {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin-top: 0.5rem;
  flex-shrink: 0;
}

@media (min-width: 640px) {
  .custom-checkbox {
    margin-top: 0;
  }
}

.checkmark {
  position: relative;
  height: 18px;
  width: 18px;
  background-color: white;
  border: 1px solid #A10501;
  transition: all 0.2s ease;
}

@media (min-width: 640px) {
  .checkmark {
    height: 20px;
    width: 20px;
  }
}

.custom-checkbox input:checked ~ .checkmark {
  background-color: #A10501;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 5px;
  top: 2px;
  width: 5px;
  height: 9px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

@media (min-width: 640px) {
  .checkmark:after {
    left: 6px;
    top: 3px;
    height: 10px;
  }
}

.custom-checkbox input:checked ~ .checkmark:after {
  display: block;
}

/* Text handling */
.break-words {
  overflow-wrap: break-word;
  word-break: break-word;
}

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Prevent layout shift */
img {
  display: block;
  max-width: 100%;
  height: auto;
}

/* Mobile-specific adjustments */
@media (max-width: 639px) {
  .price-delete-container {
    width: 100%;
    padding-left: 4.5rem;
    margin-top: 0.5rem;
  }
}
</style>