<!-- MixtapeMeta.vue -->
<template>
  <div class="font-geist-regular">
    <!-- Artist Name -->
    <div class="flex items-center gap-2 mb-1 sm:mb-1.5 md:mb-2">
      <img :src="artistImage" :alt="artist + ' profile'" 
           class="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-5.5 lg:h-5.5 rounded-full object-cover border border-gray-200" />
      <span class="text-[10px] sm:text-[11px] md:text-xs lg:text-[13px] text-black font-geist-medium tracking-tight">{{ artist }}</span>
    </div>
    
    <!-- Title -->
    <h3 class="text-sm sm:text-[15px] md:text-base lg:text-[17px] xl:text-xl font-bold text-black mb-1 sm:mb-1.5 leading-tight line-clamp-2">{{ title }}</h3>

    <!-- Date and BPM -->
    <div class="flex items-center justify-between text-[10px] sm:text-[11px] md:text-xs lg:text-[13px] text-gray-500 mb-2 sm:mb-2.5 md:mb-3">
      <div class="flex items-center gap-1 sm:gap-1.5">
        <img src="/icons/baseicons/date.svg" alt="Date" class="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
        <span>{{ date }}</span>
      </div>
      <span class="font-geist-medium">{{ bpm }}BPM</span>
    </div>
    
    <!-- Price -->
    <div class="text-sm sm:text-[15px] md:text-base lg:text-[17px] xl:text-lg font-bold text-black mb-2 sm:mb-2.5 md:mb-3">{{ price }}</div>
    
    <!-- Stats -->
    <div class="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-3.5 md:mb-4 text-[10px] sm:text-[11px] md:text-xs lg:text-[13px] text-black">
      <div class="flex items-center gap-1 sm:gap-1.5">
        <img src="/icons/baseicons/download_black.svg" alt="Downloads" class="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
        <span>{{ downloads }}</span>
      </div>
      <div class="flex items-center gap-1 sm:gap-1.5">
        <img src="/icons/baseicons/like_black.svg" alt="Likes" class="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
        <span>{{ likes }}</span>
      </div>
      <div class="flex items-center gap-1 sm:gap-1.5">
        <img src="/icons/baseicons/star_black.svg" alt="Rating" class="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
        <span>{{ rating }}</span>
      </div>
    </div>
    
    <!-- Action Buttons -->
<div class="flex flex-row gap-2 font-glancyr-light w-full">
  <button 
    @click="$emit('buy-now')"
    class="flex-1 min-w-0 bg-white border border-[#A10501] text-[#A10501] py-2 px-2 text-xs font-bold 
          transition-all duration-200 hover:bg-[#A10501] hover:text-white active:scale-95 text-center truncate"
  >
    DOWNLOAD MIXTAPE
  </button>
  <button 
    @click="$emit('add-to-cart')"
    class="flex-shrink-0 bg-white border border-black text-black px-3 py-2 transition-all duration-200 
            hover:bg-black hover:text-white active:scale-95 flex items-center justify-center gap-1 min-w-[70px]"
    aria-label="Rate mixtape"
  >
    <span class="text-xs font-bold truncate">
      RATE
    </span>
    <div class="relative w-3 h-3 flex-shrink-0">
      <img 
        src="/icons/baseicons/star_black.svg" 
        alt="Rating star" 
        class="absolute w-full h-full transition-all duration-200 group-hover:opacity-0"
      >
      <img 
        src="/icons/baseicons/star_white.svg" 
        alt="Rating star" 
        class="absolute w-full h-full opacity-0 transition-all duration-200 group-hover:opacity-100"
      >
    </div>
  </button>
</div>
  </div>
</template>

<script setup>
const props = defineProps({
  artist: {
    type: String,
    required: true
  },
  artistImage: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  bpm: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  downloads: {
    type: String,
    required: true
  },
  likes: {
    type: String,
    required: true
  },
  rating: {
    type: String,
    required: true
  }
})

defineEmits(['buy-now', 'add-to-cart'])
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

button {
  will-change: transform;
  backface-visibility: hidden;
}

@media (max-width: 640px) {
  .line-clamp-2 {
    -webkit-line-clamp: 1;
  }
}
</style>