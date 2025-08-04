<template>
  <div class="album-section relative overflow-hidden">
    <div class="mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
      
      <!-- Albums Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-6 lg:gap-8 xl:gap-10 items-start pb-0 mb-8 sm:mb-10 md:mb-12">
        <AlbumCard
          v-for="album in displayedAlbums"
          :key="album.id"
          :id="album.id"
          :title="album.title"
          :coverImage="album.coverImage"
          :date="album.date"
          :price="album.price"
          :tracks="album.tracks"
          :is-favorited="album.isFavorited"
          @toggle-favorite="toggleFavorite"
          class="w-full"
        />
      </div>

      <!-- Pagination (unchanged as requested) -->
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
const itemsPerPage = 4 // Matches 2x2 grid (2 columns x 2 rows)
const currentPage = ref(1)
const albums = ref(albumsData.map(album => ({ ...album, isFavorited: false })))

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

// Handle toggle favorite
const toggleFavorite = (albumId) => {
  const index = albums.value.findIndex(a => a.id === albumId)
  if (index !== -1) {
    albums.value[index].isFavorited = !albums.value[index].isFavorited
  }
}
</script>

<style scoped>
/* Responsive adjustments from the responsive version */
.album-section {
  width: 100%;
}

/* Extra small devices (phones, 400px and down) */
@media (max-width: 400px) {
  .grid {
    gap: 1rem;
  }
}

/* Tiny devices (phones, 320px and down) */
@media (max-width: 320px) {
  .grid {
    gap: 0.75rem;
  }
}

/* Tablet portrait mode adjustments */
@media (min-width: 768px) and (max-width: 1023px) and (orientation: portrait) {
  .grid {
    gap: 1.5rem;
  }
}

/* Tablet landscape mode adjustments */
@media (min-width: 768px) and (max-width: 1023px) and (orientation: landscape) {
  .grid {
    gap: 1rem;
  }
}

/* Very small screens adjustments for pagination */
@media (max-width: 360px) {
  .grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1.5rem;
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