"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Clock } from "lucide-react";
import { useBooking } from "@/components/booking/BookingContext";
import type { Service } from "@/lib/data";

export default function ServicePageCard({ service }: { service: Service }) {
  const [saved, setSaved] = useState(false);
  const { openBooking } = useBooking();

  return (
    <div className="bg-white rounded-2xl border border-line/60 overflow-hidden shadow-[0_1px_3px_rgba(23,18,14,0.05)] hover:shadow-[0_16px_40px_rgba(23,18,14,0.1)] hover:-translate-y-1 transition-all duration-500">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
        />
        <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[10px] font-semibold text-ink px-3 py-1.5 rounded-full shadow-sm">
          {service.category}
        </span>
        <button
          type="button"
          onClick={() => setSaved((s) => !s)}
          aria-label={saved ? "Remove from saved" : "Save service"}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors"
        >
          <Heart
            size={15}
            className={saved ? "text-gold-deep" : "text-ink/40"}
            fill={saved ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg text-ink mb-1 leading-tight">{service.name}</h3>
        <p className="text-[16px] font-semibold text-ink mb-2">{service.price}</p>
        <p className="text-[12.5px] text-muted leading-relaxed mb-4 min-h-[36px]">
          {service.description}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-line/60">
          <span className="inline-flex items-center gap-1.5 text-[12px] text-muted">
            <Clock size={13} />
            {service.duration}
          </span>
          <button
            type="button"
            onClick={() => openBooking(service.name)}
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-gold-deep hover:text-ink transition-colors"
          >
            Book Now <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
