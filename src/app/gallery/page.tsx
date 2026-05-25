"use client";

import { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageWithFallback from "@/components/ImageWithFallback";
import TiltCard from "@/components/TiltCard";

const categories = [
  "All",
  "Hindu Wedding",
  "Muslim Wedding",
  "Christian Wedding",
  "Baby Shoot",
  "Engagement",
  "Maternity Shoot",
];

const albums = [
  { title: "Hindu Wedding", date: "Traditional ceremonies", category: "Hindu Wedding", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80", href: "/hindu-wedding" },
  { title: "Muslim Wedding", date: "Elegant celebrations", category: "Muslim Wedding", img: "https://images.unsplash.com/photo-1591604466107-ec97e577d9e0?w=600&q=80", href: "/muslim-wedding" },
  { title: "Christian Wedding", date: "Timeless love stories", category: "Christian Wedding", img: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80", href: "/christian-wedding" },
  { title: "Baby Shoot", date: "Precious little moments", category: "Baby Shoot", img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=80", href: "/baby-shoot" },
  { title: "Engagement", date: "Love in the air", category: "Engagement", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80", href: "/engagement" },
  { title: "Maternity Shoot", date: "Glow of new life", category: "Maternity Shoot", img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80", href: "/maternity-shoot" },
];

function GalleryContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const initialCategory = categoryParam && categories.includes(categoryParam)
    ? categoryParam
    : "All";

  const [activeTab, setActiveTab] = useState(initialCategory);

  const filteredAlbums = activeTab === "All"
    ? albums
    : albums.filter(a => a.category === activeTab);

  return (
    <main>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80" alt="Gallery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-black/20" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-4">Our Gallery</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            A curated collection of our finest wedding photography work.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeTab === cat
                    ? "bg-pink text-white shadow-md shadow-pink/20"
                    : "bg-white text-charcoal border border-gray-200 hover:border-pink hover:text-pink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
            >
              {filteredAlbums.map((album, i) => (
                <motion.div
                  key={album.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={album.href} className="block group">
                    <TiltCard className="relative overflow-hidden rounded-xl aspect-[4/5] shadow-sm hover:shadow-md transition-shadow duration-300">
                      <ImageWithFallback src={album.img} alt={album.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-medium text-sm sm:text-base">{album.title}</h3>
                        <p className="text-white/60 text-xs mt-0.5">{album.date}</p>
                      </div>
                    </TiltCard>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-16 px-4 bg-pink">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Ready to Create Your Album?</h2>
          <p className="text-white/80 text-lg mb-8">Let&apos;s capture your love story with the same passion and artistry.</p>
          <Link href="/#contact" className="px-8 py-3.5 bg-white text-pink text-sm font-medium tracking-widest uppercase rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg inline-block">
            Book Us Now
          </Link>
        </div>
      </section>
    </main>
  );
}

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={
        <main>
          <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-black/20" />
            <div className="relative z-10 text-center px-4">
              <h1 className="font-serif text-5xl md:text-7xl text-white mb-4">Our Gallery</h1>
            </div>
          </section>
        </main>
      }>
        <GalleryContent />
      </Suspense>
      <Footer />
    </>
  );
}
