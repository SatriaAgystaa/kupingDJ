<template>
  <div class="relative w-full aspect-square max-w-[290px] mx-auto">
    <!-- Vinyl Record - Background -->
    <div class="absolute inset-0 flex items-center justify-center z-10 right-[-20%] sm:right-[-25%] top-0">
      <img 
        src="/icons/baseicons/vinyl2.svg" 
        alt="Vinyl Record"
        class="w-full h-full max-w-[290px]"
      />
    </div>
    
    <!-- PicksMixtape Cover -->
    <div class="absolute top-0 right-7 w-full h-full z-20">
      <div class="w-full h-full bg-gray-200 overflow-hidden shadow-lg relative">
        <img 
          :src="image" 
          :alt="title"
          class="w-full h-full object-cover"
        />
        
        <!-- Play Icon with smooth zoom-out animation -->
        <button 
          @click="$emit('play')"
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-300 ease-out scale-100 hover:scale-90"
        >
          <img src="/icons/baseicons/play.svg" alt="Play" class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
        </button>
      </div>
    </div>
    
    <!-- Love Icon with smooth zoom-out animation -->
    <button 
      @click="$emit('toggle-favorite')"
      class="absolute top-3 right-10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-30 transition-all duration-300 ease-out scale-100 hover:scale-90"
      :class="{ 'text-red-500': isFavorited, 'text-gray-400': !isFavorited }"
    >
      <img src="/icons/baseicons/like_black.svg" alt="Like" class="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-5 md:h-5 transition-all duration-300" />
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
/* Smooth transitions for both buttons */
button {
  will-change: transform;
  backface-visibility: hidden;
  transform-style: preserve-3d;
}
</style>