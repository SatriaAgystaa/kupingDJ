<template>
  <header class="w-full bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
    <div class="container mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 md:py-5 lg:py-6">
      <!-- Left Section: Logo + Navigation -->
      <div class="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center">
            <img 
              src="/icons/baseicons/logo.svg" 
              alt="Kuping DJ Logo" 
              class="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
            >
          </NuxtLink>
        </div>
        
        <!-- Navigation -->
        <nav class="hidden md:flex gap-5 md:gap-6 lg:gap-8 font-geist-medium text-xs sm:text-sm md:text-[15px] lg:text-base">
          <a 
            href="#hero" 
            class="text-black hover:text-red-800 transition-colors duration-200 py-1 md:py-2"
          >Home</a>
          <a 
            href="#mixtape" 
            class="text-black hover:text-red-800 transition-colors duration-200 py-1 md:py-2"
          >Mixtape</a>
          <a 
            href="#album" 
            class="text-black hover:text-red-800 transition-colors duration-200 py-1 md:py-2"
          >Album</a>
          <a 
            href="#artist" 
            class="text-black hover:text-red-800 transition-colors duration-200 py-1 md:py-2"
          >Artists</a>
          <a 
            href="#about" 
            class="text-black hover:text-red-800 transition-colors duration-200 py-1 md:py-2"
          >About</a>
        </nav>
      </div>
      
      <!-- Right Icons -->
      <div class="flex items-center gap-1 sm:gap-2 md:gap-3">
        <!-- Cart Icon -->
        <button aria-label="Shopping Cart" class="text-gray-600 hover:text-red-800 transition-colors duration-200 p-1 sm:p-1.5 md:p-2 hover:bg-gray-50 rounded-full">
          <img src="/icons/baseicons/cart_add.svg" alt="Cart" class="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5">
        </button>
        
        <!-- Notification -->
        <button aria-label="Notifications" class="text-gray-600 hover:text-red-800 transition-colors duration-200 p-1 sm:p-1.5 md:p-2 hover:bg-gray-50 rounded-full relative">
          <img src="/icons/baseicons/notification.svg" alt="Notifications" class="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5">
        </button>
        
        <!-- Profile - Hidden on mobile -->
        <div class="hidden sm:relative sm:block">
          <button aria-label="User Profile" class="flex items-center gap-1 hover:bg-gray-50 rounded-full p-1 transition-colors duration-200">
            <img src="/icons/baseicons/profil.svg" alt="User Profile" class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full object-cover">
            <img src="/icons/baseicons/down_line.svg" alt="Dropdown" class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-500">
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          aria-label="Mobile Menu" 
          class="md:hidden text-gray-600 hover:text-red-800 transition-colors duration-200 p-1 sm:p-1.5"
          @click="toggleMobileMenu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Mobile Navigation -->
    <nav 
      class="md:hidden bg-white border-t border-gray-100 px-4 transition-all duration-300 overflow-hidden"
      :class="{'max-h-0 py-0 border-t-0': !isMobileMenuOpen, 'max-h-96 py-3': isMobileMenuOpen}"
    >
      <div class="flex flex-col gap-2 sm:gap-3">
        <a href="#hero" class="text-black hover:text-red-800 py-1.5 text-sm sm:text-base" @click="closeMobileMenu">Home</a>
        <a href="#mixtape" class="text-black hover:text-red-800 py-1.5 text-sm sm:text-base" @click="closeMobileMenu">Mixtape</a>
        <a href="#album" class="text-black hover:text-red-800 py-1.5 text-sm sm:text-base" @click="closeMobileMenu">Album</a>
        <a href="#artist" class="text-black hover:text-red-800 py-1.5 text-sm sm:text-base" @click="closeMobileMenu">Artists</a>
        <a href="#about" class="text-black hover:text-red-800 py-1.5 text-sm sm:text-base" @click="closeMobileMenu">About</a>
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