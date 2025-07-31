<template>
  <section class="w-full bg-white">
    <div class="mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
      <div class="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <!-- Title Section -->
        <div class="lg:w-1/4">
          <h2 class="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font-glancyr-regular text-black flex flex-row lg:flex-col">
            <span>MISSION &</span>
            <span>VISION</span>
          </h2>
        </div>
        
        <!-- Content Section -->
        <div class="lg:w-3/4">
          <h3 class="text-2xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-glancyr-medium text-black mb-8 sm:mb-10 md:mb-12 flex flex-col">
            <span>GET TO KNOW KUPING DJ</span>
            <span>MISSION & VISION</span>
          </h3>
          
          <div class="w-full space-y-6 sm:space-y-8 md:space-y-10">
            <div 
              v-for="(item, index) in visionMissionItems" 
              :key="item.id"
              class="flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-8 pb-6 sm:pb-8 md:pb-10 border-b border-gray-200"
            >
              <h4 class="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-glancyr-regular text-[#A10501] md:w-1/3">
                {{ item.title }}
              </h4>
              <p class="text-black leading-relaxed sm:leading-loose font-geist-regular text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl md:w-2/3">
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

<style>
/* Custom text sizes for perfect scaling */
.text-2\.5xl {
  font-size: 1.75rem;
  line-height: 2.25rem;
}
.text-2\.5xl {
  font-size: 1.75rem;
  line-height: 2.25rem;
}
.text-3\.5xl {
  font-size: 2rem;
  line-height: 2.5rem;
}
.text-4\.5xl {
  font-size: 2.5rem;
  line-height: 1;
}
</style>