<template>
  <div class="relative">
    <Searchbar />
    <Album />
    <Genre />
  </div>
</template>

<script setup>
import Searchbar from '~/components/AlbumGenre/Searchbar/Searchbar.vue'
import Genre from '~/components/AlbumGenre/Genre/GenreSection.vue'
import Album from '~/components/AlbumGenre/Album/AlbumSection.vue'
</script>
