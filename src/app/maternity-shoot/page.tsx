import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryPage from "@/components/CategoryPage";
import { albums } from "@/data/albums";

export const metadata: Metadata = {
  title: "Maternity Photography | Muhurtham Photography",
  description: "Beautiful maternity photography celebrating the glow of motherhood.",
};

export default function MaternityShootPage() {
  return (
    <>
      <Navbar />
      <CategoryPage
        title="Maternity Photography"
        heroImage="/images/1544027993-37dbfe43562a.jpg"
        heroDescription="Celebrating the radiant glow of motherhood with timeless portraits."
        contentHeading="The beautiful journey of bringing new life into the world"
        contentText="Pregnancy is one of the most transformative and beautiful experiences in a woman's life. Our maternity photography sessions celebrate this incredible journey, capturing the glow, the anticipation, and the unconditional love that begins long before the baby arrives. We create a comfortable and empowering environment where expectant mothers can feel beautiful and confident. Using soft, flattering lighting and elegant styling, we create stunning portraits that honour this special chapter of your life."
        contentImage="/images/1555252333-9f8e92e65df9.jpg"
        albums={albums.filter(a => a.category === "Maternity Shoot")}
      />
      <Footer />
    </>
  );
}
