"use client";

import Image from "next/image";
import { CalendarCheck } from "lucide-react";
import { useBooking } from "@/components/booking/BookingContext";

type Service = {
  name: string;
  description: string;
  image: string;
  price?: string;
  badge?: string;      // e.g. "Most Booked"
  quote?: string;      // testimonial line
  author?: string;     // e.g. "— Priya S., Regular Client"
};

export default function ServiceCard({ service }: { service: Service }) {
  const { openBooking } = useBooking();

  return (
    <div className="group [perspective:1200px]">
      <div className="relative w-full aspect-[4/5] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* ===== FRONT ===== */}
        <div className="absolute inset-0 rounded-[20px] overflow-hidden bg-white border border-line/60 shadow-[0_1px_3px_rgba(23,18,14,0.05)] [backface-visibility:hidden] flex flex-col">
          <div className="relative flex-1 overflow-hidden">
            <Image
              src={service.image}
              alt={service.name}
              fill
              sizes="(min-width: 1024px) 16vw, (min-width: 768px) 30vw, 45vw"
              className="object-cover"
            />
            {service.badge && (
              <span className="absolute top-3 left-3 bg-gold text-charcoal text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm">
                {service.badge}
              </span>
            )}
          </div>
          <div className="px-4 py-4">
            <h3 className="font-display text-[16px] text-ink mb-1 leading-tight">
              {service.name}
            </h3>
            {service.price && (
              <p className="text-[15px] font-semibold text-gold-deep mb-1.5">
                {service.price}
              </p>
            )}
            <p className="text-[11px] text-muted">Hover to see review →</p>
          </div>
        </div>

        {/* ===== BACK ===== */}
        <div className="absolute inset-0 rounded-[20px] overflow-hidden bg-charcoal border border-charcoal [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col p-5">
          <div className="relative h-2/5 rounded-xl overflow-hidden mb-4 shrink-0">
            <Image
              src={service.image}
              alt={service.name}
              fill
              sizes="(min-width: 1024px) 16vw, (min-width: 768px) 30vw, 45vw"
              className="object-cover"
            />
          </div>

          <p className="font-display italic text-cream/90 text-[13px] leading-relaxed flex-1">
            {service.quote ?? `"${service.description}"`}
          </p>

          {service.author && (
            <p className="text-[11px] text-gold-soft font-medium mt-2 mb-4">
              {service.author}
            </p>
          )}

          <button
            type="button"
            onClick={() => openBooking(service.name)}
            className="inline-flex items-center justify-center gap-2 w-full bg-gold text-charcoal text-[12px] font-semibold py-2.5 rounded-full hover:bg-gold-soft transition-colors duration-300"
          >
            <CalendarCheck size={13} />
            Book Now{service.price ? ` — ${service.price}` : ""}
          </button>
        </div>
      </div>
    </div>
  );
}