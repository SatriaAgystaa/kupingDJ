<template>
  <div class="mb-6 sm:mb-8 last:mb-0 ">
    <div class="border border-gray-200 overflow-hidden">
      <button 
        @click="isOpen = !isOpen"
        class="flex items-center justify-between w-full text-left p-4 sm:p-4 md:p-4 focus:outline-none hover:bg-gray-50 transition-colors duration-200"
      >
        <h4 class="text-md xs:text-lg sm:text-xl md:text-xl lg:text-xl font-geist-medium text-black pr-4">
          {{ question }}
        </h4>
        <span class="flex-shrink-0 ml-2 transition-transform duration-200" :class="{'rotate-180': isOpen}">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 sm:w-6 sm:h-6">
            <path d="M6 9L12 15L18 9" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </button>

      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <div v-show="isOpen" class="border-t border-gray-200">
          <div class="p-4 sm:p-4 md:p-4 pt-2 sm:pt-3 md:pt-4">
            <p class="text-black leading-relaxed sm:leading-loose font-geist-regular text-sm xs:text-base sm:text-base md:text-base">
              {{ answer }}
            </p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  question: string;
  answer: string;
}>();

const isOpen = ref(false);
</script>