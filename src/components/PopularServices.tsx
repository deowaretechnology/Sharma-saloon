import Link from "next/link";
import ServiceCard from "@/components/Card/ServicePageCard";
import { SERVICES } from "@/lib/data";

const FEATURED = SERVICES.slice(0, 6);

export default function PopularServices() {
  return (
    <section id="services" className="bg-cream py-16 sm:py-24 px-5 sm:px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <p className="text-[11px] tracking-label text-gold-deep font-semibold mb-2 sm:mb-3">
              WHAT WE OFFER
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink">
              Our Popular Services
            </h2>
          </div>

          <Link
            href="/ServiceCard"
            className="hidden sm:inline-flex items-center gap-2 text-[13px] font-semibold text-ink/80 hover:text-gold-deep transition-colors shrink-0"
          >
            View All Services <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-5">
          {FEATURED.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <Link
          href="/ServiceCard"
          className="sm:hidden mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-ink/80"
        >
          View All Services <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
