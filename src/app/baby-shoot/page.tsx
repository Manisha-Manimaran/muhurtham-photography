import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryPage from "@/components/CategoryPage";
import { albums } from "@/data/albums";

export const metadata: Metadata = {
  title: "Baby Photography | Muhurtham Photography",
  description: "Precious baby photography capturing the innocence and joy of your little ones.",
};

export default function BabyShootPage() {
  return (
    <>
      <Navbar />
      <CategoryPage
        title="Baby Photography"
        heroImage="/images/1519689680058-324335c77eba.jpg"
        heroDescription="Preserving the innocence and joy of your little ones forever."
        contentHeading="Every smile, every gaze — a treasure worth keeping"
        contentText="Babies grow so fast, and every moment is precious. Our baby photography sessions are designed to capture the purity, innocence, and joy of your little one in a relaxed and comfortable environment. From newborn shoots to first birthdays, we create a safe and fun atmosphere where your baby's natural personality can shine through. Using soft natural light and gentle poses, we create timeless portraits that you will cherish for a lifetime."
        contentImage="/images/1515488042361-ee00e0ddd4e4.jpg"
        albums={albums.filter(a => a.category === "Baby Shoot")}
      />
      <Footer />
    </>
  );
}
