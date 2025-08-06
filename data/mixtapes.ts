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
    music: '/music/stecu.mp3',
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
    music: '/music/music2.mp3',
    isFavorited: false
  },
  {
    id: 5,
    artist: 'Yellow Claw',
    artistImage: '/images/artists/yellow_claw.jpg',
    title: 'Blood Diamond Mixtape',
    price: 'Rp. 250,000',
    image: '/images/mixtapes/blood_diamond.jpg',
    likes: '150',
    downloads: '200',
    rating: '4.7',
    bpm: '128',
    date: '05 July, 2025',
    music: '/music/music3.mp3',
    isFavorited: false
  },
  {
    id: 6,
    artist: 'Dipha Barus',
    artistImage: '/images/artists/dipha_barus.jpg',
    title: 'No One Can Stop Us',
    price: 'Rp. 180,000',
    image: '/images/mixtapes/no_one.jpg',
    likes: '90',
    downloads: '110',
    rating: '4.3',
    bpm: '140',
    date: '10 July, 2025',
    music: '/music/music4.mp3',
    isFavorited: false
  },
];