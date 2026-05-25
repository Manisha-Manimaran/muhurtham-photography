import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Muslim Wedding Photography | Muhurtham Photography",
  description: "Elegant Muslim wedding photography capturing nikah ceremonies and celebrations.",
};

const photos = Array.from({ length: 15 }, (_, i) =>
  `https://picsum.photos/seed/muslimwedding${i + 1}/800/1000`
);

export default function MuslimWeddingPage() {
  return (
    <>
      <Navbar />
      <CategoryPage
        title="Muslim Wedding Photography"
        heroImage="https://images.unsplash.com/photo-1591604466107-ec97e577d9e0?w=1920&q=80"
        heroDescription="Elegant coverage of Muslim wedding ceremonies with refined artistry."
        contentHeading="Celebrating love through timeless Islamic traditions"
        contentText="Muslim weddings are a grand celebration of love, faith, and togetherness. The elegance of the nikah ceremony, the warmth of the walima, and the joy of family gatherings create a tapestry of beautiful moments. Our photography style honours the sanctity of these traditions while capturing the candid joy and emotions that make each wedding unique. We work closely with families to ensure every significant ritual is documented with the respect and artistry it deserves."
        contentImage="https://images.unsplash.com/photo-1509631120183-7e0556b2129f?w=800&q=80"
        photos={photos}
      />
      <Footer />
    </>
  );
}
