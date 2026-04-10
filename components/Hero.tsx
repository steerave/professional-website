"use client";

import { useCallback } from "react";

export default function Hero() {
  // Track mouse position and write to CSS custom properties.
  // The .hero-grid-spotlight layer uses these to position its radial mask.
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty(
        "--mouse-x",
        `${e.clientX - rect.left}px`
      );
      e.currentTarget.style.setProperty(
        "--mouse-y",
        `${e.clientY - rect.top}px`
      );
    },
    []
  );

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-bg"
      onMouseMove={handleMouseMove}
    >
      {/* ── Grid layer 1: base — faint amber, always scrolling ───────────── */}
      <div
        aria-hidden="true"
        className="hero-grid-base pointer-events-none absolute inset-0"
      />

      {/* ── Grid layer 2: spotlight — brighter, reveals at cursor ─────────── */}
      <div
        aria-hidden="true"
        className="hero-grid-spotlight pointer-events-none absolute inset-0"
      />

      {/* ── Ambient glow — top-right corner, single amber bloom ───────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          top: "-100px",
          right: "-80px",
          width: "560px",
          height: "560px",
          background:
            "radial-gradient(circle, rgba(255,159,47,0.09) 0%, transparent 65%)",
        }}
      />

      {/* ── Ghost surname — bottom-anchored, behind all content ───────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute select-none whitespace-nowrap"
        style={{
          bottom: "-8px",
          left: "-6px",
          fontFamily: "var(--font-anybody)",
          fontWeight: 900,
          fontSize: "clamp(72px, 13vw, 136px)",
          color: "rgba(255,255,255,0.022)",
          lineHeight: 1,
          letterSpacing: "-4px",
          textTransform: "uppercase",
        }}
      >
        TEERAVECHYAN
      </div>

      {/* ── Hero content ─────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-content px-6 py-[120px] md:px-10 lg:px-20">

        {/* Breadcrumb */}
        <div
          className="hero-animate-1 mb-7 flex items-center gap-[6px] font-mono"
          style={{ fontSize: "10px", letterSpacing: "2px" }}
        >
          <span style={{ color: "#ff9f2f" }}>~/</span>
          <span style={{ color: "#2e2e2e" }}>portfolio</span>
          <span style={{ color: "#1e1e1e" }}>·</span>
          <span style={{ color: "#243824" }}>main</span>
          <span style={{ color: "#ff9f2f" }}>›</span>
        </div>

        {/* Name */}
        <h1
          className="hero-animate-2 uppercase leading-[0.96]"
          style={{
            fontFamily: "var(--font-anybody)",
            fontWeight: 900,
            fontSize: "clamp(44px, 7.5vw, 78px)",
            letterSpacing: "-2px",
            color: "#ffffff",
          }}
        >
          SARUN
          <br />
          <span style={{ color: "#ff9f2f" }}>TEERAVECHYAN</span>
        </h1>

        {/* Tagline */}
        <p
          className="hero-animate-3 mt-7"
          style={{
            fontFamily: "var(--font-anybody)",
            fontWeight: 300,
            fontSize: "16px",
            color: "#5a5a5a",
            lineHeight: 1.75,
            maxWidth: "460px",
          }}
        >
          Senior digital leader delivering complex, high-visibility programs
          across North America — now focused on applying AI to transform how
          systems are designed, operated, and scaled.
        </p>

        {/* CTAs */}
        <div className="hero-animate-4 mt-10 flex flex-wrap gap-3">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            style={{
              fontFamily: "var(--font-anybody)",
              fontWeight: 700,
              fontSize: "11px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding: "13px 26px",
              background: "#ff9f2f",
              color: "#000",
              textDecoration: "none",
              boxShadow: "0 0 0 0 rgba(255,159,47,0.4)",
            }}
          >
            View Work
          </a>
          <a
            href="#connect"
            className="inline-flex items-center rounded-sm transition-all duration-200 hover:border-[#3a3a3a] hover:text-text-body active:scale-[0.98]"
            style={{
              fontFamily: "var(--font-anybody)",
              fontWeight: 300,
              fontSize: "11px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding: "13px 26px",
              border: "1px solid #242424",
              color: "#444",
              textDecoration: "none",
            }}
          >
            Connect
          </a>
        </div>

        {/* Disclaimer */}
        <p
          className="hero-animate-4 mt-6 font-mono"
          style={{ fontSize: "10px", color: "#2a2a2a", letterSpacing: "1.5px" }}
        >
          DE-IDENTIFIED WORK · DETAILS AVAILABLE UPON REQUEST
        </p>
      </div>
    </section>
  );
}
