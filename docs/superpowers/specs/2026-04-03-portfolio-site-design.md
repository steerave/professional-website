# Portfolio Site Design Spec

## Overview

Personal portfolio website for Sarun (Joe) Teeravechyan — Senior Director of Digital Delivery. Single-page site showcasing de-identified enterprise work and AI projects to support a job search. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Deployed on Vercel.

**Meta title:** Sarun (Joe) Teeravechyan - Digital Leader & AI Systems Design

---

## Color System (Blue-Tinted Dark Theme)

The palette uses blue-tinted darks instead of neutral grays, inspired by Stripe/Linear/Vercel.

| Token | Hex | Usage |
|---|---|---|
| Background | `#0b0e14` | Page background |
| Surface | `#131720` | Credibility strip, CTA section |
| Elevated | `#1a1f2b` | Impact boxes, card backgrounds |
| Border | `#252d3a` | Dividers, card borders |
| Text Primary | `#ffffff` | Headlines, titles, key insights |
| Text Body | `#b0b8c4` | Body text, descriptions, bullet items |
| Text Muted | `#6b7a8d` | Labels, disclaimers, nav links |
| Accent | `#4A6FA5` | CTA buttons, impact borders, bullet markers |
| Accent Light | `#5a8abf` | Credibility numbers, section labels, hover states |
| Accent Glow | `rgba(74,111,165,*)` | Background glows, button shadows, dividers |

**Rules:**
- No additional colors without explicit approval
- No gradients except accent glows defined in this spec
- No box shadows except on cards (hover) and image placeholders

---

## Typography

**Font:** Inter via `next/font/google` with `display: 'swap'`. Geist as fallback.

| Element | Size | Weight | Line Height | Color |
|---|---|---|---|---|
| Hero headline | 64px | 700 | 1.1 | Text Primary |
| Section heading | 44px | 700 | 1.2 | Text Primary |
| Case study title | 32px | 700 | 1.2 | Text Primary |
| Card title | 22px | 600 | 1.3 | Text Primary |
| About lead paragraph | 19px | 500 | 1.8 | Text Primary |
| Body text | 17px | 400 | 1.7 | Text Body |
| CTA subheadline | 17px | 400 | 1.7 | Text Body |
| Hero subheadline | 18px | 400 | 1.7 | Text Body |
| Sub-heading (h4) | 18px | 600 | 1.3 | Text Primary |
| Card sub-heading (h4) | 15px | 600 | 1.3 | Text Primary |
| Bullet items | 15px | 400 | 1.6 | Text Body |
| Section label | 13px | 600 | 1.5 | Accent Light |
| Disclaimer | 13px | 400 | 1.5 | Text Muted |
| Nav links | 14px | 400 | 1.5 | Text Muted → Text Primary on hover |
| Credibility numbers | 52px | 700 | 1.0 | Accent Light |
| Credibility labels | 14px | 400 | 1.5 | Text Muted |

**Section labels:** Uppercase, `letter-spacing: 1.5px`. Appear above section headings.

---

## Spacing

| Context | Value |
|---|---|
| Section vertical padding | 120px desktop / 80px mobile |
| Between section heading and content | 56px |
| Between cards in a grid | 32px |
| Card internal padding | 40px |
| Between bullet points | 6px padding top/bottom |
| Credibility strip vertical padding | 64px |
| Hero gap (headline → subheadline) | 24px |
| Hero gap (subheadline → CTAs) | 40px |
| Hero gap (CTAs → disclaimer) | 24px |
| About paragraph spacing | 32px |
| Case study grid gap (Challenge/What I Did) | 48px |
| Case study layout gap (text ↔ image) | 64px |
| Section glow divider | 1px height, max-width 1200px, centered |

---

## Layout Grid

| Property | Value |
|---|---|
| Max content width | 1200px |
| Page padding | 80px desktop / 40px tablet / 24px mobile |
| About section max-width | 680px |

---

## Responsive Breakpoints

| Breakpoint | Width | Tailwind |
|---|---|---|
| Mobile | < 768px | default |
| Tablet | 768–1024px | `md:` |
| Desktop | > 1024px | `lg:` |

**Mobile adaptations:**
- Hero: single column (image below text or hidden)
- What I Do: single column stack
- Case studies: single column (image below text)
- AI Projects: single column stack
- Credibility strip: stack vertically (one stat per row, centered)
- Nav: hide anchor links on mobile

---

## Sections (in order)

