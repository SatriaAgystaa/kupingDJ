<template>
  <div class="relative overflow-hidden bg-[#A10501]">
    <div class="pt-8 container mx-auto pt-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
      <!-- Background pattern - menggunakan vw untuk responsive -->
      <img
        src="/icons/footer/wavy_lines.svg"
        alt="Vinyl"
        class="absolute bottom-0 right-0 sm:right-[-4%] w-[120vw] min-w-[800px] max-w-[1400px] pointer-events-none z-0"
      />
  
      <div class="container relative z-10 mx-auto h-full">
        <div class="flex flex-col items-stretch h-full gap-8 md:flex-row">
          <!-- Left Column - Text Content -->
          <div class="flex flex-col justify-between space-y-4 text-center text-white md:text-left md:py-4 w-full md:w-1/2 lg:w-2/3">
            <div>
              <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-glancyr-medium uppercase tracking-wide leading-tight">
                JOIN DOMS STATION,
              </h1>
              <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-glancyr-medium uppercase tracking-wide leading-tight">
                THE NEW ERA INDONESIAN
              </h2>
              <h3 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-glancyr-medium uppercase tracking-wide leading-tight">
                DJ EDUCATION CULTURE!
              </h3>
  
              <div class="pt-6 sm:pt-8 md:pt-10 lg:pt-12">
                <!-- Explore Button Section -->
                <div class="flex justify-center md:justify-start">
                  <div class="flex group font-glancyr-light hover:scale-105 transition-all duration-300">
                    <!-- Red Button -->
                    <button 
                      class="bg-white text-black px-3 py-2 sm:px-3 sm:py-3 text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold tracking-wide 
                            transition-all duration-300"
                    >
                      DOMS STATION WEBSITE
                    </button>
                    <!-- Black Icon Section -->
                    <div 
                      class="bg-black px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-center 
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
                <div class="mt-8 sm:mt-10 md:mt-12 flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:items-start md:justify-start">
                  <!-- Google Play Button -->
                  <a href="#" class="flex items-center" aria-label="Get it on Google Play">
                    <div class="flex flex-col items-start">
                      <img
                        src="/icons/footer/play_store_download.svg"
                        alt="Google Play"
                        class="h-12 sm:h-14 md:h-16"
                      />
                    </div>
                  </a>
                  <!-- App Store Button -->
                  <a href="#" class="flex items-center" aria-label="Download on the App Store">
                    <div class="flex flex-col items-start">
                      <img
                        src="/icons/footer/app_store_download.svg"
                        alt="App Store"
                        class="h-12 sm:h-14 md:h-16"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Right Column - Mobile Image -->
          <div class="flex flex-1 justify-center md:justify-end items-end relative">
            <!-- Mobile phone image - menggunakan ukuran relatif -->
            <img
              src="/icons/footer/mobile.svg"
              alt="DOMS Station Mobile App"
              class="h-auto w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] xl:w-[420px] object-contain md:absolute md:bottom-[-50px] lg:bottom-[-58px] md:right-0"
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
/* No custom styles needed beyond Tailwind CSS */
</style>