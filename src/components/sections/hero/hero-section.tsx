"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/shared";

type HeroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
};

export function HeroSection({
  eyebrow,
  title,
  description,
  cta,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-dark pb-8 pt-16 text-white md:pb-12 md:pt-24">
      {/* Background patterns */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(242,101,34,0.12),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute -right-32 -top-32 h-96 w-96 animate-pulse-glow rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 animate-pulse-glow rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <Container className="relative">
        <ScrollReveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
            {title.split(" for ").map((part, i) =>
              i === 0 ? (
                <span key={part}>
                  {part}
                  <br className="hidden sm:block" />
                  {" for "}
                </span>
              ) : (
                <span key={part} className="text-white/90">
                  {part}
                </span>
              ),
            )}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
            {description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10">
            <Button href={cta.href} size="lg">
              {cta.label}
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
