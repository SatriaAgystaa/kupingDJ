<template>
  <div class="relative bg-white p-3 sm:p-5 md:p-5 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 w-[200px] sm:w-[220px] md:w-[240px] aspect-[3/4] flex flex-col overflow-hidden">
    <!-- Background effect - now properly contained -->
    <div class="absolute inset-0 overflow-hidden z-0">
      <img
        src="/icons/genre/effect.svg"
        alt="Effect"
        class="absolute bottom-0 left-10 transform w-[240px] sm:w-[280px] md:w-[300px] h-[240px] sm:h-[280px] md:h-[300px] pointer-events-none"
      />
    </div>

    <!-- Content container with higher z-index -->
    <div class="relative flex flex-col h-full">
      <!-- Icon at top -->
      <div class="flex justify-start mb-4 sm:mb-5 md:mb-6">
        <img 
          :src="genre.iconPath" 
          :alt="`${genre.title} icon`" 
          class="w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24"
        />
      </div>

      <!-- Spacer to push content down -->
      <div class="flex-1"></div>

      <!-- Genre title and arrow -->
      <NuxtLink to="/album-genre" class="flex items-center justify-between mt-4 sm:mt-5 md:mt-6">
        <h3 class="text-xl sm:text-2xl md:text-3xl text-black tracking-wide font-glancyr-regular">
          {{ genre.title }}
        </h3>
        <div class="p-2 transition-colors cursor-pointer hover:bg-gray-100 rounded-full">
          <img 
            src="/icons/baseicons/arrow_black.svg" 
            alt="Arrow icon" 
            class="w-4 h-4 sm:w-5 sm:h-5"
          >
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  genre: {
    type: Object,
    required: true
  }
})
</script>