<template>
  <div class="mixtape-card bg-[#f7f7f7] overflow-hidden transition-all duration-300 w-full">
    <!-- Cover and Vinyl -->
    <div class="pt-3 sm:pt-4 md:pt-5 px-3 sm:px-4 md:px-5">
      <MixtapeCover 
        :image="image" 
        :title="title" 
        :isFavorited="isFavorited"
        @play="$emit('play')"
        @toggle-favorite="$emit('toggle-favorite')"
      />
    </div>

    <!-- Meta Information -->
    <div class="pt-3 pb-4 sm:pt-4 sm:pb-5 md:pt-5 md:pb-6">
      <MixtapeMeta
        :artist="artist"
        :artistImage="artistImage"
        :title="title"
        :date="date"
        :bpm="bpm"
        :price="price"
        :likes="likes"
        :downloads="downloads"
        :rating="rating"
        @buy-now="$emit('buy-now')"
        @add-to-cart="$emit('add-to-cart')"
      />
    </div>
  </div>
</template>

<script setup>
import MixtapeCover from './MixtapeCover.vue'
import MixtapeMeta from './MixtapeMeta.vue'

const props = defineProps({
  artist: String,
  artistImage: String,
  title: String,
  price: String,
  image: String,
  likes: String,
  downloads: String,
  rating: String,
  bpm: String,
  date: String,
  isFavorited: Boolean
})

defineEmits(['play', 'toggle-favorite', 'buy-now', 'add-to-cart'])
</script>

<style scoped>
.mixtape-card {
  min-width: 0; /* Prevent text overflow */
  max-width: 100%;
  transition: transform 0.3s ease;
}

.mixtape-card:hover {
  transform: translateY(-4px);
}
</style>