<template>
  <div class="artist-card">
    <NuxtLink to="/artist-detail"
      class="relative group cursor-pointer overflow-hidden"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <!-- Artist Image with Gradient Overlay -->
      <div class="relative pb-[133.33%] overflow-hidden">
        <img 
          :src="artist.image" 
          :alt="artist.name"
          class="absolute inset-0 w-full h-full object-cover transition-all duration-700"
          :class="{ 
            'grayscale': !isHovered,
            'grayscale-0 scale-105': isHovered 
          }"
        />
        
        <div 
          class="absolute inset-0 transition-all duration-700"
          :class="{
            'bg-gradient-to-t from-black/80 via-black/20 to-transparent': !isHovered,
            'bg-gradient-to-t from-red-800/70 via-red-400/20 to-transparent': isHovered
          }"
        ></div>
      </div>

      <!-- Artist Name -->
      <div class="absolute bottom-0 left-0 p-3 sm:p-4 md:p-5 z-10 text-left w-full">
        <h3 
          class="text-xl sm:text-2xl md:text-3xl lg:text-[34px] text-white italic tracking-wider transition-all duration-700 uppercase"
          :class="{ 
            'font-glancyr-light': !isHovered,
            'font-glancyr-regular text-shadow-red': isHovered 
          }"
        >
          {{ artist.name }}
          <span 
            v-if="isHovered"
            class="absolute inset-0 text-red-500 opacity-30 blur-sm -z-10"
            aria-hidden="true"
          >
            {{ artist.name }}
          </span>
        </h3>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  artist: {
    type: Object,
    required: true
  }
})

const isHovered = ref(false)
</script>

<style scoped>
.text-shadow-red {
  text-shadow: 0 0 12px rgba(239, 68, 68, 0.4);
}

* {
  transition-property: transform, filter, background, opacity, text-shadow, font-weight;
  transition-duration: 700ms;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}

.artist-card {
  width: 100%;
  height: 100%;
}

@media (max-width: 640px) {
  .absolute.bottom-0.left-0 {
    padding: 0.75rem;
  }
  
  h3 {
    font-size: 1.25rem;
    line-height: 1.2;
  }
}
</style>