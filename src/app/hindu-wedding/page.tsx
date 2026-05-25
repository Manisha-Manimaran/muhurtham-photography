import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryPage from "@/components/CategoryPage";
import { albums } from "@/data/albums";

export const metadata: Metadata = {
  title: "Hindu Wedding Photography | Muhurtham Photography",
  description: "Traditional Hindu wedding photography capturing rituals, emotions and timeless memories.",
};

export default function HinduWeddingPage() {
  return (
    <>
      <Navbar />
      <CategoryPage
        title="Hindu Wedding Photography"
        heroImage="/images/1519741497674-611481863552.jpg"
        heroDescription="Capturing the grandeur of traditional Hindu weddings with timeless elegance."
        contentHeading="Capturing rituals, emotions and timeless memories"
        contentText="Hindu weddings are a beautiful blend of age-old traditions, vibrant ceremonies, and heartfelt emotions. From the sacred mantras of the saptapadi to the joyous celebrations of the sangeet, every moment tells a story. We specialize in documenting these precious moments with an artistic eye, ensuring that every ritual, every glance, and every tear of joy is preserved forever. Our approach is unobtrusive yet comprehensive — we blend into the background to capture genuine emotions as they unfold naturally."
        contentImage="/images/1515934751635-c81c6bc9a2d8.jpg"
        albums={albums.filter(a => a.category === "Hindu Wedding")}
      />
      <Footer />
    </>
  );
}
