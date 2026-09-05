import {
  Heart,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
} from "lucide-react";

const FEATURES = [
  {
    icon: UserRoundCheck,
    title: "Experienced Hands",
    text: "Thoughtful styling and personal attention.",
  },
  {
    icon: Sparkles,
    title: "Premium Care",
    text: "Quality products chosen with care.",
  },
  {
    icon: ShieldCheck,
    title: "Clean & Comfortable",
    text: "A fresh, hygienic salon environment.",
  },
  {
    icon: Heart,
    title: "Made For You",
    text: "Beauty that feels natural and personal.",
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-[#F7F2EB] border-y border-[#E7DCCF]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-14 lg:py-16">

        <div className="grid lg:grid-cols-[1.05fr_1.95fr] gap-12 lg:gap-20 items-center">

          {/* Left editorial statement */}
          <div className="max-w-md">
            <p className="text-[10px] tracking-[0.28em] uppercase text-[#B58A52] mb-4">
              THE SHARMA DIFFERENCE
            </p>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] text-[#211C17]">
              Beauty should feel
              <span className="block italic text-[#B58A52]">
                personal.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-6 text-[#766C62] max-w-sm">
              From the first consultation to the final look,
              every detail is handled with care.
            </p>
          </div>

          {/* Right features */}
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-9">

            {FEATURES.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group flex gap-4"
                >
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="
                      w-11 h-11
                      rounded-full
                      bg-white
                      border border-[#E1D3C3]
                      flex items-center justify-center
                      transition-all duration-300
                      group-hover:border-[#B58A52]
                      group-hover:-translate-y-0.5
                    ">
                      <Icon
                        size={18}
                        strokeWidth={1.4}
                        className="text-[#A77A3B]"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="
                        text-[9px]
                        tracking-[0.18em]
                        text-[#B9A18A]
                      ">
                        0{index + 1}
                      </span>

                      <h3 className="
                        text-[14px]
                        font-medium
                        text-[#29231E]
                      ">
                        {feature.title}
                      </h3>
                    </div>

                    <p className="
                      mt-1.5
                      text-[11px]
                      leading-5
                      text-[#81776D]
                      max-w-[220px]
                    ">
                      {feature.text}
                    </p>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}