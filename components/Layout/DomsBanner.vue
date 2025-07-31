<template>
  <div class="relative overflow-hidden bg-[#A10501]">
    <div class="mx-auto pt-8 sm:pt-10 md:pt-12 lg:pt-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
      <!-- Background pattern - responsive positioning -->
      <img
        src="/icons/footer/wavy_lines.svg"
        alt="Vinyl"
        class="absolute bottom-0 right-0 w-[120vw] min-w-[800px] max-w-[1400px] pointer-events-none z-0
               sm:right-[-4%]"
      />
  
      <div class="relative z-10 h-full">
        <div class="flex flex-col items-stretch h-full gap-6 sm:gap-8 md:flex-row">
          <!-- Left Column - Text Content -->
          <div class="flex flex-col justify-between space-y-4 sm:space-y-6 text-center text-white md:text-left md:py-4 w-full md:w-1/2 lg:w-2/3 md:mb-10">
            <div>
              <h1 class="text-2xl xs:text-2.5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-glancyr-medium uppercase tracking-wide leading-tight">
                JOIN DOMS STATION,
              </h1>
              <h2 class="text-2xl xs:text-2.5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-glancyr-medium uppercase tracking-wide leading-tight mt-2 sm:mt-3">
                THE NEW ERA INDONESIAN
              </h2>
              <h3 class="text-2xl xs:text-2.5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-glancyr-medium uppercase tracking-wide leading-tight mt-2 sm:mt-3">
                DJ EDUCATION CULTURE!
              </h3>
  
              <div class="pt-4 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-12">
                <!-- Explore Button Section -->
                <div class="flex justify-center md:justify-start">
                  <div class="flex group font-glancyr-light hover:scale-105 transition-all duration-300">
                    <!-- Red Button -->
                    <button 
                      class="bg-white text-black px-3 py-1.5 sm:px-3 sm:py-2 md:py-2.5 lg:py-3 
                            text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl 
                            font-semibold tracking-wide transition-all duration-300"
                    >
                      DOMS STATION WEBSITE
                    </button>
                    <!-- Black Icon Section -->
                    <div 
                      class="bg-black px-2 sm:px-3 py-1.5 sm:py-2 md:py-2.5 lg:py-3 flex items-center justify-center 
                            transition-all duration-300 group-hover:bg-gray-900"
                    >
                      <img 
                        src="/icons/baseicons/arrow_white.svg" 
                        alt="arrow" 
                        class="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" 
                      />
                    </div>
                  </div>
                </div>
  
                <!-- App Download Section -->
                <div class="mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex flex-col items-center space-y-3 sm:space-y-0 sm:flex-row sm:space-x-3 md:space-x-4 md:items-start md:justify-start">
                  <!-- Google Play Button -->
                  <a href="#" class="flex items-center" aria-label="Get it on Google Play">
                    <img
                      src="/icons/footer/play_store_download.svg"
                      alt="Google Play"
                      class="h-10 xs:h-11 sm:h-12 md:h-14 lg:h-16 transition-transform hover:scale-[1.02]"
                    />
                  </a>
                  <!-- App Store Button -->
                  <a href="#" class="flex items-center" aria-label="Download on the App Store">
                    <img
                      src="/icons/footer/app_store_download.svg"
                      alt="App Store"
                      class="h-10 xs:h-11 sm:h-12 md:h-14 lg:h-16 transition-transform hover:scale-[1.02]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Right Column - Mobile Image -->
          <div class="flex flex-1 justify-center md:justify-end items-end relative mt-4 sm:mt-6 md:mt-0">
            <!-- Mobile phone image - responsive sizing -->
            <img
              src="/icons/footer/mobile.svg"
              alt="DOMS Station Mobile App"
              class="h-auto w-[240px] xs:w-[260px] sm:w-[300px] md:w-[360px] lg:w-[400px] xl:w-[420px] 
                     object-contain md:absolute md:bottom-[-40px] lg:bottom-[-50px] xl:bottom-[-58px] md:right-0
                     transition-transform hover:scale-[1.01]"
            />
          </div>
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
/* Custom text sizes for perfect scaling */
.text-2\.5xl {
  font-size: 1.75rem;
  line-height: 2.25rem;
}

/* Smooth transitions */
img {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

button, a {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>