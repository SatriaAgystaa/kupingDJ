<!-- TrackCard.vue -->
<template>
  <div class="bg-white border shadow-sm flex flex-col justify-between w-full max-w-xs hover:shadow-md transition-shadow font-geist-medium">
    <!-- Promotion Video Section (if track is video) -->
    <template v-if="track.type === 'video'">
      <div class="p-3 flex flex-col h-full">
        <div class="mb-3">
          <div class="flex items-center text-xs sm:text-xs text-gray-500 gap-2 justify-start">
            <img :src="track.headIcon" class="w-4 h-4 sm:w-4 sm:h-4"/>
            <!-- Music progress bar - only show if not file.svg -->
            <template v-if="!track.headIcon.includes('file.svg') && track.music">
              <div class="flex-1 h-1 bg-gray-200 overflow-hidden rounded-full">
                <div 
                  class="h-full bg-[#A10501] transition-all duration-300 ease-linear rounded-full" 
                  :style="{ width: '30%' }"
                ></div>
              </div>
            </template>
          </div>
          <div class="flex items-center text-[10px] sm:text-[10px] text-gray-500 mt-1 font-geist-regular">
            <span>{{ track.duration }}</span>
          </div>
        </div>
        
        <div class="mt-auto">
          <h4 class="font-geist-semibold text-sm sm:text-md text-black mb-1">{{ track.title }}</h4>
        </div>
      </div>
    </template>

    <!-- Music Track Section -->
    <template v-else>
      <div class="p-3 flex flex-col h-full">
        <div class="mb-3">
          <div class="flex items-center text-xs sm:text-xs text-gray-500 gap-2 justify-start">
            <button
              v-if="track.music"
              @click="handleTrackPlay(track)"
              class="hover:opacity-70 active:opacity-50 transition-opacity flex-shrink-0 touch-manipulation"
            >
              <img 
                :src="isTrackPlaying({ 
                  id: `${albumId}-${track.title}`,
                  title: track.title,
                  artist: albumTitle,
                  image: albumCoverImage,
                  music: track.music,
                  date: track.date,
                  duration: track.duration,
                  size: track.size,
                  isAlbumTrack: true
                }) ? '/icons/baseicons/pause.svg' : '/icons/baseicons/play_black.svg'" 
                class="w-4 h-4 sm:w-4 sm:h-4"
                :alt="isTrackPlaying({ 
                  id: `${albumId}-${track.title}`,
                  title: track.title,
                  artist: albumTitle,
                  image: albumCoverImage,
                  music: track.music,
                  date: track.date,
                  duration: track.duration,
                  size: track.size,
                  isAlbumTrack: true
                }) ? 'Pause' : 'Play'"
              />
            </button>
            <img 
              v-else
              :src="track.headIcon" 
              class="w-4 h-4 sm:w-4 sm:h-4"
            />
            <!-- Music progress bar - only show if not file.svg and has music -->
            <template v-if="!track.headIcon.includes('file.svg') && track.music">
              <div class="flex-1 h-1 bg-gray-200 overflow-hidden rounded-full">
                <div 
                  class="h-full bg-[#A10501] transition-all duration-300 ease-linear rounded-full" 
                  :style="{ width: getTrackProgress({ 
                    id: `${albumId}-${track.title}`,
                    title: track.title,
                    artist: albumTitle,
                    image: albumCoverImage,
                    music: track.music,
                    date: track.date,
                    duration: track.duration,
                    size: track.size,
                    isAlbumTrack: true
                  }) + '%' }"
                ></div>
              </div>
            </template>
          </div>
          <div class="flex items-center text-[10px] sm:text-[10px] text-gray-500 mt-1">
            <span>{{ track.duration }}</span>
          </div>
        </div>
        
        <div class="mt-auto">
          <h4 class="font-geist-semibold text-sm sm:text-md text-black mb-1">{{ track.title }}</h4>
          <p class="text-xs sm:text-xs text-gray-500">{{ track.date }} • {{ track.size }}</p>
        </div>
      </div>
    </template>

    <!-- Bottom Section (same for both) -->
    <div v-if="track.price === 'Download'" class="bg-[#A10501] text-white text-xs sm:text-xs font-geist-semibold flex items-center justify-between px-3 py-2">
      <span>Download</span>
      <img :src="track.icon" class="w-3 h-3 sm:w-4 sm:h-4" alt="Download" />
    </div>
    <div v-else class="bg-[#A10501] text-white flex items-center justify-between px-3 py-2">
      <span class="text-xs sm:text-xs font-geist-semibold">{{ track.price }}</span>
      <button class="touch-manipulation">
        <img :src="track.icon" class="w-3 h-3 sm:w-4 sm:h-4" alt="Cart" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const props = defineProps({
  albumId: Number,
  albumTitle: String,
  albumCoverImage: String,
  track: Object
})

// Inject audio player from layout
const audioPlayer = inject('audioPlayer')
const { play, pause, isTrackPlaying, getTrackProgress } = audioPlayer

// Handle track play/pause
const handleTrackPlay = (track) => {
  const trackData = {
    id: `${props.albumId}-${track.title}`,
    title: track.title,
    artist: props.albumTitle,
    image: props.albumCoverImage,
    music: track.music,
    date: track.date,
    duration: track.duration,
    size: track.size,
    isAlbumTrack: true
  }
  
  if (isTrackPlaying(trackData)) {
    pause()
  } else {
    play(trackData)
  }
}
</script>