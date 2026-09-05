import { CalendarCheck, Headset, ShoppingBag, Sparkles } from "lucide-react";
import { QUICK_BENEFITS } from "@/lib/data";

const ICONS = [Sparkles, ShoppingBag, CalendarCheck, Headset];

export default function QuickBenefits() {
  return (
    <section className="bg-cream-deep border-y border-line py-10 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {QUICK_BENEFITS.map((b, i) => {
          const Icon = ICONS[i];
          return (
            <div key={b.title} className="flex items-center gap-3">
              <Icon size={20} strokeWidth={1.6} className="text-gold-deep shrink-0" />
              <div>
                <p className="text-[13px] font-semibold text-ink leading-tight">{b.title}</p>
                <p className="text-[11px] text-muted mt-0.5">{b.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
