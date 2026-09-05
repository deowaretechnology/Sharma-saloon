"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const HIM_SERVICES = [
  "Haircut",
  "Beard Styling",
  "Hair Colour",
  "Skin Care",
  "Grooming Packages",
];

const HER_SERVICES = [
  "Hair Care",
  "Skin Care",
  "Makeup",
  "Nail Care",
  "Bridal Packages",
];

const HIM_IMAGE =
  "https://luxurylondon.co.uk/wp-content/uploads/2022/08/the-best-barbers-in-london-truefitt-and-hill.jpeg";

const HER_IMAGE =
  "https://static.wixstatic.com/media/11062b_47fb12b5e8744391bcc23e983a7ac829~mv2.jpg/v1/fill/w_980%2Ch_549%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/Visiting%20the%20Salon.jpg";

export default function ForHimHer() {
  return (
    <section className="w-full bg-[#F5EFE7] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]
          overflow-hidden
          rounded-[24px]
          border
          border-[#DED2C3]
          shadow-[0_18px_55px_rgba(66,48,31,0.10)]
        "
      >
        {/* =====================================================
            DESKTOP
            3 EXACT EQUAL COLUMNS
        ====================================================== */}

        <div className="grid w-full grid-cols-1 md:grid-cols-3">

          {/* =====================================================
              FOR HIM
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              group
              relative
              order-3
              min-w-0
              h-[420px]
              w-full
              overflow-hidden
              md:order-1
              md:h-[430px]
            "
          >
            <img
              src={HIM_IMAGE}
              alt="Professional men's grooming"
              className="
                absolute
                inset-0
                block
                h-full
                w-full
                min-w-0
                object-cover
                object-center
                transition-transform
                duration-1000
                ease-out
                group-hover:scale-[1.035]
              "
            />

            {/* DARK IMAGE OVERLAY */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/80
                via-black/25
                to-black/5
              "
            />

            {/* CONTENT */}
            <div
              className="
                absolute
                inset-x-0
                bottom-0
                z-10
                p-6
                sm:p-7
              "
            >
              <p
                className="
                  mb-2
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#E5C38B]
                "
              >
                FOR HIM
              </p>

              <h3
                className="
                  font-display
                  text-[30px]
                  leading-[0.95]
                  text-white
                  sm:text-[34px]
                "
              >
                Groomed
                <br />
                <span className="italic">With Purpose.</span>
              </h3>

              <div className="my-4 h-px w-8 bg-white/40" />

              <ul className="space-y-1 text-[11px] leading-4 text-white/85">
                {HIM_SERVICES.map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-2"
                  >
                    <span className="h-px w-2.5 bg-[#D8B77D]" />
                    {service}
                  </li>
                ))}
              </ul>

              <a
                href="/services"
                className="
                  mt-4
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#D5B16F]
                  px-4
                  py-2.5
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.1em]
                  text-[#251D16]
                  transition-all
                  duration-300
                  hover:bg-white
                "
              >
                Explore for Men
                <ArrowUpRight size={13} strokeWidth={1.8} />
              </a>
            </div>
          </motion.div>

          {/* =====================================================
              CENTER
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="
              relative
              order-2
              flex
              min-w-0
              h-[300px]
              w-full
              items-center
              justify-center
              overflow-hidden
              bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.38),transparent_55%),linear-gradient(145deg,#D9C5AC_0%,#C7AE92_100%)]
              md:h-[430px]
            "
          >
            {/* SUBTLE CIRCLES */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[250px]
                w-[250px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-[#856541]/15
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[190px]
                w-[190px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-[#856541]/10
              "
            />

            {/* CENTER CONTENT */}

            <div className="relative z-10 w-full px-5 text-center">
              <p
                className="
                  mb-4
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.38em]
                  text-[#725C47]
                "
              >
                SHARMA'S SALON
              </p>

              <h2
                className="
                  font-display
                  text-[38px]
                  leading-[0.88]
                  tracking-[-0.035em]
                  text-[#292119]
                  sm:text-[43px]
                  lg:text-[47px]
                "
              >
                Beauty
                <br />

                <span className="italic text-[#9A6D37]">
                  Has No
                </span>

                <br />

                Gender
              </h2>

              <div className="mx-auto my-5 h-px w-9 bg-[#8C6B48]/50" />

              <p
                className="
                  text-[7px]
                  font-medium
                  uppercase
                  tracking-[0.34em]
                  leading-[2]
                  text-[#695744]
                "
              >
                LOOK GOOD
                <br />
                FEEL BETTER
                <br />
                BE YOU
              </p>
            </div>
          </motion.div>

          {/* =====================================================
              FOR HER
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="
              group
              relative
              order-1
              min-w-0
              h-[420px]
              w-full
              overflow-hidden
              md:order-3
              md:h-[430px]
            "
          >
            <img
              src={HER_IMAGE}
              alt="Professional women's salon styling"
              className="
                absolute
                inset-0
                block
                h-full
                w-full
                min-w-0
                object-cover
                object-center
                transition-transform
                duration-1000
                ease-out
                group-hover:scale-[1.035]
              "
            />

            {/* DARK IMAGE OVERLAY */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/80
                via-black/25
                to-black/5
              "
            />

            {/* CONTENT */}

            <div
              className="
                absolute
                inset-x-0
                bottom-0
                z-10
                p-6
                sm:p-7
              "
            >
              <p
                className="
                  mb-2
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-[#E5C38B]
                "
              >
                FOR HER
              </p>

              <h3
                className="
                  font-display
                  text-[30px]
                  leading-[0.95]
                  text-white
                  sm:text-[34px]
                "
              >
                Beauty,
                <br />
                <span className="italic">Your Way.</span>
              </h3>

              <div className="my-4 h-px w-8 bg-white/40" />

              <ul className="space-y-1 text-[11px] leading-4 text-white/85">
                {HER_SERVICES.map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-2"
                  >
                    <span className="h-px w-2.5 bg-[#D8B77D]" />
                    {service}
                  </li>
                ))}
              </ul>

              <a
                href="/services"
                className="
                  mt-4
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#D5B16F]
                  px-4
                  py-2.5
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.1em]
                  text-[#251D16]
                  transition-all
                  duration-300
                  hover:bg-white
                "
              >
                Explore for Women
                <ArrowUpRight size={13} strokeWidth={1.8} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}