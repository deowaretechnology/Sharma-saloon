import type { Metadata } from "next";
import Image from "next/image";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ServicesExplorer from "@/components/ServicesExplorer";
import ConsultationCTA from "@/components/ConsultationCTA";
import { Crown, ShieldCheck, Sparkles, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Sharma's Salon",
  description:
    "Explore hair, skin, makeup, nail care, bridal and grooming services at Sharma's Salon — for men, women and everyone.",
};

const BENEFITS = [
  { icon: Crown, title: "Premium Products", text: "Only the best for you" },
  { icon: ShieldCheck, title: "Hygienic & Safe", text: "A clean, safe environment" },
  { icon: Sparkles, title: "Expert Stylists", text: "Trained professionals" },
  { icon: Heart, title: "Personalized Care", text: "Because you're unique" },
];

export default function ServicesPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <PageHero
          eyebrow="OUR SERVICES"
          titleLine1="Beauty Care"
          titleLine2="For Everyone"
          description="From everyday grooming to special celebrations, we offer a complete range of salon services for Men, Women and Beyond."
          image="https://picsum.photos/seed/sharma-services-hero/1600/900"
          scriptText={"Self Care\nLooks Good\nOn You"}
        />

        <section className="bg-cream py-16 sm:py-20 px-5 sm:px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div>
                <p className="text-[11px] tracking-label text-gold-deep font-semibold mb-3">
                  EXPLORE OUR SERVICES
                </p>
                <h2 className="font-display text-3xl sm:text-4xl text-ink">
                  Find the Perfect Service for You
                </h2>
              </div>
              <p className="text-[13px] text-muted max-w-md">
                Choose from a wide range of professional services designed to make you look
                good, feel better and be you.
              </p>
            </div>

            <ServicesExplorer />
          </div>
        </section>

        <section className="bg-cream-deep border-y border-line py-10 px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {BENEFITS.map((b) => (
              <div key={b.title} className="flex items-center gap-3">
                <b.icon size={20} strokeWidth={1.6} className="text-gold-deep shrink-0" />
                <div>
                  <p className="text-[13px] font-semibold text-ink leading-tight">{b.title}</p>
                  <p className="text-[11px] text-muted mt-0.5">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-cream py-16 sm:py-20 px-5 sm:px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-cream-deep grid lg:grid-cols-[1.1fr_1fr] items-stretch">
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <h3 className="font-display text-3xl sm:text-4xl text-ink mb-4">
                  Not Sure What You Need?
                </h3>
                <p className="text-[14px] text-muted leading-relaxed mb-7 max-w-md">
                  Get a free consultation with our experts and let us suggest the best services
                  for you.
                </p>
                <ConsultationCTA />
              </div>
              <div className="relative min-h-[260px]">
                <Image
                  src="https://picsum.photos/seed/sharma-consult/900/700"
                  alt="Consultation with a stylist"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
