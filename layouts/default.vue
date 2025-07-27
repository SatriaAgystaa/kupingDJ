<template>
  <div class="flex min-h-screen flex-col">
    <Header />

    <main>
      <NuxtPage />
    </main>

    <!-- <PlaySong v-if="showPlayer" /> -->

    <LoginRequiredAlert v-if="showLoginAlert" @close="showLoginAlert = false" />
     
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
</style>