"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const posts = [
  {
    title: "5 Tips for Choosing the Perfect Wedding Photographer",
    excerpt:
      "Your wedding photos are forever. Here's how to find a photographer who truly understands your vision and style.",
    date: "Mar 15, 2026",
    img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
    category: "Wedding Tips",
  },
  {
    title: "Traditional Tamil Wedding Rituals: A Complete Guide",
    excerpt:
      "From Nichayathartham to Muhurtham, understand every ritual of a traditional Tamil Brahmin wedding ceremony.",
    date: "Feb 28, 2026",
    img: "https://images.unsplash.com/photo-1585747861115-7bb8c6a8b38f?w=600&q=80",
    category: "Traditions",
  },
  {
    title: "Top 10 Pre-Wedding Shoot Locations in South India",
    excerpt:
      "From the backwaters of Kerala to the palaces of Mysore, explore the most stunning locations for your pre-wedding shoot.",
    date: "Feb 10, 2026",
    img: "https://images.unsplash.com/photo-1509631120183-7e0556b2129f?w=600&q=80",
    category: "Destinations",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Wedding Stories & Tips"
          subtitle="Explore our blog for wedding inspiration, planning tips, and behind-the-scenes stories."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[16/10] mb-5 shadow-sm">
                <img
                  src={post.img}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-pink text-white text-xs px-3 py-1 rounded-lg font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                {post.date}
              </p>
              <h3 className="font-serif text-xl text-charcoal group-hover:text-pink transition-colors mb-2">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
