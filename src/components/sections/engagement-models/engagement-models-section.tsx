"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared";
import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { EngagementModel } from "@/types";

type EngagementModelsSectionProps = {
  models: EngagementModel[];
};

export function EngagementModelsSection({
  models,
}: EngagementModelsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = models[activeIndex];

  return (
    <Section id="engagement-models">
      <ScrollReveal>
        <Heading
          eyebrow="Engagement Model"
          title="Growth-Focused Digital Services"
          align="center"
          className="mb-12"
        />
      </ScrollReveal>

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Tab list — desktop */}
        <div className="hidden lg:col-span-4 lg:flex lg:flex-col lg:gap-2">
          {models.map((model, index) => (
            <button
              key={model.slug}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "rounded-xl px-5 py-4 text-left transition-all duration-300",
                activeIndex === index
                  ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                  : "bg-surface text-foreground hover:bg-surface/80",
              )}
            >
              <p className="font-bold">{model.title}</p>
              <p
                className={cn(
                  "mt-1 text-sm",
                  activeIndex === index
                    ? "text-accent-foreground/80"
                    : "text-muted",
                )}
              >
                {model.subtitle}
              </p>
            </button>
          ))}
        </div>

        {/* Mobile tabs */}
        <div className="flex gap-2 overflow-x-auto lg:hidden">
          {models.map((model, index) => (
            <button
              key={model.slug}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeIndex === index
                  ? "bg-accent text-accent-foreground"
                  : "bg-surface text-muted",
              )}
            >
              {model.title}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.slug}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-border bg-surface p-8 md:p-10"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                {active.subtitle}
              </p>
              <h3 className="mt-2 text-2xl font-bold md:text-3xl">
                {active.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted">
                {active.description}
              </p>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold">What this includes:</h4>
                  <ul className="mt-4 space-y-3">
                    {active.includes.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm text-muted"
                      >
                        <span className="text-accent">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Best Suited for:</h4>
                  <ul className="mt-4 space-y-3">
                    {active.bestSuitedFor.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-sm text-muted"
                      >
                        <span className="text-accent">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <Button href={ROUTES.contact} variant="primary">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
