"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span
        className={`inline-block w-20 h-0.5 mb-6 ${
          light ? "bg-pink-light" : "bg-pink"
        }`}
      />
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-2xl mx-auto ${
            light ? "text-white/80" : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
