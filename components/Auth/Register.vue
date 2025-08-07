<template>
  <div class="min-h-screen h-screen grid grid-cols-1 lg:grid-cols-5 font-sans overflow-hidden">
    <!-- Left Column: Register Form (2/5) -->
    <div class="flex flex-col justify-between px-8 py-12 bg-white border-r border-gray-200 lg:col-span-2 no-scrollbar">
      <div class="flex-grow mb-10">
        <!-- Logo with fade-in -->
        <img 
          src="/icons/baseicons/logo.svg" 
          alt="Kuping DJ Logo" 
          class="h-12 w-auto mb-16 transform transition-all duration-500 opacity-0 animate-fade-in"
          style="animation-delay: 100ms"
        />

        <!-- Register Title with staggered animation -->
        <h1 class="text-3xl font-glancyr-regular text-black uppercase leading-tight tracking-tight mb-10 overflow-hidden">
          <span class="block transform transition-all duration-700 translate-y-10 opacity-0 animate-slide-up" style="animation-delay: 200ms">REGISTER ACCOUNT</span>
        </h1>

        <!-- Form Content -->
        <div class="flex-1">
          <!-- Register Form -->
          <form class="space-y-6" @submit.prevent="handleSubmit">
            <!-- Email with animation -->
            <div class="transform transition-all duration-500 opacity-0 animate-fade-in" style="animation-delay: 600ms">
              <label class="block text-md font-geist-semibold text-black mb-2">Email</label>
              <input
                type="email"
                v-model="form.email"
                placeholder="Enter your email"
                class="w-full px-3 py-2 border border-gray-100 shadow-sm bg-gray-50 text-sm placeholder-gray-400 focus:outline-none focus:ring-[#B00000] focus:border-[#B00000] transition-all duration-300 hover:shadow-md focus:shadow-lg"
                required
              />
            </div>

            <!-- Password with animation -->
            <div class="transform transition-all duration-500 opacity-0 animate-fade-in" style="animation-delay: 700ms">
              <label class="block text-md font-geist-semibold text-black mb-2">Password</label>
              <div class="relative group">
                <input
                  :type="showPassword ? 'text' : 'password'"
                  id="password"
                  v-model="form.password"
                  placeholder="Enter your password"
                  class="w-full pr-10 pl-3 py-2 border border-gray-100 shadow-sm bg-gray-50 text-sm placeholder-gray-400 focus:outline-none focus:ring-[#B00000] focus:border-[#B00000] transition-all duration-300 hover:shadow-md focus:shadow-lg"
                  required
                />
                <button
                  type="button"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer group"
                  @click="togglePasswordVisibility"
                  aria-label="Toggle password visibility"
                >
                  <img 
                    :src="showPassword ? '/icons/auth/show.svg' : '/icons/auth/hide.svg'" 
                    alt="Toggle password visibility"
                    class="h-5 w-5 transition-transform duration-300 hover:scale-110 active:scale-95"
                  />
                </button>
              </div>
            </div>

            <!-- Confirm Password with animation -->
            <div class="pb-6 transform transition-all duration-500 opacity-0 animate-fade-in" style="animation-delay: 800ms">
              <label class="block text-md font-geist-semibold text-black mb-2">Confirm Password</label>
              <div class="relative group">
                <input
                  :type="showConfirmPassword ? 'text' : 'password'"
                  id="confirm-password"
                  v-model="form.confirmPassword"
                  placeholder="Re-Enter your password"
                  class="w-full pr-10 pl-3 py-2 border border-gray-100 shadow-sm bg-gray-50 text-sm placeholder-gray-400 focus:outline-none focus:ring-[#B00000] focus:border-[#B00000] transition-all duration-300 hover:shadow-md focus:shadow-lg"
                  required
                />
                <button
                  type="button"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer group"
                  @click="toggleConfirmPasswordVisibility"
                  aria-label="Toggle password visibility"
                >
                  <img 
                    :src="showConfirmPassword ? '/icons/auth/show.svg' : '/icons/auth/hide.svg'" 
                    alt="Toggle password visibility"
                    class="h-5 w-5 transition-transform duration-300 hover:scale-110 active:scale-95"
                  />
                </button>
              </div>
            </div>

            <!-- Register Button with enhanced interaction -->
            <div class="w-full transform transition-all duration-500 opacity-0 animate-fade-in" style="animation-delay: 900ms">
              <div class="flex w-full group font-glancyr-light hover:scale-[1.02] transition-all duration-300 active:scale-[0.98]">
                <button 
                  type="submit"
                  class="flex-1 bg-red-800 text-white py-2 px-4 font-semibold tracking-wide text-sm shadow-md hover:shadow-lg transition-all duration-300 group-hover:bg-red-700"
                  :disabled="isSubmitting"
                >
                  <span v-if="!isSubmitting" class="inline-block group-active:translate-y-0.5 transition-transform">REGISTER</span>
                  <span v-else class="inline-flex items-center gap-2">
                    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    PROCESSING...
                  </span>
                </button>
                <div 
                  class="bg-black px-4 py-2 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-900"
                >
                  <img 
                    src="/icons/baseicons/arrow_white.svg" 
                    alt="arrow" 
                    class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-2"
                  />
                </div>
              </div>
            </div>
          </form>

          <!-- Login Link with animation -->
          <p class="text-left text-sm text-black mt-3 font-geist-regular transform transition-all duration-500 opacity-0 animate-fade-in" style="animation-delay: 950ms">
            Have account?
            <NuxtLink to="/login" class="font-geist-medium border-b border-[#B00000] text-[#B00000] hover:text-red-800 transition-colors duration-200">
              Login now
            </NuxtLink>
          </p>
        </div>
      </div>

      <!-- Footer with fade-in -->
      <p class="text-sm font-geist-regular text-gray-400 mt-8 text-left transform transition-all duration-500 opacity-0 animate-fade-in" style="animation-delay: 1000ms">
        © 2023 Copyright by Kuping DJ. All rights reserved.
      </p>
    </div>

    <!-- Right Column: Animated Background -->
    <div class="hidden lg:block lg:col-span-3 relative bg-gradient-to-br from-white to-red-50 overflow-hidden">
      <h1 class="absolute top-12 left-12 text-5xl lg:text-7xl font-glancyr-regular text-black uppercase leading-tight tracking-wide z-20 overflow-hidden">
        <span class="block transform transition-all duration-1000 translate-y-20 opacity-0 animate-slide-up" style="animation-delay: 200ms">DISCOVER THE</span>
        <span class="block transform transition-all duration-1000 translate-y-20 opacity-0 animate-slide-up" style="animation-delay: 400ms">ULTIMATE</span>
        <span class="block transform transition-all duration-1000 translate-y-20 opacity-0 animate-slide-up" style="animation-delay: 600ms">DJ MARKETPLACE EXPERIENCE!</span>
      </h1>
      
      <!-- Background Images with parallax effect -->
      <img
        src="/icons/auth/line.svg"
        alt="Line"
        class="absolute bottom-0 right-0 w-[1200px] h-[850px] pointer-events-none z-10 transform transition-transform duration-1000 ease-out opacity-0 animate-fade-in-move"
        style="animation-delay: 300ms; --move-y: 50px"
      />
      <img
        src="/icons/auth/effect.svg"
        alt="Effect"
        class="absolute bottom-0 right-0 w-[700px] h-[800px] pointer-events-none z-10 transform transition-transform duration-1000 ease-out opacity-0 animate-fade-in-move"
        style="animation-delay: 500ms; --move-y: 30px"
      />
      <img
        src="/icons/auth/vinyl.svg"
        alt="Vinyl"
        class="absolute bottom-0 right-0 w-[600px] h-auto pointer-events-none z-10 transform transition-all duration-1000 ease-out opacity-0 animate-fade-in-spin"
        style="animation-delay: 700ms"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const router = useRouter();

