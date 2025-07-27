<template>
  <section class="w-full bg-white">
    <div class="container mx-auto py-6 xs:py-7 sm:py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-16 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-10 xl:px-12 2xl:px-12 relative z-10">
      <div class="flex flex-col lg:flex-row lg:items-start gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14">
        <!-- Left side - Title -->
        <div class="lg:w-1/4 lg:sticky lg:top-6 md:top-8 lg:top-10 xl:top-12 2xl:top-14">
          <div class="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8 2xl:space-y-9">
            <h2 class="text-xl xs:text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-glancyr-regular text-black leading-snug xs:leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight tracking-tight">
              ARTIST STORY
            </h2>
          </div>
        </div>

        <!-- Right side - Story content -->
        <div class="lg:w-3/4 relative">
          <div class="prose max-w-none font-glancyr-regular">
            <p class="text-black mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl">
              {{ artist?.story?.intro }}
            </p>
            <p class="text-gray-500 text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl">
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
