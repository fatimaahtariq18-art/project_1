import Link from "next/link";
import { PageHeader } from "@/components/layout";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { services } from "@/content/services";
import { createPageMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "Services",
  description: "Explore Technaz software engineering and development services.",
  path: ROUTES.services,
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Growth-focused digital services to help you build, scale, and transform."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.slug} hover className="flex flex-col">
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {service.shortDescription}
              </p>
              <Link
                href={ROUTES.service(service.slug)}
                className="mt-4 text-sm font-medium text-accent hover:underline"
              >
                View Details →
              </Link>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
