"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionTitle from "./SectionTitle";

const clientAlbums = [
  {
    id: 1,
    couple: "Arjun & Priya",
    date: "12 Dec 2025",
    venue: "The Leela Palace, Chennai",
    thumb: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
  },
  {
    id: 2,
    couple: "Vignesh & Meera",
    date: "28 Nov 2025",
    venue: "ITC Grand Chola, Chennai",
    thumb: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
  },
  {
    id: 3,
    couple: "Rahul & Sneha",
    date: "15 Oct 2025",
    venue: "Taj Coromandel, Chennai",
    thumb: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
  },
  {
    id: 4,
    couple: "Karthik & Divya",
    date: "05 Sep 2025",
    venue: "Park Hyatt, Chennai",
    thumb: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80",
  },
  {
    id: 5,
    couple: "Naveen & Anjali",
    date: "20 Aug 2025",
    venue: "Radisson Blu, Chennai",
    thumb: "https://images.unsplash.com/photo-1509631120183-7e0556b2129f?w=600&q=80",
  },
  {
    id: 6,
    couple: "Ajay & Nisha",
    date: "10 Jun 2025",
    venue: "GRT Grand, Chennai",
    thumb: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80",
  },
];

const actions = [
  { label: "View Photos", color: "bg-pink/10 text-pink hover:bg-pink hover:text-white" },
  { label: "Download Photos", color: "bg-gray-100 text-charcoal hover:bg-pink hover:text-white" },
  { label: "Select Favorites", color: "bg-gray-100 text-charcoal hover:bg-pink hover:text-white" },
  { label: "Share Gallery", color: "bg-gray-100 text-charcoal hover:bg-pink hover:text-white" },
];

export default function ClientGallerySection() {
  return (
    <section id="client-gallery" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Private Wedding Galleries"
          subtitle="View, download, share, and select your favorite memories from your special day."
        />

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Link
            href="/client-gallery"
            className="px-8 py-3.5 bg-pink text-white text-sm font-medium tracking-widest uppercase rounded-lg hover:bg-pink-dark transition-all duration-300 shadow-lg"
          >
            Client Login
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientAlbums.map((album, i) => (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={album.thumb}
                  alt={album.couple}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-white/90 text-charcoal text-xs px-3 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-1.5 shadow-sm">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z" />
                    </svg>
                    Password Protected
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif text-xl text-charcoal mb-1">{album.couple}</h3>
                <p className="text-gray-400 text-sm mb-1">{album.date}</p>
                <p className="text-gray-500 text-xs mb-5">{album.venue}</p>

                <div className="grid grid-cols-2 gap-2 mb-5">
                  {actions.map((action) => (
                    <button
                      key={action.label}
                      className={`px-3 py-2.5 text-xs font-medium rounded-xl transition-all duration-200 border-0 ${action.color}`}
                    >
                      {action.label}
                    </button>
                  ))}
                </div>

                <Link
                  href="/client-gallery"
                  className="block w-full py-2.5 text-sm font-medium tracking-wider uppercase text-center text-pink border-2 border-pink rounded-xl hover:bg-pink hover:text-white transition-all duration-300"
                >
                  Access Your Gallery
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 mb-6 max-w-xl mx-auto">
            Don&apos;t have access yet? Contact us to receive your private
            gallery link and password.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-pink text-white text-sm font-medium tracking-widest uppercase rounded-lg hover:bg-pink-dark transition-all duration-300 shadow-lg"
          >
            Access Your Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
