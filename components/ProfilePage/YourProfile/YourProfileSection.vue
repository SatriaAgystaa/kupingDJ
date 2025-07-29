<!-- ~/components/YourProfileSection.vue -->
<template>
  <div class="mx-auto py-6 xs:py-7 sm:py-8 md:py-10 lg:py-12 xl:py-12 2xl:py-12 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-10 xl:px-12 2xl:px-12">
    <h1 class="text-5xl font-glancyr-medium text-gray-900 mb-10">YOUR PROFILE</h1>
    
    <ProfileCard :profile="profile" />

    <!-- Combined Container with Border -->
    <div class="border border-gray-200 mb-6">
      <!-- Tabs and Search Section -->
      <div class="p-4 border-b border-gray-200">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <!-- Tabs Navigation -->
          <div class="w-full sm:w-auto">
            <nav class="flex space-x-0 divide-x divide-black border border-black font-glancyr-medium">
              <button
                v-for="tab in tabs"
                :key="tab.name"
                @click="activeTab = tab.name"
                class="px-6 py-3 text-sm items-center transition-colors"
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
          <div class="flex gap-4 w-full sm:w-[500px]">
            <!-- Search Bar -->
            <div class="relative flex-1">
              <input 
                type="text" 
                :placeholder="getSearchPlaceholder()"
                class="w-full pl-4 pr-10 py-3 border border-[#f7f7f7] bg-[#f7f7f7] text-sm font-geist-regular"
                v-model="searchQuery"
              >
              <div class="absolute right-3 top-3 text-black">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <!-- Filter Button -->
            <button class="flex items-center gap-2 px-4 py-3 border border-gray-300 text-sm hover:bg-gray-50 whitespace-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span class="font-geist-medium" >Filter</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Tab Content Section -->
      <div class="">
        <TransactionHistorySection 
          v-if="activeTab === 'transaction-history'" 
          :search-query="searchQuery"
        />
        <div v-else-if="activeTab === 'owned-mixtapes'" class="py-4">
          <p class="text-gray-500">Owned Mixtapes & Albums content will be displayed here</p>
        </div>
        <div v-else-if="activeTab === 'liked-mixtapes'" class="py-4">
          <p class="text-gray-500">Liked Mixtapes & Albums content will be displayed here</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { profileData } from '~/data/profile'
import ProfileCard from '../ProfileCard/ProfileCard.vue'
import TransactionHistorySection from '../TrasactionHistory/TransactionHistorySection.vue'

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