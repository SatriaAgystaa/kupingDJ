<template>
  <div class="relative">
    <Searchbar />
    <Genre />
    <Album />
  </div>
</template>

<script setup>
import Searchbar from '~/components/AlbumPage/Searchbar/Searchbar.vue'
import Genre from '~/components/AlbumPage/Genre/GenreSection.vue'
import Album from '~/components/AlbumPage/Album/AlbumSection.vue'
</script>
