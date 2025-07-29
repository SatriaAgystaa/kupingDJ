<!-- ~/components/TransactionCard.vue -->
<template>
  <div class="bg-white shadow-sm border border-gray-200 p-4 mb-4">
    <!-- Transaction Header -->
    <div class="flex justify-between items-center mb-4">
      <div class="flex flex-col">
        <div class="flex flex-row gap-2">
            <h3 class="text-lg font-glancyr-semibold text-black">TRANSACTION</h3>
            <span class="text-gray-500"> • </span>
            <h3 class="text-md font-geist-medium text-gray-500">{{ transaction.id }}</h3>
        </div>
        <p class="text-sm font-geist-regular text-gray-500">Transaction Date: {{ transaction.date }}</p>
      </div>
      <div class="flex items-center gap-2">
        <span 
          class="px-4 py-2 text-md font-glancyr-medium"
          :class="{
            'bg-green-100 text-green-800': transaction.status === 'SUCCESS',
            'bg-yellow-100 text-yellow-800': transaction.status === 'PENDING',
            'bg-red-100 text-red-800': transaction.status === 'FAILED'
          }"
        >
          {{ transaction.status }}
        </span>
      </div>
    </div>

    <!-- First Item Preview -->
    <div class="flex-1 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
      <!-- Image and Details Row -->
      <div class="flex-1 flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">
        <!-- Image -->
        <div class="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
          <img 
            :src="transaction.items[0].image" 
            :alt="transaction.items[0].title"
            class="w-full h-full object-cover"
            loading="lazy"
          />
          <div class="absolute inset-0 flex items-center justify-center transition-all cursor-pointer">
            <img 
              src="/icons/baseicons/play.svg" 
              alt="Play" 
              class="w-5 h-5 sm:w-6 sm:h-6 opacity-90 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Details -->
        <div class="flex-1 min-w-0 font-geist-regular">
          <!-- Artist -->
          <div class="flex items-center gap-1 sm:gap-2 mb-0 sm:mb-1">
            <img 
              :src="transaction.items[0].artistImage" 
              :alt="transaction.items[0].artist"
              class="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-cover border border-gray-200 flex-shrink-0"
              loading="lazy"
            />
            <span class="text-sm sm:text-md font-geist-medium text-gray-900 break-words line-clamp-1">
              {{ transaction.items[0].artist }}
            </span>
          </div>
          
          <!-- Title -->
          <h3 class="text-base sm:text-lg font-geist-semibold text-black break-words line-clamp-2">
            {{ transaction.items[0].title }}
          </h3>
          
          <!-- Stats -->
          <div class="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-1 flex items-center flex-wrap gap-1 sm:gap-2">
            <div class="flex items-center gap-1">
              <img 
                src="/icons/baseicons/download_gray.svg" 
                alt="Downloads" 
                class="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                loading="lazy"
              />
              <span class="break-words">{{ transaction.items[0].downloads }}</span>
            </div>
            <span class="flex-shrink-0">•</span>
            <span class="break-words">{{ transaction.items[0].bpm }}BPM</span>
          </div>
        </div>
      </div>

      <!-- Total Price -->
      <div class="text-black whitespace-nowrap flex flex-col">
        <span class="font-geist-regular text-gray-500 text-sm">Total ({{ transaction.items.length }} items)</span>
        <span class="font-geist-semibold text-base sm:text-md ">{{ transaction.total }}</span>
      </div>
    </div>

    <!-- More Items and Details Button Row -->
    <div class="flex justify-between items-center pt-3 gap-4">
    <div v-if="transaction.items.length > 1" class="flex items-center w-full">
        <div class="border-t border-gray-300 flex-grow mr-3"></div>
        <span class="text-sm text-gray-500 whitespace-nowrap font-geist-regular px-2">
        {{ transaction.items.length - 1 }} more items
        </span>
        <div class="border-t border-gray-300 flex-grow ml-3"></div>
    </div>
    <div class="flex group font-glancyr-light hover:scale-[1.02] transition-all duration-300 active:scale-[0.98] shrink-0">
        <button 
        class="text-[#A10501] border border-[#A10501] bg-white py-2 px-6 font-semibold tracking-wide text-xs 
                transition-all duration-300 group-hover:bg-gray-50 shadow-md hover:shadow-lg"
        @click="$emit('view-details')"
        >
        <span class="inline-block group-active:translate-y-0.5 transition-transform text-base">
            DETAILS
        </span>
        </button>
        <div 
        class="bg-black px-3 py-2 flex items-center justify-center 
                transition-all duration-300 group-hover:bg-gray-900 cursor-pointer"
        @click="$emit('view-details')"
        >
        <img 
            src="/icons/baseicons/arrow_white.svg" 
            alt="arrow" 
            class="w-3.5 h-3.5 transition-transform duration-300 
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
import type { Transaction } from '~/data/transaction'

defineProps<{
  transaction: Transaction
}>()

defineEmits(['view-details'])
</script>

<style scoped>
.break-words {
  overflow-wrap: break-word;
  word-break: break-word;
}

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>