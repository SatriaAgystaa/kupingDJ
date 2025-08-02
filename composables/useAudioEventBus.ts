import { ref, type Ref } from 'vue'

const currentPlayingSection: Ref<string | null> = ref(null)
const currentPlayingId: Ref<number | null> = ref(null)

export const useAudioEventBus = () => {
  const notifyPlay = (sectionId: string, mixtapeId: number): void => {
    currentPlayingSection.value = sectionId
    currentPlayingId.value = mixtapeId
  }

  const isCurrentlyPlaying = (sectionId: string, mixtapeId: number): boolean => {
    return currentPlayingSection.value === sectionId && currentPlayingId.value === mixtapeId
  }

  const getCurrentPlayingSection = (): string | null => currentPlayingSection.value
  const getCurrentPlayingId = (): number | null => currentPlayingId.value

  return {
    notifyPlay,
    isCurrentlyPlaying,
    getCurrentPlayingSection,
    getCurrentPlayingId
  }
}