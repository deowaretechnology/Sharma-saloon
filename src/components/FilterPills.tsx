"use client";

import {
  LayoutGrid,
  User,
  UserRound,
  Scissors,
  Sparkles,
  Paintbrush,
  Hand,
  Gem,
  Image as ImageIcon,
  HeartPulse,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  All: LayoutGrid,
  Women: User,
  Men: UserRound,
  Hair: Scissors,
  Skin: Sparkles,
  Makeup: Paintbrush,
  "Nail Care": Hand,
  Bridal: Gem,
  "Salon Interior": ImageIcon,
  "Body Care": HeartPulse,
};

export default function FilterPills({
  filters,
  active,
  onChange,
}: {
  filters: readonly string[];
  active: string;
  onChange: (filter: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {filters.map((filter) => {
        const Icon = ICON_MAP[filter] ?? LayoutGrid;
        const isActive = active === filter;
        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-[12px] font-medium border transition-colors duration-300 ${
              isActive
                ? "bg-charcoal border-charcoal text-cream"
                : "bg-white border-line text-ink/70 hover:border-gold-deep hover:text-gold-deep"
            }`}
          >
            <Icon size={14} strokeWidth={1.8} />
            {filter}
          </button>
        );
      })}
    </div>
  );
}
