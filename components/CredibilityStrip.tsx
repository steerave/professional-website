"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { target: "20+", numeric: 20, suffix: "+", label: "Years of Experience" },
  { target: "30+", numeric: 30, suffix: "+", label: "Programs Launched" },
  { target: "Millions", numeric: null, suffix: "", label: "Users Impacted" },
];

function useCountUp(target: number | null, targetText: string, active: boolean) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!active) return;

    if (target === null) {
      const words = ["Thousands", "Hundreds of Thousands", "Millions"];
      let i = 0;
      const interval = setInterval(() => {
        setDisplay(words[i]);
        i++;
        if (i >= words.length) clearInterval(interval);
      }, 300);
      return () => clearInterval(interval);
    }

    const duration = 1200;
    const start = performance.now();
    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target!);
      setDisplay(current + (target === current ? targetText.replace(String(target), "") : ""));
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplay(targetText);
    }
    requestAnimationFrame(tick);
  }, [active, target, targetText]);

  return display;
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
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      aria-label="Key achievements"
      className="border-y border-[rgba(74,111,165,0.15)] bg-surface"
    >
      <div
        ref={ref}
        className="mx-auto flex max-w-content flex-col items-center gap-8 px-6 py-16 md:flex-row md:gap-0 md:px-10 lg:px-20"
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex-1 text-center md:px-8 ${
              i < stats.length - 1 ? "md:border-r md:border-border" : ""
            }`}
          >
            <StatNumber stat={stat} active={active} />
            <div className="mt-2 text-sm text-text-muted">{stat.label}</div>
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
  const display = useCountUp(stat.numeric, stat.target, active);
  return (
    <div className="text-[52px] font-bold leading-none text-accent-light">
      {display}
    </div>
  );
}
