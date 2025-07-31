<template>
  <div class="album-section relative overflow-hidden">
    <div class="mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
      <!-- Section Header -->
      <h2 class="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-glancyr-medium tracking-wide mb-3 sm:mb-4 md:mb-6 lg:mb-8">
        NEW ARRIVAL ALBUM
      </h2>
      
      <!-- Albums Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-6 lg:gap-8 xl:gap-10 items-start pb-0 mb-8 sm:mb-10 md:mb-12">
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

      <!-- Explore Button Section -->
      <NuxtLink to="/album" class="flex justify-center">
        <div class="flex group font-glancyr-light hover:scale-105 transition-all duration-300">
          <!-- Red Button -->
          <button 
            class="bg-red-800 text-white px-3 py-1.5 xs:px-4 xs:py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 font-semibold tracking-wide text-xs xs:text-sm sm:text-base md:text-lg
                   transition-all duration-300 group-hover:bg-red-700"
          >
            EXPLORE ALL ALBUM
          </button>

          <!-- Black Icon Section -->
          <div 
            class="bg-black px-3 py-2 xs:px-4 xs:py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 flex items-center justify-center 
                   transition-all duration-300 group-hover:bg-gray-900"
          >
            <img 
              src="/icons/baseicons/arrow_white.svg" 
              alt="arrow" 
              class="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1" 
            />
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import AlbumCard from './AlbumCard.vue'
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
  
  div[class*="bg-black"] {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
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