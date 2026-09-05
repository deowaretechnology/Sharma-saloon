import type { Metadata } from "next";
import { Car, Bus, ShieldCheck, Clock, Mail, MapPin, Phone } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import BookingForm from "@/components/booking/BookingForm";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact | Sharma's Salon",
  description:
    "Get in touch with Sharma's Salon — call, WhatsApp or book an appointment online. We'd love to hear from you.",
};

const CONTACT_DETAILS = [
  { icon: Phone, title: "Call Us", lines: [SITE.phoneDisplay] },
  { icon: Mail, title: "Email Us", lines: [SITE.email] },
  { icon: MapPin, title: "Our Location", lines: [SITE.address] },
  { icon: Clock, title: "Working Hours", lines: [SITE.hours, "Open on all holidays"] },
];

const LOCATION_PERKS = [
  { icon: Car, text: "Easy Parking Available" },
  { icon: Bus, text: "Near Public Transport" },
  { icon: ShieldCheck, text: "Safe & Secure Location" },
];

export default function ContactPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <PageHero
          eyebrow="GET IN TOUCH"
          titleLine1="We'd Love to"
          titleLine2="Hear From You"
          description="Have a question, want to book an appointment or need expert advice? We're here to help you look good, feel better and be you."
          image="https://picsum.photos/seed/sharma-contact-hero/1600/900"
          scriptText={"Beauty Looks\nGood On You"}
        />

        {/* CONTACT DETAILS ROW */}
        <section className="bg-cream border-b border-line py-12 px-5 sm:px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {CONTACT_DETAILS.map((d) => (
              <div key={d.title} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-cream-deep flex items-center justify-center shrink-0">
                  <d.icon size={17} strokeWidth={1.6} className="text-gold-deep" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-ink mb-1">{d.title}</p>
                  {d.lines.map((line) => (
                    <p key={line} className="text-[12px] text-muted leading-snug">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MAP + BOOKING FORM */}
        <section className="bg-cream py-16 sm:py-20 px-5 sm:px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-10">
            {/* Map / visit us */}
            <div>
              <p className="text-[11px] tracking-label text-gold-deep font-semibold mb-3">
                FIND US HERE
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-ink mb-3">Visit Our Salon</h2>
              <p className="text-[13px] text-muted mb-6 max-w-md">
                Conveniently located in {SITE.location}. Come and experience premium beauty care
                in a relaxing environment.
              </p>

              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-line mb-6">
                <iframe
                  title="Sharma's Salon location"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.location)}&output=embed`}
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {LOCATION_PERKS.map((p) => (
                  <span key={p.text} className="inline-flex items-center gap-2 text-[12px] text-ink/75">
                    <p.icon size={16} className="text-gold-deep" />
                    {p.text}
                  </span>
                ))}
              </div>
            </div>

            {/* Booking form */}
            <div className="bg-cream-deep rounded-2xl p-6 sm:p-8">
              <p className="text-[11px] tracking-label text-gold-deep font-semibold mb-3">
                SEND US A MESSAGE
              </p>
              <h2 className="font-display text-3xl sm:text-4xl text-ink mb-3">
                Book an Appointment
              </h2>
              <p className="text-[13px] text-muted mb-7">
                Fill out the form below and we&apos;ll confirm your slot on WhatsApp.
              </p>

              <BookingForm variant="page" />
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
