import type { NavItem } from "@/types";
import { ROUTES } from "@/lib/constants";
import { LuFileCode2, LuSettings2 } from "react-icons/lu";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { GoWorkflow } from "react-icons/go";
import { FaGraduationCap, FaPlane, FaUsers} from "react-icons/fa6";
import { GiIncomingRocket } from "react-icons/gi";
import { TbHeartPlus } from "react-icons/tb";
import { BiSolidLandmark } from "react-icons/bi";
import { RiBuilding2Fill } from "react-icons/ri";

import { FaBoxOpen, FaInfoCircle, FaPhoneAlt, FaUsersCog } from "react-icons/fa";

export const mainNavigation: NavItem[] = [
  {
    label: "Capabilities",
    href: ROUTES.services,
    icon:LuFileCode2,
    children: [
      { label: "Custom Software Development", href: ROUTES.service("custom-software-development") ,icon:LuFileCode2 },
      { label: "Staff Augmentation", href: ROUTES.service("staff-augmentation"),icon:FaUsersCog },
      { label: "Digital Transformation", href: ROUTES.service("digital-transformation"), icon:GoWorkflow },
      { label: "Product Design", href: ROUTES.service("product-design"), icon:SlEnvolopeLetter },
      { label: "Quality Assurance", href: ROUTES.service("quality-assurance"), icon:IoShieldCheckmarkOutline },
      { label: "DevOps", href: ROUTES.service("devops"), icon:LuSettings2 },
    ],
  },
  {
    label: "Industries",
    href: "#industries",
    icon:LuFileCode2,
    children: [
      { label: "Real Estate", href: "#industries" ,icon:RiBuilding2Fill },
      { label: "Travel & Hospitality", href: "#industries" ,icon:FaPlane },
      { label: "Banking & Fintech", href: "#industries" ,icon:BiSolidLandmark },
      { label: "Healthcare", href: "#industries" ,icon:TbHeartPlus },
      { label: "Edtech", href: "#industries" ,icon:FaGraduationCap },
      { label: "Startups", href: "#industries" ,icon:GiIncomingRocket },
    ],
  },
  {
    label: "Company",
    href: ROUTES.about,
    icon:FaUsersCog,
    children: [
      { label: "About Us", href: ROUTES.about  ,icon:FaInfoCircle },
      { label: "Contact", href: ROUTES.contact ,icon:FaPhoneAlt },
      { label: "Product", href: ROUTES.product ,icon:FaBoxOpen },
    ],
  },
  {
    label: "Engagement Models",
    href: "#engagement-models",
    icon:FaUsersCog,
    children: [
      { label: "Product Development", href: "#engagement-models", icon:RiBuilding2Fill },
      { label: "Team Augmentation", href: "#engagement-models", icon:FaUsers },
      { label: "Consultation", href: "#engagement-models", icon:FaBoxOpen },
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
