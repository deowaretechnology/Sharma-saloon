import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalPageLayout from "@/components/LegalPageLayout";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy | Sharma's Salon",
  description: "How Sharma's Salon collects, uses and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <LegalPageLayout eyebrow="LEGAL" title="Privacy Policy" updated="6 September 2026">
          <p>
            {SITE.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates this
            website and our salon services at {SITE.address}. This Privacy Policy explains what
            information we collect when you use our website or book an appointment with us, how
            we use it, and the choices you have.
          </p>

          <h2>1. Information We Collect</h2>
          <p>When you book an appointment or contact us through this website, we may collect:</p>
          <ul>
            <li>Your name, phone number and email address</li>
            <li>The service(s) you are interested in, and your preferred date and time</li>
            <li>Any message or notes you choose to share with us</li>
            <li>
              Basic technical information such as browser type and device, collected
              automatically for site performance
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information you share with us to:</p>
          <ul>
            <li>Confirm, reschedule or follow up on your appointment via phone or WhatsApp</li>
            <li>Respond to your enquiries and provide customer support</li>
            <li>Improve our services, website and the experience we offer</li>
            <li>Send appointment reminders or offers, only where you have agreed to this</li>
          </ul>

          <h2>3. Booking via WhatsApp</h2>
          <p>
            When you submit our booking form, the details you enter (name, phone number, date,
            time, service and any notes) are used to pre-fill a WhatsApp message addressed to our
            salon number. The message is only sent once you press &ldquo;Send&rdquo; inside
            WhatsApp — we do not automatically transmit your data without your action. Your
            conversation with us on WhatsApp is subject to WhatsApp&apos;s own privacy policy in
            addition to this one.
          </p>

          <h2>4. Sharing of Information</h2>
          <p>
            We do not sell or rent your personal information to third parties. We may share
            information with trusted service providers who help us operate our website or
            business (for example, hosting providers), and only to the extent necessary for them
            to perform those services.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain appointment and enquiry information only for as long as needed to provide
            our services, maintain business records, and comply with applicable law.
          </p>

          <h2>6. Cookies</h2>
          <p>
            Our website may use basic cookies or similar technologies to remember your
            preferences and understand how visitors use the site. You can control cookies through
            your browser settings at any time.
          </p>

          <h2>7. Your Choices</h2>
          <p>
            You may ask us to access, correct or delete the personal information we hold about
            you by contacting us using the details below. You may also opt out of promotional
            messages at any time.
          </p>

          <h2>8. Children&apos;s Privacy</h2>
          <p>
            Our services are intended for adults and are not directed at children. We do not
            knowingly collect personal information from children.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on
            this page with a revised &ldquo;Last updated&rdquo; date.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle your
            information, please reach out:
          </p>
          <ul>
            <li>Phone / WhatsApp: {SITE.phoneDisplay}</li>
            <li>Email: {SITE.email}</li>
            <li>Address: {SITE.address}</li>
          </ul>

          <p className="text-[12px] text-muted italic mt-8">
            This page is a general template for a small local business and is provided for
            convenience only — it is not legal advice. Please have it reviewed by a qualified
            lawyer to make sure it fully meets your obligations under applicable Indian data
            protection law (including the Digital Personal Data Protection Act) before publishing
            it live.
          </p>
        </LegalPageLayout>
      </main>
      <Footer />
    </>
  );
}