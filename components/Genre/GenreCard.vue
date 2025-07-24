<template>
  <div class="relative bg-white p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 w-[240px] aspect-[3/4] flex flex-col">
    <!-- Icon at top -->
    <div class="flex justify-start mb-6">
      <img :src="genre.iconPath" :alt="`${genre.title} icon`" class="w-24 h-24" />
    </div>

    <!-- This empty div will take up available space to push content down -->
    <div class="flex-1"></div>

    <img
      src="/icons/genre/effect.svg"
      alt="Vinyl"
      class="absolute bottom-0 right-0 w-100 pointer-events-none z-0"
    />

    <!-- Genre title and arrow - This will be pushed to the bottom -->
    <div class="flex items-center font-glancyr-regular justify-between mt-6 z-10">
      <h3 class="text-3xl text-black tracking-wide">{{ genre.title }}</h3>
      <div class="p-2 transition-colors cursor-pointer">
        <img src="/icons/baseicons/arrow_black.svg" alt="Arrow icon" class="w-5 h-5">
      </div>
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
