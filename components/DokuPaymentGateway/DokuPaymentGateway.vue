<template>
  <div class="container mx-auto p-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 px-12 py-6">
      <!-- Left: Form Section -->
      <div class="bg-white p-6 rounded">
        <h2 class="text-lg font-semibold mb-4">Demo Site - Your Website</h2>
        <form class="flex flex-col gap-4 border border-gray-200 p-8 rounded-lg">
          <!-- Name -->
          <div>
            <label class="block text-sm text-gray-700 mb-3">Name</label>
            <input type="text" class="w-full border border-gray-300 rounded px-3 py-2 text-sm" value="Anton Budiman" />
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm text-gray-700 mb-3">Email</label>
            <input type="email" class="w-full border border-gray-300 rounded px-3 py-2 text-sm" value="anton@budiman.com" />
          </div>

          <!-- Phone -->
          <div>
            <label class="block text-sm text-gray-700 mb-3">Phone Number</label>
            <input type="text" class="w-full border border-gray-300 rounded px-3 py-2 text-sm" value="628111111111" />
          </div>

          <!-- Address -->
          <div>
            <label class="block text-sm text-gray-700 mb-3">Address</label>
            <input type="text" class="w-full border border-gray-300 rounded px-3 py-2 text-sm" value="Menara Mulia Lantai 8" />
          </div>

          <!-- Country, City, Postal Code -->
          <div class="flex gap-3">
            <div class="flex-1">
              <label class="block text-sm text-gray-700 mb-3">Country</label>
              <input type="text" class="w-full border border-gray-300 rounded px-3 py-2 text-sm" value="Indonesia" />
            </div>
            <div class="flex-1">
              <label class="block text-sm text-gray-700 mb-3">City</label>
              <input type="text" class="w-full border border-gray-300 rounded px-3 py-2 text-sm" value="Jakarta" />
            </div>
            <div class="flex-1">
              <label class="block text-sm text-gray-700 mb-3">Postal Code</label>
              <input type="text" class="w-full border border-gray-300 rounded px-3 py-2 text-sm" value="12930" />
            </div>
          </div>

          <!-- Purchase Button -->
          <button class="w-full bg-red-600 text-white py-2 rounded mt-4 font-semibold hover:bg-red-700">
            PURCHASE
          </button>
        </form>
      </div>

      <!-- Right: Cart Section -->
      <div class="bg-white p-6 rounded">
        <h3 class="text-lg font-semibold mb-3">Cart</h3>
        <div class="flex flex-col gap-3">
          <!-- Cart Item -->
          <div class="flex gap-3 border border-gray-200 rounded p-3 items-start">
            <img src="/icons/mixtapes/cartel.jpg" alt="product" class="w-16 h-16 rounded object-cover" />
            <div class="flex flex-col flex-1">
              <p class="font-semibold text-xl">DOKU Basic T-Shirt</p>
              <p class="text-base text-gray-500">Size: L | Color: Black</p>
            </div>
            <div class="flex flex-col items-end">
              <div class="flex items-center border border-gray-300 rounded">
                <span class="px-2 text-sm text-gray-600">IDR</span>
                <input
                  type="text"
                  value="120000"
                  class="w-20 border-0 px-2 py-1 text-sm focus:ring-0 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <!-- Bottom Button -->
          <button class="w-full border border-gray-300 rounded py-2 flex justify-center items-center hover:bg-gray-100">
            <span class="text-sm">⚙</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Tidak ada data dinamis untuk sementara, semua dummy static
</script>
