<template>
  <div class="relative">
    <Searchbar />
    <BannerMixtape />
    <ProfileArtist />
    <Mixtape />
    <Mixtape />
    <Mixtape />
  </div>
</template>

<script setup>
import Searchbar from '~/components/MixtapePage/Searchbar/Searchbar.vue'
import BannerMixtape from '~/components/MixtapePage/BannerMixtapes/BannerMixtapes.vue'
import ProfileArtist from '~/components/MixtapePage/ProfileArtist/ProfileArtist.vue';
import Mixtape from '~/components/MixtapePage/Mixtape/MixtapeSection.vue';
</script>
