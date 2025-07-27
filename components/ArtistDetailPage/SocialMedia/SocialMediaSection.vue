<template>
  <section class="w-full bg-white">
    <div class="container mx-auto pb-6 xs:pb-7 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-14 2xl:pb-16 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-12 relative z-10">
      <div class="flex flex-col lg:flex-row lg:items-start gap-6 xs:gap-7 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16">
        <!-- Social media cards -->
        <div class="w-full relative">
          <div class="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-9 2xl:gap-10">
            <SocialMediaCard 
              v-for="socialMedia in socialMedias" 
              :key="socialMedia.id" 
              :socialMedia="socialMedia" 
              class="font-geist-regular"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SocialMediaCard from './SocialMediaCard.vue'
import { socialMedias } from '~/data/socialmedia'
</script>

<style scoped>
/* No additional styles needed */
</style>