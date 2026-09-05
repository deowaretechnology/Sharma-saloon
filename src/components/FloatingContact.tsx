import React from "react";

const PHONE_NUMBER = "919123988105"; // Replace with salon WhatsApp/phone number
const DISPLAY_PHONE = "+91 91239 88105"; // Replace with salon phone number

export default function FloatingContact() {
  const callHref = `tel:+${PHONE_NUMBER}`;
  const whatsappHref = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    "Hello Sharma's Salon, I would like to book an appointment."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3">
      {/* Call */}
      <a
        href={callHref}
        aria-label={`Call Sharma's Salon at ${DISPLAY_PHONE}`}
        title="Call Us"
        className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-[#bd9652] text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#a98242] focus:outline-none focus:ring-2 focus:ring-[#bd9652] focus:ring-offset-2"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path
            d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.32.56 3.57.56a1 1 0 0 1 1 1v3.49a1 1 0 0 1-1 1C11.72 21 3 12.28 3 2.99a1 1 0 0 1 1-1H7.5a1 1 0 0 1 1 1c0 1.25.19 2.45.56 3.57a1 1 0 0 1-.24 1.02l-2.2 2.21Z"
            fill="currentColor"
          />
        </svg>

        <span className="pointer-events-none absolute right-[68px] whitespace-nowrap rounded-full bg-[#241f1a] px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
          Call Us
        </span>
      </a>

      {/* WhatsApp */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Sharma's Salon on WhatsApp"
        title="WhatsApp Us"
        className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-[#bd9652] text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#a98242] focus:outline-none focus:ring-2 focus:ring-[#bd9652] focus:ring-offset-2"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path
            d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.52 0 .18 5.34.18 11.9c0 2.1.55 4.15 1.6 5.96L.08 24l6.29-1.65a11.9 11.9 0 0 0 5.71 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.47-8.43ZM12.09 21.8h-.01a9.88 9.88 0 0 1-5.04-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.86 9.86 0 0 1-1.52-5.28c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.03 7.01 2.9a9.84 9.84 0 0 1 2.91 7.02c0 5.47-4.45 9.92-9.93 9.92Zm5.44-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"
            fill="currentColor"
          />
        </svg>

        <span className="pointer-events-none absolute right-[68px] whitespace-nowrap rounded-full bg-[#241f1a] px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
}
