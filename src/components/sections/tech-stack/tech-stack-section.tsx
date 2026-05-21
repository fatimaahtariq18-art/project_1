"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { ScrollReveal } from "@/components/shared";
import { cn } from "@/lib/utils";
import type { TechCategory, TechItem } from "@/types";

type TechStackSectionProps = {
  categories: TechCategory[];
  items: TechItem[];
};

export function TechStackSection({ categories, items }: TechStackSectionProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <Section>
      <ScrollReveal>
        <Heading
          title="Modern Stack. Real Results."
          align="center"
          className="mb-10"
        />
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
                  : "bg-surface text-muted hover:text-foreground",
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
        >
          {filteredItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.03, duration: 0.3 }}
              className="group flex flex-col items-center rounded-2xl border border-border bg-surface p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-background text-lg font-bold text-accent transition-transform duration-300 group-hover:scale-110">
                {item.name.charAt(0)}
              </div>
              <p className="mt-3 text-sm font-medium">{item.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
