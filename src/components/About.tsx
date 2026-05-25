"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import ImageWithFallback from "./ImageWithFallback";

export default function About() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="About Muhurtham Photography"
          subtitle="Show the love, we capture it — every emotion, every milestone, every memory."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
              <ImageWithFallback src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" alt="Muhurtham Photography wedding photography" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-pink/10 rounded-2xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-3xl md:text-4xl text-charcoal leading-tight">
              Capturing Life&apos;s Beautiful
              <br />
              <span className="text-pink">Moments Across Tamil Nadu</span>
            </h3>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At Muhurtham Photography, we believe every wedding, every new arrival, and every precious milestone is a unique story that deserves to be preserved with artistry and passion. Based in Sirkali, our team of dedicated photographers and cinematographers captures timeless memories across Tamil Nadu.
              </p>
              <p>
                From the intricate details of bridal jewellery to the raw emotions of the first look, from the giggles of a baby shoot to the glow of maternity — we document every frame with cinematic precision and heartfelt storytelling.
              </p>
              <p>
                Our style blends traditional elegance with contemporary aesthetics, ensuring your album is as unique as your story. We also specialize in baby shoots, maternity photography, and pre-wedding shoots.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-4">
              <div>
                <span className="block font-serif text-3xl text-pink font-bold">
                  500+
                </span>
                <span className="text-sm text-gray-500">Weddings Covered</span>
              </div>
              <div>
                <span className="block font-serif text-3xl text-pink font-bold">
                  12+
                </span>
                <span className="text-sm text-gray-500">Years Experience</span>
              </div>
              <div>
                <span className="block font-serif text-3xl text-pink font-bold">
                  50+
                </span>
                <span className="text-sm text-gray-500">Awards Won</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
