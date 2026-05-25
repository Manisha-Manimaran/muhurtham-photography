"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import TiltCard from "./TiltCard";
import ImageWithFallback from "./ImageWithFallback";

const albums = [
  { couple: "Hindu Wedding", date: "Traditional ceremonies", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80" },
  { couple: "Muslim Wedding", date: "Elegant celebrations", img: "https://images.unsplash.com/photo-1591604466107-ec97e577d9e0?w=600&q=80" },
  { couple: "Christian Wedding", date: "Timeless love stories", img: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80" },
];

export default function FeaturedWeddings() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Featured Wedding Albums"
          subtitle="Each wedding tells a unique story. Here are some of our favourite moments captured recently."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album, i) => (
            <motion.div
              key={album.couple}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group cursor-pointer"
            >
              <TiltCard className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4 shadow-sm">
                <ImageWithFallback src={album.img} alt={album.couple} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <span className="text-white text-sm font-medium tracking-wider uppercase">
                    View Album
                  </span>
                </div>
              </TiltCard>
              <h3 className="font-serif text-xl text-charcoal group-hover:text-pink transition-colors">
                {album.couple}
              </h3>
              <p className="text-gray-400 text-sm mt-1">{album.date}</p>
            </motion.div>
          ))}
        </div>

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
            View All Albums
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
