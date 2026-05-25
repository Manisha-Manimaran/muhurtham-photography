export type AlbumCategory = "Hindu Wedding" | "Muslim Wedding" | "Christian Wedding" | "Baby Shoot" | "Engagement" | "Maternity Shoot" | "Candid Photography" | "Outdoor Photography" | "Bridal Portraits";

export interface Album {
  slug: string;
  couple: string;
  date: string;
  category: AlbumCategory;
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
    img: "/images/1519741497674-611481863552.jpg",
    description: "Arjun and Priya's wedding was a grand celebration of love and tradition. From the vibrant mehendi to the sacred saptapadi, every ritual was filled with joy and emotion. Set against a backdrop of rich decor and familial warmth, their story unfolded beautifully through the lens.",
    photos: generatePhotos("hindu-arjun", 12),
  },
  {
    slug: "karthik-divya",
    couple: "Karthik + Divya",
    date: "Sep 2025",
    category: "Hindu Wedding",
    img: "/images/1515934751635-c81c6bc9a2d8.jpg",
    description: "Karthik and Divya's wedding was a beautiful blend of tradition and modernity. The couple's chemistry shone through every frame, from the playful sangeet to the emotional vidai. Their families came together in a celebration that was both grand and intimate.",
    photos: generatePhotos("hindu-karthik", 12),
  },
  {
    slug: "ganesh-priya",
    couple: "Ganesh + Priya",
    date: "Mar 2025",
    category: "Hindu Wedding",
    img: "/images/1590523277543-a94d2e4eb00b.jpg",
    description: "Ganesh and Priya's wedding was a visual feast of colors and emotions. Set in a stunning venue, their celebration featured intricate decor, joyful dance performances, and heartfelt ceremonies that captured the essence of a traditional Hindu wedding.",
    photos: generatePhotos("hindu-ganesh", 12),
  },
  {
    slug: "naveen-anjali",
    couple: "Naveen + Anjali",
    date: "Aug 2025",
    category: "Muslim Wedding",
    img: "/assets/muslim-wedding/hero-fallback.jpg",
    description: "Naveen and Anjali's nikah was a deeply moving ceremony filled with grace and elegance. The venue was adorned with floral arrangements, and the couple's joy was palpable as they embarked on their journey together. Every moment reflected the beauty of their love.",
    photos: generatePhotos("muslim-naveen", 12),
  },
  {
    slug: "sarah-jose",
    couple: "Sarah + Jose",
    date: "Jun 2025",
    category: "Christian Wedding",
    img: "/images/1465495976277-4387d4b0b4c6.jpg",
    description: "Sarah and Jose's wedding was a timeless celebration of faith and love set in a beautiful church ceremony. The exchange of vows under the stained glass, the joyful recessional, and the elegant reception all came together to create a day filled with grace and happiness.",
    photos: generatePhotos("christian-sarah", 12),
  },
  {
    slug: "fatima-ahmed",
    couple: "Fatima + Ahmed",
    date: "Apr 2025",
    category: "Muslim Wedding",
    img: "/assets/muslim-wedding/album2.jpg",
    description: "Fatima and Ahmed's wedding was a grand affair that beautifully blended tradition with contemporary elegance. The mehndi night, the nikah ceremony, and the walima reception were all captured with an eye for both candid moments and artistic portraiture.",
    photos: generatePhotos("muslim-fatima", 12),
  },
  {
    slug: "danielle-michael",
    couple: "Danielle + Michael",
    date: "Feb 2025",
    category: "Christian Wedding",
    img: "/images/1511795409834-ef04bbd61622.jpg",
    description: "Danielle and Michael's wedding was a picture-perfect celebration of love. The church ceremony was followed by a stunning garden reception where laughter and joy filled the air. Their genuine affection for each other made every photograph truly special.",
    photos: generatePhotos("christian-danielle", 12),
  },
  {
    slug: "priya-maternity-shoot",
    couple: "Priya Maternity Shoot",
    date: "Jan 2026",
    category: "Maternity Shoot",
    img: "https://picsum.photos/seed/priya-maternity/800/1000",
    description: "Priya's maternity session was a heartwarming celebration of new life. Captured in soft natural light, her glowing portraits reflect the beauty and anticipation of motherhood. Every frame tells the story of a mother's love even before meeting her baby.",
    photos: generatePhotos("priya-maternity", 12),
  },
  {
    slug: "sneha-maternity-shoot",
    couple: "Sneha Maternity Shoot",
    date: "Nov 2025",
    category: "Maternity Shoot",
    img: "https://picsum.photos/seed/sneha-maternity/800/1000",
    description: "Sneha's maternity photoshoot celebrated her radiant journey into motherhood. Set against golden hour light and serene backdrops, her portraits exude warmth, grace, and the quiet joy of expecting a little one.",
    photos: generatePhotos("sneha-maternity", 12),
  },
  {
    slug: "kavya-maternity-shoot",
    couple: "Kavya Maternity Shoot",
    date: "Oct 2025",
    category: "Maternity Shoot",
    img: "https://picsum.photos/seed/kavya-maternity/800/1000",
    description: "Kavya's maternity session was an intimate celebration of motherhood. With elegant styling and tender poses, her portraits capture the serene beauty and emotional depth of this precious chapter in her life.",
    photos: generatePhotos("kavya-maternity", 12),
  },
  {
    slug: "anjali-maternity-shoot",
    couple: "Anjali Maternity Shoot",
    date: "Aug 2025",
    category: "Maternity Shoot",
    img: "https://picsum.photos/seed/anjali-maternity/800/1000",
    description: "Anjali's maternity shoot was a beautiful blend of elegance and emotion. The soft drapes, natural poses, and genuine smiles came together to create timeless portraits that celebrate the miracle of life.",
    photos: generatePhotos("anjali-maternity", 12),
  },
  {
    slug: "divya-maternity-shoot",
    couple: "Divya Maternity Shoot",
    date: "Jun 2025",
    category: "Maternity Shoot",
    img: "https://picsum.photos/seed/divya-maternity/800/1000",
    description: "Divya's maternity photography session was filled with warmth and anticipation. Captured in a serene outdoor setting, her portraits glow with the joy and excitement of welcoming a new addition to the family.",
    photos: generatePhotos("divya-maternity", 12),
  },
  {
    slug: "meena-maternity-shoot",
    couple: "Meena Maternity Shoot",
    date: "Apr 2025",
    category: "Maternity Shoot",
    img: "https://picsum.photos/seed/meena-maternity/800/1000",
    description: "Meena's maternity session celebrated her journey with grace and tenderness. From candid laughs to quiet moments of reflection, every photograph tells the beautiful story of a mother's love taking shape.",
    photos: generatePhotos("meena-maternity", 12),
  },
  {
    slug: "aarav-baby-shoot",
    couple: "Baby Aarav",
    date: "Dec 2025",
    category: "Baby Shoot",
    img: "https://picsum.photos/seed/aarav-baby/800/1000",
    description: "Little Aarav's newborn session was a joy to capture. His tiny fingers, peaceful naps, and first curious gazes were preserved in soft, dreamy portraits that his family will treasure forever.",
    photos: generatePhotos("aarav-baby", 12),
  },
  {
    slug: "aditi-baby-shoot",
    couple: "Baby Aditi",
    date: "Oct 2025",
    category: "Baby Shoot",
    img: "https://picsum.photos/seed/aditi-baby/800/1000",
    description: "Baby Aditi's photoshoot was filled with adorable smiles and playful moments. Captured in a cozy studio setup with natural light, her portraits radiate the pure joy and innocence of infancy.",
    photos: generatePhotos("aditi-baby", 12),
  },
  {
    slug: "rohan-first-birthday",
    couple: "Baby Rohan — First Birthday",
    date: "Sep 2025",
    category: "Baby Shoot",
    img: "https://picsum.photos/seed/rohan-birthday/800/1000",
    description: "Rohan's first birthday celebration was a day of laughter, cake, and family joy. We captured every messy smile and gleeful moment, creating a beautiful timeline of his very first milestone.",
    photos: generatePhotos("rohan-birthday", 12),
  },
  {
    slug: "ravi-ananya",
    couple: "Ravi & Ananya",
    date: "Feb 2026",
    category: "Engagement",
    img: "https://picsum.photos/seed/ravi-ananya/800/1000",
    description: "Ravi and Ananya's engagement session was a dreamy celebration of their love story. Set against a golden sunset backdrop, their chemistry and laughter created magical frames that mark the beginning of their forever journey.",
    photos: generatePhotos("ravi-ananya", 12),
  },
  {
    slug: "vikram-shruti",
    couple: "Vikram & Shruti",
    date: "Dec 2025",
    category: "Engagement",
    img: "https://picsum.photos/seed/vikram-shruti/800/1000",
    description: "Vikram and Shruti's engagement shoot was filled with romance and playful energy. From candid walks to tender embraces, every photograph reflects the deep bond and excitement they share as they plan their wedding.",
    photos: generatePhotos("vikram-shruti", 12),
  },
  {
    slug: "arun-meera",
    couple: "Arun & Meera",
    date: "Nov 2025",
    category: "Engagement",
    img: "https://picsum.photos/seed/arun-meera/800/1000",
    description: "Arun and Meera's pre-wedding session was a beautiful narrative of love and companionship. Captured across stunning locales, their portraits blend cinematic aesthetics with genuine emotion, telling their unique love story.",
    photos: generatePhotos("arun-meera", 12),
  },
  {
    slug: "candid-photography",
    couple: "Candid Photography",
    date: "Featured Album",
    category: "Candid Photography",
    img: "https://picsum.photos/seed/candid-moment/800/1000",
    description: "Candid photography is about capturing real emotions as they unfold naturally. From spontaneous laughter to quiet, introspective moments, these unposed photographs tell the truest stories. Our candid style blends into the background, allowing genuine expressions and interactions to take center stage — creating images that feel alive, authentic, and deeply personal.",
    photos: generatePhotos("candid-moment", 12),
  },
  {
    slug: "outdoor-photography",
    couple: "Outdoor Photography",
    date: "Featured Album",
    category: "Outdoor Photography",
    img: "https://picsum.photos/seed/outdoor-couple/800/1000",
    description: "Outdoor photography harnesses the beauty of natural light and scenic landscapes to create breathtaking portraits. Whether it is a golden sunset session, a lush garden shoot, or an urban adventure, we use the environment to frame your love story. The result is a collection of images that feel fresh, romantic, and effortlessly beautiful.",
    photos: generatePhotos("outdoor-couple", 12),
  },
  {
    slug: "bridal-portraits",
    couple: "Bridal Portraits",
    date: "Featured Album",
    category: "Bridal Portraits",
    img: "https://picsum.photos/seed/bridal-portrait/800/1000",
    description: "Bridal portraits are a celebration of elegance and individuality. From the intricate details of your bridal attire to the radiant glow on your special day, every portrait is crafted with care. We focus on timeless poses, flattering lighting, and exquisite compositions that highlight your beauty and confidence as a bride.",
    photos: generatePhotos("bridal-portrait", 12),
  },
];

