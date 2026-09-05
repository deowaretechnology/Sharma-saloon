"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon, WhatsappIcon, YoutubeIcon } from "@/components/SocialIcons";
import { SITE } from "@/lib/data";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/contact" },
];
const SERVICE_LINKS = ["Hair Care", "Skin Care", "Makeup", "Nail Care", "Men's Grooming", "Bridal Packages"];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 800);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 grid md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1fr_1.1fr] gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-11 h-11 rounded-full border border-gold flex items-center justify-center">
              <span className="font-display text-xl text-gold-soft">S</span>
            </span>
            <span className="leading-none">
              <span className="block font-display text-lg tracking-wide">SHARMA&apos;S</span>
              <span className="block text-[10px] tracking-[0.3em] text-cream/50 mt-0.5">SALON</span>
            </span>
          </div>
          <p className="text-[12px] text-cream/60 mb-6">{SITE.tagline}</p>
          <div className="flex items-center gap-3">
            {[InstagramIcon, FacebookIcon, YoutubeIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="w-9 h-9 rounded-full border border-line-dark flex items-center justify-center hover:border-gold hover:text-gold-soft transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full border border-line-dark flex items-center justify-center hover:border-gold hover:text-gold-soft transition-colors"
            >
              <WhatsappIcon size={14} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-[13px] font-semibold mb-5">Quick Links</h3>
          <ul className="space-y-3 text-[13px] text-cream/65">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold-soft transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-[13px] font-semibold mb-5">Our Services</h3>
          <ul className="space-y-3 text-[13px] text-cream/65">
            {SERVICE_LINKS.map((l) => (
              <li key={l}>
                <Link href="/services" className="hover:text-gold-soft transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[13px] font-semibold mb-5">Contact Us</h3>
          <ul className="space-y-4 text-[13px] text-cream/65">
            <li className="flex items-start gap-2.5">
              <Phone size={14} className="mt-0.5 shrink-0 text-gold-soft" />
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-gold-soft transition-colors">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail size={14} className="mt-0.5 shrink-0 text-gold-soft" />
              <a href={`mailto:${SITE.email}`} className="hover:text-gold-soft transition-colors">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin size={14} className="mt-0.5 shrink-0 text-gold-soft" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock size={14} className="mt-0.5 shrink-0 text-gold-soft" />
              <span>{SITE.hours}</span>
            </li>
          </ul>
        </div>

        {/* Map */}
        <div className="relative min-h-[220px] overflow-hidden">
          <iframe
            title="Sharma's Salon location"
            src="https://www.google.com/maps?q=Tarulia,Kolkata&output=embed"
            className="absolute inset-0 w-full h-full grayscale-[40%] contrast-[1.05]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-line-dark">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-16 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-cream/50">
          <p>© {new Date().getFullYear()} Sharma&apos;s Salon. All Rights Reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-cream transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cream transition-colors">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-gold text-charcoal flex items-center justify-center shadow-lg transition-all duration-300 ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        ↑
      </button>
    </footer>
  );
}
