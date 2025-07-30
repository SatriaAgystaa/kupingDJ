<template>
  <div v-if="showTrack" class="flex items-start sm:items-center gap-3 sm:gap-4 py-3 sm:py-4">
    <!-- Content Container -->
    <div class="flex-1 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
      <!-- Image and Details Row -->
      <div class="flex-1 flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">
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
            <span class="text-sm sm:text-md font-geist-medium text-[#A10501] break-words line-clamp-1">
              {{ track.category }}
            </span>
          </div>
          
          <!-- Title -->
          <h3 class="text-base sm:text-lg font-geist-semibold text-black break-words line-clamp-2">
            {{ track.title }}
          </h3>
          
          <!-- Album Title -->
          <div class="flex items-center gap-1 sm:gap-2 mt-0 sm:mt-1">
            <span class="text-sm sm:text-md text-gray-500 break-words line-clamp-1">
              From {{ track.title }}
            </span>
          </div>
          
          <!-- Stats -->
          <div class="mt-1">
            <div class="flex items-center text-xs sm:text-sm text-gray-500 gap-1 sm:gap-2 justify-start w-full sm:w-2/3 lg:w-3/5">
              <img 
                :src="track.headIcon" 
                class="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                loading="lazy"
              />
              <template v-if="showProgressBar">
                <div class="flex-1 h-1 bg-gray-200 overflow-hidden min-w-[50px]">
                  <div class="h-full bg-[#A10501]" style="width: 30%"></div>
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Track } from '~/data/albums'
import { computed } from 'vue'

const props = defineProps<{
  track: Track
}>()

const showTrack = computed(() => props.track.category !== 'Video')
const showProgressBar = computed(() => !props.track.headIcon.includes('file.svg'))
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
