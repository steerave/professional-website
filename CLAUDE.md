# CLAUDE.md — Sarun (Joe) Teeravechyan Portfolio Site

## Project Overview
Personal portfolio website for a senior digital leader and AI systems builder.
Goal: Land a new role by showcasing de-identified work, credibility, and AI projects.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS
- Inter font via `next/font/google`
- Deployed on Vercel

## Key Documents
All at project root:
- **Project workflow and hosting guide** → `personal_website_playbook.md`
- **Design system and visual specs** → `DESIGN_SYSTEM.md`
- **All approved copy** → `personal_website_copy.md`
- **Current status and decisions log** → `WORKING_NOTES.md`

Always read these files before making any changes.

---

## Working Principles

### Copy
- `personal_website_copy.md` is the single source of truth for all copy
- Do not invent, paraphrase, or improve copy unless explicitly instructed
- Do not add placeholder text — if copy is missing, flag it

### Design
- `DESIGN_SYSTEM.md` is the single source of truth for all visual decisions
- Do not introduce new colors, fonts, spacing values, or components not defined there
- When in doubt, refer to the design system before making a visual decision

### Code
- Use Tailwind utility classes only — no custom CSS files unless absolutely necessary
- Keep components modular — each section is its own component in `/components`
- Mobile-first responsive design — always check all three breakpoints
- Use semantic HTML elements (`<nav>`, `<main>`, `<section>`, `<footer>`)
- Use `next/font` for font loading — no external stylesheet imports
- Use `next/image` for any images — no raw `<img>` tags

### Changes
- Make one change at a time unless instructed otherwise
- After each change, summarize what was changed and what to check visually
- Never remove existing content or sections without explicit instruction

---

## Responsive Breakpoints

| Breakpoint | Width | Tailwind prefix |
|---|---|---|
| Mobile | < 768px | (default) |
| Tablet | 768–1024px | `md:` |
| Desktop | > 1024px | `lg:` |

All styles are written mobile-first. Use `md:` and `lg:` prefixes to layer up.

---

## Accessibility

- Every `<section>` gets an `id` for anchor links and an `aria-label`
- Nav links use semantic `<nav>` with `aria-label="Main navigation"`
- CTA buttons use descriptive text (not "Click here")
- Color contrast: all text meets WCAG AA against its background
- Skip decorative ARIA — only add where it aids screen readers

---

## Performance

- No external CSS or JS — everything bundled via Next.js
- Font: Inter loaded via `next/font/google` with `display: 'swap'`
- Images (if any): use `next/image` with explicit width/height
- No client-side JavaScript unless interactive behavior requires it — prefer Server Components

---

## Project Structure
```
/app
  layout.tsx          # Root layout — font, metadata, global styles
  page.tsx            # Home page — assembles all sections
  globals.css         # Tailwind directives only
  favicon.svg         # SVG favicon
/components
  Nav.tsx
  Hero.tsx
  CredibilityStrip.tsx
  WhatIDo.tsx
  CaseStudies.tsx
  AIProjects.tsx
  About.tsx
  CTA.tsx
/public
  og-image.png        # Open Graph image (when ready)
CLAUDE.md
DESIGN_SYSTEM.md
WORKING_NOTES.md
personal_website_copy.md
personal_website_playbook.md
```

---

## Workflow for Each Session
1. Read `WORKING_NOTES.md` to understand current status
2. Read `DESIGN_SYSTEM.md` if making any visual changes
3. Make changes
4. Update `WORKING_NOTES.md` with what was done and what's next
