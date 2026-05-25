export interface Album {
  slug: string;
  couple: string;
  date: string;
  category: "Hindu Wedding" | "Muslim Wedding" | "Christian Wedding";
  img: string;
  description: string;
  photos: string[];
}

function generatePhotos(seed: string, count: number) {
  return Array.from({ length: count }, (_, i) =>
    `https://picsum.photos/seed/${seed}${i + 1}/800/1000`
  );
}

export const albums: Album[] = [
  {
    slug: "arjun-priya",
    couple: "Arjun + Priya",
    date: "Dec 2025",
    category: "Hindu Wedding",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    description: "Arjun and Priya's wedding was a grand celebration of love and tradition. From the vibrant mehendi to the sacred saptapadi, every ritual was filled with joy and emotion. Set against a backdrop of rich decor and familial warmth, their story unfolded beautifully through the lens.",
    photos: generatePhotos("arjunpriya", 15),
  },
  {
    slug: "karthik-divya",
    couple: "Karthik + Divya",
    date: "Sep 2025",
    category: "Hindu Wedding",
    img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80",
    description: "Karthik and Divya's wedding was a beautiful blend of tradition and modernity. The couple's chemistry shone through every frame, from the playful sangeet to the emotional vidai. Their families came together in a celebration that was both grand and intimate.",
    photos: generatePhotos("karthikdivya", 15),
  },
  {
    slug: "ganesh-priya",
    couple: "Ganesh + Priya",
    date: "Mar 2025",
    category: "Hindu Wedding",
    img: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=600&q=80",
    description: "Ganesh and Priya's wedding was a visual feast of colors and emotions. Set in a stunning venue, their celebration featured intricate decor, joyful dance performances, and heartfelt ceremonies that captured the essence of a traditional Hindu wedding.",
    photos: generatePhotos("ganeshpriya", 15),
  },
  {
    slug: "naveen-anjali",
    couple: "Naveen + Anjali",
    date: "Aug 2025",
    category: "Muslim Wedding",
    img: "https://images.unsplash.com/photo-1509631120183-7e0556b2129f?w=600&q=80",
    description: "Naveen and Anjali's nikah was a deeply moving ceremony filled with grace and elegance. The venue was adorned with floral arrangements, and the couple's joy was palpable as they embarked on their journey together. Every moment reflected the beauty of their love.",
    photos: generatePhotos("naveenanajali", 14),
  },
  {
    slug: "sarah-jose",
    couple: "Sarah + Jose",
    date: "Jun 2025",
    category: "Christian Wedding",
    img: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
    description: "Sarah and Jose's wedding was a timeless celebration of faith and love set in a beautiful church ceremony. The exchange of vows under the stained glass, the joyful recessional, and the elegant reception all came together to create a day filled with grace and happiness.",
    photos: generatePhotos("sarahjose", 14),
  },
  {
    slug: "fatima-ahmed",
    couple: "Fatima + Ahmed",
    date: "Apr 2025",
    category: "Muslim Wedding",
    img: "https://images.unsplash.com/photo-1591604466107-ec97e577d9e0?w=600&q=80",
    description: "Fatima and Ahmed's wedding was a grand affair that beautifully blended tradition with contemporary elegance. The mehndi night, the nikah ceremony, and the walima reception were all captured with an eye for both candid moments and artistic portraiture.",
    photos: generatePhotos("fatimaahmed", 14),
  },
  {
    slug: "danielle-michael",
    couple: "Danielle + Michael",
    date: "Feb 2025",
    category: "Christian Wedding",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80",
    description: "Danielle and Michael's wedding was a picture-perfect celebration of love. The church ceremony was followed by a stunning garden reception where laughter and joy filled the air. Their genuine affection for each other made every photograph truly special.",
    photos: generatePhotos("daniellemichael", 13),
  },
];

export const categories = ["Hindu Wedding", "Muslim Wedding", "Christian Wedding"] as const;

export const categoryContent: Record<string, { heading: string; text: string; image: string }> = {
  "Hindu Wedding": {
    heading: "Hindu Wedding Photography",
    text: "Hindu weddings are a vibrant tapestry of ancient rituals, colorful celebrations, and heartfelt emotions. From the intricate mehendi designs to the sacred fire ceremony, every element tells a story of love and tradition. Our photographers blend into the festivities to capture candid moments of joy, tears, and togetherness — preserving the essence of your wedding day with timeless artistry.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  },
  "Muslim Wedding": {
    heading: "Muslim Wedding Photography",
    text: "Muslim weddings are elegant celebrations of faith, family, and love. The sanctity of the nikah, the joy of the walima, and the vibrant energy of the mehndi are moments we capture with reverence and artistry. Our approach is unobtrusive yet thorough, ensuring every prayer, every smile, and every embrace is documented with the beauty it deserves.",
    image: "https://images.unsplash.com/photo-1509631120183-7e0556b2129f?w=800&q=80",
  },
  "Christian Wedding": {
    heading: "Christian Wedding Photography",
    text: "Christian weddings are a beautiful union of faith and romance. From the solemn exchange of vows in a sunlit church to the jubilant reception celebrations, we capture the grace and joy of your special day. Our style blends classic portraiture with candid storytelling, creating images that reflect the depth of your commitment and the happiness of your loved ones.",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
  },
};
