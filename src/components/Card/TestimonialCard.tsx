import Image from "next/image";
import { Bookmark, Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="group relative bg-cream rounded-2xl p-7 shadow-[0_2px_10px_rgba(23,18,14,0.05)] hover:shadow-[0_16px_40px_rgba(23,18,14,0.12)] hover:-translate-y-1 transition-all duration-500 border border-line/50">
      <Bookmark
        size={16}
        className="absolute top-6 right-6 text-ink/15 group-hover:text-gold transition-colors duration-300"
      />

      <div className="flex gap-0.5 text-gold mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
        ))}
      </div>

      <p className="text-[14px] text-ink/80 leading-relaxed mb-7 min-h-[72px]">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-5 border-t border-line/60">
        <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 ring-2 ring-gold/20">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            sizes="44px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-[13px] font-semibold text-ink">{testimonial.name}</p>
          <p className="text-[11px] text-muted">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}