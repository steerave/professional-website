"use client";

import { useEffect, useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function CTA() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".cta-glow").forEach((g) =>
            g.classList.add("opacity-100")
          );
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="connect"
      aria-label="Connect"
      ref={glowRef}
      className="relative overflow-hidden border-t border-[rgba(74,111,165,0.15)] bg-surface"
    >
      {/* Glows */}
      <div className="cta-glow pointer-events-none absolute -bottom-[120px] left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(74,111,165,0.2)_0%,transparent_60%)] opacity-0 blur-[60px] transition-opacity duration-1000" />
      <div className="cta-glow pointer-events-none absolute -bottom-[60px] left-[30%] h-[300px] w-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(90,138,191,0.1)_0%,transparent_60%)] opacity-0 blur-[50px] transition-opacity delay-200 duration-1000" />

      <div className="relative z-10 mx-auto max-w-content px-6 py-20 text-center md:px-10 lg:px-20 lg:py-[120px]">
        <ScrollReveal>
          <p className="text-[13px] font-semibold uppercase tracking-[1.5px] text-accent-light">
            Connect
          </p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="mb-6 mt-4 text-4xl font-bold text-text-primary">
            Let&apos;s Connect
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="mb-10 text-[17px] text-text-body">
            Open to opportunities and conversations around digital leadership, AI-driven execution, and product operations.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/sarun-teeravechyan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-accent px-7 py-3.5 text-[15px] text-white shadow-[0_0_20px_rgba(74,111,165,0.2)] transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(74,111,165,0.35)]"
            >
              LinkedIn
            </a>
            <a
              href="mailto:steerave@gmail.com"
              className="inline-block rounded-md border border-[rgba(74,111,165,0.4)] bg-transparent px-7 py-3.5 text-[15px] text-accent-light transition-all hover:border-accent-light hover:bg-[rgba(74,111,165,0.1)] hover:text-white"
            >
              Email
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
