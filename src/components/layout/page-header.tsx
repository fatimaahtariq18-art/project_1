import { Container } from "@/components/ui/container";

type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-border bg-surface py-16 md:py-20">
      <Container size="narrow">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg text-muted">{description}</p>
        )}
      </Container>
    </div>
  );
}
