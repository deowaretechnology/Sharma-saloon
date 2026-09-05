"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Search, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { useBooking } from "@/components/booking/BookingContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openBooking } = useBooking();

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Detect page scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-cream/95 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "shadow-[0_4px_24px_rgba(23,18,14,0.08)]"
          : "border-b border-line/60"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12 h-18 flex items-center justify-between gap-6">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center shrink-0"
          aria-label="Sharma's Salon - Home"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/image/logo.png"
            alt="Sharma's Salon"
            width={220}
            height={80}
            priority
            className="w-[145px] sm:w-[165px] lg:w-[195px] h-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-[13px] font-medium text-ink/80">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative py-2 transition-colors duration-300 hover:text-gold-deep ${
                isActive(link.href) ? "text-gold-deep" : ""
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute left-0 right-0 -bottom-0.5 h-[1.5px] bg-gold-deep" />
              )}
            </Link>
          ))}

          
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden lg:block shrink-0">
          <button
            type="button"
            onClick={() => openBooking()}
            className="group inline-flex items-center justify-center gap-2 bg-gold text-charcoal px-6 xl:px-7 py-3.5 text-[12px] font-semibold tracking-wide transition-all duration-300 hover:bg-gold-deep hover:text-cream"
          >
            <span>Book Appointment</span>
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="lg:hidden flex items-center justify-center w-10 h-10 text-ink hover:text-gold-deep transition-colors duration-300"
        >
          {menuOpen ? (
            <X size={25} strokeWidth={1.7} />
          ) : (
            <Menu size={25} strokeWidth={1.7} />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden border-t border-line bg-cream"
          >
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.25, delay: 0.05 }}
              className="px-5 sm:px-6 py-6 flex flex-col"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`group flex items-center justify-between py-4 border-b border-line text-[15px] font-medium transition-colors duration-300 ${
                    isActive(link.href) ? "text-gold-deep" : "text-ink/80 hover:text-gold-deep"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-gold-deep opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    →
                  </span>
                </Link>
              ))}

              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  openBooking();
                }}
                className="group mt-6 inline-flex items-center justify-center gap-2 bg-gold text-charcoal px-6 py-4 text-[12px] font-semibold tracking-wide transition-all duration-300 hover:bg-gold-deep hover:text-cream"
              >
                <span>Book Appointment</span>
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </button>

              <div className="mt-6 pt-5 border-t border-line flex flex-col gap-2 text-[12px] text-muted">
                <span>Beauty • Salon • Cosmetics • Personal Care</span>
                <span>Newtown, Kolkata</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
