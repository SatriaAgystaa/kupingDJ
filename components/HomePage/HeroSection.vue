<template>
  <main class="relative overflow-hidden">
    <!-- Background Images -->
    <img
      src="/icons/heroicons/effect.svg"
      alt="Aura Background"
      class="absolute bottom-0 left-0 w-full max-w-[800px] opacity-80 mix-blend-lighten pointer-events-none z-0"
    />
    <img
      src="/icons/heroicons/line.svg"
      alt="Line"
      class="absolute bottom-0 right-0 w-full max-w-[1400px] pointer-events-none z-0"
    />
    <img
      src="/icons/heroicons/vinyl.svg"
      alt="Vinyl"
      class="absolute bottom-[-40px] right-0 w-full max-w-[650px] pointer-events-none z-0"
    />

    <!-- Main Content -->
    <div class="mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
      <div class="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center pb-0">
        <!-- Left Content -->
        <div class="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 font-glancyr-medium">
          <!-- Main Heading -->
          <div class="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
            <h1 class="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight">
              <span class="block">DISCOVER THE</span>
              <span class="block mt-1 sm:mt-2">ULTIMATE</span>
              <span class="block mt-1 sm:mt-2">DJ MARKETPLACE</span>
              <span class="block mt-1 sm:mt-2">EXPERIENCE!</span>
            </h1>
          </div>

          <!-- Statistics -->
          <div class="grid grid-cols-3 pt-1 sm:pt-2 md:pt-3 lg:pt-4 font-geist-medium">
            <div class="text-center lg:text-left">
              <div class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 tracking-wide font-glancyr-regular">70</div>
              <div class="text-sm sm:text-base md:text-lg text-black tracking-wide">Best Artist</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 tracking-wide font-glancyr-regular">2413</div>
              <div class="text-sm sm:text-base md:text-lg text-black tracking-wide">Mix Tapes</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 tracking-wide font-glancyr-regular">4412</div>
              <div class="text-sm sm:text-base md:text-lg text-black tracking-wide">Albums</div>
            </div>
          </div>

          <!-- Scroll Down Indicator -->
          <div class="flex items-center gap-2 pt-1 sm:pt-2 md:pt-3 lg:pt-4 font-glancyr-light">
            <span class="text-base sm:text-lg md:text-xl text-black tracking-wider">
              SCROLL DOWN
            </span>
            <img 
              src="/icons/baseicons/mouse_line.svg" 
              alt="Scroll Down Icon" 
              class="w-4 h-4 sm:w-5 sm:h-5"
            >
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
// No reactive logic needed
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.float-animation {
  animation: float 3s ease-in-out infinite;
}

/* Responsive adjustments for background images */
@media (max-width: 1536px) {
  img[alt="Aura Background"] {
    max-width: 700px;
  }
  img[alt="Line"] {
    max-width: 1200px;
  }
  img[alt="Vinyl"] {
    max-width: 550px;
  }
}

@media (max-width: 1280px) {
  img[alt="Aura Background"] {
    max-width: 600px;
  }
  img[alt="Line"] {
    max-width: 1000px;
  }
  img[alt="Vinyl"] {
    max-width: 450px;
  }
}

@media (max-width: 1024px) {
  img[alt="Aura Background"] {
    max-width: 500px;
  }
  img[alt="Line"] {
    max-width: 800px;
  }
  img[alt="Vinyl"] {
    max-width: 350px;
    bottom: -30px;
  }
}

@media (max-width: 768px) {
  img[alt="Aura Background"] {
    max-width: 400px;
  opacity: 0.7;
  }
  img[alt="Line"] {
    max-width: 600px;
  }
  img[alt="Vinyl"] {
    max-width: 280px;
    bottom: -20px;
  }
}

@media (max-width: 640px) {
  img[alt="Aura Background"] {
    max-width: 350px;
  }
  img[alt="Line"] {
    max-width: 500px;
  }
  img[alt="Vinyl"] {
    max-width: 220px;
    bottom: -15px;
  }
}

@media (max-width: 480px) {
  img[alt="Aura Background"] {
    max-width: 280px;
  }
  img[alt="Line"] {
    max-width: 400px;
  }
  img[alt="Vinyl"] {
    max-width: 180px;
    bottom: -10px;
  }
}

@media (max-width: 360px) {
  img[alt="Aura Background"] {
    max-width: 220px;
  }
  img[alt="Line"] {
    max-width: 320px;
  }
  img[alt="Vinyl"] {
    max-width: 150px;
    bottom: -5px;
  }
}
</style>