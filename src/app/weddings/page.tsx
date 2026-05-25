"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TiltCard from "@/components/TiltCard";
import ImageWithFallback from "@/components/ImageWithFallback";
import { albums, categories, categoryContent } from "@/data/albums";

export default function WeddingsPage() {
  const [activeTab, setActiveTab] = useState<(typeof categories)[number]>("Hindu Wedding");
  const content = categoryContent[activeTab];
  const filteredAlbums = albums.filter(a => a.category === activeTab);

  return (
    <>
      <Navbar />
      <main>
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80" alt="Weddings" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-4">Wedding Gallery</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">Show the love, we capture it — every ritual, every emotion, every moment.</p>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 mb-14">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-16">
                  <div>
                    <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">{content.heading}</h2>
                    <p className="text-gray-600 leading-relaxed">{content.text}</p>
                  </div>
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <ImageWithFallback src={content.image} alt={content.heading} className="w-full h-[400px] object-cover" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredAlbums.length > 0 ? (
                    filteredAlbums.map((album, i) => (
                      <motion.div
                        key={album.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Link href={`/albums/${album.slug}`}>
                          <TiltCard className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-4 shadow-sm">
                              <ImageWithFallback src={album.img} alt={album.couple} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <h3 className="font-serif text-lg text-charcoal">{album.couple}</h3>
                            <p className="text-gray-400 text-xs mt-1">{album.date}</p>
                          </TiltCard>
                        </Link>
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-16">
                      <p className="text-gray-400">No albums available in this category yet.</p>
                    </div>
                  )}
                </div>
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
