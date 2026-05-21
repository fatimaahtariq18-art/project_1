"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/shared";

type CtaBannerSectionProps = {
  title: string;
  buttonLabel: string;
  buttonHref: string;
};

export function CtaBannerSection({
  title,
  buttonLabel,
  buttonHref,
}: CtaBannerSectionProps) {
  return (
    <section className="relative overflow-hidden bg-accent py-20 text-accent-foreground md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
      <Container className="relative">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {title}
          </h2>
          <div className="mt-10">
            <Button href={buttonHref} variant="white" size="lg">
              {buttonLabel}
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
