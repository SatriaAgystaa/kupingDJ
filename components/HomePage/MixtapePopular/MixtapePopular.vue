<template>
  <section class="bg-white py-8 sm:py-10 lg:py-14 px-4 sm:px-6 md:px-10 lg:px-12">
    <!-- Section Title & Filter -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 sm:mb-8 lg:mb-10">
      <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 md:mb-0 font-glancyr-medium">
        MOST POPULAR MIXTAPE
      </h2>
      <div class="flex mt-3 sm:mt-4 md:mt-0">
        <button
          v-for="btn in filters"
          :key="btn"
          @click="activeFilter = btn"
          :class="[ 
            'uppercase border text-xs sm:text-sm md:text-base font-glancyr-regular px-3 py-1.5 sm:px-4 sm:py-2 transition-all duration-200',
            activeFilter === btn
              ? 'bg-black text-white border-black'
              : 'text-black border-black hover:bg-black hover:text-white'
          ]"
        >
          {{ btn }}
        </button>
      </div>
    </div>

    <!-- Mixtape Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-6 sm:gap-y-8 lg:gap-y-12">
      <div
        v-for="mixtape in mixtapes"
        :key="mixtape.id"
        class=""
      >
        <MixtapeCard
          :artist="mixtape.artist"
          :artistImage="mixtape.artistImage"
          :title="mixtape.title"
          :price="mixtape.price"
          :image="mixtape.image"
          :likes="mixtape.likes"
          :downloads="mixtape.downloads"
          :rating="mixtape.rating"
          :bpm="mixtape.bpm"
          :date="mixtape.date"
          :isCarousel="false"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { mixtapes } from '@/data/mixtapesPopular'
import MixtapeCard from './MixtapeCard.vue'

const filters = ['Top Purchased', 'Highest Rated', 'Highest Rated']
const activeFilter = ref('Top Purchased')
</script>

<style scoped>
/* Responsive adjustments for very small screens */
@media (max-width: 360px) {
  .grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1.5rem;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.2;
  }

  button {
    padding: 0.5rem 0.75rem;
    font-size: 0.65rem;
  }
}

/* Ensure filter buttons don't wrap on medium screens */
@media (min-width: 640px) and (max-width: 767px) {
  .flex {
    flex-wrap: nowrap;
  }
}
</style>
