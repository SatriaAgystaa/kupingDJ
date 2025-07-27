<!-- ImpactData.vue -->
<template>
  <div class="w-full bg-white mx-auto py-6 xs:py-7 sm:py-8 md:py-10 lg:py-12 xl:py-12 2xl:py-12 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-10 xl:px-12 2xl:px-12 relative z-10">
    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
      <div class="text-start" v-for="stat in stats" :key="stat.title">
        <p class="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-glancyr-regular text-black leading-none">
          {{ stat.value }}
        </p>
        <p class="text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl font-geist-regular mt-2 sm:mt-3">
          {{ stat.title }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  stats: {
    type: Array,
    required: true
  }
});
</script>