export const categories: AlbumCategory[] = ["Hindu Wedding", "Muslim Wedding", "Christian Wedding", "Baby Shoot", "Engagement", "Maternity Shoot"];

export const categoryContent: Record<string, { heading: string; text: string; image: string }> = {
  "Hindu Wedding": {
    heading: "Hindu Wedding Photography",
    text: "Hindu weddings are a vibrant tapestry of ancient rituals, colorful celebrations, and heartfelt emotions. From the intricate mehendi designs to the sacred fire ceremony, every element tells a story of love and tradition. Our photographers blend into the festivities to capture candid moments of joy, tears, and togetherness — preserving the essence of your wedding day with timeless artistry.",
    image: "/images/1590523277543-a94d2e4eb00b.jpg",
  },
  "Muslim Wedding": {
    heading: "Muslim Wedding Photography",
    text: "Muslim weddings are elegant celebrations of faith, family, and love. The sanctity of the nikah, the joy of the walima, and the vibrant energy of the mehndi are moments we capture with reverence and artistry. Our approach is unobtrusive yet thorough, ensuring every prayer, every smile, and every embrace is documented with the beauty it deserves.",
    image: "/assets/muslim-wedding/content.jpg",
  },
  "Christian Wedding": {
    heading: "Christian Wedding Photography",
    text: "Christian weddings are a beautiful union of faith and romance. From the solemn exchange of vows in a sunlit church to the jubilant reception celebrations, we capture the grace and joy of your special day. Our style blends classic portraiture with cinematic storytelling, creating images that reflect the depth of your commitment and the happiness of your loved ones.",
    image: "/images/1465495976277-4387d4b0b4c6.jpg",
  },
  "Maternity Shoot": {
    heading: "Maternity Photography",
    text: "Pregnancy is one of the most transformative and beautiful experiences in a woman's life. Our maternity photography sessions celebrate this incredible journey, capturing the glow, the anticipation, and the unconditional love that begins long before the baby arrives. We create a comfortable and empowering environment where expectant mothers can feel beautiful and confident. Using soft, flattering lighting and elegant styling, we create stunning portraits that honour this special chapter of your life.",
    image: "/images/1555252333-9f8e92e65df9.jpg",
  },
  "Baby Shoot": {
    heading: "Baby Photography",
    text: "Babies grow so fast, and every moment is precious. Our baby photography sessions are designed to capture the purity, innocence, and joy of your little one in a relaxed and comfortable environment. From newborn shoots to first birthdays, we create a safe and fun atmosphere where your baby's natural personality can shine through. Using soft natural light and gentle poses, we create timeless portraits that you will cherish for a lifetime.",
    image: "/images/1515488042361-ee00e0ddd4e4.jpg",
  },
  "Engagement": {
    heading: "Engagement Photography",
    text: "Engagements mark the start of an exciting new chapter. It is a time of joy, anticipation, and pure love. Our engagement photography sessions are designed to capture the unique chemistry and connection between couples. Whether it is a romantic outdoor shoot, an intimate indoor session, or a creative themed concept, we bring your love story to life through our lens. These photographs become cherished memories of the time when you said yes to forever.",
    image: "/images/1516589178581-6cd7833ae3b2.jpg",
  },
  "Candid Photography": {
    heading: "Candid Photography",
    text: "Candid photography is about capturing real emotions as they unfold naturally. From spontaneous laughter to quiet, introspective moments, these unposed photographs tell the truest stories. Our candid style blends into the background, allowing genuine expressions and interactions to take center stage.",
    image: "https://picsum.photos/seed/candid-moment/800/1000",
  },
  "Outdoor Photography": {
    heading: "Outdoor Photography",
    text: "Outdoor photography harnesses the beauty of natural light and scenic landscapes to create breathtaking portraits. Whether it is a golden sunset session, a lush garden shoot, or an urban adventure, we use the environment to frame your love story with fresh, romantic, and effortlessly beautiful results.",
    image: "https://picsum.photos/seed/outdoor-couple/800/1000",
  },
  "Bridal Portraits": {
    heading: "Bridal Portraits",
    text: "Bridal portraits are a celebration of elegance and individuality. From the intricate details of your bridal attire to the radiant glow on your special day, every portrait is crafted with care. We focus on timeless poses, flattering lighting, and exquisite compositions that highlight your beauty and confidence as a bride.",
    image: "https://picsum.photos/seed/bridal-portrait/800/1000",
  },
};
