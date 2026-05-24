"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTAStrip() {
  return (
    <section className="py-20 px-4 bg-pink">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight">
          Ready to Capture Your Love Story?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Let&apos;s create something beautiful together. Book your wedding date
          now and get exclusive early-bird pricing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#contact"
            className="px-8 py-3.5 bg-white text-pink text-sm font-medium tracking-widest uppercase rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book Us Now
          </Link>
          <a
            href="tel:+919629273477"
            className="px-8 py-3.5 border-2 border-white text-white text-sm font-medium tracking-widest uppercase rounded-lg hover:bg-white hover:text-pink transition-all duration-300"
          >
            Call 96292 73477
          </a>
        </div>
      </motion.div>
    </section>
  );
}
