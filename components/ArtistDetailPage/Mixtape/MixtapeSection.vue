<template>
  <section class="bg-white py-8 sm:py-10 lg:py-14 px-4 sm:px-6 md:px-10 lg:px-12">
    <!-- Section Title -->
    <div class="mb-6 sm:mb-8 lg:mb-10">
      <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-glancyr-medium">
        ALL WISHNU SANTIKA MIXTAPE
      </h2>
    </div>

    <!-- Mixtape Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-6 sm:gap-y-8 lg:gap-y-12">
      <div
        v-for="mixtape in displayedMixtapes"
        :key="mixtape.id"
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

    <!-- Pagination -->
    <div class="flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-10 gap-4 font-geist-regular">
      <div class="text-sm text-gray-600 font-geist-regular">
        Showing {{ startItem }}-{{ endItem }} of {{ mixtapes.length }} items
      </div>
      <div class="flex gap-2">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="p-2 border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous page"
        >
          <img src="/icons/baseicons/bulk_left.svg" alt="Previous" class="w-4 h-4" />
        </button>
        <button
          v-for="page in totalPages"
          :key="page"
          @click="currentPage = page"
          :class="[
            'px-3 py-1 border',
            currentPage === page
              ? 'bg-[#A10501] text-white border-[#A10501]'
              : 'border-gray-300 hover:bg-gray-100'
          ]"
        >
          {{ page }}
        </button>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="p-2 border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next page"
        >
          <img src="/icons/baseicons/bulk_right.svg" alt="Next" class="w-4 h-4" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { mixtapes } from '@/data/mixtapesPopular'
import MixtapeCard from './MixtapeCard.vue'

// Pagination logic
const itemsPerPage = 10
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(mixtapes.length / itemsPerPage))

const displayedMixtapes = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return mixtapes.slice(start, end)
})

const startItem = computed(() => (currentPage.value - 1) * itemsPerPage + 1)
const endItem = computed(() => Math.min(currentPage.value * itemsPerPage, mixtapes.length))

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}
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

  /* Stack pagination buttons on small screens */
  .flex-col {
    align-items: stretch;
  }
  
  .flex-row {
    flex-wrap: wrap;
  }
}
</style>