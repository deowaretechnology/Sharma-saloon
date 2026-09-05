"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useBooking } from "@/components/booking/BookingContext";
import BookingForm from "@/components/booking/BookingForm";

export default function BookingModal() {
  const { isOpen, prefillService, closeBooking } = useBooking();

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBooking();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeBooking]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex items-start sm:items-center justify-center bg-charcoal/70 backdrop-blur-sm px-4 py-8 overflow-y-auto"
          onClick={closeBooking}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl bg-cream rounded-2xl shadow-[0_30px_80px_rgba(23,18,14,0.35)] my-auto"
          >
            <button
              type="button"
              onClick={closeBooking}
              aria-label="Close booking form"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-charcoal/5 hover:bg-charcoal/10 flex items-center justify-center text-ink transition-colors"
            >
              <X size={18} />
            </button>

            <div className="p-6 sm:p-8">
              <p className="text-[11px] tracking-label text-gold-deep font-semibold mb-2">
                BOOK AN APPOINTMENT
              </p>
              <h3 className="font-display text-2xl sm:text-3xl text-ink mb-1">
                Let&apos;s Get You Booked
              </h3>
              <p className="text-[13px] text-muted mb-6">
                Fill in your details and we&apos;ll confirm your slot on WhatsApp.
              </p>

              <BookingForm
                key={prefillService}
                initialService={prefillService}
                variant="modal"
                onSuccess={closeBooking}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
