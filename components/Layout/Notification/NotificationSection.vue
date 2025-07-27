<!-- NotificationSection.vue -->
<template>
  <div class="relative">
    <!-- Trigger Button -->
    <!-- Notification Button -->
    <button 
      @click="toggleDropdown"
      aria-label="Notifications" 
      class="text-gray-600 hover:text-red-800 transition-all duration-300 p-1 sm:p-1.5 md:p-2 rounded-full relative group"
    >
      <div class="relative">
        <img 
          src="/icons/baseicons/notification.svg" 
          alt="Notifications" 
          class="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-all duration-300 group-hover:scale-110 group-active:scale-95"
        >
        <!-- Ping animation on hover -->
        <span class="absolute top-0 right-0 flex h-1.5 w-1.5 sm:h-2 sm:w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-800 opacity-0 group-hover:opacity-75 transition-opacity duration-300"></span>
          <span class="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </span>
      </div>
      <!-- Background effect on hover -->
      <span class="absolute inset-0 bg-gray-50 rounded-full scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10"></span>
    </button>

    <!-- Dropdown Content -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div 
        v-if="isOpen"
        class="absolute right-0 mt-2 w-72 bg-white shadow-xl z-50 border border-gray-200 origin-top-right"
        v-click-outside="closeDropdown"
      >
        <div class="">
          <div class="flex items-center justify-between p-4 border-b border-gray-200 border-t-4 border-t-[#A10501]">
            <h2 class="text-lg sm:text-xl font-glancyr-medium text-black">NOTIFICATIONS</h2>
            <button @click="closeDropdown" class="text-black hover:text-gray-500 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <!-- Scrollable notifications list -->
          <div class="max-h-64 overflow-y-auto">
            <div class="space-y-3 p-4">
              <div 
                v-for="notification in notifications" 
                :key="notification.id" 
                class="border-b border-gray-100 pb-3 last:border-0 relative hover:bg-gray-50 transition-colors duration-200 rounded"
                @click="markAsRead(notification.id)"
              >
                <!-- Green dot in top right corner -->
                <span 
                  v-if="!readNotifications.includes(notification.id)" 
                  class="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full"
                ></span>
                
                <div class="flex items-start gap-3">
                  <div class="flex-1 min-w-0 flex-row">
                    <h3 class="text-sm sm:text-md font-medium text-gray-900">{{ notification.title }}</h3>
                    <p class="text-xs text-gray-500 mt-1 leading-snug">{{ notification.message }}</p>
                    <p v-if="notification.code" class="text-xs text-gray-500">
                      Redeem this code: <span class="font-medium text-[#A10501]"> {{ notification.code }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Modified Read All button with icon and wrapper div -->
          <div class="border-t border-gray-200">
            <button 
              @click="markAllAsRead"
              class="w-full p-4 text-xs sm:text-sm font-medium text-red-800 hover:text-red-700 transition-colors duration-200"
            >
              <div class="flex items-center justify-center gap-2">
                <span>Read All Notification</span>
                <img src="/icons/baseicons/checks.svg" alt="Check" class="w-4 h-4">
              </div>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { notifications } from '~/data/notification';
import { ref } from 'vue';

const isOpen = ref(false);
const readNotifications = ref<string[]>([]);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = () => {
  isOpen.value = false;
};

const markAsRead = (id: string) => {
  if (!readNotifications.value.includes(id)) {
    readNotifications.value = [...readNotifications.value, id];
  }
};

const markAllAsRead = () => {
  const newReadNotifications = [...readNotifications.value];
  notifications.forEach(notification => {
    if (!newReadNotifications.includes(notification.id)) {
      newReadNotifications.push(notification.id);
    }
  });
  readNotifications.value = newReadNotifications;
};
</script>

<style scoped>
/* Custom Scrollbar */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #A10501;
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #800000;
}
</style>