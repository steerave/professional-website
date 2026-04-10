"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { numeric: 20, suffix: "+",  line1: "Years Leading",    line2: "Digital Execution"   },
  { numeric: 30, suffix: "+",  line1: "National-Scale",   line2: "Programs Delivered"  },
  { numeric: 10, suffix: "M+", line1: "Users Supported",  line2: "in Live Systems"     },
];

function useCountUp(target: number, active: boolean) {
  const [current, setCurrent] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!active || hasRun.current) return;
    hasRun.current = true;

    const duration = 1400;
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [active, target]);

  return current;
}

export default function CredibilityStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section aria-label="Key achievements" className="border-y border-border">
      <div
        ref={ref}
        className="mx-auto flex max-w-content flex-col items-center gap-12 px-6 py-16 md:flex-row md:gap-0 md:px-10 lg:px-20"
      >
        {stats.map((stat, i) => (
          <div
            key={stat.line1}
            className={`flex-1 text-center ${
              i < stats.length - 1 ? "md:border-r md:border-border" : ""
            }`}
          >
            <StatNumber stat={stat} active={active} />
          </div>
        ))}
      </div>
    </section>
  );
}

function StatNumber({
  stat,
  active,
}: {
  stat: (typeof stats)[number];
  active: boolean;
}) {
  const count = useCountUp(stat.numeric, active);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-baseline">
        <span
          className="font-mono font-medium leading-none text-accent"
          style={{ fontSize: "clamp(40px, 5vw, 52px)" }}
        >
          {count}
        </span>
        <span
          className="ml-1 font-mono font-medium leading-none text-accent"
          style={{ fontSize: "clamp(20px, 2.5vw, 26px)" }}
        >
          {stat.suffix}
        </span>
      </div>
      <div className="flex flex-col items-center gap-[2px]">
        <span
          className="font-sans uppercase text-text-muted"
          style={{ fontSize: "11px", letterSpacing: "2px", fontWeight: 300 }}
        >
          {stat.line1}
        </span>
        <span
          className="font-sans uppercase text-text-muted"
          style={{ fontSize: "11px", letterSpacing: "2px", fontWeight: 300 }}
        >
          {stat.line2}
        </span>
      </div>
    </div>
  );
}
