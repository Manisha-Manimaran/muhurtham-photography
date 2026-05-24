"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import TiltCard from "./TiltCard";

const services = [
  {
    title: "Wedding Photography",
    desc: "Comprehensive coverage of your wedding day from morning preparations to the final farewell. Every ritual, every emotion, beautifully documented.",
    icon: "M",
    price: "Starting ₹50,000",
  },
  {
    title: "Candid Photography",
    desc: "Unposed, natural moments that tell the real story of your day. Laughter, tears, and genuine connections captured as they happen.",
    icon: "C",
    price: "Starting ₹35,000",
  },
  {
    title: "Wedding Cinematography",
    desc: "Cinematic wedding films that feel like a movie. Drone shots, slow-motion highlights, and professionally edited sequences.",
    icon: "F",
    price: "Starting ₹75,000",
  },
  {
    title: "Pre-Wedding Shoot",
    desc: "Creative pre-wedding photoshoots at stunning locations. Tell your love story before the big day with artistic frames.",
    icon: "P",
    price: "Starting ₹25,000",
  },
  {
    title: "Post-Wedding Shoot",
    desc: "A relaxed, creative shoot after the wedding. No timeline pressure, just beautiful portraits of the two of you.",
    icon: "S",
    price: "Starting ₹20,000",
  },
  {
    title: "Album Design",
    desc: "Premium handcrafted wedding albums. Fine-art printing with leather, silk, or linen covers. A timeless heirloom for generations.",
    icon: "A",
    price: "Starting ₹15,000",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Our Services"
          subtitle="From photography to cinematic films and premium albums, we offer everything you need to treasure your wedding forever."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <TiltCard tiltDegree={8} className="group bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-pink/10 flex items-center justify-center mb-5 group-hover:bg-pink transition-colors duration-300">
                  <span className="text-lg font-bold text-pink group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </span>
                </div>
              <h3 className="font-serif text-2xl text-charcoal mb-3 group-hover:text-pink transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-4 text-sm">
                {service.desc}
              </p>
              <span className="inline-block text-pink font-medium text-sm tracking-wider uppercase">
                {service.price}
              </span>
            </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
