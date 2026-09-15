"use client";

import { useEffect, useRef, useState } from "react";
import { heroStats } from "@/lib/content";

const DURATION = 1200;

function useCountUp(target: number | undefined, start: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start || target === undefined) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let frame: number;

    if (reduceMotion) {
      frame = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(frame);
    }

    const startTime = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - startTime) / DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * (target as number)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);

  return value;
}

function Stat({
  countTo,
  suffix,
  value,
  label,
  active,
}: (typeof heroStats)[number] & { active: boolean }) {
  const count = useCountUp(countTo, active);

  return (
    <div>
      <p className="font-display text-3xl font-medium text-ink sm:text-4xl">
        {countTo !== undefined ? `${count}${suffix ?? ""}` : value}
      </p>
      <p className="mt-1.5 text-sm text-ink-soft">{label}</p>
    </div>
  );
}

export function StatStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(
    () => typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    if (active) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [active]);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-4"
    >
      {heroStats.map((stat) => (
        <Stat key={stat.label} {...stat} active={active} />
      ))}
    </div>
  );
}
