# WORKING_NOTES.md — Sarun (Joe) Teeravechyan Portfolio Site

## Current Status
> **v2.0 deployed to production (2026-04-10)**
> Live at [joet.build](https://www.joet.build) — main branch, tagged `v2.0`.

---

## What's Been Done

### v1.0 (2026-04-04)
- Defined full site structure and section order
- Finalized all copy in `personal_website_copy.md`
- Created design system in `DESIGN_SYSTEM.md`
- Built all 9 sections with scroll animations, count-up, alternating case study layouts
- Deployed to Vercel at joet.build
- Tagged `v1.0` on main

### v2.0 (2026-04-10)
- Full visual redesign: Dark Craft / Executive Blue aesthetic
- New fonts: Anybody (display + body) + DM Mono (labels/code)
- Infinite grid hero with mouse spotlight (pure CSS + React, no new dependencies)
- Accent color: amber → steel blue `#5b8fd4`
- Case study images restored (casestudy-1/2/3.webp) with `next/image`
- Third AI project added: Rental Tax Pipeline
- Count-up animation fixed — scroll listener replaces unreliable IntersectionObserver
- WCAG improvements: contrast, focus rings, aria labels, skip link
- Tagged `v2.0` on main, pushed to GitHub

---

## Key Decisions Log

| Decision | Rationale |
|---|---|
| Cut "How I Think" section | Copy felt generic. Case studies carry narrative weight |
| No dollar figures in credibility strip | Couldn't verify. Replaced with "Millions / Users impacted" |
| Credibility stats: 20+ years, 30+ programs, 10M+ users | Accurate and defensible |
| v2 accent: steel blue `#5b8fd4` (not amber) | Blue reads as executive/institutional; amber reads as technical/builder |
| v2 fonts: Anybody + DM Mono | Distinctive wide display type vs. generic Inter/Geist |
| Infinite grid hero | Technical credibility signal — interactive, premium feel |
| Ghost watermark removed | Too heavy, interfered with clean composition |
| Count-up uses scroll listener, not IntersectionObserver | More reliable at hero/strip boundary on all screen sizes and browsers |
| `text-muted` bumped to `#777777` | `#444444` only passed 2.25:1 contrast — fails WCAG AA |
| Case study images restored | Midjourney artwork adds premium visual weight; `alt=""` (decorative) per WCAG |
| No framer-motion dependency | Grid + spotlight implemented with pure CSS + React state |
| Dev reference files gitignored (`components/comp_*.md`) | Not part of the site; kept local for reference only |

---

## Open Questions
- [ ] Custom domain renewal — ensure joet.build auto-renews
- [ ] OG image — current one reflects v1 design; consider updating to v2 screenshot

---

## Next Steps (Post v2.0)
- Update OG image to reflect v2 design
- Monitor for any responsive issues on real devices
- Consider adding a 4th AI project card when next project is ready
- Consider adding a resume download link

---

## Session Log

### Session 1 — Project Setup
- Defined structure, copy, design decisions
- Created CLAUDE.md, DESIGN_SYSTEM.md, WORKING_NOTES.md

### Session 2 — v1.0 Build (2026-04-03/04)
- Built all 9 sections
- Deployed to Vercel, tagged v1.0

### Session 3 — v2.0 Redesign (2026-04-10)
- Brainstormed v2 direction with visual companion
- Approved design: Dark Craft / Amber (later switched to Executive Blue)
- Wrote design spec: `docs/superpowers/specs/2026-04-10-v2-redesign-design.md`
- Wrote implementation plan: `docs/superpowers/plans/2026-04-10-v2-redesign.md`
- Implemented all 11 components + layout + globals
- Polish pass: color swap amber→blue, case study images, WCAG, animation fixes
- Deployed v2.0 to production, tagged v2.0
