"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type CarouselProps = {
  children: React.ReactNode[];
  className?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
  showDots?: boolean;
  showArrows?: boolean;
  loop?: boolean;
};

export function Carousel({
  children,
  className,
  autoplay = false,
  autoplayDelay = 5000,
  showDots = false,
  showArrows = false,
  loop = true,
}: CarouselProps) {
  const plugins = autoplay
    ? [Autoplay({ delay: autoplayDelay, stopOnInteraction: false })]
    : [];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop, align: "start" }, plugins);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className={cn("relative", className)}>
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">{children}</div>
      </div>

      {showArrows && (
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
          >
            ←
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
          >
            →
          </button>
        </div>
      )}

      {showDots && scrollSnaps.length > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => scrollTo(index)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                selectedIndex === index
                  ? "w-8 bg-accent"
                  : "w-2.5 bg-border hover:bg-muted-light",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function CarouselSlide({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("min-w-0 shrink-0 grow-0 basis-full", className)}>
      {children}
    </div>
  );
}
