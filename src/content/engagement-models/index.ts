import type { EngagementModel } from "@/types";

export const engagementModels: EngagementModel[] = [
  {
    slug: "product-development",
    title: "Product Development",
    subtitle: "End-to-end execution, built for scale",
    description:
      "We collaborate closely with your team to turn ideas into high-impact digital products. From early discovery to continuous improvement, this model ensures speed, quality, and alignment with your business goals.",
    includes: [
      "Product discovery, research, and requirement validation",
      "UX/UI design focused on usability and conversion",
      "Scalable architecture and production-ready development",
      "Continuous testing, optimization, and iteration",
    ],
    bestSuitedFor: [
      "Startups building MVPs or new platforms",
      "Businesses launching new digital products",
      "Companies modernizing or scaling existing solutions",
    ],
  },
  {
    slug: "team-augmentation",
    title: "Team Augmentation",
    subtitle: "Extend your team. Accelerate delivery.",
    description:
      "Scale your capabilities with vetted experts who integrate directly into your workflows. You retain full control while gaining speed, flexibility, and specialized expertise.",
    includes: [
      "Skilled professionals across design, engineering, QA, and DevOps",
      "Flexible engagement (short-term, long-term, or project-based)",
      "Seamless integration with your tools, processes, and culture",
      "Direct communication and transparent collaboration",
    ],
    bestSuitedFor: [
      "Teams needing rapid scale without permanent hires",
      "Projects with fluctuating workload or tight timelines",
      "Companies seeking niche skills or additional delivery power",
    ],
  },
  {
    slug: "consultation",
    title: "Consultation",
    subtitle: "Clarity before commitment",
    description:
      "Our consulting services help you make informed decisions before you invest in development. We assess your current state and build a clear roadmap to hit your goals.",
    includes: [
      "Business and technical assessments",
      "Opportunity and feasibility analysis",
      "Technology and architecture recommendations",
      "Risk evaluation and implementation roadmap",
    ],
    bestSuitedFor: [
      "Organizations planning digital transformation",
      "Teams exploring new technologies or automation",
      "Decision-makers seeking strategic direction and validation",
    ],
  },
];
