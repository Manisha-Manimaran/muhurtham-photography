"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

function useMousePosition() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return mousePos;
}

function FloatingShape({
  className,
  depth = 1,
  ...props
}: {
  className?: string;
  depth?: number;
} & React.HTMLAttributes<HTMLDivElement>) {
  const mousePos = useMousePosition();
  const moveX = useMotionValue(0);
  const moveY = useMotionValue(0);
  const springX = useSpring(moveX, { stiffness: 50, damping: 20 });
  const springY = useSpring(moveY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    moveX.set((mousePos.x - 0.5) * 40 * depth);
    moveY.set((mousePos.y - 0.5) * 40 * depth);
  }, [mousePos, depth, moveX, moveY]);

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className={className}
      {...(props as any)}
    />
  );
}

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[90vh] min-h-[500px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-wedding.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      </div>

      <FloatingShape
        depth={1.5}
        className="absolute top-[15%] left-[8%] w-20 h-20 md:w-28 md:h-28 border-2 border-pink/30 rounded-full pointer-events-none"
      />
      <FloatingShape
        depth={0.8}
        className="absolute top-[25%] right-[12%] w-12 h-12 md:w-16 md:h-16 border-2 border-white/20 rotate-45 pointer-events-none"
        style={{ transform: "rotate(45deg)" }}
      />
      <FloatingShape
        depth={2}
        className="absolute bottom-[20%] left-[15%] w-10 h-10 md:w-14 md:h-14 bg-pink/10 rounded-full blur-sm pointer-events-none"
      />
      <FloatingShape
        depth={1.2}
        className="absolute bottom-[30%] right-[8%] w-16 h-16 md:w-24 md:h-24 border border-white/10 rounded-full pointer-events-none"
      />
      <FloatingShape
        depth={0.5}
        className="absolute top-[40%] left-[50%] w-8 h-8 bg-white/5 rounded-full pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        style={{ perspective: "1000px" }}
      >
        <motion.span
          initial={{ opacity: 0, y: 20, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-block text-pink-light tracking-[0.25em] uppercase text-sm md:text-base mb-6 font-medium"
        >
          Premium Wedding Photography Studio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30, rotateX: -20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-tight mb-6"
          style={{ transformStyle: "preserve-3d" }}
        >
          Muhurtham Photography
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20, rotateX: -10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-xl md:text-2xl text-white/90 font-serif mb-2"
        >
          Show the love, we capture it
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="text-white/70 text-base md:text-lg max-w-3xl mx-auto mb-10 font-light leading-relaxed"
        >
          Capturing emotions, rituals, candid moments and timeless love stories. Also specializing in baby shoots, maternity &amp; pre-wedding photography.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/gallery"
            className="px-8 py-3.5 bg-white text-charcoal text-sm font-medium tracking-widest uppercase rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            View Gallery
          </Link>
          <Link
            href="/#contact"
            className="px-8 py-3.5 bg-pink text-white text-sm font-medium tracking-widest uppercase rounded-lg hover:bg-pink-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Book Us Now
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
