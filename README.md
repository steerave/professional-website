# Sarun (Joe) Teeravechyan — Portfolio Site

<img width="1541" height="1145" alt="{C3CB2EDF-6ED2-4D50-AAC1-4D97E8541EBA}" src="https://github.com/user-attachments/assets/06339fec-eca6-46a4-bf18-adb569945b90" />

**Live site: [joet.build](https://www.joet.build)**

Personal portfolio website for a senior digital leader and AI systems builder. Showcases de-identified case studies, AI projects, and professional background.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript (strict)
- Tailwind CSS v4 (`@theme` CSS-first config)
- Inter Tight + Inter via `next/font/google`
- Deployed on Vercel

## Features

- Quiet executive dark theme (`#0B0B0F` bg, `#5B8FD4` accent), all text tokens verified ≥4.5:1 contrast
- Hero: availability pill, large headline with single accent span, "Download CV" CTA above the fold
- Selected Work as a fast-skim list on the home page; each case study has its own `/work/[slug]` page
- AI Projects cards link directly to GitHub repos
- Per-page metadata and Open Graph tags on case study detail pages
- Scroll-triggered fade animations via IntersectionObserver, all respect `prefers-reduced-motion`
- WCAG 2.1 AA: contrast, focus rings, skip-to-content, reduced motion
- Fully responsive — mobile, tablet, desktop

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx              — Root layout, fonts, metadata, skip-to-content
  page.tsx                — Home: Hero, Credibility, Selected Work list, AI Projects, About, CTA
  globals.css             — Tailwind @theme tokens, animations, utilities
  work/[slug]/page.tsx    — Per-case-study detail pages
components/
  Nav.tsx                 — Sticky nav with wordmark + CV button
  Hero.tsx                — Availability pill, headline, CTAs
  CredibilityStrip.tsx    — Static stats (20+ / 30+ / 10M+)
  CaseStudyListItem.tsx   — Home page row (kicker · title · summary · arrow)
  CaseStudyDetail.tsx     — Detail-page full read (Challenge / What I Did / Impact / Insight)
  AIProjects.tsx          — 3-up project cards linking to GitHub
  About.tsx               — Two-column About section
  CTA.tsx                 — Connect: LinkedIn / Email / Download CV
  Footer.tsx              — Real links + copyright
  ScrollReveal.tsx        — Reusable IntersectionObserver wrapper
lib/
  case-studies.ts         — Single source of truth for case study data + slugs
public/
  casestudy-1.webp / casestudy-2.webp / casestudy-3.webp
  Joe_Teeravechyan_Resume.pdf  — Resume PDF (linked from nav, hero, CTA)
docs/
  superpowers/specs/      — Design specs
  superpowers/plans/      — Implementation plans
```

## Deployment

Deployed automatically via Vercel on push to `main`.

## Versions

| Tag | Date | Description |
|---|---|---|
| `v3.0.1` | 2026-04-30 | Copy honesty pass (AI framed as adoption/study), favicon registration fix, LCP priority, touch-target AAA |
| `v3.0` | 2026-04-30 | Quiet executive — Inter Tight + Inter, list/detail case studies, contrast pass |
| `v2.0` | 2026-04-10 | Executive Blue — Anybody + DM Mono, grid hero, WCAG attempt |
| `v1.0` | 2026-04-04 | Initial launch — blue-tinted dark theme, Inter/Geist fonts |
