<template>
  <div class="relative w-full aspect-square max-w-[105vw] sm:max-w-[290px] md:max-w-[300px] lg:max-w-[320px] xl:max-w-[340px] mx-auto overflow-visible">
    <!-- Vinyl Record - Background -->
    <div class="absolute inset-0 flex items-center justify-center z-10 right-[-36%] sm:right-[-20%] lg:right-[-25%] top-0">
      <img 
        src="/icons/baseicons/vinyl2.svg" 
        alt="Vinyl Record"
        class="w-full h-full max-w-[94vw] sm:max-w-[290px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[400px] animate-spin-slow"
      />
    </div>
    
    <!-- Album Cover -->
    <div class="absolute top-0 right-12 sm:right-6 lg:right-7 w-full h-full z-20">
      <div class="w-full h-full bg-gray-200 overflow-hidden relative group">
        <img 
          :src="image" 
          :alt="title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        <!-- Play Button -->
        <button 
          @click="$emit('play')"
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-300 ease-out scale-100 hover:scale-90"
          aria-label="Play mixtape"
        >
          <img src="/icons/baseicons/play.svg" alt="Play" class="w-14 h-14 sm:w-10 sm:h-10 lg:w-8 lg:h-8" />
        </button>
      </div>
    </div>
    
    <!-- Favorite Button -->
    <button 
      @click="$emit('toggle-favorite')"
      class="absolute top-2 right-14 sm:top-3 sm:right-8 lg:top-3 lg:right-10 w-12 h-12 sm:w-8 sm:h-8 lg:w-9 lg:h-9 bg-white rounded-full flex items-center justify-center shadow-lg z-30 transition-all duration-300 ease-out scale-100 hover:scale-90"
      :class="{ 'text-red-500': isFavorited, 'text-gray-400': !isFavorited }"
      aria-label="Toggle favorite"
    >
      <img 
        :src="isFavorited ? '/icons/baseicons/like_red.svg' : '/icons/baseicons/like_black.svg'" 
        alt="Like" 
        class="w-6 h-6 sm:w-[14px] sm:h-[14px] lg:w-4 lg:h-4 transition-all duration-300" 
      />
    </button>
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