<template>
  <div class="relative w-full mx-auto">
    <div class="relative w-full h-full flex items-center">
      <div 
        class="relative z-20 w-[80%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[80%]" 
        ref="albumCover"
      >
        <div class="relative w-full aspect-square overflow-hidden group">
          <img 
            :src="image" 
            :alt="title"
            class="w-full h-full object-cover"
            loading="lazy"
          />

          <button 
            @click="handlePlay"
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-300 hover:scale-90"
            :style="{ width: playButtonSize, height: playButtonSize }"
            aria-label="Play mixtape"
          >
            <img 
              :src="isPlaying ? '/icons/baseicons/pause_white.svg' : '/icons/baseicons/play.svg'" 
              :alt="isPlaying ? 'Pause' : 'Play'" 
              class="w-full h-full" 
            />
          </button>

          <button 
            @click="$emit('toggle-favorite')"
            class="absolute top-2 right-2 z-30 bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-90"
            :style="{ width: likeButtonSize, height: likeButtonSize }"
            aria-label="Toggle favorite"
          >
            <img 
              :src="isFavorited ? '/icons/baseicons/like_red.svg' : '/icons/baseicons/like_black.svg'" 
              alt="Like" 
              class="transition-all duration-300"
              :style="{ width: iconInnerSize, height: iconInnerSize }"
            />
          </button>
        </div>
      </div>

      <div class="absolute right-0 z-10 translate-x-1/5" :style="{ width: albumWidth, height: albumWidth }">
        <img
          src="/icons/baseicons/vinyl2.svg"
          alt="Vinyl Record"
          :class="{'animate-spin-slow': isPlaying, 'animate-pause': !isPlaying}"
          class="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, inject } from 'vue'

const props = defineProps({
  image: String,
  title: String,
  isFavorited: Boolean,
  isPlaying: Boolean,
  mixtape: Object
})

const emit = defineEmits(['play', 'toggle-favorite', 'pause'])

const { play, pause } = inject('audioPlayer')

const handlePlay = () => {
  if (props.isPlaying) {
    pause()
    emit('pause') // Emit event pause ketika musik sedang diputar
  } else {
    play(props.mixtape)
    emit('play', props.mixtape)
  }
}

// ukuran album cover
const albumCover = ref(null)
const albumWidth = ref('0px')

// icon sizes yang dinamis
const playButtonSize = ref('0px')
const likeButtonSize = ref('0px')
const iconInnerSize = ref('0px')

const updateSizes = () => {
  if (albumCover.value) {
    const width = albumCover.value.offsetWidth
    albumWidth.value = `${width}px`

    // Play button sekitar 15% dari cover
    playButtonSize.value = `${width * 0.15}px`

    // Like button sekitar 10% dari cover
    likeButtonSize.value = `${width * 0.15}px`

    // Inner icon like sekitar 50% dari tombol like
    iconInnerSize.value = `${width * 0.08}px`
  }
}

onMounted(() => {
  updateSizes()
  window.addEventListener('resize', updateSizes)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSizes)
})
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 20s linear infinite;
}

.animate-pause {
  animation-play-state: paused;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

button {
  will-change: transform;
  backface-visibility: hidden;
  transform-style: preserve-3d;
}

@media (max-width: 640px) {
  .animate-spin-slow {
    animation-duration: 30s;
  }
}
</style>