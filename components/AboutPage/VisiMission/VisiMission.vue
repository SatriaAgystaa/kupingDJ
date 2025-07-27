<template>
  <section class="w-full bg-white">
    <div class="container mx-auto py-12 px-4 sm:px-6 md:px-8 lg:px-10">
      <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <!-- Title Section -->
        <div class="lg:w-1/4">
          <h2 class="text-xl xs:text-2xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-3xl font-glancyr-regular text-black flex flex-col lg:flex-col md:flex-row sm:flex-row gap-1">
            <span>MISSION &</span>
            <span>VISION</span>
          </h2>
        </div>
        
        <!-- Content Section -->
        <div class="lg:w-3/4">
          <h3 class="text-3xl md:text-4xl font-glancyr-medium text-black mb-12 flex flex-col lg:flex-col md:flex-row sm:flex-row gap-1">
            <span>GET TO KNOW KUPING DJ</span>
            <span>MISSION & VISION</span>
          </h3>
          
          <div class="w-full">
            <div 
              v-for="(item, index) in visionMissionItems" 
              :key="item.id"
              class="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 pb-6 border-b border-gray-200 mb-6"
            >
              <h4 class="text-2xl md:text-3xl font-glancyr-regular text-[#A10501] md:w-1/3">
                {{ item.title }}
              </h4>
              <p class="text-black leading-relaxed font-geist-regular text-base md:text-lg md:w-2/3">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { visionMissionData } from '~/data/visimission'

const visionMissionItems = visionMissionData
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