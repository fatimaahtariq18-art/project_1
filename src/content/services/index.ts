import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "ai-ml-development",
    title: "AI & ML Development",
    shortDescription:
      "Unlock the power of artificial intelligence and machine learning to automate processes, gain insights, and drive innovation.",
    description:
      "We build intelligent systems that automate workflows, extract insights from data, and integrate AI capabilities into your existing products — from LLM-powered assistants to custom ML pipelines.",
    features: [
      "Custom AI model development and fine-tuning",
      "LLM integration and RAG pipelines",
      "Process automation and intelligent workflows",
      "Data engineering and ML ops",
    ],
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    shortDescription:
      "Upgrade your outdated systems with modern digital tools that cut busywork, smooth out operations, and accelerate your growth.",
    description:
      "We help organizations upgrade outdated systems, automate workflows, and adopt modern technology stacks. Our approach reduces operational friction and accelerates growth.",
    features: [
      "Legacy system assessment and migration",
      "Process automation and workflow optimization",
      "Cloud infrastructure and DevOps setup",
      "Change management and team enablement",
    ],
  },
  {
    slug: "product-design",
    title: "Product Design",
    shortDescription:
      "We design UI/UX products that put your customer first. We take your most complex ideas into beautiful, easy-to-use experiences that users love.",
    description:
      "Our design team creates beautiful, conversion-focused interfaces backed by research and usability testing. We translate your vision into products users love.",
    features: [
      "User research and journey mapping",
      "Wireframing and interactive prototypes",
      "Design systems and component libraries",
      "Usability testing and iteration",
    ],
  },
  {
    slug: "quality-assurance",
    title: "Quality Assurance",
    shortDescription:
      "Ensure flawless performance with our advanced software QA testing protocols. We deliver secure, reliable, and fully optimized software.",
    description:
      "Our QA engineers deliver comprehensive testing across functional, performance, and security dimensions — so your product ships with confidence.",
    features: [
      "Manual and automated test coverage",
      "Performance and load testing",
      "Security and regression testing",
      "CI/CD pipeline integration",
    ],
  },
  {
    slug: "devops",
    title: "DevOps",
    shortDescription:
      "Streamline your development cycle with DevOps services, automated CI/CD pipelines and secure cloud infrastructure, ensuring faster deployments.",
    description:
      "We streamline your development lifecycle with infrastructure as code, containerization, and monitoring — enabling your team to ship faster and more reliably.",
    features: [
      "CI/CD pipeline design and implementation",
      "Cloud infrastructure on AWS, Azure, or GCP",
      "Container orchestration with Docker and Kubernetes",
      "Monitoring, alerting, and incident response",
    ],
  },
  {
    slug: "staff-augmentation",
    title: "Staff Augmentation",
    shortDescription:
      "Scale your team with vetted developers, designers, and AI experts—ready to plug in, deliver results, and adapt to your workflow.",
    description:
      "Extend your in-house team with senior developers, designers, and QA engineers. Our augmentation model gives you flexibility, specialized skills, and faster delivery without long-term hiring overhead.",
    features: [
      "Vetted senior engineers and designers",
      "Flexible short-term and long-term engagements",
      "Direct integration with your tools and processes",
      "Transparent communication and reporting",
    ],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortDescription:
      "End-to-end product engineering built for scale, performance, and long-term maintainability.",
    description:
      "We design and build custom software solutions tailored to your business goals — from MVPs to enterprise platforms.",
    features: [
      "Product discovery and technical planning",
      "Scalable architecture and clean development",
      "API design and third-party integrations",
      "Continuous delivery and optimization",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}
