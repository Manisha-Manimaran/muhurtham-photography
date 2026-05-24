"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import TiltCard from "./TiltCard";

const categories = [
  "All",
  "Rituals",
  "Candid Moments",
  "Family Moments",
  "Reception Highlights",
  "Baby Shoot",
  "Maternity",
  "Pre-Wedding",
];

const galleryImages = Array.from({ length: 24 }, (_, i) => {
  const catIdx = i % (categories.length - 1);
  const category = categories[catIdx + 1];
  const seed = 300 + i;
  const height = 300 + (i % 4) * 120 + (i * 13) % 100;
  return {
    id: i + 1,
    src: `https://picsum.photos/seed/vs${seed}/600/${height}`,
    category,
    title: `Wedding ${category} ${i + 1}`,
  };
});

export default function PhotoGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Photo Gallery"
          subtitle="A carefully curated collection of our finest frames, organized by the moments that matter most."
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
            className="masonry-grid"
          >
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
                layout
                className="masonry-item"
              >
                <TiltCard className="group relative overflow-hidden rounded-2xl cursor-pointer">
                  <img
                    src={img.src}
                    alt={img.title}
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).style.background = '#e5e7eb'; (e.target as HTMLImageElement).style.padding = '40%' }}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                      {img.category}
                    </span>
                  </div>
                </TiltCard>
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
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium tracking-widest uppercase text-pink border-2 border-pink rounded-lg hover:bg-pink hover:text-white transition-all duration-300"
          >
            View Full Gallery
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
