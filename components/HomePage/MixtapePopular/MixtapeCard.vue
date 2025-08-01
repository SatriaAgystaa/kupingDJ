<template>
  <div class="mixtape-card bg-[#f7f7f7] overflow-hidden transition-all duration-300 w-full">
    <!-- Cover and Vinyl -->
    <div class="">
      <MixtapeCover 
        :image="image" 
        :title="title" 
        :isFavorited="isFavorited"
        :isPlaying="isPlaying"
        :mixtape="mixtapeData"
        @play="$emit('play', mixtapeData)"
        @pause="$emit('pause')"
        @toggle-favorite="$emit('toggle-favorite', id)"
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
import { ref, computed } from 'vue'
import MixtapeCover from './MixtapeCover.vue'
import MixtapeMeta from './MixtapeMeta.vue'

const props = defineProps({
  id: Number,
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
  music: String,
  isFavorited: Boolean,
  isPlaying: Boolean
})

const emit = defineEmits(['play', 'pause', 'toggle-favorite', 'buy-now', 'add-to-cart'])

const mixtapeData = computed(() => ({
  id: props.id,
  artist: props.artist,
  artistImage: props.artistImage,
  title: props.title,
  price: props.price,
  image: props.image,
  likes: props.likes,
  downloads: props.downloads,
  rating: props.rating,
  bpm: props.bpm,
  date: props.date,
  music: props.music,
  isFavorited: props.isFavorited
}))
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