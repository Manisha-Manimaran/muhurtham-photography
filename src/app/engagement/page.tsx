import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Engagement Photography | Muhurtham Photography",
  description: "Romantic engagement photography capturing the beginning of your love story.",
};

const photos = Array.from({ length: 15 }, (_, i) =>
  `https://picsum.photos/seed/engagement${i + 1}/800/1000`
);

export default function EngagementPage() {
  return (
    <>
      <Navbar />
      <CategoryPage
        title="Engagement Photography"
        heroImage="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80"
        heroDescription="Celebrating the beginning of your forever love story."
        contentHeading="The beginning of a beautiful journey together"
        contentText="Engagements mark the start of an exciting new chapter. It is a time of joy, anticipation, and pure love. Our engagement photography sessions are designed to capture the unique chemistry and connection between couples. Whether it is a romantic outdoor shoot, an intimate indoor session, or a creative themed concept, we bring your love story to life through our lens. These photographs become cherished memories of the time when you said yes to forever."
        contentImage="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80"
        photos={photos}
      />
      <Footer />
    </>
  );
}
