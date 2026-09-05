"use client";

import Image from "next/image";
import { Expand } from "lucide-react";

type GalleryItem = {
  category: string;
  image: string;
  alt: string;
};

export default function GalleryCard({
  item,
  onExpand,
}: {
  item: GalleryItem;
  onExpand: () => void;
}) {
  return (
    <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream-deep cursor-pointer">
      <Image
        src={item.image}
        alt={item.alt}
        fill
        sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 45vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        onClick={onExpand}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[10px] font-semibold text-ink px-2.5 py-1 rounded-full shadow-sm">
        {item.category}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <p className="text-cream text-[12px] font-medium leading-snug max-w-[75%]">
          {item.alt}
        </p>
        <button
          type="button"
          onClick={onExpand}
          aria-label="View full image"
          className="w-8 h-8 rounded-full bg-gold flex items-center justify-center shrink-0 hover:bg-gold-soft transition-colors"
        >
          <Expand size={13} className="text-charcoal" />
        </button>
      </div>
    </div>
  );
}