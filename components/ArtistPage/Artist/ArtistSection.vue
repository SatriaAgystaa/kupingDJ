<template>
  <div class="artist-section bg-white text-black">
    <div class="mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative">
      <!-- Header Section -->
      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 sm:mb-10 md:mb-12">
        <h2 class="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-glancyr-medium tracking-wide mb-4 sm:mb-6 lg:mb-0">
          THE ARTIST
        </h2>
        <div class="lg:max-w-md">
          <p class="text-black leading-relaxed sm:leading-loose font-geist-regular text-xs xs:text-sm sm:text-md md:text-base">
            Most the talented artists featured on Kuping DJ. Discover their latest mixtapes and albums, and immerse yourself in their creative journeys.
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
            class="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
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
            class="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
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
const itemsPerPage = ref(getInitialItemsPerPage())
const maxVisiblePages = 5 // Maximum number of visible page buttons

// Get initial items per page based on screen size
function getInitialItemsPerPage() {
  if (typeof window === 'undefined') return 6 // Default for SSR
  
  if (window.innerWidth >= 1280) {
    return 8 // Desktop
  } else if (window.innerWidth >= 768) {
    return 9 // Tablet
  } else {
    return 6 // Mobile
  }
}

// Update items per page based on screen size without resetting current page
const updateItemsPerPage = () => {
  const newItemsPerPage = getInitialItemsPerPage()
  
  // Only update if the value has actually changed
  if (newItemsPerPage !== itemsPerPage.value) {
    // Calculate what the current page should be after the change
    const firstItemIndex = (currentPage.value - 1) * itemsPerPage.value
    const newCurrentPage = Math.ceil((firstItemIndex + 1) / newItemsPerPage)
    
    itemsPerPage.value = newItemsPerPage
    currentPage.value = Math.min(newCurrentPage, Math.ceil(artists.length / newItemsPerPage))
  }
}

// Initialize and add resize listener with debounce
let resizeTimeout
const handleResize = () => {
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(updateItemsPerPage, 200)
}

onMounted(() => {
  updateItemsPerPage()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  clearTimeout(resizeTimeout)
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
  if (totalPages.value <= 1) return []
  
  const pages = []
  const halfVisible = Math.floor(maxVisiblePages / 2)
  let start = Math.max(1, currentPage.value - halfVisible)
  let end = Math.min(totalPages.value, start + maxVisiblePages - 1)

  // Adjust if we're at the end
  if (end - start + 1 < maxVisiblePages) {
    start = Math.max(1, end - maxVisiblePages + 1)
  }

  // Don't show more pages than available
  end = Math.min(end, totalPages.value)

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
  if (page >= 1 && page <= totalPages.value && page !== currentPage.value) {
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