<template>
  <div class="artist-section bg-white text-gray-900">
    <div class="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-8 sm:pb-10 md:pb-12 lg:pb-14 relative">
      <!-- Header Section -->
      <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 sm:mb-10 md:mb-12 pt-8 sm:pt-10 md:pt-12">
        <h2 class="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-glancyr-medium tracking-wide mb-4 sm:mb-6 md:mb-8">
          THE ARTIST
        </h2>
        <div class="lg:max-w-md">
          <p class="text-black leading-relaxed font-geist-regular text-sm sm:text-[15px] md:text-base">
            Most the talented artists featured on Kuejing DJ. Discover their latest mixtapes and albums, and immerse yourself in their creative journeys.
          </p>
        </div>
      </div>

      <!-- Artists Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        <ArtistCard
          v-for="(artist, index) in paginatedArtists"
          :key="index"
          :artist="artist"
        />
      </div>

      <!-- Pagination -->
      <div class="flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-10 md:mt-12 gap-4 font-geist-regular">
        <div class="text-sm text-gray-600 font-geist-regular">
          Showing {{ startItem }}-{{ endItem }} of {{ artists.length }} items
        </div>
        <div class="flex gap-2">
          <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="p-2 border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous page"
          >
            <img src="/icons/baseicons/bulk_left.svg" alt="Previous" class="w-4 h-4" />
          </button>
          <button
            v-for="page in totalPages"
            :key="page"
            @click="goToPage(page)"
            :class="[
              'px-3 py-1 border',
              page === currentPage
                ? 'bg-[#A10501] text-white border-[#A10501]'
                : 'border-gray-300 hover:bg-gray-100'
            ]"
          >
            {{ page }}
          </button>
          <button
            @click="nextPage"
            :disabled="currentPage === totalPages"
            class="p-2 border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next page"
          >
            <img src="/icons/baseicons/bulk_right.svg" alt="Next" class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import ArtistCard from './ArtistCard.vue'
import { artists } from '~/data/artists'

const currentPage = ref(1)
const itemsPerPage = ref(6) // Default for mobile

// Update items per page based on screen size
const updateItemsPerPage = () => {
  if (window.innerWidth >= 1280) {
    itemsPerPage.value = 8 // Desktop
  } else if (window.innerWidth >= 768) {
    itemsPerPage.value = 9 // Tablet
  } else {
    itemsPerPage.value = 6 // Mobile
  }
}

// Initialize and add resize listener
onMounted(() => {
  updateItemsPerPage()
  window.addEventListener('resize', updateItemsPerPage)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateItemsPerPage)
})

const totalPages = computed(() => {
  return Math.ceil(artists.length / itemsPerPage.value)
})

const paginatedArtists = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return artists.slice(start, end)
})

const startItem = computed(() => (currentPage.value - 1) * itemsPerPage.value + 1)
const endItem = computed(() => Math.min(currentPage.value * itemsPerPage.value, artists.length))

// Function to scroll to top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    scrollToTop()
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    scrollToTop()
  }
}

const goToPage = (page) => {
  currentPage.value = page
  scrollToTop()
}
</script>

<style scoped>
@media (max-width: 400px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>