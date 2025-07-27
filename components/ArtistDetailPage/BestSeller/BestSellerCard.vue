<template>
  <div class="w-full py-4 border-b border-gray-200 font-geist-regular">
    <!-- Mobile Layout (Stacked) -->
    <div class="flex flex-col gap-3 md:hidden">
      <!-- Top Row - Number, Image, Title -->
      <div class="flex gap-4 items-start">
        <span class="text-3xl font-glancyr-regular text-[#A10501] w-10 flex-shrink-0">{{ mixtape.id }}.</span>
        
        <div class="relative w-16 h-16 flex-shrink-0">
          <img 
            :src="mixtape.image" 
            :alt="mixtape.title"
            class="w-full h-full object-cover border border-gray-200"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <img src="/icons/baseicons/play.svg" alt="Play" class="w-4 h-4 opacity-90 hover:opacity-100 transition-opacity cursor-pointer"/>
          </div>
          <button class="absolute -top-5 -left-5 bg-white p-3 rounded-full shadow-md border border-gray-200">
            <img src="/icons/baseicons/like_black.svg" alt="Like Icon" class="w-5 h-5"/>
          </button>
        </div>

        <div class="flex-1 min-w-0">
          <h3 class="text-lg font-geist-semibold text-black truncate">{{ mixtape.title }}</h3>
          <div class="text-gray-500 text-sm mt-1">
            <span>{{ mixtape.date }}</span> • <span>{{ mixtape.bpm }}BPM</span>
          </div>
        </div>
      </div>

      <!-- Middle Row - Stats -->
      <div class="flex gap-4 ml-14">
        <div class="flex items-center gap-1.5 text-sm">
          <img src="/icons/baseicons/download_black.svg" alt="Downloads" class="w-4 h-4"/>
          <span>{{ mixtape.downloads }}</span>
        </div>
        <div class="flex items-center gap-1.5 text-sm">
          <img src="/icons/baseicons/like_black.svg" alt="Likes" class="w-4 h-4"/>
          <span>{{ mixtape.likes }}</span>
        </div>
        <div class="flex items-center gap-1.5 text-sm">
          <img src="/icons/baseicons/star_black.svg" alt="Rating" class="w-4 h-4"/>
          <span>{{ mixtape.rating }}</span>
        </div>
      </div>

      <!-- Bottom Row - Price and Actions -->
      <!-- Bottom Row - Price and Actions -->
      <div class="flex justify-between items-center ml-14">
        <span class="text-lg font-geist-semibold text-black">{{ mixtape.price }}</span>
        <div class="flex gap-2">
          <button 
            @click="$emit('buy-now')"
            class="bg-white border border-[#A10501] text-[#A10501] py-2 px-3 text-xs font-glancyr-medium 
                  transition-all duration-200 hover:bg-[#A10501] hover:text-white active:scale-95 whitespace-nowrap"
          >
            BUY NOW
          </button>
          <button 
            @click="$emit('add-to-cart')"
            class="bg-white border border-black text-black p-2 transition-all duration-200 
                    hover:bg-black hover:text-white active:scale-95 group"
            aria-label="Add to cart"
          >
            <img 
              src="/icons/baseicons/cart_black.svg" 
              alt="Cart" 
              class="w-4 h-4 group-hover:hidden"
            >
            <img 
              src="/icons/baseicons/cart_white.svg" 
              alt="Cart" 
              class="w-4 h-4 hidden group-hover:block"
            >
        </button>
        </div>
      </div>
    </div>

    <!-- Tablet/Desktop Layout (Horizontal) -->
    <div class="hidden md:flex gap-4 items-center">
      <!-- Number -->
      <div class="w-10 flex-shrink-0">
        <span class="text-3xl font-glancyr-regular text-[#A10501]">{{ mixtape.id }}.</span>
      </div>

      <!-- Image -->
      <div class="relative w-20 h-20 flex-shrink-0">
        <img 
          :src="mixtape.image" 
          :alt="mixtape.title"
          class="w-full h-full object-cover border border-gray-200"
        />
        <div class="absolute inset-0 flex items-center justify-center">
          <img src="/icons/baseicons/play.svg" alt="Play" class="w-6 h-6 opacity-90 hover:opacity-100 transition-opacity cursor-pointer"/>
        </div>
        <button class="absolute -top-2 -left-2 bg-white p-2 rounded-full shadow-md border border-gray-200">
          <img src="/icons/baseicons/like_black.svg" alt="Like Icon" class="w-4 h-4"/>
        </button>
      </div>

      <!-- Content -->
      <div class="flex-1 min-w-0">
        <!-- Stats -->
        <div class="flex gap-4 mb-1 text-sm">
          <div class="flex items-center gap-1.5">
            <img src="/icons/baseicons/download_black.svg" alt="Downloads" class="w-4 h-4"/>
            <span>{{ mixtape.downloads }}</span>
          </div>
          <div class="flex items-center gap-1.5">
            <img src="/icons/baseicons/like_black.svg" alt="Likes" class="w-4 h-4"/>
            <span>{{ mixtape.likes }}</span>
          </div>
          <div class="flex items-center gap-1.5">
            <img src="/icons/baseicons/star_black.svg" alt="Rating" class="w-4 h-4"/>
            <span>{{ mixtape.rating }}</span>
          </div>
        </div>
        
        <!-- Title -->
        <h3 class="text-xl font-geist-semibold text-black mb-1 truncate">{{ mixtape.title }}</h3>
        
        <!-- Date -->
        <div class="flex items-center text-sm text-gray-500 gap-2">
          <span>{{ mixtape.date }}</span> • <span>{{ mixtape.bpm }}BPM</span>
        </div>
      </div>

      <!-- Price and Actions -->
      <div class="flex flex-col items-end min-w-[180px]">
        <span class="text-xl font-geist-semibold text-black mb-2">{{ mixtape.price }}</span>
        <div class="flex gap-1.5 sm:gap-2 w-full">
          <button 
            @click="$emit('buy-now')"
            class="flex-1 bg-white border border-[#A10501] text-[#A10501] py-1.5 sm:py-2 px-2 sm:px-3 text-xs sm:text-sm font-glancyr-medium 
                  transition-all duration-200 hover:bg-[#A10501] hover:text-white active:scale-95"
          >
            BUY NOW
          </button>
          <button 
            @click="$emit('add-to-cart')"
            class="bg-white border border-black text-black p-1 sm:p-1.5 transition-all duration-200 
                    hover:bg-black hover:text-white active:scale-95 group"
            aria-label="Add to cart"
          >
            <img 
              src="/icons/baseicons/cart_black.svg" 
              alt="Cart" 
              class="w-3 sm:w-3.5 h-3 sm:h-3.5 group-hover:hidden"
            >
            <img 
              src="/icons/baseicons/cart_white.svg" 
              alt="Cart" 
              class="w-3 sm:w-3.5 h-3 sm:h-3.5 hidden group-hover:block"
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  mixtape: {
    type: Object,
    required: true,
    validator: (value) => {
      return [
        'id',
        'title',
        'price',
        'image',
        'downloads',
        'likes',
        'rating',
        'date',
        'bpm'
      ].every(key => key in value)
    }
  }
})
</script>

<style scoped>
/* Tablet full-width optimization */
@media (min-width: 768px) and (max-width: 1023px) {
  .hidden.md\:flex {
    display: flex;
    width: 100%;
  }
  
  .min-w-0 {
    flex: 1;
    min-width: 0;
    padding-right: 1rem;
  }
  
  .min-w-\[180px\] {
    min-width: 160px;
  }
}

/* Mobile touch targets */
@media (max-width: 767px) {
  button {
    min-height: 40px;
  }
  
  .ml-14 {
    margin-left: 56px; /* Match image+number width */
  }
}

/* Smooth transitions */
button {
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Active state scaling */
.active\:scale-95:active {
  transform: scale(0.95);
}
</style>