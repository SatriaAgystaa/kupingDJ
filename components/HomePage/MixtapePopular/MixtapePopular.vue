<template>
  <section class="bg-[#f7f7f7] mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10 ">
    <!-- Section Title & Filter -->
    <div class="flex flex-col md:flex-col lg:flex-row justify-between items-start md:items-start mb-4 sm:mb-6 md:mb-8 lg:mb-10">
      <h2 class="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 xs:mb-3 sm:mb-4 md:mb-4 lg:mb-0 font-glancyr-medium tracking-tight">
        MOST POPULAR MIXTAPE
      </h2>
      <div class="flex mt-2 xs:mt-3 sm:mt-4 md:mt-0">
        <button
          v-for="btn in filters"
          :key="btn"
          @click="activeFilter = btn"
          :class="[ 
            'uppercase border text-xs xs:text-xs sm:text-sm md:text-base font-glancyr-regular px-3 xs:px-4 sm:px-5 py-1.5 xs:py-2 sm:py-2.5 transition-colors duration-150',
            activeFilter === btn
              ? 'bg-black text-white border-black'
              : 'text-black border-black hover:bg-gray-100'
          ]"
        >
          {{ btn }}
        </button>
      </div>
    </div>

    <!-- Mixtape Grid -->
    <div class="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 xs:gap-x-4 sm:gap-x-5 md:gap-x-6 lg:gap-x-8 gap-y-4 xs:gap-y-6 sm:gap-y-8 md:gap-y-10 lg:gap-y-12">
      <MixtapeCard
        v-for="mixtape in mixtapes"
        :key="mixtape.id"
        :artist="mixtape.artist"
        :artistImage="mixtape.artistImage"
        :title="mixtape.title"
        :price="mixtape.price"
        :image="mixtape.image"
        :likes="mixtape.likes"
        :downloads="mixtape.downloads"
        :rating="mixtape.rating"
        :bpm="mixtape.bpm"
        :date="mixtape.date"
        :isFavorited="mixtape.isFavorited"
        @play="handlePlay(mixtape.id)"
        class="w-full"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { mixtapes } from '@/data/mixtapesPopular'
import MixtapeCard from './MixtapeCard.vue'

const filters = ['Top Purchased', 'Highest Rated', 'Most Recent']
const activeFilter = ref('Top Purchased')

const currentlyPlayingId = ref(null)

const handlePlay = (id) => {
  if (currentlyPlayingId.value === id) {
    currentlyPlayingId.value = null
  } else {
    currentlyPlayingId.value = id
  }
  
  // Update all mixtapes to set isPlaying state
  mixtapes.forEach(mixtape => {
    mixtape.isPlaying = mixtape.id === currentlyPlayingId.value
  })
}
</script>

<style scoped>
/* Responsive adjustments for very small screens */
@media (max-width: 400px) {
  .grid {
    gap-x: 0.75rem;
    gap-y: 1rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  button {
    padding: 0.5rem 0.75rem;
    font-size: 0.65rem;
  }
}

/* Extra small devices (320px and below) */
@media (max-width: 320px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  h2 {
    font-size: 1.15rem;
    margin-bottom: 0.5rem;
  }

  .flex {
    gap: 0.5rem;
  }

  button {
    padding: 0.4rem 0.6rem;
    font-size: 0.6rem;
  }
}

/* Tablet portrait mode */
@media (min-width: 768px) and (max-width: 1023px) and (orientation: portrait) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Tablet landscape mode */
@media (min-width: 768px) and (max-width: 1023px) and (orientation: landscape) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Ensure filter buttons don't wrap on medium screens */
@media (min-width: 640px) and (max-width: 767px) {
  .flex {
    flex-wrap: nowrap;
    gap: 0.75rem;
  }
}

/* Tab button styling */
button {
  border-width: 1px;
  letter-spacing: 0.05em;
  line-height: 1.25;
  white-space: nowrap;
}

/* Active tab styling */
button:active {
  transform: none;
}
</style>