"use client";

import { useState } from "react";
import Link from "next/link";
import GalleryCard from "@/components/Card/GalleryCard";
import GalleryLightbox from "@/components/GalleryLightbox";
import { GALLERY_FILTERS, GALLERY_ITEMS } from "@/lib/data";

export default function Gallery() {
  const [active, setActive] = useState<(typeof GALLERY_FILTERS)[number]>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items =
    active === "All" ? GALLERY_ITEMS.slice(0, 6) : GALLERY_ITEMS.filter((item) => item.category === active).slice(0, 6);

  return (
    <section id="gallery" className="bg-cream py-24 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <p className="text-[11px] tracking-label text-gold-deep font-semibold mb-3">
              REAL PEOPLE, REAL TRANSFORMATIONS
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-ink">Our Gallery</h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {GALLERY_FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActive(filter)}
                  className={`px-4 py-2 rounded-full text-[12px] font-medium transition-colors duration-300 ${
                    active === filter
                      ? "bg-charcoal text-cream"
                      : "bg-cream-deep text-ink/70 hover:bg-charcoal/10"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <Link
              href="/gallery"
              className="hidden md:inline-flex items-center gap-2 text-[13px] font-semibold text-ink/80 hover:text-gold-deep transition-colors shrink-0"
            >
              View Gallery <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((item, index) => (
            <GalleryCard
              key={item.image}
              item={item}
              onExpand={() => setLightboxIndex(index)}
            />
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          items={items}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(i) => setLightboxIndex(i)}
        />
      )}
    </section>
  );
}