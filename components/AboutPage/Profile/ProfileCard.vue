<!-- ProfileCard.vue -->
<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 overflow-hidden shadow-lg bg-gray-900 h-full">
    <!-- Image Section -->
    <div class="relative aspect-[3/4] h-full min-h-[250px] xs:min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px]">
      <img
        :src="pick.image"
        :alt="`${pick.name} profile photo`"
        class="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-5 md:p-6 lg:p-7">
        <h3 class="text-2xl xs:text-2.5xl sm:text-3xl md:text-3.5xl lg:text-4xl font-glancyr-medium italic tracking-wider text-white">
          {{ pick.name }}
        </h3>
        <p class="text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl font-glancyr-regular italic text-white/90">
          {{ pick.role }}
        </p>
      </div>
    </div>

    <!-- Text Section -->
    <div class="bg-[#A10501] p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 text-white flex flex-col h-full aspect-[16/9] sm:aspect-[3/4]">
      <!-- Quote icon -->
      <img
        src="/icons/baseicons/koma.svg"
        alt="Quote icon"
        class="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 sm:mb-4 md:mb-5"
        aria-hidden="true"
      />
      
      <!-- Content -->
      <div class="flex-grow flex flex-col justify-end font-geist-regular">
        <p class="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2.5xl leading-relaxed sm:leading-loose">
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

<style scoped>
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