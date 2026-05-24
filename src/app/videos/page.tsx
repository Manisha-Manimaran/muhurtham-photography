"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  "All",
  "Wedding Films",
  "Candid Videos",
  "Outdoor Films",
  "Short Stories",
  "Reception Highlights",
];

const videos = Array.from({ length: 12 }, (_, i) => {
  const catIdx = i % (categories.length - 1);
  const category = categories[catIdx + 1];
  const seed = 800 + i;
  return {
    id: i + 1,
    title: `${["Eternal Love Story", "Sacred Ceremony", "Joyful Celebrations", "Golden Moments", "Dancing Under Stars", "Tears of Joy", "Forever Begins Today", "Blissful Union", "New Chapter", "Heartfelt Vows", "Magical Evening", "Love in Frames"][i]}`,
    category,
    thumbnail: `https://picsum.photos/seed/video${seed}/800/450`,
    duration: `${2 + (i % 6)}:${15 + (i * 27) % 45}`.padEnd(5, "0"),
    views: `${(10 + i * 3)}K`,
  };
});

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [playingId, setPlayingId] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? videos : videos.filter(v => v.category === activeCategory);

  return (
    <>
      <Navbar />
      <main>
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gradient-to-br from-charcoal to-gray-800" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-4">Cinematic Films</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Experience the art of visual storytelling through our cinematic wedding films.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 ${
                    activeCategory === cat
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
                key={activeCategory}
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((video, i) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                    className="group"
                  >
                    <div
                      className="relative overflow-hidden rounded-2xl aspect-video mb-4 bg-gray-100 shadow-sm group-hover:shadow-xl transition-all duration-300 cursor-pointer"
                      onClick={() => setPlayingId(playingId === video.id ? null : video.id)}
                    >
                      {playingId === video.id ? (
                        <div className="w-full h-full bg-black flex items-center justify-center">
                          <div className="text-center p-8">
                            <div className="w-20 h-20 rounded-full bg-pink/90 flex items-center justify-center mx-auto mb-4">
                              <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                            <p className="text-white/60 text-sm">Playing preview...</p>
                          </div>
                        </div>
                      ) : (
                        <>
                          <img src={video.thumbnail} alt={video.title} loading="lazy" onError={(e) => { (e.target as HTMLImageElement).style.background = '#e5e7eb'; (e.target as HTMLImageElement).style.padding = '40%' }} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-all duration-300 group-hover:bg-black/30">
                            <div className="w-16 h-16 rounded-full bg-pink/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg">
                              <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                          <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-lg">{video.duration}</span>
                          <div className="absolute top-3 left-3">
                            <span className="bg-pink text-white text-xs px-3 py-1 rounded-lg font-medium">{video.category}</span>
                          </div>
                        </>
                      )}
                    </div>
                    <h3 className="font-serif text-lg text-charcoal group-hover:text-pink transition-colors">{video.title}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-gray-400 uppercase tracking-wider">{video.category}</span>
                      <span className="text-xs text-gray-300">&bull;</span>
                      <span className="text-xs text-gray-400">{video.views} views</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
