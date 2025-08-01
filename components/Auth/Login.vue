<template>
  <div class="min-h-screen h-screen grid grid-cols-1 lg:grid-cols-5 font-sans overflow-hidden">
    <!-- Left Column: Login Form (2/5) -->
    <div class="flex flex-col justify-between px-4 sm:px-8 py-12 bg-white border-r border-gray-200 lg:col-span-2 no-scrollbar">
      <div class="flex-grow mb-10">
        <!-- Logo with subtle fade-in -->
        <img 
          src="/icons/baseicons/logo.svg" 
          alt="Kuping DJ Logo" 
          class="h-12 w-auto mb-16 transform transition-all duration-500 opacity-0 animate-fade-in"
          style="animation-delay: 100ms"
        />

        <!-- Login Title with staggered animation -->
        <h1 class="text-3xl font-glancyr-regular text-black uppercase leading-tight tracking-tight mb-10 overflow-hidden">
          <span class="block transform transition-all duration-700 translate-y-10 opacity-0 animate-slide-up" style="animation-delay: 200ms">LOGIN TO</span>
          <span class="block transform transition-all duration-700 translate-y-10 opacity-0 animate-slide-up" style="animation-delay: 300ms">YOUR ACCOUNT</span>
        </h1>

        <!-- Form -->
        <form class="space-y-6" @submit.prevent="handleLogin">
          <!-- Error Message -->
          <div v-if="errorMessage" class="text-sm text-red-600 font-geist-regular p-2 bg-red-50 rounded" role="alert">
            {{ errorMessage }}
          </div>

          <!-- Email Field -->
          <div class="transform transition-all duration-500 opacity-0 animate-fade-in" style="animation-delay: 400ms">
            <label for="email" class="block text-md font-geist-semibold text-black mb-2">
              Email
            </label>
            <div class="relative group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                class="w-full pl-3 py-2 border border-gray-100 shadow-sm bg-gray-50 text-sm placeholder-gray-400 focus:outline-none focus:ring-[#B00000] focus:border-[#B00000] transition-all duration-300 hover:shadow-md focus:shadow-lg"
                v-model="formData.email"
                required
                aria-describedby="email-error"
              />
            </div>
          </div>

          <!-- Password with interactive eye icon -->
          <div class="pb-6 transform transition-all duration-500 opacity-0 animate-fade-in" style="animation-delay: 500ms">
            <label for="password" class="block text-md font-geist-semibold text-black mb-2">
              Password
            </label>
            <div class="relative pb-2 group">
              <input
                :type="showPassword ? 'text' : 'password'"
                id="password"
                name="password"
                placeholder="Enter your password"
                class="w-full pr-10 pl-3 py-2 border border-gray-100 shadow-sm bg-gray-50 text-sm placeholder-gray-400 focus:outline-none focus:ring-[#B00000] focus:border-[#B00000] transition-all duration-300 hover:shadow-md focus:shadow-lg"
                v-model="formData.password"
                required
                aria-describedby="password-error"
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
            <!-- Reset Password -->
            <div class="text-sm font-geist-regular transition-colors duration-300">
              <span class="text-black">Forget your password?</span>
              <NuxtLink to="/reset-password" class="font-geist-medium border-b border-[#B00000] text-[#B00000] hover:text-red-800 transition-colors duration-200">
                Reset Password
              </NuxtLink>
            </div>
          </div>

          <!-- Login Button with enhanced interaction -->
          <div class="w-full transform transition-all duration-500 opacity-0 animate-fade-in" style="animation-delay: 600ms">
            <div class="flex w-full group font-glancyr-light hover:scale-[1.02] transition-all duration-300 active:scale-95">
              <button 
                type="submit"
                class="bg-red-800 text-white py-2 sm:py-2.5 px-4 font-semibold tracking-wide text-sm w-full 
                      transition-all duration-300 group-hover:bg-red-700 text-center shadow-md hover:shadow-lg"
                :disabled="isLoading"
                :aria-busy="isLoading"
              >
                <span v-if="!isLoading" class="inline-block group-active:translate-y-0.5 transition-transform">LOGIN</span>
                <span v-else class="inline-flex items-center gap-2">
                  <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  PROCESSING...
                </span>
              </button>
              <div 
                class="bg-black px-4 py-2 sm:py-2.5 flex items-center justify-center 
                      transition-all duration-300 group-hover:bg-gray-900"
              >
                <img 
                  src="/icons/baseicons/arrow_white.svg" 
                  alt="Arrow"
                  class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-2"
                />
              </div>
            </div>
          </div>
        </form>

        <!-- Register Link -->
        <p class="text-left text-sm text-black mb-4 mt-3 font-geist-regular transform transition-all duration-500 opacity-0 animate-fade-in" style="animation-delay: 700ms">
          Do not have an account?
          <NuxtLink to="/register" class="font-geist-medium border-b border-[#B00000] text-[#B00000] hover:text-red-800 transition-colors duration-200">
            Register Now
          </NuxtLink>
        </p>

        <!-- OR Divider with animation -->
        <div class="relative flex items-center my-6 font-glancyr-regular overflow-hidden">
          <div class="flex-grow border-t border-gray-300 transform transition-all duration-500 scale-x-0 origin-left animate-scale-in" style="animation-delay: 750ms"></div>
          <span class="flex-shrink mx-4 text-gray-300 text-sm transform transition-all duration-500 opacity-0 animate-fade-in" style="animation-delay: 800ms">OR</span>
          <div class="flex-grow border-t border-gray-300 transform transition-all duration-500 scale-x-0 origin-right animate-scale-in" style="animation-delay: 750ms"></div>
        </div>

        <!-- Google Login Button -->
        <div class="w-full transform transition-all duration-500 opacity-0 animate-fade-in" style="animation-delay: 850ms">
          <div class="flex w-full group font-glancyr-light hover:scale-[1.02] transition-all duration-300 active:scale-95">
            <button 
              class="bg-white text-black border border-black py-2 sm:py-2.5 px-4 font-semibold tracking-wide text-sm w-full 
                    transition-all duration-300 text-center shadow-md hover:shadow-lg hover:bg-gray-50"
              @click="handleGoogleLogin"
              :disabled="isLoading"
            >
              <span class="inline-flex items-center gap-2 group-active:translate-y-0.5 transition-transform">
                LOGIN WITH GOOGLE
              </span>
            </button>
            <div 
              class="bg-black px-4 py-2 sm:py-2.5 flex items-center justify-center 
                    transition-all duration-300 group-hover:bg-gray-900"
            >
              <img 
                src="/icons/auth/google.svg" 
                alt="Google Icon"
                class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-active:translate-x-2"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Footer with fade-in -->
      <p class="text-sm font-geist-regular text-gray-400 mt-8 text-left transform transition-all duration-500 opacity-0 animate-fade-in" style="animation-delay: 900ms">
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
        style="animation-delay: 700ms; --move-y: 20px"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { authData } from '~/data/login';

const router = useRouter();
const isLoading = ref(false);
const errorMessage = ref('');
const showPassword = ref(false);

const formData = ref({
  email: '',
  password: '',
});

// Toggle password visibility
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

// Validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Handle login
const handleLogin = async () => {
  isLoading.value = true;
  errorMessage.value = '';

  try {
    // Validate inputs
    if (!formData.value.email || !formData.value.password) {
      errorMessage.value = 'Please fill in all fields.';
      return;
    }
    if (!isValidEmail(formData.value.email)) {
      errorMessage.value = 'Please enter a valid email address.';
      return;
    }

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (
      formData.value.email === authData.email &&
      formData.value.password === authData.password
    ) {
      authData.isLoggedIn = true;
      if (typeof window !== 'undefined') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('email', formData.value.email);
        console.log('localStorage set: isLoggedIn = true, email =', formData.value.email);
      }
      router.push('/');
    } else {
      errorMessage.value = 'Incorrect email or password.';
    }
  } catch (error) {
    errorMessage.value = 'An error occurred. Please try again later.';
    console.error('Login error:', error);
  } finally {
    isLoading.value = false;
  }
};

// Handle Google login (placeholder)
const handleGoogleLogin = () => {
  isLoading.value = true;
  errorMessage.value = '';
  setTimeout(() => {
    errorMessage.value = 'Google login is not implemented yet.';
    isLoading.value = false;
  }, 500);
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
@keyframes scale-in {
  to { transform: scaleX(1); }
}
@keyframes fade-in-move {
  to { transform: translateY(calc(-1 * var(--move-y, 0px))); opacity: 1; }
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
.animate-scale-in {
  animation: scale-in 0.6s forwards ease-out;
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

/* Reduced motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in,
  .animate-slide-up,
  .animate-scale-in,
  .animate-fade-in-move,
  .animate-fade-in-spin {
    animation: none;
    opacity: 1;
    transform: none;
  }
}

/* Optimize animations for performance */
.animate-fade-in,
.animate-slide-up,
.animate-scale-in,
.animate-fade-in-move,
.animate-fade-in-spin {
  will-change: transform, opacity;
}
</style>