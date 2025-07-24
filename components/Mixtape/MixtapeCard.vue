<template>
  <div
    class="mixtape-card bg-white rounded-lg overflow-hidden transition-all duration-300"
    :class="{ 'mx-0': isCarousel }"
    :style="isCarousel ? { width: `calc(${100 / Math.min(visibleCards, 4)}% - 2rem)` } : {}"
  >
    <!-- Cover and Vinyl -->
    <div class="pt-4 sm:pt-5">
      <MixtapeCover 
        :image="image" 
        :title="title" 
        :isFavorited="isFavorited"
        @play="$emit('play')"
        @toggle-favorite="$emit('toggle-favorite')"
      />
    </div>

    <!-- Meta Information -->
    <div class="pt-4 pb-4 sm:pb-5">
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
  isFavorited: Boolean,
  visibleCards: {
    type: Number,
    default: 4
  },
  isCarousel: {
    type: Boolean,
    default: false
  }
})

defineEmits(['play', 'toggle-favorite', 'buy-now', 'add-to-cart'])
</script>

<style scoped>
.mixtape-card {
  min-width: 0;
  max-width: 100%;
  width: 100%;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.mixtape-card:hover {
  transform: translateY(-4px);
}

/* Desktop max-width */
@media (min-width: 1024px) {
  .mixtape-card {
    max-width: 320px;
  }
}

/* Mobile adjustments */
@media (max-width: 767px) {
  .mixtape-card {
    padding: 0.5rem;
  }
  
  .pt-4 {
    padding-top: 0.75rem;
  }
  
  .pb-4 {
    padding-bottom: 0.75rem;
  }
}

/* Small mobile adjustments */
@media (max-width: 480px) {
  .mixtape-card {
    padding: 0.25rem;
  }
  
  .pt-4 {
    padding-top: 0.5rem;
  }
  
  .pb-4 {
    padding-bottom: 0.5rem;
  }
}
</style>