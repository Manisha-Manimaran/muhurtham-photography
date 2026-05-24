"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const testimonials = [
  {
    name: "Arjun & Priya",
    event: "Hindu Wedding",
    rating: 5,
    text: "Muhurtham Photography captured every moment of our wedding so beautifully. The candid shots are our favorites — they caught emotions we didn't even know we were showing. Truly world-class work!",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=150&q=80",
  },
  {
    name: "Rahul & Sneha",
    event: "Christian Wedding",
    rating: 5,
    text: "The cinematic wedding film brought tears to our eyes. Every frame was like a work of art. Thank you for preserving our memories so perfectly.",
    img: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=150&q=80",
  },
  {
    name: "Karthik & Divya",
    event: "Engagement + Wedding",
    rating: 5,
    text: "From the engagement to the reception, every shot was stunning. The team was professional, unobtrusive, and made us feel completely at ease.",
    img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=150&q=80",
  },
  {
    name: "Naveen & Anjali",
    event: "Muslim Wedding",
    rating: 5,
    text: "The album design is absolutely gorgeous. Our families have been fighting over who gets to keep it! Thank you for creating such a timeless heirloom.",
    img: "https://images.unsplash.com/photo-1509631120183-7e0556b2129f?w=150&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="What Couples Say"
          subtitle="Real words from the couples whose love stories we've had the privilege of capturing."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg
                    key={s}
                    className={`w-4 h-4 ${
                      s < t.rating ? "text-pink" : "text-gray-200"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-pink/20">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-charcoal">
                    {t.name}
                  </h4>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    {t.event}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
