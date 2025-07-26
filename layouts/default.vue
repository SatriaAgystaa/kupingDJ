<template>
  <div class="flex min-h-screen flex-col">
    <Header />

    <main class="flex-1 z-10 pb-20 md:pb-28">
      <NuxtPage />
    </main>

    <PlaySong v-if="showPlayer" />

    <LoginRequiredAlert v-if="showLoginAlert" @close="showLoginAlert = false" />
     
    <div class="z-0">
      <DomsBanner />
      <BannerFooter />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import DomsBanner from '~/components/DomsBanner.vue'
import BannerFooter from '~/components/BannerFooter.vue'
import Footer from '~/components/Footer.vue'
import LoginRequiredAlert from '~/components/Auth/LoginRequiredAlert.vue'
import PlaySong from '~/components/PlaySong.vue'

const showLoginAlert = ref(false)
const showPlayer = ref(true)

onMounted(() => {
  if (process.client) {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      showLoginAlert.value = true
    }
  }
})
</script>

<style>
/* Additional padding adjustments for mobile */
@media (max-width: 767px) {
  main {
    padding-bottom: 5rem;
  }
}

/* Tablet padding adjustment */
@media (min-width: 768px) and (max-width: 1023px) {
  main {
    padding-bottom: 5.5rem;
  }
}
</style>