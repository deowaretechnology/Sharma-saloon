"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useBooking } from "@/components/booking/BookingContext";

export default function FinalCTA() {
  const { openBooking } = useBooking();

  return (
    <section className="relative py-28 px-6 lg:px-12 overflow-hidden">
      {/* Background image */}
      <Image
        src="https://picsum.photos/seed/sharma-final-cta/1800/700"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover -z-20"
      />

      {/* Layered overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-cream-deep/95 via-cream-deep/35 to-cream-deep/30 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 via-transparent to-transparent -z-10" />

      {/* Decorative glow blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 rounded-full bg-gold/20 blur-3xl -z-10" />
      <div className="pointer-events-none absolute -bottom-24 right-10 w-96 h-96 rounded-full bg-gold-deep/15 blur-3xl -z-10" />

      <div className="max-w-[1400px] mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 mb-5 justify-center lg:justify-start">
              <Sparkles size={14} className="text-gold-deep" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-deep">
                Ready When You Are
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl leading-[1.1] text-ink mb-5">
              Your Next Look is
              <br />
              <span className="italic text-gold-deep">Just a Click Away</span>
            </h2>

            <p className="text-[14px] sm:text-[15px] text-muted mb-9 leading-relaxed max-w-md mx-auto lg:mx-0">
              Book your appointment now and let our experts take care of you —
              because you deserve to feel your absolute best.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button
                type="button"
                onClick={() => openBooking()}
                className="group inline-flex items-center gap-3 bg-gold text-charcoal px-8 py-4 text-[12px] font-semibold uppercase tracking-wide rounded-full shadow-[0_8px_24px_rgba(139,103,56,0.18)] hover:bg-gold-deep hover:text-cream hover:-translate-y-0.5 transition-all duration-300"
              >
                Book Appointment
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/25 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight size={13} strokeWidth={2} />
                </span>
              </button>

              <a href="tel:+919123988105"
                className="inline-flex items-center gap-2 text-[12px] font-semibold text-ink/80 hover:text-gold-deep transition-colors underline underline-offset-4 decoration-gold/40"
              >
                Or Call Us Now
              </a>
            </div>
          </motion.div>

          {/* Right decorative script + divider */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hidden lg:flex flex-col items-center gap-6"
          >
            <div className="h-16 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
            <p
              className="font-script text-3xl sm:text-4xl text-charcoal rotate-[-3deg] select-none text-center leading-tight"
              style={{ textShadow: "0 2px 12px rgba(247,241,233,0.6)" }}
            >
              Self Care Looks
              <br />
              Good On You
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}