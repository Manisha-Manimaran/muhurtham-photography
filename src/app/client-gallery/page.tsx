"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const albums = [
  {
    id: 1, couple: "Arjun & Priya", date: "12 Dec 2025", venue: "The Leela Palace, Chennai",
    thumb: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80", photos: 248,
  },
  {
    id: 2, couple: "Vignesh & Meera", date: "28 Nov 2025", venue: "ITC Grand Chola, Chennai",
    thumb: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80", photos: 312,
  },
  {
    id: 3, couple: "Rahul & Sneha", date: "15 Oct 2025", venue: "Taj Coromandel, Chennai",
    thumb: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80", photos: 189,
  },
  {
    id: 4, couple: "Karthik & Divya", date: "05 Sep 2025", venue: "Park Hyatt, Chennai",
    thumb: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80", photos: 276,
  },
  {
    id: 5, couple: "Naveen & Anjali", date: "20 Aug 2025", venue: "Radisson Blu, Chennai",
    thumb: "https://images.unsplash.com/photo-1509631120183-7e0556b2129f?w=600&q=80", photos: 201,
  },
  {
    id: 6, couple: "Ajay & Nisha", date: "10 Jun 2025", venue: "GRT Grand, Chennai",
    thumb: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80", photos: 334,
  },
  {
    id: 7, couple: "Suresh & Kavya", date: "05 Jul 2025", venue: "Vivanta, Trichy",
    thumb: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80", photos: 156,
  },
  {
    id: 8, couple: "Bala & Harini", date: "18 May 2025", venue: "Anantaa, Pondicherry",
    thumb: "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?w=600&q=80", photos: 223,
  },
  {
    id: 9, couple: "Deepak & Anu", date: "08 Apr 2025", venue: "Neemrana, Chennai",
    thumb: "https://images.unsplash.com/photo-1525218287586-4f8b6b8b5b1f?w=600&q=80", photos: 178,
  },
];

const actions = [
  { label: "View Photos", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
  { label: "Download", icon: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { label: "Favorites", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
  { label: "Share", icon: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" },
];

export default function ClientGalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gradient-to-br from-pink/90 to-pink-dark" />
          </div>
          <div className="relative z-10 text-center px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="font-serif text-5xl md:text-7xl text-white mb-4">Private Client Galleries</h1>
              <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
                View, download, and share your wedding photos. Each gallery is password-protected for your privacy.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/#contact" className="px-8 py-3.5 bg-white text-pink text-sm font-medium tracking-widest uppercase rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg">
                  Request Gallery Access
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-gray-500 max-w-2xl mx-auto">
                Enter the password provided by Muhurtham Photography to access your private gallery.
                Each gallery contains all edited high-resolution photos from your wedding.
              </p>
            </div>

            <div className="max-w-md mx-auto mb-16">
              <div className="flex gap-3">
                <input
                  type="password"
                  placeholder="Enter Gallery Password"
                  className="flex-1 px-4 py-3.5 border border-gray-200 rounded-xl text-charcoal placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink/30 focus:border-pink transition-all duration-200 text-sm"
                />
                <button className="px-6 py-3.5 bg-pink text-white text-sm font-medium tracking-wider uppercase rounded-xl hover:bg-pink-dark transition-all duration-300 shadow-md whitespace-nowrap">
                  Unlock
                </button>
              </div>
            </div>

            <h2 className="font-serif text-3xl text-center text-charcoal mb-10">Recent Wedding Galleries</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {albums.map((album, i) => (
                <motion.div
                  key={album.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={album.thumb} alt={album.couple} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute top-3 right-3">
                      <span className="bg-white/90 text-charcoal text-xs px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm flex items-center gap-1.5">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z" />
                        </svg>
                        Protected
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-pink text-white text-xs px-3 py-1 rounded-lg font-medium">{album.photos} Photos</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-xl text-charcoal mb-1">{album.couple}</h3>
                    <p className="text-gray-400 text-sm mb-1">{album.date}</p>
                    <p className="text-gray-500 text-xs mb-4">{album.venue}</p>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {actions.map((action) => (
                        <button
                          key={action.label}
                          className="flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-medium text-charcoal bg-gray-50 hover:bg-pink hover:text-white rounded-xl transition-all duration-200 border border-gray-100"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={action.icon} />
                          </svg>
                          <span>{action.label}</span>
                        </button>
                      ))}
                    </div>

                    <button className="w-full py-2.5 text-sm font-medium tracking-wider uppercase text-pink border-2 border-pink rounded-xl hover:bg-pink hover:text-white transition-all duration-300">
                      Access Gallery
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mt-16 bg-gray-50 rounded-2xl p-12"
            >
              <h3 className="font-serif text-2xl text-charcoal mb-3">Don&apos;t Have Access Yet?</h3>
              <p className="text-gray-500 mb-6 max-w-lg mx-auto">
                Contact us to receive your private gallery link and password. We typically send gallery access within 2 weeks of your wedding.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/#contact" className="px-8 py-3.5 bg-pink text-white text-sm font-medium tracking-widest uppercase rounded-lg hover:bg-pink-dark transition-all duration-300 shadow-lg">
                  Request Gallery Access
                </Link>
                <a href="https://wa.me/919629273477" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 border-2 border-pink text-pink text-sm font-medium tracking-widest uppercase rounded-lg hover:bg-pink hover:text-white transition-all duration-300">
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
