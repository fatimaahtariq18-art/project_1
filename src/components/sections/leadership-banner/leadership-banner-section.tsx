"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared";
import { MdArrowOutward } from "react-icons/md";
type LeadershipMember = {
  name: string;
  role: string;
  initials: string;
};

type LeadershipBannerSectionProps = {
  title: string;
  cta: { label: string; href: string };
  members: LeadershipMember[];
};

export function LeadershipBannerSection({
  title,
  cta,
  members,
}: LeadershipBannerSectionProps) {
  return (
    <section className="relative overflow-hidden bg-dark py-20 text-white md:py-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(242,101,34,0.1),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <Container className="relative">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Technaz
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <div className="mt-8">
            <Button href={cta.href} size="lg">
              {cta.label}
              <MdArrowOutward className="h-7 w-5 transition group-hover:rotate-45 duration-300" />
            </Button>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:mx-auto lg:max-w-2xl">
          {members.map((member) => (
            <StaggerItem key={member.name}>
              <div className="group rounded-2xl border border-dark-border bg-dark-surface p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-accent/30">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/20 text-2xl font-bold text-accent transition-transform duration-500 group-hover:scale-110">
                  {member.initials}
                </div>
                <h3 className="mt-4 text-lg font-bold">{member.name}</h3>
                <p className="mt-1 text-sm text-white/60">{member.role}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
