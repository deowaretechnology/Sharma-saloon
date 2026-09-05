import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  image: string;
  scriptText?: string;
};

export default function PageHero({
  eyebrow,
  titleLine1,
  titleLine2,
  description,
  image,
  scriptText,
}: PageHeroProps) {
  return (
    <section className="relative w-full min-h-[420px] sm:min-h-[460px] overflow-hidden bg-charcoal">
      <Image
        src={image}
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/55 to-charcoal/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/10" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12 h-full min-h-[420px] sm:min-h-[460px] flex flex-col justify-center py-16">
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-7 bg-gold" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-soft">
            {eyebrow}
          </p>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-cream max-w-2xl">
          {titleLine1}
          <br />
          <span className="italic text-gold-soft">{titleLine2}</span>
        </h1>

        <p className="mt-6 text-cream/75 max-w-md text-[14px] sm:text-[15px] leading-relaxed">
          {description}
        </p>
      </div>

      {scriptText && (
        <p className="hidden md:block absolute bottom-10 right-10 lg:right-16 z-10 font-script text-3xl text-cream/70 rotate-[-4deg] select-none whitespace-pre-line text-right">
          {scriptText}
        </p>
      )}
    </section>
  );
}
