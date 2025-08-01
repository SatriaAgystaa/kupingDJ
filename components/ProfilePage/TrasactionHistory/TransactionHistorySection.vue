<template>
  <div class="p-4">
    <!-- Transaction Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <TransactionCard 
        v-for="transaction in displayedTransactions" 
        :key="transaction.id"
        :transaction="transaction"
        @view-details="viewDetails(transaction)"
      />
    </div>

    <!-- Pagination -->
    <div class="flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-10 gap-4 font-geist-regular">
      <div class="text-sm text-gray-600 font-geist-regular">
        Showing {{ startItem }}-{{ endItem }} of {{ filteredTransactions.length }} items
      </div>
      <div class="flex gap-2">
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous page"
        >
          <img src="/icons/baseicons/bulk_left.svg" alt="Previous" class="w-4 h-4" />
        </button>
        <button
          v-for="page in totalPages"
          :key="page"
          @click="currentPage = page"
          :class="[
            'px-3 py-1 border',
            currentPage === page
              ? 'bg-[#A10501] text-white border-[#A10501]'
              : 'border-gray-300 hover:bg-gray-100'
          ]"
        >
          {{ page }}
        </button>
        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next page"
        >
          <img src="/icons/baseicons/bulk_right.svg" alt="Next" class="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { transactions } from '~/data/transaction'
import TransactionCard from '~/components/ProfilePage/TrasactionHistory/TransactionCard/TransactionCard.vue'

const props = defineProps<{
  searchQuery: string
}>()

const currentPage = ref(1)
const itemsPerPage = 6 // Adjusted for 2-column layout (3 rows)

const filteredTransactions = computed(() => {
  if (!props.searchQuery) return transactions
  
  return transactions.filter(transaction => 
    transaction.id.toLowerCase().includes(props.searchQuery.toLowerCase()) ||
    transaction.status.toLowerCase().includes(props.searchQuery.toLowerCase()) ||
    transaction.items.some(item => 
      item.artist.toLowerCase().includes(props.searchQuery.toLowerCase()) ||
      item.title.toLowerCase().includes(props.searchQuery.toLowerCase())
    )
  )
})

// Pagination logic
const totalPages = computed(() => Math.ceil(filteredTransactions.value.length / itemsPerPage))

const displayedTransactions = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredTransactions.value.slice(start, end)
})

const startItem = computed(() => (currentPage.value - 1) * itemsPerPage + 1)
const endItem = computed(() => Math.min(currentPage.value * itemsPerPage, filteredTransactions.value.length))

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const viewDetails = (transaction: any) => {
  // Logic untuk menampilkan detail transaksi
  console.log('View details:', transaction)
}
</script>

<style scoped>
/* Responsive adjustments for very small screens */
@media (max-width: 360px) {
  /* Stack pagination buttons on small screens */
  .flex-col {
    align-items: stretch;
  }
  
  .flex-row {
    flex-wrap: wrap;
  }
}
</style>