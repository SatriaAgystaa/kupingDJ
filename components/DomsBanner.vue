<template>
  <div class="relative overflow-hidden bg-[#A10501] py-8 sm:py-10 lg:py-14 px-4 sm:px-6 md:px-10 lg:px-12">
    <!-- Background pattern -->
     <img
            src="/icons/footer/wavy_lines.svg"
            alt="Vinyl"
            class="absolute bottom-0 right-0 w-[1400px] pointer-events-none z-0"
        />

    <div class="container relative z-10 mx-auto h-full">
      <div class="flex flex-col items-stretch h-full gap-8 md:flex-row">
        <!-- Left Column - Text Content -->
        <div class="flex flex-col justify-between space-y-4 text-center text-white md:text-left md:py-4">
          <div>
            <h1 class="text-4xl font-glancyr-medium uppercase tracking-wide md:text-6xl">
              JOIN DOMS STATION,
            </h1>
            <h2 class="text-4xl font-glancyr-medium uppercase tracking-wide md:text-6xl">
              THE NEW ERA INDONESIAN
            </h2>
            <h3 class="text-4xl font-glancyr-medium uppercase tracking-wide md:text-6xl">
              DJ EDUCATION CULTURE!
            </h3>

            <div class="pt-8">
              <!-- Explore Button Section -->
              <div class="flex justify-center md:justify-start">
                <div class="flex group font-glancyr-light hover:scale-105 transition-all duration-300">
                  <!-- Red Button -->
                  <button 
                    class="bg-white text-black px-3 py-3 font-semibold tracking-wide text-xl 
                          transition-all duration-300"
                  >
                    DOMS STATION WEBSITE
                  </button>
                  <!-- Black Icon Section -->
                  <div 
                    class="bg-black px-4 py-3 flex items-center justify-center 
                          transition-all duration-300 group-hover:bg-gray-900"
                  >
                    <img 
                      src="/icons/baseicons/arrow_white.svg" 
                      alt="arrow" 
                      class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                    />
                  </div>
                </div>
              </div>

              <!-- App Download Section -->
              <div class="mt-12 flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:items-start md:justify-start">
                <!-- Google Play Button -->
                <a href="#" class="flex items-center" aria-label="Get it on Google Play">
                  <div class="flex flex-col items-start">
                    <img
                      src="/icons/footer/play_store_download.svg"
                      alt="Google Play"
                      class="h-14"
                    />
                  </div>
                </a>
                <!-- App Store Button -->
                <a href="#" class="flex items-center" aria-label="Download on the App Store">
                  <div class="flex flex-col items-start">
                    <img
                      src="/icons/footer/app_store_download.svg"
                      alt="App Store"
                      class="h-14"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- Right Column - Mobile Image -->
        <div class="flex-1 flex justify-end items-end md:relative">
          <!-- Mobile phone image with app screenshot -->
          <img
            src="/icons/footer/mobile.svg"
            alt="DOMS Station Mobile App"
            class="h-auto w-84 object-contain md:absolute top-[-54px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DomsStationBanner',
}
</script>

<style scoped>
/* No custom styles needed beyond Tailwind CSS */
</style>