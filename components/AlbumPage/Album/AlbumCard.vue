<!-- AlbumCard.vue -->
<template>
  <div class="album-card bg-white border overflow-hidden shadow-sm h-full hover:shadow-md transition-shadow duration-300">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
      <!-- Left Section -->
      <div class="p-4 sm:p-5 md:p-6 flex flex-col h-full border-b border-gray-200">
        <div class="relative mb-4 sm:mb-5 md:mb-6">
          <img :src="coverImage" :alt="title" class="w-full h-full object-cover aspect-square" />
          <button
            @click="toggleLike"
            class="absolute top-4 right-4 bg-white p-2 sm:p-3 rounded-full shadow-sm hover:bg-gray-50 transition-colors"
          >
            <img
              :src="isLiked ? '/icons/baseicons/like_pink.svg' : '/icons/baseicons/like_black.svg'"
              class="w-4 h-4 sm:w-5 sm:h-5"
              alt="Like Icon"
            />
          </button>
        </div>

        <h3 class="text-xl sm:text-2xl md:text-2xl font-geist-semibold text-black mb-2 sm:mb-3">
          {{ title }}
        </h3>
        <div class="flex items-center text-gray-500 text-xs sm:text-sm mb-1">
          <img src="/icons/baseicons/date.svg" class="w-3 h-3 sm:w-4 sm:h-4 mr-1" alt="Date" />
          <span class="font-geist-medium">{{ date }}</span>
        </div>
        <p class="font-geist-semibold text-black text-sm sm:text-base md:text-lg mb-4 sm:mb-5">
          Rp. {{ price.toLocaleString('id-ID') }} <span class="text-gray-500 text-xs sm:text-sm">(bundling Price)</span>
        </p>
        <div class="flex items-center gap-2 mt-auto">
          <button class="flex-1 bg-white border-2 border-[#A10501] text-[#A10501] font-glancyr-medium p-2 text-base sm:text-lg md:text-xl hover:bg-[#A10501]/5 transition-colors">
            BUY BUNDLING
          </button>
          <button class="border-2 border-black text-black p-2 hover:bg-gray-50 transition-colors">
            <img src="/icons/baseicons/cart_black.svg" class="w-6 h-6 sm:w-7 sm:h-7" alt="Cart" />
          </button>
        </div>
      </div>

      <!-- Right Section -->
      <div class="px-4 sm:px-0 md:px-6 lg:px-0 sm:pr-5 lg:pr-6 py-4 sm:py-5 md:py-6 flex flex-col h-full sm:aspect-square md:aspect-square lg:asspect-square w-full">
        <div class="flex-1 overflow-y-auto pr-1 custom-scroll font-geist-regular">
          <div class="grid grid-cols-2 gap-3">
            <div
              v-for="(track, i) in tracks"
              :key="i"
              class="bg-white border shadow-sm flex flex-col justify-between w-full max-w-xs hover:shadow-md transition-shadow"
            >
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
                    <div class="flex items-center text-[10px] sm:text-[10px] text-gray-500 mt-1">
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
                        class="hover:opacity-70 active:opacity-50 transition-opacity flex-shrink-0"
                      >
                        <img 
                          :src="isTrackPlaying({ 
                            id: `${id}-${track.title}`,
                            title: track.title,
                            artist: title,
                            image: coverImage,
                            music: track.music,
                            date: track.date,
                            duration: track.duration,
                            size: track.size,
                            isAlbumTrack: true
                          }) ? '/icons/baseicons/pause.svg' : '/icons/baseicons/play_black.svg'" 
                          class="w-4 h-4 sm:w-4 sm:h-4"
                          :alt="isTrackPlaying({ 
                            id: `${id}-${track.title}`,
                            title: track.title,
                            artist: title,
                            image: coverImage,
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
                              id: `${id}-${track.title}`,
                              title: track.title,
                              artist: title,
                              image: coverImage,
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
              <div v-if="track.price === 'Download'" class="bg-[#A10501] text-white text-xs sm:text-xs font-medium flex items-center justify-between px-3 py-2">
                <span>Download</span>
                <img :src="track.icon" class="w-3 h-3 sm:w-4 sm:h-4" alt="Download" />
              </div>
              <div v-else class="bg-[#A10501] text-white flex items-center justify-between px-3 py-2">
                <span class="text-xs sm:text-xs font-medium">{{ track.price }}</span>
                <button>
                  <img :src="track.icon" class="w-3 h-3 sm:w-4 sm:h-4" alt="Cart" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, computed } from 'vue'

const props = defineProps({
  id: Number,
  title: String,
  coverImage: String,
  date: String,
  price: Number,
  tracks: Array,
  isFavorited: Boolean
})

const emit = defineEmits(['toggle-favorite'])

// Inject audio player from layout
const audioPlayer = inject('audioPlayer')
const { play, pause, currentTrack, isPlaying, audioProgress, isTrackPlaying, getTrackProgress } = audioPlayer

const isLiked = ref(props.isFavorited || false)

// Handle track play/pause
const handleTrackPlay = (track) => {
  // Create track data object similar to mixtape
  const trackData = {
    id: `${props.id}-${track.title}`,
    title: track.title,
    artist: props.title, // Use album title as artist
    image: props.coverImage,
    music: track.music,
    date: track.date,
    duration: track.duration,
    size: track.size, // Add size for album tracks
    isAlbumTrack: true // Flag to identify album tracks
  }
  
  if (isTrackPlaying(trackData)) {
    pause()
  } else {
    play(trackData)
  }
}

const toggleLike = () => {
  isLiked.value = !isLiked.value
  emit('toggle-favorite', props.id)
}
</script>

<style scoped>
.custom-scroll::-webkit-scrollbar {
  width: 6px;
}
.custom-scroll::-webkit-scrollbar-thumb {
  background-color: #bbb;
  border-radius: 10px;
}
.album-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.album-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
</style>