# V2 Redesign — Design Spec
**Date:** 2026-04-10
**Status:** Approved for implementation planning

---

## Context

V1 is live at [joet.build](https://www.joet.build) — a dark, blue-tinted portfolio (Stripe/Linear/Vercel aesthetic) built with Next.js 14, TypeScript, and Tailwind CSS. It works structurally but has generic "AI-generated" energy and needs a full visual identity to stand out in a senior leadership job search.

V2 keeps the proven narrative structure but replaces the entire visual system with a warmer, more distinctive "Dark Craft" aesthetic — positioned as a builder's workshop rather than a corporate deck. Content updates are scoped to the AI Projects section only.

---

## Git Strategy

1. Tag current `main` as `v1.0` before any changes: `git tag v1.0 && git push origin v1.0`
2. Create `v2` branch: `git checkout -b v2`
3. All redesign work happens on `v2` — `main` keeps serving v1 in production via Vercel
4. When v2 is complete: merge `v2` → `main` to flip production

---

## Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| Background | `#080808` | Page background (warmer black than v1's `#0b0e14`) |
| Surface | `#111111` | Cards, panels |
| Elevated | `#1a1a1a` | Hover states, borders |
| Border | `#1e1e1e` | Subtle dividers |
| Text Primary | `#ffffff` | Headings |
| Text Body | `#999999` | Body copy (warmer than v1's blue-grey) |
| Text Muted | `#444444` | Labels, secondary info |
| Accent | `#ff9f2f` | Primary amber — CTAs, highlights, labels |
| Accent Dim | `rgba(255,159,47,0.12)` | Glow backgrounds, tinted surfaces |
| Accent Border | `rgba(255,159,47,0.25)` | Accent-tinted borders |

### Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Display / Hero | Anybody | 900 | All-caps, tight letter-spacing (-2px) |
| Display Light | Anybody | 200–300 | Contrast weight for subheadings |
| Body | Anybody | 300–400 | Generous line-height (1.7) |
| Technical Labels | DM Mono | 400–500 | Stats, tags, code-style accents, CTA text |

Load via `next/font/google`. Replace all current Inter/Geist/Newsreader usage.

**Key typographic rules:**
- Section labels: DM Mono, 9–10px, letter-spacing 3px, uppercase, amber color
- Major headings: Anybody 900, uppercase, tight tracking
- Body paragraphs: Anybody 300, 16–17px, line-height 1.7, `#999`
- Stats/numbers: DM Mono 500, oversized, amber

### Ambient Effects

- **Radial amber glow:** `radial-gradient(ellipse, rgba(255,159,47,0.08), transparent)` — used in hero and section backgrounds, never more than 1 per section
- **Subtle grid overlay:** `background-image: linear-gradient(rgba(255,159,47,0.03) 1px, transparent 1px)` on select sections (hero, case studies)
- **Left accent bar:** `3px solid #ff9f2f` on case study cards and "What I Do" cards — replaces v1's card borders
- No blob shapes, no purple gradients, no generic shadows

---

## Page Structure (Evolved Linear)

Same section order as v1, fully reskinned. No sections added or removed.

```
Nav → Hero → Credibility Strip → What I Do → Case Studies → AI Projects → About → CTA → Footer
```

---

## Section Specs

### Nav
- Same sticky behavior
- Logo: `SJT` in DM Mono 500, amber, letter-spacing 3px — links to top of page
- Nav links: DM Mono, 11px, letter-spacing 2px, uppercase
- Active/hover: amber underline or color shift
- Background: `#080808` with `backdrop-filter: blur` on scroll

### Hero (Oversized Ghost Type)
- **Background:** `#080808` with subtle amber radial glow top-right
- **Ghost layer:** Surname `TEERAVECHYAN` blown up to ~120–140px, `rgba(255,255,255,0.025)`, positioned behind content, bottom-anchored, overflow hidden
- **Breadcrumb:** DM Mono 9px, amber — `~/portfolio · main ›` — above name
- **Name:** `SARUN` on line 1, `TEERAVECHYAN` on line 2 in amber — Anybody 900, ~64–72px desktop, uppercase, letter-spacing -2px
- **Tagline:** Anybody 300, 15–16px, `#666`, max-width 480px
- **CTAs:** Primary = amber filled (`#ff9f2f` bg, `#000` text), Secondary = ghost border (`#2a2a2a` border, `#555` text). Anybody 700, uppercase, 11px, letter-spacing 1px, border-radius 2px
- **Mobile:** Ghost type scales down gracefully, name drops to ~40px

### Credibility Strip
- Three stats side by side, full-width
- Number: DM Mono 500, oversized (48–56px), amber
- Label: Anybody 300, 13px, `#555`, uppercase, letter-spacing 1px
- Subtle top/bottom `1px solid #1e1e1e` borders — no background fill
- Count-up animation retained from v1

### What I Do
- Three cards, horizontal on desktop
- Each card: `#111` background, `border-left: 3px solid rgba(255,159,47,0.3)`, hover lifts to `rgba(255,159,47,0.08)` background
- Card label: DM Mono, amber, 9px uppercase
- Card title: Anybody 700, 18px
- Card body: Anybody 300, 14px, `#666`

### Case Studies
- Section label: DM Mono amber, uppercase — `SELECTED WORK`
- Alternating layout retained (text left/right)
- Cards: `#111` surface, `border-left: 3px solid #ff9f2f` accent bar
- Challenge/Approach/Impact labels: DM Mono, amber, 9px
- Impact box: `background: rgba(255,159,47,0.06)`, amber border, DM Mono text
- Key insight: Anybody italic 300, `#666`

### AI Projects (Updated — 3 projects)

**Project 1: AI Job Search Pipeline**
- Repo: `automated-search-pipeline`
- Description: Automated data pipeline — web scraping, LLM-based scoring with feedback loops, Google Sheets integration, and scheduled email digests
- Tags: `Python` · `LLM` · `Automation`

**Project 2: AI-Powered Task Manager**
- Repo: `task-manager`
- Description: CLI task manager with natural language parsing, Obsidian vault integration, iCloud calendar sync, and two-way checkbox reconciliation
- Tags: `TypeScript` · `NLP` · `CLI`

**Project 3: Rental Tax Pipeline**
- Repo: `rental-tax-pipeline`
- Description: End-to-end document processing pipeline — PDF ingestion with OCR, vendor classification with cross-year learning, human-in-the-loop review via Google Sheets, and template-driven Excel output
- Tags: `Python` · `OCR` · `Pipeline`

**Layout:** 3-column grid on desktop, single column on mobile
**Card design:** `#111` surface, amber left border, DM Mono tags, GitHub link in amber

### About
- Retains existing copy (no changes requested)
- Visual: centered, generous vertical padding, `1px solid #1e1e1e` horizontal rule above section, DM Mono amber section label `ABOUT` above heading

### CTA
- Retains existing copy and links
- Amber glow behind primary CTA button
- Secondary button: ghost style consistent with hero

### Footer
- Minimal — DM Mono, `#333`, copyright only

---

## Content Changes (AI Projects Only)

All other sections retain v1 copy verbatim. The `personal_website_copy.md` file needs one update:

- Replace the 2-project AI Projects section with the 3-project version above
- Update `automated-search-pipeline` description to include "feedback loops"
- Update `task-manager` description to include "iCloud calendar sync"
- Add `rental-tax-pipeline` as a new card

---

## Files to Modify

| File | Change |
|---|---|
| `app/layout.tsx` | Swap fonts: Anybody + DM Mono via `next/font/google` |
| `app/globals.css` | Update CSS variables for new color tokens |
| `components/Nav.tsx` | New typography, amber hover states |
| `components/Hero.tsx` | Ghost type treatment, breadcrumb, amber name |
| `components/CredibilityStrip.tsx` | Amber numbers, DM Mono, new color tokens |
| `components/WhatIDo.tsx` | Amber left border cards, new type |
| `components/CaseStudy.tsx` | Amber accent bar, new impact box styling |
| `components/AIProjects.tsx` | 3-column grid, 3 updated project cards |
| `components/About.tsx` | Typography update only |
| `components/CTA.tsx` | Amber glow, consistent button styles |
| `components/Footer.tsx` | DM Mono, muted color |
| `DESIGN_SYSTEM.md` | Full rewrite to document new tokens |
| `personal_website_copy.md` | Update AI Projects section only |

---

## Verification

1. `npm run build` — zero TypeScript errors
2. Visual check at all three breakpoints (mobile / tablet / desktop)
3. Confirm ghost type surname is visible but not distracting on mobile
4. Confirm amber radial glow doesn't overpower dark background
5. Confirm all 3 AI project cards render correctly with correct copy
6. Confirm count-up animations still fire on scroll
7. Deploy preview on Vercel `v2` branch before merging to `main`
