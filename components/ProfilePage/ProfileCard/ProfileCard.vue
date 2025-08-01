<!-- ~/components/ProfileCard.vue -->
<template>
  <div class="flex flex-col gap-2 xs:gap-2.5 sm:gap-3 mb-4 sm:mb-4">
    <div class="flex flex-row justify-between items-center">
      <!-- Left side - Profile Image and Info -->
      <div class="flex flex-row gap-2.5 xs:gap-3 sm:gap-4 items-center md:items-start">
        <!-- Profile Image -->
        <div class="flex-shrink-0">
          <img 
            :src="profile.imageUrl" 
            :alt="profile.name"
            class="w-12 h-12 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover border border-gray-200"
          />
        </div>

        <!-- Profile Info -->
        <div class="flex flex-col">
          <h2 class="text-lg xs:text-xl sm:text-2xl md:text-3xl font-geist-semibold text-gray-900 leading-tight">
            {{ profile.name }}
          </h2>
          
          <div class="flex flex-col md:flex-row lg:flex-row xs:items-center xs:gap-2 md:gap-3 mt-1 sm:mt-1 font-geist-medium">
            <div class="flex flex-row items-center gap-1 xs:gap-1.5 sm:gap-2">
              <img 
                src="/icons/baseicons/mail.svg" 
                alt="Email"
                class="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5"
              />
              <span class="text-[11px] xs:text-xs sm:text-sm text-gray-600">{{ profile.email }}</span>
            </div>
            <span class="hidden md:inline text-gray-600">•</span>
            <div class="flex flex-row items-center gap-1 xs:gap-1.5 sm:gap-2">
              <span class="text-[11px] xs:text-xs sm:text-sm text-[#a10501]">{{ profile.socialMedia }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right side - Edit button -->
      <NuxtLink to="/edit-profile" class="text-gray-400 hover:text-gray-600 transition-colors p-1">
        <img 
          src="/icons/baseicons/pen.svg" 
          alt="Edit Profile"
          class="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5"
        />
      </NuxtLink>
    </div>

    <!-- Joined since -->
    <div class="flex items-center font-geist-regular gap-1 xs:gap-1.5 sm:gap-2 text-[11px] xs:text-xs sm:text-sm text-gray-500">
      <img 
        src="/icons/baseicons/date.svg" 
        alt="Join Date"
        class="w-2.5 h-2.5 xs:w-3 xs:h-3 sm:w-4 sm:h-4"
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