"use client";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Carousel, CarouselSlide, ScrollReveal } from "@/components/shared";
import { ROUTES } from "@/lib/constants";
import type { BusinessSegment } from "@/types";

type BusinessModelSectionProps = {
  segments: BusinessSegment[];
};

export function BusinessModelSection({ segments }: BusinessModelSectionProps) {
  return (
    <Section background="default">
      <ScrollReveal>
        <Heading
          eyebrow="Business Model"
          title="Strategic Partner for Global Growth"
          align="center"
          className="mb-12"
        />
      </ScrollReveal>

      {/* Desktop grid */}
      <div className="hidden gap-6 md:grid md:grid-cols-3">
        {segments.map((segment, i) => (
          <ScrollReveal key={segment.title} delay={i * 0.1}>
            <div className="group h-full rounded-2xl border border-border bg-surface p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5">
              <h3 className="text-xl font-bold">{segment.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {segment.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="md:hidden">
        <Carousel autoplay autoplayDelay={4000} loop showDots>
          {segments.map((segment) => (
            <CarouselSlide key={segment.title}>
              <div className="rounded-2xl border border-border bg-surface p-8">
                <h3 className="text-xl font-bold">{segment.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {segment.description}
                </p>
              </div>
            </CarouselSlide>
          ))}
        </Carousel>
      </div>

      <ScrollReveal className="mt-10 text-center">
        <Button href={ROUTES.contact} variant="primary">
          Let&apos;s Discuss Your Need
        </Button>
      </ScrollReveal>
    </Section>
  );
}
