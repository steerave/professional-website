# DESIGN_SYSTEM.md — Sarun (Joe) Teeravechyan Portfolio Site

## Design Direction
Dark, minimal, executive. Blue-tinted dark theme inspired by Stripe, Linear, and Vercel.
Quiet confidence. Let typography, spacing, and subtle blue glows do the work.

---

## Colors

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

No additional colors without explicit approval. Accent glows are permitted as defined in the design spec.

---

## Typography

**Font:** Inter (primary). Geist as fallback. Both available via Google Fonts or next/font.

| Element | Size | Weight | Line Height |
|---|---|---|---|
| Hero headline | 64–72px | 700 | 1.1 |
| Section heading | 40–48px | 700 | 1.2 |
| Credibility numbers | 48–56px | 700 | 1.0 |
| Card title | 22–24px | 600 | 1.3 |
| Body text | 17–18px | 400 | 1.7 |
| Small / label | 13–14px | 400 | 1.5 |
| Disclaimer | 13px | 400 | 1.5 |

**Rules:**
- Never compress line height below these values
- Hero headline should feel large and commanding — err toward 72px on desktop
- Muted text uses `Text Muted` color, never a smaller font size alone

---

## Spacing

This site uses generous spacing. When in doubt, add more space, not less.

| Context | Value |
|---|---|
| Section vertical padding | 120px desktop / 80px mobile |
| Between section heading and content | 48–64px |
| Between cards in a grid | 32px |
| Card internal padding | 40px |
| Between bullet points | 12px |
| Credibility strip vertical padding | 64px |

**Rule:** Never reduce spacing to fit content. If something feels tight, the content needs to be restructured, not the spacing compressed.

---

## Components

### Nav
- Sticky, top of page
- Background: `#0a0a0a` with subtle bottom border `#2a2a2a`
- Left: "Sarun (Joe) Teeravechyan" in medium weight
- Right: anchor links — Work, About, Connect
- Links in `Text Muted`, hover to `Text Primary`
- No mobile hamburger required for MVP — can hide nav links on mobile

### Hero
- Full viewport height or close to it (min-height: 90vh)
- Content centered vertically and horizontally or left-aligned with generous left padding
- Headline then subheadline then CTAs then disclaimer
- Gap between headline and subheadline: 24px
- Gap between subheadline and CTAs: 40px

### CTA Buttons
- Primary: Background `Accent`, text white, no border, padding 14px 28px
- Secondary: Background transparent, border `Accent`, text `Accent`, padding 14px 28px
- Border radius: 6px
- Hover: Primary darkens slightly, Secondary fills with accent

### Credibility Strip
- Background: `Surface` (#111111)
- Three stat blocks in a row with vertical dividers between them
- Number: large bold, `Text Primary`
- Label: small, `Text Muted`
- Centered content, generous vertical padding

### What I Do Cards
- Three equal columns
- Border: `Border` (#2a2a2a), no background fill
- Padding: 40px
- Title: Card title size, `Text Primary`
- Body: Body text size, `Text Muted`

### Case Study Layout
Each case study is a full-width section separated by a top border (`Border`).

Structure per case study:
1. Large bold title (Section heading size)
2. Overview paragraph (Body text, `Text Muted`)
3. Two-column grid:
   - Left: "Challenge" heading + bullet list
   - Right: "What I Did" heading + bullet list
4. Impact box: background `Elevated` (#1a1a1a), left border 3px `Accent`, padding 32px
5. Key Insight: bold italic, slightly larger than body, `Text Primary`
6. Disclaimer line: small, `Text Muted`

### AI Projects
- Single card for MVP, designed to accommodate more cards later
- Same card style as What I Do but full width or two-column grid
- Sections within card: What it does / How it works / Why it matters

### About
- Single column, max-width 680px, centered or left-aligned consistent with page grid
- Three paragraphs, body text, generous paragraph spacing (32px between)

### CTA Section
- Full width, centered
- Background: `Surface` (#111111)
- Large heading, then two buttons side by side (LinkedIn, Email)
- Same button styles as Hero CTAs

---

## Layout Grid
- Max content width: 1200px
- Horizontal page padding: 80px desktop / 40px tablet / 24px mobile
- All sections respect this grid

---

## Do Not
- Add decorative shapes, blobs, or background patterns
- Use box shadows that look generic or templated
- Introduce icon libraries (if icons are needed, use minimal SVG inline)
- Add animations beyond subtle fade-in on scroll (optional, low priority)
- Use any color not defined in this document without approval
- Add sections or copy not in `personal_website_copy.md`
