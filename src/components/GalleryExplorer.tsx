"use client";

import { useMemo, useState } from "react";
import GalleryCard from "@/components/Card/GalleryCard";
import GalleryLightbox from "@/components/GalleryLightbox";
import FilterPills from "@/components/FilterPills";
import { GALLERY_FILTERS, GALLERY_ITEMS } from "@/lib/data";

const PAGE_SIZE = 10;

export default function GalleryExplorer() {
  const [active, setActive] = useState<(typeof GALLERY_FILTERS)[number]>("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      active === "All"
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((item) => item.category === active),
    [active]
  );

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  function handleFilterChange(filter: string) {
    setActive(filter as typeof active);
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <div>
      <FilterPills filters={GALLERY_FILTERS} active={active} onChange={handleFilterChange} />

      <div className="mt-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {visible.map((item, index) => (
          <GalleryCard key={`${item.image}-${index}`} item={item} onExpand={() => setLightboxIndex(index)} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="inline-flex items-center gap-2 bg-gold text-charcoal px-7 py-3.5 rounded-full text-[12px] font-semibold tracking-wide hover:bg-gold-deep hover:text-cream transition-colors duration-300"
          >
            Load More Photos <span aria-hidden>↻</span>
          </button>
        </div>
      )}

      {lightboxIndex !== null && (
        <GalleryLightbox
          items={visible}
          activeIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(i) => setLightboxIndex(i)}
        />
      )}
    </div>
  );
}
