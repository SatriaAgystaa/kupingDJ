import { ref, computed, watch } from 'vue'

export interface AudioTrack {
  id: string | number
  title: string
  artist: string
  image: string
  music?: string
  date?: string
  duration?: string
  size?: string
  price?: string
  bpm?: string
  artistImage?: string
  isFavorited?: boolean
  isAlbumTrack?: boolean
  category?: string
}

const currentTrack = ref<AudioTrack | null>(null)
const isPlaying = ref(false)
const audioProgress = ref(0)
const currentTime = ref(0)
const duration = ref(0)
const audio = ref<HTMLAudioElement | null>(null)
let animationFrameId: number | null = null

export const useAudioPlayer = () => {
  const initializeAudio = (track: AudioTrack) => {
    if (!track.music) return
    
    if (audio.value) {
      audio.value.pause()
      audio.value.removeEventListener('timeupdate', updateTime)
      audio.value.removeEventListener('ended', handleEnded)
      audio.value.removeEventListener('loadedmetadata', handleLoadedMetadata)
    }
    
    audio.value = new Audio(track.music)
    
    audio.value.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.value.addEventListener('timeupdate', updateTime)
    audio.value.addEventListener('ended', handleEnded)
  }

  const handleLoadedMetadata = () => {
    if (audio.value) {
      duration.value = audio.value.duration || 0
      if (isPlaying.value) {
        audio.value.play().catch(e => console.error('Playback failed:', e))
        startProgressAnimation()
      }
    }
  }

  const updateTime = () => {
    if (audio.value) {
      currentTime.value = audio.value.currentTime || 0
      const progress = duration.value > 0 ? (currentTime.value / duration.value) * 100 : 0
      audioProgress.value = Math.min(progress, 100)
    }
  }

  const handleEnded = () => {
    // Reset immediately for smooth transition
    audioProgress.value = 0
    currentTime.value = 0
    isPlaying.value = false
    stopProgressAnimation()
    
    // Force update to ensure UI reflects the reset
    if (audio.value) {
      audio.value.currentTime = 0
    }
  }

  const startProgressAnimation = () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
    }

    let lastTime = performance.now()
    const targetFPS = 30 // Limit to 30fps for better mobile performance
    const frameDelay = 1000 / targetFPS

    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= frameDelay) {
        updateTime()
        lastTime = currentTime
      }
      
      if (isPlaying.value && audio.value && !audio.value.paused) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }
    animationFrameId = requestAnimationFrame(animate)
  }

  const stopProgressAnimation = () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
      animationFrameId = null
    }
  }

  const play = (track: AudioTrack) => {
    // Compare by unique ID instead of just music path
    if (currentTrack.value?.id !== track.id || currentTrack.value?.music !== track.music) {
      currentTrack.value = track
      initializeAudio(track)
    }
    
    if (audio.value) {
      isPlaying.value = true
      audio.value.play().catch(e => console.error('Playback failed:', e))
      startProgressAnimation()
    }
  }

  const pause = () => {
    if (audio.value) {
      audio.value.pause()
      isPlaying.value = false
      stopProgressAnimation()
    }
  }

  const togglePlay = (track?: AudioTrack) => {
    if (track) {
      // Compare by unique ID instead of just music path
      if (currentTrack.value?.id === track.id && isPlaying.value) {
        pause()
      } else {
        play(track)
      }
    } else if (currentTrack.value) {
      if (isPlaying.value) {
        pause()
      } else {
        play(currentTrack.value)
      }
    }
  }

  const stop = () => {
    if (audio.value) {
      audio.value.pause()
      audio.value.currentTime = 0
    }
    isPlaying.value = false
    audioProgress.value = 0
    currentTime.value = 0
    currentTrack.value = null
    stopProgressAnimation()
  }

  const isTrackPlaying = (track: AudioTrack) => {
    // Compare by unique ID to ensure each track is treated separately
    return currentTrack.value?.id === track.id && isPlaying.value
  }

  const getTrackProgress = (track: AudioTrack) => {
    if (isTrackPlaying(track)) {
      return audioProgress.value
    }
    return 0
  }

  return {
    currentTrack: computed(() => currentTrack.value),
    isPlaying: computed(() => isPlaying.value),
    audioProgress: computed(() => audioProgress.value),
    currentTime: computed(() => currentTime.value),
    duration: computed(() => duration.value),
    play,
    pause,
    togglePlay,
    stop,
    isTrackPlaying,
    getTrackProgress
  }
}