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
      className="relative overflow-hidden border-t border-border bg-surface"
    >
      {/* Amber glow — fades in when section enters view */}
      <div
        className="cta-glow pointer-events-none absolute opacity-0 transition-opacity duration-[1200ms]"
        style={{
          bottom: "-140px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "420px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(255,159,47,0.14) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="cta-glow pointer-events-none absolute opacity-0 transition-opacity delay-300 duration-[1200ms]"
        style={{
          bottom: "-70px",
          left: "28%",
          width: "340px",
          height: "260px",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(255,159,47,0.07) 0%, transparent 60%)",
          filter: "blur(50px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-content px-6 py-20 text-center md:px-10 lg:px-20 lg:py-[120px]">
        <ScrollReveal>
          <p
            className="font-mono text-accent"
            style={{ fontSize: "10px", letterSpacing: "3px" }}
          >
            CONNECT
          </p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2
            className="mb-6 mt-4 uppercase leading-none text-text-primary"
            style={{
              fontFamily: "var(--font-anybody)",
              fontWeight: 900,
              fontSize: "clamp(28px, 4.5vw, 48px)",
              letterSpacing: "-1px",
            }}
          >
            Let&apos;s Connect
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p
            className="mb-10 text-text-body"
            style={{
              fontFamily: "var(--font-anybody)",
              fontWeight: 300,
              fontSize: "17px",
              lineHeight: 1.7,
            }}
          >
            Open to opportunities and conversations around digital leadership,
            AI-driven execution, and product operations.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://www.linkedin.com/in/sarun-teeravechyan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-sm bg-accent font-sans font-bold text-black transition-opacity hover:opacity-90 active:scale-[0.98]"
              style={{
                fontSize: "11px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                padding: "13px 28px",
                textDecoration: "none",
              }}
            >
              LinkedIn
            </a>
            <a
              href="mailto:steerave@gmail.com"
              className="inline-block rounded-sm border border-elevated font-sans font-light transition-colors hover:border-[#333] hover:text-text-body active:scale-[0.98]"
              style={{
                fontSize: "11px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                padding: "13px 28px",
                color: "#444",
                textDecoration: "none",
              }}
            >
              Email
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
