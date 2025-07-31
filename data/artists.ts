export interface Artist {
  id: string;
  name: string;
  image: string;
  mintageSold: number;
  story?: {
    intro: string;
    details: string;
  };
}

export const artists: Artist[] = [
  {
    id: "wishnu-santika",
    name: "Whisnu Santika",
    image: "/icons/artists/wishnu_santika.jpg",
    mintageSold: 15000,
    story: {
      intro: "Whisnu Santika (lahir 13 Juni 1992) adalah produser rekaman dan DJ berkebangsaan Indonesia. Ia tengah naik daun di Indonesia dan banyak digandrungi oleh anak muda.",
      details: "Dengan popularitasnya saat ini, Whisnu Santika kerap mengadakan tur ke sejumlah kelab yang ada di berbagai kota di Indonesia. Pada bulan Januari ini saja, ia diketahui akan tampil di Jakarta, Bandung, Lampung, Lombok, Bali, Balikpapan, Kendari, dan lainnya. Ia dikenal karena singel \"Tequila\" serta telah berkolaborasi dengan sederet musisi ternama, seperti Dipha Barus, Souljah, dan Marion Jola."
    }
  },
  {
     id: "eka-gustiwana",
    name: "Eka Gustiwana", 
    image: "/icons/artists/eka_gustiwana.jpg",
    mintageSold: 12000
  },
  {
     id: "weird-genius",
    name: "Weird Genius",
    image: "/icons/artists/weird_genius.jpeg",
    mintageSold: 18000
  },
  {
     id: "dipha-barus",
    name: "Dipha Barus",
    image: "/icons/artists/dipha_barus.jpeg",
    mintageSold: 9000
  },
  {
     id: "midnight-quickie",
    name: "Midnight Quickie",
    image: "/icons/artists/midnight_quicke.jpeg",
    mintageSold: 7500
  },
  {
     id: "reza-oktovian",
    name: "Reza Oktovian",
    image: "/icons/artists/reza_oktovian.jpg",
    mintageSold: 11000
  },
  {
     id: "roy-cdc",
    name: "Roy CDC",
    image: "/icons/artists/roy_cdc.jpeg",
    mintageSold: 8000
  },
  {
     id: "winky-wirawan",
    name: "Winky Wirawan",
    image: "/icons/artists/winky_wirawan.jpeg",
    mintageSold: 6000
  },
  {
     id: "angger-dimas",
    name: "Angger Dimas",
    image: "/icons/artists/angger_dimas.jpg",
    mintageSold: 10000
  },
  {
     id: "bleu-clair",
    name: "Bleu Clair",
    image: "/icons/artists/bleu_clair.jpg",
    mintageSold: 13000
  },
];