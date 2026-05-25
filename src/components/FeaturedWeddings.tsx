"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import TiltCard from "./TiltCard";
import ImageWithFallback from "./ImageWithFallback";

const featuredAlbums = [
  {
    slug: "candid-photography",
    title: "Candid Photography",
    subtitle: "Natural emotions and candid moments",
    img: "https://picsum.photos/seed/candid-moment/800/1000",
  },
  {
    slug: "outdoor-photography",
    title: "Outdoor Photography",
    subtitle: "Beautiful outdoor couple portraits",
    img: "https://picsum.photos/seed/outdoor-couple/800/1000",
  },
  {
    slug: "bridal-portraits",
    title: "Bridal Portraits",
    subtitle: "Elegant bridal portraits and details",
    img: "https://picsum.photos/seed/bridal-portrait/800/1000",
  },
];

export default function FeaturedWeddings() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Featured Albums"
          subtitle="Explore our signature photography styles — each crafted to tell your unique story."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredAlbums.map((album, i) => (
            <motion.div
              key={album.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link href={`/albums/${album.slug}`} className="group block">
                <TiltCard className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-5 shadow-sm">
                  <ImageWithFallback src={album.img} alt={album.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <span className="text-white text-sm font-medium tracking-wider uppercase">
                      View Album
                    </span>
                  </div>
                </TiltCard>
                <h3 className="font-serif text-xl text-charcoal group-hover:text-pink transition-colors mb-1">
                  {album.title}
                </h3>
                <p className="text-gray-400 text-sm">{album.subtitle}</p>
              </Link>
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
