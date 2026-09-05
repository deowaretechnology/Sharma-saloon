import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  CheckCircle2,
  Crown,
  Gem,
  Heart,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  Users2,
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import Testimonials from "@/components/Testimonials";
import AboutHeroCTA from "@/components/AboutHeroCTA";

export const metadata: Metadata = {
  title: "About | Sharma's Salon",
  description:
    "More than a salon — a place to be you. Learn about Sharma's Salon's story, philosophy and approach to beauty and personal care.",
};

const FEATURES = [
  { icon: UserRoundCheck, title: "Experienced Hands", text: "Trained with passion" },
  { icon: Sparkles, title: "Premium Care", text: "Quality products & services" },
  { icon: ShieldCheck, title: "Clean & Comfortable", text: "A safe, hygienic environment" },
  { icon: Heart, title: "Made For You", text: "Beauty that feels personal" },
];

const STATS = [
  { icon: Users2, value: "10+", label: "Years of Experience" },
  { icon: Gem, value: "5000+", label: "Happy Clients" },
  { icon: ShieldCheck, value: "100%", label: "Hygiene & Safety" },
  { icon: Award, value: "Expert", label: "Stylists & Professionals" },
];

const WHY_CHOOSE = [
  { icon: Heart, title: "Personalized Care", text: "Every client is unique" },
  { icon: Crown, title: "Premium Products", text: "Only the best for you" },
  { icon: Sparkles, title: "Relaxing Ambience", text: "A space to unwind" },
  { icon: ShieldCheck, title: "Trusted by Thousands", text: "Built on love & trust" },
];

const APPROACH_POINTS = [
  "Detailed consultation",
  "Customized solutions",
  "Hygiene & safety first",
  "Long-term care and support",
];

