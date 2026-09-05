"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import TestimonialCard from "@/components/Card/TestimonialCard";
import { TESTIMONIALS } from "@/lib/data";

const AUTO_SLIDE_INTERVAL = 4000; // 4 seconds

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(3);

  // Detect screen size — 1 card on mobile, 3 on desktop
  useEffect(() => {
    const updatePageSize = () => {
      setPageSize(window.innerWidth < 768 ? 1 : 3);
    };
    updatePageSize();
    window.addEventListener("resize", updatePageSize);
    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  const pages = Math.ceil(TESTIMONIALS.length / pageSize) || 1;
  const visible = TESTIMONIALS.slice(page * pageSize, page * pageSize + pageSize);
  const go = (dir: 1 | -1) => setPage((p) => (p + dir + pages) % pages);

  // Reset page if it goes out of bounds when pageSize changes
  useEffect(() => {
    if (page >= pages) setPage(0);
  }, [pages, page]);

  // Auto-slide: right to left, continuous loop
  useEffect(() => {
    if (pages <= 1) return;
    const timer = setInterval(() => {
      setPage((p) => (p + 1) % pages);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [pages]);

  return (
    <section className="bg-cream-deep py-24 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[11px] tracking-label text-gold-deep font-semibold mb-3">
              TESTIMONIALS
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-ink">What Our Clients Say</h2>
          </div>
          {pages > 1 && (
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <button
                onClick={() => go(-1)}
                aria-label="Previous testimonials"
                className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:border-gold hover:text-gold-deep transition-colors"
              >
                <ArrowLeft size={15} />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next testimonials"
                className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:border-gold hover:text-gold-deep transition-colors"
              >
                <ArrowRight size={15} />
              </button>
            </div>
          )}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {visible.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Dots indicator */}
        {pages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === page ? "w-6 bg-gold-deep" : "w-1.5 bg-ink/20"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}