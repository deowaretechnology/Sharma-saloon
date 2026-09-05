"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type GalleryItem = {
  category: string;
  image: string;
  alt: string;
};

export default function GalleryLightbox({
  items,
  activeIndex,
  onClose,
  onNavigate,
}: {
  items: GalleryItem[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const item = items[activeIndex];

  // Close on Escape, navigate on arrow keys
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((activeIndex + 1) % items.length);
      if (e.key === "ArrowLeft") onNavigate((activeIndex - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, items.length, onClose, onNavigate]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 backdrop-blur-sm px-4 py-8"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center text-cream transition-colors"
      >
        <X size={20} />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((activeIndex - 1 + items.length) % items.length);
        }}
        aria-label="Previous image"
        className="absolute left-4 sm:left-8 w-11 h-11 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center text-cream transition-colors"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Image */}
      <div
        className="relative w-full max-w-3xl aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(min-width: 640px) 60vw, 90vw"
          className="object-cover"
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-charcoal/80 to-transparent p-5">
          <span className="text-[10px] font-semibold text-gold-soft uppercase tracking-wider">
            {item.category}
          </span>
          <p className="text-cream text-[14px] mt-1">{item.alt}</p>
        </div>
      </div>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((activeIndex + 1) % items.length);
        }}
        aria-label="Next image"
        className="absolute right-4 sm:right-8 w-11 h-11 rounded-full bg-cream/10 hover:bg-cream/20 flex items-center justify-center text-cream transition-colors"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}