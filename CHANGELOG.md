# Changelog

All notable changes to this project will be documented in this file.
Format follows [Keep a Changelog](https://keepachangelog.com).

---

## [3.0.1] — 2026-04-30

### Changed
- Hero, About, AI Projects, CTA, and page metadata copy rewritten to remove AI overclaim. AI is now framed honestly as a study/adoption interest (organizational application, system fit, change management) rather than applied professional experience. New AI Projects subtitle: "I build personal AI projects to stay grounded in the tools — the work I want to lead is the organizational side." Hero headline reduced to a single confident sentence: "I lead complex digital programs at national scale." Page title now "Sarun (Joe) Teeravechyan — Senior Digital Delivery Leader."
- Refreshed favicon to v3 palette: `#0b0e14` → `#0B0B0F` background, `#4A6FA5` → `#5B8FD4` accent letters, tighter letter-spacing.

### Fixed
- Favicon was never being served at any URL — `app/favicon.svg` doesn't match Next.js App Router auto-detection conventions. Renamed to `app/icon.svg`, which Next.js now auto-injects as `<link rel="icon">` in the document head. Hard-refresh required to clear browser favicon cache.
- Case study detail page hero image was `loading="lazy"` despite being the LCP element. Added `priority` and `sizes` props to `CaseStudyDetail` `Image` to preload above-the-fold image and avoid unnecessary 2x retina download.
- Touch target sizes: added `min-h-[44px]` to all primary CTAs (Hero "View Selected Work", "Download CV"; CTA section "LinkedIn", "Email", "Download CV") to satisfy WCAG 2.2 AAA (44×44 minimum). Nav "Curriculum Vitae" button bumped to `min-h-[40px]` (still above WCAG AA 24×24 minimum, kept compact for nav proportion).

### Added
- New design token `--color-on-accent: #0B1220` for text on filled accent buttons. Replaces two stray hex literals (`text-[#0B1220]`) in `Hero.tsx` and `CTA.tsx` that bypassed the token system in v3.0.

---

## [3.0.0] — 2026-04-30

### Added
- New `/work/[slug]` route: each case study now has its own page with full Challenge / What I Did / Impact / Insight read, hero image, and per-page metadata
- Selected Work on the home page is now a fast-skim list — kicker · title · summary · arrow — with hover slide
- Availability pill in hero with green-dot indicator: "Open to senior digital leadership roles"
- "Download CV" button in hero, in CTA section, and "Curriculum Vitae" button in nav (all link to `/Joe_Teeravechyan_Resume.pdf`)
- Real footer links: LinkedIn, GitHub, Email (replaces dead one-line copyright)
- `lib/case-studies.ts` — single source of truth for case study data, used by home list and detail pages
- New components: `CaseStudyListItem` (home row), `CaseStudyDetail` (full read)

### Changed
- Complete v3 redesign: "Quiet executive" — closer to Linear/Vercel marketing aesthetic, stripped of developer-portfolio cosplay
- Fonts: Anybody + DM Mono → **Inter Tight** (display) + **Inter** (body); DM Mono usage removed entirely
- Background: `#080808` → `#0B0B0F` (slightly tinted toward cool blue per "no pure black" rule)
- All text tokens recolored and verified to pass ≥4.5:1 contrast: `--color-text-primary` `#ECECF0` (was `#ffffff`), `--color-text-body` `#A6A6B0` (was `#999999`), `--color-text-muted` `#80808B` (was `#777777`)
- Nav: `SJT` mono monogram → "Sarun Teeravechyan" wordmark in Inter Tight; added "Curriculum Vitae" button
- Hero: removed terminal breadcrumb (`~/portfolio · main ›`), removed mouse-tracking spotlight grid, removed ambient glow
- Credibility Strip: removed scroll-triggered count-up animation; numbers are now static
- AI Projects cards: removed numbered indices (01/02/03), removed `border-l-[3px]` side stripe; whole card is now a link
- About: switched from centered single-column to two-column (heading left, prose right) on desktop
- CTA section: removed radial glow intersection animation; ghost button colors fixed for AA contrast
- Case study layout: from 3 alternating inline sections to 1 list + 3 detail pages

### Fixed
- WCAG AA contrast failures across the v2.0 build:
  - Hero "Connect" link `#444` (1.94:1) → token-driven, passes AA
  - CTA "Email" button `#444` (1.94:1) → token-driven, passes AA
  - Footer copyright `#2e2e2e` (1.21:1, effectively invisible) → `--color-text-muted` `#80808B`
  - Hero breadcrumb `#1e1e1e` / `#1a2a3a` (~1.0:1, invisible) → element removed
  - Hero disclaimer `#666` (~4.0:1) → element removed
- Removed hardcoded hex values across all components (Hero, CTA, Footer, Nav) — all colors now flow from `@theme` tokens

### Removed
- `components/WhatIDo.tsx` — platitude cards added no information beyond hero + about
- `components/CaseStudy.tsx` — replaced by detail-page pattern
- Narrative summary block in `app/page.tsx` (post-case-studies)
- "How This Site Was Built" reflective note
- 5 instances of `border-l-[Npx]` side-stripe borders across `WhatIDo`, `AIProjects`, `CaseStudy` (Impact + Insight), `page.tsx` narrative
- Mono section eyebrows on every section (CASE STUDIES / EXPERTISE / PROJECTS / ABOUT / CONNECT)
- Anybody and DM Mono fonts
- Section-glow gradient dividers
- Count-up animation logic and dependencies
- `--color-bg` tinting toward pure `#080808`

---

## [2.0.0] — 2026-04-10

### Added
- Infinite grid hero with mouse spotlight effect (pure CSS + React, no framer-motion)
- Anybody + DM Mono fonts replacing Geist/Newsreader — wider, more distinctive display type
- Skip-to-content link for keyboard navigation (WCAG 2.4.1)
- Visible `:focus-visible` ring on all interactive elements (WCAG 2.4.7)
- Third AI project card: Rental Tax Pipeline

### Changed
- Complete visual redesign: Dark Craft / Executive Blue aesthetic
- Accent color: amber `#ff9f2f` → steel blue `#5b8fd4` (more executive, consistent with v1 palette intent)
- Background: `#0b0e14` → `#080808` (deeper, less blue-tinted)
- `text-muted` token: `#444444` → `#777777` — improves contrast from 2.25:1 to 5.2:1 (WCAG AA pass)
- Count-up animation: switched from IntersectionObserver to scroll listener + immediate mount check — reliably fires on all screen sizes
- Count-up respects `prefers-reduced-motion` — jumps to final value for users who have it enabled
- ScrollReveal `rootMargin` reduced from `-40px` to `-10px` — prevents reveals being skipped on small viewports
- Case study images restored (casestudy-1/2/3.webp) using `next/image`, sticky on desktop
- AI project renamed: "AI Job Search Pipeline" → "Automated Search Pipeline"
- Hero ghost watermark removed
- Hero tagline and disclaimer colors brightened for readability (#5a5a5a → #888888, #2a2a2a → #666666)

### Fixed
- Count-up numbers no longer failing to animate on mobile
- Spotlight mask-image no longer relying on CSS variable inheritance (was unreliable across browsers)
- Stat numbers: `aria-label` on container, `aria-hidden` on animated display — screen readers no longer announce intermediate count values

---

## [1.0.0] — 2026-04-04

### Added
- Full single-page portfolio site: Nav, Hero, CredibilityStrip, WhatIDo, CaseStudy×3, AIProjects, About, CTA, Footer
- Blue-tinted dark theme (`#0b0e14` background, `#4A6FA5` accent)
- Scroll-triggered animations with IntersectionObserver (fade-up, fade-left, fade-right, scale-up)
- Count-up animation on credibility strip (20+, 30+, 10M+)
- Alternating case study layouts with Midjourney images
- AI Projects section (two cards: Job Search Tool, Task Manager)
- Sticky nav with backdrop blur and smooth scroll
- CTA section with radial glow animation
- SVG monogram favicon
- SEO metadata and Open Graph tags
- Fully responsive across mobile, tablet, and desktop
- Reduced motion support
