<!-- PicksCard.vue -->
<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 overflow-hidden shadow-lg bg-gray-900 h-full">
    <!-- Image Section -->
    <div class="relative aspect-[3/4] h-full min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px]">
      <img
        :src="pick.image"
        :alt="`${pick.name} profile photo`"
        class="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-5 md:p-6">
        <h3 class="text-xl sm:text-2xl md:text-[28px] lg:text-3xl xl:text-[34px] font-glancyr-medium italic tracking-wider text-white">
          {{ pick.name }}
        </h3>
        <p class="text-sm sm:text-[15px] md:text-base lg:text-lg font-glancyr-regular italic text-white/90">
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
        class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-2 sm:mb-3 md:mb-4"
        aria-hidden="true"
      />
      
      <!-- Content -->
      <div class="flex-grow flex flex-col justify-end font-geist-regular">
        <p class="text-xl sm:text-base md:text-3xl lg:text-4xl xl:text-4xl leading-relaxed sm:leading-relaxed md:leading-relaxed">
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