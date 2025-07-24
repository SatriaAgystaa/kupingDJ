export interface Feature {
  id: string
  title: string
  iconPath: string
  effectPath?: string // Optional path for the background effect image
}

export const features: Feature[] = [
  {
    id: "high-quality-audio",
    title: "HIGH-QUALITY AUDIO FILES (WAV\n+ MP3)",
    iconPath: "/icons/features/audio.svg", // Placeholder for audio icon
    effectPath: "/icons/features/wavy_lines.svg", // Placeholder for wavy effect
  },
  {
    id: "license-certificate",
    title: "LICENSE\nCERTIFICATE\n(PDF)",
    iconPath: "/icons/features/hexa.svg", // Placeholder for license icon
    effectPath: "/icons/features/wavy_lines.svg", // Placeholder for wavy effect
  },
  {
    id: "download-access",
    title: "DOWNLOAD\nACCESS",
    iconPath: "/icons/features/docs.svg", // Placeholder for download icon
    effectPath: "/icons/features/wavy_lines.svg", // Placeholder for wavy effect
  },
]
