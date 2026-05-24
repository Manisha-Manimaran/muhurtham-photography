"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium tracking-widest uppercase transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-pink text-white hover:bg-pink-dark shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    outline:
      "border-2 border-pink text-pink hover:bg-pink hover:text-white",
    ghost: "text-charcoal hover:text-pink",
  };

  const content = (
    <motion.span
      className={`${base} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return (
    <button type={type} onClick={onClick}>
      {content}
    </button>
  );
}
