<!-- ~/components/TransactionCard.vue -->
<template>
  <div class="bg-white shadow-sm border border-gray-200 p-3 mb-3">
    <!-- Transaction Header -->
    <div class="flex justify-between md:justify-between items-start md:items-start mb-0 md:mb-3">
      <div class="flex flex-col">
        <div class="flex md:flex-col lg:flex-row flex-col gap-0 md:gap-0 lg:gap-1 mb-1 md:mb-1 lg:mb-0">
            <h3 class="text-base font-glancyr-semibold text-black">TRANSACTION</h3>
            <h3 class="text-sm font-geist-medium text-gray-500">• {{ transaction.id }}</h3>
        </div>
        <p class="text-xs font-geist-regular text-gray-500 mb-3 md:mb-0">Transaction Date: {{ transaction.date }}</p>
      </div>
      <div class="flex items-center gap-1">
        <span 
          class="px-3 py-1 text-xs md:text-sm font-glancyr-medium"
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
    <div class="flex-1 flex flex-col md:flex-col lg:flex-row lg:items-center gap-2 sm:gap-3">
      <!-- Image and Details Row -->
      <div class="flex-1 flex items-start sm:items-center gap-2 sm:gap-3 min-w-0">
        <!-- Image -->
        <div class="relative w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 flex-shrink-0">
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
              class="w-4 h-4 sm:w-5 sm:h-5 opacity-90 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Details -->
        <div class="flex-1 min-w-0 font-geist-regular">
          <!-- Artist -->
          <div class="flex items-center gap-1 sm:gap-1 mb-0 sm:mb-1">
            <img 
              :src="transaction.items[0].artistImage" 
              :alt="transaction.items[0].artist"
              class="w-4 h-4 sm:w-5 sm:h-5 rounded-full object-cover border border-gray-200 flex-shrink-0"
              loading="lazy"
            />
            <span class="text-xs sm:text-sm font-geist-medium text-gray-900 break-words line-clamp-1">
              {{ transaction.items[0].artist }}
            </span>
          </div>
          
          <!-- Title -->
          <h3 class="text-sm sm:text-base font-geist-semibold text-black break-words line-clamp-2">
            {{ transaction.items[0].title }}
          </h3>
          
          <!-- Stats -->
          <div class="text-xs text-gray-500 mt-0 sm:mt-1 flex items-center flex-wrap gap-1 sm:gap-1">
            <div class="flex items-center gap-1">
              <img 
                src="/icons/baseicons/download_gray.svg" 
                alt="Downloads" 
                class="w-3 h-3 flex-shrink-0"
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
      <div class="text-black whitespace-nowrap justify-between items-center lg:items-start md:justify-between flex flex-row md:flex-row lg:flex-col">
        <span class="font-geist-regular text-gray-500 text-xs">Total ({{ transaction.items.length }} items)</span>
        <span class="font-geist-semibold text-sm sm:text-base">{{ transaction.total }}</span>
      </div>
    </div>

    <!-- More Items and Details Button Row -->
    <div class="flex md:flex-col lg:flex-row flex-col justify-between items-center pt-2 gap-3">
    <div v-if="transaction.items.length > 1" class="flex items-center w-full">
        <div class="border-t border-gray-300 flex-grow mr-2"></div>
        <span class="text-xs text-gray-500 whitespace-nowrap font-geist-regular px-1">
        {{ transaction.items.length - 1 }} more items
        </span>
        <div class="border-t border-gray-300 flex-grow ml-2"></div>
    </div>
    <div class="flex group font-glancyr-light hover:scale-[1.02] transition-all duration-300 active:scale-[0.98] w-full md:w-full lg:w-auto">
        <button 
          class="text-[#A10501] border border-[#A10501] bg-white py-2 px-3 xs:px-4 lg:px-6 lg:py-2 font-semibold tracking-wide text-xs 
                  transition-all duration-300 group-hover:bg-gray-50 shadow-md hover:shadow-lg flex-1 xs:flex-none"
          @click="$emit('view-details')"
        >
          <span class="inline-block group-active:translate-y-0.5 transition-transform text-xs xs:text-sm">
            DETAILS
          </span>
        </button>
        <div 
          class="bg-black px-2 py-1 flex items-center justify-center 
                  transition-all duration-300 group-hover:bg-gray-900 cursor-pointer w-8 xs:w-auto"
          @click="$emit('view-details')"
        >
          <img 
            src="/icons/baseicons/arrow_white.svg" 
            alt="arrow" 
            class="w-3 h-3 transition-transform duration-300 
                group-hover:translate-x-1 group-active:translate-x-2"
            loading="lazy"
            width="14"
            height="14"
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