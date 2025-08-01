<!-- layouts/default.vue -->
<template>
  <div class="flex min-h-screen flex-col">
    <Header />

    <main>
      <NuxtPage />
    </main>

    <PlaySong 
      v-if="showPlayer && currentTrack" 
      :mixtape="currentTrack"
      :is-playing="isPlaying"
      @play="handlePlay"
      @pause="handlePause"
      @toggle-favorite="toggleFavorite"
      @close="closePlayer"
    />

    <LoginRequiredAlert v-if="showLoginAlert" @close="showLoginAlert = false" />
    
    <RatingModal 
      v-if="showRatingModal"
      :mixtape="currentMixtapeForRating"
      @close="showRatingModal = false"
      @submit="handleRatingSubmit"
    />
     
    <div class="z-0">
      <DomsBanner />
      <BannerFooter />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Header from '~/components/Layout/Header.vue'
import DomsBanner from '~/components/Layout/DomsBanner.vue'
import BannerFooter from '~/components/Layout/BannerFooter.vue'
import Footer from '~/components/Layout/Footer.vue'
import LoginRequiredAlert from '~/components/Auth/LoginRequiredAlert.vue'
import PlaySong from '~/components/Layout/PlaySong.vue'
import RatingModal from '~/components/Layout/Rating.vue'

const showLoginAlert = ref(false)
const showPlayer = ref(false)
const showRatingModal = ref(false)
const currentTrack = ref(null)
const currentMixtapeForRating = ref(null)
const isPlaying = ref(false)

// Provide this function to child components
const openRatingModal = (mixtape) => {
  currentMixtapeForRating.value = mixtape
  showRatingModal.value = true
}

provide('rating', {
  open: openRatingModal
})

const handlePlay = (mixtape) => {
  currentTrack.value = mixtape
  isPlaying.value = true
  showPlayer.value = true
}

const handlePause = () => {
  isPlaying.value = false
}

const closePlayer = () => {
  showPlayer.value = false
  isPlaying.value = false
  currentTrack.value = null
}

const toggleFavorite = (mixtape) => {
  const index = mixtapes.findIndex(m => m.id === mixtape.id)
  if (index !== -1) {
    mixtapes[index].isFavorited = !mixtapes[index].isFavorited
  }
}

const handleRatingSubmit = (rating) => {
  // Here you would typically send the rating to your backend
  console.log(`Rating ${rating} stars for mixtape:`, currentMixtapeForRating.value.title)
  showRatingModal.value = false
}

provide('audioPlayer', {
  play: handlePlay,
  pause: handlePause,
  currentTrack,
  isPlaying
})

onMounted(() => {
  if (process.client) {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      showLoginAlert.value = true
    }
  }
})
</script>