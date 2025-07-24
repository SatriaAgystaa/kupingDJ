<template>
  <div class="relative bg-white p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 w-full aspect-square flex flex-col overflow-hidden">
    <!-- Icon at top -->
    <div class="flex justify-start mb-6 z-10">
      <img :src="feature.iconPath" :alt="`${feature.title} icon`" class="w-20 h-20" />
    </div>

    <!-- This empty div will take up available space to push content down -->
    <div class="flex-1"></div>

    <!-- Background effect image -->
    <img
      v-if="feature.effectPath"
      :src="feature.effectPath"
      alt="Background effect"
      class="absolute bottom-0 right-0 w-100 h-100 object-cover pointer-events-none z-0 opacity-50"
    />

    <!-- Feature title - This will be pushed to the bottom -->
    <div class="flex items-center font-glancyr-regular justify-between mt-6 z-10">
      <h3 class="text-3xl text-black tracking-wide whitespace-pre-line">{{ feature.title }}</h3>
      <!-- Removed the arrow button as it's not in the feature card image -->
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
