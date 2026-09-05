"use client";

import { useBooking } from "@/components/booking/BookingContext";

export default function ConsultationCTA() {
  const { openBooking } = useBooking();

  return (
    <button
      type="button"
      onClick={() => openBooking("Free Consultation")}
      className="group inline-flex items-center gap-2 bg-gold text-charcoal px-7 py-4 text-[12px] font-semibold tracking-wide w-fit hover:bg-gold-deep hover:text-cream transition-all duration-300"
    >
      Book a Free Consultation
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </button>
  );
}
