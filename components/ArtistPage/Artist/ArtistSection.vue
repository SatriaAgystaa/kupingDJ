<template>
  <div class="artist-section bg-white text-gray-900">
    <div class="mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative">
      <!-- Header Section -->
      <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8 sm:mb-10 md:mb-12">
        <h2 class="text-3xl xs:text-3.5xl sm:text-4xl md:text-4.5xl lg:text-5xl xl:text-5.5xl font-glancyr-medium tracking-wide mb-4 sm:mb-6">
          THE ARTIST
        </h2>
        <div class="lg:max-w-md">
          <p class="text-black leading-relaxed sm:leading-loose font-geist-regular text-sm xs:text-base sm:text-lg md:text-base">
            Most the talented artists featured on Kuejing DJ. Discover their latest mixtapes and albums, and immerse yourself in their creative journeys.
          </p>
        </div>
      </div>

      <!-- Artists Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        <ArtistCard
          v-for="(artist, index) in paginatedArtists"
          :key="index"
          :artist="artist"
        />
      </div>

      <!-- Pagination -->
      <div class="flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-10 md:mt-12 gap-4 font-geist-regular">
        <div class="text-sm xs:text-base text-gray-600">
          Showing {{ startItem }}-{{ endItem }} of {{ artists.length }} items
        </div>
        <div class="flex gap-2">
          <button
            @click="prevPage"
            :disabled="currentPage === 1"
            class="p-2 border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            aria-label="Previous page"
          >
            <img src="/icons/baseicons/bulk_left.svg" alt="Previous" class="w-4 h-4 xs:w-5 xs:h-5" />
          </button>
          <button
            v-for="page in visiblePages"
            :key="page"
            @click="goToPage(page)"
            :class="[
              'px-3 py-1 border transition-colors duration-200',
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
            class="p-2 border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            aria-label="Next page"
          >
            <img src="/icons/baseicons/bulk_right.svg" alt="Next" class="w-4 h-4 xs:w-5 xs:h-5" />
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
const maxVisiblePages = 5 // Maximum number of visible page buttons

// Update items per page based on screen size
const updateItemsPerPage = () => {
  if (window.innerWidth >= 1280) {
    itemsPerPage.value = 8 // Desktop
  } else if (window.innerWidth >= 768) {
    itemsPerPage.value = 9 // Tablet
  } else {
    itemsPerPage.value = 6 // Mobile
  }
  // Reset to first page when items per page changes
  currentPage.value = 1
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

// Calculate visible pages for pagination
const visiblePages = computed(() => {
  const pages = []
  let start = Math.max(1, currentPage.value - Math.floor(maxVisiblePages / 2))
  let end = Math.min(totalPages.value, start + maxVisiblePages - 1)

  if (end - start + 1 < maxVisiblePages) {
    start = Math.max(1, end - maxVisiblePages + 1)
  }

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return pages
})

// Smooth scroll to top function
const scrollToTop = () => {
  const element = document.querySelector('.artist-section')
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
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
  if (page !== currentPage.value) {
    currentPage.value = page
    scrollToTop()
  }
}
</script>

<style>
/* Custom text sizes for perfect scaling */
.text-3\.5xl {
  font-size: 2rem;
  line-height: 2.25rem;
}
.text-4\.5xl {
  font-size: 2.5rem;
  line-height: 2.75rem;
}
.text-5\.5xl {
  font-size: 3.25rem;
  line-height: 1;
}
</style>