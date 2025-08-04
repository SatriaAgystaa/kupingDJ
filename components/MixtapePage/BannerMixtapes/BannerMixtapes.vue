<template>
  <div v-if="featuredMixtape" class="relative w-full h-[300px] xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[500px] 2xl:h-[500px] overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0 group h-full bg-black/50">
      <img 
        :src="featuredMixtape.image" 
        :alt="featuredMixtape.title"
        class="w-full h-full object-cover object-center transition-all duration-500 ease-in-out group-hover:grayscale-0"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    </div>

    <!-- Content - Aligned to left -->
    <div class="mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10 h-full flex flex-col justify-center">
      <div class="w-full max-w-4xl">
        <!-- Trending Now Text -->
        <h3 class="text-sm xs:text-sm sm:text-base md:text-base lg:text-lg font-glancyr-regular text-white uppercase tracking-wider mb-2 sm:mb-3 md:mb-4">
          TRENDING NOW
        </h3>
        
        <!-- Mixtape Title - Split into multiple lines -->
        <div class="flex flex-col gap-1 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
          <span class="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-glancyr-medium text-white tracking-wide">CARTEL MIXTAPE</span>
          <span class="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-glancyr-medium text-white tracking-wide">EXCLUSIVE ON KUPING DJ</span>
        </div>
        
        <!-- Artist Name -->
        <p class="text-white font-glancyr-regular text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg mb-3 sm:mb-4 md:mb-5">
          {{ featuredMixtape.artist }}
        </p>
        
        <!-- Play Demo Button (inline with icon) -->
        <div class="flex items-center gap-2 mb-4 sm:mb-5 md:mb-6">
          <img 
            :src="isCurrentlyPlaying ? '/icons/baseicons/pause_white.svg' : '/icons/baseicons/play.svg'" 
            :alt="isCurrentlyPlaying ? 'Pause' : 'Play'" 
            class="w-3 h-3 xs:w-4 xs:h-4 sm:w-4 sm:h-4 md:w-4 md:h-4" 
          />
          <button 
            @click="handlePlayToggle"
            class="text-white font-geist-medium text-xs xs:text-sm sm:text-sm md:text-base hover:underline transition-all duration-200"
          >
            {{ isCurrentlyPlaying ? 'Pause' : 'Play Demo' }}
          </button>
        </div>
        
        <!-- Action Buttons -->
        <div class="flex gap-2 sm:gap-3 w-full max-w-[300px]">
          <button 
            @click="$emit('buy-now')"
            class="flex-1 bg-white text-[#A10501] py-2 sm:py-2.5 px-4 sm:px-5 text-xs xs:text-sm sm:text-sm font-glancyr-medium 
                  transition-all duration-200 hover:bg-[#A10501] hover:text-white active:scale-95 whitespace-nowrap"
          >
            BUY NOW
          </button>
          <button 
            @click="$emit('add-to-cart')"
            class="w-10 sm:w-12 bg-white text-black p-2 sm:p-2 transition-all duration-200 
                    hover:bg-black hover:text-white active:scale-95 group flex items-center justify-center"
            aria-label="Add to cart"
          >
            <img 
              src="/icons/baseicons/cart_black.svg" 
              alt="Cart" 
              class="w-4 h-4 xs:w-4 xs:h-4 sm:w-4 sm:h-4 group-hover:hidden"
            >
            <img 
              src="/icons/baseicons/cart_white.svg" 
              alt="Cart" 
              class="w-4 h-4 xs:w-4 xs:h-4 sm:w-4 sm:h-4 hidden group-hover:block"
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

// Inject the audio player from the layout
const audioPlayer = inject('audioPlayer')

// Check if current mixtape is playing
const isCurrentlyPlaying = computed(() => {
  return audioPlayer?.currentTrack.value?.id === featuredMixtape.id && audioPlayer?.isPlaying.value
})

// Handle play/pause toggle
const handlePlayToggle = () => {
  if (isCurrentlyPlaying.value) {
    audioPlayer.pause()
  } else {
    audioPlayer.play(featuredMixtape)
  }
}
</script>

<style scoped>
/* Smooth transition for the grayscale effect */
img {
  transition: filter 500ms ease-in-out;
}

/* Performance optimization for background image */
.absolute.inset-0.z-0 {
  will-change: transform;
  backface-visibility: hidden;
  transform: translate3d(0,0,0);
}

/* Optimized for mobile touch targets */
@media (max-width: 640px) {
  .flex.items-center {
    min-height: 24px; /* Ensure proper touch target size */
  }
}
</style>