"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import TiltCard from "./TiltCard";

const sections = [
  {
    id: "weddings",
    title: "Cinematic Wedding Photography",
    subtitle: "Show the love, we capture it",
    description:
      "From the moment the bride puts on her jewellery to the tearful farewell, we capture every emotion with cinematic precision. Our wedding photography blends traditional rituals with modern storytelling, creating a visual narrative that you'll treasure forever.",
    features: [
      "Full-day wedding coverage",
      "Drone cinematography",
      "Same-day edit highlights",
      "Premium edited gallery",
    ],
    video: "/videos/hero-wedding.mp4",
    poster:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    cta: "View Wedding Gallery",
    ctaHref: "/gallery",
    reversed: false,
  },
  {
    id: "baby",
    title: "Baby & Maternity Photography",
    subtitle: "Cherish every precious milestone",
    description:
      "From the glowing anticipation of maternity to the first adorable smiles of your little one, we capture life's most precious moments with warmth and tenderness. Our baby shoots are playful, natural, and designed to create timeless memories you'll treasure forever.",
    features: [
      "Maternity photoshoots",
      "Newborn photography",
      "Baby milestone sessions",
      "Family portraits",
    ],
    video: "/videos/hero-wedding.mp4",
    poster:
      "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80",
    cta: "View Baby Gallery",
    ctaHref: "/gallery?category=Baby+Shoot",
    reversed: true,
  },
];

export default function ShowcaseSections() {
  const addFallback = (e: React.SyntheticEvent<HTMLImageElement | HTMLVideoElement>) => {
    const target = e.currentTarget;
    if (target.tagName === "VIDEO") {
      (target as HTMLVideoElement).poster = "";
    }
  };

  return (
    <>
      {sections.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className="py-16 md:py-24 px-4 bg-white"
        >
          <div className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center`}>
              <motion.div
                initial={{ opacity: 0, x: section.reversed ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={section.reversed ? "lg:order-2" : ""}
>
                <TiltCard tiltDegree={6} className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg bg-gray-100">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={section.poster}
                    onError={addFallback}
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={section.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-pink/80 flex items-center justify-center">
                      <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: section.reversed ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className={section.reversed ? "lg:order-1" : ""}
              >
                <span className="text-pink text-sm font-medium tracking-[0.2em] uppercase mb-3 block">
                  {section.subtitle}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal leading-tight mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {section.description}
                </p>
                <ul className="space-y-2.5 mb-8">
                  {section.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-charcoal/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={section.ctaHref}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-pink text-white text-sm font-medium tracking-wider uppercase rounded-lg hover:bg-pink-dark transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {section.cta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
