<!-- AlbumSection.vue -->
<template>
  <main class="album-section relative overflow-hidden">
    <div class="container mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
      <!-- Section Header -->
      <h2 class="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-glancyr-medium tracking-wide mb-4 sm:mb-6 md:mb-8">
        NEW ARRIVAL ALBUM
      </h2>
      
      <!-- Albums Grid -->
      <div class="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-6 items-start pb-0 mb-12">
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

      <!-- Explore Button Section -->
      <div class="flex justify-center">
        <div class="flex group font-glancyr-light hover:scale-105 transition-all duration-300">
          <!-- Red Button -->
          <button 
            class="bg-red-800 text-white px-4 py-2 sm:px-5 sm:py-3 font-semibold tracking-wide text-sm sm:text-base 
                   transition-all duration-300 group-hover:bg-red-700"
          >
            EXPLORE ALL ALBUM
          </button>

          <!-- Black Icon Section -->
          <div 
            class="bg-black px-4 py-3 sm:px-5 sm:py-3 flex items-center justify-center 
                   transition-all duration-300 group-hover:bg-gray-900"
          >
            <img 
              src="/icons/baseicons/arrow_white.svg" 
              alt="arrow" 
              class="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" 
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