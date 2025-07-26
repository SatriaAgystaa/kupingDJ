<template>
  <Transition name="modal">
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4">
      <div class="bg-white shadow-xl max-w-md w-full mx-2 sm:mx-4 md:mx-0 modal-container">
        <!-- Header with title -->
        <div class="border-b border-gray-200 p-3 sm:p-4 border-t-4 border-t-red-800">
          <h3 class="text-lg sm:text-xl font-glancyr-medium justify-start">DJ PROFILE UNDER REVIEW</h3>
        </div>

        <!-- Alert icon and message -->
        <div class="text-center py-4 sm:py-6 md:py-4 px-3 sm:px-4">
          <div class="flex justify-center mb-4">
            <img 
              src="/icons/baseicons/smile.svg" 
              alt="Alert" 
              class="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
            >
          </div>
          <p class="text-gray-600 font-geist-regular text-sm sm:text-base px-2 sm:px-0 mb-4">
            Your application is currently under review by the Kuping DJ team. We'll notify you once the verification process is complete.
          </p>
          <p class="text-gray-600 font-geist-regular text-sm sm:text-base px-2 sm:px-0">
            Thanks for your patience - real DJs take time to verify.<br />Stay tuned.
          </p>
        </div>

        <!-- Buttons row -->
        <div class="flex flex-row gap-2 sm:gap-4 w-full p-3 sm:p-4">
          <button 
            @click="closeModal"
            class="flex-1 bg-red-800 text-white px-6 py-2 rounded-sm font-medium hover:bg-red-700 transition-colors duration-200"
          >
            OKAY
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform 0.3s ease;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(0.95);
}
</style>