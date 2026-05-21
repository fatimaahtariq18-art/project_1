import { Marquee } from "@/components/shared";

type TrustBarSectionProps = {
  awards: string[];
  clientLogos: string[];
};

export function TrustBarSection({ awards, clientLogos }: TrustBarSectionProps) {
  return (
    <section className="border-b border-dark-border bg-dark pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
          Awards & Certifications
        </p>
        <div className="mb-10 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {awards.map((award) => (
            <div
              key={award}
              className="flex h-12 items-center rounded-lg border border-dark-border bg-dark-surface px-6 text-xs font-medium text-white/60"
            >
              {award}
            </div>
          ))}
        </div>
      </div>

      <Marquee duration={35} className="py-2">
        <div className="flex gap-8">
          {clientLogos.map((logo) => (
            <div
              key={logo}
              className="flex h-14 w-36 shrink-0 items-center justify-center rounded-lg border border-dark-border bg-dark-surface/50 px-4 text-xs font-medium text-white/50"
            >
              {logo}
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
