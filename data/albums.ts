export interface Track {
  title: string
  category: string
  duration: string
  date: string
  size: string
  price: string
  logo: string
  icon: string
  headIcon: string
  barIcon: string
  music?: string
}

export interface Album {
  id: number
  category: string
  title: string
  coverImage: string
  date: string
  price: number
  tracks: Track[]
}

export const albumsData: Album[] = [
  {
    id: 1,
    category: "Bundle",
    title: "Blues. Album Exclusive On Kuping DJ",
    coverImage: "/icons/album/album1.svg",
    date: "02 July, 2025",
    price: 200000,
    tracks: [
      {
        title: "Promotion Video",
        category: "Video",
        duration: "",
        date: "03, Jul 2025",
        size: "80 Mb",
        price: "Download",
        icon: "/icons/baseicons/download_white.svg",
        logo: "/icons/baseicons/video.svg",
        headIcon: "/icons/baseicons/file.svg",
        barIcon: ""
      },
      {
        title: "Music 1",
        category: "Partials",
        duration: "3 Min, 20 Sec", 
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        logo: "/icons/baseicons/music.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg",
        music: "/music/music1.mp3"
      },
      {
        title: "Music 2",
        category: "Partials",
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025", 
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        logo: "/icons/baseicons/music.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg",
        music: "/music/music2.mp3"
      },
      {
        title: "Music 3",
        category: "Partials",
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb", 
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        logo: "/icons/baseicons/music.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg",
        music: "/music/music3.mp3"
      },
      {
        title: "Music 4",
        category: "Partials",
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        logo: "/icons/baseicons/music.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg",
        music: "/music/music4.mp3"
      },
      {
        title: "Music 5", 
        category: "Partials",
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        logo: "/icons/baseicons/music.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg",
        music: "/music/music1.mp3"
      },
    ]
  },
  {
    id: 2,
    category: "Bundle",
    title: "You And Me Album Exclusive On Kuping DJ",
    coverImage: "/icons/album/album2.svg",
    date: "02 July, 2025", 
    price: 200000,
    tracks: [
      {
        title: "Promotion Video",
        category: "Video",
        duration: "",
        date: "03, Jul 2025",
        size: "80 Mb", 
        price: "Download",
        icon: "/icons/baseicons/download_white.svg",
        logo: "/icons/baseicons/video.svg",
        headIcon: "/icons/baseicons/file.svg",
        barIcon: ""
      },
      {
        title: "Music 1",
        category: "Partials",
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        logo: "/icons/baseicons/music.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg",
        music: "/music/music2.mp3"
      },
      {
        title: "Music 2", 
        category: "Partials",
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        logo: "/icons/baseicons/music.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg",
        music: "/music/music3.mp3"
      },
      {
        title: "Music 3",
        category: "Partials",
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        logo: "/icons/baseicons/music.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg",
        music: "/music/music4.mp3"
      },
      {
        title: "Music 4",
        category: "Partials",
        duration: "3 Min, 20 Sec", 
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        logo: "/icons/baseicons/music.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg",
        music: "/music/music1.mp3"
      },
      {
        title: "Music 5",
        category: "Partials",
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        logo: "/icons/baseicons/music.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg",
        music: "/music/music2.mp3"
      },
    ]
  },
  {
    id: 3,
    category: "Bundle",
    title: "You And Me Album Exclusive On Kuping DJ",
    coverImage: "/icons/album/album2.svg",
    date: "02 July, 2025", 
    price: 200000,
    tracks: [
      {
        title: "Promotion Video",
        category: "Video",
        duration: "",
        date: "03, Jul 2025",
        size: "80 Mb", 
        price: "Download",
        icon: "/icons/baseicons/download_white.svg",
        logo: "/icons/baseicons/video.svg",
        headIcon: "/icons/baseicons/file.svg",
        barIcon: ""
      },
      {
        title: "Music 1",
        category: "Partials",
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        logo: "/icons/baseicons/music.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg",
        music: "/music/music3.mp3"
      },
      {
        title: "Music 2", 
        category: "Partials",
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        logo: "/icons/baseicons/music.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg",
        music: "/music/music4.mp3"
      },
      {
        title: "Music 3",
        category: "Partials",
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        logo: "/icons/baseicons/music.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg",
        music: "/music/music1.mp3"
      },
      {
        title: "Music 4",
        category: "Partials",
        duration: "3 Min, 20 Sec", 
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        logo: "/icons/baseicons/music.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg",
        music: "/music/music2.mp3"
      },
      {
        title: "Music 5",
        category: "Partials",
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        logo: "/icons/baseicons/music.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg",
        music: "/music/music3.mp3"
      },
    ]
  },
  {
    id: 4,
    category: "Bundle",
    title: "You And Me Album Exclusive On Kuping DJ",
    coverImage: "/icons/album/album2.svg",
    date: "02 July, 2025", 
    price: 200000,
    tracks: [
      {
        title: "Promotion Video",
        category: "Video",
        duration: "",
        date: "03, Jul 2025",
        size: "80 Mb", 
        price: "Download",
        icon: "/icons/baseicons/download_white.svg",
        logo: "/icons/baseicons/video.svg",
        headIcon: "/icons/baseicons/file.svg",
        barIcon: ""
      },
      {
        title: "Music 1",
        category: "Partials",
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        logo: "/icons/baseicons/music.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg",
        music: "/music/music4.mp3"
      },
      {
        title: "Music 2", 
        category: "Partials",
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        logo: "/icons/baseicons/music.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg",
        music: "/music/music1.mp3"
      },
      {
        title: "Music 3",
        category: "Partials",
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        logo: "/icons/baseicons/music.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg",
        music: "/music/music2.mp3"
      },
      {
        title: "Music 4",
        category: "Partials",
        duration: "3 Min, 20 Sec", 
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        logo: "/icons/baseicons/music.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg",
        music: "/music/music3.mp3"
      },
      {
        title: "Music 5",
        category: "Partials",
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        logo: "/icons/baseicons/music.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg",
        music: "/music/music4.mp3"
      },
    ]
  },
]