<template>
  <div class="grid grid-cols-2 overflow-hidden shadow-lg bg-gray-900">
    <!-- Image Section -->
    <div class="relative aspect-[3/4] h-80 md:h-auto">
      <img
        :src="testimonial.image"
        :alt="`${testimonial.name} profile photo`"
        class="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
        <h3 class="text-3xl font-glancyr-medium italic tracking-wider">{{ testimonial.name }}</h3>
        <p class="text-lg font-glancyr-regular italic">{{ testimonial.role }}</p>
      </div>
    </div>

    <!-- Text Section -->
    <div class="relative aspect-[3/4] bg-[#A10501] p-8 text-white flex flex-col justify-between">
      <img
        src="/icons/baseicons/koma.svg"
        alt="Quote icon"
        class="relative w-24 h-24"
        aria-hidden="true"
      />
      <p class="text-xl leading-relaxed relative z-10">
        {{ testimonial.message }}
      </p>
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
/* Optional: Add any specific card animations or transitions */
.card-enter-active,
.card-leave-active {
  transition: all 0.5s ease;
}
.card-enter-from,
.card-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>