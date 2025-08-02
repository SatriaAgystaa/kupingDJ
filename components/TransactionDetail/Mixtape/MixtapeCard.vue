<template>
  <div class="flex items-start sm:items-center gap-3 sm:gap-4 py-3 sm:py-4">
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
            @click="handlePlay"
            class="absolute inset-0 flex items-center justify-center transition-all"
          >
            <img 
              :src="isLocalPlaying ? '/icons/baseicons/pause_white.svg' : '/icons/baseicons/play.svg'" 
              :alt="isLocalPlaying ? 'Pause' : 'Play'" 
              class="w-5 h-5 sm:w-6 sm:h-6 opacity-90 hover:opacity-100 transition-opacity"
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import { useAudioEventBus } from '@/composables/useAudioEventBus'
import type { Mixtape } from '~/data/mixtapes'

const props = defineProps<{
  mixtape: Mixtape
}>()

const { currentTrack, isPlaying, play, pause } = inject('audioPlayer')
const { notifyPlay } = useAudioEventBus()

// Component ID unique for this mixtape
const componentId = computed(() => `transaction-detail-${props.mixtape.id}`)

// Local playing state
const isLocalPlaying = computed(() => {
  return isPlaying.value && 
         currentTrack.value && 
         currentTrack.value.id === props.mixtape.id
})

const handlePlay = () => {
  if (isLocalPlaying.value) {
    pause()
  } else {
    notifyPlay(componentId.value, props.mixtape.id)
    play(props.mixtape)
  }
}
</script>

<style scoped>
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
