"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TiltCard from "@/components/TiltCard";

const categories = ["All", "Hindu Wedding", "Christian Wedding", "Muslim Wedding", "Engagement"];

const albums = [
  { couple: "Arjun + Priya", date: "Dec 2025", category: "Hindu Wedding", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80" },
  { couple: "Vignesh + Meera", date: "Nov 2025", category: "Hindu Wedding", img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80" },
  { couple: "Rahul + Sneha", date: "Oct 2025", category: "Christian Wedding", img: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80" },
  { couple: "Karthik + Divya", date: "Sep 2025", category: "Hindu Wedding", img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80" },
  { couple: "Naveen + Anjali", date: "Aug 2025", category: "Muslim Wedding", img: "https://images.unsplash.com/photo-1509631120183-7e0556b2129f?w=600&q=80" },
  { couple: "Suresh + Kavya", date: "Jul 2025", category: "Engagement", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80" },
  { couple: "Bala + Harini", date: "May 2025", category: "Hindu Wedding", img: "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?w=600&q=80" },
  { couple: "Deepak + Anu", date: "Apr 2025", category: "Christian Wedding", img: "https://images.unsplash.com/photo-1525218287586-4f8b6b8b5b1f?w=600&q=80" },
  { couple: "Ganesh + Priya", date: "Mar 2025", category: "Hindu Wedding", img: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=600&q=80" },
  { couple: "Harish + Swetha", date: "Feb 2025", category: "Engagement", img: "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?w=600&q=80" },
  { couple: "Ishan + Fatma", date: "Jan 2025", category: "Muslim Wedding", img: "https://images.unsplash.com/photo-1591604466107-ec97e577d9e0?w=600&q=80" },
];

export default function WeddingsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const filteredAlbums = activeTab === "All" ? albums : albums.filter(a => a.category === activeTab);

  return (
    <>
      <Navbar />
      <main>
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80" alt="Weddings" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-4">Wedding Gallery</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">Show the love, we capture it — every ritual, every emotion, every moment.</p>
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
                  <motion.div key={album.couple} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                    <TiltCard className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4 shadow-sm">
                        <img src={album.img} alt={album.couple} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <h3 className="font-serif text-lg text-charcoal">{album.couple}</h3>
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
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Ready to Create Your Album?</h2>
            <p className="text-white/80 text-lg mb-8">Let&apos;s capture your love story with the same passion and artistry.</p>
            <Link href="/#contact" className="px-8 py-3.5 bg-white text-pink text-sm font-medium tracking-widest uppercase rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg inline-block">Book Us Now</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}