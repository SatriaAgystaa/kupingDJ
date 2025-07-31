<template>
  <div class="relative overflow-hidden bg-black">
    <div class="mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <h2 class="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-white font-glancyr-regular tracking-wide leading-tight flex flex-col">
          <span>KUPING DJ</span>
          <span>PICKS ALBUM</span>
        </h2>
      </div>
      
      <!-- Albums Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-6 lg:gap-8 xl:gap-10 items-start">
        <AlbumCard
          v-for="album in displayedAlbums"
          :key="album.id"
          :title="album.title"
          :coverImage="album.coverImage"
          :date="album.date"
          :price="album.price"
          :tracks="album.tracks"
          class="w-full"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import AlbumCard from './PicksAlbumCard.vue'
import { albumsData } from '~/data/albums'

const albums = ref(albumsData)
const displayCount = ref(2)

const displayedAlbums = computed(() => {
  return albums.value.slice(0, displayCount.value)
})

const hasMoreAlbums = computed(() => {
  return displayCount.value < albums.value.length
})

const loadMore = () => {
  displayCount.value = Math.min(displayCount.value + 2, albums.value.length)
}
</script>

<style scoped>
/* Smooth transitions for interactive elements */
.group {
  transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.group:hover {
  transform: scale(1.03);
}

/* Extra small devices (phones, 400px and down) */
@media (max-width: 400px) {
  .grid {
    gap: 1rem;
  }
  
  button[class*="bg-red-800"] {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    font-size: 0.65rem;
  }
}

/* Tiny devices (phones, 320px and down) */
@media (max-width: 320px) {
  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  .grid {
    gap: 0.75rem;
  }
  
  button[class*="bg-red-800"] {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-size: 0.6rem;
  }
  
  div[class*="bg-black"] {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  
  img[alt="arrow"] {
    width: 0.75rem;
    height: 0.75rem;
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
</style>