import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Marquee, ScrollReveal } from "@/components/shared";

type TechPartnersSectionProps = {
  partners: string[];
};

export function TechPartnersSection({ partners }: TechPartnersSectionProps) {
  return (
    <Section background="muted">
      <ScrollReveal>
        <Heading
          eyebrow="From Idea to Impact"
          title="Creating Digital Products & Experiences"
          align="center"
          className="mb-12"
        />
      </ScrollReveal>

      <Marquee duration={30} reverse>
        <div className="flex gap-6">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex h-16 w-40 shrink-0 items-center justify-center rounded-xl border border-border bg-background px-4 text-sm font-semibold text-muted transition-colors hover:border-accent/30 hover:text-foreground"
            >
              {partner}
            </div>
          ))}
        </div>
      </Marquee>
    </Section>
  );
}
