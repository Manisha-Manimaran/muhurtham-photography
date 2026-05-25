"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TiltCard from "@/components/TiltCard";
import ImageWithFallback from "@/components/ImageWithFallback";

const categories = ["All", "Baby Shoot", "Maternity"];

const albums = [
  { title: "Baby Aarav", date: "Jan 2026", category: "Baby Shoot", img: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=80" },
  { title: "Baby Nila", date: "Dec 2025", category: "Baby Shoot", img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80" },
  { title: "Tiny Miracles", date: "Nov 2025", category: "Baby Shoot", img: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=600&q=80" },
  { title: "Maternity Glow", date: "Nov 2025", category: "Maternity", img: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80" },
  { title: "Expecting Joy", date: "Oct 2025", category: "Maternity", img: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&q=80" },
  { title: "Precious Moments", date: "Sep 2025", category: "Baby Shoot", img: "https://images.unsplash.com/photo-1517423738875-1c1e6a3a8c8f?w=600&q=80" },
];

export default function BabyPage() {
  const [activeTab, setActiveTab] = useState("All");
  const filteredAlbums = activeTab === "All" ? albums : albums.filter(a => a.category === activeTab);

  return (
    <>
      <Navbar />
      <main>
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink/90 via-pink-dark/80 to-charcoal/90" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519689680058-324335c77eba?w=1920&q=80')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
          <div className="relative z-10 text-center px-4">
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-4">Baby &amp; Maternity</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">Show the love, we capture it — life's most precious milestones.</p>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveTab(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 ${activeTab === cat ? "bg-pink text-white shadow-md" : "bg-white text-charcoal border border-gray-200 hover:border-pink hover:text-pink"}`}>
                  {cat}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAlbums.map((album, i) => (
                  <motion.div key={album.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                    <TiltCard className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4 shadow-sm">
                        <ImageWithFallback src={album.img} alt={album.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <h3 className="font-serif text-lg text-charcoal">{album.title}</h3>
                      <p className="text-gray-400 text-xs mt-1">{album.date} &middot; {album.category}</p>
                    </TiltCard>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section className="py-16 px-4 bg-pink">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Cherish Every Milestone</h2>
            <p className="text-white/80 text-lg mb-8">Let us capture your family's most precious moments.</p>
            <Link href="/#contact" className="px-8 py-3.5 bg-white text-pink text-sm font-medium tracking-widest uppercase rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg inline-block">Book Us Now</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}