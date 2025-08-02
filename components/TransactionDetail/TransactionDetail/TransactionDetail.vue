<template>
  <div class="mx-auto py-6 xs:py-7 sm:py-8 md:py-10 lg:py-12 xl:py-12 2xl:py-12 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-10 xl:px-12 2xl:px-12">
    <!-- Page Title -->
    <div class="mb-8 sm:mb-10 md:mb-12">
      <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-4.5xl xl:text-5xl font-glancyr-medium">
        TRANSACTION DETAIL
      </h1>
    </div>
    
    <div class="flex flex-col lg:flex-row gap-4">
      <!-- Transaction Header & Content -->
      <div class="flex flex-col border border-gray-200">
        <!-- Transaction Header -->
        <div class="flex flex-col md:flex-row justify-between items-start px-3 sm:px-4 pt-4">
          <!-- Left Section: Title & ID -->
          <div class="flex items-start gap-2">
            <h2 class="text-lg sm:text-xl md:text-2xl font-glancyr-medium">
              TRANSACTION
            </h2>
            <span class="text-gray-400">•</span>
            <span class="text-sm sm:text-lg md:text-xl font-geist-medium text-[#A10501]">
              TR/083989-220807
            </span>
          </div>
          <!-- Right Section: Date -->
          <span class="text-xs sm:text-sm md:text-base font-geist-regular lg:text-lg text-gray-500">
            Transaction Date: 13/9/2025
          </span>
        </div>

        <!-- Content -->
        <div class="flex flex-col lg:flex-row gap-4 md:gap-4 lg:gap-4">
          <!-- Main Content -->
          <div class="flex-1 bg-white">
            <!-- Mixtapes Section -->
            <div class="p-3 sm:p-4">
              <div class="flex items-center mb-3 sm:mb-4">
                <h3 class="text-base sm:text-lg font-glancyr-medium pr-3 sm:pr-4">MIXTAPE</h3>
                <div class="flex-grow border-t border-gray-200"></div>
              </div>
              <div class="space-y-2">
                <MixtapeCard
                  v-for="mixtape in mixtapes"
                  :key="mixtape.id"
                  :mixtape="mixtape"
                />
              </div>
            </div>

            <!-- Albums Section -->
            <div class="p-3 sm:p-4">
              <div class="flex items-center mb-3 sm:mb-4">
                <h3 class="text-base sm:text-lg font-glancyr-medium pr-3 sm:pr-4">ALBUM</h3>
                <div class="flex-grow border-t border-gray-200"></div>
              </div>
              <div class="space-y-2">
                <AlbumCard
                  v-for="album in albums"
                  :key="album.id"
                  :album="album"
                />
                <!-- Partial Tracks -->
                <div v-for="album in albums" :key="'partial-'+album.id">
                  <PartialCard
                    v-for="(track, index) in album.tracks"
                    :key="'track-'+album.id+'-'+index"
                    :track="track"
                    :album="album"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Transaction Summary -->
          <div class="p-3 sm:p-4 w-full lg:w-96 relative">
            <div class="">
              <TransactionSummary
                total="Rp 0"
                email="angganaputra@gmail.com"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Transaction Status -->
      <TransactionStatus status="CREATED" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { mixtapes } from '~/data/mixtapes'
import { albumsData as albums } from '~/data/albums'
import AlbumCard from '../Album/AlbumCard.vue'
import MixtapeCard from '../Mixtape/MixtapeCard.vue'
import PartialCard from '../Partial/PartialCard.vue'
import TransactionSummary from '../Transaction/TransactionSummary.vue'
import TransactionStatus from '../TransactionStatus/TransactionStatus.vue'
</script>

<style scoped>
/* Sticky behavior for tablet and desktop */
@media (min-width: 1024px) {
  .lg\:sticky {
    position: sticky;
    top: 1rem;
    transition: all 0.3s ease;
  }
}
</style>
