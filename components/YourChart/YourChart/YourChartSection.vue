<template>
  <div class="mx-auto py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 relative z-10">
    <!-- Your Chart Title -->
    <h2 class="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-glancyr-medium tracking-wide mb-3 sm:mb-4 md:mb-6 lg:mb-8">
      YOUR CHART
    </h2>
    
    <div class="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
      <!-- Main Content -->
      <div class="flex-1 bg-white shadow-sm border border-gray-200">
        <!-- Header -->
        <div class="p-3 sm:p-4 flex justify-between items-center">
          <div class="flex items-center gap-3 sm:gap-4">
            <label class="custom-checkbox">
              <input 
                type="checkbox" 
                v-model="selectAll"
                class="opacity-0 absolute"
              >
              <span class="checkmark"></span>
              <h2 class="text-base sm:text-lg font-geist-semibold ml-2">Select All</h2>
            </label>
          </div>
          <!-- Delete Button -->
          <div class="flex items-center">
            <button 
              @click="deleteSelected"
              class="text-gray-400 hover:text-[#A10501] transition-colors flex items-center gap-2 sm:gap-2"
              aria-label="Delete item"
            >
              <div class="text-base sm:text-lg font-geist-semibold text-[#A10501]">
                Delete Selected
              </div>
              <img 
                src="/icons/baseicons/trash_red.svg" 
                alt="Delete" 
                class="w-5 h-5 sm:w-6 sm:h-6"
              >
            </button>
          </div>
        </div>
        
        <!-- Mixtapes Section -->
        <div class="p-3 sm:p-4">
          <div class="flex items-center mb-3 sm:mb-4">
            <h3 class="text-base sm:text-lg font-glancyr-medium pr-3 sm:pr-4">MIXTAPE</h3>
            <div class="flex-grow border-t border-gray-200"></div>
          </div>
          <div class="space-y-2">
            <MixtapeCard
              v-for="mixtape in mixtapes"
              :key="mixtape.id"
              :mixtape="mixtape"
              :selected="selectedMixtapes.includes(mixtape.id)"
              @update:selected="toggleMixtapeSelection(mixtape.id, $event)"
            />
          </div>
        </div>
        
        <!-- Albums Section -->
        <div class="p-3 sm:p-4">
          <div class="flex items-center mb-3 sm:mb-4">
            <h3 class="text-base sm:text-lg font-glancyr-medium pr-3 sm:pr-4">ALBUM</h3>
            <div class="flex-grow border-t border-gray-200"></div>
          </div>
          <div class="space-y-2">
            <AlbumCard
              v-for="album in albums"
              :key="album.id"
              :album="album"
              :selected="selectedAlbums.includes(album.id)"
              @update:selected="toggleAlbumSelection(album.id, $event)"
            />
            
            <!-- Partial Tracks -->
            <div v-for="album in albums" :key="'partial-'+album.id">
              <PartialCard
                v-for="(track, index) in album.tracks"
                :key="'track-'+album.id+'-'+index"
                :track="track"
                :album="album"
                :selected="selectedTracks.includes(`${album.id}-${index}`)"
                @update:selected="toggleTrackSelection(album.id, index, $event)"
              />
            </div>
          </div>
        </div>
      </div>
      
      <!-- Transaction Summary - Now sticky on desktop/tablet -->
      <div class="w-full lg:w-96 mt-6 lg:mt-0 relative sticky lg:top-24 z-0 lg:z-auto">
        <div class="sticky lg:top-24">
          <TransactionCard
            :total-items="totalSelectedItems"
            :total-price="totalSelectedPrice"
            email="angganaputra@gmail.com"
            @checkout="handleCheckout"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { mixtapes } from '~/data/mixtapes'
import { albumsData as albums } from '~/data/albums'
import AlbumCard from '../Album/AlbumCard.vue'
import MixtapeCard from '../Mixtape/MixtapeCard.vue'
import PartialCard from '../Partial/PartialCard.vue'
import TransactionCard from '../Transaction/TransactionCard.vue'

