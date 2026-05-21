import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared";

type CertificationsSectionProps = {
  certifications: string[];
};

export function CertificationsSection({
  certifications,
}: CertificationsSectionProps) {
  return (
    <Section background="default">
      <ScrollReveal>
        <Heading
          eyebrow="Certifications"
          title="Credentials Validate"
          align="center"
          className="mb-12"
        />
      </ScrollReveal>

      <StaggerContainer className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {certifications.map((cert) => (
          <StaggerItem key={cert}>
            <div className="flex h-16 w-36 items-center justify-center rounded-xl border border-border bg-surface px-4 text-sm font-bold text-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:text-foreground hover:shadow-lg">
              {cert}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
