<!-- layouts/default.vue -->
<template>
  <div class="flex min-h-screen flex-col">
    <Header />

    <main class="flex-1 z-10">
       <NuxtPage />
    </main>

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

const showLoginAlert = ref(false)

onMounted(() => {
  if (process.client) {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    
    if (!isLoggedIn) {
      showLoginAlert.value = true
    }
  }
})
</script>