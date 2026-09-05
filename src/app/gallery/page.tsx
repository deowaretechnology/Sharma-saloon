import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import GalleryExplorer from "@/components/GalleryExplorer";
import BeautyStoryCTA from "@/components/BeautyStoryCTA";

export const metadata: Metadata = {
  title: "Gallery | Sharma's Salon",
  description:
    "A glimpse of the confidence, beauty and happiness we create every day at Sharma's Salon.",
};

export default function GalleryPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <PageHero
          eyebrow="OUR GALLERY"
          titleLine1="Real People"
          titleLine2="Real Transformations"
          description="A glimpse of the confidence, beauty and happiness we create every day at Sharma's Salon."
          image="https://picsum.photos/seed/sharma-gallery-hero/1600/900"
          scriptText={"Beauty Looks\nGood On You"}
        />

        <section className="bg-cream py-16 sm:py-20 px-5 sm:px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
              <div>
                <p className="text-[11px] tracking-label text-gold-deep font-semibold mb-3">
                  OUR WORK
                </p>
                <h2 className="font-display text-3xl sm:text-4xl text-ink mb-3">
                  Moments of Beauty
                </h2>
                <p className="text-[13px] text-muted max-w-md">
                  Explore our work and see the art, care and expertise behind every
                  transformation.
                </p>
              </div>

              <blockquote className="max-w-sm bg-cream-deep rounded-2xl px-6 py-5 text-[14px] text-ink/80 italic leading-relaxed">
                &ldquo;Beauty is not just what you see, but how you feel.&rdquo;
                <footer className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-gold-deep not-italic">
                  — Sharma&apos;s Salon
                </footer>
              </blockquote>
            </div>

            <GalleryExplorer />
          </div>
        </section>

        <BeautyStoryCTA />
      </main>
      <Footer />
    </>
  );
}
