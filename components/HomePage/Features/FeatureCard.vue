<template>
  <div class="relative bg-white p-4 sm:p-5 md:p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 w-full aspect-3/4 sm:aspect-square md:aspect-square lg:aspect-square xl:aspect-square flex flex-col overflow-hidden">
    <!-- Icon at top -->
    <div class="flex justify-start mb-4 sm:mb-5 md:mb-6 z-10">
      <img 
        :src="feature.iconPath" 
        :alt="`${feature.title} icon`" 
        class="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20"
      />
    </div>

    <!-- Spacer to push content down -->
    <div class="flex-1"></div>

    <!-- Background effect image -->
    <img
      v-if="feature.effectPath"
      :src="feature.effectPath"
      alt="Background effect"
      <div class="absolute bottom-0 right-0 w-[240px] sm:w-[300px] md:w-[360px] lg:w-[360px] h-[240px] sm:h-[300px] md:h-[360px] lg:h-[360px] object-cover pointer-events-none z-0"
    />

    <!-- Feature title -->
    <div class="flex items-center font-glancyr-regular justify-between mt-4 sm:mt-5 md:mt-6 z-10">
      <h3 class="text-xl sm:text-2xl md:text-2xl lg:text-2xl text-black tracking-wide whitespace-pre-line">
        {{ feature.title }}
      </h3>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  feature: {
    type: Object,
    required: true
  }
})
</script>