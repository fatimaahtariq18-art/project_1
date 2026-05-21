"use client";

import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared";
import { ROUTES } from "@/lib/constants";
import type { Service } from "@/types";

const serviceIcons: Record<string, string> = {
  "ai-ml-development": "🤖",
  "digital-transformation": "⚡",
  "product-design": "🎨",
  "quality-assurance": "✅",
  devops: "🚀",
  "staff-augmentation": "👥",
};

type ServicesGridSectionProps = {
  services: Service[];
};

export function ServicesGridSection({ services }: ServicesGridSectionProps) {
  return (
    <Section background="muted">
      <ScrollReveal>
        <Heading
          eyebrow="Our Services"
          title="Growth-Focused Digital Services"
          align="center"
          className="mb-12"
        />
      </ScrollReveal>

      <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <StaggerItem key={service.slug}>
            <Link
              href={ROUTES.service(service.slug)}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <span className="text-3xl">
                  {serviceIcons[service.slug] ?? "💡"}
                </span>
                <h3 className="mt-4 text-lg font-bold">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {service.shortDescription}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-all group-hover:gap-2">
                  Explore More
                  <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
