<template>
  <div class="album-section relative overflow-hidden">
    <div class="mx-auto pb-6 xs:pb-7 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-12 2xl:pb-12 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-10 xl:px-12 2xl:px-12 relative z-10">
      
      <!-- Albums Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-6 sm:gap-y-8 lg:gap-y-12">
        <AlbumCard
          v-for="album in displayedAlbums"
          :key="album.id"
          :title="album.title"
          :coverImage="album.coverImage"
          :date="album.date"
          :price="album.price"
          :tracks="album.tracks"
        />
      </div>

      <!-- Pagination -->
      <div class="flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-10 gap-4 font-geist-regular">
        <div class="text-sm text-gray-600 font-geist-regular">
          Showing {{ startItem }}-{{ endItem }} of {{ albums.length }} items
        </div>
        <div class="flex gap-2">
          <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
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
            class="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next page"
          >
            <img src="/icons/baseicons/bulk_right.svg" alt="Next" class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import AlbumCard from './AlbumCard.vue'
import { albumsData } from '~/data/albums'

// Pagination logic
const itemsPerPage = 4 // Changed to 4 to match 2x2 grid
const currentPage = ref(1)
const albums = ref(albumsData)

const totalPages = computed(() => Math.ceil(albums.value.length / itemsPerPage))

const displayedAlbums = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return albums.value.slice(start, end)
})

const startItem = computed(() => (currentPage.value - 1) * itemsPerPage + 1)
const endItem = computed(() => Math.min(currentPage.value * itemsPerPage, albums.value.length))

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