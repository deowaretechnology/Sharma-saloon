import { MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/components/SocialIcons";
import { SITE } from "@/lib/data";

export default function TopBar() {
  return (
    <div className="hidden md:block bg-cream-deep border-b border-line">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-8 flex items-center justify-between text-[11px] text-muted">
        <p className="font-medium">Your Beauty, Our Priority</p>

        <div className="flex items-center gap-6">
          <span>{SITE.hours}</span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={12} strokeWidth={2} />
            {SITE.location}
          </span>
          <div className="flex items-center gap-3 text-ink/70">
            <a href="#" aria-label="Facebook" className="hover:text-gold-deep transition-colors">
              <FacebookIcon size={13} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-gold-deep transition-colors">
              <TwitterIcon size={13} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gold-deep transition-colors">
              <InstagramIcon size={13} />
            </a>
          </div>
        </div>

        <a
          href={`tel:${SITE.phone.replace(/\s/g, "")}`}
          className="inline-flex items-center gap-2 bg-charcoal text-cream px-4 h-10 -mr-6 lg:-mr-12 font-medium"
        >
          <Phone size={12} strokeWidth={2} />
          Call Now: {SITE.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
