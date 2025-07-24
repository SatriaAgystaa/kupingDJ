<template>
  <main class="relative overflow-hidden bg-black">
    <div class="container mx-auto px-12 py-14 relative">
      <!-- Section Header -->
      <h2 class="text-3xl md:text-4xl text-white font-glancyr-regular thacking-wide mb-12">KUPING DJ<br/>PICKS ALBUM</h2>
      
      <!-- PicksAlbums Grid -->
      <div class="grid lg:grid-cols-2 gap-12 items-start pb-0 mb-12">
        <PicksAlbumCard
          v-for="picksAlbum in displayedPicksAlbums"
          :key="picksAlbum.id"
          :title="picksAlbum.title"
          :coverImage="picksAlbum.coverImage"
          :date="picksAlbum.date"
          :price="picksAlbum.price"
          :tracks="picksAlbum.tracks"
        />
      </div>

      <!-- Load More Button -->
      <div class="text-center" v-if="hasMorePicksAlbums">
        <button 
          @click="loadMore"
          class="bg-gray-600 text-white px-8 py-3 rounded hover:bg-gray-700 transition-colors inline-flex items-center gap-3 font-semibold mb-6"
        >
          LOAD MORE PICKSALBUMS
          <img src="/icons/baseicons/down_line.svg" class="w-5 h-5" alt="Chevron Down" />
        </button>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import PicksAlbumCard from './PicksAlbumCard.vue'
import { picksAlbumsData } from '~/data/picksAlbums'

const picksAlbums = ref(picksAlbumsData)
const displayCount = ref(2)

const displayedPicksAlbums = computed(() => {
  return picksAlbums.value.slice(0, displayCount.value)
})

const hasMorePicksAlbums = computed(() => {
  return displayCount.value < picksAlbums.value.length
})

const loadMore = () => {
  displayCount.value = Math.min(displayCount.value + 2, picksAlbums.value.length)
}
</script>