<template>
  <header class="w-full bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
    <div class="container mx-auto flex items-center justify-between py-4 md:py-6 px-4 sm:px-6 md:px-10">
      <!-- Left Section: Logo + Navigation -->
      <div class="flex items-center gap-6 md:gap-10">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center">
            <img 
              src="/icons/baseicons/logo.svg" 
              alt="Kuping DJ Logo" 
              class="w-8 h-8 md:w-10 md:h-10"
            >
          </NuxtLink>
        </div>
        
        <!-- Navigation -->
        <nav class="hidden md:flex gap-6 lg:gap-8 font-geist-medium text-sm md:text-base">
          <a 
            href="#hero" 
            class="text-black hover:text-red-800 transition-colors duration-200 py-2"
          >Home</a>
          <a 
            href="#mixtape" 
            class="text-black hover:text-red-800 transition-colors duration-200 py-2"
          >Mixtape</a>
          <a 
            href="#album" 
            class="text-black hover:text-red-800 transition-colors duration-200 py-2"
          >Album</a>
          <a 
            href="#artist" 
            class="text-black hover:text-red-800 transition-colors duration-200 py-2"
          >Artists</a>
          <a 
            href="#about" 
            class="text-black hover:text-red-800 transition-colors duration-200 py-2"
          >About</a>
        </nav>
      </div>
      
      <!-- Right Icons -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Cart Icon -->
        <button aria-label="Shopping Cart" class="text-gray-600 hover:text-red-800 transition-colors duration-200 p-1.5 sm:p-2 hover:bg-gray-50 rounded-full">
          <img src="/icons/baseicons/cart_add.svg" alt="Cart" class="w-4 h-4 sm:w-5 sm:h-5">
        </button>
        
        <!-- Notification -->
        <button aria-label="Notifications" class="text-gray-600 hover:text-red-800 transition-colors duration-200 p-1.5 sm:p-2 hover:bg-gray-50 rounded-full relative">
          <img src="/icons/baseicons/notification.svg" alt="Notifications" class="w-4 h-4 sm:w-5 sm:h-5">
        </button>
        
        <!-- Profile - Hidden on mobile -->
        <div class="hidden sm:relative sm:block">
          <button aria-label="User Profile" class="flex items-center gap-1 hover:bg-gray-50 rounded-full p-1 transition-colors duration-200">
            <img src="/icons/baseicons/profil.svg" alt="User Profile" class="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover">
            <img src="/icons/baseicons/down_line.svg" alt="Dropdown" class="w-4 h-4 md:w-5 md:h-5 text-gray-500">
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          aria-label="Mobile Menu" 
          class="md:hidden text-gray-600 hover:text-red-800 transition-colors duration-200 p-1.5 sm:p-2"
          @click="toggleMobileMenu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Mobile Navigation -->
    <nav 
      class="md:hidden bg-white border-t border-gray-100 px-3 transition-all duration-300 overflow-hidden"
      :class="{'max-h-0 py-0 border-t-0': !isMobileMenuOpen, 'max-h-96': isMobileMenuOpen}"
    >
      <div class="flex flex-col gap-3 sm:gap-4">
        <a href="#hero" class="text-black hover:text-red-800 py-1.5 sm:py-2 text-sm sm:text-base" @click="closeMobileMenu">Home</a>
        <a href="#mixtape" class="text-black hover:text-red-800 py-1.5 sm:py-2 text-sm sm:text-base" @click="closeMobileMenu">Mixtape</a>
        <a href="#album" class="text-black hover:text-red-800 py-1.5 sm:py-2 text-sm sm:text-base" @click="closeMobileMenu">Album</a>
        <a href="#artist" class="text-black hover:text-red-800 py-1.5 sm:py-2 text-sm sm:text-base" @click="closeMobileMenu">Artists</a>
        <a href="#about" class="text-black hover:text-red-800 py-1.5 sm:py-2 text-sm sm:text-base" @click="closeMobileMenu">About</a>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

/* Smooth transition for mobile menu */
nav {
  transition: max-height 0.3s ease-out, padding 0.3s ease-out, border 0.3s ease-out;
}
</style>