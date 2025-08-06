<template>
  <div class="flex items-start sm:items-center gap-3 sm:gap-4 py-3 sm:py-4">
    <!-- Custom Checkbox - Will be used for bulk deletion when backend is connected -->
    <label class="custom-checkbox">
      <input 
        type="checkbox" 
        v-model="isSelected"
        class="opacity-0 absolute"
      >
      <span class="checkmark"></span>
    </label>
    
    <!-- Content Container -->
    <div class="flex-1 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
      <!-- Image and Details Row -->
      <div class="flex-1 flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">
        <!-- Image -->
        <div class="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
          <img 
            :src="album.coverImage" 
            :alt="album.title"
            class="w-full h-full object-cover border border-gray-200"
            loading="lazy"
          />
        </div>

        <!-- Details -->
        <div class="flex-1 min-w-0 font-geist-regular overflow-hidden">
          <!-- Category -->
          <div class="flex items-center gap-1 sm:gap-2 mb-0 sm:mb-1">
            <span class="text-sm sm:text-md font-geist-medium text-[#A10501] break-words line-clamp-1">{{ album.category }}</span>
          </div>
          
          <!-- Title -->
          <h3 class="text-base sm:text-lg font-geist-semibold text-black break-words line-clamp-2">{{ album.title }}</h3>
          
          <!-- Stats -->
          <div class="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-1 flex items-center flex-wrap gap-1 sm:gap-2">
            <span class="break-words">{{ getTotalSize(album) }} Folder Size</span>
          </div>
        </div>
      </div>

      <!-- Price and Delete Button -->
      <div class="flex sm:flex-row items-center sm:items-center justify-between gap-2 sm:gap-2 w-full sm:w-auto pl-0 sm:pl-2 ml-0 sm:ml-auto">
        <div class="text-base sm:text-lg font-geist-semibold text-black whitespace-nowrap">
          Rp. {{ formatPrice(album.price) }}
        </div>
        <button 
          @click="$emit('delete')"
          class="text-gray-400 hover:text-[#A10501] transition-colors flex-shrink-0"
          aria-label="Delete item"
        >
          <img 
            src="/icons/baseicons/trash.svg" 
            alt="Delete" 
            class="w-4 h-4 sm:w-5 sm:h-5"
            loading="lazy"
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Album } from '~/data/albums'
import { computed } from 'vue'

const props = defineProps<{
  album: Album
  selected: boolean
}>()

const emit = defineEmits(['update:selected', 'delete'])

const isSelected = computed({
  get() {
    return props.selected
  },
  set(value) {
    emit('update:selected', value)
  }
})

function getTotalSize(album: Album) {
  const totalMB = album.tracks.reduce((sum, track) => {
    const sizeValue = parseInt(track.size.split(' ')[0]) || 0
    return sum + sizeValue
  }, 0)
  
  return totalMB >= 1000 ? `${(totalMB / 1000).toFixed(1)} GB` : `${totalMB} MB`
}

function formatPrice(price: number) {
  return new Intl.NumberFormat('id-ID').format(price)
}
</script>

<style scoped>
.custom-checkbox {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  margin-top: 0.5rem;
  flex-shrink: 0;
}

@media (min-width: 640px) {
  .custom-checkbox {
    margin-top: 0;
  }
}

.custom-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: relative;
  height: 18px;
  width: 18px;
  background-color: white;
  border: 1px solid #A10501;
  transition: all 0.2s ease;
}

@media (min-width: 640px) {
  .checkmark {
    height: 20px;
    width: 20px;
  }
}

.custom-checkbox input:checked ~ .checkmark {
  background-color: #A10501;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 5px;
  top: 2px;
  width: 5px;
  height: 9px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

@media (min-width: 640px) {
  .checkmark:after {
    left: 6px;
    top: 3px;
    height: 10px;
  }
}

.custom-checkbox input:checked ~ .checkmark:after {
  display: block;
}

/* Text handling */
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

/* Prevent layout shift */
img {
  display: block;
  max-width: 100%;
  height: auto;
}

/* Mobile-specific adjustments */
@media (max-width: 639px) {
  .price-delete-container {
    width: 100%;
    padding-left: 4.5rem;
    margin-top: 0.5rem;
  }
}
</style>