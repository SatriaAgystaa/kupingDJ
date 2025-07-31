<template>
  <div class="mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
    <h2 class="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-glancyr-medium tracking-wide mb-3 sm:mb-4 md:mb-6 lg:mb-8">
      YOUR PROFILE
    </h2>
    <ProfileCard :profile="profile" />

    <!-- Combined Container with Border -->
    <div class="border border-gray-200 mb-6">
      <!-- Tabs and Search Section -->
      <div class="p-4 border-b border-gray-200">
        <div class="flex flex-col md:flex-col lg:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
          <!-- Tabs Navigation -->
          <div class="w-full overflow-x-auto lg:w-[800px]">
            <nav class="flex w-full divide-x divide-black border border-black font-glancyr-medium min-w-max md:min-w-0">
              <button
                v-for="tab in tabs"
                :key="tab.name"
                @click="activeTab = tab.name"
                class="flex-1 px-2 xs:px-3 sm:px-4 py-2 sm:py-2 text-xs xs:text-sm sm:text-base text-center transition-colors whitespace-nowrap"
                :class="{
                  'bg-black text-white': activeTab === tab.name,
                  'text-black bg-white hover:bg-gray-50': activeTab !== tab.name
                }"
              >
                {{ tab.label }}
              </button>
            </nav>
          </div>
          <!-- Search and Filter Container -->
          <div class="flex flex-col md:flex-row lg:flex-row gap-3 sm:gap-4 w-full md:w-full lg:w-[450px]">
            <!-- Search Bar -->
            <div class="relative flex-1">
              <input 
                type="text" 
                :placeholder="getSearchPlaceholder()"
                class="w-full pl-3 sm:pl-4 md:pl-4 pr-9 sm:pr-10 py-2 sm:py-2.5 border border-[#f7f7f7] bg-[#f7f7f7] text-xs sm:text-sm md:text-sm font-geist-regular"
                v-model="searchQuery"
              >
              <div class="absolute right-2 sm:right-3 md:right-3 top-1/2 transform -translate-y-1/2 text-black">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <Filter />
          </div>
        </div>
      </div>

      <!-- Tab Content Section -->
      <div class="">
        <TransactionHistorySection 
          v-if="activeTab === 'transaction-history'" 
          :search-query="searchQuery"
        />
        <OwnedMixtapeAlbumSection 
          v-else-if="activeTab === 'owned-mixtapes'"
          :search-query="searchQuery"
        />
        <LikedMixtapeAlbumSection
          v-else-if="activeTab === 'liked-mixtapes'"
          :search-query="searchQuery"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { profileData } from '~/data/profile'
import ProfileCard from '../ProfileCard/ProfileCard.vue'
import TransactionHistorySection from '../TrasactionHistory/TransactionHistorySection.vue'
import OwnedMixtapeAlbumSection from '../OwnedMixtapeAlbum/OwnedMixtapeAlbumSection.vue'
import LikedMixtapeAlbumSection from '../LikedMixtapeAlbum/LikedMixtapeAlbumSection.vue'
import Filter from '../Filter/FilterSection.vue'

const profile = profileData
const searchQuery = ref('')

const tabs = [
  { name: 'transaction-history', label: 'TRANSACTION HISTORY' },
  { name: 'owned-mixtapes', label: 'OWNED MIXTAPE & ALBUM' },
  { name: 'liked-mixtapes', label: 'LIKED MIXTAPE & ALBUM' }
]

const activeTab = ref('transaction-history')

const getSearchPlaceholder = () => {
  switch (activeTab.value) {
    case 'transaction-history':
      return 'Search transactions...'
    case 'owned-mixtapes':
      return 'Search owned mixtapes...'
    case 'liked-mixtapes':
      return 'Search liked mixtapes...'
    default:
      return 'Search...'
  }
}
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>