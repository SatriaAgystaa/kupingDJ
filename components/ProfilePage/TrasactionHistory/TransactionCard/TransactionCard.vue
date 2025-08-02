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
          <button 
            @click="handlePlay"
            class="absolute inset-0 flex items-center justify-center transition-all"
          >
            <img 
              :src="isLocalPlaying ? '/icons/baseicons/pause_white.svg' : '/icons/baseicons/play.svg'" 
              :alt="isLocalPlaying ? 'Pause' : 'Play'" 
              class="w-4 h-4 sm:w-5 sm:h-5 opacity-90 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </button>
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
    <NuxtLink 
        to="/transaction-detail" 
        class="group flex w-full md:w-full lg:w-auto font-glancyr-light hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
      >
        <div 
          class="flex items-center justify-between w-full bg-white shadow-md hover:shadow-lg 
                transition-all duration-300 group-hover:bg-gray-50"
        >
          <!-- Text -->
          <div 
            class="flex-1 py-2.5 px-4 lg:px-6 font-semibold tracking-wide text-[#A10501] text-xs xs:text-sm border border-[#A10501]"
          >
            DETAILS
          </div>

          <!-- Icon -->
          <div 
            class="min-w-[42px] px-3 py-3 bg-black flex items-center justify-center border border-black 
                  transition-all duration-300 group-hover:bg-gray-900 cursor-pointer"
          >
            <img 
              src="/icons/baseicons/arrow_white.svg" 
              alt="arrow" 
              class="w-3 h-3 transition-transform duration-300 
                    group-hover:translate-x-1 group-active:translate-x-2"
              loading="lazy"
              width="20"
              height="20"
            />
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import { useAudioEventBus } from '@/composables/useAudioEventBus'
import type { Transaction } from '~/data/transaction'

const props = defineProps<{
  transaction: Transaction
}>()

const { currentTrack, isPlaying, play, pause } = inject('audioPlayer')
const { notifyPlay } = useAudioEventBus()

// Use the first item in transaction for play functionality
const firstItem = computed(() => props.transaction.items[0])

// Component ID based on transaction and item
const componentId = computed(() => `transaction-${props.transaction.id}-item-0`)

// Local playing state for the first item
const isLocalPlaying = computed(() => {
  return isPlaying.value && 
         currentTrack.value && 
         currentTrack.value.id === firstItem.value.id
})

const handlePlay = () => {
  if (isLocalPlaying.value) {
    pause()
  } else {
    notifyPlay(componentId.value, firstItem.value.id)
    play(firstItem.value)
  }
}
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