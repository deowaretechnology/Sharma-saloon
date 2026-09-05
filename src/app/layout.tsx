import type { Metadata } from "next";
import { Playfair_Display, Poppins, Yellowtail } from "next/font/google";
import { BookingProvider } from "@/components/booking/BookingContext";
import BookingModal from "@/components/booking/BookingModal";
import "./globals.css";
import FloatingContact from "@/components/FloatingContact";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const yellowtail = Yellowtail({
  variable: "--font-yellowtail",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Sharma's Salon | Unisex Salon, Beauty & Personal Care in Kolkata",
  description:
    "Sharma's Salon in Tarulia, Kolkata — expert hair, skin, makeup and grooming for men and women. Look Good. Feel Better. Be You.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${poppins.variable} ${yellowtail.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-sans">
        <BookingProvider>
          {children}
          <BookingModal />
        </BookingProvider>
        <FloatingContact />
      </body>
    </html>
  );
}
