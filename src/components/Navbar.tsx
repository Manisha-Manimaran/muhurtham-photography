"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems: {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string }[];
}[] = [
  {
    label: "Weddings",
    dropdown: [
      { label: "Hindu Wedding", href: "/gallery?category=Hindu+Wedding" },
      { label: "Christian Wedding", href: "/gallery?category=Christian+Wedding" },
      { label: "Muslim Wedding", href: "/gallery?category=Muslim+Wedding" },
      { label: "Destination Wedding", href: "/gallery?category=Engagement" },
      { label: "Outdoor Wedding", href: "/gallery?category=Outdoor" },
    ],
  },
  { label: "Videos", href: "/videos" },
  {
    label: "Baby",
    dropdown: [
      { label: "Maternity Shoot", href: "/#baby" },
      { label: "Baby Shoot", href: "/#baby" },
    ],
  },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (href?: string) => {
    setMenuOpen(false);
    setOpenDropdown(null);
    if (!href) return;
    if (href.startsWith("/#")) {
      if (pathname !== "/") {
        window.location.href = href;
        return;
      }
      const id = href.replace("/#", "#");
      const el = document.querySelector(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <img src="/muhurtham-logo.png" alt="Muhurtham Photography" className="h-10 md:h-12 w-auto" />
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-base md:text-xl font-bold tracking-tight text-charcoal">
                Muhurtham
              </span>
              <span className="font-serif text-base md:text-xl font-light tracking-tight text-pink -mt-1">
                Photography
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.label ? null : item.label
                      )
                    }
                    className="flex items-center gap-1 px-3 py-2 text-sm tracking-widest uppercase text-charcoal/80 hover:text-pink transition-colors whitespace-nowrap"
                  >
                    {item.label}
                    <svg
                      className={`w-3 h-3 transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-2 overflow-hidden"
                      >
                        {item.dropdown.map((sub) => (
                          <button
                            key={sub.label}
                            onClick={() => handleNavClick(sub.href)}
                            className="block w-full text-left px-5 py-2.5 text-sm text-charcoal/80 hover:text-pink hover:bg-pink/5 transition-colors tracking-wide"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href || "/"}
                  onClick={() => handleNavClick(item.href)}
                  className="px-3 py-2 text-sm tracking-widest uppercase text-charcoal/80 hover:text-pink transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="ml-4">
              <Link
                href="/#contact"
                onClick={() => handleNavClick("/#contact")}
                className="px-6 py-2.5 bg-pink text-white text-sm font-medium tracking-wider uppercase rounded-lg hover:bg-pink-dark transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Book Us Now
              </Link>
            </div>
          </div>

          <button
            className="lg:hidden p-2 text-charcoal"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg"
          >
            <div className="px-4 py-6 flex flex-col gap-1">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label}>
                    <span className="text-sm tracking-widest uppercase text-charcoal/60 px-3 py-2 block font-medium">
                      {item.label}
                    </span>
                    <div className="ml-4 mb-2 border-l-2 border-pink/20 pl-3 space-y-1">
                      {item.dropdown.map((sub) => (
                        <button
                          key={sub.label}
                          onClick={() => handleNavClick(sub.href)}
                          className="block w-full text-left text-sm text-charcoal/70 hover:text-pink transition-colors py-1.5"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href || "/"}
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm tracking-widest uppercase text-charcoal/80 hover:text-pink transition-colors py-2.5 px-3"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="border-t border-gray-100 pt-4 mt-2">
                <Link
                  href="/#contact"
                  onClick={() => handleNavClick("/#contact")}
                  className="block w-full text-center px-6 py-3 bg-pink text-white text-sm font-medium tracking-wider uppercase rounded-lg hover:bg-pink-dark transition-all"
                >
                  Book Us Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
