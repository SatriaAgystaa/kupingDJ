<template>
  <div class="picksMixtape-sectio bg-black">
    <div class="container mx-auto px-12 py-14 relative">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
        <h2 class="text-3xl md:text-4xl text-white font-glancyr-regular thacking-wide">KUPING DJ<br/>PICKS MIXTAPE</h2>
      </div>

      <!-- PicksMixtape Cards -->
      <div class="relative overflow-hidden">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-7">
          <PicksMixtapeCard
            v-for="picksMixtape in picksMixtapes"
            :key="picksMixtape.id"
            :artist="picksMixtape.artist"
            :artistImage="picksMixtape.artistImage"
            :title="picksMixtape.title"
            :price="picksMixtape.price"
            :image="picksMixtape.image"
            :likes="picksMixtape.likes"
            :downloads="picksMixtape.downloads"
            :rating="picksMixtape.rating"
            :bpm="picksMixtape.bpm"
            :date="picksMixtape.date"
            :isCarousel="false" 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { picksMixtapes } from '~/data/picksMixtapes'
import PicksMixtapeCard from './PicksMixtapeCard.vue'

const props = defineProps({
  title: {
    type: String,
    default: 'NEW ARRIVAL PICKS MIXTAPE'
  }
})
</script>

<style scoped>
@media (max-width: 640px) {
  .picksMixtape-section {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .grid.gap-4 {
    gap: 1rem;
  }
}
</style>