const selectedMixtapes = ref<number[]>([])
const selectedAlbums = ref<number[]>([])
const selectedTracks = ref<string[]>([])

const selectAll = computed({
  get() {
    return selectedMixtapes.value.length === mixtapes.length &&
           selectedAlbums.value.length === albums.length &&
           selectedTracks.value.length === albums.reduce((acc, album) => acc + album.tracks.length, 0)
  },
  set(value: boolean) {
    if (value) {
      selectedMixtapes.value = mixtapes.map(m => m.id)
      selectedAlbums.value = albums.map(a => a.id)
      selectedTracks.value = albums.flatMap((album, albumIndex) => 
        album.tracks.map((_, trackIndex) => `${album.id}-${trackIndex}`)
      )
    } else {
      selectedMixtapes.value = []
      selectedAlbums.value = []
      selectedTracks.value = []
    }
  }
})

const totalSelectedItems = computed(() => {
  return selectedMixtapes.value.length + 
         selectedAlbums.value.length + 
         selectedTracks.value.length
})

const totalSelectedPrice = computed(() => {
  const mixtapeTotal = mixtapes
    .filter(m => selectedMixtapes.value.includes(m.id))
    .reduce((acc, m) => acc + parseInt(m.price.replace(/\D/g, '')), 0)
  
  const albumTotal = albums
    .filter(a => selectedAlbums.value.includes(a.id))
    .reduce((acc, a) => acc + a.price, 0)
  
  const trackTotal = selectedTracks.value
    .map(id => {
      const [albumId, trackIndex] = id.split('-')
      const album = albums.find(a => a.id === parseInt(albumId))
      if (!album) return 0
      const track = album.tracks[parseInt(trackIndex)]
      return track.price.startsWith('Rp.') 
        ? parseInt(track.price.replace(/\D/g, '')) 
        : 0
    })
    .reduce((acc, price) => acc + price, 0)
  
  return mixtapeTotal + albumTotal + trackTotal
})

function toggleMixtapeSelection(id: number, selected: boolean) {
  if (selected) {
    selectedMixtapes.value.push(id)
  } else {
    selectedMixtapes.value = selectedMixtapes.value.filter(i => i !== id)
  }
}

function toggleAlbumSelection(id: number, selected: boolean) {
  if (selected) {
    selectedAlbums.value.push(id)
  } else {
    selectedAlbums.value = selectedAlbums.value.filter(i => i !== id)
  }
}

function toggleTrackSelection(albumId: number, trackIndex: number, selected: boolean) {
  const id = `${albumId}-${trackIndex}`
  if (selected) {
    selectedTracks.value.push(id)
  } else {
    selectedTracks.value = selectedTracks.value.filter(i => i !== id)
  }
}

function deleteSelected() {
  // Implement delete logic here
  console.log('Deleting selected items')
}

function handleCheckout() {
  // Implement checkout logic here
  console.log('Checking out', {
    mixtapes: selectedMixtapes.value,
    albums: selectedAlbums.value,
    tracks: selectedTracks.value,
    total: totalSelectedPrice.value
  })
}
</script>

<style scoped>
.custom-checkbox {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
}

.custom-checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: relative;
  height: 18px;
  width: 18px;
  background-color: white;
  border: 1px solid #A10501;
  transition: all 0.2s ease;
}

@media (min-width: 640px) {
  .checkmark {
    height: 20px;
    width: 20px;
  }
}

.custom-checkbox input:checked ~ .checkmark {
  background-color: #A10501;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 5px;
  top: 2px;
  width: 5px;
  height: 9px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

@media (min-width: 640px) {
  .checkmark:after {
    left: 6px;
    top: 3px;
    height: 10px;
  }
}

.custom-checkbox input:checked ~ .checkmark:after {
  display: block;
}

/* Sticky behavior for tablet and desktop */
@media (min-width: 1024px) {
  .lg\:sticky {
    position: sticky;
    top: 12rem; /* Adjust this value based on your header height */
    transition: all 0.3s ease;
  }
}
</style>