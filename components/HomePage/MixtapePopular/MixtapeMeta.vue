<!-- MixtapeMeta.vue -->
<template>
  <div class="font-geist-regular">
    <!-- Artist Name -->
    <div class="flex items-center gap-2 mb-1 sm:mb-1.5 md:mb-2">
      <img :src="artistImage" :alt="artist + ' profile'" 
           class="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-5.5 lg:h-5.5 rounded-full object-cover border border-gray-200" />
      <span class="text-[10px] sm:text-[11px] md:text-xs lg:text-[13px] text-gray-600 font-medium tracking-tight">{{ artist }}</span>
    </div>
    
    <!-- Title -->
    <h3 class="text-sm sm:text-[15px] md:text-base lg:text-[17px] xl:text-lg font-bold text-black mb-1 sm:mb-1.5 leading-tight line-clamp-2">{{ title }}</h3>

    <!-- Date and BPM -->
    <div class="flex items-center justify-between text-[10px] sm:text-[11px] md:text-xs lg:text-[13px] text-gray-500 mb-2 sm:mb-2.5 md:mb-3">
      <div class="flex items-center gap-1 sm:gap-1.5">
        <img src="/icons/baseicons/date.svg" alt="Date" class="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
        <span>{{ date }}</span>
      </div>
      <span class="font-medium">{{ bpm }}BPM</span>
    </div>
    
    <!-- Price -->
    <div class="text-sm sm:text-[15px] md:text-base lg:text-[17px] xl:text-lg font-bold text-black mb-2 sm:mb-2.5 md:mb-3">{{ price }}</div>
    
    <!-- Stats -->
    <div class="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-3.5 md:mb-4 text-[10px] sm:text-[11px] md:text-xs lg:text-[13px] text-gray-500">
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
    <div class="flex gap-2 sm:gap-2.5 md:gap-3 font-glancyr-regular">
      <button 
        @click="$emit('buy-now')"
        class="flex-1 bg-white border border-[#A10501] text-[#A10501] py-1.5 sm:py-2 px-2 sm:px-3 text-xs sm:text-[13px] md:text-sm lg:text-[15px] font-bold 
              transition-all duration-200 hover:bg-[#A10501] hover:text-white active:scale-95"
      >
        BUY NOW
      </button>
      <button 
        @click="$emit('add-to-cart')"
        class="bg-white border border-black text-black p-1.5 sm:p-2 transition-all duration-200 hover:bg-black hover:text-white active:scale-95"
        aria-label="Add to cart"
      >
        <img src="/icons/baseicons/cart_black.svg" alt="Cart" class="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5" />
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