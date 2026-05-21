import { siteConfig } from "@/config/site.config";

export function TopBar() {
  return (
    <div className="hidden border-b border-dark-border bg-dark text-sm text-white/70 lg:block">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition-colors hover:text-white"
          >
            {siteConfig.email}
          </a>
          <span className="text-white/30">|</span>
          <span>{siteConfig.location}</span>
        </div>
        <a
          href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
          className="transition-colors hover:text-white"
        >
          {siteConfig.phone}
        </a>
      </div>
    </div>
  );
}
