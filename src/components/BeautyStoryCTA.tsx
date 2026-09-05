"use client";

import Image from "next/image";
import { useBooking } from "@/components/booking/BookingContext";

const POLAROIDS = [
  { image: "https://picsum.photos/seed/sharma-story-1/340/420", rotate: "-6deg" },
  { image: "https://picsum.photos/seed/sharma-story-2/340/420", rotate: "3deg" },
  { image: "https://picsum.photos/seed/sharma-story-3/340/420", rotate: "-3deg" },
  { image: "https://picsum.photos/seed/sharma-story-4/340/420", rotate: "6deg" },
];

export default function BeautyStoryCTA() {
  const { openBooking } = useBooking();

  return (
    <section className="bg-cream-deep py-16 sm:py-20 px-5 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-7 bg-gold-deep" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-deep">
              VISIT US
            </p>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-ink mb-5">
            Be Part of Our
            <br />
            <span className="italic text-gold-deep">Beauty Story</span>
          </h2>
          <p className="text-[14px] text-muted leading-relaxed mb-8 max-w-md">
            Book your appointment today and let our experts create your next transformation.
          </p>
          <button
            type="button"
            onClick={() => openBooking()}
            className="group inline-flex items-center gap-2 bg-gold text-charcoal px-7 py-4 text-[12px] font-semibold tracking-wide hover:bg-gold-deep hover:text-cream transition-all duration-300"
          >
            Book Appointment
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

        <div className="relative h-[300px] sm:h-[360px] flex items-center justify-center">
          {POLAROIDS.map((p, i) => (
            <div
              key={p.image}
              style={{
                transform: `rotate(${p.rotate}) translateX(${(i - 1.5) * 70}px)`,
                zIndex: i,
              }}
              className="absolute w-[150px] sm:w-[190px] bg-white p-2 pb-6 shadow-[0_18px_40px_rgba(23,18,14,0.18)] rounded-sm"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={p.image} alt="" fill sizes="190px" className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
