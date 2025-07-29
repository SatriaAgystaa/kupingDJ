// ~/data/transaction.ts
import type { Mixtape } from './mixtapes'

export interface TransactionItem extends Mixtape {
  quantity: number
}

export interface Transaction {
  id: string
  date: string
  status: 'SUCCESS' | 'PENDING' | 'FAILED'
  items: TransactionItem[]
  total: string
}

export const transactions: Transaction[] = [
  {
    id: 'TR/070525-1441511',
    date: '13/15/2025',
    status: 'SUCCESS',
    items: [
      {
        id: 1,
        artist: 'Wisnu Santika',
        artistImage: '/images/artists/wishnu_santika.jpg',
        title: 'Cartel Mixtape Exclusive On Kuping DJ',
        price: 'Rp. 200,000',
        image: '/images/mixtapes/cartel.jpg',
        likes: '100',
        downloads: '123',
        rating: '4.5',
        bpm: '150',
        date: '02 July, 2025',
        isFavorited: false,
        quantity: 1
      },
      {
        id: 2,
        artist: 'Eka Gustiwana',
        artistImage: '/images/artists/eka_gustiwana.jpg',
        title: 'Sweet Scars Mixtape Exclusive On Kuping DJ',
        price: 'Rp. 300,000',
        image: '/images/mixtapes/sweet.jpeg',
        likes: '100',
        downloads: '123',
        rating: '4.5',
        bpm: '150',
        date: '02 July, 2025',
        isFavorited: false,
        quantity: 1
      },
      {
        id: 3,
        artist: 'Weird Genius',
        artistImage: '/images/artists/weird_genius.jpeg',
        title: 'Catalyst Mixtape Exclusive On Kuping DJ',
        price: 'Rp. 350,000',
        image: '/images/mixtapes/catalyst.jpeg',
        likes: '100',
        downloads: '123',
        rating: '4.5',
        bpm: '150',
        date: '02 July, 2025',
        isFavorited: false,
        quantity: 1
      },
      {
        id: 4,
        artist: 'Weird Genius ft. Reikko',
        artistImage: '/images/artists/weird_genius.jpeg',
        title: 'HUSH Mixtape Exclusive On Kuping DJ',
        price: 'Rp. 200,000',
        image: '/images/mixtapes/yellow_claw.jpeg',
        likes: '100',
        downloads: '123',
        rating: '4.5',
        bpm: '150',
        date: '02 July, 2025',
        isFavorited: false,
        quantity: 1
      }
    ],
    total: 'Rp. 1.050.000'
  },
  {
    id: 'TR/070525-1441512',
    date: '10/15/2025',
    status: 'PENDING',
    items: [
      {
        id: 2,
        artist: 'Eka Gustiwana',
        artistImage: '/images/artists/eka_gustiwana.jpg',
        title: 'Sweet Scars Mixtape Exclusive On Kuping DJ',
        price: 'Rp. 300,000',
        image: '/images/mixtapes/sweet.jpeg',
        likes: '100',
        downloads: '123',
        rating: '4.5',
        bpm: '150',
        date: '02 July, 2025',
        isFavorited: false,
        quantity: 1
      },
      {
        id: 3,
        artist: 'Weird Genius',
        artistImage: '/images/artists/weird_genius.jpeg',
        title: 'Catalyst Mixtape Exclusive On Kuping DJ',
        price: 'Rp. 350,000',
        image: '/images/mixtapes/catalyst.jpeg',
        likes: '100',
        downloads: '123',
        rating: '4.5',
        bpm: '150',
        date: '02 July, 2025',
        isFavorited: false,
        quantity: 1
      },
      {
        id: 4,
        artist: 'Weird Genius ft. Reikko',
        artistImage: '/images/artists/weird_genius.jpeg',
        title: 'HUSH Mixtape Exclusive On Kuping DJ',
        price: 'Rp. 200,000',
        image: '/images/mixtapes/yellow_claw.jpeg',
        likes: '100',
        downloads: '123',
        rating: '4.5',
        bpm: '150',
        date: '02 July, 2025',
        isFavorited: false,
        quantity: 1
      }
    ],
    total: 'Rp. 850.000'
  },
  {
    id: 'TR/070525-1441513',
    date: '08/15/2025',
    status: 'FAILED',
    items: [
      {
        id: 1,
        artist: 'Wisnu Santika',
        artistImage: '/images/artists/wishnu_santika.jpg',
        title: 'Cartel Mixtape Exclusive On Kuping DJ',
        price: 'Rp. 200,000',
        image: '/images/mixtapes/cartel.jpg',
        likes: '100',
        downloads: '123',
        rating: '4.5',
        bpm: '150',
        date: '02 July, 2025',
        isFavorited: false,
        quantity: 1
      },
      {
        id: 2,
        artist: 'Eka Gustiwana',
        artistImage: '/images/artists/eka_gustiwana.jpg',
        title: 'Sweet Scars Mixtape Exclusive On Kuping DJ',
        price: 'Rp. 300,000',
        image: '/images/mixtapes/sweet.jpeg',
        likes: '100',
        downloads: '123',
        rating: '4.5',
        bpm: '150',
        date: '02 July, 2025',
        isFavorited: false,
        quantity: 1
      },
      {
        id: 3,
        artist: 'Weird Genius',
        artistImage: '/images/artists/weird_genius.jpeg',
        title: 'Catalyst Mixtape Exclusive On Kuping DJ',
        price: 'Rp. 350,000',
        image: '/images/mixtapes/catalyst.jpeg',
        likes: '100',
        downloads: '123',
        rating: '4.5',
        bpm: '150',
        date: '02 July, 2025',
        isFavorited: false,
        quantity: 1
      }
    ],
    total: 'Rp. 850.000'
  }
]