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
        <h3 class="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-glancyr-medium italic tracking-wider text-white">{{ testimonial.name }}</h3>
        <p class="text-sm sm:text-base md:text-[15px] lg:text-base font-glancyr-regular italic text-white/90">{{ testimonial.role }}</p>
      </div>
    </div>

    <!-- Text Section - Quote fixed top, text grows from bottom -->
    <div class="bg-[#A10501] p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 text-white flex flex-col h-full aspect-[16/9] md:aspect-[3/4] lg:aspect-[3/4]">
      <!-- Quote icon fixed at top -->
      <img
        src="/icons/baseicons/koma.svg"
        alt="Quote icon"
        class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2 sm:mb-3 md:mb-4"
        aria-hidden="true"
      />
      
      <!-- Text content area that grows upwards from bottom -->
      <div class="flex-grow flex flex-col justify-end">
        <p class="text-md sm:text-[15px] md:text-2xl lg:text-2xl xl:text-2xl leading-relaxed sm:leading-relaxed md:leading-relaxed">
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
</style>