<template>
  <div class="relative">
    <BannerArtist/>
      <ArtistStory/>
      <SocialMedia/>
      <BestSeller />
    <Mixtape/>
  </div>
</template>

<script setup>
import BannerArtist from '~/components/ArtistDetailPage/BannerArtist/BannerArtist.vue'
import ArtistStory from '~/components/ArtistDetailPage/ArtistStory/ArtistStory.vue'
import SocialMedia from '~/components/ArtistDetailPage/SocialMedia/SocialMediaSection.vue'
import BestSeller from '~/components/ArtistDetailPage/BestSeller/BestSellerSection.vue'
import Mixtape from '~/components/ArtistDetailPage/Mixtape/MixtapeSection.vue'

</script>
