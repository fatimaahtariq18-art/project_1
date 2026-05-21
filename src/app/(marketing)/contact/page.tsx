import { PageHeader } from "@/components/layout";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/config/site.config";
import { createPageMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/constants";

export const metadata = createPageMetadata({
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} to discuss your project.`,
  path: ROUTES.contact,
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Tell us about your project and we'll get back to you within 1–2 business days."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <p className="mt-4 text-muted leading-relaxed">
              Ready to scale your product vision? Book a free consultation and
              let&apos;s explore how Technaz can help.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <p>
                <span className="font-medium">Email:</span> {siteConfig.email}
              </p>
              <p>
                <span className="font-medium">Phone:</span> {siteConfig.phone}
              </p>
              <p>
                <span className="font-medium">Location:</span>{" "}
                {siteConfig.address}
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
