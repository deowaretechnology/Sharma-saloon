"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ChevronDown, Volume2, VolumeX } from "lucide-react";
import { useBooking } from "@/components/booking/BookingContext";

const POSTER = "https://picsum.photos/seed/sharma-hero/1600/1000";
const VIDEO = "/videos/bg-hero.mp4";

export default function Hero() {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { openBooking } = useBooking();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (muted) {
      video.muted = true;
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    video.muted = false;
    video.volume = prefersReducedMotion ? 0.55 : 0;
    if (prefersReducedMotion) return;

    let raf: number;
    const duration = 2500;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      video.volume = 0.55 * progress;
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [muted]);

  return (
    <section id="home" className="relative w-full h-[92svh] min-h-[640px] overflow-hidden bg-charcoal">
      <img
        src={POSTER}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
      />
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={POSTER}
      >
        <source src={VIDEO} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/45 to-charcoal/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/20" />

      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[12px] tracking-label text-gold-soft font-medium mb-5"
        >
          Beauty. Care. Confidence.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.08] text-cream max-w-2xl"
        >
          Look Good
          <br />
          Feel Better
          <br />
          <span className="text-gold-soft">Be You</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-6 text-cream/75 max-w-md text-[15px] leading-relaxed"
        >
          Professional Salon Services for
          <br />
          Men, Women &amp; Everyone
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <button
            type="button"
            onClick={() => openBooking()}
            className="inline-flex items-center gap-2 bg-gold text-charcoal px-7 py-4 text-[12px] font-semibold tracking-wide hover:bg-gold-soft transition-colors duration-300"
          >
            Book Appointment <span aria-hidden>→</span>
          </button>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-cream/40 text-cream px-6 py-4 text-[12px] font-semibold tracking-wide hover:border-cream transition-colors duration-300"
          >
            View Services <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </div>

      <p className="hidden md:block absolute bottom-24 right-10 lg:right-16 z-10 font-script text-3xl text-cream/70 rotate-[-4deg] select-none">
        More Than A Salon 
      </p>

      <button
        onClick={() => setMuted((m) => !m)}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute bottom-8 left-6 lg:left-12 z-10 w-10 h-10 rounded-full border border-cream/30 flex items-center justify-center text-cream/80 hover:border-cream hover:text-cream transition-colors"
      >
        {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
      </button>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-cream/60"
        aria-hidden
      >
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}