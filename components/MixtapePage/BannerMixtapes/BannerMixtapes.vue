<template>
  <div v-if="featuredMixtape" class="relative w-full h-[250px] xs:h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px] overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0 group">
      <img 
        :src="featuredMixtape.image" 
        :alt="featuredMixtape.title"
        class="w-full h-full object-cover object-center grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    </div>

    <!-- Aura SVG positioned near the title -->
    <img
      src="/icons/baseicons/aura.svg"
      alt="Aura Background"
      class="absolute bottom-0 left-0 w-[150px] xs:w-[180px] sm:w-[220px] md:w-[350px] lg:w-[450px] xl:w-[550px] 2xl:w-[650px] opacity-80 mix-blend-lighten pointer-events-none z-10"
    />

    <!-- Content -->
    <div class="mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10 h-full flex flex-col justify-end">
      <div class="w-full max-w-[500px]">
        <!-- Trending Now Text -->
        <h3 class="text-xl xs:text-2xl sm:text-2.5xl md:text-3xl lg:text-3.5xl font-glancyr-regular text-white uppercase tracking-wider mb-3 sm:mb-6 md:mb-8">
          TRENDING NOW
        </h3>
        
        <!-- Mixtape Title - Split into multiple lines -->
        <div class="flex flex-col gap-1 sm:gap-2 mb-3 sm:mb-6 md:mb-8">
          <span class="text-2xl xs:text-3xl sm:text-3.5xl md:text-4xl lg:text-4.5xl xl:text-5xl 2xl:text-5.5xl font-glancyr-medium text-white tracking-wide">CARTEL</span>
          <span class="text-2xl xs:text-3xl sm:text-3.5xl md:text-4xl lg:text-4.5xl xl:text-5xl 2xl:text-5.5xl font-glancyr-medium text-white tracking-wide">MIXTAPE</span>
          <span class="text-2xl xs:text-3xl sm:text-3.5xl md:text-4xl lg:text-4.5xl xl:text-5xl 2xl:text-5.5xl font-glancyr-medium text-white tracking-wide">EXCLUSIVE ON</span>
          <span class="text-2xl xs:text-3xl sm:text-3.5xl md:text-4xl lg:text-4.5xl xl:text-5xl 2xl:text-5.5xl font-glancyr-medium text-white tracking-wide">KUPING DJ</span>
        </div>
        
        <!-- Artist Name -->
        <p class="text-white font-glancyr-light text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl mb-4 sm:mb-6 md:mb-8">
          {{ featuredMixtape.artist }}
        </p>
        
        <!-- Play Demo Button (inline with icon) -->
        <div class="flex items-center gap-2 mb-4 sm:mb-6 md:mb-8">
          <img src="/icons/baseicons/play.svg" alt="Play" class="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7">
          <button class="text-white font-glancyr-medium text-sm xs:text-base sm:text-lg md:text-xl hover:underline transition-all duration-200">
            PLAY DEMO
          </button>
        </div>
        
        <!-- Action Buttons -->
        <div class="flex gap-2 sm:gap-3 w-full max-w-[300px]">
          <button 
            @click="$emit('buy-now')"
            class="flex-1 bg-white text-[#A10501] py-2 sm:py-3 px-4 sm:px-6 text-xs xs:text-sm sm:text-base font-glancyr-medium 
                  transition-all duration-200 hover:bg-[#A10501] hover:text-white active:scale-95 whitespace-nowrap"
          >
            BUY NOW
          </button>
          <button 
            @click="$emit('add-to-cart')"
            class="w-12 sm:w-14 bg-white text-black p-2 sm:p-3 transition-all duration-200 
                    hover:bg-black hover:text-white active:scale-95 group flex items-center justify-center"
            aria-label="Add to cart"
          >
            <img 
              src="/icons/baseicons/cart_black.svg" 
              alt="Cart" 
              class="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 group-hover:hidden"
            >
            <img 
              src="/icons/baseicons/cart_white.svg" 
              alt="Cart" 
              class="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 hidden group-hover:block"
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { mixtapes } from '~/data/mixtapes'

// Get the first mixtape as featured (or implement your own logic)
const featuredMixtape = mixtapes[0]
</script>

<style scoped>
/* Smooth transition for the grayscale effect */
img {
  transition: filter 500ms ease-in-out;
}

/* Custom text sizes for better scaling */
.text-2\.5xl {
  font-size: 1.75rem;
  line-height: 2.25rem;
}
.text-3\.5xl {
  font-size: 2rem;
  line-height: 2.5rem;
}
.text-4\.5xl {
  font-size: 2.5rem;
  line-height: 1;
}
.text-5\.5xl {
  font-size: 3.25rem;
  line-height: 1;
}
</style>