<template>
  <div class="relative">
    <section><HeroSection /></section>
    <BannerHero />
    <section><ArtistSection /></section>
    <section><MixtapeSection /></section>
    <MixtapePopular />
    <section><AlbumSection /></section>
    <GenreSection />
    <PicksSection />
    <PicksMixtapeSection />
    <PicksAlbumSection />
    <FeatureSection />
    <MagicSection />
    <section><TestimonialSection /></section>
  </div>
</template>

<script setup>
import HeroSection from '~/components/HomePage/HeroSection.vue'
import BannerHero from '~/components/HomePage/BannerHero.vue'
import ArtistSection from '~/components/HomePage/Artist/ArtistSection.vue'
import MixtapeSection from '~/components/HomePage/Mixtape/MixtapeSection.vue'
import MixtapePopular from '~/components/HomePage/MixtapePopular/MixtapePopular.vue'
import AlbumSection from '~/components/HomePage/Album/AlbumSection.vue'
import GenreSection from '~/components/HomePage/Genre/GenreSection.vue'
import PicksSection from '~/components/HomePage/Picks/PicksSection.vue'
import PicksMixtapeSection from '~/components/HomePage/PicksMixtape/PicksMixtapeSection.vue'
import PicksAlbumSection from '~/components/HomePage/PicksAlbum/PicksAlbumSection.vue'
import FeatureSection from '~/components/HomePage/Features/FeatureSection.vue'
import MagicSection from '~/components/HomePage/Magic/MagicSection.vue'
import TestimonialSection from '~/components/HomePage/Testimonials/TestimonialSection.vue'
</script>
