
import { siteConfig } from "@/config/site.config";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export function TopBar() {
  return (
    <div className="hidden border-b border-dark-border bg-slate-800 text-sm text-white/70 lg:block">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <CiMail  className="hover:text-white cursor-pointer"/>
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition-colors hover:text-white"
          >
            {siteConfig.email}
          </a>
          <span className="text-white/30">|</span>
          <span>{siteConfig.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaWhatsapp className="hover:text-white cursor-pointer"/>
        <a
          href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
          className="transition-colors hover:text-white"
        >
            
          {siteConfig.phone}
        </a>
        </div>
      </div>
    </div>
  );
}
