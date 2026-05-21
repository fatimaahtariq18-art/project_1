"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { RotatingText, ScrollReveal } from "@/components/shared";
import { ROUTES } from "@/lib/constants";

type IndustriesSectionProps = {
  industries: string[];
};

export function IndustriesSection({ industries }: IndustriesSectionProps) {
  return (
    <section id="industries" className="relative overflow-hidden bg-dark py-20 text-white md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,101,34,0.08),transparent_70%)]" />
      <Container className="relative text-center">
        <ScrollReveal>
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            We partner with brands in{" "}
            <RotatingText items={industries} />
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2} className="mt-10">
          <Button href={ROUTES.contact} variant="white">
            Start Partnership
          </Button>
        </ScrollReveal>
      </Container>
    </section>
  );
}
