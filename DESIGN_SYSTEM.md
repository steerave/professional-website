# DESIGN_SYSTEM.md — Sarun (Joe) Teeravechyan Portfolio Site

> **Version:** v2.0 (2026-04-10)
> Previous version (`v1.0`) used blue-tinted dark theme with Inter/Geist fonts. See git tag `v1.0`.

## Design Direction

Dark Craft / Executive Blue. Near-black background with a steel blue accent.
Quiet confidence. Anybody wide display type paired with DM Mono for technical labels.
Infinite grid hero with mouse spotlight. Premium spacing. Zero decoration.

---

## Colors

All tokens are defined in `app/globals.css` under `@theme`.

| Token | CSS Variable | Hex | Usage |
|---|---|---|---|
| Background | `--color-bg` | `#080808` | Page background |
| Surface | `--color-surface` | `#111111` | Card backgrounds, CTA section |
| Elevated | `--color-elevated` | `#1a1a1a` | Card hover state |
| Border | `--color-border` | `#1e1e1e` | Dividers, card borders |
| Text Primary | `--color-text-primary` | `#ffffff` | Headlines, titles |
| Text Body | `--color-text-body` | `#999999` | Body text, descriptions |
| Text Muted | `--color-text-muted` | `#777777` | Labels, muted elements (≥5.2:1 contrast — WCAG AA) |
| Accent | `--color-accent` | `#5b8fd4` | Buttons, borders, labels, highlights |
| Accent Light | `--color-accent-light` | `#7aaee0` | Hover states, lighter accent use |

**Accent rgba base:** `rgba(91, 143, 212, α)` — used for glows, tints, and soft borders.

No additional colors without explicit approval.

---

## Typography

**Display / Headings / Body:** [Anybody](https://fonts.google.com/specimen/Anybody) — loaded via `next/font/google`
**Labels / Code / Technical:** [DM Mono](https://fonts.google.com/specimen/DM+Mono) — loaded via `next/font/google`

| Element | Font | Weight | Size | Notes |
|---|---|---|---|---|
| Hero name | Anybody | 900 | `clamp(44px, 7.5vw, 78px)` | Uppercase, tracking -2px |
| Section heading | Anybody | 900 | `clamp(28px, 4.5vw, 48px)` | Uppercase, tracking -1px |
| Card title | Anybody | 700 | 17–18px | |
| Body / overview | Anybody | 300 | 17px | line-height 1.8 |
| Small body / bullets | Anybody | 300 | 14–15px | line-height 1.75 |
| Section labels | DM Mono | 400 | 10px | Uppercase, tracking 3px, accent color |
| Stats / numbers | DM Mono | 500 | `clamp(40px, 5vw, 52px)` | Accent color |
| Nav / buttons | DM Mono / Anybody | 400–700 | 11px | Uppercase, tracking 1.5–2px |

**Rule:** Never use `font-serif` or system fonts. All display and body copy uses Anybody. All labels, code, and technical UI use DM Mono.

---

## Spacing

| Context | Value |
|---|---|
| Section vertical padding | `lg:py-[120px]` / `py-20` mobile |
| Max content width | `1200px` (`max-w-content`) |
| Max about column width | `680px` |
| Horizontal padding | `px-6` / `md:px-10` / `lg:px-20` |
| Card internal padding | `p-8` (32px) |
| Gap between cards | `gap-5` (20px) |

**Rule:** Never reduce spacing to fit content. If something feels tight, restructure the content.

---

## Hero Section

- **Grid base layer:** faint blue lines (`rgba(91,143,212,0.04)`), infinite diagonal scroll animation (`@keyframes gridScroll`)
- **Grid spotlight layer:** brighter blue lines (`rgba(91,143,212,0.18)`), revealed via `mask-image: radial-gradient` at cursor position using inline React state (`mousePos`)
- **Ambient glow:** top-right radial bloom, `rgba(91,143,212,0.09)`
- **Entrance animation:** `.hero-animate-1/2/3/4` CSS keyframe stagger (0.15s–0.70s delays)
- **Breadcrumb:** `~/portfolio · main ›` in DM Mono

---

## Components

### Nav
- Sticky, `z-[100]`, `bg-[rgba(8,8,8,0.88)]` + `backdrop-blur-[20px]`
- Left: `SJT` monogram in DM Mono accent
- Right: Work / About / Connect in DM Mono, accent hover

### Credibility Strip
- Three stats with vertical dividers on `md:` and above
- Count-up triggered by scroll listener + immediate mount check
- Respects `prefers-reduced-motion` (jumps to final value)
- Screen reader accessible: `aria-label` on each stat, `aria-hidden` on animated elements

### What I Do / AI Projects Cards
- `border-l-[3px]` in `rgba(91,143,212,0.35–0.45)`
- `bg-surface` → `hover:bg-elevated`
- Subtle blue hover tint overlay `rgba(91,143,212,0.03)`

### Case Studies
- Alternating layout: text left / image right, then image left / text right
- `CaseStudyImage`: sticky on desktop (`lg:sticky lg:top-[100px]`), `next/image` with `object-cover`
- Impact box: `border-l-[3px] border-accent` + `rgba(91,143,212,0.05)` background
- Key insight: italic Anybody 300 with soft blue left border

### CTA Section
- Amber glow fades in on section enter (IntersectionObserver, threshold 0.3)
- LinkedIn: `bg-accent text-white`
- Email: ghost border button

### Section Glow Dividers
- `.section-glow` — 1px horizontal gradient centered on accent

---

## Accessibility (WCAG 2.1 AA)

- All text colors meet 4.5:1 contrast ratio against respective backgrounds
- `:focus-visible` ring: 2px solid accent, 3px offset — on all interactive elements
- Skip-to-content link: visible on keyboard focus, hidden otherwise
- Animated elements respect `prefers-reduced-motion`
- `aria-label` on stat numbers; animated display is `aria-hidden`
- Case study images use `alt=""` (decorative) per WCAG F38

---

## Do Not

- Use any color not defined here without approval
- Use `font-serif`, Inter, or system fonts
- Add decorative shapes, blobs, or background patterns beyond defined glows
- Introduce icon libraries
- Reduce spacing to fit content
- Add sections or copy not in `personal_website_copy.md`
