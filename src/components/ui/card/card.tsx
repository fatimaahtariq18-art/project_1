import { cn } from "@/lib/utils";

type CardProps = React.ComponentProps<"div"> & {
  hover?: boolean;
};

export function Card({ className, hover = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-background p-6 shadow-sm",
        hover && "transition-shadow hover:shadow-md",
        className,
      )}
      {...props}
    />
  );
}
