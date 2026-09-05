import { ReactNode } from "react";

export default function LegalPageLayout({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-cream py-16 sm:py-20 px-5 sm:px-6 lg:px-12">
      <div className="max-w-[860px] mx-auto">
        <p className="text-[11px] tracking-label text-gold-deep font-semibold mb-3">
          {eyebrow}
        </p>
        <h1 className="font-display text-3xl sm:text-4xl text-ink mb-3">{title}</h1>
        <p className="text-[12px] text-muted mb-10">Last updated: {updated}</p>

        <div
          className="
            prose-legal
            space-y-7
            text-[14px]
            leading-relaxed
            text-ink/80
            [&_h2]:font-display
            [&_h2]:text-xl
            [&_h2]:text-ink
            [&_h2]:mb-3
            [&_h2]:mt-2
            [&_p]:mb-3
            [&_ul]:list-disc
            [&_ul]:pl-5
            [&_ul]:space-y-1.5
            [&_li]:leading-relaxed
            [&_a]:text-gold-deep
            [&_a]:underline
            [&_a]:underline-offset-2
            [&_strong]:text-ink
          "
        >
          {children}
        </div>
      </div>
    </section>
  );
}