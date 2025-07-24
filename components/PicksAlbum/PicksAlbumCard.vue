<template>
  <div class="picksAlbum-card bg-white border -lg overflow-hidden shadow-sm h-full">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
      <!-- Left Section -->
      <div class="p-4 flex flex-col h-full border-b lg:border-b-0">
        <div class="relative mb-4">
          <img :src="coverImage" :alt="title" class="w-full h-full object-cover" />
          <button
            @click="toggleLike"
            class="absolute top-4 right-4 bg-white p-3 rounded-full shadow-sm"
          >
            <img
              src="/icons/baseicons/like_black.svg"
              class="w-5 h-5"
              alt="Like Icon"
            />
          </button>
        </div>

        <h3 class="text-2xl font-geist-semibold text-gray-900 mb-2">{{ title }}</h3>
        <div class="flex items-center text-gray-500 text-xs mb-1">
          <img src="/icons/baseicons/date.svg" class="w-3 h-3 mr-1" alt="Date" />
          <span class="font-geist-medium">{{ date }}</span>
        </div>
        <p class="font-geist-semibold text-black text-base mb-4">
          Rp. {{ price.toLocaleString('id-ID') }} <span class="text-gray-500 text-xs">(bundling Price)</span>
        </p>
        <div class="flex items-center gap-2 mt-auto">
          <button class="flex-1 bg-white border-2 border-[#A10501] text-[#A10501] font-geist-semibold p-2 text-xl">
            BUY BUNDLING
          </button>
          <button class="border-2 border-black text-black p-2 hover:bg-gray-50 ">
            <img src="/icons/baseicons/cart_black.svg" class="w-7 h-7" alt="Cart" />
          </button>
        </div>
      </div>

      <!-- Right Section -->
      <div class="p-4 flex flex-col h-full">
        <div class="flex-1 overflow-y-auto pr-1 custom-scroll font-geist-regular">
          <div class="grid grid-cols-2 gap-3">
            <div
              v-for="(track, i) in tracks"
              :key="i"
              class="bg-white border shadow-sm flex flex-col justify-between w-full max-w-xs"
            >
              <!-- Top Section -->
              <div class="p-3 space-y-3">
                <div class="flex items-center text-xs text-gray-500 gap-2 justify-start">
                  <img :src="track.headIcon"/>
                  <img :src="track.barIcon"/>
                </div>

                <!-- Durasi ditampilkan untuk semua item -->
                <div class="flex items-center text-xs text-gray-500 gap-1">
                  <span>{{ track.duration }}</span>
                </div>

                <!-- Icon + Title -->
                <div class="flex flex-col gap-1">
                  <h4 class="font-geist-semibold text-sm text-gray-900">{{ track.title }}</h4>
                  <p class="text-xs text-gray-500">{{ track.date }} • {{ track.size }}</p>
                </div>
              </div>

              <!-- Bottom Section (tetap sama) -->
              <div v-if="track.price === 'Download'" class="bg-[#A10501] text-white text-xs font-medium flex items-center justify-between px-3 py-2">
                <span class="text-sm font-medium">Download</span>
                <img :src="track.icon" class="w-5 h-5" alt="Download" />
              </div>

              <div v-else class="bg-[#A10501] text-white flex items-center justify-between px-3 py-2">
                <span class="text-sm font-medium">{{ track.price }}</span>
                <button>
                  <img :src="track.icon" class="w-4 h-4" alt="Cart" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
  coverImage: String,
  date: String,
  price: Number,
  tracks: Array
})

const isLiked = ref(false)
const toggleLike = () => (isLiked.value = !isLiked.value)
</script>

<style scoped>
.custom-scroll::-webkit-scrollbar {
  width: 6px;
}
.custom-scroll::-webkit-scrollbar-thumb {
  background-color: #bbb;
  border-radius: 10px;
}
.picksAlbum-card {
  transition: transform 0.3s ease;
}
.picksAlbum-card:hover {
  transform: translateY(-2px);
}
</style>
