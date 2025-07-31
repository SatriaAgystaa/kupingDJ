<!-- ImpactSection.vue -->
<template>
  <section class="bg-white overflow-hidden">
    <ImpactCarousel :carousel-items="data.carouselItems" />
    <ImpactCarousel :carousel-items="data.carouselItems" />
    <ImpactData :stats="data.stats" />
  </section>
</template>

<script setup>
import ImpactCarousel from './ImpactCarousel.vue';
import ImpactData from './ImpactData.vue';
import { impactStatsData } from '@/data/impactstats';

const data = impactStatsData;
</script>