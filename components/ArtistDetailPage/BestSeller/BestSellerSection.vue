<template>
  <section class="w-full bg-white">
    <div class="container mx-auto py-8 px-4 sm:px-6 md:px-8 lg:px-10">
      <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <!-- Title Section -->
        <div class="lg:w-1/4">
          <h2 class="text-xl xs:text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-glancyr-regular text-black mb-6">
            BEST SELLER<br>MIXTAPE
          </h2>
        </div>

        <!-- Content Section -->
        <div class="lg:w-3/4">
          <h3 class="text-3xl md:text-4xl font-glancyr-medium text-black mb-8">
            TOP 5 {{ topArtistName }}<br>
            <span class="text-3xl md:text-4xl">BEST SELLER MIXTAPE</span>
          </h3>
          
          <!-- Cards Container - Full width on tablet -->
          <div class="w-full space-y-4 md:space-y-6">
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
/* Tablet full-width optimization */
@media (min-width: 768px) and (max-width: 1023px) {
  .container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  
  .lg\:w-3\/4 {
    width: 100%;
  }
  
  .lg\:w-1\/4 {
    width: 100%;
    margin-bottom: 2rem;
  }
  
  .flex-col {
    flex-direction: column;
  }
}

/* Mobile adjustments */
@media (max-width: 767px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  h2, h3 {
    font-size: 1.75rem;
    line-height: 2rem;
  }
  
  h3 span {
    font-size: 1.5rem;
  }
}
</style>