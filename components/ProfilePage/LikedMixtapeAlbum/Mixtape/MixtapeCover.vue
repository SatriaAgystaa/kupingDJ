<template>
  <div class="relative w-full aspect-square mx-auto overflow-visible">
    <!-- Vinyl Record - Background -->
    <div class="absolute inset-0 flex items-center justify-center z-10 right-[-25%] bottom-[-7%] 
                sm:right-[-10%] sm:bottom-[-10%] 
                md:right-[-28%] md:bottom-0">
      <img 
        src="/icons/baseicons/vinyl2.svg" 
        alt="Vinyl Record"
        class="w-full h-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[250px] animate-spin-slow"
      />
    </div>
    
    <!-- Album Cover -->
    <div class="absolute top-0 w-full h-full z-20 right-4 sm:right-5 md:right-6 lg:right-5">
      <div class="w-full h-full bg-gray-200 overflow-hidden relative group mx-auto
                  max-w-[180px] max-h-[180px] 
                  sm:max-w-[200px] sm:max-h-[200px] 
                  md:max-w-[220px] md:max-h-[220px] 
                  lg:max-w-[350px] lg:max-h-[350px]">
        <img 
          :src="image" 
          :alt="title"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        <!-- Play Button - Posisi tetap di tengah -->
        <button 
          @click="$emit('play')"
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-300 ease-out scale-100 hover:scale-90
                 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12"
          aria-label="Play mixtape"
        >
          <img src="/icons/baseicons/play.svg" alt="Play" class="w-full h-full" />
        </button>
      </div>
    </div>
    
    <!-- Favorite Button - Posisi tetap di pojok kanan atas cover -->
    <button 
      @click="$emit('toggle-favorite')"
      class="absolute z-30 bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ease-out scale-100 hover:scale-90
              top-3 right-12 sm:top-3.5 sm:right-14 md:top-4 md:right-16 lg:top-5 lg:right-18
              w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9"
      aria-label="Toggle favorite"
    >
      <img 
        :src="isFavorited ? '/icons/baseicons/like_pink.svg' : '/icons/baseicons/like_pink.svg'" 
        alt="Like" 
        class="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-4.5 lg:h-4.5 transition-all duration-300" 
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