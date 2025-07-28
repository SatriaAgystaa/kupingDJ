<template>
  <footer class="bg-white text-black relative overflow-hidden">
    <!-- Aura Background - Responsive but contained within footer -->
    <div class="absolute inset-0 h-full w-full overflow-hidden z-0">
      <img
        src="/icons/footer/aura.svg"
        alt="Aura Background"
        class="absolute bottom-0 left-0 h-full w-auto max-w-none opacity-80 mix-blend-lighten pointer-events-none
               object-contain object-left-bottom
               xs:w-[180px] sm:w-[220px] 
               md:w-[1100px] md:left-0
               lg:w-[1100px] 
               xl:w-[1100px] 
               2xl:w-[1100px]"
      />
    </div>

    <div class="mx-auto py-6 xs:py-7 sm:py-8 md:py-10 lg:py-12 xl:py-12 2xl:py-12 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-10 xl:px-12 2xl:px-12  relative z-10">
      <div class="flex flex-col md:flex-row justify-between gap-8">
        <!-- Left section - Main heading -->
        <div class="space-y-6 md:w-1/2 z-10">
          <h1 class="text-2xl xs:text-2.5xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-5 md:mb-6 lg:mb-8 font-glancyr-regular">
            <span class="block">EXPERIENCE THE RHYTHM</span>
            <span class="block mt-1 sm:mt-2 md:mt-2 lg:mt-3">OF YOUR LIFE WITH</span>
            <span class="block mt-1 sm:mt-2 md:mt-2 lg:mt-3">KUPING DJ!</span>
          </h1>
        </div>  

        <!-- Right section - Navigation -->
        <div class="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 font-geist-regular z-10">
          <!-- About us links -->
          <div class="mb-4 sm:mb-5 md:mb-6 lg:mb-8">
            <h2 class="text-lg sm:text-xl md:text-xl lg:text-2xl mb-2 sm:mb-3 md:mb-3 lg:mb-4 font-geist-medium">About us</h2>
            <div class="flex flex-col gap-1 sm:gap-1.5 md:gap-2">
              <a href="#" class="hover:text-gray-600 transition text-xs xs:text-sm sm:text-sm md:text-base">The Artist</a>
              <a href="#" class="hover:text-gray-600 transition text-xs xs:text-sm sm:text-sm md:text-base">About Kuping DJ</a>
              <a href="#" class="hover:text-gray-600 transition text-xs xs:text-sm sm:text-sm md:text-base">Contact Us</a>
              <a href="#" class="hover:text-gray-600 transition text-xs xs:text-sm sm:text-sm md:text-base">FAQ</a>
              <a href="#" class="hover:text-gray-600 transition text-xs xs:text-sm sm:text-sm md:text-base">Terms & Conditions</a>
            </div>
          </div>

          <!-- Marketplace links -->
          <div class="mb-4 sm:mb-5 md:mb-6 lg:mb-8">
            <h2 class="text-lg sm:text-xl md:text-xl lg:text-2xl mb-2 sm:mb-3 md:mb-3 lg:mb-4 font-geist-medium">Marketplace</h2>
            <div class="flex flex-col gap-1 sm:gap-1.5 md:gap-2">
              <a href="#" class="hover:text-gray-600 transition text-xs xs:text-sm sm:text-sm md:text-base">Mixtape</a>
              <a href="#" class="hover:text-gray-600 transition text-xs xs:text-sm sm:text-sm md:text-base">Album</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom section -->
      <div class="flex flex-col sm:flex-row items-center justify-between font-geist-regular z-10 mt-6 sm:mt-8 md:mt-10 lg:mt-12 relative gap-3 sm:gap-4 md:gap-0">
        <!-- Logo -->
        <div class="flex-1 flex justify-center sm:justify-start order-2 sm:order-1">
          <img src="/icons/baseicons/logo.svg" alt="Kuping DJ Logo" 
               class="h-8 xs:h-9 sm:h-10 md:h-11 lg:h-12 transition-all duration-200">
        </div>

        <!-- Copyright -->
        <div class="flex-shrink-0 text-black px-3 sm:px-4 text-center text-xs xs:text-sm sm:text-sm md:text-base order-1 sm:order-2">
          © 2025 Copyright by Kuping DJ. All rights reserved
        </div>

        <!-- Socials -->
        <div class="flex-1 flex justify-center sm:justify-end space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 order-3">
          <a href="#" class="inline-flex items-center justify-center hover:opacity-80 transition-opacity">
            <img src="/icons/footer/facebook_line.svg" alt="Facebook" 
                 class="h-5 xs:h-6 sm:h-6 md:h-7 lg:h-8 w-auto">
          </a>
          <a href="#" class="inline-flex items-center justify-center hover:opacity-80 transition-opacity">
            <img src="/icons/footer/instagram_line.svg" alt="Instagram" 
                 class="h-5 xs:h-6 sm:h-6 md:h-7 lg:h-8 w-auto">
          </a>
          <a href="#" class="inline-flex items-center justify-center hover:opacity-80 transition-opacity">
            <img src="/icons/footer/linkedin_line.svg" alt="LinkedIn" 
                 class="h-5 xs:h-6 sm:h-6 md:h-7 lg:h-8 w-auto">
          </a>
          <a href="#" class="inline-flex items-center justify-center hover:opacity-80 transition-opacity">
            <img src="/icons/footer/youtube_line.svg" alt="YouTube" 
                 class="h-5 xs:h-6 sm:h-6 md:h-7 lg:h-8 w-auto">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
/* Smooth transitions for all interactive elements */
img {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

a {
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom text sizes */
.text-2\.5xl {
  font-size: 1.75rem;
  line-height: 2.25rem;
}

/* Ensure proper stacking */
.z-10 {
  position: relative;
  z-index: 10;
}

/* Contain aura graphic */
footer {
  position: relative;
  overflow: hidden;
}
</style>