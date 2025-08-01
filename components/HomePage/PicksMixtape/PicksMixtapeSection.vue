<template>
  <div class="picksMixtape-section bg-black">
    <div class="mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <h2 class="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-white font-glancyr-regular tracking-wide leading-tight flex flex-col">
          <span>KUPING DJ</span>
          <span>PICKS MIXTAPE</span>
        </h2>
      </div>

      <!-- PicksMixtape Cards -->
      <div class="relative overflow-hidden">
        <div class="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-7">
          <PicksMixtapeCard
            v-for="picksMixtape in picksMixtapes"
            :key="picksMixtape.id"
            :id="picksMixtape.id"
            :artist="picksMixtape.artist"
            :artistImage="picksMixtape.artistImage"
            :title="picksMixtape.title"
            :price="picksMixtape.price"
            :image="picksMixtape.image"
            :likes="picksMixtape.likes"
            :downloads="picksMixtape.downloads"
            :rating="picksMixtape.rating"
            :bpm="picksMixtape.bpm"
            :date="picksMixtape.date"
            :music="picksMixtape.music"
            :isPlaying="localPlayingId === picksMixtape.id"
            @play="handlePlay(picksMixtape)"
            @pause="handlePause"
            @toggle-favorite="handleToggleFavorite"
            :isCarousel="false"
            class="w-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject, watchEffect } from 'vue'
import { picksMixtapes } from '~/data/picksMixtapes'
import PicksMixtapeCard from './PicksMixtapeCard.vue'
import { useAudioEventBus } from '@/composables/useAudioEventBus'

const { currentTrack, isPlaying, play, pause } = inject('audioPlayer')
const { notifyPlay, isCurrentlyPlaying } = useAudioEventBus()

// Unique section ID for this instance
const sectionId = 'picks-mixtape'

const props = defineProps({
  title: {
    type: String,
    default: 'NEW ARRIVAL PICKS MIXTAPE'
  }
})

// Local state for tracking playing mixtape
const localPlayingId = ref(null)

// Watch for changes in global playing state
watchEffect(() => {
  if (isPlaying.value && currentTrack.value) {
    if (isCurrentlyPlaying(sectionId, currentTrack.value.id)) {
      localPlayingId.value = currentTrack.value.id
    } else {
      localPlayingId.value = null
    }
  } else {
    localPlayingId.value = null
  }
})

const handlePlay = (mixtape) => {
  notifyPlay(sectionId, mixtape.id)
  localPlayingId.value = mixtape.id
  play(mixtape)
}

const handlePause = () => {
  localPlayingId.value = null
  pause()
}

const handleToggleFavorite = (id) => {
  const index = picksMixtapes.findIndex(m => m.id === id)
  if (index !== -1) picksMixtapes[index].isFavorited = !picksMixtapes[index].isFavorited
}
</script>

<style scoped>
/* Extra small devices (phones, 400px and down) */
@media (max-width: 400px) {
  .grid {
    gap: 0.75rem;
  }
  
  h2 {
    font-size: 1.5rem;
    line-height: 1.3;
  }
}

/* Tiny devices (phones, 320px and down) */
@media (max-width: 320px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  h2 {
    font-size: 1.4rem;
  }
}

/* Tablet portrait mode */
@media (min-width: 768px) and (max-width: 1023px) and (orientation: portrait) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Tablet landscape mode */
@media (min-width: 768px) and (max-width: 1023px) and (orientation: landscape) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Large desktop screens */
@media (min-width: 1920px) {
  .grid {
    grid-template-columns: repeat(5, 1fr);
  }
}

/* Smooth transitions for all elements */
.picksMixtape-section {
  transition: all 0.3s ease;
}
</style>