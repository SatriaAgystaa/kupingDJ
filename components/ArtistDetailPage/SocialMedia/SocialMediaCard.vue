<template>
  <div 
    class="relative bg-white p-3 sm:p-5 md:p-5 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 w-full aspect-square flex flex-col overflow-hidden cursor-pointer"
    @click="redirectToUrl"
  >
    <!-- Background effect -->
    <div class="absolute inset-0 overflow-hidden z-0">
      <img
        src="/icons/genre/effect.svg"
        alt="Effect"
        class="absolute bottom-0 left-16 transform w-[240px] sm:w-[280px] md:w-[300px] h-[240px] sm:h-[280px] md:h-[300px] pointer-events-none"
      />
    </div>

    <!-- Content container -->
    <div class="relative z-10 flex flex-col h-full">
      <!-- Icon at top -->
      <div class="flex justify-start mb-4 sm:mb-5 md:mb-6">
        <img 
          :src="socialMedia.iconPath" 
          :alt="`${socialMedia.title} icon`" 
          class="w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-24 lg:h-24"
        />
      </div>

      <!-- Spacer -->
      <div class="flex-1"></div>

      <!-- Title and arrow -->
      <div class="flex items-center justify-between mt-4 sm:mt-5 md:mt-6">
        <h3 class="text-lg sm:text-lg md:text-xl lg:text-3xl text-black tracking-wide font-glancyr-regular">
          {{ socialMedia.title }}
        </h3>
        <div class="p-2 transition-transform duration-200 hover:scale-110">
          <img 
            src="/icons/baseicons/arrow_black.svg" 
            alt="Arrow icon" 
            class="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-6 lg:h-6"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  socialMedia: {
    type: Object,
    required: true,
    validator: (value) => {
      return ['id', 'title', 'iconPath', 'url'].every(key => key in value)
    }
  }
})

const redirectToUrl = () => {
  window.open(props.socialMedia.url, '_blank')
}
</script>