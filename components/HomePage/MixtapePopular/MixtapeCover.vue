<template>
  <div class="relative w-full mx-auto">
    <!-- Container untuk cover & vinyl -->
    <div class="relative w-full h-full flex items-center">
      
      <!-- Album Cover (align left) -->
      <div class="relative z-20 w-[80%] sm:w-[80%] md:w-[80%] lg:w-[80%] xl:w-[80%]">
        <div class="relative w-full aspect-square overflow-hidden group">
          <img 
            :src="image" 
            :alt="title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          <!-- Play Button -->
          <button 
            @click="$emit('play')"
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-300 hover:scale-90 
                   w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-10 lg:h-10"
            aria-label="Play mixtape"
          >
            <img src="/icons/baseicons/play.svg" alt="Play" class="w-full h-full" />
          </button>

          <!-- Favorite Button -->
          <button 
            @click="$emit('toggle-favorite')"
            class="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 z-30 
                   bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-300 hover:scale-90
                   w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
            aria-label="Toggle favorite"
          >
            <img 
              :src="isFavorited ? '/icons/baseicons/like_red.svg' : '/icons/baseicons/like_black.svg'" 
              alt="Like" 
              class="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 transition-all duration-300"
            />
          </button>
        </div>
      </div>

      <!-- Vinyl (align right) -->
      <div 
        class="absolute right-0 z-10 translate-x-1/5"
      >
        <div class="w-[140px] sm:w-[200px] md:w-[180px] lg:w-[200px] xl:w-[200px] 2xl:w-[200px] aspect-square max-w-[200px]">
          <img
            src="/icons/baseicons/vinyl2.svg"
            alt="Vinyl Record"
            class="animate-spin-slow w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  isFavorited: {
    type: Boolean,
    default: false
  }
})

defineEmits(['play', 'toggle-favorite'])
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 20s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

button {
  will-change: transform;
  backface-visibility: hidden;
  transform-style: preserve-3d;
}

@media (max-width: 640px) {
  .animate-spin-slow {
    animation-duration: 30s;
  }
}
</style>