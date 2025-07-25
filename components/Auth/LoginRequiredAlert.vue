<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
    <div class="bg-white shadow-xl max-w-md w-full mx-2 sm:mx-4 md:mx-0">
      <!-- Header with title and close button -->
      <div class="flex justify-between items-center border-b border-gray-200 p-3 sm:p-4 border-t-4 border-t-red-800">
        <h3 class="text-lg sm:text-xl font-glancyr-medium">LOGIN REQUIRED</h3>
        <button @click="closeAlert" class="text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Alert icon and message -->
      <div class="text-center py-6 sm:py-8 md:py-10">
        <div class="flex justify-center mb-2">
          <img 
            src="/icons/baseicons/alert.svg" 
            alt="Alert" 
            class="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
          >
        </div>
        <p class="text-gray-600 font-geist-regular text-sm sm:text-base px-2 sm:px-0">
          To unlock all features on this platform, please log in.
        </p>
      </div>

       <!-- Buttons row -->
      <div class="flex flex-row gap-2 sm:gap-4 w-full p-3 sm:p-4">
        <!-- Register Button -->
        <NuxtLink 
            to="/register" 
            class="flex-1 flex group font-glancyr-light hover:scale-105 transition-all duration-300 min-w-0"
            @click="closeAlert"
        >
            <div class="flex-1 bg-red-800 text-white border-2 border-red-800 px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 lg:px-6 lg:py-2 font-semibold tracking-wide text-xs sm:text-xs md:text-sm transition-all duration-300 group-hover:bg-red-700 text-center flex items-center justify-center truncate">
            REGISTER NOW
            </div>
            <div class="bg-black border-2 border-black px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-900 flex-shrink-0">
            <img src="/icons/baseicons/arrow_white.svg" alt="arrow" class="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
        </NuxtLink>
        
        <!-- Login Button -->
        <NuxtLink 
            to="/login" 
            class="flex-1 group font-glancyr-light hover:scale-105 transition-all duration-300 min-w-0"
            @click="closeAlert"
        >
            <div class="w-full bg-white text-black border-2 border-black px-4 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2 lg:px-8 lg:py-2 font-semibold tracking-wide text-xs sm:text-xs md:text-sm transition-all duration-300 text-center truncate">
            LOGIN
            </div>
        </NuxtLink>
       </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['close'])

const closeAlert = () => {
  emit('close')
}
</script>