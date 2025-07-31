<!-- ImpactData.vue -->
<template>
  <div class="w-full bg-white mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
    <!-- Mobile & tablet view (2 columns) -->
    <div class="lg:hidden grid grid-cols-2 gap-y-6 gap-x-4 py-2">
      <div 
        class="text-left"
        v-for="stat in stats" 
        :key="stat.title"
      >
        <p class="text-2xl sm:text-3xl md:text-4xl font-glancyr-light text-black leading-none">
          {{ stat.value }}
        </p>
        <p class="text-xs sm:text-sm md:text-base font-geist-regular">
          {{ stat.title }}
        </p>
      </div>
    </div>

    <!-- Desktop view (original layout) -->
    <div class="hidden lg:flex flex-nowrap justify-between items-baseline overflow-x-auto py-2 gap-6 lg:gap-8 xl:gap-10">
      <div 
        class="flex-none text-left"
        v-for="stat in stats" 
        :key="stat.title"
      >
        <p class="text-4xl lg:text-5xl xl:text-6xl font-glancyr-light text-black leading-none whitespace-nowrap">
          {{ stat.value }}
        </p>
        <p class="text-lg lg:text-xl font-geist-regular whitespace-nowrap">
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