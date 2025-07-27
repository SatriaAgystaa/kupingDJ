export interface SocialMedia {
  id: string
  title: string
  iconPath: string
  url: string
}

export const socialMedias: SocialMedia[] = [
  {
    id: "instagram",
    title: "INSTAGRAM",
    iconPath: "/icons/social/instagram.svg",
    url: "https://instagram.com"
  },
  {
    id: "youtube",
    title: "YOUTUBE",
    iconPath: "/icons/social/youtube.svg",
    url: "https://youtube.com"
  },
  {
    id: "facebook",
    title: "FACEBOOK",
    iconPath: "/icons/social/facebook.svg",
    url: "https://facebook.com"
  },
  {
    id: "tiktok",
    title: "TIKTOK",
    iconPath: "/icons/social/tiktok.svg",
    url: "https://tiktok.com"
  }
]