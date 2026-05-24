import Navbar from "@/components/Navbar";
import ShowcaseSections from "@/components/ShowcaseSections";
import WeddingCategories from "@/components/WeddingCategories";
import About from "@/components/About";
import FeaturedWeddings from "@/components/FeaturedWeddings";
import PhotoGallery from "@/components/PhotoGallery";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTAStrip from "@/components/CTAStrip";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <ShowcaseSections />
        <WeddingCategories />
        <About />
        <FeaturedWeddings />
        <PhotoGallery />
        <Services />
        <Testimonials />
        <WhyChooseUs />
        <CTAStrip />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
