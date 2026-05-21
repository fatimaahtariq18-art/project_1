import { siteConfig } from "@/config/site.config";
import {
  awards,
  clientLogos,
  certifications,
  industries,
  techPartners,
} from "./navigation";
import { businessSegments } from "./business-segments";
import { engagementModels } from "./engagement-models";
import { services } from "./services";
import { testimonials } from "./testimonials";
import { techCategories, techStack } from "./tech-stack";
import { leadership } from "./leadership";

export function getHomepageContent() {
  return {
    hero: {
      eyebrow: "Next-Gen Innovation",
      title: "AI-Powered Ecosystems for Global Companies",
      description: siteConfig.description,
      cta: {
        label: "Book a Consultation, it's free",
        href: "/contact",
      },
    },
    awards,
    clientLogos,
    businessSegments,
    services: services.slice(0, 6),
    industries,
    engagementModels,
    leadership,
    techPartners,
    techCategories,
    techStack,
    testimonials,
    certifications,
    cta: {
      title: "Let's Work Together",
      description: "",
      buttonLabel: "Book a Consultation, it's free",
      buttonHref: "/contact",
    },
  };
}
