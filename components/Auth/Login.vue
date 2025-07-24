<template>
  <div class="min-h-screen h-screen grid grid-cols-1 lg:grid-cols-5 font-sans overflow-hidden">
    <!-- Left Column: Login Form (2/5) -->
    <div class="flex flex-col justify-between px-8 py-12 bg-white border-r border-gray-200 lg:col-span-2 no-scrollbar">
      <div class="flex-grow mb-10">
        <!-- Logo with subtle fade-in -->
        <img 
          src="/icons/baseicons/logo.svg" 
          alt="Kuping DJ Logo" 
          class="h-12 w-auto mb-24 transform transition-all duration-500 opacity-0 animate-fade-in"
          style="animation-delay: 100ms"
        />

        <!-- Login Title with staggered animation -->
        <h1 class="text-3xl font-glancyr-regular text-black uppercase leading-tight tracking-tight mb-10 overflow-hidden">
          <span class="block transform transition-all duration-700 translate-y-10 opacity-0 animate-slide-up" style="animation-delay: 200ms">LOGIN TO</span>
          <span class="block transform transition-all duration-700 translate-y-10 opacity-0 animate-slide-up" style="animation-delay: 300ms">YOUR ACCOUNT</span>
        </h1>

        <!-- Form -->
        <form class="space-y-6">
          <!-- Facebook Username with input focus animation -->
          <div class="transform transition-all duration-500 opacity-0 animate-fade-in" style="animation-delay: 400ms">
            <label for="facebook-username" class="block text-md font-geist-semibold text-black mb-2">
              Facebook Username
            </label>
            <div class="relative group">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-transform duration-300 group-focus-within:-translate-y-1">
                <img src="/icons/auth/facebook.svg" alt="Facebook icon" class="h-5 w-5 transition-transform duration-300 group-focus-within:scale-110" />
              </div>
              <input
                type="text"
                id="facebook-username"
                name="facebook-username"
                placeholder="Enter your Facebook username"
                class="w-full pl-10 pr-3 py-2 border border-gray-100 shadow-sm bg-gray-50 text-sm placeholder-gray-400 focus:outline-none focus:ring-[#B00000] focus:border-[#B00000] transition-all duration-300 hover:shadow-md focus:shadow-lg"
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
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                class="w-full pr-10 pl-3 py-2 border border-gray-100 shadow-sm bg-gray-50 text-sm placeholder-gray-400 focus:outline-none focus:ring-[#B00000] focus:border-[#B00000] transition-all duration-300 hover:shadow-md focus:shadow-lg"
              />
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer group">
                <img 
                  src="/icons/auth/hide.svg" 
                  alt="Show password icon" 
                  class="h-5 w-5 transition-transform duration-300 hover:scale-110 active:scale-95"
                  @click="togglePasswordVisibility"
                />
              </div>
            </div>
            <!-- Reset Password -->
            <div class="text-sm font-geist-regular transition-colors duration-300">
              <span class="text-black">Forget your password?</span>
              <a href="#" class="font-geist-medium border-b border-[#B00000] text-[#B00000] hover:text-red-800 transition-colors duration-200">
                Reset Password
              </a>
            </div>
          </div>

          <!-- Login Button with enhanced interaction -->
          <div class="w-full transform transition-all duration-500 opacity-0 animate-fade-in" style="animation-delay: 600ms">
            <div class="flex w-full group font-glancyr-light hover:scale-[1.02] transition-all duration-300 active:scale-95">
              <button 
                class="bg-red-800 text-white py-2 sm:py-2.5 px-4 font-semibold tracking-wide text-sm w-full 
                      transition-all duration-300 group-hover:bg-red-700 text-center shadow-md hover:shadow-lg"
              >
                <span class="inline-block group-active:translate-y-0.5 transition-transform">LOGIN</span>
              </button>
              <div 
                class="bg-black px-4 py-2 sm:py-2.5 flex items-center justify-center 
                      transition-all duration-300 group-hover:bg-gray-900"
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

        <!-- Register Link -->
        <p class="text-left text-sm text-black mb-4 mt-3 font-geist-regular transform transition-all duration-500 opacity-0 animate-fade-in" style="animation-delay: 700ms">
          Do not have account?
          <a href="#" class="font-geist-medium border-b border-[#B00000] text-[#B00000] hover:text-red-800 transition-colors duration-200">
            Register Now
          </a>
        </p>

        <!-- OR Divider with animation -->
        <div class="relative flex items-center my-6 font-glancyr-regular overflow-hidden">
          <div class="flex-grow border-t border-gray-300 transform transition-all duration-500 scale-x-0 origin-left animate-scale-in" style="animation-delay: 750ms"></div>
          <span class="flex-shrink mx-4 text-gray-300 text-sm transform transition-all duration-500 opacity-0 animate-fade-in" style="animation-delay: 800ms">OR</span>
          <div class="flex-grow border-t border-gray-300 transform transition-all duration-500 scale-x-0 origin-right animate-scale-in" style="animation-delay: 750ms"></div>
        </div>

        <!-- Facebook Login Button -->
        <div class="w-full transform transition-all duration-500 opacity-0 animate-fade-in" style="animation-delay: 850ms">
          <div class="flex w-full group font-glancyr-light hover:scale-[1.02] transition-all duration-300 active:scale-95">
            <button 
              class="bg-white text-black border border-black py-2 sm:py-2.5 px-4 font-semibold tracking-wide text-sm w-full 
                    transition-all duration-300 text-center shadow-md hover:shadow-lg hover:bg-gray-50"
            >
              <span class="inline-flex items-center gap-2 group-active:translate-y-0.5 transition-transform">
                <img src="/icons/auth/facebook.svg" alt="Facebook" class="w-4 h-4" />
                LOGIN BY FACEBOOK
              </span>
            </button>
            <div 
              class="bg-black px-4 py-2 sm:py-2.5 flex items-center justify-center 
                    transition-all duration-300 group-hover:bg-gray-900"
            >
              <img 
                src="/icons/baseicons/arrow_white.svg" 
                alt="arrow" 
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
        style="animation-delay: 700ms"
      />
    </div>
  </div>
</template>

<script setup>
// Toggle password visibility
const togglePasswordVisibility = () => {
  const passwordInput = document.getElementById('password');
  const icon = document.querySelector('[alt="Show password icon"]');
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    icon.src = '/icons/auth/hide.svg';
  } else {
    passwordInput.type = 'password';
    icon.src = '/icons/auth/hide.svg';
  }
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
</style>