### 1. Nav
- Sticky, top of page, `z-index: 100`
- Background: `rgba(11,14,20,0.85)` with `backdrop-filter: blur(16px)`
- Bottom border: `#252d3a`
- Left: "Sarun (Joe) Teeravechyan" in medium weight, white
- Right: anchor links — Work, About, Connect
- Links in Text Muted, hover to white
- Smooth scroll to section IDs: `#work`, `#about`, `#connect`
- Hide nav links on mobile

### 2. Hero
- Min-height: 90vh
- Background: geometric grid lines (`rgba(74,111,165,0.07)`, 60px grid)
- Three radial blue glows (positioned top-left, bottom-right, center)
- Bottom fade gradient to background color
- **Layout:** Two-column grid (1.2fr text, 1fr image)
- Left: headline → subheadline → two CTA buttons → disclaimer
- Right: image placeholder (rounded corners, border, subtle box-shadow)
- **Animations:** Staggered fade-up on load (h1 → sub → CTAs → disclaimer at 0.2s intervals), image scales in

### 3. Credibility Strip
- Background: Surface (`#131720`)
- Blue-tinted top and bottom borders: `rgba(74,111,165,0.15)`
- Three stat blocks in a row with vertical dividers (`#252d3a`)
- Stats: `20+` / Years of Experience, `30+` / Programs Launched, `Millions` / Users Impacted
- Numbers in Accent Light, labels in Text Muted
- **Animation:** Fade up with stagger + count-up on numbers (0 → target over 1.2s, eased)
- "Millions" counts through: Thousands → Hundreds of Thousands → Millions

### 4. What I Do
- Section label: "Expertise"
- Three equal columns (cards)
- Cards: border `#252d3a`, `border-radius: 8px`, subtle blue gradient background
- Hover: border brightens to blue, translateY(-2px), box-shadow
- Cards: Execution at Scale, Systems Thinking, AI Application
- **Animation:** Label + heading fade up, cards stagger fade-up (100ms delay between each)

### 5. Case Studies (×3)
- Section label: "Case Study" above each
- **Alternating layout:**
  - Study 1: text left (1.3fr), image right (1fr)
  - Study 2: image left (1fr), text right (1.3fr)
  - Study 3: text left (1.3fr), image right (1fr)
- Blue glow divider between each case study
- Text side structure: title → overview → Challenge/What I Did two-column grid → impact box → key insight → disclaimer
- Image: sticky (`top: 100px`), placeholder with blue-tinted gradient, rounded corners, box-shadow
- Impact box: gradient from `rgba(74,111,165,0.1)` to Elevated, left accent border 3px, `border-radius: 0 8px 8px 0`
- Key insight: italic, bold, white text, left accent border 3px
- Bullet markers: Accent Light color
- **Animation:**
  - Text slides in from its side (fade-left for left-aligned, fade-right for reversed)
  - Image scales up
  - Impact box slides from left
  - Insight and disclaimer fade up
  - Stagger delays between elements

### 6. AI Projects
- Section label: "Projects"
- Two-column grid
- Cards: same style as What I Do cards (border, blue tint, hover lift)
- Each card: title → What it does / How it works / Why it matters
- Two projects: AI Job Search Automation Tool, AI-Powered Task Manager
- **Animation:** Label + heading fade up, cards stagger fade-up

### 7. About
- Section label: "About"
- Heading: "About Me"
- Single column, max-width 680px
- Three paragraphs
- First paragraph: white text, 19px, weight 500 (elevated lead sentence)
- Remaining paragraphs: Text Body color
- **Animation:** Label + heading + each paragraph stagger fade-up

### 8. CTA
- Background: Surface with blue-tinted top border
- Two radial blue glows (bottom-positioned, blurred)
- Centered text: section label "Connect" → heading "Let's Connect" → subheadline → two buttons
- LinkedIn button (primary) → `https://www.linkedin.com/in/sarun-teeravechyan/`
- Email button (secondary) → `mailto:steerave@gmail.com`
- **Animation:** Elements fade up with stagger, glows fade in on scroll

### 9. Footer
- Minimal: `© 2026 Sarun (Joe) Teeravechyan`
- Text Muted, 13px, centered
- Top border: `#252d3a`

---

## Buttons

| Type | Background | Text | Border | Padding | Border-radius |
|---|---|---|---|---|---|
| Primary | `#4A6FA5` | white | none | 14px 28px | 6px |
| Secondary | transparent | Accent Light | `rgba(74,111,165,0.4)` | 14px 28px | 6px |

