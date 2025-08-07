<template>
  <div class="album-card bg-white overflow-hidden w-full">
    <div class="flex flex-col md:flex-row gap-4 sm:gap-6">
      <!-- Left Section - Cover Image (always square) -->
      <div class="w-full md:w-[300px] lg:w-[350px] relative flex-shrink-0 aspect-square">
        <img 
          :src="coverImage" 
          :alt="title" 
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Right Section - Album Info -->
      <div class="flex-1 p-3 sm:p-4 md:p-5 flex flex-col">
        <!-- Title with back button -->
        <div class="flex flex-row items-center gap-3 sm:gap-4 w-full mb-2 sm:mb-3">
          <NuxtLink 
            to="/album"
            class="flex-shrink-0 hover:bg-gray-50 p-1 transition-colors rounded-full"
          >
            <img 
              src="/icons/baseicons/black_left.svg" 
              class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" 
              alt="Back"
            />
          </NuxtLink>
          <h3 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-glancyr-medium uppercase text-black whitespace-pre-line flex-grow">
            {{ title }}
          </h3>
        </div>

        <!-- Date -->
        <div class="flex items-center text-gray-500 text-sm sm:text-base md:text-lg mb-2 sm:mb-3">
          <img 
            src="/icons/baseicons/date.svg" 
            class="w-4 h-4 sm:w-5 sm:h-5 mr-2" 
            alt="Date" 
          />
          <span class="font-geist-medium text-base sm:text-lg md:text-xl">
            {{ date }}
          </span>
        </div>

        <!-- Price -->
        <p class="font-geist-semibold text-black text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4">
          Rp. {{ price.toLocaleString('id-ID') }}
          <span class="text-black text-base sm:text-lg md:text-xl lg:text-2xl">
            (bundling Price)
          </span>
        </p>

        <!-- Buttons - Updated for full width only on mobile/tablet -->
        <div class="flex flex-row items-stretch w-full md:w-auto gap-2 mt-auto">
          <button
            class="flex-1 md:flex-none bg-white border-2 border-[#A10501] text-[#A10501] font-glancyr-medium py-3 xs:py-2 px-4 md:px-8 text-base sm:text-lg md:text-xl hover:bg-[#A10501]/5 transition-colors touch-manipulation"
          >
            BUY BUNDLING
          </button>
          <button
            class="flex-shrink-0 aspect-square border-2 border-black text-black p-2 hover:bg-gray-50 transition-colors touch-manipulation flex items-center justify-center"
          >
            <img 
              src="/icons/baseicons/cart_black.svg" 
              class="w-6 h-6 sm:w-7 sm:h-7" 
              alt="Cart" 
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  id: Number,
  title: String,
  coverImage: String,
  date: String,
  price: Number,
  isFavorited: Boolean
})

const emit = defineEmits(['toggle-favorite', 'go-back'])
</script>

<style scoped>
/* Ensure square aspect ratio for all devices */
.aspect-square {
  aspect-ratio: 1/1;
}

/* Mobile-specific adjustments */
@media (max-width: 767px) {
  
  button {
    min-height: 48px;
  }
}

/* Tablet-specific adjustments */
@media (min-width: 768px) and (max-width: 1023px) {
  .md\:w-\[300px\] {
    width: 300px;
  }
}
</style>