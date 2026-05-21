import { PageHeader } from "@/components/layout";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "Product",
  description:
    "Discover how Technaz helps you build and scale your product vision.",
  path: ROUTES.product,
});

export default function ProductPage() {
  return (
    <>
      <PageHeader
        title="Product"
        description="Elite remote development teams to scale your product vision from concept to launch."
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-muted">
          <p>
            Whether you&apos;re launching an MVP or scaling an existing platform,
            Technaz provides the engineering talent and product expertise to
            move fast without sacrificing quality.
          </p>
          <p>
            Our product development approach covers discovery, design,
            engineering, QA, and deployment — giving you a single partner for
            the entire product lifecycle.
          </p>
          <Button href={ROUTES.contact}>Start Your Project</Button>
        </div>
      </Section>
    </>
  );
}
