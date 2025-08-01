<template>
  <section class="w-full bg-white">
    <div class="mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
      <div class="flex flex-col lg:flex-row lg:items-start gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
        <!-- Left side - Title -->
        <div class="lg:w-1/4">
          <div class="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
            <h2 class="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-glancyr-regular text-black leading-tight tracking-tight flex flex-col">
              <span>AFTER</span>
              <span>PURCHASE,</span>
              <span>YOU WILL GET IT</span>
            </h2>
          </div>
        </div>

        <!-- Right side - Feature cards -->
        <div class="lg:w-3/4 relative">
          <div class="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-6">
            <FeatureCard
              v-for="feature in features"
              :key="feature.id"
              :feature="feature"
              class="font-geist-regular w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import FeatureCard from './FeatureCard.vue';
import { features } from '~/data/features';
</script>

<style scoped>
/* Extra small devices (phones, 360px and down) */
@media (max-width: 360px) {
  h2 {
    font-size: 1.4rem;
    line-height: 1.25;
  }
  .grid {
    gap: 0.75rem;
  }
  .flex.flex-col {
    gap: 1rem;
  }
}

/* Small devices (phones, 400px and down) */
@media (max-width: 400px) {
  h2 br.hidden.xs\:block {
    display: none;
  }
}

/* Tablet portrait mode */
@media (min-width: 768px) and (max-width: 1023px) and (orientation: portrait) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }
  h2 {
    font-size: 1.8rem;
  }
}

/* Tablet landscape mode */
@media (min-width: 768px) and (max-width: 1023px) and (orientation: landscape) {
  .grid {
    gap: 1rem;
  }
}

/* Large desktop screens */
@media (min-width: 1920px) {
  .grid {
    gap: 2rem;
  }
  h2 {
    font-size: 2.25rem;
  }
}

/* Smooth transitions for all elements */
section {
  transition: all 0.3s ease;
}
</style>