<template>
  <div class="w-full bg-white">
    <div class="mx-auto py-4 xs:py-4 sm:py-6 md:py-6 lg:py-6 xl:py-6 2xl:py-6 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-10 xl:px-12 2xl:px-12 relative z-10 border-b border-gray-200">
      <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 w-full">
        <!-- Text Section -->
        <div class="flex-shrink-0 min-w-max">
          <h2 class="text-xl xs:text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-glancyr-medium whitespace-nowrap">
            DISCOVER OUR ALBUM
          </h2>
        </div>
        
        <!-- Combined Search and Filter Section -->
        <div class="w-full flex items-center gap-2 xs:gap-3 sm:gap-4">
          <!-- Search Bar Section -->
          <div class="flex-1 relative min-w-0">
            <input
              type="text"
              placeholder="Search albums..."
              class="w-full py-2 xs:py-2 sm:py-2 px-3 xs:px-4 sm:px-4 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A10501] focus:border-transparent font-geist-regular text-black text-xs xs:text-sm sm:text-sm md:text-md bg-[#fafafa]"
            >
            <button class="absolute right-3 xs:right-4 top-1/2 transform -translate-y-1/2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 text-gray-500 hover:text-[#A10501] transition-colors">
                <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19 19L14.65 14.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>

          <!-- Filter Button -->
          <div class="flex-shrink-0">
            <FilterSection/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FilterSection from '@/components/AlbumGenre/Filter/FilterSection.vue'
</script>

<style>
/* Custom text sizes */
.text-2\.5xl {
  font-size: 1.75rem;
  line-height: 2.25rem;
}
.text-3\.5xl {
  font-size: 2rem;
  line-height: 2.5rem;
}
</style>