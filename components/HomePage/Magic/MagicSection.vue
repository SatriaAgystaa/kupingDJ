<template>
  <section class="w-full bg-white">
    <div class="container mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
      <div class="flex flex-col lg:flex-row lg:items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <!-- Left side - Title -->
        <div class="lg:w-1/3 xl:w-1/4 lg:sticky lg:top-8">
          <div class="space-y-4 sm:space-y-6 md:space-y-8">
            <h2 class="text-2xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-glancyr-regular text-black leading-tight tracking-tight">
              THE MAGIC OF<br />KUPING DJ
            </h2>
          </div>
        </div>

        <!-- Right side - Magic cards -->
        <div class="lg:w-2/3 xl:w-3/4 relative">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            <MagicCard
              v-for="magic in magics"
              :key="magic.id"
              :magic="magic"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import MagicCard from './MagicCard.vue'
import { magics } from '~/data/magics'
</script>