"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { SERVICES, SITE } from "@/lib/data";

type BookingFormProps = {
  initialService?: string;
  variant?: "modal" | "page";
  onSuccess?: () => void;
};

export default function BookingForm({
  initialService = "",
  variant = "page",
  onSuccess,
}: BookingFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState(initialService);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !service) {
      setError("Please fill in your name, phone number and select a service.");
      return;
    }
    setError("");

    const lines = [
      `Hello ${SITE.name}! I'd like to book an appointment.`,
      "",
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Service: ${service}`,
      `Preferred Date: ${date || "Not specified"}`,
      `Preferred Time: ${time || "Not specified"}`,
      `Notes: ${message.trim() || "—"}`,
    ];

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${SITE.whatsapp}?text=${text}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);

    if (onSuccess) {
      setTimeout(onSuccess, 1200);
    }
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center text-center gap-3 py-10 px-6">
        <CheckCircle2 size={40} className="text-gold-deep" />
        <p className="font-display text-xl text-ink">Opening WhatsApp…</p>
        <p className="text-[13px] text-muted max-w-xs">
          We&apos;ve pre-filled your appointment details. Just hit send on WhatsApp
          and our team will confirm shortly.
        </p>
        {variant === "page" && (
          <button
            type="button"
            onClick={() => {
              setSent(false);
              setName("");
              setPhone("");
              setDate("");
              setTime("");
              setMessage("");
              setService(initialService);
            }}
            className="mt-3 text-[12px] font-semibold text-gold-deep hover:text-ink transition-colors underline underline-offset-4"
          >
            Book another appointment
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
      <div className="sm:col-span-1">
        <label className="block text-[12px] font-medium text-ink/80 mb-1.5">
          Full Name <span className="text-gold-deep">*</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full bg-cream border border-line rounded-lg px-4 py-3 text-[13px] text-ink placeholder:text-muted focus:outline-none focus:border-gold-deep transition-colors"
        />
      </div>

      <div className="sm:col-span-1">
        <label className="block text-[12px] font-medium text-ink/80 mb-1.5">
          Phone Number <span className="text-gold-deep">*</span>
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          className="w-full bg-cream border border-line rounded-lg px-4 py-3 text-[13px] text-ink placeholder:text-muted focus:outline-none focus:border-gold-deep transition-colors"
        />
      </div>

      <div className="sm:col-span-1">
        <label className="block text-[12px] font-medium text-ink/80 mb-1.5">
          Preferred Date
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full bg-cream border border-line rounded-lg px-4 py-3 text-[13px] text-ink focus:outline-none focus:border-gold-deep transition-colors"
        />
      </div>

      <div className="sm:col-span-1">
        <label className="block text-[12px] font-medium text-ink/80 mb-1.5">
          Preferred Time
        </label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full bg-cream border border-line rounded-lg px-4 py-3 text-[13px] text-ink focus:outline-none focus:border-gold-deep transition-colors"
        />
      </div>

      <div className="sm:col-span-2">
        <label className="block text-[12px] font-medium text-ink/80 mb-1.5">
          Service Interested In <span className="text-gold-deep">*</span>
        </label>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full bg-cream border border-line rounded-lg px-4 py-3 text-[13px] text-ink focus:outline-none focus:border-gold-deep transition-colors"
        >
          <option value="">Select a service</option>
          <option value="Free Consultation">Free Consultation</option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.name}>
              {s.name} — {s.price}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className="block text-[12px] font-medium text-ink/80 mb-1.5">
          Description (Optional)
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          placeholder="Tell us more about your requirements…"
          className="w-full bg-cream border border-line rounded-lg px-4 py-3 text-[13px] text-ink placeholder:text-muted focus:outline-none focus:border-gold-deep transition-colors resize-none"
        />
      </div>

      {error && (
        <p className="sm:col-span-2 text-[12px] text-red-600">{error}</p>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="group w-full inline-flex items-center justify-center gap-2 bg-gold text-charcoal px-6 py-4 text-[12px] font-semibold tracking-wide rounded-lg hover:bg-gold-deep hover:text-cream transition-all duration-300"
        >
          Send via WhatsApp
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </form>
  );
}
