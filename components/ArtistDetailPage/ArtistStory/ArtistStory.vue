<template>
  <section class="w-full bg-white">
    <div class="mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
      <div class="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10">
        <!-- Left side - Title -->
        <div class="lg:w-1/4 lg:sticky lg:top-8 xl:top-10">
          <div class="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
            <h2 class="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-glancyr-regular text-black leading-tight tracking-tight">
              ARTIST STORY
            </h2>
          </div>
        </div>

        <!-- Right side - Story content -->
        <div class="lg:w-3/4 relative">
          <div class="prose max-w-none font-glancyr-regular">
            <p class="text-black mb-4 sm:mb-5 md:mb-6 lg:mb-7 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
              {{ artist?.story?.intro }}
            </p>
            <p class="text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
              {{ artist?.story?.details }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { artists } from '~/data/artists'

// Get the first artist with a story
const artist = artists.find(a => a.story)
</script>

<style scoped>
/* Optional: Add smooth transitions for sticky effect */
.lg\:sticky {
  transition: top 0.2s ease;
}

/* Ensure proper spacing on very small devices */
@media (max-width: 360px) {
  .prose p {
    word-break: break-word;
    hyphens: auto;
  }
}
</style>