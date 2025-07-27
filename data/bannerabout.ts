// data/bannerabout.ts
export interface BannerAbout {
  id: string;
  title: string;
  image: string;
  description: string;
}

// Ubah nama export menjadi bannerAbout
export const bannerAbout: BannerAbout = {
  id: "about-kuping-dj",
  title: "WE ARE KUPING DJ",
  image: "icons/baseicons/bg-dj.jpg",
  description: "The ultimate digital crate for DJs, creators, and music lovers in Southeast Asia."
};