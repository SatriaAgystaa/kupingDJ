<template>
  <section class="w-full bg-white">
    <div class="mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
      <div class="flex flex-col lg:flex-row lg:items-start gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12">
        <!-- Social media cards container -->
        <div class="w-full relative">
          <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
            <SocialMediaCard 
              v-for="socialMedia in socialMedias" 
              :key="socialMedia.id" 
              :socialMedia="socialMedia" 
              class="font-geist-regular w-full h-full"
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
/* Optional: Ensure perfect card sizing on all devices */
.grid {
  display: grid;
  grid-auto-rows: 1fr; /* Makes all cards equal height */
}

/* Mobile-first adjustments */
@media (max-width: 639px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* Tablet adjustments */
@media (min-width: 640px) and (max-width: 767px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* Small desktop adjustments */
@media (min-width: 768px) and (max-width: 1023px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

/* Large desktop adjustments */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>