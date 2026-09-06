"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Clock } from "lucide-react";
import { useBooking } from "@/components/booking/BookingContext";
import type { Service } from "@/lib/data";

export default function ServicePageCard({
  service,
}: {
  service: Service;
}) {
  const [saved, setSaved] = useState(false);
  const { openBooking } = useBooking();

  return (
    <article className="group h-full bg-white rounded-2xl border border-line/60 overflow-hidden shadow-[0_1px_3px_rgba(23,18,14,0.05)] hover:shadow-[0_16px_40px_rgba(23,18,14,0.1)] hover:-translate-y-1 transition-all duration-500 flex flex-col">

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden shrink-0 bg-cream-deep">

        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[10px] font-semibold text-ink px-3 py-1.5 rounded-full shadow-sm">
          {service.category}
        </span>

        {/* Favorite */}
        <button
          type="button"
          onClick={() => setSaved((s) => !s)}
          aria-label={
            saved ? "Remove from saved" : "Save service"
          }
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-all"
        >
          <Heart
            size={15}
            strokeWidth={1.8}
            className={
              saved
                ? "text-gold-deep"
                : "text-ink/40 hover:text-gold-deep"
            }
            fill={saved ? "currentColor" : "none"}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-5 lg:p-6 flex flex-col flex-1">

        {/* Title */}
        <h3 className="font-display text-lg lg:text-xl text-ink leading-[1.2] min-h-[44px] lg:min-h-[50px]">
          {service.name}
        </h3>

        {/* Price */}
        <p className="text-[16px] lg:text-[17px] font-semibold text-ink mt-1.5">
          {service.price}
        </p>

        {/* Description */}
        <p className="text-[12.5px] lg:text-[13px] text-muted leading-relaxed mt-2 min-h-[57px] lg:min-h-[62px] line-clamp-3">
          {service.description}
        </p>

        {/* Bottom */}
        <div className="mt-auto pt-4 lg:pt-5 border-t border-line/60 flex items-center justify-between gap-3">

          {/* Duration */}
          <span className="inline-flex items-center gap-1.5 text-[12px] lg:text-[13px] text-muted">
            <Clock
              size={14}
              strokeWidth={1.6}
              className="shrink-0"
            />

            <span>{service.duration}</span>
          </span>

          {/* Book */}
          <button
            type="button"
            onClick={() => openBooking(service.name)}
            className="inline-flex items-center gap-2 text-[12px] lg:text-[13px] font-semibold text-gold-deep hover:text-ink transition-colors shrink-0"
          >
            Book Now
            <span
              aria-hidden
              className="text-[16px] leading-none group-hover:translate-x-1 transition-transform"
            >
              →
            </span>
          </button>

        </div>
      </div>
    </article>
  );
}