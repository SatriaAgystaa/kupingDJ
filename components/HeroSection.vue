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
    <div class="container mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8 relative z-10">
      <div class="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center pb-0">
        <!-- Left Content -->
        <div class="space-y-8 sm:space-y-12 font-glancyr-light">
          <!-- Main Heading -->
          <div class="space-y-4 sm:space-y-6">
            <h1 class="text-4xl sm:text-5xl lg:text-7xl text-gray-900 leading-tight tracking-wider">
              <span class="block">DISCOVER THE</span>
              <span class="block mt-2 sm:mt-3">ULTIMATE</span>
              <span class="block mt-2 sm:mt-3">DJ MARKETPLACE</span>
              <span class="block mt-2 sm:mt-3">EXPERIENCE!</span>
            </h1>
          </div>

          <!-- Statistics -->
          <div class="grid grid-cols-3 pt-2 sm:pt-4 font-geist-medium">
            <div class="text-center lg:text-left">
              <div class="text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-wide font-glancyr-light">70</div>
              <div class="text-base sm:text-lg text-black tracking-wide">Best Artist</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-wide font-glancyr-light">2413</div>
              <div class="text-base sm:text-lg text-black tracking-wide">Mix Tapes</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-wide font-glancyr-light">4412</div>
              <div class="text-base sm:text-lg text-black tracking-wide">Albums</div>
            </div>
          </div>

          <!-- Scroll Down Indicator -->
          <div class="flex items-center gap-2 pt-2 sm:pt-4 font-glancyr-light">
            <span class="text-lg sm:text-xl text-black tracking-wider">
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

@media (max-width: 640px) {
  h1 {
    font-size: 2.5rem;
    line-height: 1.1;
    letter-spacing: 0.025em;
  }
}

/* Responsive adjustments for background images */
@media (max-width: 1024px) {
  img[alt="Aura Background"] {
    max-width: 600px;
  }
  img[alt="Line"] {
    max-width: 500px;
  }
  img[alt="Vinyl"] {
    max-width: 300px;
  }
}

@media (max-width: 768px) {
  img[alt="Aura Background"] {
    max-width: 400px;
  }
  img[alt="Line"] {
    max-width: 500px;
  }
  img[alt="Vinyl"] {
    max-width: 250px;
  }
}

@media (max-width: 480px) {
  img[alt="Aura Background"] {
    max-width: 300px;
  }
  img[alt="Line"] {
    max-width: 400px;
  }
  img[alt="Vinyl"] {
    max-width: 180px;
    bottom: -20px;
  }
}
</style>