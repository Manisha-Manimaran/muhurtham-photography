"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TiltCard from "@/components/TiltCard";
import ImageWithFallback from "@/components/ImageWithFallback";

const videos = [
  {
    id: 1,
    title: "Wedding Cinematic",
    category: "Wedding Films",
    src: "/videos/hero-wedding.mp4",
    poster: "/images/1519741497674-611481863552.jpg",
  },
  {
    id: 2,
    title: "Baby Shoot Memories",
    category: "Baby Shoot",
    src: "/videos/hero-wedding.mp4",
    poster: "/images/1519689680058-324335c77eba.jpg",
  },
  {
    id: 3,
    title: "Maternity Glow",
    category: "Maternity",
    src: "/videos/hero-wedding.mp4",
    poster: "/images/1544027993-37dbfe43562a.jpg",
  },
];

function VideoCard({ video }: { video: typeof videos[0] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handleMouseEnter = () => {
    setPlaying(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setPlaying(false);
    videoRef.current?.pause();
    if (videoRef.current) videoRef.current.currentTime = 0;
  };

  return (
    <TiltCard tiltDegree={6} className="group cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div
        className="relative overflow-hidden aspect-video bg-gray-100"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          src={video.src}
          poster={video.poster}
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          preload="metadata"
        />
        {!playing && (
          <>
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-all duration-300 group-hover:bg-black/10">
              <div className="w-16 h-16 rounded-full bg-pink/90 flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute top-3 left-3">
              <span className="bg-pink text-white text-xs px-3 py-1 rounded-lg font-medium">{video.category}</span>
            </div>
          </>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg text-charcoal group-hover:text-pink transition-colors">{video.title}</h3>
      </div>
    </TiltCard>
  );
}

export default function VideosPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink/90 via-pink-dark/80 to-charcoal/90" />
          <div className="absolute inset-0 bg-[url('/images/1519741497674-611481863552.jpg')] bg-cover bg-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
          <div className="relative z-10 text-center px-4">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-5xl md:text-7xl text-white mb-4">Our Videos</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-white/70 text-lg max-w-2xl mx-auto">
              Relive the captured moments with us
            </motion.p>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6">Wedding Films &amp; Videos</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A photograph captures a moment, but a film brings your entire story to life. Our cinematic wedding films are crafted to preserve not just the visuals, but the laughter, the tears, and the emotions that make your day unforgettable.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From the nervous excitement of the preparations to the joyous celebrations on the dance floor, we weave every candid moment into a beautiful narrative. Let us tell your love story through the art of cinematic storytelling.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <ImageWithFallback src="/images/1492691527719-9d1e07e534b4.jpg" alt="Wedding Films & Videos" className="w-full h-[400px] object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto space-y-10">
              {videos.map((video, i) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                >
                  <VideoCard video={video} />
                </motion.div>
              ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}