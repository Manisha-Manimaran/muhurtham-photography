"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle";

import TiltCard from "./TiltCard";
import ImageWithFallback from "./ImageWithFallback";

const categories = [
  { id: "all", label: "All" },
  { id: "hindu", label: "Hindu Wedding" },
  { id: "christian", label: "Christian Wedding" },
  { id: "muslim", label: "Muslim Wedding" },
  { id: "engagement", label: "Engagement" },
  { id: "reception", label: "Reception" },
  { id: "haldi", label: "Haldi" },
  { id: "outdoor", label: "Outdoor" },
  { id: "prewedding", label: "Pre-Wedding" },
];

const categoryImages: Record<string, string[]> = {
  all: [
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80",
  ],
  hindu: [
    "https://images.unsplash.com/photo-1585747861115-7bb8c6a8b38f?w=600&q=80",
    "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?w=600&q=80",
    "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=600&q=80",
  ],
  christian: [
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
    "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80",
  ],
  muslim: [
    "https://images.unsplash.com/photo-1591604466107-ec97e577d9e0?w=600&q=80",
    "https://images.unsplash.com/photo-1587271407850-ee8b1a5e3ec2?w=600&q=80",
  ],
  engagement: [
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80",
    "https://images.unsplash.com/photo-1509631120183-7e0556b2129f?w=600&q=80",
  ],
  reception: [
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80",
    "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80",
  ],
  haldi: [
    "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=600&q=80",
    "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?w=600&q=80",
  ],
  outdoor: [
    "https://images.unsplash.com/photo-1525218287586-4f8b6b8b5b1f?w=600&q=80",
    "https://images.unsplash.com/photo-1509631120183-7e0556b2129f?w=600&q=80",
  ],
  prewedding: [
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
  ],
};

export default function WeddingCategories() {
  const [active, setActive] = useState("all");

  const images = active === "all"
    ? Object.values(categoryImages).flat().slice(0, 8)
    : categoryImages[active] || [];

  return (
    <section id="weddings" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Wedding Categories"
          subtitle="Every culture tells a unique love story. We capture them all with elegance and artistry."
        />

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                active === cat.id
                  ? "bg-pink text-white shadow-lg shadow-pink/20"
                  : "bg-white text-charcoal border border-gray-200 hover:border-pink hover:text-pink"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {images.map((src, i) => (
              <TiltCard
                key={i}
                className="relative overflow-hidden rounded-2xl aspect-[4/5] group cursor-pointer"
              >
                <ImageWithFallback src={src} alt={`${active} wedding ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <span className="text-white text-sm font-medium tracking-wider uppercase">
                    View Gallery
                  </span>
                </div>
              </TiltCard>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
