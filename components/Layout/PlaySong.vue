<template>
  <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
    <!-- Desktop View -->
    <div class="hidden lg:flex flex-row items-center justify-between w-full max-w-[2000px] mx-auto px-6 xl:px-12 py-4 relative font-geist gap-4">
      <!-- Left Section -->
      <div class="flex items-center gap-2 w-[280px] flex-shrink-0 relative">
        <button 
          @click="closePlayer"
          class="absolute -left-8 w-6 h-6 flex items-center justify-center"
          aria-label="Close player"
        >
          <img src="/icons/baseicons/close.svg" alt="Close" class="w-6 h-6" />
        </button>
        
        <img
          :src="currentMixtape.image"
          :alt="currentMixtape.title"
          class="w-16 h-16 object-cover"
        />

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
        <button
          @click="$emit('toggle-favorite', currentMixtape)"
          class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-red-500 transition mr-3 shrink-0"
        >
          <img :src="currentMixtape.isFavorited ? '/icons/baseicons/like_pink.svg' : '/icons/baseicons/like_black.svg'" class="w-5 h-5" alt="">
        </button>
        
        <button
          @click="togglePlay"
          class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition mr-3 shrink-0"
        >
          <img :src="isPlaying ? '/icons/baseicons/pause.svg' : '/icons/baseicons/play_black.svg'" class="w-6 h-6" alt="">
        </button>

        <div class="flex flex-col flex-1 min-w-0">
          <div class="h-2 bg-gray-200 rounded-full overflow-hidden relative mb-1.5">
            <div
              class="absolute top-0 left-0 h-full bg-[#A10501] transition-all duration-300"
              :style="{ width: progressPercentage + '%' }"
            ></div>
          </div>
          <div class="text-md font-geist-semibold text-black whitespace-nowrap">
            {{ formatTime(currentTime) }} - {{ formatTime(duration) }}
          </div>
        </div>
      </div>

      <!-- Right Section -->
      <div class="flex flex-col justify-between items-end w-[260px] flex-shrink-0 gap-2">
        <div class="text-lg font-geist-semibold text-black leading-tight w-full text-right">
          {{ currentMixtape.price }}
        </div>

        <div class="flex justify-between w-full text-sm text-gray-500">
          <div class="flex items-center gap-1.5">
            <img src="/icons/baseicons/date.svg" alt="Date" class="w-4 h-4" />
            <span class="font-geist-regular">{{ currentMixtape.date }}</span>
          </div>
          <span class="font-geist-semibold">{{ currentMixtape.bpm }}BPM</span>
        </div>

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

    <!-- Mobile View -->
    <div class="flex lg:hidden flex-col px-4 py-3 gap-2">
      <div class="h-1 bg-gray-200 rounded-full overflow-hidden relative w-full">
        <div
          class="absolute top-0 left-0 h-full bg-[#A10501] transition-all duration-300"
          :style="{ width: progressPercentage + '%' }"
        ></div>
      </div>

      <div class="flex items-center justify-between w-full">
        <div class="flex items-center gap-2 flex-1 min-w-0">
          <button 
            @click="closePlayer"
            class="w-5 h-5 flex items-center justify-center shrink-0"
            aria-label="Close player"
          >
            <img src="/icons/baseicons/close.svg" alt="Close" class="w-5 h-5" />
          </button>
          
          <img
            :src="currentMixtape.image"
            :alt="currentMixtape.title"
            class="w-12 h-12 object-cover"
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

        <div class="flex items-center gap-2">
          <button
            @click="$emit('toggle-favorite', currentMixtape)"
            class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:border-red-500 transition shrink-0"
          >
            <img :src="currentMixtape.isFavorited ? '/icons/baseicons/like_pink.svg' : '/icons/baseicons/like_black.svg'" class="w-4 h-4" alt="">
          </button>
          
          <button
            @click="togglePlay"
            class="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-100 transition shrink-0"
          >
            <img :src="isPlaying ? '/icons/baseicons/pause.svg' : '/icons/baseicons/play_black.svg'" class="w-5 h-5" alt="">
          </button>
        </div>
      </div>

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
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  mixtape: {
    type: Object,
    required: true
  },
  isPlaying: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['play', 'pause', 'toggle-favorite', 'buy-now', 'add-to-cart', 'close', 'progress'])

const currentMixtape = ref(props.mixtape)
const isPlaying = ref(props.isPlaying)
const currentTime = ref(0)
const duration = ref(0)
const audio = ref<HTMLAudioElement | null>(null)

const progressPercentage = computed(() => {
  return duration.value > 0 ? (currentTime.value / duration.value) * 100 : 0
})

const togglePlay = () => {
  if (isPlaying.value) {
    audio.value?.pause()
    emit('pause')
  } else {
    audio.value?.play()
    emit('play', currentMixtape.value)
  }
  isPlaying.value = !isPlaying.value
}


// Tambahkan fungsi ini untuk memastikan audio langsung diputar
const initializeAudio = () => {
  if (audio.value) {
    audio.value.pause()
    audio.value.removeEventListener('timeupdate', updateTime)
    audio.value.removeEventListener('ended', handleEnded)
  }
  
  audio.value = new Audio(currentMixtape.value.music)
  
  audio.value.addEventListener('loadedmetadata', () => {
    duration.value = audio.value?.duration || 0
    if (isPlaying.value) {
      audio.value?.play().catch(e => console.error('Playback failed:', e))
    }
  })
  
  audio.value.addEventListener('timeupdate', updateTime)
  audio.value.addEventListener('ended', handleEnded)
}

const updateTime = () => {
  currentTime.value = audio.value?.currentTime || 0
  // Emit progress to parent
  emit('progress', progressPercentage.value)
}

const handleEnded = () => {
  isPlaying.value = false
  emit('pause')
}

// Panggil initializeAudio saat komponen dimount
onMounted(initializeAudio)

// Ketika mixtape berubah, inisialisasi ulang audio
watch(() => props.mixtape, (newMixtape) => {
  currentMixtape.value = newMixtape
  initializeAudio()
})

// Ketika isPlaying berubah, play/pause audio
watch(() => props.isPlaying, (playing) => {
  isPlaying.value = playing
  if (playing) {
    audio.value?.play().catch(e => console.error('Playback failed:', e))
  } else {
    audio.value?.pause()
  }
})


const closePlayer = () => {
  audio.value?.pause()
  emit('close')
}

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`
}

// Initialize audio
onMounted(() => {
  audio.value = new Audio(currentMixtape.value.music)
  
  audio.value.addEventListener('loadedmetadata', () => {
    duration.value = audio.value?.duration || 0
  })
  
  audio.value.addEventListener('timeupdate', () => {
    currentTime.value = audio.value?.currentTime || 0
  })
  
  audio.value.addEventListener('ended', () => {
    isPlaying.value = false
    emit('pause')
  })
})

// Handle prop changes
watch(() => props.mixtape, (newMixtape) => {
  currentMixtape.value = newMixtape
  if (audio.value) {
    audio.value.src = newMixtape.music
    if (isPlaying.value) {
      audio.value.play()
    }
  }
})

watch(() => props.isPlaying, (playing) => {
  isPlaying.value = playing
  if (playing) {
    audio.value?.play()
  } else {
    audio.value?.pause()
  }
})

onUnmounted(() => {
  audio.value?.pause()
  audio.value?.removeEventListener('timeupdate', () => {})
  audio.value?.removeEventListener('ended', () => {})
})
</script>