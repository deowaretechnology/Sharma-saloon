"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import FilterPills from "@/components/FilterPills";
import ServicePageCard from "@/components/Card/ServicePageCard";
import { SERVICE_CATEGORIES, SERVICES } from "@/lib/data";

const CATEGORY_FILTERS = ["All", ...SERVICE_CATEGORIES] as const;
const GENDER_OPTIONS = ["All Genders", "Women", "Men", "Unisex"] as const;
const PRICE_OPTIONS = [
  "All Price Ranges",
  "Under ₹500",
  "₹500 – ₹1,500",
  "₹1,500 – ₹5,000",
  "Above ₹5,000",
] as const;
const SORT_OPTIONS = ["Popular", "Price: Low to High", "Price: High to Low"] as const;

function inPriceRange(value: number, range: (typeof PRICE_OPTIONS)[number]) {
  switch (range) {
    case "Under ₹500":
      return value < 500;
    case "₹500 – ₹1,500":
      return value >= 500 && value <= 1500;
    case "₹1,500 – ₹5,000":
      return value > 1500 && value <= 5000;
    case "Above ₹5,000":
      return value > 5000;
    default:
      return true;
  }
}

export default function ServicesExplorer() {
  const [category, setCategory] = useState<(typeof CATEGORY_FILTERS)[number]>("All");
  const [gender, setGender] = useState<(typeof GENDER_OPTIONS)[number]>("All Genders");
  const [priceRange, setPriceRange] = useState<(typeof PRICE_OPTIONS)[number]>("All Price Ranges");
  const [sortBy, setSortBy] = useState<(typeof SORT_OPTIONS)[number]>("Popular");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let list = SERVICES.filter((s) => {
      if (category !== "All" && s.category !== category) return false;
      if (gender !== "All Genders" && s.gender !== gender && s.gender !== "Unisex") return false;
      if (!inPriceRange(s.priceValue, priceRange)) return false;
      if (query.trim() && !s.name.toLowerCase().includes(query.trim().toLowerCase())) return false;
      return true;
    });

    if (sortBy === "Price: Low to High") {
      list = [...list].sort((a, b) => a.priceValue - b.priceValue);
    } else if (sortBy === "Price: High to Low") {
      list = [...list].sort((a, b) => b.priceValue - a.priceValue);
    }

    return list;
  }, [category, gender, priceRange, sortBy, query]);

  return (
    <div>
      <FilterPills filters={CATEGORY_FILTERS} active={category} onChange={(f) => setCategory(f as typeof category)} />

      {/* Search + selects */}
      <div className="mt-6 flex flex-col lg:flex-row lg:items-center gap-3">
        <div className="relative flex-1">
          <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services…"
            className="w-full bg-white border border-line rounded-lg pl-10 pr-4 py-3 text-[13px] text-ink placeholder:text-muted focus:outline-none focus:border-gold-deep transition-colors"
          />
        </div>

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value as typeof gender)}
          className="bg-white border border-line rounded-lg px-4 py-3 text-[13px] text-ink focus:outline-none focus:border-gold-deep transition-colors"
        >
          {GENDER_OPTIONS.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>

        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value as typeof priceRange)}
          className="bg-white border border-line rounded-lg px-4 py-3 text-[13px] text-ink focus:outline-none focus:border-gold-deep transition-colors"
        >
          {PRICE_OPTIONS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
          className="bg-white border border-line rounded-lg px-4 py-3 text-[13px] text-ink focus:outline-none focus:border-gold-deep transition-colors"
        >
          {SORT_OPTIONS.map((s) => (
            <option key={s} value={s}>
              Sort: {s}
            </option>
          ))}
        </select>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="mt-9 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((service) => (
            <ServicePageCard key={service.id} service={service} />
          ))}
        </div>
      ) : (
        <div className="mt-16 text-center text-muted text-[14px]">
          No services match your filters. Try clearing a filter or search term.
        </div>
      )}
    </div>
  );
}
