<template>
  <section class="w-full bg-white">
    <div class="mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
      <div class="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <!-- Title Section -->
        <div class="lg:w-1/4">
          <h2 class="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-glancyr-regular text-black mb-4 sm:mb-5 md:mb-6">
            BEST SELLER<br>MIXTAPE
          </h2>
        </div>

        <!-- Content Section -->
        <div class="lg:w-3/4">
          <h3 class="text-2xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-glancyr-medium text-black mb-6 sm:mb-7 md:mb-8">
            TOP 5 {{ topArtistName }}<br>
            <span class="text-2xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl">BEST SELLER MIXTAPE</span>
          </h3>
          
          <!-- Cards Container -->
          <div class="w-full space-y-4 sm:space-y-5 md:space-y-6">
            <BestSellerCard 
              v-for="mixtape in topMixtapes" 
              :key="mixtape.id" 
              :mixtape="mixtape" 
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { mixtapes } from '~/data/mixtapesPopular'
import BestSellerCard from './BestSellerCard.vue'

const topMixtapes = mixtapes.slice(0, 5)

const artistCount = topMixtapes.reduce((acc, curr) => {
  acc[curr.artist] = (acc[curr.artist] || 0) + 1
  return acc
}, {})

const topArtistName = Object.entries(artistCount)
  .sort((a, b) => b[1] - a[1])[0][0]
  .toUpperCase()
</script>

<style scoped>
/* Tablet optimization */
@media (min-width: 768px) and (max-width: 1023px) {
  .lg\:w-3\/4 {
    width: 100%;
  }
  
  .lg\:w-1\/4 {
    width: 100%;
    margin-bottom: 2rem;
  }
}

/* Ensure cards don't overflow on small devices */
.BestSellerCard {
  min-width: 0;
}
</style>