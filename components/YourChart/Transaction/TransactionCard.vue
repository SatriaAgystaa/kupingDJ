<template>
  <div class="bg-white p-4 md:p-5 lg:p-6 shadow-sm border border-gray-200">
    <h3 class="text-lg md:text-xl lg:text-xl font-geist-semibold mb-3 md:mb-4 lg:mb-4">
      Transaction Review
    </h3>
    
    <div class="flex justify-between items-center mb-3 md:mb-4 lg:mb-4">
      <span class="text-sm md:text-[0.9375rem] lg:text-base text-gray-600">
        Total ({{ totalItems }} items)
      </span>
      <span class="text-lg md:text-xl lg:text-xl font-geist-semibold">
        Rp. {{ formatPrice(totalPrice) }}
      </span>
    </div>
    
    <div class="bg-[#EEEEEE] p-2 md:p-3 lg:p-3 mb-3 md:mb-4 lg:mb-4 font-geist-regular">
      <p class="text-black text-sm md:text-sm lg:text-sm leading-4 md:leading-5 lg:leading-5">
        We will send download link to<br>
        <span class="font-geist-medium text-[#A10501]">{{ email }}</span> when payment<br>
        complete
      </p>
    </div>
    
    <!-- Border line -->
    <div class="border-t border-gray-200 mb-2"></div>
    
    <div class="w-full pt-2 transform transition-all duration-500 opacity-100">
      <div class="flex w-full group font-glancyr-light hover:scale-[1.02] transition-all duration-300 active:scale-[0.98]">
        <button 
          class="bg-[#A10501] text-white py-2 md:py-3 lg:py-3 px-3 md:px-4 lg:px-4 
                 font-semibold tracking-wide text-xs md:text-sm lg:text-sm w-full 
                 transition-all duration-300 group-hover:bg-[#800000] text-center 
                 shadow-md hover:shadow-lg"
          @click="checkout"
        >
          <span class="inline-block group-active:translate-y-0.5 transition-transform">
            CHECK OUT
          </span>
        </button>
        <div 
          class="bg-black px-3 md:px-4 lg:px-4 py-2 md:py-3 lg:py-3 flex items-center justify-center 
                transition-all duration-300 group-hover:bg-gray-900 cursor-pointer"
          @click="checkout"
        >
          <img 
            src="/icons/baseicons/arrow_white.svg" 
            alt="arrow" 
            class="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-4 lg:h-4 transition-transform duration-300 
                  group-hover:translate-x-1 group-active:translate-x-2"
            loading="lazy"
            width="16"
            height="16"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  totalItems: number
  totalPrice: number
  email: string
}>()

const emit = defineEmits(['checkout'])

function checkout() {
  emit('checkout')
}

function formatPrice(price: number) {
  return new Intl.NumberFormat('id-ID').format(price)
}
</script>

<style scoped>
/* Pixel-perfect adjustments for extreme cases */
@media (max-width: 320px) {
  .text-xs {
    font-size: 0.6875rem; /* 11px */
  }
  .py-2 {
    padding-top: 0.4375rem; /* 7px */
    padding-bottom: 0.4375rem; /* 7px */
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .md\:text-\[0\.9375rem\] {
    font-size: 0.9375rem; /* 15px for perfect md scaling */
  }
}
</style>