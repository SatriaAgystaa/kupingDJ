<template>
  <div class="relative w-full overflow-hidden py-6 md:py-12">
    <!-- Carousel -->
    <div class="relative h-[16rem] sm:h-[20rem] md:h-[22rem]">
      <div
        ref="carouselTrack"
        class="flex items-center h-full absolute left-0 touch-none"
        :style="trackStyle"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <div
          v-for="(item, index) in displayItems"
          :key="`${item.id}-${index}`"
          class="flex-shrink-0 flex items-center justify-center px-2 sm:px-4 h-full"
          :class="getCardClasses(index)"
          @click="centerItem(index)"
        >
          <div class="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 transition-all duration-300">
            <img
              :src="item.image"
              :alt="`DJ ${item.id}`"
              class="w-full h-full object-cover rounded-xl shadow-xl pointer-events-none select-none"
              :class="{ 'transition-all duration-300': !isResetting }"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Dots -->
    <div class="flex justify-center mt-4 md:mt-8 gap-1 sm:gap-2">
      <button
        v-for="(item, i) in carouselData"
        :key="item.id"
        class="w-2 h-2 sm:w-3 sm:h-3 rounded-full border transition-all duration-300 ease-out"
        :class="[
          activeDot(item.id)
            ? 'bg-[#A10501] scale-125 shadow-md border-[#A10501]'
            : 'bg-gray-300 hover:bg-gray-400 border-gray-300'
        ]"
        @click="goToItem(item.id)"
      ></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { carouselData } from '~/data/carousel'

const carouselTrack = ref<HTMLElement | null>(null)
const offset = ref(0)
const currentIndex = ref(carouselData.length)
const ITEM_WIDTH = ref(320) // Default for mobile, will be updated
const transitionEnabled = ref(true)
const isResetting = ref(false)
const isDragging = ref(false)
const startPosX = ref(0)
const currentTranslateX = ref(0)
const prevTranslateX = ref(0)
const animationID = ref(0)
const velocity = ref(0)
const lastTime = ref(0)
const lastPosX = ref(0)

const displayItems = computed(() => [
  ...carouselData,
  ...carouselData,
  ...carouselData
])

const trackStyle = computed(() => ({
  transform: `translateX(${isDragging.value ? currentTranslateX.value : offset.value}px)`,
  transition: transitionEnabled.value && !isDragging.value ? 'transform 0.5s ease-out' : 'none',
}))

function updatePosition() {
  if (!carouselTrack.value) return
  
  // Update ITEM_WIDTH based on screen size
  const screenWidth = window.innerWidth
  if (screenWidth < 640) { // mobile
    ITEM_WIDTH.value = 272 // 16rem (64 * 4 + 32 padding)
  } else if (screenWidth < 768) { // tablet
    ITEM_WIDTH.value = 336 // 18rem (72 * 4 + 32 padding)
  } else { // desktop
    ITEM_WIDTH.value = 352 // 20rem (80 * 4 + 32 padding)
  }
  
  offset.value =
    -currentIndex.value * ITEM_WIDTH.value +
    ((carouselTrack.value.parentElement?.clientWidth || 0) / 2) -
    ITEM_WIDTH.value / 2
}

function getCardClasses(index: number) {
  const distance = Math.abs(index - currentIndex.value)

  return {
    'cursor-pointer': true,
    'scale-90': distance === 1,
    'scale-100': distance === 0,
    'opacity-50': distance >= 2,
    'opacity-80': distance === 1,
    'opacity-100': distance === 0,
    'z-10': distance === 0,
    'z-0': distance > 0,
    'transition-transform duration-300': !isResetting.value && !isDragging.value,
    'scale-[0.8]': distance >= 2,
  }
}

function isCenter(index: number) {
  return index === currentIndex.value
}

function activeDot(id: number) {
  const currentId = carouselData[currentIndex.value % carouselData.length].id
  return id === currentId
}

function centerItem(index: number) {
  if (isDragging.value) return
  currentIndex.value = index
  updatePosition()
}

function goToItem(id: number) {
  const targetIndex = carouselData.findIndex(item => item.id === id)
  if (targetIndex === -1) return
  currentIndex.value = carouselData.length + targetIndex
  updatePosition()
}

function checkResetLoop() {
  const minIndex = carouselData.length - 2
  const maxIndex = carouselData.length * 2 + 1

  if (currentIndex.value <= minIndex || currentIndex.value >= maxIndex) {
    isResetting.value = true
    transitionEnabled.value = false

    if (currentIndex.value <= minIndex) {
      currentIndex.value += carouselData.length
    } else if (currentIndex.value >= maxIndex) {
      currentIndex.value -= carouselData.length
    }

    nextTick(() => {
      updatePosition()
      requestAnimationFrame(() => {
        transitionEnabled.value = true
        isResetting.value = false
      })
    })
  }
}

// Touch event handlers for mobile
function handleTouchStart(e: TouchEvent) {
  if (window.innerWidth >= 1024) return // Disable touch on desktop
  
  isDragging.value = true
  transitionEnabled.value = false
  startPosX.value = e.touches[0].clientX
  prevTranslateX.value = offset.value
  currentTranslateX.value = offset.value
  lastPosX.value = e.touches[0].clientX
  lastTime.value = performance.now()
  velocity.value = 0
  
  cancelAnimationFrame(animationID.value)
}

function handleTouchMove(e: TouchEvent) {
  if (!isDragging.value || window.innerWidth >= 1024) return
  
  const currentPosX = e.touches[0].clientX
  const diff = currentPosX - startPosX.value
  currentTranslateX.value = prevTranslateX.value + diff
  
  // Calculate velocity for momentum scrolling
  const now = performance.now()
  const deltaTime = now - lastTime.value
  const deltaPos = currentPosX - lastPosX.value
  
  if (deltaTime > 0) {
    velocity.value = deltaPos / deltaTime
  }
  
  lastPosX.value = currentPosX
  lastTime.value = now
}

function handleTouchEnd() {
  if (!isDragging.value || window.innerWidth >= 1024) return
  
  isDragging.value = false
  transitionEnabled.value = true
  
  // Apply momentum if velocity is high enough
  if (Math.abs(velocity.value) > 0.2) {
    const direction = velocity.value > 0 ? -1 : 1
    currentIndex.value += direction
  } else {
    // Snap to nearest item based on position
    const movedBy = currentTranslateX.value - prevTranslateX.value
    if (Math.abs(movedBy) > ITEM_WIDTH.value / 4) {
      currentIndex.value += movedBy > 0 ? -1 : 1
    }
  }
  
  updatePosition()
  setTimeout(checkResetLoop, 550)
}

onMounted(() => {
  updatePosition()
  window.addEventListener('resize', updatePosition)
})

onUnmounted(() => {
  window.removeEventListener('resize', updatePosition)
  cancelAnimationFrame(animationID.value)
})

watch(currentIndex, () => {
  updatePosition()
  setTimeout(checkResetLoop, 550)
})
</script>

<style scoped>
img {
  user-select: none;
  -webkit-user-drag: none;
}

/* Prevent highlighting when dragging on mobile */
.touch-none {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>