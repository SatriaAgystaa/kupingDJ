<template>
  <div class="min-h-screen h-screen grid grid-cols-1 lg:grid-cols-5 font-sans overflow-hidden">
    <!-- Left Column: Update Email Form (2/5) -->
    <div class="flex flex-col justify-between px-8 py-12 bg-white border-r border-gray-200 lg:col-span-2 no-scrollbar">
      <div class="flex-grow mb-10">
        <!-- Logo with fade-in -->
        <img 
          src="/icons/baseicons/logo.svg" 
          alt="Kuping DJ Logo" 
          class="h-12 w-auto mb-16 transform transition-all duration-500 opacity-0 animate-fade-in"
          style="animation-delay: 100ms"
        />

        <!-- Update Email Title with staggered animation -->
        <h1 class="text-3xl font-glancyr-regular text-black uppercase leading-tight tracking-tight mb-10 overflow-hidden">
          <span class="block transform transition-all duration-700 translate-y-10 opacity-0 animate-slide-up" style="animation-delay: 200ms">UPDATE YOUR EMAIL</span>
        </h1>

        <!-- Form Content -->
        <div class="flex-1">
          <!-- Update Email Form -->
          <form class="space-y-6">
            <!-- New Email with animation -->
            <div class="transform transition-all duration-500 opacity-0 animate-fade-in" style="animation-delay: 600ms">
              <label class="block text-md font-geist-semibold text-black mb-2">New Email Address</label>
              <input
                v-model="newEmail"
                type="email"
                placeholder="your.new@email.com"
                class="w-full px-3 py-2 border border-gray-100 shadow-sm bg-gray-50 text-sm placeholder-gray-400 focus:outline-none focus:ring-[#B00000] focus:border-[#B00000] transition-all duration-300 hover:shadow-md focus:shadow-lg"
              />
            </div>

            <!-- Confirm New Email with animation -->
            <div class="transform transition-all duration-500 opacity-0 animate-fade-in" style="animation-delay: 700ms">
              <label class="block text-md font-geist-semibold text-black mb-2">Confirm New Email</label>
              <input
                v-model="confirmNewEmail"
                type="email"
                placeholder="your.new@email.com"
                class="w-full px-3 py-2 border border-gray-100 shadow-sm bg-gray-50 text-sm placeholder-gray-400 focus:outline-none focus:ring-[#B00000] focus:border-[#B00000] transition-all duration-300 hover:shadow-md focus:shadow-lg"
              />
            </div>

            <!-- Update Button with enhanced interaction -->
            <div class="w-full transform transition-all duration-500 opacity-0 animate-fade-in" style="animation-delay: 800ms">
              <NuxtLink 
                to="/profile" class="flex w-full group font-glancyr-light hover:scale-[1.02] transition-all duration-300 active:scale-[0.98]">
                <button 
                  type="submit"
                  class="flex-1 bg-red-800 text-white py-2 px-4 font-semibold tracking-wide text-sm shadow-md hover:shadow-lg transition-all duration-300 group-hover:bg-red-700"
                  @click.prevent="updateEmail"
                >
                  <span class="inline-block group-active:translate-y-0.5 transition-transform">UPDATE EMAIL</span>
                </button>
                <div 
                  class="bg-black px-4 py-2 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-900"
                >
                  <img 
                    src="/icons/baseicons/arrow_white.svg" 
                    alt="arrow" 
                    class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-2"
                  />
                </div>
              </NuxtLink>
            </div>
          </form>
        </div>
      </div>

      <!-- Footer with fade-in -->
      <p class="text-sm font-geist-regular text-gray-400 mt-8 text-left transform transition-all duration-500 opacity-0 animate-fade-in" style="animation-delay: 1000ms">
        © 2023 Copyright by Kuping DJ. All rights reserved.
      </p>
    </div>

    <!-- Right Column: Animated Background -->
    <div class="hidden lg:block lg:col-span-3 relative bg-gradient-to-br from-white to-red-50 overflow-hidden">
      <h1 class="absolute top-12 left-12 text-5xl lg:text-7xl font-glancyr-regular text-black uppercase leading-tight tracking-wide z-20 overflow-hidden">
        <span class="block transform transition-all duration-1000 translate-y-20 opacity-0 animate-slide-up" style="animation-delay: 200ms">DISCOVER THE</span>
        <span class="block transform transition-all duration-1000 translate-y-20 opacity-0 animate-slide-up" style="animation-delay: 400ms">ULTIMATE</span>
        <span class="block transform transition-all duration-1000 translate-y-20 opacity-0 animate-slide-up" style="animation-delay: 600ms">DJ MARKETPLACE EXPERIENCE!</span>
      </h1>
      
      <!-- Background Images with parallax effect -->
      <img
        src="/icons/auth/line.svg"
        alt="Line"
        class="absolute bottom-0 right-0 w-[1200px] h-[850px] pointer-events-none z-10 transform transition-transform duration-1000 ease-out opacity-0 animate-fade-in-move"
        style="animation-delay: 300ms; --move-y: 50px"
      />
      <img
        src="/icons/auth/effect.svg"
        alt="Effect"
        class="absolute bottom-0 right-0 w-[700px] h-[800px] pointer-events-none z-10 transform transition-transform duration-1000 ease-out opacity-0 animate-fade-in-move"
        style="animation-delay: 500ms; --move-y: 30px"
      />
      <img
        src="/icons/auth/vinyl.svg"
        alt="Vinyl"
        class="absolute bottom-0 right-0 w-[600px] h-auto pointer-events-none z-10 transform transition-all duration-1000 ease-out opacity-0 animate-fade-in-spin"
        style="animation-delay: 700ms"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const newEmail = ref('');
const confirmNewEmail = ref('');

const updateEmail = () => {
  // Handle email update logic
  if (newEmail.value !== confirmNewEmail.value) {
    alert('Email addresses do not match!');
    return;
  }
  
  console.log('Updating email to:', newEmail.value);
  // Add your email update API call here
};
</script>

<style scoped>
/* Scrollbar hiding */
.no-scrollbar {
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Custom animations */
@keyframes fade-in {
  to { opacity: 1; }
}
@keyframes slide-up {
  to { transform: translateY(0); opacity: 1; }
}
@keyframes fade-in-move {
  to { transform: translateY(0); opacity: 1; }
}
@keyframes fade-in-spin {
  0% { transform: translateY(var(--move-y, 20px)) rotate(-180deg); opacity: 0; }
  100% { transform: translateY(0) rotate(0); opacity: 1; }
}

.animate-fade-in {
  animation: fade-in 0.6s forwards ease-out;
}
.animate-slide-up {
  animation: slide-up 0.8s forwards cubic-bezier(0.22, 1, 0.36, 1);
}
.animate-fade-in-move {
  animation: fade-in-move 1s forwards cubic-bezier(0.22, 1, 0.36, 1);
}
.animate-fade-in-spin {
  animation: fade-in-spin 1.2s forwards cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Hover effects */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}
</style>