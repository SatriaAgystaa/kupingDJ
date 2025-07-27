<template>
  <section class="w-full bg-white">
    <div class="container mx-auto py-12 px-4 sm:px-6 md:px-8 lg:px-10">
      <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <!-- Title Section -->
        <div class="lg:w-1/4">
          <h2 class="text-xl xs:text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-glancyr-regular text-black flex flex-col lg:flex-col md:flex-row sm:flex-row gap-1">
            <span>SEND US</span>
            <span>A MESSAGE</span>
          </h2>
        </div>
        
        <!-- Content Section -->
        <div class="lg:w-3/4">
          <div class="w-full space-y-8">
            <div class="">
              <h4 class="text-2xl md:text-2xl font-glancyr-regular text-black mb-4">
                Your Full Name
              </h4>
              <input 
                type="text" 
                placeholder="Write your full name..."
                class="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A10501] focus:border-transparent font-geist-regular text-black"
              >
            </div>

            <div class="">
              <h4 class="text-2xl md:text-2xl font-glancyr-regular text-black mb-4">
                Email
              </h4>
              <input 
                type="email" 
                placeholder="Write your email..."
                class="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A10501] focus:border-transparent font-geist-regular text-black"
              >
            </div>

            <div class="">
              <h4 class="text-2xl md:text-2xl font-glancyr-regular text-black mb-4">
                Message
              </h4>
              <textarea 
                placeholder="Write your message..."
                rows="5"
                class="w-full p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A10501] focus:border-transparent font-geist-regular text-black"
              ></textarea>
            </div>

            <div class="flex justify-start">
              <div class="flex group font-glancyr-light hover:scale-105 transition-all duration-300">
                <!-- Red Button -->
                <button 
                  class="bg-[#A10501] text-white px-4 py-2 font-glancyr-medium tracking-wide text-sm sm:text-base md:text-lg
                         transition-all duration-300 group-hover:bg-[#8A0400]"
                >
                  SEND MESSAGE
                </button>

                <!-- Black Icon Section -->
                <div 
                  class="bg-black px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-3 flex items-center justify-center 
                         transition-all duration-300 group-hover:bg-gray-900"
                >
                  <img 
                    src="/icons/baseicons/arrow_white.svg" 
                    alt="arrow" 
                    class="w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1" 
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

<style scoped>
/* Tablet and mobile adjustments */
@media (max-width: 1023px) {
  .container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  
  .flex-col {
    flex-direction: row;
  }
  
  h2, h3 {
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
  }
  
  h2 {
    font-size: 1.75rem;
    line-height: 2rem;
    margin-bottom: 1.5rem;
  }
  
  h3 {
    font-size: 1.75rem;
    line-height: 2rem;
    margin-bottom: 1.5rem;
  }
  
  h4 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
}

/* Mobile specific adjustments */
@media (max-width: 767px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  h2, h3 {
    font-size: 1.5rem;
    flex-direction: row;
    gap: 0.25rem;
  }
  
  h4 {
    font-size: 1.25rem;
  }
}
</style>