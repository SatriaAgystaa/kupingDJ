export interface Genre {
  id: string
  title: string
  iconPath: string // path ke file icon (SVG/PNG/JPG)
}

export const genres: Genre[] = [
  {
    id: "edm",
    title: "EDM",
    iconPath: "/icons/genre/edm.svg"
  },
  {
    id: "hiphop",
    title: "HIP-HOP",
    iconPath: "/icons/genre/hiphop.svg"
  },
  {
    id: "rnb",
    title: "R&B",
    iconPath: "/icons/genre/r&b.svg"
  },
  {
    id: "pop",
    title: "POP",
    iconPath: "/icons/genre/pop.svg"
  }
]
