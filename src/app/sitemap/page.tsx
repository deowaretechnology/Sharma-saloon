import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICE_CATEGORIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sitemap | Sharma's Salon",
  description: "A complete overview of every page on the Sharma's Salon website.",
};

const SECTIONS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Services by Category",
    links: SERVICE_CATEGORIES.map((c) => ({
      label: c,
      href: `/services?category=${encodeURIComponent(c)}`,
    })),
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-conditions" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <section className="bg-cream py-16 sm:py-20 px-5 sm:px-6 lg:px-12">
          <div className="max-w-[1000px] mx-auto">
            <p className="text-[11px] tracking-label text-gold-deep font-semibold mb-3">
              NAVIGATION
            </p>
            <h1 className="font-display text-3xl sm:text-4xl text-ink mb-3">Sitemap</h1>
            <p className="text-[13px] text-muted mb-12 max-w-lg">
              A complete overview of every page on the Sharma&apos;s Salon website, so you can
              find exactly what you&apos;re looking for.
            </p>

            <div className="grid sm:grid-cols-3 gap-10">
              {SECTIONS.map((section) => (
                <div key={section.title}>
                  <h2 className="font-display text-lg text-ink mb-4 pb-3 border-b border-line">
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="group inline-flex items-center gap-1.5 text-[13px] text-ink/75 hover:text-gold-deep transition-colors"
                        >
                          {link.label}
                          <ArrowUpRight
                            size={13}
                            className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-opacity"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}