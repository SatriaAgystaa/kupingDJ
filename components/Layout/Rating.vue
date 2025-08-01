<!-- components/Layout/Rating.vue -->
<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
    <div class="bg-white shadow-xl max-w-lg w-full mx-2 sm:mx-4 md:mx-0"> <!-- Changed max-w-md to max-w-lg -->
      <!-- Header with title -->
      <div class="border-b border-gray-200 p-4 sm:p-5 border-t-4 border-t-red-800"> <!-- Increased padding -->
        <h3 class="text-xl sm:text-2xl font-glancyr-medium justify-start">RATE THIS MIXTAPE</h3> <!-- Increased text size -->
        <p class="text-base text-gray-600 mt-1">{{ mixtape.artist }} - {{ mixtape.title }}</p> <!-- Increased text size -->
      </div>

      <!-- Rating stars -->
      <div class="text-center py-8 sm:py-10 md:py-12"> <!-- Increased padding -->
        <div class="flex justify-center items-center mb-6"> <!-- Increased margin-bottom -->
          <div class="flex items-center space-x-3 sm:space-x-4"> <!-- Increased spacing between stars -->
            <button 
              v-for="star in 5" 
              :key="star"
              @click="setRating(star)"
              @mouseover="hoverRating = star"
              @mouseleave="hoverRating = null"
              class="focus:outline-none transition-all duration-200"
              aria-label="Rate {{ star }} star"
            >
              <svg 
                :class="[
                  'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16',
                  {
                    'text-yellow-400': (hoverRating || currentRating) >= star,
                    'text-gray-300': (hoverRating || currentRating) < star,
                    'scale-110': hoverRating === star
                  }
                ]" 
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                  stroke="currentColor"
                  :stroke-width="(hoverRating || currentRating) >= star ? '0.5' : '1'"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  :fill="(hoverRating || currentRating) >= star ? 'currentColor' : 'none'"
                />
              </svg>
            </button>
          </div>
        </div>
        
        <p class="text-gray-600 font-geist-regular text-base sm:text-lg px-4 sm:px-0"> <!-- Increased text size -->
          {{ ratingMessage }}
        </p>
      </div>

      <!-- Submit button -->
      <div class="flex flex-row gap-3 sm:gap-4 w-full p-4 sm:p-5"> <!-- Increased padding and gap -->
        <button 
          @click="submitRating"
          :disabled="!currentRating"
          :class="[
            'flex-1 flex group font-glancyr-light hover:scale-105 transition-all duration-300 min-w-0',
            {'opacity-50 cursor-not-allowed': !currentRating}
          ]"
        >
          <div class="flex-1 bg-red-800 text-white border-2 border-red-800 px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 font-semibold tracking-wide text-sm sm:text-base transition-all duration-300 group-hover:bg-red-700 text-center flex items-center justify-center truncate"> <!-- Increased padding and text size -->
            SUBMIT RATING
          </div>
          <div class="bg-black border-2 border-black px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-3 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-900 flex-shrink-0"> <!-- Increased padding -->
            <img src="/icons/baseicons/arrow_white.svg" alt="arrow" class="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1" /> <!-- Increased icon size -->
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  mixtape: {
    type: Object,
    required: true,
    default: () => ({})
  }
})

const emit = defineEmits(['close', 'submit'])

const currentRating = ref(0)
const hoverRating = ref(null)

const ratingMessages = [
  "Please rate this mixtape",
  "Poor",
  "Fair",
  "Good",
  "Very Good",
  "Excellent"
]

const ratingMessage = computed(() => {
  return currentRating.value ? ratingMessages[currentRating.value] : ratingMessages[0]
})

const setRating = (rating) => {
  currentRating.value = rating
}

const submitRating = () => {
  if (currentRating.value) {
    emit('submit', {
      rating: currentRating.value,
      mixtape: props.mixtape
    })
    emit('close')
  }
}
</script>

<style scoped>
/* Custom transition for the stars */
svg {
  transition: all 0.2s ease-in-out;
}

/* When not hovered or selected, show outline stars */
.text-gray-300 {
  color: #d1d5db;
}

/* When hovered or selected, show filled stars */
.text-yellow-400 {
  color: #f59e0b;
}
</style>