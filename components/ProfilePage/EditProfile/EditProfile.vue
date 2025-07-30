<template>
  <div class="w-full bg-white min-h-full">
    <!-- Main Content -->
    <div class="w-full mx-auto py-6 sm:py-8 md:py-10 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
      <!-- Title -->
      <div class="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4.5xl xl:text-5xl font-glancyr-medium">EDIT PROFILE</h1>
      </div>

      <!-- Full-width Container -->
      <div class="w-full space-y-6 p-4 sm:p-5 md:p-6 bg-white border border-gray-200 font-geist-regular">
        <!-- Profile Image Section -->
        <div class="flex flex-col sm:flex-row items-center md:items-center gap-5 sm:gap-6">
          <!-- Profile Image -->
          <div class="relative flex-shrink-0">
            <img 
              :src="profile.imageUrl" 
              alt="Profile Image" 
              class="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover"
            >
          </div>

          <!-- Image Actions -->
          <div class="flex-1 space-y-3 w-full max-w-md">
            <div class="flex flex-col md:flex-row lg:flex-row gap-3 items-stretch sm:items-start">
              <!-- Upload Button Group -->
              <div class="flex-1 w-full sm:w-auto">
                <div class="flex group font-glancyr-light hover:scale-[1.02] transition-all duration-300 active:scale-[0.98]">
                  <button 
                    @click="triggerFileInput"
                    class="bg-[#A10501] text-white py-2 px-4 font-semibold tracking-wide text-xs sm:text-sm
                            transition-all duration-300 group-hover:bg-[#900000] shadow-md hover:shadow-lg flex-1"
                  >
                    <span class="inline-block group-active:translate-y-0.5 transition-transform">
                      UPLOAD NEW IMAGE
                    </span>
                  </button>
                  <!-- Black Icon Section -->
                  <div 
                    class="bg-black px-3 py-2 flex items-center justify-center 
                            transition-all duration-300 group-hover:bg-[#1a1a1a] cursor-pointer"
                    @click="triggerFileInput"
                  >
                    <img 
                      src="/icons/baseicons/arrow_white.svg" 
                      alt="arrow" 
                      class="w-3 h-3 transition-transform duration-300"
                      loading="lazy"
                      width="14"
                      height="14"
                    />
                  </div>
                </div>
              </div>

              <!-- Delete Button Group -->
              <div class="flex-1 w-full sm:w-auto">
                <div class="flex group font-glancyr-light hover:scale-[1.02] transition-all duration-300 active:scale-[0.98]">
                  <button 
                    @click="deleteImage"
                    class="text-black border bg-[#eaeaea] border-gray-300 py-2 px-4 font-semibold tracking-wide text-xs sm:text-sm
                            transition-all duration-300 group-hover:bg-gray-200 shadow-md hover:shadow-lg flex-1"
                  >
                    <span class="inline-block group-active:translate-y-0.5 transition-transform">
                      DELETE IMAGE
                    </span>
                  </button>
                </div>
              </div>

              <input 
                type="file" 
                ref="fileInput"
                class="hidden"
                accept=".png,.jpg,.jpeg"
                @change="handleImageUpload"
              >
            </div>
            <p class="text-xs sm:text-sm text-gray-500">
              Supported formats: PNG & JPG. Max size: 5 MB.
            </p>
          </div>
        </div>

        <!-- Name Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs sm:text-sm font-geist-semibold text-black mb-2">First Name</label>
            <input 
              type="text" 
              v-model="formData.firstName"
              class="bg-[#f7f7f7] font-geist-medium w-full px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-[#B00000]"
            >
          </div>
          <div>
            <label class="block text-xs sm:text-sm font-geist-semibold text-black mb-2">Last Name</label>
            <input 
              type="text" 
              v-model="formData.lastName"
              class="bg-[#f7f7f7] font-geist-medium w-full px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-[#B00000]"
            >
          </div>
        </div>

        <!-- Security Section -->
        <div class="space-y-4">
          <div class="flex items-center mb-3 sm:mb-4">
            <h3 class="text-sm sm:text-base md:text-lg font-glancyr-medium pr-3 sm:pr-4">SECURITY</h3>
            <div class="flex-grow border-t border-gray-200"></div>
          </div>

          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
            <div class="w-full lg:w-1/2 lg:pr-2 flex-1 lg:flex-none">
              <label class="block text-xs sm:text-sm font-geist-semibold text-black mb-2">Email</label>
              <input 
                type="email" 
                v-model="profile.email"
                disabled
                class="bg-[#f7f7f7] font-geist-medium w-full px-3 py-2 text-sm sm:text-base text-black"
              >
            </div>
            <!-- Change Email -->
            <div class="flex group font-glancyr-light hover:scale-[1.02] transition-all duration-300 active:scale-[0.98] w-full sm:w-auto">
              <button 
                @click="showChangeEmailModal = true"
                class="px-4 py-2 border border-gray-300 bg-[#eaeaea] text-xs sm:text-sm font-glancyr-medium 
                        group-hover:bg-gray-200 shadow-md hover:shadow-lg flex-1"
              >
                <span class="inline-block group-active:translate-y-0.5 transition-transform">
                  CHANGE EMAIL
                </span>
              </button>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
            <div class="w-full lg:w-1/2 lg:pr-2 flex-1 lg:flex-none">
              <label class="block text-xs sm:text-sm font-geist-semibold text-black mb-2">Password</label>
              <input 
                type="password" 
                value="password123"
                disabled
                class="bg-[#f7f7f7] font-geist-medium w-full px-3 py-2 text-sm sm:text-base text-black"
              >
            </div>
            <!-- Change Password -->
            <div class="flex group font-glancyr-light hover:scale-[1.02] transition-all duration-300 active:scale-[0.98] w-full sm:w-auto">
              <button 
                @click="showChangePasswordModal = true"
                class="px-4 py-2 border border-gray-300 bg-[#eaeaea] text-xs sm:text-sm font-glancyr-medium 
                        group-hover:bg-gray-200 shadow-md hover:shadow-lg flex-1"
              >
                <span class="inline-block group-active:translate-y-0.5 transition-transform">
                  CHANGE PASSWORD
                </span>
              </button>
            </div>
          </div>
        </div>

        <!-- Support Section -->
        <div class="space-y-4">
          <div class="flex items-center mb-3 sm:mb-4">
            <h3 class="text-sm sm:text-base md:text-lg font-glancyr-medium pr-3 sm:pr-4">SUPPORT</h3>
            <div class="flex-grow border-t border-gray-200"></div>
          </div>

          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
            <div class="flex-1">
              <p class="text-sm sm:text-base font-geist-semibold text-black">Log out of all device</p>
              <p class="text-xs sm:text-sm text-gray-500 mt-1">Log out from all other active sessions</p>
            </div>
            <!-- Logout -->
            <div class="flex group font-glancyr-light hover:scale-[1.02] transition-all duration-300 active:scale-[0.98] w-full sm:w-auto">
              <button 
                @click="logoutAllDevices"
                class="px-4 py-2 border border-gray-300 bg-[#eaeaea] text-xs sm:text-sm font-glancyr-medium 
                        group-hover:bg-gray-200 shadow-md hover:shadow-lg flex-1"
              >
                <span class="inline-block group-active:translate-y-0.5 transition-transform">
                  LOG OUT
                </span>
              </button>
            </div>
          </div>
        </div>

        <!-- Full-width divider -->
        <div class="w-full border-t border-gray-200 my-4"></div>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row justify-end gap-3 pt-2">
          <!-- Save Changes -->
          <div class="flex group font-glancyr-light hover:scale-[1.02] transition-all duration-300 active:scale-[0.98] w-full sm:w-auto">
            <button 
              @click="saveChanges"
              class="px-6 py-2 bg-[#B00000] text-white text-xs sm:text-sm font-glancyr-medium 
                      group-hover:bg-[#900000] shadow-md hover:shadow-lg flex-1"
            >
              <span class="inline-block group-active:translate-y-0.5 transition-transform">
                SAVE CHANGES
              </span>
            </button>
          </div>

          <!-- Cancel -->
          <div class="flex group font-glancyr-light hover:scale-[1.02] transition-all duration-300 active:scale-[0.98] w-full sm:w-auto">
            <button 
              @click="cancelChanges"
              class="px-6 py-2 border border-gray-300 text-xs sm:text-sm font-glancyr-medium 
                      bg-[#eaeaea] group-hover:bg-gray-200 shadow-md hover:shadow-lg flex-1"
            >
              <span class="inline-block group-active:translate-y-0.5 transition-transform">
                CANCEL
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { profileData } from '~/data/profile'

const profile = ref({...profileData})
const fileInput = ref<HTMLInputElement | null>(null)

const nameParts = profile.value.name.split(' ')
const formData = ref({
  firstName: nameParts[0] || '',
  lastName: nameParts.slice(1).join(' ') || ''
})

const showChangeEmailModal = ref(false)
const showChangePasswordModal = ref(false)

const triggerFileInput = () => {
  fileInput.value?.click()
}

const handleImageUpload = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files && input.files[0]) {
    const file = input.files[0]
    if (file.size > 5 * 1024 * 1024) {
      alert('File size exceeds 5MB limit')
      return
    }
    if (!['image/jpeg', 'image/png'].includes(file.type)) {
      alert('Only JPG/PNG files are allowed')
      return
    }
    const reader = new FileReader()
    reader.onload = (e) => {
      profile.value.imageUrl = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }
}

const deleteImage = () => {
  profile.value.imageUrl = '/icons/baseicons/profil.svg'
}

const logoutAllDevices = () => {
  console.log('Logging out from all devices')
}

const saveChanges = () => {
  profile.value.name = `${formData.value.firstName} ${formData.value.lastName}`.trim()
  console.log('Saving changes', profile.value)
}

const cancelChanges = () => {
  const nameParts = profileData.name.split(' ')
  formData.value = {
    firstName: nameParts[0] || '',
    lastName: nameParts.slice(1).join(' ') || ''
  }
  profile.value.imageUrl = profileData.imageUrl
}
</script>

<style scoped>
button, input, .group {
  transition: all 0.2s ease;
}

input:focus {
  box-shadow: 0 0 0 2px rgba(176, 0, 0, 0.2);
}
</style>
