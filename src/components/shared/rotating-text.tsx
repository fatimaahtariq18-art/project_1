"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type RotatingTextProps = {
  items: string[];
  interval?: number;
};

export function RotatingText({ items, interval = 2500 }: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval]);

  return (
    <span className="relative inline-flex h-[1.2em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={items[index]}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block text-accent"
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
