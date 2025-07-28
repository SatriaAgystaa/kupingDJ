<template>
  <div class="w-full bg-white">
    <div class="mx-auto py-4 xs:py-6 sm:py-6 md:py-6 lg:py-6 xl:py-6 2xl:py-6 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-10 xl:px-12 2xl:px-12">
      <div class="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 md:gap-12 w-full">
        <!-- Text Section -->
        <div class="flex-shrink-0">
          <h2 class="text-xl xs:text-2xl sm:text-2.5xl md:text-3xl lg:text-3.5xl xl:text-3xl font-glancyr-medium whitespace-nowrap">
            DISCOVER OUR MIXTAPE
          </h2>
        </div>
        
        <!-- Search Bar Section -->
        <div class="w-full relative">
          <input
            type="text"
            placeholder="Search mixtapes..."
            class="w-full py-2 sm:py-2 px-2 sm:px-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#A10501] focus:border-transparent font-geist-regular text-black text-sm xs:text-base sm:text-base bg-[#fafafa]"
          >
          <button class="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 sm:w-6 sm:h-6 lg:w-4 lg:h-4">
              <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19 19L14.65 14.65" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MixtapeSearchBar',
  // You can add search functionality here if needed
}
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