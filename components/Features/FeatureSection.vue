<template>
  <section class="w-full bg-white">
    <div class="container mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
      <div class="flex flex-col lg:flex-row lg:items-start gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12">
        <!-- Left side - Title -->
        <div class="lg:w-1/4 lg:sticky lg:top-8">
          <div class="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
            <h2 class="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-glancyr-regular text-black leading-tight tracking-tight">
              AFTER<br />PURCHASE,<br />YOU WILL GET
            </h2>
          </div>
        </div>

        <!-- Right side - Feature cards -->
        <div class="lg:w-3/4 relative">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            <FeatureCard
              v-for="feature in features"
              :key="feature.id"
              :feature="feature"
              class="font-geist-regular"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import FeatureCard from './FeatureCard.vue'
import { features } from '~/data/features'
</script>

<style scoped>
/* Custom responsive adjustments */
@media (max-width: 360px) {
  .container {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  
  h2 {
    font-size: 1.5rem;
    line-height: 1.3;
  }
  
  .grid {
    gap: 0.75rem;
  }
}

@media (min-width: 640px) and (max-width: 1023px) {
  .flex.flex-col {
    gap: 1.5rem;
  }
  
  h2 {
    font-size: 1.75rem;
  }
}
</style>