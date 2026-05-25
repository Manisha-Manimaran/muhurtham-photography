import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Christian Wedding Photography | Muhurtham Photography",
  description: "Beautiful Christian wedding photography capturing church ceremonies and celebrations.",
};

const photos = Array.from({ length: 15 }, (_, i) =>
  `https://picsum.photos/seed/christianwedding${i + 1}/800/1000`
);

export default function ChristianWeddingPage() {
  return (
    <>
      <Navbar />
      <CategoryPage
        title="Christian Wedding Photography"
        heroImage="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=80"
        heroDescription="Timeless Christian wedding photography with grace and sophistication."
        contentHeading="Where faith and love unite in eternal moments"
        contentText="Christian weddings are a beautiful testament to faith, love, and commitment. From the solemnity of the church ceremony to the joy of the reception, every moment is steeped in meaning and emotion. We capture the sacred exchange of vows, the tender first kiss as a married couple, and the joyous celebrations that follow. Our style blends classic elegance with contemporary artistry, creating images that are both timeless and deeply personal."
        contentImage="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80"
        photos={photos}
      />
      <Footer />
    </>
  );
}
