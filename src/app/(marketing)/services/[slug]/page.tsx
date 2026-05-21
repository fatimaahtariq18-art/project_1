import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import {
  getAllServiceSlugs,
  getServiceBySlug,
} from "@/content/services";
import { createPageMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/constants";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return {};

  return createPageMetadata({
    title: service.title,
    description: service.shortDescription,
    path: ROUTES.service(slug),
  });
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <PageHeader
        title={service.title}
        description={service.shortDescription}
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-muted">
            {service.description}
          </p>
          <div className="mt-10">
            <h2 className="text-xl font-semibold">What we deliver</h2>
            <ul className="mt-4 space-y-3">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-muted before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-accent before:content-['']"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10">
            <Button href={ROUTES.contact}>Discuss This Service</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
