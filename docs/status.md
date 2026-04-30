# Project Status Log

## 2026-04-30

**Done:**
- `$impeccable critique` of v2.0 surfaced 5 side-stripe borders, identical WhatIDo+AIProjects card grids, terminal cosplay (`~/portfolio · main ›`, mono labels), em dash overuse, and WCAG AA contrast failures (`#444`, `#2e2e2e`, `#1e1e1e` text on near-black) despite explicit AA claim
- Built three tonal probe mockups (`mockups/01-editorial.html`, `02-boardroom.html`, `03-quiet-executive.html`) with real Joe content; user picked option C with Inter Tight + Inter and list+detail case study routing
- Shipped v3.0 quiet executive redesign: dropped Anybody/DM Mono for Inter Tight + Inter, recolored palette so every text token passes ≥4.5:1, cut `WhatIDo` + narrative summary + "How This Site Was Built", killed mouse-spotlight grid + count-up + 5 side-stripes + numbered indices + section-glows
- Refactored case studies to list+detail pattern: `lib/case-studies.ts` with slugs, `app/work/[slug]/page.tsx` with `generateStaticParams` + per-page metadata, new `CaseStudyListItem` + `CaseStudyDetail` components
- Wired Resume PDF (`Joe_Teeravechyan_Resume.pdf`) into nav, hero CTA, and Connect section; availability pill with green dot in hero; real LinkedIn/GitHub/Email footer links; "Sarun Teeravechyan" wordmark replacing `SJT` monogram
- Caught and corrected AI overclaim across hero/about/AI projects/CTA/metadata — AI now framed as organizational adoption study, not applied client work
- `$impeccable audit` of live v3 surfaced favicon never being served (silently 404'd since v1 — `app/favicon.svg` doesn't match Next.js convention), detail-page LCP image was `loading="lazy"`, sub-44px touch targets, one stray `text-[#0B1220]` hex literal
- Audit fixes: renamed `app/favicon.svg` → `app/icon.svg` (Next.js auto-injection now works) and refreshed favicon to v3 palette (`#0B0B0F` bg, `#5B8FD4` ST letters), added `priority` + `sizes` to detail hero `Image`, bumped CTAs to `min-h-[44px]` (WCAG 2.2 AAA), added `--color-on-accent` token replacing the last hex literal
- Saved memory files `joe_positioning.md` and `feedback_no_overclaim.md` — future sessions won't reintroduce AI overclaim in any new copy
- Tagged and released `v3.0` and same-day patch `v3.0.1`; both deployed via Vercel and serving on joet.build; audit score projection 17/20 → 20/20

**Next:**
- Real-device mobile smoke test (only desktop curl-verified so far)
- Update OG image from a v3 hero screenshot
- Re-run `$impeccable critique` only if the site changes meaningfully (not on a schedule)

**Notes:**
- 5 commits today: `aebe805` (v3.0 redesign), `c775a7d` (copy honesty), `edfd44f` (favicon refresh), `e2bb1cf` (audit pass), `fba120f` (v3.0.1 release docs)
- Tags `v3.0` and `v3.0.1` both anchor today's production state
- PageSpeed Insights API daily quota burned during audit; live Lighthouse score not captured. Code-level audit projects 20/20 across the 5 impeccable dimensions

## 2026-04-10

**Done:**
- Full v2 redesign implemented and deployed to production at joet.build (tagged `v2.0`)
- Replaced Geist/Newsreader with Anybody (900 display, 300 body) + DM Mono (labels/code)
- Rewrote `app/globals.css` with new `@theme` tokens: `#080808` bg, `#5b8fd4` steel blue accent
- Built infinite grid hero with diagonal scroll animation and interactive mouse spotlight (pure CSS + React state)
- Swapped accent color from amber `#ff9f2f` to steel blue `#5b8fd4` across all 11 components
- Restored case study images (casestudy-1/2/3.webp) via `next/image` with sticky desktop layout
- Added third AI project card: Rental Tax Pipeline (repo: rental-tax-pipeline)
- Renamed project: "AI Job Search Pipeline" → "Automated Search Pipeline"
- Fixed count-up animation: replaced IntersectionObserver with scroll listener + immediate mount check
- Added `prefers-reduced-motion` support to count-up (jumps to final value instead of animating)
- WCAG improvements: `text-muted` `#444` → `#777` (2.25:1 → 5.2:1 contrast), `:focus-visible` ring, skip-to-content link, `aria-label` on stat numbers
- Reduced ScrollReveal `rootMargin` from `-40px` to `-10px` for reliable mobile reveals
- Removed ghost watermark from hero; brightened tagline (#5a5a5a → #888) and disclaimer (#2a2a2a → #666)
- Updated hero heading to "SARUN (JOE)" / TEERAVECHYAN
- Updated DESIGN_SYSTEM.md, CHANGELOG.md, WORKING_NOTES.md, README.md to reflect v2
- Merged v2 branch → main via `--no-ff`, pushed with `v2.0` annotated tag

**Next:**
- Update OG image to reflect v2 design (current one shows v1)
- Visual check on real mobile device
- Consider adding resume download link

**Notes:**
- v1.0 tag preserved on old main; clean rollback available via `git checkout v1.0`
- Dev reference files (`components/comp_*.md`) gitignored — kept local only

## 2026-04-04

**Done:**
- Redesigned hero to name-dominant centered layout with Sarun (Joe) Teeravechyan as primary element
- Added Midjourney fluid wave background to hero, then swapped to cloth/silk wave image
- Refined hero name typography: medium weight, uppercase, wide tracking, left accent border
- Fixed hero name cropping on iPhone with clamp() fluid sizing and tighter mobile tracking
- Updated all case study copy with new narratives for CS2 (Prize Fulfillment) and CS3 (Demand & Fraud)
- Replaced "Implemented LIT, MUAT" jargon with clearer partner/client testing language in CS1
- Added "Selected Work" overview section above case studies and narrative summary below
- Clarified North American scope in case studies overview
- Added case study images (optimized from 1.3-1.5MB PNG to 36-55KB WebP each)
- Updated typography system: Geist Sans for headings/UI, Newsreader for body, Geist Mono for labels
- Redesigned credibility strip: refined 44px numbers, 2-line labels, consistent count-up to 20+/30+/10M+
- Added reflective "How This Site Was Built" note above final CTA (narrow, muted, no tool names)
- Generated 04042026_Website_Copydeck.md with all live copy as source of truth
- Deployed to Vercel and set up custom domain joet.build

**Next:**
- Visual review on iPhone to confirm hero name fix and overall mobile experience
- Review full site at joet.build for any remaining visual polish
