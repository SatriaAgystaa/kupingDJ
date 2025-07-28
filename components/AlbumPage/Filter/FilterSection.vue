<template>
  <div class="relative">
    <!-- Filter Trigger Button -->
    <button 
      @click="toggleDropdown"
      aria-label="Filter" 
      class="text-[#A10501] border border-[#A10501] hover:bg-[#A10501]/10 transition-all duration-300 px-3 xs:px-3.5 sm:px-4 py-2 xs:py-2 sm:py-2 relative group flex items-center gap-1.5 sm:gap-2"
    >
      <span class="text-xs xs:text-xs sm:text-sm font-geist-medium">Filter</span>
      <div class="relative">
        <img 
          src="/icons/baseicons/filter.svg" 
          alt="Filter" 
          class="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 transition-all duration-300 group-hover:scale-110 group-active:scale-95"
        >
      </div>
      <span class="absolute inset-0 bg-[#A10501]/5 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"></span>
    </button>

    <!-- Filter Dropdown Content -->
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
        class="absolute right-0 mt-2 w-[280px] xs:w-[300px] sm:w-[320px] bg-white shadow-xl z-50 border border-gray-200 origin-top-right"
        v-click-outside="closeDropdown"
      >
        <div class="">
          <div class="flex items-center justify-between p-4 border-b border-gray-200 border-t-4 border-t-[#A10501]">
            <h2 class="text-lg xs:text-lg sm:text-xl font-glancyr-medium text-black">FILTER</h2>
            <button @click="closeDropdown" class="text-black hover:text-gray-500 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <!-- Filter Options -->
          <div class="p-4 space-y-6">
            <!-- By Upload Time -->
            <div>
              <h3 class="text-xs xs:text-sm sm:text-sm font-geist-medium text-gray-900 mb-2">By Upload Time</h3>
              <div class="relative">
                <select 
                  v-model="selectedTime"
                  class="w-full px-3 py-2 border border-gray-300 font-geist-regular text-xs xs:text-sm sm:text-sm appearance-none bg-[#f7f7f7] focus:outline-none focus:ring-2 focus:ring-[#A10501] focus:border-transparent pr-8"
                >
                  <option value="mostRecent">Most Recent</option>
                  <option value="oldest">Oldest</option>
                  <option value="lastWeek">Last Week</option>
                  <option value="lastMonth">Last Month</option>
                </select>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <img 
                    src="/icons/baseicons/down_line.svg" 
                    alt="Dropdown" 
                    class="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-gray-500"
                  >
                </div>
              </div>
            </div>

            <!-- Price Range -->
            <div>
              <h3 class="text-xs xs:text-sm sm:text-sm font-geist-medium text-gray-900 mb-2">Price Range</h3>
              <div class="space-y-3 font-geist-regular">
                <!-- Minimum Price -->
                <div class="flex items-center border border-gray-300 overflow-hidden">
                  <span class="px-3 py-2 bg-[#f7f7f7] font-geist-medium text-xs xs:text-sm sm:text-sm text-black border-r border-gray-300">Rp</span>
                  <input 
                    type="number" 
                    v-model="minPrice"
                    placeholder="Minimum Price" 
                    class="flex-1 px-3 py-2 text-xs xs:text-sm sm:text-sm focus:outline-none bg-white"
                  >
                </div>
                <!-- Maximum Price -->
                <div class="flex items-center border border-gray-300 overflow-hidden">
                  <span class="px-3 py-2 bg-[#f7f7f7] font-geist-medium text-xs xs:text-sm sm:text-sm text-black border-r border-gray-300">Rp</span>
                  <input 
                    type="number" 
                    v-model="maxPrice"
                    placeholder="Maximum Price" 
                    class="flex-1 px-3 py-2 text-xs xs:text-sm sm:text-sm focus:outline-none bg-white"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const selectedTime = ref('mostRecent');
const minPrice = ref('');
const maxPrice = ref('');

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = () => {
  isOpen.value = false;
};

const applyFilters = () => {
  const filters = {
    time: selectedTime.value,
    minPrice: minPrice.value,
    maxPrice: maxPrice.value
  };
  console.log('Applying filters:', filters);
  closeDropdown();
};
</script>

<style scoped>
/* Remove default select styling */
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-repeat: no-repeat;
  background-position: right 0.5rem center;
  background-size: 1em 1em;
}

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