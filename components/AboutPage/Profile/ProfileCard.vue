<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 overflow-hidden shadow-lg bg-gray-900 h-full w-full">
    <!-- Image Section -->
    <div class="relative h-full min-h-96 sm:min-h-96 md:min-h-96 lg:min-h-96 xl:min-h-[28rem]">
      <img
        :src="pick.image"
        :alt="`${pick.name} profile photo`"
        class="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 md:p-5 lg:p-6">
        <h3 class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-glancyr-medium italic tracking-wider text-white">
          {{ pick.name }}
        </h3>
        <p class="text-xs sm:text-sm md:text-base lg:text-lg font-glancyr-regular italic text-white/90">
          {{ pick.role }}
        </p>
      </div>
    </div>

    <!-- Text Section -->
    <div class="bg-[#A10501] p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 text-white flex flex-col h-full aspect-[16/9] md:aspect-[3/4] lg:aspect-[2/3] xl:aspect-[3/4]">
      <!-- Quote icon -->
      <img
        src="/icons/baseicons/koma.svg"
        alt="Quote icon"
        class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 mb-2 sm:mb-3 md:mb-4"
        aria-hidden="true"
      />
      
      <!-- Content -->
      <div class="flex-grow flex flex-col justify-end font-geist-regular">
        <p class="text-sm sm:text-base md:text-xl lg:text-xl xl:text-2xl leading-snug sm:leading-relaxed md:leading-relaxed">
          {{ pick.message }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Pick } from '~/data/picks'

defineProps<{
  pick: Pick
}>()
</script>

<style>
/* Card animations */
.card-enter-active,
.card-leave-active {
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.card-enter-from,
.card-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Extra small devices */
@media (max-width: 400px) {
  .min-h-48 {
    min-height: 12rem;
  }
  
  .text-xs {
    font-size: 0.7rem;
  }
  
  .text-sm {
    font-size: 0.8rem;
  }
  
  .w-8 {
    width: 1.5rem;
    height: 1.5rem;
    margin-bottom: 0.5rem;
  }
}

/* Tiny devices */
@media (max-width: 320px) {
  .min-h-48 {
    min-height: 10rem;
  }
  
  .text-xs {
    font-size: 0.65rem;
  }
  
  .text-sm {
    font-size: 0.75rem;
  }
  
  .text-lg {
    font-size: 1rem;
  }
}

/* Tablet portrait */
@media (min-width: 768px) and (max-width: 1023px) and (orientation: portrait) {
  .aspect-video {
    aspect-ratio: 3/4;
  }
}

/* Large desktop */
@media (min-width: 1920px) {
  .xl\:text-2xl {
    font-size: 2rem;
    line-height: 2.5rem;
  }
  
  .lg\:text-lg {
    font-size: 1.25rem;
  }
}

/* Prevent horizontal overflow */
.grid {
  max-width: 100%;
  overflow: hidden;
}

/* Smooth transitions */
img, h3, p {
  transition: all 0.3s ease;
}
</style>