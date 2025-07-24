<template>
  <section class="w-full">
    <div class="container mx-auto py-8 sm:py-10 lg:py-14 px-4 sm:px-6 md:px-10 lg:px-12 relative z-10">
      <div class="flex flex-col lg:flex-row lg:items-start gap-12">
        <!-- Left side - Title -->
        <div class="lg:w-1/4 lg:sticky lg:top-8">
          <div class="space-y-8">
            <h2 class="text-2xl lg:text-4xl font-glancyr-regular text-black leading-tight">
              THE MAGIC OF<br />KUPING DJ
            </h2>
          </div>
        </div>

        <!-- Right side - Magic cards -->
        <div class="lg:w-3/4 relative">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
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