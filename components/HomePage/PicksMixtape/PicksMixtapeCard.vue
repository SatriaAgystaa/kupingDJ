<template>
  <div
    class="picksMixtape-card bg-black overflow-hidden w-full flex-shrink-0"
    :style="isCarousel ? { width: `calc(${100 / Math.min(visibleCards, 4)}% - 1rem)` } : {}"
  >
    <!-- Cover and Vinyl -->
    <PicksMixtapeCover :image="image" @play="handlePlay" />

    <!-- Meta Information -->
    <div class="py-4">
      <PicksMixtapeMeta
        :artist="artist"
        :artistImage="artistImage"
        :title="title"
        :date="date"
        :bpm="bpm"
        :price="price"
        :likes="likes"
        :downloads="downloads"
        :rating="rating"
        :vendors="vendors"
      />
    </div>
  </div>
</template>

<script setup>
import PicksMixtapeCover from './PicksMixtapeCover.vue'
import PicksMixtapeMeta from './PicksMixtapeMeta.vue'

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
  vendors: Array,
  visibleCards: {
    type: Number,
    default: 4
  },
  isCarousel: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['play'])

const handlePlay = () => {
  emit('play')
}
</script>

<style scoped>
.picksMixtape-card {
  transition: transform 0.3s ease;
  min-width: 280px; /* Minimum width for mobile */
}

.picksMixtape-card:hover {
  transform: translateY(-5px);
}

@media (max-width: 640px) {
  .picksMixtape-card {
    width: 100% !important; /* Full width on mobile */
  }
}
</style>