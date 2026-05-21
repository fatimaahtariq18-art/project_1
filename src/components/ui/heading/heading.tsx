import { cn } from "@/lib/utils";

type HeadingProps = React.ComponentProps<"div"> & {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function Heading({
  className,
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  ...props
}: HeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
      {...props}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-sm font-semibold uppercase tracking-wider",
            dark ? "text-accent-foreground/80" : "text-accent",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl",
          dark ? "text-primary-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            dark ? "text-primary-foreground/80" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
