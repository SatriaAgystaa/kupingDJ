import { ref } from 'vue'

const currentPlayingSection = ref(null)
const currentPlayingId = ref(null)

export const useAudioEventBus = () => {
  const notifyPlay = (sectionId, mixtapeId) => {
    currentPlayingSection.value = sectionId
    currentPlayingId.value = mixtapeId
  }

  const isCurrentlyPlaying = (sectionId, mixtapeId) => {
    return currentPlayingSection.value === sectionId && currentPlayingId.value === mixtapeId
  }

  const getCurrentPlayingSection = () => currentPlayingSection.value
  const getCurrentPlayingId = () => currentPlayingId.value

  return {
    notifyPlay,
    isCurrentlyPlaying,
    getCurrentPlayingSection,
    getCurrentPlayingId
  }
}