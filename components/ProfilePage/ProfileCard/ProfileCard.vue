<!-- ~/components/ProfileCard.vue -->
<template>
  <div class="flex flex-col gap-3 mb-6">
    <div class="flex flex-row justify-between items-center">
      <!-- Left side - Profile Image and Info -->
      <div class="flex flex-row gap-4">
        <!-- Profile Image -->
        <div class="flex-shrink-0">
          <img 
            :src="profile.imageUrl" 
            :alt="profile.name"
            class="w-16 h-16 rounded-full object-cover border border-gray-200"
          />
        </div>

        <!-- Profile Info -->
        <div class="flex flex-col">
          <h2 class="text-3xl font-geist-semibold text-gray-900">{{ profile.name }}</h2>
          
          <div class="flex flex-row items-center gap-2 mt-1 font-geist-medium">
            <img 
              src="/icons/baseicons/facebook.svg" 
              alt="Username"
              class="w-5 h-5"
            />
            <span class="text-sm text-gray-600">_{{ profile.username }}</span>
            <span class="text-sm text-gray-400">•</span>
            <img 
              src="/icons/baseicons/mail.svg" 
              alt="Email"
              class="w-5 h-5"
            />
            <span class="text-sm text-gray-600">{{ profile.email }}</span>
          </div>
        </div>
      </div>

      <!-- Right side - Edit button -->
      <button class="text-gray-400 hover:text-gray-600 transition-colors p-1">
        <img 
          src="/icons/baseicons/pen.svg" 
          alt="Edit Profile"
          class="w-5 h-5"
        />
      </button>
    </div>

    <!-- Joined since -->
    <div class="flex items-center font-geist-regular gap-2 text-sm text-gray-500">
      <img 
        src="/icons/baseicons/date.svg" 
        alt="Join Date"
        class="w-4 h-4"
      />
      <span>Joined since Jun 2023</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Profile } from '~/data/profile'

defineProps<{
  profile: Profile
}>()
</script>