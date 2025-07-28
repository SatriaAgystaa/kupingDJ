export interface Track {
  title: string
  duration: string
  date: string
  size: string
  price: string
  icon: string
  headIcon: string
  barIcon: string
}

export interface Album {
  id: number
  title: string
  coverImage: string
  date: string
  price: number
  tracks: Track[]
}

export const albumsData: Album[] = [
  {
    id: 1,
    title: "Blues. Album Exclusive On Kuping DJ",
    coverImage: "/icons/album/album1.svg",
    date: "02 July, 2025",
    price: 200000,
    tracks: [
      {
        title: "Promotion Video",
        duration: "",
        date: "03, Jul 2025",
        size: "80 Mb",
        price: "Download",
        icon: "/icons/baseicons/download_white.svg",
        headIcon: "/icons/baseicons/file.svg",
        barIcon: ""
      },
      {
        title: "Music 1",
        duration: "3 Min, 20 Sec", 
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg"
      },
      {
        title: "Music 2",
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025", 
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg"
      },
      {
        title: "Music 3",
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb", 
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg"
      },
      {
        title: "Music 4",
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg"
      },
      {
        title: "Music 5", 
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg"
      },
    ]
  },
  {
    id: 2,
    title: "You And Me Album Exclusive On Kuping DJ",
    coverImage: "/icons/album/album2.svg",
    date: "02 July, 2025", 
    price: 200000,
    tracks: [
      {
        title: "Promotion Video",
        duration: "",
        date: "03, Jul 2025",
        size: "80 Mb", 
        price: "Download",
        icon: "/icons/baseicons/download_white.svg",
        headIcon: "/icons/baseicons/file.svg",
        barIcon: ""
      },
      {
        title: "Music 1",
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg"
      },
      {
        title: "Music 2", 
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg"
      },
      {
        title: "Music 3",
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg"
      },
      {
        title: "Music 4",
        duration: "3 Min, 20 Sec", 
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg"
      },
      {
        title: "Music 5",
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg"
      },
    ]
  },
  {
    id: 3,
    title: "You And Me Album Exclusive On Kuping DJ",
    coverImage: "/icons/album/album2.svg",
    date: "02 July, 2025", 
    price: 200000,
    tracks: [
      {
        title: "Promotion Video",
        duration: "",
        date: "03, Jul 2025",
        size: "80 Mb", 
        price: "Download",
        icon: "/icons/baseicons/download_white.svg",
        headIcon: "/icons/baseicons/file.svg",
        barIcon: ""
      },
      {
        title: "Music 1",
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg"
      },
      {
        title: "Music 2", 
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg"
      },
      {
        title: "Music 3",
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg"
      },
      {
        title: "Music 4",
        duration: "3 Min, 20 Sec", 
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg"
      },
      {
        title: "Music 5",
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg"
      },
    ]
  },
  {
    id: 4,
    title: "You And Me Album Exclusive On Kuping DJ",
    coverImage: "/icons/album/album2.svg",
    date: "02 July, 2025", 
    price: 200000,
    tracks: [
      {
        title: "Promotion Video",
        duration: "",
        date: "03, Jul 2025",
        size: "80 Mb", 
        price: "Download",
        icon: "/icons/baseicons/download_white.svg",
        headIcon: "/icons/baseicons/file.svg",
        barIcon: ""
      },
      {
        title: "Music 1",
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg"
      },
      {
        title: "Music 2", 
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg"
      },
      {
        title: "Music 3",
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg"
      },
      {
        title: "Music 4",
        duration: "3 Min, 20 Sec", 
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg"
      },
      {
        title: "Music 5",
        duration: "3 Min, 20 Sec",
        date: "03, Jul 2025",
        size: "5 Mb",
        price: "Rp. 10.000",
        icon: "/icons/baseicons/cart_white.svg",
        headIcon: "/icons/baseicons/play_black.svg",
        barIcon: "/icons/baseicons/bar.svg"
      },
    ]
  },
]