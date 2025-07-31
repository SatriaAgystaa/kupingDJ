<!-- ProfileSection.vue -->
<template>
  <div class="relative">
    <!-- Trigger Button - Desktop -->
    <div class="hidden sm:block">
      <button 
        @click="toggleDropdown"
        aria-label="User Profile" 
        class="flex items-center gap-1 rounded-full p-1 transition-all duration-300 group relative overflow-hidden"
      >
        <div class="relative">
          <img 
            :src="profile.imageUrl" 
            alt="User Profile" 
            class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full object-cover border border-transparent group-hover:border-red-800 transition-all duration-300 group-active:scale-95"
          >
          <!-- Online status indicator -->
          <span class="absolute bottom-0 right-0 block h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-500 ring-1 ring-white"></span>
        </div>
        <img 
          src="/icons/baseicons/down_line.svg" 
          alt="Dropdown" 
          class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-500 transition-transform duration-300 group-hover:rotate-180 group-hover:text-red-800"
        >
        <!-- Background wave effect on hover -->
        <span class="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" style="background-size: 200% 100%; animation: wave 2s linear infinite;"></span>
      </button>
    </div>

    <!-- Trigger Button - Mobile -->
    <button 
      @click="toggleDropdown"
      class="sm:hidden flex items-center gap-1 hover:bg-gray-50 rounded-full p-1 transition-colors duration-200"
    >
      <img 
        :src="profile.imageUrl" 
        alt="User Profile" 
        class="w-6 h-6 rounded-full object-cover"
      >
    </button>

    <!-- Dropdown Content -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div 
        v-if="isOpen"
        class="absolute right-0 mt-1 w-56 sm:w-64 md:w-72 bg-white shadow-xl z-50 border border-gray-200 origin-top-right"
        v-click-outside="closeDropdown"
      >
        <div class="">
          <div class="flex items-center justify-between p-2 sm:p-3 sm:p-4 border-b border-gray-200 border-t-4 border-t-[#A10501]">
            <h2 class="text-sm sm:text-base md:text-lg font-glancyr-medium text-black">YOUR PROFILE</h2>
            <button @click="closeDropdown" class="text-black hover:text-gray-500 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <NuxtLink to="/profile" class="flex items-center justify-between gap-2 p-3 sm:p-4 hover:bg-gray-50 transition-colors duration-200">
            <div class="flex items-center gap-2 sm:gap-3">
              <div class="h-10 w-10 sm:h-10 sm:w-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <img 
                  :src="profile.imageUrl" 
                  alt="Profile" 
                  class="h-full w-full object-cover"
                  v-if="profile.imageUrl"
                >
                <svg 
                  v-else
                  xmlns="http://www.w3.org/2000/svg" 
                  class="h-4 w-4 sm:h-5 sm:w-5 text-gray-500" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xs sm:text-sm font-medium text-gray-900">{{ profile.name }}</h3>
                <p class="text-[10px] sm:text-xs text-gray-500 flex items-center gap-1">
                  <img src="/icons/baseicons/facebook.svg" alt="Facebook" class="w-2.5 h-2.5 sm:w-3 sm:h-3">
                  {{ profile.username }}
                </p>
              </div>
            </div>
            <img src="/icons/baseicons/arrow_right.svg" alt="Arrow" class="w-4 h-4 sm:w-5 sm:h-5 text-gray-500">
          </NuxtLink>
          
          <button 
            @click="logout"
            class="w-full text-left border-t border-gray-200 p-3 sm:p-4 text-xs font-medium text-[#A10501] hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2"
          >
            <img src="/icons/baseicons/logout.svg" alt="Logout" class="w-4 h-4 sm:w-5 sm:h-5">
            <span>Logout</span>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { profileData } from '~/data/profile';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const profile = profileData;
const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = () => {
  isOpen.value = false;
};

const logout = () => {
  if (process.client) {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    
    // Redirect to home page
    router.push('/').then(() => {
      // Refresh after redirect
      window.location.reload();
    });
    
    closeDropdown();
  }
};
</script>

<style scoped>
/* Wave animation for desktop hover effect */
@keyframes wave {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>