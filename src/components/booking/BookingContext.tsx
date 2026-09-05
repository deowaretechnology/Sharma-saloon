"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";

type BookingContextValue = {
  isOpen: boolean;
  prefillService: string;
  openBooking: (serviceName?: string) => void;
  closeBooking: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefillService, setPrefillService] = useState("");

  const value = useMemo<BookingContextValue>(
    () => ({
      isOpen,
      prefillService,
      openBooking: (serviceName = "") => {
        setPrefillService(serviceName);
        setIsOpen(true);
      },
      closeBooking: () => setIsOpen(false),
    }),
    [isOpen, prefillService]
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return ctx;
}
