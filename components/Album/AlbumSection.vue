<template>
  <main class="album-section relative overflow-hidden">
    <div class="container mx-auto py-8 sm:py-10 lg:py-14 px-4 sm:px-6 md:px-10 lg:px-12 relative">
      <!-- Section Header -->
      <h2 class="text-4xl md:text-5xl font-glancyr-medium thacking-wide mb-12">NEW ARRIVAL ALBUM</h2>
      
      <!-- Albums Grid -->
      <div class="grid lg:grid-cols-2 gap-12 items-start pb-0 mb-12">
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

      <!-- Load More Button -->
      
      <!-- Explore Button Section -->
      <div class="flex justify-center mt-12 pb-12">
        <div class="flex group font-glancyr-light hover:scale-105 transition-all duration-300">
          <!-- Red Button -->
          <button 
            class="bg-red-800 text-white px-4 py-2 font-semibold tracking-wide text-sm 
                   transition-all duration-300 group-hover:bg-red-700"
          >
            EXPLORE ALL ALBUM
          </button>

          <!-- Black Icon Section -->
          <div 
            class="bg-black px-4 py-3 flex items-center justify-center 
                   transition-all duration-300 group-hover:bg-gray-900"
          >
            <img 
              src="/icons/baseicons/arrow_white.svg" 
              alt="arrow" 
              class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
            />
          </div>
        </div>
      </div>
    </div>
  </main>
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
