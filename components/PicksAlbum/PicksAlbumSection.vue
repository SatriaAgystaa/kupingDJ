<!-- AlbumSection.vue -->
<template>
  <main class="album-section relative overflow-hidden bg-black">
    <div class="container mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
      <!-- Section Header -->
      <h2 class="text-3xl md:text-4xl text-white font-glancyr-regular thacking-wide mb-6 sm:mb-8 md:mb-10">KUPING DJ<br/>PICKS ALBUM</h2>
      
      <!-- Albums Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-6 items-start pb-0">
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
    </div>
  </main>
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