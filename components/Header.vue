<template>
  <header class="w-full bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
    <div class="container mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-3 sm:py-4 md:py-5 lg:py-6">
      <!-- Left Section: Logo + Navigation -->
      <div class="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <!-- Logo with hover animation -->
        <div class="flex items-center">
          <NuxtLink 
            to="/" 
            class="flex items-center transform hover:scale-105 transition-transform duration-300 active:scale-95"
          >
            <img 
              src="/icons/baseicons/logo.svg" 
              alt="Kuping DJ Logo" 
              class="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
            >
          </NuxtLink>
        </div>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex gap-5 md:gap-6 lg:gap-8 font-geist-medium text-xs sm:text-sm md:text-[15px] lg:text-base">
          <a 
            v-for="(link, index) in navLinks" 
            :key="index"
            :href="link.href" 
            class="relative text-black hover:text-red-800 transition-all duration-300 py-1 md:py-2 group"
          >
            {{ link.text }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-red-800 transition-all duration-500 group-hover:w-full"></span>
          </a>
        </nav>
      </div>
      
      <!-- Right Icons -->
      <div class="flex items-center gap-1 sm:gap-2 md:gap-4">
        <!-- Show these when NOT logged in - Desktop only -->
        <template v-if="!isLoggedIn">
          <!-- Register Button -->
          <div class="hidden md:flex group font-glancyr-light hover:scale-105 transition-all duration-300 ml-2 sm:ml-3">
            <NuxtLink 
              to="/register" 
              class="flex-1 flex group font-glancyr-light hover:scale-105 transition-all duration-300 min-w-0"
              @click="closeAlert"
            >
              <div class="flex-1 bg-red-800 text-white border-2 border-red-800 px-3 py-1.5 sm:px-4 sm:py-2 md:px-3 md:py-1 lg:px-6 lg:py-2 tracking-wide text-xs sm:text-xs md:text-xs lg:text-sm transition-all duration-300 group-hover:bg-red-700 text-center flex items-center justify-center truncate">
                REGISTER NOW
              </div>
              <div class="bg-black border-2 border-black px-2 py-1.5 sm:px-3 sm:py-2 md:px-3 md:py-2 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-900 flex-shrink-0">
                <img src="/icons/baseicons/arrow_white.svg" alt="arrow" class="w-2 h-2 sm:w-2 sm:h-2 md:w-3 md:h-3 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </NuxtLink>
          </div>

          <!-- Login Button -->
          <div class="hidden md:flex group font-glancyr-light hover:scale-105 transition-all duration-300">
            <NuxtLink to="/login" class="flex-1 group font-glancyr-light hover:scale-105 transition-all duration-300 min-w-0">
              <div class="bg-white text-center flex items-center justify-center truncate text-black border-2 border-black px-3 py-1.5 sm:px-4 sm:py-2 md:px-3 md:py-1.5 lg:px-6 lg:py-2 tracking-wide text-xs sm:text-xs md:text-xs lg:text-sm transition-all duration-300">
                LOGIN
              </div>
            </NuxtLink>
          </div>
        </template>
        
        <!-- Show these when logged in -->
        <template v-else>
          <!-- Cart Icon -->
          <div class="relative">
            <CartSection/>
          </div>
          
          <!-- Notification -->
          <div class="relative">
            <NotificationSection/>
          </div>
          
          <!-- Profile Section -->
          <div class="relative">
            <ProfileSection/>
          </div>
        </template>

        <!-- Mobile Menu Button with animation -->
        <button 
          aria-label="Mobile Menu" 
          class="md:hidden text-gray-600 hover:text-red-800 transition-all duration-500 p-1 sm:p-1.5 transform hover:scale-110 active:scale-95"
          @click="toggleMobileMenu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-500"
            :class="{'rotate-90': isMobileMenuOpen}"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Mobile Sidebar Navigation -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 -translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 -translate-x-full"
    >
      <div 
        v-if="isMobileMenuOpen"
        class="fixed inset-0 z-40 md:hidden"
      >
        <!-- Overlay -->
        <div 
          class="absolute inset-0"
          @click="closeMobileMenu"
        ></div>
        
        <!-- Sidebar Content -->
        <div class="relative flex flex-col w-3/5 max-w-xs h-full bg-white shadow-xl">
          <div class="flex items-center justify-between px-4 py-3 border-b border-gray-200">
            <NuxtLink 
              to="/" 
              class="flex items-center"
              @click="closeMobileMenu"
            >
              <img 
                src="/icons/baseicons/logo.svg" 
                alt="Kuping DJ Logo" 
                class="w-8 h-8"
              >
            </NuxtLink>
            <button 
              @click="closeMobileMenu"
              class="p-1 text-gray-500 hover:text-red-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div class="flex-1 overflow-y-auto py-4 px-4">
            <!-- Navigation Items -->
            <div class="space-y-2">
              <a 
                v-for="(link, index) in navLinks" 
                :key="index"
                :href="link.href" 
                class="block py-3 px-3 text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-300"
                @click="closeMobileMenu"
              >
                <div class="flex items-center">
                  <span class="flex-1 font-medium">{{ link.text }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </div>
            
            <!-- Auth Buttons -->
            <template v-if="!isLoggedIn">
              <div class="mt-6 space-y-3">
                <!-- Register Button -->
                <NuxtLink 
                  to="/register" 
                  class="flex items-center justify-between group font-glancyr-light transition-all duration-300 w-full rounded-md overflow-hidden"
                  @click="closeMobileMenu"
                >
                  <div class="flex-1 bg-red-800 text-white border-2 border-red-800 px-4 py-3 tracking-wide text-sm transition-all duration-300 group-hover:bg-red-700 text-center">
                    REGISTER NOW
                  </div>
                  <div class="bg-black border-2 border-black px-4 py-3 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-900">
                    <img src="/icons/baseicons/arrow_white.svg" alt="arrow" class="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </NuxtLink>

                <!-- Login Button -->
                <NuxtLink 
                  to="/login" 
                  class="block w-full bg-white text-center text-black border-2 border-black px-6 py-3 tracking-wide text-sm transition-colors duration-300 hover:bg-gray-50 rounded-md"
                  @click="closeMobileMenu"
                >
                  LOGIN
                </NuxtLink>
              </div>
            </template>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isMobileMenuOpen = ref(false)
const isLoggedIn = ref(false)
const username = ref('')

const navLinks = [
  { text: 'Home', href: '#hero' },
  { text: 'Mixtape', href: '#mixtape' },
  { text: 'Album', href: '#album' },
  { text: 'Artists', href: '#artist' },
  { text: 'About', href: '#about' }
]

// Check auth status when component mounts
onMounted(() => {
  if (process.client) {
    isLoggedIn.value = localStorage.getItem('isLoggedIn') === 'true'
    username.value = localStorage.getItem('username') || ''
  }
  window.addEventListener('login-status-changed', (e) => {
    isLoggedIn.value = e.detail.isLoggedIn
    username.value = e.detail.username
  })
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

const logout = () => {
  if (process.client) {
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('username')
    isLoggedIn.value = false
    username.value = ''
    router.push('/')
    closeMobileMenu()
  }
}

const updateLoginStatus = (status) => {
  isLoggedIn.value = status
}

defineExpose({
  updateLoginStatus
})
</script>

<style scoped>
/* Smooth scrolling for anchor links */
html {
  scroll-behavior: smooth;
}

/* Custom transition timing */
.transition-all {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Button press effect */
.active\:scale-95:active {
  transform: scale(0.95);
}

/* Ensure smooth hover on mobile devices */
@media (hover: hover) {
  nav a:hover {
    transform: translateX(4px);
  }
}

/* Touch feedback for mobile */
nav a:active {
  transform: scale(0.98);
  transition-duration: 200ms;
}
</style>