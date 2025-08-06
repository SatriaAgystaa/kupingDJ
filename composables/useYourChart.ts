import { ref, computed } from 'vue'
import type { Mixtape } from '~/data/mixtapes'
import type { Album, Track } from '~/data/albums'

export interface ChartItem {
  id: string
  type: 'mixtape' | 'album' | 'track'
  data: Mixtape | Album | Track
  albumData?: Album // For tracks, we need album info
  price: number
}

const chartItems = ref<ChartItem[]>([])

export const useYourChart = () => {
  // Calculate total items
  const totalItems = computed(() => chartItems.value.length)

  // Calculate total price
  const totalPrice = computed(() => {
    return chartItems.value.reduce((sum, item) => sum + item.price, 0)
  })

  // Add mixtape to chart
  const addMixtape = (mixtape: Mixtape) => {
    const existingItem = chartItems.value.find(
      item => item.type === 'mixtape' && item.id === `mixtape-${mixtape.id}`
    )
    
    if (!existingItem) {
      const price = parseInt(mixtape.price.replace(/\D/g, ''))
      chartItems.value.push({
        id: `mixtape-${mixtape.id}`,
        type: 'mixtape',
        data: mixtape,
        price
      })
    }
  }

  // Add album to chart
  const addAlbum = (album: Album) => {
    const existingItem = chartItems.value.find(
      item => item.type === 'album' && item.id === `album-${album.id}`
    )
    
    if (!existingItem) {
      chartItems.value.push({
        id: `album-${album.id}`,
        type: 'album',
        data: album,
        price: album.price
      })
    }
  }

  // Add track to chart
  const addTrack = (track: Track, album: Album, trackIndex: number) => {
    const trackId = `track-${album.id}-${trackIndex}`
    const existingItem = chartItems.value.find(item => item.id === trackId)
    
    if (!existingItem) {
      const price = track.price.startsWith('Rp.') 
        ? parseInt(track.price.replace(/\D/g, '')) 
        : 0
      
      chartItems.value.push({
        id: trackId,
        type: 'track',
        data: track,
        albumData: album,
        price
      })
    }
  }

  // Remove item from chart
  const removeItem = (itemId: string) => {
    const index = chartItems.value.findIndex(item => item.id === itemId)
    if (index > -1) {
      chartItems.value.splice(index, 1)
    }
  }

  // Clear all items
  const clearChart = () => {
    chartItems.value = []
  }

  // Get all mixtapes in chart
  const getMixtapes = computed(() => {
    return chartItems.value
      .filter(item => item.type === 'mixtape')
      .map(item => item.data as Mixtape)
  })

  // Get all albums in chart
  const getAlbums = computed(() => {
    return chartItems.value
      .filter(item => item.type === 'album')
      .map(item => item.data as Album)
  })

  // Get all tracks in chart
  const getTracks = computed(() => {
    return chartItems.value
      .filter(item => item.type === 'track')
      .map(item => ({
        track: item.data as Track,
        album: item.albumData as Album
      }))
  })

  // Initialize with dummy data for testing
  const initializeDummyData = () => {
    // Import dummy data
    import('~/data/mixtapes').then(({ mixtapes }) => {
      // Add first 2 mixtapes
      mixtapes.slice(0, 2).forEach(mixtape => addMixtape(mixtape))
    })

    import('~/data/albums').then(({ albumsData }) => {
      // Add first album
      if (albumsData.length > 0) {
        addAlbum(albumsData[0])
        // Add first 2 tracks from first album
        albumsData[0].tracks.slice(0, 2).forEach((track, index) => {
          addTrack(track, albumsData[0], index)
        })
      }
    })
  }

  return {
    chartItems: computed(() => chartItems.value),
    totalItems,
    totalPrice,
    addMixtape,
    addAlbum,
    addTrack,
    removeItem,
    clearChart,
    getMixtapes,
    getAlbums,
    getTracks,
    initializeDummyData
  }
}