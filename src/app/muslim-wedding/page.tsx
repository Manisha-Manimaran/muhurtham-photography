import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryPage from "@/components/CategoryPage";
import { albums } from "@/data/albums";

export const metadata: Metadata = {
  title: "Muslim Wedding Photography | Muhurtham Photography",
  description: "Elegant Muslim wedding photography capturing nikah ceremonies and celebrations.",
};

export default function MuslimWeddingPage() {
  return (
    <>
      <Navbar />
      <CategoryPage
        title="Muslim Wedding Photography"
        heroImage="/assets/muslim-wedding/hero.jpg"
        heroDescription="Elegant coverage of Muslim wedding ceremonies with refined artistry."
        contentHeading="Celebrating love through timeless Islamic traditions"
        contentText="Muslim weddings are a grand celebration of love, faith, and togetherness. The elegance of the nikah ceremony, the warmth of the walima, and the joy of family gatherings create a tapestry of beautiful moments. Our photography style honours the sanctity of these traditions while capturing the candid joy and emotions that make each wedding unique. We work closely with families to ensure every significant ritual is documented with the respect and artistry it deserves."
        contentImage="/assets/muslim-wedding/content.jpg"
        albums={albums.filter(a => a.category === "Muslim Wedding")}
      />
      <Footer />
    </>
  );
}
