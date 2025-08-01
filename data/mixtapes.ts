// mixtapes.ts
export interface Mixtape {
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
  music: string;
  isFavorited?: boolean;
}

export const mixtapes: Mixtape[] = [
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
    music: '/music/music1.mp3',
    isFavorited: false
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
    music: '/music/music1.mp3',
    isFavorited: false
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
    music: '/music/music1.mp3',
    isFavorited: false
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
    music: '/music/music1.mp3',
    isFavorited: false
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
    music: '/music/music1.mp3',
    isFavorited: false
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
    music: '/music/music1.mp3',
    isFavorited: false
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
    music: '/music/music1.mp3',
    isFavorited: false
  },
];