export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
};

export type EngagementModel = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  includes: string[];
  bestSuitedFor: string[];
};

export type BusinessSegment = {
  title: string;
  description: string;
};

export type TechCategory = {
  id: string;
  label: string;
};

export type TechItem = {
  name: string;
  category: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};
