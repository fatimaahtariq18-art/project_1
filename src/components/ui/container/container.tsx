import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentProps<"div"> & {
  size?: "default" | "narrow" | "wide";
};

const sizes = {
  default: "max-w-7xl",
  narrow: "max-w-3xl",
  wide: "max-w-[90rem]",
};

export function Container({
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizes[size], className)}
      {...props}
    />
  );
}
