<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 overflow-hidden shadow-lg bg-gray-900 h-full">
    <!-- Image Section - Fixed aspect ratio -->
    <div class="relative aspect-[3/4] h-full min-h-[300px] sm:min-h-[400px]">
      <img
        :src="testimonial.image"
        :alt="`${testimonial.name} profile photo`"
        class="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-5 md:p-6">
        <h3 class="text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-[32px] font-glancyr-medium italic tracking-wider text-white">
          {{ testimonial.name }}
        </h3>
        <p class="text-xs xs:text-sm sm:text-sm md:text-[15px] lg:text-base xl:text-[17px] font-glancyr-regular italic text-white/90">
          {{ testimonial.role }}
        </p>
      </div>
    </div>

    <!-- Text Section - Quote fixed top, text grows from bottom -->
    <div class="bg-[#A10501] p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 text-white flex flex-col h-full aspect-[16/9] md:aspect-[3/4] lg:aspect-[3/4]">
      <!-- Quote icon fixed at top -->
      <img
        src="/icons/baseicons/koma.svg"
        alt="Quote icon"
        class="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2 sm:mb-3 md:mb-4"
        aria-hidden="true"
      />
      
      <!-- Text content area that grows upwards from bottom -->
      <div class="flex-grow flex flex-col justify-end">
        <p class="text-sm xs:text-[15px] sm:text-[15px] md:text-xl lg:text-xl xl:text-xl 2xl:text-xl leading-snug xs:leading-relaxed sm:leading-relaxed md:leading-relaxed">
          {{ testimonial.message }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Testimonial } from '~/data/testimonials'

defineProps<{
  testimonial: Testimonial
}>()
</script>

<style scoped>
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

/* Extra small devices (phones, 400px and down) */
@media (max-width: 400px) {
  .text-xs {
    font-size: 0.7rem;
  }
  
  .text-sm {
    font-size: 0.85rem;
  }
  
  img[alt="Quote icon"] {
    width: 2rem;
    height: 2rem;
  }
}

/* Tiny devices (phones, 320px and down) */
@media (max-width: 320px) {
  .text-xs {
    font-size: 0.65rem;
  }
  
  .text-sm {
    font-size: 0.8rem;
  }
  
  h3 {
    font-size: 1.1rem;
  }
}

/* Tablet portrait mode */
@media (min-width: 768px) and (max-width: 1023px) and (orientation: portrait) {
  p {
    line-height: 1.6;
  }
}

/* Large desktop screens */
@media (min-width: 1920px) {
  p {
    line-height: 1.7;
  }
  
  h3 {
    letter-spacing: 0.05em;
  }
}

/* Smooth text scaling */
h3, p {
  transition: font-size 0.3s ease;
}
</style>