**Primary hover:** background → `#5a8abf`, box-shadow intensifies
**Secondary hover:** background → `rgba(74,111,165,0.1)`, border → Accent Light, text → white
**Primary resting:** `box-shadow: 0 0 20px rgba(74,111,165,0.2)`

---

## Animation System

**Implementation:** CSS transitions + `IntersectionObserver`. No libraries.

| Type | CSS Property | Duration | Easing |
|---|---|---|---|
| fade-up | opacity + translateY(30px→0) | 700ms | `cubic-bezier(0.16,1,0.3,1)` |
| fade-left | opacity + translateX(-40px→0) | 700ms | `cubic-bezier(0.16,1,0.3,1)` |
| fade-right | opacity + translateX(40px→0) | 700ms | `cubic-bezier(0.16,1,0.3,1)` |
| scale-up | opacity + scale(0.92→1) | 700ms | `cubic-bezier(0.16,1,0.3,1)` |
| slide-left | opacity + translateX(-30px→0) | 700ms | `cubic-bezier(0.16,1,0.3,1)` |
| count-up | text content | 1200ms | ease-out cubic |

**Rules:**
- All scroll animations fire once (unobserve after triggering)
- Hero animations are CSS keyframes (fire on page load, not scroll)
- Stagger delay between grouped items: 100ms increments
- Observer threshold: 0.15 with rootMargin `0px 0px -40px 0px`
- CTA glow observer threshold: 0.3

---

## Image Placeholders

Four image slots with placeholder styling. Content TBD — will be generated (Midjourney or similar) in a later phase.

| Location | Size | Style |
|---|---|---|
| Hero (right column) | min-height 400px | `border-radius: 12px`, border, box-shadow |
| Case Study 1 (right) | min-height 320px | `border-radius: 8px`, sticky top:100px |
| Case Study 2 (left) | min-height 320px | `border-radius: 8px`, sticky top:100px |
| Case Study 3 (right) | min-height 320px | `border-radius: 8px`, sticky top:100px |

All placeholders: gradient background (`#0f1520` → `#1a2a3a` → `#0f1520`), border `#252d3a`, `box-shadow: 0 8px 40px rgba(0,0,0,0.3)`

---

## SEO & Meta

- `<title>`: Sarun (Joe) Teeravechyan - Digital Leader & AI Systems Design
- `<meta name="description">`: Senior digital leader delivering complex programs at scale. Building AI systems to transform how digital systems are designed and executed.
- Open Graph tags: title, description, og:image (placeholder for now)
- Favicon: SVG "ST" monogram in Accent color

---

## Accessibility

- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<footer>`
- Each `<section>` gets `id` for anchor links and `aria-label`
- Nav: `aria-label="Main navigation"`
- All text meets WCAG AA contrast against its background
- CTA buttons use descriptive text
- Smooth scroll via `scroll-behavior: smooth`
- Animations respect `prefers-reduced-motion` media query

---

## Performance

- No external CSS/JS — everything bundled via Next.js
- Font: Inter via `next/font/google` with `display: 'swap'`
- Images: `next/image` with explicit dimensions when real images are added
- Prefer Server Components — client JS only for IntersectionObserver animations
- Animation observer code in a single client component or `useEffect`

---

## Project Structure

```
/app
  layout.tsx          # Root layout — font, metadata, global styles
  page.tsx            # Home page — assembles all sections
  globals.css         # Tailwind directives + animation utility classes
  favicon.svg         # ST monogram
/components
  Nav.tsx             # Sticky nav with backdrop blur
  Hero.tsx            # Grid hero with glows + image placeholder
  CredibilityStrip.tsx # Three stat blocks with count-up
  WhatIDo.tsx         # Three-column card grid
  CaseStudy.tsx       # Reusable case study component (accepts props for content + reversed flag)
  AIProjects.tsx      # Two-column project cards
  About.tsx           # Single column about text
  CTA.tsx             # CTA section with glow
  Footer.tsx          # Copyright line
  ScrollAnimation.tsx # Client component — IntersectionObserver wrapper
/lib
  animations.ts       # Observer setup, count-up logic
/public
  og-image.png        # Open Graph image (when ready)
```

**Key architectural decision:** `CaseStudy.tsx` is a single reusable component that accepts content as props and a `reversed` boolean to flip the layout. The three case studies are rendered by passing different data, not by creating three separate components.

---

## Out of Scope (for later)

- Image generation (Midjourney/AI) for placeholders — separate brainstorm session
- About section portrait
- Custom domain setup
- Analytics integration
- Mobile hamburger menu (nav links hidden on mobile for MVP)
