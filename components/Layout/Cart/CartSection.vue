<!-- CartSection.vue -->
<template>
  <div class="relative">
    <!-- Trigger Button -->
    <button 
      @click="toggleDropdown"
      aria-label="Shopping Cart" 
      class="text-gray-600 hover:text-red-800 transition-all duration-300 p-1 sm:p-1.5 md:p-2 rounded-full group relative"
    >
      <div class="relative">
        <img 
          src="/icons/baseicons/cart_add.svg" 
          alt="Cart" 
          class="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-all duration-300 group-hover:scale-110 group-active:scale-95"
        >
      </div>
      <!-- Circular ripple effect on click -->
      <span class="absolute inset-0 bg-gray-50 rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></span>
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
        class="absolute right-0 mt-2 w-72 bg-white shadow-xl z-50 border border-gray-200 origin-top-right"
        v-click-outside="closeDropdown"
      >
        <div class="">
          <div class="flex items-center justify-between p-4 border-b border-gray-200 border-t-4 border-t-[#A10501]">
            <h2 class="text-lg sm:text-xl font-glancyr-medium text-black">YOUR CART</h2>
            <button @click="closeDropdown" class="text-black hover:text-gray-500 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <NuxtLink to="/your-chart" class="flex items-center justify-between p-4 border-b border-gray-200">
            <button class="text-sm sm:text-md font-geist-medium text-black hover:text-red-800 transition-colors duration-200">See All</button>
            <button class="text-black hover:text-red-800 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </NuxtLink>
          
          <div class="max-h-64 overflow-y-auto">
            <div class="space-y-3 p-4">
              <div v-for="item in cartItems" :key="item.id" class="flex items-start gap-3 py-2 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors duration-200 rounded">
                <div class="w-12 h-12 bg-gray-100 flex-shrink-0 rounded overflow-hidden">
                  <img :src="item.image" :alt="item.title" class="w-full h-full object-cover">
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="text-sm sm:text-md font-medium text-gray-900 truncate">{{ item.title }}</h3>
                  <p class="text-xs text-gray-500 mt-1">Rp. {{ item.price.toLocaleString('id-ID') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { cartItems } from '~/data/cart';
import { ref } from 'vue';

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = () => {
  isOpen.value = false;
};
</script>

<style scoped>
/* Custom Scrollbar */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #A10501;
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #800000;
}
</style>