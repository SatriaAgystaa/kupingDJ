export interface PicksMixtape {
  id: number;
  artist: string;
  artistImage: string;
  title: string;
  price: string;
  image: string;
  likes: string;
  downloads: string;
  rating: string;
  bpm: string;
  date: string;
  subtitle?: string;
  isFavorited?: boolean;
}

export const picksMixtapes: PicksMixtape[] = [
  {
    id: 1,
    artist: 'Wisnu Santika',
    artistImage: '/images/artists/wishnu_santika.jpg',
    title: 'Cartel PicksMixtape',
    price: 'Rp. 200,000',
    image: '/images/mixtapes/cartel.jpg',
    likes: '100',
    downloads: '123',
    rating: '4.5',
    bpm: '150',
    date: '02 July, 2025',
    subtitle: 'Exclusive On Kuping DJ',
    isFavorited: false
  },
  {
    id: 2,
    artist: 'Eka Gustiwana',
    artistImage: '/images/artists/eka_gustiwana.jpg',
    title: 'Sweet Scars PicksMixtape',
    price: 'Rp. 300,000',
    image: '/images/mixtapes/sweet.jpeg',
    likes: '100',
    downloads: '123',
    rating: '4.5',
    bpm: '150',
    date: '02 July, 2025',
    subtitle: 'Exclusive On Kuping DJ',
    isFavorited: false
  },
  {
    id: 3,
    artist: 'Weird Genius',
    artistImage: '/images/artists/weird_genius.jpeg',
    title: 'Catalyst PicksMixtape',
    price: 'Rp. 350,000',
    image: '/images/mixtapes/catalyst.jpeg',
    likes: '100',
    downloads: '123',
    rating: '4.5',
    bpm: '150',
    date: '02 July, 2025',
    subtitle: 'Exclusive On Kuping DJ',
    isFavorited: false
  },
  {
    id: 4,
    artist: 'Weird Genius ft. Reikko',
    artistImage: '/images/artists/weird_genius.jpeg',
    title: 'HUSH PicksMixtape',
    price: 'Rp. 200,000',
    image: '/images/mixtapes/yellow_claw.jpeg',
    likes: '100',
    downloads: '123',
    rating: '4.5',
    bpm: '150',
    date: '02 July, 2025',
    subtitle: 'Exclusive On Kuping DJ',
    isFavorited: false
  },
];