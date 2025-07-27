<template>
  <section class="w-full bg-white">
    <div class="mx-auto py-6 xs:py-7 sm:py-8 md:py-10 lg:py-12 xl:py-12 2xl:py-12 px-4 xs:px-5 sm:px-6 md:px-10 lg:px-10 xl:px-12 2xl:px-12 relative z-10">
      <div class="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <!-- Title Section -->
        <div class="lg:w-1/4">
          <h2 class="text-2xl xs:text-2.5xl sm:text-3xl md:text-3.5xl lg:text-4xl font-glancyr-regular text-black flex flex-row lg:flex-col">
            <span>SEND US</span>
            <span>A MESSAGE</span>
          </h2>
        </div>
        
        <!-- Content Section -->
        <div class="lg:w-3/4">
          <div class="w-full space-y-6 sm:space-y-8 md:space-y-10">
            <div class="">
              <h4 class="text-xl xs:text-2xl sm:text-2.5xl md:text-3xl font-glancyr-regular text-black mb-3 sm:mb-4">
                Your Full Name
              </h4>
              <input 
                type="text" 
                placeholder="Write your full name..."
                class="w-full p-3 sm:p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A10501] focus:border-transparent font-geist-regular text-black text-sm xs:text-base sm:text-lg"
              >
            </div>

            <div class="">
              <h4 class="text-xl xs:text-2xl sm:text-2.5xl md:text-3xl font-glancyr-regular text-black mb-3 sm:mb-4">
                Email
              </h4>
              <input 
                type="email" 
                placeholder="Write your email..."
                class="w-full p-3 sm:p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A10501] focus:border-transparent font-geist-regular text-black text-sm xs:text-base sm:text-lg"
              >
            </div>

            <div class="">
              <h4 class="text-xl xs:text-2xl sm:text-2.5xl md:text-3xl font-glancyr-regular text-black mb-3 sm:mb-4">
                Message
              </h4>
              <textarea 
                placeholder="Write your message..."
                rows="5"
                class="w-full p-3 sm:p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A10501] focus:border-transparent font-geist-regular text-black text-sm xs:text-base sm:text-lg"
              ></textarea>
            </div>

            <div class="flex justify-start">
              <div class="flex group font-glancyr-light hover:scale-105 transition-all duration-300">
                <!-- Red Button -->
                <button 
                  class="bg-[#A10501] text-white px-5 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 font-glancyr-medium tracking-wide text-sm xs:text-base sm:text-lg md:text-xl
                         transition-all duration-300 group-hover:bg-[#8A0400]"
                >
                  SEND MESSAGE
                </button>

                <!-- Black Icon Section -->
                <div 
                  class="bg-black px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-3.5 flex items-center justify-center 
                         transition-all duration-300 group-hover:bg-gray-900"
                >
                  <img 
                    src="/icons/baseicons/arrow_white.svg" 
                    alt="arrow" 
                    class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No data import needed for this form component
</script>

<style>
/* Custom text sizes for perfect scaling */
.text-2\.5xl {
  font-size: 1.75rem;
  line-height: 2.25rem;
}
.text-3\.5xl {
  font-size: 2rem;
  line-height: 2.5rem;
}
</style>