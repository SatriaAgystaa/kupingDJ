<template>
  <div v-if="showTrack" class="flex items-start sm:items-center gap-3 sm:gap-4 py-3 sm:py-4">
    <!-- Custom Checkbox - Will be used for bulk deletion when backend is connected -->
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
      <div class="flex-1 flex items-start sm:items-start gap-3 sm:gap-4 min-w-0">
        <!-- Image -->
        <div class="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 bg-red-100 flex items-center justify-center">
          <img 
            :src="track.logo" 
            :alt="track.title"
            class="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            loading="lazy"
          />
        </div>

        <!-- Details -->
        <div class="flex-1 min-w-0 font-geist-regular overflow-hidden">
          <!-- Category -->
          <div class="flex items-center gap-1 sm:gap-2 mb-0 sm:mb-1">
            <span class="text-sm sm:text-md font-geist-medium text-[#A10501] break-words line-clamp-1">{{ track.category }}</span>
          </div>
          
          <!-- Title -->
          <h3 class="text-base sm:text-lg font-geist-semibold text-black break-words line-clamp-2">{{ track.title }}</h3>
          
          <!-- Album Title -->
          <div class="flex items-center gap-1 sm:gap-2 mt-0 sm:mt-1">
            <span class="text-sm sm:text-md text-gray-500 break-words line-clamp-1">From {{ track.title }}</span>
          </div>
          
          <!-- Stats -->
          <div class="mt-1">
            <div class="flex items-center text-xs sm:text-sm text-gray-500 gap-1 sm:gap-2 justify-start w-full sm:w-2/3 lg:w-2/5">
              <button
                v-if="hasMusic"
                @click="handlePlayClick"
                class="hover:opacity-70 active:opacity-50 transition-opacity flex-shrink-0 touch-manipulation"
                :aria-label="isCurrentlyPlaying ? 'Pause' : 'Play'"
              >
                <img 
                  :src="isCurrentlyPlaying ? '/icons/baseicons/pause_white.svg' : '/icons/baseicons/play_black.svg'" 
                  class="w-3 h-3 sm:w-4 sm:h-4 pointer-events-none"
                  :alt="isCurrentlyPlaying ? 'Pause' : 'Play'"
                />
              </button>
              <img 
                v-else
                :src="track.headIcon" 
                class="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                loading="lazy"
              />
              <template v-if="showProgressBar">
                <div class="flex-1 h-1 bg-gray-200 overflow-hidden min-w-[50px] rounded-full">
                  <div 
                    class="h-full bg-[#A10501] transition-all duration-300 ease-linear rounded-full transform-gpu" 
                    :style="{ width: currentProgress + '%' }"
                  ></div>
                </div>
              </template>
              <span class="break-words">{{ track.duration }}</span>
            </div>
            <div class="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-1 flex items-center flex-wrap gap-1 sm:gap-2">
              <span class="break-words">{{ track.size }} File Size</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Price and Delete Button -->
      <div class="flex sm:flex-row items-center sm:items-center justify-between gap-2 sm:gap-2 w-full sm:w-auto pl-0 sm:pl-2 ml-0 sm:ml-auto">
        <div class="text-base sm:text-lg font-geist-semibold text-black whitespace-nowrap">
          {{ track.price }}
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
import type { Track } from '~/data/albums'
import { computed, inject } from 'vue'
import type { AudioTrack } from '~/composables/useAudioPlayer'

const props = defineProps<{
  track: Track
  selected: boolean
  albumId?: number
  albumTitle?: string
  albumImage?: string
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

const showTrack = computed(() => props.track.category !== 'Video')
const showProgressBar = computed(() => !props.track.headIcon.includes('file.svg') && props.track.music)
const hasMusic = computed(() => !!props.track.music)

// Convert Track to AudioTrack format with unique ID for YourChart context
const trackData = computed<AudioTrack>(() => ({
  id: `yourchart-album-${props.albumId || 'unknown'}-track-${props.track.title}-${props.track.music?.split('/').pop() || 'nomusic'}`,
  title: props.track.title,
  artist: props.albumTitle || 'Unknown Artist',
  image: props.albumImage || props.track.logo,
  music: props.track.music,
  date: props.track.date,
  duration: props.track.duration,
  size: props.track.size,
  price: props.track.price,
  category: props.track.category,
  isAlbumTrack: true
}))

// Check if this track is playing
const isCurrentlyPlaying = computed(() => {
  if (!isTrackPlaying || !props.track.music) return false
  return isTrackPlaying(trackData.value)
})

// Get current progress
const currentProgress = computed(() => {
  if (!getTrackProgress || !props.track.music) return 0
  return getTrackProgress(trackData.value)
})

// Handle play/pause
const handlePlayClick = () => {
  if (!play || !pause || !props.track.music) return
  
  if (isCurrentlyPlaying.value) {
    pause()
  } else {
    play(trackData.value)
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

.custom-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
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