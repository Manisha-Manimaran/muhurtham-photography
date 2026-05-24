"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionTitle from "./SectionTitle";
import TiltCard from "./TiltCard";

const albums = [
  { couple: "Arjun + Priya", date: "Dec 2025", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80" },
  { couple: "Vignesh + Meera", date: "Nov 2025", img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80" },
  { couple: "Rahul + Sneha", date: "Oct 2025", img: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80" },
  { couple: "Karthik + Divya", date: "Sep 2025", img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80" },
  { couple: "Naveen + Anjali", date: "Aug 2025", img: "https://images.unsplash.com/photo-1509631120183-7e0556b2129f?w=600&q=80" },
  { couple: "Suresh + Kavya", date: "Jul 2025", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80" },
  { couple: "Ajay + Nisha", date: "Jun 2025", img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80" },
  { couple: "Bala + Harini", date: "May 2025", img: "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?w=600&q=80" },
];

export default function FeaturedWeddings() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Featured Wedding Albums"
          subtitle="Each wedding tells a unique story. Here are some of our favourite moments captured recently."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <img
                  src={album.img}
                  alt={album.couple}
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.background = '#e5e7eb'; (e.target as HTMLImageElement).style.padding = '60%' }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
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
