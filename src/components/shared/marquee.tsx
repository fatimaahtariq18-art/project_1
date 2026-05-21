"use client";

import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  duration?: number;
  pauseOnHover?: boolean;
};

export function Marquee({
  children,
  className,
  reverse = false,
  duration = 40,
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-max gap-8",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
