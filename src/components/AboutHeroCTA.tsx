"use client";

import Link from "next/link";
import { useBooking } from "@/components/booking/BookingContext";

export default function AboutHeroCTA() {
  const { openBooking } = useBooking();

  return (
    <div className="mt-9 flex flex-wrap items-center gap-4">
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
        Our Services <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
