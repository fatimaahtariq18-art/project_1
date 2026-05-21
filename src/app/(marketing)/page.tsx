import { getHomepageContent } from "@/content/home";
import {
  HeroSection,
  TrustBarSection,
  BusinessModelSection,
  ServicesGridSection,
  IndustriesSection,
  EngagementModelsSection,
  LeadershipBannerSection,
  TechPartnersSection,
  TechStackSection,
  TestimonialsSection,
  CertificationsSection,
  CtaBannerSection,
} from "@/components/sections";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata();

export default function HomePage() {
  const content = getHomepageContent();

  return (
    <>
      <HeroSection {...content.hero} />
      <TrustBarSection
        awards={content.awards}
        clientLogos={content.clientLogos}
      />
      <BusinessModelSection segments={content.businessSegments} />
      <ServicesGridSection services={content.services} />
      <IndustriesSection industries={content.industries} />
      <EngagementModelsSection models={content.engagementModels} />
      <LeadershipBannerSection {...content.leadership} />
      <TechPartnersSection partners={content.techPartners} />
      <TechStackSection
        categories={content.techCategories}
        items={content.techStack}
      />
      <TestimonialsSection testimonials={content.testimonials} />
      <CertificationsSection certifications={content.certifications} />
      <CtaBannerSection {...content.cta} />
    </>
  );
}
