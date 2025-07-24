<template>
  <footer class="bg-white text-black z-10 relative overflow-hidden">
    <div class="container mx-auto pt-8 sm:pt-10 lg:pt-10 pb-8 px-4 sm:px-6 md:px-10 lg:px-12 relative z-10 h-full">
      <div class="flex flex-col md:flex-row justify-between gap-8">
        <!-- Left section - Main heading -->
        <div class="space-y-6 md:w-1/2 z-10">
          <h1 class="text-3xl sm:text-4xl md:text-5xl mb-6 md:mb-8 font-glancyr-regular">
            <span class="block">EXPERIENCE THE RHYTHM</span>
            <span class="block mt-2 sm:mt-3">OF YOUR LIFE WITH</span>
            <span class="block mt-2 sm:mt-3">KUPING DJ!</span>
          </h1>
        </div>

        <!-- Aura background image -->
        <img
          src="/icons/footer/aura.svg"
          alt="Aura Background"
          class="absolute bottom-0 left-0 w-full max-w-[1000px] opacity-80 mix-blend-lighten pointer-events-none z-0"
        />

        <!-- Right section - Navigation -->
        <div class="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16 font-geist-regular z-10">
          <!-- About us links -->
          <div class="mb-6 sm:mb-8">
            <h2 class="text-xl sm:text-2xl mb-3 sm:mb-4 font-geist-medium">About us</h2>
            <div class="flex flex-col gap-1 sm:gap-2">
              <a href="#" class="hover:text-gray-600 transition text-sm sm:text-base">The Artist</a>
              <a href="#" class="hover:text-gray-600 transition text-sm sm:text-base">About Kuping DJ</a>
              <a href="#" class="hover:text-gray-600 transition text-sm sm:text-base">Contact Us</a>
              <a href="#" class="hover:text-gray-600 transition text-sm sm:text-base">FAQ</a>
              <a href="#" class="hover:text-gray-600 transition text-sm sm:text-base">Terms & Conditions</a>
            </div>
          </div>

          <!-- Marketplace links -->
          <div class="mb-6 sm:mb-8">
            <h2 class="text-xl sm:text-2xl mb-3 sm:mb-4 font-geist-medium">Marketplace</h2>
            <div class="flex flex-col gap-1 sm:gap-2">
              <a href="#" class="hover:text-gray-600 transition text-sm sm:text-base">Mixtape</a>
              <a href="#" class="hover:text-gray-600 transition text-sm sm:text-base">Album</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom section -->
      <div class="flex flex-col sm:flex-row items-center justify-between font-geist-regular z-10 mt-8 sm:mt-10 relative gap-4 sm:gap-0">
        <!-- Logo -->
        <div class="flex-1 flex justify-center sm:justify-start order-2 sm:order-1">
          <img src="/icons/baseicons/logo.svg" alt="Kuping DJ Logo" class="h-10 sm:h-12">
        </div>

        <!-- Copyright -->
        <div class="flex-shrink-0 text-black px-4 text-center text-sm sm:text-base order-1 sm:order-2">
          © 2025 Copyright by Kuping DJ. All rights reserved
        </div>

        <!-- Socials -->
        <div class="flex-1 flex justify-center sm:justify-end space-x-4 sm:space-x-6 order-3">
          <a href="#" class="inline-flex items-center justify-center">
            <img src="/icons/footer/facebook_line.svg" alt="Facebook" class="h-6 sm:h-8 w-auto">
          </a>
          <a href="#" class="inline-flex items-center justify-center">
            <img src="/icons/footer/instagram_line.svg" alt="Instagram" class="h-6 sm:h-8 w-auto">
          </a>
          <a href="#" class="inline-flex items-center justify-center">
            <img src="/icons/footer/linkedin_line.svg" alt="LinkedIn" class="h-6 sm:h-8 w-auto">
          </a>
          <a href="#" class="inline-flex items-center justify-center">
            <img src="/icons/footer/youtube_line.svg" alt="YouTube" class="h-6 sm:h-8 w-auto">
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
/* Optional: Add smooth transitions for responsive elements */
img {
  transition: all 0.3s ease;
}

a {
  transition: color 0.2s ease;
}
</style>