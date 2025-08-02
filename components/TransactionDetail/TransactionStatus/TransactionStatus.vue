<template>
  <div class="bg-white w-full lg:w-1/4 h-full p-4 border border-gray-200 shadow-sm">
    <h3 class="text-xl font-geist-semibold mb-4">Transaction Status</h3>
    <div class="relative">
      <div class="flex flex-col">
        <div
          v-for="(step, index) in reversedSteps"
          :key="step.label"
          class="flex items-start gap-3 relative"
        >
          <!-- Icon + Line Wrapper -->
          <div class="flex flex-col items-center">
            <!-- Icon Circle -->
            <div
              :class="[ 
                'w-12 h-12 flex items-center justify-center rounded-full z-10',
                step.status === 'SUCCESS' ? 'bg-[#A10501]' : 'bg-[#FDEAEA]'
              ]"
            >
              <img
                :src="step.icon"
                alt="status"
                class="w-6 h-6"
                :class="step.status === 'SUCCESS' ? 'invert brightness-0 saturate-0' : 'opacity-70'"
              />
            </div>

            <!-- Vertical Line -->
            <div
              v-if="index !== reversedSteps.length - 1"
              class="w-[2px] bg-gray-300 my-1 flex-1"
              style="min-height: 24px;"
            ></div>
          </div>

          <!-- Text -->
          <div class="flex flex-col mt-1">
            <p class="text-sm text-gray-500 font-geist-regular">{{ step.time }}</p>
            <p class="font-geist-semibold text-black">
              {{ step.label }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { transactionSteps } from '~/data/status'

defineProps<{
  status: string
}>()

// Membalik urutan agar SUCCESS di atas, CREATED di bawah
const reversedSteps = transactionSteps.slice().reverse()
</script>
