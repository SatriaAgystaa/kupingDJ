<template>
  <div class="mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
    <!-- Page Title -->
    <div class="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
      <h1 class="text-2xl xs:text-2.5xl sm:text-3xl md:text-4xl lg:text-4.5xl xl:text-5xl font-glancyr-medium leading-tight">
        TRANSACTION DETAIL
      </h1>
    </div>
    
    <div class="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6">
      <!-- Transaction Header & Content -->
      <div class="flex flex-col border border-gray-200 flex-1">
        <!-- Transaction Header -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center px-3 xs:px-3.5 sm:px-4 pt-3 xs:pt-3.5 sm:pt-4 gap-2 md:gap-0">
          <!-- Left Section: Title & ID -->
          <div class="flex items-center gap-1.5 xs:gap-2 sm:gap-2.5">
            <h2 class="text-lg xs:text-xl sm:text-xl md:text-2xl font-glancyr-medium">
              TRANSACTION
            </h2>
            <span class="text-gray-400 text-sm xs:text-base sm:text-lg">•</span>
            <span class="text-xs xs:text-sm sm:text-base md:text-xl font-geist-medium text-[#A10501]">
              TR/083989-220807
            </span>
          </div>
          <!-- Right Section: Date -->
          <span class="text-xs xs:text-xs sm:text-sm md:text-base font-geist-regular text-gray-500">
            Transaction Date: 13/9/2025
          </span>
        </div>

        <!-- Content -->
        <div class="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <!-- Main Content -->
          <div class="flex-1 bg-white">
            <!-- Mixtapes Section -->
            <div class="p-3 xs:p-3.5 sm:p-4">
              <div class="flex items-center mb-2 xs:mb-3 sm:mb-4">
                <h3 class="text-base xs:text-lg sm:text-lg font-glancyr-medium pr-2 xs:pr-3 sm:pr-4">MIXTAPE</h3>
                <div class="flex-grow border-t border-gray-200"></div>
              </div>
              <div class="space-y-2 xs:space-y-3 sm:space-y-4">
                <MixtapeCard
                  v-for="mixtape in mixtapes"
                  :key="mixtape.id"
                  :mixtape="mixtape"
                />
              </div>
            </div>

            <!-- Albums Section -->
            <div class="p-3 xs:p-3.5 sm:p-4">
              <div class="flex items-center mb-2 xs:mb-3 sm:mb-4">
                <h3 class="text-base xs:text-lg sm:text-lg font-glancyr-medium pr-2 xs:pr-3 sm:pr-4">ALBUM</h3>
                <div class="flex-grow border-t border-gray-200"></div>
              </div>
              <div class="space-y-2 xs:space-y-3 sm:space-y-4">
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
          <div class="p-3 xs:p-3.5 sm:p-4 w-full lg:w-[28rem] xl:w-[32rem] sticky lg:top-4 z-0 lg:z-auto">
            <div class="lg:sticky lg:top-4">
              <TransactionSummary
                total="Rp 0"
                email="angganaputra@gmail.com"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Transaction Status - Now sticky -->
      <div class="sticky lg:top-24 z-0 lg:z-auto h-fit">
        <TransactionStatus status="CREATED" />
      </div>
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
/* Custom breakpoint for extra small devices */
@media (min-width: 420px) {
  .xs\:text-2\.5xl {
    font-size: 1.75rem;
    line-height: 2.25rem;
  }
  .xs\:p-3\.5 {
    padding: 0.875rem;
  }
  .xs\:pr-3\.5 {
    padding-right: 0.875rem;
  }
  .xs\:pt-3\.5 {
    padding-top: 0.875rem;
  }
  .xs\:px-3\.5 {
    padding-left: 0.875rem;
    padding-right: 0.875rem;
  }
}

/* Sticky behavior for tablet and desktop */
@media (min-width: 1024px) {
  .lg\:sticky {
    position: sticky;
    top: 6rem;
    transition: all 0.3s ease;
  }
}
</style>