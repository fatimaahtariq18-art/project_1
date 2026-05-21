import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
};

const variants = {
  primary: "bg-accent text-accent-foreground hover:bg-accent-hover shadow-lg shadow-accent/25",
  secondary: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline:
    "border border-white/20 bg-transparent text-white hover:bg-white/10",
  ghost: "bg-transparent hover:bg-surface text-foreground",
  white: "bg-white text-primary hover:bg-white/90",
};

const sizes = {
  sm: "h-10 px-5 text-sm",
  md: "h-11 px-7 text-sm",
  lg: "h-14 px-8 text-base",
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
