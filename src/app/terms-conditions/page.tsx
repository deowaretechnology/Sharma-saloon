import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms & Conditions | Sharma's Salon",
  description: "The terms and conditions for using the Sharma's Salon website and services.",
};

export default function TermsConditionsPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <LegalPageLayout eyebrow="LEGAL" title="Terms & Conditions" updated="6 September 2026">
          <p>
            Welcome to {SITE.name}. By using this website or booking a service with us, you agree
            to the following terms and conditions. Please read them carefully.
          </p>

          <h2>1. Appointments &amp; Booking</h2>
          <ul>
            <li>
              Appointments can be requested through our website booking form, by phone, or via
              WhatsApp. A booking request is confirmed only once our team responds and confirms
              your slot.
            </li>
            <li>
              Please arrive on time for your appointment. Arriving significantly late may result
              in a shortened service or the need to reschedule.
            </li>
            <li>We recommend giving us at least a few hours&apos; notice to cancel or reschedule.</li>
          </ul>

          <h2>2. Pricing</h2>
          <p>
            Prices listed on our website and services page are indicative and may vary depending
            on hair length, product used, stylist seniority, or specific requirements discussed
            at the time of consultation. Final pricing will always be confirmed with you before
            the service begins.
          </p>

          <h2>3. Service Results</h2>
          <p>
            While our stylists take great care to deliver the look you want, certain outcomes
            (such as hair colour results, skin reactions, or styling longevity) can vary from
            person to person based on hair/skin type, history and aftercare. We will always
            discuss expectations with you before starting a service.
          </p>

          <h2>4. Patch Tests &amp; Allergies</h2>
          <p>
            Please inform our staff of any allergies, sensitivities, or prior reactions to hair
            or skin products before your service. A patch test may be recommended or required
            before certain chemical treatments (such as colour or keratin).
          </p>

          <h2>5. Payments</h2>
          <p>
            Payment is due at the time of service unless otherwise agreed. We accept cash and
            standard digital payment methods available at the salon.
          </p>

          <h2>6. Website Use</h2>
          <p>
            The content on this website (text, images, logo and design) belongs to {SITE.name}
            unless otherwise noted, and is provided for general information about our services.
            You may not copy or reuse our content for commercial purposes without permission.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the extent permitted by law, {SITE.name} is not liable for indirect or
            consequential loss arising from use of this website. Nothing in these terms limits
            any liability that cannot be excluded under applicable Indian consumer protection
            law.
          </p>

          <h2>8. Changes to These Terms</h2>
          <p>
            We may update these Terms &amp; Conditions from time to time. The updated version
            will be posted on this page with a revised &ldquo;Last updated&rdquo; date.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These terms are governed by the laws of India, and any disputes will be subject to
            the jurisdiction of the courts in Kolkata, West Bengal.
          </p>

          <h2>10. Contact Us</h2>
          <ul>
            <li>Phone / WhatsApp: {SITE.phoneDisplay}</li>
            <li>Email: {SITE.email}</li>
            <li>Address: {SITE.address}</li>
          </ul>

          <p className="text-[12px] text-muted italic mt-8">
            This page is a general template for a small local salon business and is provided for
            convenience only — it is not legal advice. Please have it reviewed by a qualified
            lawyer before publishing it live, to make sure it fits your exact business practices
            and local regulations.
          </p>
        </LegalPageLayout>
      </main>
      <Footer />
    </>
  );
}