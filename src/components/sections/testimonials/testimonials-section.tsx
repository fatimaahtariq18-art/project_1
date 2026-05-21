"use client";

import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Carousel, CarouselSlide, ScrollReveal } from "@/components/shared";
import type { Testimonial } from "@/types";

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  return (
    <Section background="muted">
      <ScrollReveal>
        <Heading
          eyebrow="Our Clients"
          title="Making Hundreds Of Businesses Better, Big Or Small!"
          align="center"
          className="mb-12"
        />
      </ScrollReveal>

      <Carousel showDots autoplay autoplayDelay={6000}>
        {testimonials.map((testimonial) => {
          const isExpanded = expanded[testimonial.id];
          const shouldTruncate = testimonial.quote.length > 200;

          return (
            <CarouselSlide key={testimonial.id}>
              <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-background p-8 md:p-12">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xl font-bold text-accent">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p
                      className={`text-base leading-relaxed text-muted md:text-lg ${
                        !isExpanded && shouldTruncate ? "line-clamp-4" : ""
                      }`}
                    >
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    {shouldTruncate && (
                      <button
                        type="button"
                        onClick={() =>
                          setExpanded((prev) => ({
                            ...prev,
                            [testimonial.id]: !prev[testimonial.id],
                          }))
                        }
                        className="mt-2 text-sm font-semibold text-accent hover:underline"
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    )}
                    <div className="mt-6">
                      <p className="font-bold">{testimonial.author}</p>
                      <p className="text-sm text-muted">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselSlide>
          );
        })}
      </Carousel>
    </Section>
  );
}
