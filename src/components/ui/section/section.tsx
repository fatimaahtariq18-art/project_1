import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

type SectionProps = React.ComponentProps<"section"> & {
  containerSize?: "default" | "narrow" | "wide";
  background?: "default" | "muted" | "dark";
};

const backgrounds = {
  default: "bg-background",
  muted: "bg-surface",
  dark: "bg-primary text-primary-foreground",
};

export function Section({
  className,
  containerSize = "default",
  background = "default",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-16 md:py-24", backgrounds[background], className)}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
