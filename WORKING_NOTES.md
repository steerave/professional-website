# WORKING_NOTES.md — Sarun (Joe) Teeravechyan Portfolio Site

## Current Status
> **v3.0 built locally (2026-04-30)** — pending deploy and PDF upload.
> Previous: v2.0 deployed at [joet.build](https://www.joet.build), tagged `v2.0`.

---

## What's Been Done

### v1.0 (2026-04-04)
- Full site structure, copy, design system
- 9 sections, scroll animations, count-up, alternating case studies
- Deployed to Vercel; tagged `v1.0`

### v2.0 (2026-04-10)
- Visual redesign: Dark Craft / Executive Blue, Anybody + DM Mono, infinite grid hero
- Mouse-tracking spotlight, restored case study images, third AI project
- Tagged `v2.0`, deployed

### v3.0 (2026-04-30) — Quiet Executive redesign
Triggered by `$impeccable critique` finding multiple anti-pattern violations and WCAG AA failures despite explicit compliance claim.

- **Critique findings addressed:**
  - 5x `border-l-[3px]` side-stripe borders → all removed
  - Two near-identical card grids → cut WhatIDo entirely
  - Em dashes in copy → reduced (a few preserved in case study insight quotes)
  - WCAG failures (`#444`, `#2e2e2e`, `#1e1e1e`, `#666`, `#ffffff`) → token-driven palette, all ≥4.5:1
  - Terminal-style cosplay (`~/portfolio · main ›`, `SJT` monogram, mono labels) → removed
  - Numbered card indices (01/02/03) → removed
  - Mouse-tracking grid hero → replaced with quiet static hero
- **New shape:**
  - Inter Tight (display) + Inter (body); Anybody and DM Mono dropped
  - Selected Work on home is a list; each case study at `/work/[slug]`
  - "Download CV" button in nav, hero, and CTA (links to `/Joe_Teeravechyan_Resume.pdf`)
  - Availability pill with green dot in hero
  - Real footer links (LinkedIn, GitHub, Email)
- **Files added:** `lib/case-studies.ts`, `components/CaseStudyListItem.tsx`, `components/CaseStudyDetail.tsx`, `app/work/[slug]/page.tsx`, `mockups/01-editorial.html`, `mockups/02-boardroom.html`, `mockups/03-quiet-executive.html`, `mockups/index.html`
- **Files removed:** `components/WhatIDo.tsx`, `components/CaseStudy.tsx`
- Build passes (`npx next build`); 4 routes statically generated

---

## Key Decisions Log

| Decision | Rationale |
|---|---|
| v3 register: quiet executive (mockup C) | Closest to current dark palette; killed dev cosplay; smallest distance with biggest credibility lift |
| Font system: Inter Tight + Inter (strict, no Anybody) | User chose option 2A; prioritizes seriousness over distinctive signature |
| Case study layout: list + detail pages (not inline) | User chose option 1B; faster skim, more polished, supports per-study SEO |
| Cut WhatIDo entirely | Platitude cards repeat hero + About content; added no signal |
| Cut narrative summary block + "How This Site Was Built" | Restated themes case studies already prove |
| Background `#0B0B0F` (not pure `#080808`) | Per impeccable rule: tint every neutral toward brand hue; never use `#000`/`#fff` |
| `text-primary` `#ECECF0` (not `#ffffff`) | Same rule — no pure white |
| CV button links to `/Joe_Teeravechyan_Resume.pdf` | Filename matches the file the user wants downloaded; button labels stay "Curriculum Vitae" / "Download CV" for executive register |
| Static stats (no count-up) | Animation read as SaaS-y and shaved no perceived value |
| Removed all hardcoded hex literals from components | Now flow exclusively from `@theme` tokens |
| Cut nav `Connect` link | Footer now has the real connect links; nav is Work / AI / About / CV |
| Cut DM Mono entirely | Mono read as terminal/dev cosplay, wrong audience signal |

| Cut from v2 | Why |
|---|---|
| Mouse-tracking spotlight grid | "AI portfolio" template tell |
| Section-glow gradient dividers | Decorative, low signal |
| Count-up scroll-triggered animation | Reads SaaS-y, no real value |
| `border-l-[3px]` side stripes (5x) | Impeccable absolute ban |
| Hero terminal breadcrumb | Dev cosplay; wrong audience |
| `01 / 02 / 03` card indices | Template fingerprint |
| Mono section eyebrows | Terminal aesthetic |
| Hero ambient glow | Decorative |
| CTA radial intersection glow | Decorative |

---

## Open Questions / TODO

- [ ] OG image — current one reflects v1 design; update to v3 hero screenshot after first prod render.
- [ ] Decide whether AI Projects deserves longer-form pages too (mirror `/work/[slug]` pattern at `/projects/[slug]`).
- [ ] Reference image at `assets/personal_website_playbook.md` line items not yet validated against v3.
- [ ] Smoke-test all routes on real mobile device.
- [x] ~~Upload resume PDF~~ — `Joe_Teeravechyan_Resume.pdf` in `public/` (2026-04-30).
- [x] ~~Headshot~~ — declined; no good photo available, leaving site faceless for now.

---

## Next Steps (Post v3.0.1)

1. Visual smoke test on phone + real-device browsers (still TODO — only desktop curl-verified).
2. Update OG image after first prod render (still TODO).
3. Re-run `$impeccable critique` if/when site changes meaningfully.
4. Add `priority` to AIProjects-style pattern if expanding to longer-form project pages later.

## v3.0.1 — 2026-04-30 (released)

Released same day as v3.0 to fold in copy honesty + audit fixes:
- Copy: removed AI overclaim across hero, about, AI projects subtitle, CTA, page metadata; AI now framed as adoption/organizational study, not applied work
- Favicon: renamed `app/favicon.svg` → `app/icon.svg` so Next.js auto-detection finally injects `<link rel="icon">`. Previously 404'd silently across v1/v2/v3.
- Perf: `priority` + `sizes` on case study detail hero `Image` (LCP element no longer lazy)
- A11y: `min-h-[44px]` on all primary CTAs (WCAG 2.2 AAA), `min-h-[40px]` on nav CV button (compact AA)
- Theming: new `--color-on-accent` token replaces last two `text-[#0B1220]` hex literals
- Audit projection: 17/20 → 20/20

---

## Session Log

### Session 1 — Project Setup
Defined structure, copy, design decisions; created CLAUDE.md, DESIGN_SYSTEM.md, WORKING_NOTES.md.

### Session 2 — v1.0 Build (2026-04-03/04)
Built all 9 sections; deployed; tagged `v1.0`.

### Session 3 — v2.0 Redesign (2026-04-10)
Brainstormed v2 direction; wrote spec + plan in `docs/superpowers/`; implemented Dark Craft / Executive Blue; deployed; tagged `v2.0`.

### Session 4 — v3.0 Redesign (2026-04-30)
Ran `$impeccable critique` against v2; surfaced multiple AI-portfolio anti-patterns and WCAG failures. Built three tonal probes (`mockups/01-editorial.html`, `02-boardroom.html`, `03-quiet-executive.html`); user picked C (quiet executive) and 2A (Inter Tight + Inter). Refactored case studies to list + detail pattern; recolored entire palette per contrast and "no pure black/white" rule; removed all dev-cosplay elements; build passes.
