<template>
  <div 
    class="flex-shrink-0 px-1 sm:px-2"
    :style="{ width: `${100 / visibleCards}%` }"
  >
    <div 
      class="relative group cursor-pointer overflow-hidden"
      @mouseenter="$emit('hover-change', index)"
      @mouseleave="$emit('hover-change', null)"
    >
      <!-- Artist Image with Gradient Overlay - Updated aspect ratio container -->
      <div class="relative pb-[133.33%] overflow-hidden"> <!-- 4:3 aspect ratio -->
        <!-- Main Image -->
        <img 
          :src="artist.image" 
          :alt="artist.name"
          class="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-300"
          :class="{ 
            'grayscale': !isHovered,
            'grayscale-0 scale-105': isHovered 
          }"
        />
        
        <!-- Dynamic Gradient Overlay -->
        <div 
          class="absolute inset-0 transition-all duration-700 ease-300"
          :class="{
            'bg-gradient-to-t from-black/80 via-black/20 to-transparent': !isHovered,
            'bg-gradient-to-t from-red-800/70 via-red-400/20 to-transparent': isHovered
          }"
        ></div>
      </div>

      <!-- Artist Name with Hover Effects -->
      <div class="absolute bottom-0 left-0 p-2 sm:p-3 z-10 text-left w-full">
        <h3 
          class="text-2xl sm:text-2xl lg:text-3xl text-white italic tracking-wider transition-all duration-700 ease-300"
          :class="{ 
            'font-glancyr-light': !isHovered,
            'font-glancyr-regular text-shadow-red': isHovered 
          }"
        >
          {{ artist.name }}
          <!-- Glow Effect -->
          <span 
            v-if="isHovered"
            class="absolute inset-0 text-red-500 opacity-30 blur-sm -z-10"
            aria-hidden="true"
          >
            {{ artist.name }}
          </span>
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  artist: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  isHovered: {
    type: Boolean,
    default: false
  },
  visibleCards: {
    type: Number,
    default: 4
  }
})

defineEmits(['hover-change'])
</script>

<style scoped>
/* Custom Glow Effect */
.text-shadow-red {
  text-shadow: 0 0 12px rgba(239, 68, 68, 0.4);
}

/* Optimized Transitions */
.group:hover img {
  transition-duration: 800ms;
}

.group:hover .bg-gradient-to-t {
  transition-duration: 800ms;
}

/* Smoother Bezier Curve */
* {
  transition-property: transform, filter, background, opacity, text-shadow, font-weight;
  transition-duration: 700ms;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .absolute.bottom-0.left-0 {
    padding: 0.75rem;
  }
  
  h3 {
    font-size: 1rem;
    line-height: 1.2;
  }
}
</style>