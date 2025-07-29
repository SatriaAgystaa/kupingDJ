<!-- ~/components/TransactionHistorySection.vue -->
<template>
  <div class="p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <TransactionCard 
        v-for="transaction in filteredTransactions" 
        :key="transaction.id"
        :transaction="transaction"
        @view-details="viewDetails(transaction)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { transactions } from '~/data/transaction'
import TransactionCard from '~/components/ProfilePage/TrasactionHistory/TransactionCard/TransactionCard.vue'

const props = defineProps<{
  searchQuery: string
}>()

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

const viewDetails = (transaction: any) => {
  // Logic untuk menampilkan detail transaksi
  console.log('View details:', transaction)
}
</script>