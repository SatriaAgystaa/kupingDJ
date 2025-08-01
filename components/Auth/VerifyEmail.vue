<template>
  <div class="min-h-screen h-screen grid grid-cols-1 lg:grid-cols-5 font-sans overflow-hidden">
    <!-- Left Column: Verify Email Form (2/5) -->
    <div class="flex flex-col justify-between px-8 py-12 bg-white border-r border-gray-200 lg:col-span-2 no-scrollbar">
      <div class="flex-grow mb-10">
        <!-- Logo with fade-in -->
        <img 
          src="/icons/baseicons/logo.svg" 
          alt="Kuping DJ Logo" 
          class="h-12 w-auto mb-16 transform transition-all duration-500 opacity-0 animate-fade-in"
          style="animation-delay: 100ms"
        />

        <!-- Verify Email Title with staggered animation -->
        <h1 class="text-3xl font-glancyr-regular text-black uppercase leading-tight tracking-tight mb-6 overflow-hidden">
          <span class="block transform transition-all duration-700 translate-y-10 opacity-0 animate-slide-up" style="animation-delay: 200ms">VERIFY YOUR EMAIL</span>
        </h1>

        <!-- Description text -->
        <p class="text-md font-geist-regular text-gray-600 mb-10 transform transition-all duration-500 opacity-0 animate-fade-in" style="animation-delay: 400ms">
          We've sent a 6-digit verification code to your current email address.
        </p>

        <!-- Form Content -->
        <div class="flex-1">
          <!-- Verification Form -->
          <form class="space-y-6" @submit.prevent="submitCode">
            <!-- OTP Input with animation -->
            <div class="transform transition-all duration-500 opacity-0 animate-fade-in" style="animation-delay: 600ms">
              <label class="block text-md font-geist-semibold text-black mb-2">Verification Code</label>
              <div class="flex justify-between space-x-2">
                <input
                  v-for="(digit, index) in otp"
                  :key="index"
                  v-model="otp[index]"
                  type="text"
                  maxlength="1"
                  @input="handleOtpInput(index, $event)"
                  @keydown.delete="handleOtpDelete(index, $event)"
                  @focus="handleOtpFocus(index)"
                  class="w-full h-14 text-center font-glancyr-regular px-3 py-2 border border-gray-100 shadow-sm bg-gray-50 text-lg placeholder-gray-400 focus:outline-none focus:ring-[#B00000] focus:border-[#B00000] transition-all duration-300 hover:shadow-md focus:shadow-lg"
                />
              </div>
            </div>

            <!-- Verify Button with enhanced interaction -->
            <div class="w-full transform transition-all duration-500 opacity-0 animate-fade-in" style="animation-delay: 700ms">
              <div class="flex w-full group font-glancyr-light hover:scale-[1.02] transition-all duration-300 active:scale-[0.98]">
                <button 
                  type="submit"
                  class="flex-1 bg-red-800 text-white py-2 px-4 font-semibold tracking-wide text-sm shadow-md hover:shadow-lg transition-all duration-300 group-hover:bg-red-700"
                >
                  <span class="inline-block group-active:translate-y-0.5 transition-transform">VERIFY CODE</span>
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

          <!-- Resend Code Link with animation -->
          <p class="text-left text-sm text-black mt-3 font-geist-regular transform transition-all duration-500 opacity-0 animate-fade-in" style="animation-delay: 800ms">
            Didn't receive a code?
            <a 
              href="#" 
              class="font-geist-medium border-b border-[#B00000] text-[#B00000] hover:text-red-800 transition-colors duration-200"
              @click.prevent="resendCode"
            >
              Resend code
            </a>
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

const otp = ref(Array(6).fill(''));

const handleOtpInput = (index, event) => {
  // Only allow numbers
  const value = event.target.value.replace(/\D/g, '');
  otp.value[index] = value;
  
  // Auto focus to next input
  if (value && index < 5) {
    document.querySelectorAll('input[type="text"]')[index + 1].focus();
  }
};

const handleOtpDelete = (index, event) => {
  if (event.key === 'Backspace' && !otp.value[index] && index > 0) {
    document.querySelectorAll('input[type="text"]')[index - 1].focus();
  }
};

const handleOtpFocus = (index) => {
  // Select the content when focused
  document.querySelectorAll('input[type="text"]')[index].select();
};

const submitCode = () => {
  const code = otp.value.join('');
  if (code.length !== 6) {
    alert('Please enter the full 6-digit code');
    return;
  }
  console.log('Verification code submitted:', code);
  // Add your verification logic here
};

const resendCode = () => {
  console.log('Resending verification code...');
  // Add your resend logic here
  otp.value = Array(6).fill('');
  document.querySelectorAll('input[type="text"]')[0].focus();
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

/* OTP input styling */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="text"] {
  -moz-appearance: textfield;
}
</style>