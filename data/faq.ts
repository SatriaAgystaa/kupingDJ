export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: "1",
    question: "What is Kuping DJ?",
    answer: "Kuping DJ is a digital marketplace for DJs, music producers, and content creators to legally buy and download exclusive mix tapes, albums, and music packs. We support local and international artists with a fair revenue-sharing model."
  },
  {
    id: "2",
    question: "Who can buy music on Kuping DJ?",
    answer: "Anyone can purchase music on Kuping DJ! Our platform is open to DJs, producers, content creators, and music enthusiasts worldwide."
  },
  {
    id: "3",
    question: "What file formats do I get after purchase?",
    answer: "You'll receive high-quality audio files in multiple formats including WAV, MP3 (320kbps), and sometimes stems or project files depending on the release."
  },
  {
    id: "4",
    question: "Can I use the music for live performance?",
    answer: "Yes! All music purchased on Kuping DJ comes with performance rights for live shows, club gigs, and festivals."
  },
  {
    id: "5",
    question: "Can I use the music for YouTube, Reels, TikTok, etc?",
    answer: "Absolutely. Our licenses include rights for social media content creation. Some tracks may require attribution - please check the specific release details."
  }
];