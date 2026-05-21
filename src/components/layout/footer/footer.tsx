"use client";

import { useState } from "react";
import Link from "next/link";
import { footerNavigation } from "@/content/navigation";
import { siteConfig } from "@/config/site.config";
import { Button } from "@/components/ui/button";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="text-sm text-white/60 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative overflow-hidden bg-dark text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(242,101,34,0.08),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-2xl font-bold">{siteConfig.name}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {siteConfig.tagline}
            </p>

            <form
              className="mt-8"
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
            >
              <p className="mb-3 text-sm font-medium">Subscribe</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="h-11 flex-1 rounded-full border border-dark-border bg-dark-surface px-4 text-sm text-white placeholder:text-white/40 outline-none focus:border-accent"
                />
                <Button type="submit" size="sm">
                  →
                </Button>
              </div>
            </form>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            <FooterColumn title="Company" links={footerNavigation.company} />
            <FooterColumn title="Services" links={footerNavigation.services} />
            <FooterColumn title="Industries" links={footerNavigation.industries} />
          </div>
        </div>

        <div className="mt-12 border-t border-dark-border pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-white/50">
              <p className="font-medium text-white/70">{siteConfig.address}</p>
              <p className="mt-1">{siteConfig.phone}</p>
            </div>
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} {siteConfig.name}. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
