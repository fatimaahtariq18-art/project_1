import { PageHeader } from "@/components/layout";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site.config";
import { teamMembers } from "@/content/team";
import { createPageMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "About",
  description: `Learn about ${siteConfig.name} — ${siteConfig.tagline}`,
  path: ROUTES.about,
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Technaz"
        description="We are a high-end software engineering firm dedicated to helping businesses scale through elite remote development teams."
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-muted">
          <p>
            {siteConfig.name} partners with startups, small businesses, and
            enterprises to design, build, and scale digital products. Our teams
            integrate seamlessly with your workflow to deliver results faster
            without compromising quality.
          </p>
          <p>
            From custom software development to staff augmentation and digital
            transformation, we bring the expertise and flexibility you need to
            move from idea to impact.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {teamMembers.map((member) => (
            <Card key={member.name}>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="mt-1 text-sm text-accent">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {member.bio}
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
