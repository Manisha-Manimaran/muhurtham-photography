"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ImageWithFallback from "@/components/ImageWithFallback";

interface CategoryPageProps {
  title: string;
  heroImage: string;
  heroDescription: string;
  contentHeading: string;
  contentText: string;
  contentImage: string;
  photos: string[];
}

export default function CategoryPage({
  title,
  heroImage,
  heroDescription,
  contentHeading,
  contentText,
  contentImage,
  photos,
}: CategoryPageProps) {
  return (
    <main>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback src={heroImage} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/40" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-4">{title}</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">{heroDescription}</p>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">{contentHeading}</h2>
              <p className="text-gray-600 leading-relaxed">{contentText}</p>
            </div>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <ImageWithFallback src={contentImage} alt={title} className="w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">Our Portfolio</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              A glimpse of our work in {title.toLowerCase()}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 9) * 0.05 }}
                className="group relative overflow-hidden rounded-lg aspect-[4/5] shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <ImageWithFallback
                  src={photo}
                  alt={`${title} photo ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-pink">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Ready to Create Your Album?</h2>
          <p className="text-white/80 text-lg mb-8">Let&apos;s capture your love story with the same passion and artistry.</p>
          <Link href="/#contact" className="px-8 py-3.5 bg-white text-pink text-sm font-medium tracking-widest uppercase rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg inline-block">
            Book Us Now
          </Link>
        </div>
      </section>
    </main>
  );
}
