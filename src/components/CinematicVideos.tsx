"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import ImageWithFallback from "./ImageWithFallback";

const categories = [
  "All",
  "Wedding Films",
  "Candid Videos",
  "Outdoor Films",
  "Short Stories",
  "Reception Highlights",
];

const videos = Array.from({ length: 9 }, (_, i) => {
  const catIdx = i % (categories.length - 1);
  const category = categories[catIdx + 1];
  const seed = 600 + i;
  return {
    id: i + 1,
    title: `${category} — ${["Eternal Love", "Sacred Vows", "Joy Unbound", "Golden Hour", "Dancing Stars", "Silent Tears", "Forever Us", "Blissful Day", "New Beginnings"][i]}`,
    category,
    thumbnail: `https://picsum.photos/seed/film${seed}/800/450`,
    duration: `${2 + (i % 4)}:${45 + (i * 23) % 15}`.padEnd(5, "0"),
  };
});

export default function CinematicVideos() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? videos
      : videos.filter((v) => v.category === activeCategory);

  return (
    <section id="videos" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Cinematic Wedding Films"
          subtitle="Every frame tells a story. Watch our cinematic wedding films that capture love in motion."
        />

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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-video mb-4 bg-gray-100 shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                  <ImageWithFallback src={video.thumbnail} alt={video.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-all duration-300 group-hover:bg-black/20">
                    <div className="w-16 h-16 rounded-full bg-pink/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg">
                      <svg
                        className="w-7 h-7 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-lg">
                    {video.duration}
                  </span>
                  <div className="absolute top-3 left-3">
                    <span className="bg-pink text-white text-xs px-3 py-1 rounded-lg font-medium">
                      {video.category}
                    </span>
                  </div>
                </div>
                <h3 className="font-serif text-lg text-charcoal group-hover:text-pink transition-colors">
                  {video.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/videos"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium tracking-widest uppercase text-pink border-2 border-pink rounded-lg hover:bg-pink hover:text-white transition-all duration-300"
          >
            Watch All Films
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