const form = ref({
  email: '',
  password: '',
  confirmPassword: ''
});

const isSubmitting = ref(false);

// Password visibility states
const showPassword = ref(false);
const showConfirmPassword = ref(false);

// Toggle password visibility functions
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const toggleConfirmPasswordVisibility = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};

const handleSubmit = async () => {
  // Simple validation
  if (!form.value.email || !form.value.password || !form.value.confirmPassword) {
    return;
  }

  if (form.value.password !== form.value.confirmPassword) {
    return;
  }

  isSubmitting.value = true;
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Navigate to verification page
  router.push('/register-verification');
  
  isSubmitting.value = false;
};
</script>

<style scoped>
/* Scrollbar hiding */
.no-scrollbar {
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Custom animations */
@keyframes fade-in {
  to { opacity: 1; }
}
@keyframes slide-up {
  to { transform: translateY(0); opacity: 1; }
}
@keyframes fade-in-move {
  to { transform: translateY(0); opacity: 1; }
}
@keyframes fade-in-spin {
  0% { transform: translateY(var(--move-y, 20px)) rotate(-180deg); opacity: 0; }
  100% { transform: translateY(0) rotate(0); opacity: 1; }
}

.animate-fade-in {
  animation: fade-in 0.6s forwards ease-out;
}
.animate-slide-up {
  animation: slide-up 0.8s forwards cubic-bezier(0.22, 1, 0.36, 1);
}
.animate-fade-in-move {
  animation: fade-in-move 1s forwards cubic-bezier(0.22, 1, 0.36, 1);
}
.animate-fade-in-spin {
  animation: fade-in-spin 1.2s forwards cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Hover effects */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

/* Spinner animation */
.animate-spin {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>