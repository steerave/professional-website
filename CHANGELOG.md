# Changelog

All notable changes to this project will be documented in this file.
Format follows [Keep a Changelog](https://keepachangelog.com).

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
