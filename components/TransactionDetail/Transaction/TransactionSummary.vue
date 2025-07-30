<template>
  <div class="bg-white gap-2 flex flex-col">
    <div class="border border-gray-200 p-4 md:p-4 lg:p-4 ">
      <h3 class="text-lg md:text-xl lg:text-xl font-geist-semibold mb-3 md:mb-4 lg:mb-4">Transaction Summary</h3>
      <div class="space-y-4 text-sm text-gray-500">
        <div class="flex justify-between">
          <span class="font-geist-regular">Subtotal Item Price :</span>
          <span class="font-geist-semibold text-black">{{ total }}</span>
        </div>
        <div class="flex justify-between">
          <span class="font-geist-regular">Shipping Cost :</span>
          <span class="font-geist-semibold text-black">Rp 21.700</span>
        </div>
        <div class="border-t border-gray-200 my-2"></div>
        <div class="flex justify-between">
          <span class="text-md md:text-base font-geist-semibold text-black">Total Payment :</span>
          <span class="text-md md:text-base font-geist-semibold text-[#A10501]">
            {{ calculateTotalWithShipping(total) }}
          </span>
        </div>
      </div>
    </div>

    <div class="bg-[#EEEEEE] p-2 md:p-3 lg:p-3 mb-3 md:mb-4 lg:mb-4 font-geist-regular">
      <p class="text-black text-sm md:text-sm lg:text-sm leading-4 md:leading-5 lg:leading-5">
        We will send download link to<br>
        <span class="font-geist-medium text-[#A10501]">{{ email }}</span> when payment<br>
        complete
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  total: string
  email: string
}>()

function calculateTotalWithShipping(total: string) {
  const clean = parseInt(total.replace(/\D/g, ''))
  const result = clean + 21700
  return 'Rp ' + new Intl.NumberFormat('id-ID').format(result)
}
</script>
