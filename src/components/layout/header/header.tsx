"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { mainNavigation } from "@/content/navigation";
import { siteConfig } from "@/config/site.config";
import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { NavItem } from "@/types";

function NavDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  if (!item.children?.length) {
    return (
      <Link
        href={item.href}
        className="text-sm font-medium text-white/80 transition-colors hover:text-white"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="flex items-center gap-1 text-sm font-medium text-white/80 transition-colors hover:text-white"
      >
        {item.label}
        <svg
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={cn(
          "absolute left-1/2 top-full z-50 mt-3 w-64 -translate-x-1/2 rounded-xl border border-dark-border bg-dark-surface p-2 shadow-2xl transition-all duration-200",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0",
        )}
      >
        {item.children.map((child) => (
          <Link
            key={child.href + child.label}
            href={child.href}
            className="block rounded-lg px-4 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full border-b border-dark-border bg-dark-surface p-4 shadow-2xl">
          <nav className="flex flex-col gap-1">
            {mainNavigation.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white hover:bg-white/5"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 border-l border-dark-border pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href + child.label}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block px-3 py-2 text-sm text-white/60 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button href={ROUTES.contact} size="sm" className="mt-3 w-full">
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-dark-border bg-dark/95 shadow-lg backdrop-blur-md"
          : "bg-dark",
      )}
    >
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <Link
          href={ROUTES.home}
          className="text-xl font-bold tracking-tight text-white lg:text-2xl"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {mainNavigation.map((item) => (
            <NavDropdown key={item.label} item={item} />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href={ROUTES.contact} size="sm" className="hidden sm:inline-flex">
            Contact Us
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
