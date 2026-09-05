"use client";

import Link from "next/link";
import {
  Award,
  Gem,
  ShieldCheck,
  Users2,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "motion/react";

const STATS = [
  { icon: Users2, value: "10+", label: "Years of Experience" },
  { icon: Gem, value: "5000+", label: "Happy Clients" },
  { icon: ShieldCheck, value: "100%", label: "Hygiene & Safety" },
  { icon: Award, value: "Expert", label: "Stylists & Professionals" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        backgroundImage: "url('/image/shop.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="
        relative
        w-full
        px-5
        py-16
        sm:px-6
        sm:py-20
        lg:px-10
        lg:py-28
      "
    >
      {/* OVERLAY — image ke upar readable rakhne ke liye */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#F7F1E9]
          via-[#F7F1E9]/85
          to-[#F7F1E9]/30
          lg:via-[#F7F1E9]/30
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          flex-col
          w-full
          max-w-[1400px]
          items-center
          gap-8
          lg:flex-row
          lg:items-center
          lg:justify-between
          lg:gap-10
        "
      >
        {/* =====================================================
            LEFT — ABOUT CONTENT
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="order-1 w-full lg:w-auto lg:max-w-[540px]"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-7 bg-[#B88A4B]" />
            <p
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.28em]
                text-[#A4773D]
              "
            >
              ABOUT SHARMA&apos;S SALON
            </p>
          </div>

          <h2
            className="
              max-w-[500px]
              font-display
              text-[32px]
              leading-[1.05]
              tracking-[-0.025em]
              text-[#292119]
              sm:text-[38px]
              lg:text-[48px]
              lg:leading-[0.98]
            "
          >
            Beauty is a Journey,
            <br />
            <span className="italic text-[#9A6D37]">
              We&apos;re Here for It.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-[500px]
              text-[13px]
              leading-[1.75]
              text-[#6E6358]
              sm:text-[14px]
            "
          >
            At Sharma&apos;s Salon, we believe beauty is not just about
            appearance, it&apos;s about confidence. With experienced
            stylists, premium products and a relaxing environment, we provide
            personalized services to help you look good, feel better and be
            you.
          </p>

          <Link
            href="/about"
            className="
              group
              mt-7
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#C39A59]
              px-6
              py-3.5
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-[#251D15]
              shadow-[0_8px_24px_rgba(139,103,56,0.14)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#A97A3E]
              hover:text-white
              hover:shadow-[0_12px_28px_rgba(139,103,56,0.20)]
            "
          >
            Know More About Us
            <span
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-white/25
                transition-transform
                duration-300
                group-hover:translate-x-0.5
              "
            >
              <ArrowUpRight size={13} strokeWidth={1.8} />
            </span>
          </Link>
        </motion.div>

        {/* =====================================================
            RIGHT — STATS
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="order-2 w-full lg:w-[400px] lg:shrink-0"
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[24px]
              px-5
              py-2
              sm:px-6
              backdrop-blur-md
              bg-[linear-gradient(160deg,rgba(247,241,233,0.92)_0%,rgba(233,220,203,0.88)_100%)]
              shadow-[0_8px_24px_rgba(41,25,10,0.10),0_24px_60px_rgba(41,25,10,0.18)]
              ring-1
              ring-white/40
            "
          >
            {/* subtle gold glow accent top-right */}
            <div
              className="
                pointer-events-none
                absolute
                -top-10
                -right-10
                h-32
                w-32
                rounded-full
                bg-[#C39A59]/25
                blur-3xl
              "
            />

            {STATS.map(({ icon: Icon, value, label }, index) => (
              <div
                key={label}
                className={`
                  relative
                  flex
                  items-center
                  gap-3.5
                  py-4
                  sm:py-4.5
                  ${
                    index !== STATS.length - 1
                      ? "border-b border-[#D8C9B6]/70"
                      : ""
                  }
                `}
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#CDB38D]
                    bg-white/70
                    shadow-sm
                  "
                >
                  <Icon size={17} strokeWidth={1.5} className="text-[#A67A3F]" />
                </div>

                <div className="min-w-0">
                  <p
                    className="
                      font-display
                      text-[24px]
                      leading-none
                      tracking-[-0.015em]
                      text-[#292119]
                      sm:text-[26px]
                    "
                  >
                    {value}
                  </p>
                  <p
                    className="
                      mt-1
                      text-[9px]
                      leading-tight
                      text-[#75695D]
                      sm:text-[10px]
                    "
                  >
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}