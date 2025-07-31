<template>
  <section class="w-full bg-white">
    <div class="mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
      <div class="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14">
        <!-- Left side - Title -->
        <div class="lg:w-1/4 lg:sticky lg:top-8 xl:top-10">
          <div class="space-y-4 sm:space-y-5 md:space-y-6">
            <h2 class="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-glancyr-regular text-black leading-tight tracking-tight">
              OUR STORY
            </h2>
          </div>
        </div>

        <!-- Right side - Story content -->
        <div class="lg:w-3/4 relative">
          <div class="prose max-w-none font-glancyr-regular space-y-6 sm:space-y-7 md:space-y-8">
            <p class="text-black text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl leading-relaxed sm:leading-loose">
              {{ story.intro }}
            </p>
            <p class="text-gray-500 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl leading-relaxed sm:leading-loose">
              {{ story.details }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { kupingStory } from '~/data/story';

const story = kupingStory;
</script>

<style>
/* Custom text sizes for perfect scaling */
.text-2\.5xl {
  font-size: 1.75rem;
  line-height: 2.25rem;
}
.text-3\.5xl {
  font-size: 2rem;
  line-height: 2.5rem;
}
</style>