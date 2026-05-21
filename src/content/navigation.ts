import type { NavItem } from "@/types";
import { ROUTES } from "@/lib/constants";

export const mainNavigation: NavItem[] = [
  {
    label: "Capabilities",
    href: ROUTES.services,
    children: [
      { label: "Custom Software Development", href: ROUTES.service("custom-software-development") },
      { label: "Staff Augmentation", href: ROUTES.service("staff-augmentation") },
      { label: "Digital Transformation", href: ROUTES.service("digital-transformation") },
      { label: "Product Design", href: ROUTES.service("product-design") },
      { label: "Quality Assurance", href: ROUTES.service("quality-assurance") },
      { label: "DevOps", href: ROUTES.service("devops") },
    ],
  },
  {
    label: "Industries",
    href: "#industries",
    children: [
      { label: "Real Estate", href: "#industries" },
      { label: "Travel & Hospitality", href: "#industries" },
      { label: "Banking & Fintech", href: "#industries" },
      { label: "Healthcare", href: "#industries" },
      { label: "Edtech", href: "#industries" },
      { label: "Startups", href: "#industries" },
    ],
  },
  {
    label: "Company",
    href: ROUTES.about,
    children: [
      { label: "About Us", href: ROUTES.about },
      { label: "Contact", href: ROUTES.contact },
      { label: "Product", href: ROUTES.product },
    ],
  },
  {
    label: "Engagement Models",
    href: "#engagement-models",
    children: [
      { label: "Product Development", href: "#engagement-models" },
      { label: "Team Augmentation", href: "#engagement-models" },
      { label: "Consultation", href: "#engagement-models" },
    ],
  },
];

export const footerNavigation = {
  company: [
    { label: "About Us", href: ROUTES.about },
    { label: "Contact", href: ROUTES.contact },
    { label: "Product", href: ROUTES.product },
  ],
  services: [
    { label: "Custom Software Development", href: ROUTES.service("custom-software-development") },
    { label: "Digital Transformation", href: ROUTES.service("digital-transformation") },
    { label: "Product Design", href: ROUTES.service("product-design") },
    { label: "Quality Assurance", href: ROUTES.service("quality-assurance") },
    { label: "DevOps", href: ROUTES.service("devops") },
    { label: "Staff Augmentation", href: ROUTES.service("staff-augmentation") },
  ],
  industries: [
    { label: "Real Estate", href: "#industries" },
    { label: "Travel & Hospitality", href: "#industries" },
    { label: "Banking & Fintech", href: "#industries" },
    { label: "Healthcare", href: "#industries" },
    { label: "Edtech", href: "#industries" },
    { label: "Startups", href: "#industries" },
  ],
} as const;

export const awards = [
  "Clutch Top Developer",
  "ISO Certified",
  "AWS Partner",
  "Design Excellence",
];

export const clientLogos = [
  "Client Alpha",
  "Client Beta",
  "Client Gamma",
  "Client Delta",
  "Client Epsilon",
  "Client Zeta",
  "Client Eta",
  "Client Theta",
  "Client Iota",
];

export const techPartners = [
  "AWS",
  "Microsoft",
  "Google Cloud",
  "Vercel",
  "Docker",
  "Kubernetes",
  "Stripe",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "Figma",
  "GitHub",
];

export const certifications = [
  "Clutch",
  "Trustpilot",
  "ISO 27001",
  "AWS Partner",
  "DesignFirms",
];

export const industries = [
  "Real Estate",
  "Travel & Hospitality",
  "Oil, Gas & Energy",
  "Banking & Fintech",
  "Healthcare",
  "Edtech",
  "Startups",
];
