export interface Testimonial {
  name: string;
  role: string;
  message: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'ADHITAMA ADIARJA',
    role: 'DJ OXQ',
    message:
      'Kuping DJ adalah platform yang luar biasa! Saya menemukan banyak mixtape dan album yang sesuai dengan selera saya. Setiap kali saya mencari musik baru, saya selalu kembali ke sini. Terima kasih, Kuping DJ!',
    image: '/icons/testimoni/adhitama.svg',
  },
  {
    name: 'BAGAS WIRANTO',
    role: 'DJ BAYKILA',
    message:
      'Sebagai DJ, saya sangat menghargai koleksi mixtape dan album yang ada di Kuping DJ. Ini adalah sumber inspirasi yang tak ternilai untuk set saya. Sangat direkomendasikan!',
    image: '/icons/testimoni/bagas.svg',
  },
];