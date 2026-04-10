# Sarun (Joe) Teeravechyan — Portfolio Site

<img width="1541" height="1145" alt="{C3CB2EDF-6ED2-4D50-AAC1-4D97E8541EBA}" src="https://github.com/user-attachments/assets/06339fec-eca6-46a4-bf18-adb569945b90" />

**Live site: [joet.build](https://www.joet.build)**

Personal portfolio website for a senior digital leader and AI systems builder. Showcases de-identified case studies, AI projects, and professional background.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript (strict)
- Tailwind CSS v4 (`@theme` CSS-first config)
- Anybody + DM Mono via `next/font/google`
- Deployed on Vercel

## Features

- Executive blue dark theme (`#080808` bg, `#5b8fd4` accent)
- Infinite grid hero with interactive mouse spotlight
- Scroll-triggered animations (fade, slide, scale) via IntersectionObserver
- Count-up credibility stats with scroll-triggered activation
- Alternating case study layouts with `next/image`
- Fully responsive — mobile, tablet, desktop
- WCAG 2.1 AA: contrast ratios, focus rings, skip link, reduced motion support
- SEO metadata and Open Graph tags

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx       — Root layout, fonts, metadata, skip-to-content
  page.tsx         — Home page, assembles all sections
  globals.css      — Tailwind @theme tokens, animations, utilities
components/
  Nav.tsx
  Hero.tsx
  CredibilityStrip.tsx
  WhatIDo.tsx
  CaseStudy.tsx
  AIProjects.tsx
  About.tsx
  CTA.tsx
  Footer.tsx
  ScrollReveal.tsx
public/
  casestudy-1.webp / casestudy-2.webp / casestudy-3.webp
docs/
  superpowers/specs/   — Design specs
  superpowers/plans/   — Implementation plans
```

## Deployment

Deployed automatically via Vercel on push to `main`.

## Versions

| Tag | Date | Description |
|---|---|---|
| `v2.0` | 2026-04-10 | Full redesign — Executive Blue, Anybody fonts, grid hero, WCAG |
| `v1.0` | 2026-04-04 | Initial launch — blue-tinted dark theme, Inter/Geist fonts |
