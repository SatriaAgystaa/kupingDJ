<template>
  <div class="font-geist-regular px-2 md:px-0">
    <!-- Artist Name with Icon -->
    <div class="flex items-center gap-2 mb-2">
      <img :src="artistImage" alt="Artist Image" 
           class="w-5 h-5 md:w-6 md:h-6 rounded-full object-cover transition-transform duration-200 hover:scale-110" />
      <span class="text-xs md:text-sm text-gray-600 font-medium">{{ artist }}</span>
    </div>
    
    <!-- Title -->
    <h3 class="text-lg md:text-xl font-bold text-white mb-1 leading-tight line-clamp-2">{{ title }}</h3>
    
    <!-- Subtitle -->
    <p class="text-lg md:text-xl font-bold text-white leading-tight mb-3">Exclusive On Kuping DJ</p>
    
    <!-- Date and BPM -->
    <div class="flex items-center justify-between text-xs md:text-sm text-gray-500 mb-3">
      <div class="flex items-center gap-1">
        <img src="/icons/baseicons/date.svg" alt="Date" 
             class="w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 hover:scale-110" />
        <span>{{ date }}</span>
      </div>
      <span class="font-medium">{{ bpm }}BPM</span>
    </div>
    
    <!-- Price -->
    <div class="text-lg md:text-xl font-bold text-white mb-3">{{ price }}</div>
    
    <!-- Stats -->
    <div class="flex items-center gap-4 md:gap-6 mb-4 text-xs md:text-sm text-white">
      <!-- Downloads -->
      <div class="flex items-center gap-1">
        <img src="/icons/baseicons/download_white.svg" alt="Downloads" 
             class="w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 hover:scale-110" />
        <span>{{ downloads }}</span>
      </div>
      
      <!-- Likes -->
      <div class="flex items-center gap-1">
        <img src="/icons/baseicons/like_white.svg" alt="Likes" 
             class="w-3 h-3 md:w-4 md:h-4 transition-transform duration-200 hover:scale-110" />
        <span>{{ likes }}</span>
      </div>
      
      <!-- Rating -->
      <div class="flex items-center gap-1">
        <img src="/icons/baseicons/star_white.svg" alt="Rating" 
             class="w-3 h-3 md:w-4 md:h-4 transition-transform duration-200 hover:scale-110" />
        <span>{{ rating }}</span>
      </div>
    </div>
    
    <!-- Action Buttons -->
    <div class="flex gap-2 md:gap-3 font-glancyr-regular">
      <button 
        @click="$emit('buy-now')"
        class="flex-1 bg-black border-2 border-white text-white py-1 md:py-2 px-2 md:px-4 text-sm md:text-base font-bold 
              transition-all duration-200 hover:bg-black hover:text-white hover:scale-95"
      >
        BUY NOW
      </button>
      
      <button 
        @click="$emit('add-to-cart')"
        class="bg-black border-2 border-white text-white p-1 md:p-2 
                transition-all duration-200 hover:bg-white hover:text-black hover:scale-95 group"
        >
        <img src="/icons/baseicons/cart_white.svg" alt="Cart" 
            class="w-5 h-5 md:w-7 md:h-7 transition-all duration-200" />
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
button, img {
  will-change: transform;
  backface-visibility: hidden;
  transform-style: preserve-3d;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>