<template>
  <div class="album-section relative overflow-hidden">
    <div class="mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
      <!-- Album Card (Left Aligned) -->
      <div class="pb-0 mb-8 sm:mb-10 md:mb-12 w-full flex justify-start">
        <AlbumCard
          :id="currentAlbum.id"
          :title="currentAlbum.title"
          :coverImage="currentAlbum.coverImage"
          :date="currentAlbum.date"
          :price="currentAlbum.price"
          :isFavorited="currentAlbum.isFavorited"
          @toggle-favorite="toggleFavorite"
          class="w-full"
        />
      </div>

      <!-- Combined Tracks Section -->
      <div class="mt-12">
        <div class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          <!-- Promotion Video (first item) -->
          <TrackCard
            v-if="promotionVideo"
            :albumId="currentAlbum.id"
            :albumTitle="currentAlbum.title"
            :albumCoverImage="currentAlbum.coverImage"
            :track="promotionVideo"
          />
          
          <!-- Regular Tracks -->
          <TrackCard
            v-for="(track, index) in displayedTracks"
            :key="'track-'+index"
            :albumId="currentAlbum.id"
            :albumTitle="currentAlbum.title"
            :albumCoverImage="currentAlbum.coverImage"
            :track="track"
          />
        </div>

        <!-- Pagination for Tracks (EXACTLY AS REQUESTED - NO CHANGES) -->
        <div class="flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-10 gap-4 font-geist-regular">
          <div class="text-sm text-gray-600 font-geist-regular">
            Showing {{ startItem }}-{{ endItem }} of {{ allTracks.length + (promotionVideo ? 1 : 0) }} items
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
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import AlbumCard from './AlbumCard.vue'
import TrackCard from './TrackCard.vue'
import { albumsData } from '~/data/albums'

const currentPage = ref(1)
const itemsPerPage = 8

// Get only the first album (ID 1)
const currentAlbum = computed(() => {
  return albumsData.find(album => album.id === 1) || albumsData[0]
})

// Extract all tracks from the current album
const allTracks = computed(() => {
  return currentAlbum.value.tracks.filter(track => track.category === 'Partials')
})

// Get promotion video separately
const promotionVideo = computed(() => {
  return currentAlbum.value.tracks.find(track => track.category === 'Video')
})

// Pagination for regular tracks (excluding promotion video)
const totalPages = computed(() => Math.ceil(allTracks.value.length / itemsPerPage))

const displayedTracks = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return allTracks.value.slice(start, end)
})

const startItem = computed(() => (currentPage.value - 1) * itemsPerPage + 1)
const endItem = computed(() => Math.min(currentPage.value * itemsPerPage, allTracks.value.length))

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

const toggleFavorite = (albumId) => {
  console.log(`Toggled favorite for album ${albumId}`)
}
</script>

<style scoped>
.album-section {
  width: 100%;
}

/* Extra small devices (phones below 400px) */
@media (max-width: 400px) {
  .grid {
    gap: 0.75rem;
  }
  
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  .xs\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* Small devices (phones, 400px and up) */
@media (min-width: 400px) and (max-width: 639px) {
  .grid {
    gap: 1rem;
  }
  
  .xs\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* Medium devices (tablets, 640px and up) */
@media (min-width: 640px) and (max-width: 767px) {
  .grid {
    gap: 1rem;
  }
  
  .sm\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* Large devices (small laptops, 768px and up) */
@media (min-width: 768px) and (max-width: 1023px) {
  .grid {
    gap: 1.25rem;
  }
  
  .md\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

/* Extra large devices (laptops/desktops, 1024px and up) */
@media (min-width: 1024px) and (max-width: 1279px) {
  .grid {
    gap: 1.5rem;
  }
  
  .lg\:grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
}

/* 2XL devices (large desktops, 1280px and up) */
@media (min-width: 1280px) {
  .grid {
    gap: 1.5rem;
  }
  
  .lg\:grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
}

/* Special cases for very small screens */
@media (max-width: 320px) {
  .grid {
    gap: 0.5rem;
  }
}

/* Tablet portrait specific adjustments */
@media (min-width: 768px) and (max-width: 1023px) and (orientation: portrait) {
  .grid {
    gap: 1.5rem;
  }
}

/* Tablet landscape specific adjustments */
@media (min-width: 768px) and (max-width: 1023px) and (orientation: landscape) {
  .grid {
    gap: 1.25rem;
  }
}
</style>