const GLIMPSE_IMAGES = [
  "https://picsum.photos/seed/sharma-about-glimpse1/400/500",
  "https://picsum.photos/seed/sharma-about-glimpse2/400/500",
  "https://picsum.photos/seed/sharma-about-glimpse3/400/500",
  "https://picsum.photos/seed/sharma-about-glimpse4/400/500",
  "https://picsum.photos/seed/sharma-about-glimpse5/400/500",
];

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative w-full min-h-[520px] overflow-hidden bg-charcoal">
          <Image
            src="https://picsum.photos/seed/sharma-about-hero/1600/900"
            alt=""
            aria-hidden
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/55 to-charcoal/15" />

          <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12 min-h-[520px] flex flex-col justify-center py-16">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-7 bg-gold" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-soft">
                ABOUT SHARMA&apos;S SALON
              </p>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-cream max-w-2xl">
              More Than a Salon,
              <br />
              <span className="italic text-gold-soft">A Place to Be You</span>
            </h1>

            <p className="mt-6 text-cream/75 max-w-md text-[14px] sm:text-[15px] leading-relaxed">
              At Sharma&apos;s Salon, beauty is not just about appearance — it&apos;s about
              confidence, care and the best version of you.
            </p>

            <AboutHeroCTA />
          </div>

          <p className="hidden md:block absolute bottom-10 right-10 lg:right-16 z-10 font-script text-3xl text-cream/70 rotate-[-4deg] select-none">
            Self Care Looks
            <br />
            Good On You
          </p>
        </section>

        {/* FEATURE STRIP */}
        <section className="bg-cream-deep border-y border-line py-10 px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex items-center gap-3">
                <f.icon size={20} strokeWidth={1.6} className="text-gold-deep shrink-0" />
                <div>
                  <p className="text-[13px] font-semibold text-ink leading-tight">{f.title}</p>
                  <p className="text-[11px] text-muted mt-0.5">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* OUR STORY */}
        <section className="bg-cream py-16 sm:py-24 px-5 sm:px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <p className="text-[11px] tracking-label text-gold-deep font-semibold mb-3">
                OUR STORY
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink leading-[1.1] mb-5">
                Beauty is a Journey,
                <br />
                <span className="italic text-gold-deep">We&apos;re Here for It.</span>
              </h2>
              <p className="text-[14px] text-muted leading-relaxed max-w-lg">
                Sharma&apos;s Salon was founded with a simple belief — that every person
                deserves to feel confident, cared for and beautiful. What started as a
                passion for beauty has grown into a trusted salon, known for personalized
                care, experienced stylists and a warm, welcoming space.
              </p>
              <Link
                href="/services"
                className="mt-7 inline-flex items-center gap-2 bg-gold text-charcoal px-7 py-4 text-[12px] font-semibold tracking-wide hover:bg-gold-deep hover:text-cream transition-all duration-300"
              >
                Our Services <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="grid grid-cols-[1.3fr_1fr] gap-5 items-center">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/sharma-about-shop/500/620"
                  alt="Sharma's Salon interior"
                  fill
                  sizes="(min-width: 1024px) 24vw, 45vw"
                  className="object-cover"
                />
              </div>

              <div className="bg-cream-deep rounded-2xl px-5 py-2 divide-y divide-line/70">
                {STATS.map((s) => (
                  <div key={s.label} className="flex items-center gap-3 py-4">
                    <div className="w-9 h-9 rounded-full bg-white border border-line flex items-center justify-center shrink-0">
                      <s.icon size={16} strokeWidth={1.6} className="text-gold-deep" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-display text-xl text-ink leading-none">{s.value}</p>
                      <p className="text-[10px] text-muted mt-1 leading-tight">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="relative bg-charcoal py-20 sm:py-28 px-5 sm:px-6 lg:px-12 overflow-hidden">
          <Image
            src="https://picsum.photos/seed/sharma-about-philosophy/1600/900"
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/40" />

          <div className="relative z-10 max-w-[1400px] mx-auto">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-soft mb-4">
              OUR PHILOSOPHY
            </p>
            <h2 className="font-display text-4xl sm:text-5xl leading-[1.05] text-cream max-w-xl mb-5">
              Look Good
              <br />
              Feel Better
              <br />
              <span className="italic text-gold-soft">Be You</span>
            </h2>
            <p className="text-cream/70 max-w-md text-[14px] leading-relaxed">
              We believe beauty goes beyond the mirror. It&apos;s about self-care, confidence
              and feeling comfortable in your own skin. At Sharma&apos;s Salon, we create a
              space where you can relax, refresh and rediscover yourself.
            </p>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="bg-cream-deep border-y border-line py-14 px-5 sm:px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {WHY_CHOOSE.map((w) => (
              <div key={w.title} className="flex flex-col items-center gap-2.5">
                <w.icon size={22} strokeWidth={1.5} className="text-gold-deep" />
                <p className="text-[13px] font-semibold text-ink">{w.title}</p>
                <p className="text-[11px] text-muted">{w.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OUR APPROACH */}
        <section className="bg-cream py-16 sm:py-24 px-5 sm:px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[11px] tracking-label text-gold-deep font-semibold mb-3">
                OUR APPROACH
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-ink leading-[1.1] mb-5">
                It&apos;s Personal.
                <br />
                <span className="italic text-gold-deep">It&apos;s Professional.</span>
              </h2>
              <p className="text-[14px] text-muted leading-relaxed max-w-md mb-6">
                From the moment you walk in, our focus is on you. We take the time to
                understand your preferences, recommend the right treatments and ensure you
                leave feeling refreshed, confident and truly cared for.
              </p>
              <ul className="space-y-3 mb-7">
                {APPROACH_POINTS.map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-[13px] text-ink/80">
                    <CheckCircle2 size={16} className="text-gold-deep shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-gold text-charcoal px-7 py-4 text-[12px] font-semibold tracking-wide hover:bg-gold-deep hover:text-cream transition-all duration-300"
              >
                Our Services <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://picsum.photos/seed/sharma-about-approach/900/700"
                alt="Stylist consulting a client"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute bottom-5 right-5 bg-cream/95 backdrop-blur-sm rounded-xl px-5 py-4 text-[13px] font-display italic text-ink shadow-lg max-w-[200px] text-center leading-snug">
                Beauty Care Confidence You
              </div>
            </div>
          </div>
        </section>

       
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
