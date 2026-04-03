# Portfolio Site Build — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page portfolio site for Sarun (Joe) Teeravechyan with blue-tinted dark theme, scroll animations, and image placeholders.

**Architecture:** Next.js 14 App Router, single page (`page.tsx`) composing modular section components. All content is hardcoded from the copy doc — no CMS or data fetching. Animation system uses a single client component wrapping `IntersectionObserver`. Everything else is Server Components.

**Tech Stack:** Next.js 14, TypeScript (strict), Tailwind CSS, `next/font/google` (Inter)

**Reference docs (read before starting any task):**
- Design spec: `docs/superpowers/specs/2026-04-03-portfolio-site-design.md`
- Copy source of truth: `personal_website_copy.md`
- Design system: `DESIGN_SYSTEM.md`
- Project rules: `CLAUDE.md`

---

## File Map

| File | Responsibility |
|---|---|
| `app/layout.tsx` | Root layout — Inter font, metadata, OG tags, `<html>` + `<body>` |
| `app/page.tsx` | Home page — imports and composes all section components |
| `app/globals.css` | Tailwind directives + custom animation utility classes + `prefers-reduced-motion` |
| `app/favicon.svg` | ST monogram SVG |
| `components/Nav.tsx` | Sticky nav, backdrop blur, anchor links (Server Component) |
| `components/Hero.tsx` | Hero with grid background, glows, split layout (Server Component — CSS keyframe animations) |
| `components/CredibilityStrip.tsx` | Three stat blocks — Client Component for count-up |
| `components/WhatIDo.tsx` | Three-column card grid (Server Component) |
| `components/CaseStudy.tsx` | Reusable case study — accepts props + `reversed` boolean (Server Component) |
| `components/AIProjects.tsx` | Two project cards (Server Component) |
| `components/About.tsx` | Single-column about text (Server Component) |
| `components/CTA.tsx` | CTA section with glow — Client Component for glow animation |
| `components/Footer.tsx` | Copyright line (Server Component) |
| `components/ScrollReveal.tsx` | Client Component — IntersectionObserver wrapper for scroll animations |
| `tailwind.config.ts` | Extended theme — colors, custom easing |

---

### Task 1: Project Scaffold + Git Init

**Files:**
- Create: `.gitignore`, `app/layout.tsx`, `app/globals.css`, `app/page.tsx`, `tailwind.config.ts`, `app/favicon.svg`
- Modify: `package.json` (via create-next-app)

- [ ] **Step 1: Create Next.js project**

Run:
```bash
cd "C:/Users/steerave/Desktop/Claude Projects/Professional Website"
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm
```

Select defaults when prompted. This scaffolds into the current directory since project docs already exist here.

- [ ] **Step 2: Verify scaffold works**

Run:
```bash
npm run dev
```
Open `http://localhost:3000`. Confirm the default Next.js page loads. Stop the dev server.

- [ ] **Step 3: Replace `tailwind.config.ts` with project theme**

Replace the generated config with:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0e14",
        surface: "#131720",
        elevated: "#1a1f2b",
        border: "#252d3a",
        "text-primary": "#ffffff",
        "text-body": "#b0b8c4",
        "text-muted": "#6b7a8d",
        accent: "#4A6FA5",
        "accent-light": "#5a8abf",
      },
      maxWidth: {
        content: "1200px",
        about: "680px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 4: Replace `app/globals.css` with Tailwind directives + animation classes**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply bg-bg text-text-body;
  }
}

/* Scroll animation classes */
@layer utilities {
  .anim {
    @apply opacity-0 transition-all duration-700 ease-out-expo;
  }
  .anim.visible {
    @apply opacity-100 translate-x-0 translate-y-0 scale-100;
  }
  .anim-fade-up {
    @apply translate-y-[30px];
  }
  .anim-fade-left {
    @apply -translate-x-[40px];
  }
  .anim-fade-right {
    @apply translate-x-[40px];
  }
  .anim-scale-up {
    @apply scale-[0.92];
  }
  .anim-slide-left {
    @apply -translate-x-[30px];
  }
}

/* Hero load animations — CSS keyframes, not scroll-triggered */
@keyframes heroFadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes heroScaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

.hero-animate-1 { opacity: 0; animation: heroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards; }
.hero-animate-2 { opacity: 0; animation: heroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards; }
.hero-animate-3 { opacity: 0; animation: heroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards; }
.hero-animate-4 { opacity: 0; animation: heroFadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards; }
.hero-animate-image { opacity: 0; animation: heroScaleIn 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards; }

/* Stagger delays for scroll animations */
.delay-100 { transition-delay: 0.1s; }
.delay-200 { transition-delay: 0.2s; }
.delay-300 { transition-delay: 0.3s; }
.delay-400 { transition-delay: 0.4s; }
.delay-500 { transition-delay: 0.5s; }

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .anim, .hero-animate-1, .hero-animate-2, .hero-animate-3, .hero-animate-4, .hero-animate-image {
    opacity: 1 !important;
    transform: none !important;
    animation: none !important;
    transition: none !important;
  }
}

/* Section glow divider */
.section-glow {
  height: 1px;
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(90deg, transparent 0%, rgba(74,111,165,0.25) 50%, transparent 100%);
}
```

- [ ] **Step 5: Replace `app/layout.tsx` with root layout**

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sarun (Joe) Teeravechyan - Digital Leader & AI Systems Design",
  description:
    "Senior digital leader delivering complex programs at scale. Building AI systems to transform how digital systems are designed and executed.",
  openGraph: {
    title: "Sarun (Joe) Teeravechyan - Digital Leader & AI Systems Design",
    description:
      "Senior digital leader delivering complex programs at scale. Building AI systems to transform how digital systems are designed and executed.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
```

- [ ] **Step 6: Replace `app/page.tsx` with placeholder**

```tsx
export default function Home() {
  return (
    <main>
      <p className="text-text-primary p-20">Site coming together...</p>
    </main>
  );
}
```

- [ ] **Step 7: Create SVG favicon**

Create `app/favicon.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#0b0e14"/>
  <text x="16" y="22" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" font-weight="700" fill="#4A6FA5">ST</text>
</svg>
```

- [ ] **Step 8: Create `.gitignore`**

```
# Dependencies
node_modules/
.pnp
.pnp.js

# Build
.next/
out/
dist/

# Env
.env
.env.*

# Debug
npm-debug.log*

# IDE
.idea/
.vscode/
*.swp

# OS
.DS_Store
Thumbs.db

# Cache
.claude/settings.local.json
.superpowers/

# Coverage
coverage/
```

- [ ] **Step 9: Verify themed build**

Run:
```bash
npm run dev
```
Open `http://localhost:3000`. Confirm: dark blue-black background (`#0b0e14`), white text visible, Inter font loads. Stop dev server.

- [ ] **Step 10: Git init + first commit**

```bash
git init
git branch -M main
git add .gitignore tailwind.config.ts app/layout.tsx app/page.tsx app/globals.css app/favicon.svg package.json package-lock.json tsconfig.json next.config.ts postcss.config.mjs next-env.d.ts eslint.config.mjs
git commit -m "feat: scaffold Next.js project with blue-tinted dark theme

Co-Authored-By: Claude <noreply@anthropic.com>"
```

- [ ] **Step 11: Create GitHub repo + push**

```bash
gh repo create steerave/professional-website --public --source=. --push
```

---

### Task 2: ScrollReveal Client Component

**Files:**
- Create: `components/ScrollReveal.tsx`

This is the animation foundation — build it before any section components so they can use it.

- [ ] **Step 1: Create `components/ScrollReveal.tsx`**

```tsx
"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale-up" | "slide-left";
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay > 0 ? `delay-${delay}` : "";
  const delayStyle = delay > 0 ? { transitionDelay: `${delay / 1000}s` } : undefined;

  return (
    <div ref={ref} className={`anim anim-${animation} ${className}`} style={delayStyle}>
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run:
```bash
npm run dev
```
No errors in terminal. Stop dev server.

- [ ] **Step 3: Commit**

```bash
git add components/ScrollReveal.tsx
git commit -m "feat: add ScrollReveal client component for scroll animations

Co-Authored-By: Claude <noreply@anthropic.com>"
git push
```

---

### Task 3: Nav Component

**Files:**
- Create: `components/Nav.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `components/Nav.tsx`**

```tsx
export default function Nav() {
  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-[100] flex items-center justify-between border-b border-border bg-[rgba(11,14,20,0.85)] px-6 py-4 backdrop-blur-[16px] md:px-10 lg:px-20"
    >
      <span className="text-base font-medium text-text-primary">
        Sarun (Joe) Teeravechyan
      </span>
      <div className="hidden gap-8 md:flex">
        <a href="#work" className="text-sm text-text-muted transition-colors hover:text-text-primary">
          Work
        </a>
        <a href="#about" className="text-sm text-text-muted transition-colors hover:text-text-primary">
          About
        </a>
        <a href="#connect" className="text-sm text-text-muted transition-colors hover:text-text-primary">
          Connect
        </a>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Update `app/page.tsx` to render Nav**

```tsx
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <p className="p-20 text-text-primary">Site coming together...</p>
      </main>
    </>
  );
}
```

- [ ] **Step 3: Verify visually**

Run `npm run dev`. Check:
- Sticky nav with dark background + blur
- "Sarun (Joe) Teeravechyan" on the left
- Work / About / Connect links on the right (hidden on mobile viewport)
- Links change color on hover

- [ ] **Step 4: Commit**

```bash
git add components/Nav.tsx app/page.tsx
git commit -m "feat: add sticky nav with backdrop blur and anchor links

Co-Authored-By: Claude <noreply@anthropic.com>"
git push
```

---

### Task 4: Hero Component

**Files:**
- Create: `components/Hero.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `components/Hero.tsx`**

```tsx
export default function Hero() {
  return (
    <section aria-label="Introduction" className="relative min-h-[90vh] overflow-hidden bg-bg [background-image:linear-gradient(rgba(74,111,165,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(74,111,165,0.07)_1px,transparent_1px)] [background-size:60px_60px]">
      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-[200px] bg-gradient-to-b from-transparent to-bg" />

      {/* Glows */}
      <div className="pointer-events-none absolute left-0 top-[10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(74,111,165,0.2)_0%,transparent_60%)] blur-[80px]" />
      <div className="pointer-events-none absolute bottom-[10%] right-[10%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(90,138,191,0.12)_0%,transparent_60%)] blur-[60px]" />
      <div className="pointer-events-none absolute left-[40%] top-[40%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(74,111,165,0.08)_0%,transparent_60%)] blur-[50px]" />

      {/* Content */}
      <div className="relative z-[2] mx-auto grid min-h-[90vh] max-w-content items-center gap-16 px-6 py-[120px] md:px-10 lg:grid-cols-[1.2fr_1fr] lg:px-20">
        <div>
          <h1 className="hero-animate-1 max-w-[800px] text-4xl font-bold leading-[1.1] text-text-primary md:text-5xl lg:text-[64px]">
            Leading digital execution at scale. Now building AI systems to do it better.
          </h1>
          <p className="hero-animate-2 mt-6 max-w-[540px] text-lg leading-[1.7] text-text-body">
            Senior digital leader delivering complex, high-visibility programs across North America — now focused on applying AI to transform how systems are designed, operated, and scaled.
          </p>
          <div className="hero-animate-3 mt-10 flex gap-4">
            <a
              href="#work"
              className="inline-block rounded-md bg-accent px-7 py-3.5 text-[15px] text-white shadow-[0_0_20px_rgba(74,111,165,0.2)] transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(74,111,165,0.35)]"
            >
              View Work
            </a>
            <a
              href="#connect"
              className="inline-block rounded-md border border-[rgba(74,111,165,0.4)] bg-transparent px-7 py-3.5 text-[15px] text-accent-light transition-all hover:border-accent-light hover:bg-[rgba(74,111,165,0.1)] hover:text-white"
            >
              Connect
            </a>
          </div>
          <p className="hero-animate-4 mt-6 text-[13px] text-text-muted">
            De-identified work. Details available upon request.
          </p>
        </div>
        <div className="hero-animate-image hidden rounded-xl border border-border bg-[linear-gradient(135deg,#0f1520_0%,#1a2a3a_40%,#0f1520_100%)] shadow-[0_8px_40px_rgba(0,0,0,0.3),0_0_60px_rgba(74,111,165,0.05)] lg:flex lg:min-h-[400px] lg:items-center lg:justify-center">
          <span className="text-xs uppercase tracking-[2px] text-accent-light/50">
            Hero Image Placeholder
          </span>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update `app/page.tsx`**

```tsx
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
      </main>
    </>
  );
}
```

- [ ] **Step 3: Verify visually**

Run `npm run dev`. Check:
- 90vh hero with grid background
- Blue glows visible
- Text staggers in on load
- Image placeholder on right (desktop), hidden on mobile
- Buttons styled correctly with glow on primary

- [ ] **Step 4: Commit**

```bash
git add components/Hero.tsx app/page.tsx
git commit -m "feat: add hero section with grid background, glows, and load animations

Co-Authored-By: Claude <noreply@anthropic.com>"
git push
```

---

### Task 5: CredibilityStrip Component

**Files:**
- Create: `components/CredibilityStrip.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `components/CredibilityStrip.tsx`**

```tsx
"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { target: "20+", numeric: 20, suffix: "+", label: "Years of Experience" },
  { target: "30+", numeric: 30, suffix: "+", label: "Programs Launched" },
  { target: "Millions", numeric: null, suffix: "", label: "Users Impacted" },
];

function useCountUp(target: number | null, targetText: string, active: boolean) {
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!active) return;

    if (target === null) {
      const words = ["Thousands", "Hundreds of Thousands", "Millions"];
      let i = 0;
      const interval = setInterval(() => {
        setDisplay(words[i]);
        i++;
        if (i >= words.length) clearInterval(interval);
      }, 300);
      return () => clearInterval(interval);
    }

    const duration = 1200;
    const start = performance.now();
    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target!);
      setDisplay(current + (target === current ? targetText.replace(String(target), "") : ""));
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplay(targetText);
    }
    requestAnimationFrame(tick);
  }, [active, target, targetText]);

  return display;
}

export default function CredibilityStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      aria-label="Key achievements"
      className="border-y border-[rgba(74,111,165,0.15)] bg-surface"
    >
      <div
        ref={ref}
        className="mx-auto flex max-w-content flex-col items-center gap-8 px-6 py-16 md:flex-row md:gap-0 md:px-10 lg:px-20"
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex-1 text-center md:px-8 ${
              i < stats.length - 1 ? "md:border-r md:border-border" : ""
            }`}
          >
            <StatNumber stat={stat} active={active} />
            <div className="mt-2 text-sm text-text-muted">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StatNumber({
  stat,
  active,
}: {
  stat: (typeof stats)[number];
  active: boolean;
}) {
  const display = useCountUp(stat.numeric, stat.target, active);
  return (
    <div className="text-[52px] font-bold leading-none text-accent-light">
      {display}
    </div>
  );
}
```

- [ ] **Step 2: Add to `app/page.tsx`**

```tsx
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CredibilityStrip from "@/components/CredibilityStrip";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CredibilityStrip />
      </main>
    </>
  );
}
```

- [ ] **Step 3: Verify visually**

Check: surface background, blue borders top/bottom, three stats in a row on desktop, stacked on mobile. Numbers count up when scrolled into view.

- [ ] **Step 4: Commit**

```bash
git add components/CredibilityStrip.tsx app/page.tsx
git commit -m "feat: add credibility strip with count-up animation

Co-Authored-By: Claude <noreply@anthropic.com>"
git push
```

---

### Task 6: WhatIDo Component

**Files:**
- Create: `components/WhatIDo.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `components/WhatIDo.tsx`**

```tsx
import ScrollReveal from "@/components/ScrollReveal";

const cards = [
  {
    title: "Execution at Scale",
    body: "I lead complex digital programs across product, engineering, and operations — delivering under real-world constraints.",
  },
  {
    title: "Systems Thinking",
    body: "I design workflows and systems that improve clarity, reduce friction, and scale execution.",
  },
  {
    title: "AI Application",
    body: "I build and experiment with AI tools to enhance decision-making and operational efficiency.",
  },
];

export default function WhatIDo() {
  return (
    <section id="work" aria-label="What I do" className="mx-auto max-w-content px-6 py-20 md:px-10 lg:px-20 lg:py-[120px]">
      <ScrollReveal>
        <p className="text-[13px] font-semibold uppercase tracking-[1.5px] text-accent-light">
          Expertise
        </p>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <h2 className="mb-14 mt-4 text-[44px] font-bold leading-[1.2] text-text-primary">
          What I Do
        </h2>
      </ScrollReveal>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => (
          <ScrollReveal key={card.title} delay={200 + i * 100}>
            <div className="rounded-lg border border-border bg-[linear-gradient(135deg,rgba(74,111,165,0.04)_0%,transparent_100%)] p-10 transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(74,111,165,0.3)] hover:bg-[linear-gradient(135deg,rgba(74,111,165,0.08)_0%,rgba(74,111,165,0.02)_100%)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
              <h3 className="mb-3 text-[22px] font-semibold text-text-primary">
                {card.title}
              </h3>
              <p className="text-base text-text-body">{card.body}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to `app/page.tsx`**

```tsx
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CredibilityStrip from "@/components/CredibilityStrip";
import WhatIDo from "@/components/WhatIDo";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CredibilityStrip />
        <WhatIDo />
      </main>
    </>
  );
}
```

- [ ] **Step 3: Verify visually**

Check: "Expertise" label in blue, three cards in a row on desktop, stacked on mobile. Cards have blue tint, hover lift works. Scroll animations stagger.

- [ ] **Step 4: Commit**

```bash
git add components/WhatIDo.tsx app/page.tsx
git commit -m "feat: add What I Do section with staggered card animations

Co-Authored-By: Claude <noreply@anthropic.com>"
git push
```

---

### Task 7: CaseStudy Component

**Files:**
- Create: `components/CaseStudy.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `components/CaseStudy.tsx`**

```tsx
import ScrollReveal from "@/components/ScrollReveal";

export interface CaseStudyData {
  title: string;
  overview: string;
  challenge: string[];
  whatIDid: string[];
  impact: string[];
  insight: string;
}

interface CaseStudyProps {
  data: CaseStudyData;
  reversed?: boolean;
}

export default function CaseStudy({ data, reversed = false }: CaseStudyProps) {
  const textAnim = reversed ? "fade-right" : "fade-left";

  return (
    <section aria-label={`Case study: ${data.title}`} className="border-t border-border">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 lg:px-20 lg:py-[120px]">
        <ScrollReveal>
          <p className="text-[13px] font-semibold uppercase tracking-[1.5px] text-accent-light">
            Case Study
          </p>
        </ScrollReveal>

        <div className={`mt-6 grid items-start gap-16 lg:gap-16 ${
          reversed
            ? "lg:grid-cols-[1fr_1.3fr]"
            : "lg:grid-cols-[1.3fr_1fr]"
        }`}>
          {/* Image placeholder — renders first in DOM for reversed layout */}
          {reversed && <ImagePlaceholder animation="scale-up" />}

          {/* Text content */}
          <div>
            <ScrollReveal animation={textAnim}>
              <h3 className="text-[32px] font-bold leading-[1.2] text-text-primary">
                {data.title}
              </h3>
            </ScrollReveal>

            <ScrollReveal animation={textAnim} delay={100}>
              <p className="mb-10 mt-4 text-text-body">{data.overview}</p>
            </ScrollReveal>

            <ScrollReveal animation={textAnim} delay={200}>
              <div className="mb-10 grid gap-12 md:grid-cols-2">
                <div>
                  <h4 className="mb-3 text-lg font-semibold text-text-primary">Challenge</h4>
                  <ul className="space-y-1.5">
                    {data.challenge.map((item) => (
                      <li key={item} className="relative pl-4 text-[15px] text-text-body">
                        <span className="absolute left-0 text-accent-light">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 text-lg font-semibold text-text-primary">What I Did</h4>
                  <ul className="space-y-1.5">
                    {data.whatIDid.map((item) => (
                      <li key={item} className="relative pl-4 text-[15px] text-text-body">
                        <span className="absolute left-0 text-accent-light">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-left" delay={300}>
              <div className="mb-6 rounded-r-lg border-l-[3px] border-accent bg-[linear-gradient(90deg,rgba(74,111,165,0.1)_0%,#1a1f2b_100%)] p-8">
                <h4 className="mb-3 text-lg font-semibold text-text-primary">Impact</h4>
                <ul className="space-y-1">
                  {data.impact.map((item) => (
                    <li key={item} className="relative pl-4 text-[15px] text-text-body">
                      <span className="absolute left-0 text-accent-light">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="mb-3 border-l-[3px] border-accent pl-4 text-lg font-semibold italic text-text-primary">
                {data.insight}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <p className="text-[13px] text-text-muted">
                Additional details available upon request.
              </p>
            </ScrollReveal>
          </div>

          {/* Image placeholder — renders second for non-reversed layout */}
          {!reversed && <ImagePlaceholder animation="scale-up" />}
        </div>
      </div>
    </section>
  );
}

function ImagePlaceholder({ animation }: { animation: "scale-up" }) {
  return (
    <ScrollReveal animation={animation} delay={100}>
      <div className="flex min-h-[320px] items-center justify-center rounded-lg border border-border bg-[linear-gradient(135deg,#0f1520_0%,#1a2a3a_40%,#0f1520_100%)] shadow-[0_8px_40px_rgba(0,0,0,0.3),0_0_40px_rgba(74,111,165,0.04)] lg:sticky lg:top-[100px]">
        <span className="text-xs uppercase tracking-[2px] text-accent-light/50">
          Case Study Image
        </span>
      </div>
    </ScrollReveal>
  );
}
```

- [ ] **Step 2: Update `app/page.tsx` with all three case studies**

```tsx
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CredibilityStrip from "@/components/CredibilityStrip";
import WhatIDo from "@/components/WhatIDo";
import CaseStudy, { type CaseStudyData } from "@/components/CaseStudy";

const caseStudies: { data: CaseStudyData; reversed: boolean }[] = [
  {
    data: {
      title: "Scaling a National Digital Promotion with First-Time Ticketless Architecture",
      overview: "Led digital execution for a high-visibility national promotional campaign for a global quick-service restaurant brand, introducing a first-time ticketless participation system across the U.S.",
      challenge: [
        "Millions of users nationwide",
        "Real-time system reliability under peak load",
        "10+ cross-functional stakeholders",
        "High visibility and tight timelines",
      ],
      whatIDid: [
        "Established structured delivery framework",
        "Implemented LIT, MUAT, Pilot testing phases",
        "Built communication and escalation pathways",
        "Partnered with engineering to mitigate risk",
      ],
      impact: [
        "Supported millions of user interactions",
        "Maintained high system uptime",
        "Reduced cross-team ambiguity",
        "Created repeatable execution model",
      ],
      insight: "At scale, execution quality depends on how well the system is coordinated end-to-end.",
    },
    reversed: false,
  },
  {
    data: {
      title: "Delivering a Cashless Reward System with Live Financial Integrations",
      overview: "Led implementation of a cashless reward system for a national campaign, integrating with financial infrastructure partners.",
      challenge: [
        "No sandbox environment (production-based testing)",
        "Integration with external financial systems",
        "Real-time validation and payout flows",
        "High risk of user impact",
      ],
      whatIDid: [
        "Designed controlled production testing strategy",
        "Implemented contingency mechanisms",
        "Coordinated across partners and internal teams",
        "Established real-time monitoring",
      ],
      impact: [
        "Delivered real-time cashless reward system",
        "Enabled high-volume validation and payouts",
        "Maintained strong user experience",
        "Created scalable integration model",
      ],
      insight: "When constraints are high, disciplined execution becomes the advantage.",
    },
    reversed: true,
  },
  {
    data: {
      title: "Building Scalable Delivery Systems Across National Programs",
      overview: "Standardized delivery processes across multiple large-scale digital programs for a global consumer brand.",
      challenge: [
        "Inconsistent workflows",
        "Fragmented communication",
        "Lack of standardized checkpoints",
        "Scaling coordination complexity",
      ],
      whatIDid: [
        "Introduced standardized templates and workflows",
        "Defined delivery phases and checkpoints",
        "Established communication cadence",
        "Aligned teams on operating model",
      ],
      impact: [
        "Improved delivery consistency",
        "Reduced operational friction",
        "Increased cross-team alignment",
        "Built scalable execution framework",
      ],
      insight: "Scalable execution is about system design, not effort.",
    },
    reversed: false,
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CredibilityStrip />
        <WhatIDo />
        {caseStudies.map((cs, i) => (
          <div key={cs.data.title}>
            <div className="section-glow" />
            <CaseStudy data={cs.data} reversed={cs.reversed} />
          </div>
        ))}
      </main>
    </>
  );
}
```

- [ ] **Step 3: Verify visually**

Check: three case studies rendering, alternating layout (1: text-left, 2: text-right, 3: text-left). Blue glow dividers between them. Impact boxes have blue gradient. Scroll animations slide from correct side. Image placeholders are sticky on desktop.

- [ ] **Step 4: Commit**

```bash
git add components/CaseStudy.tsx app/page.tsx
git commit -m "feat: add case study sections with alternating layout and scroll animations

Co-Authored-By: Claude <noreply@anthropic.com>"
git push
```

---

### Task 8: AIProjects Component

**Files:**
- Create: `components/AIProjects.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `components/AIProjects.tsx`**

```tsx
import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  {
    title: "AI Job Search Automation Tool",
    whatItDoes: "Automates job discovery, filtering, and tracking using AI workflows.",
    howItWorks: [
      "Daily job scraping",
      "AI-based relevance filtering",
      "Structured tracking system",
      "Feedback loop for learning",
    ],
    whyItMatters: "Demonstrates how AI can enhance decision-making and reduce manual effort.",
  },
  {
    title: "AI-Powered Task Manager",
    whatItDoes: "A CLI task manager that bridges the terminal and Obsidian, using natural language parsing to capture, organize, and review tasks without friction.",
    howItWorks: [
      "Natural language input — extracts dates, priorities, categories automatically",
      "Two-way Obsidian sync — markdown files, changes sync back",
      "Smart daily summaries — today, this week, next week",
      "Extensible taxonomy — canonical tags and domains",
    ],
    whyItMatters: "Shows how thoughtful system design can eliminate friction between task capture and task review.",
  },
];

export default function AIProjects() {
  return (
    <section aria-label="AI Projects" className="mx-auto max-w-content px-6 py-20 md:px-10 lg:px-20 lg:py-[120px]">
      <ScrollReveal>
        <p className="text-[13px] font-semibold uppercase tracking-[1.5px] text-accent-light">
          Projects
        </p>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <h2 className="mb-14 mt-4 text-[44px] font-bold leading-[1.2] text-text-primary">
          AI Projects
        </h2>
      </ScrollReveal>
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={200 + i * 100}>
            <div className="rounded-lg border border-border bg-[linear-gradient(180deg,rgba(74,111,165,0.04)_0%,transparent_100%)] p-10 transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(74,111,165,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
              <h3 className="mb-4 text-[22px] font-semibold text-text-primary">
                {project.title}
              </h3>
              <h4 className="mt-5 mb-2 text-[15px] font-semibold text-text-primary">What it does</h4>
              <p className="text-[15px] text-text-body">{project.whatItDoes}</p>
              <h4 className="mt-5 mb-2 text-[15px] font-semibold text-text-primary">How it works</h4>
              <ul className="space-y-1">
                {project.howItWorks.map((item) => (
                  <li key={item} className="relative pl-4 text-[15px] text-text-body">
                    <span className="absolute left-0 text-accent-light">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <h4 className="mt-5 mb-2 text-[15px] font-semibold text-text-primary">Why it matters</h4>
              <p className="text-[15px] text-text-body">{project.whyItMatters}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to `app/page.tsx`**

Add import `import AIProjects from "@/components/AIProjects";` and render after the case studies loop:

```tsx
<div className="section-glow" />
<AIProjects />
```

- [ ] **Step 3: Verify visually**

Check: two cards side by side on desktop, stacked on mobile. Blue tint background, hover lift. Content matches copy doc.

- [ ] **Step 4: Commit**

```bash
git add components/AIProjects.tsx app/page.tsx
git commit -m "feat: add AI Projects section with two project cards

Co-Authored-By: Claude <noreply@anthropic.com>"
git push
```

---

### Task 9: About Component

**Files:**
- Create: `components/About.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `components/About.tsx`**

```tsx
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <section id="about" aria-label="About" className="mx-auto max-w-content px-6 py-20 md:px-10 lg:px-20 lg:py-[120px]">
      <ScrollReveal>
        <p className="text-[13px] font-semibold uppercase tracking-[1.5px] text-accent-light">
          About
        </p>
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <h2 className="mb-14 mt-4 text-[44px] font-bold leading-[1.2] text-text-primary">
          About Me
        </h2>
      </ScrollReveal>
      <div className="max-w-about">
        <ScrollReveal delay={200}>
          <p className="mb-8 text-[19px] font-medium leading-[1.8] text-text-primary">
            I&apos;m a digital leader focused on executing complex programs at scale.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <p className="mb-8 text-[17px] leading-[1.8] text-text-body">
            I&apos;ve led high-visibility national campaigns across North America, working across product, engineering, and operations to deliver under real-world constraints.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <p className="text-[17px] leading-[1.8] text-text-body">
            I&apos;m now focused on applying AI to transform how digital systems are designed and executed — combining structured delivery with emerging technologies to unlock new levels of efficiency and impact.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to `app/page.tsx`**

Add import and render after AI Projects:

```tsx
<div className="section-glow" />
<About />
```

- [ ] **Step 3: Verify visually**

Check: lead paragraph is white + medium weight, remaining paragraphs in body color. Max-width ~680px. Scroll animations stagger.

- [ ] **Step 4: Commit**

```bash
git add components/About.tsx app/page.tsx
git commit -m "feat: add About section with elevated lead paragraph

Co-Authored-By: Claude <noreply@anthropic.com>"
git push
```

---

### Task 10: CTA + Footer Components

**Files:**
- Create: `components/CTA.tsx`, `components/Footer.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create `components/CTA.tsx`**

```tsx
"use client";

import { useEffect, useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function CTA() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".cta-glow").forEach((g) =>
            g.classList.add("opacity-100")
          );
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="connect"
      aria-label="Connect"
      ref={glowRef}
      className="relative overflow-hidden border-t border-[rgba(74,111,165,0.15)] bg-surface"
    >
      {/* Glows */}
      <div className="cta-glow pointer-events-none absolute -bottom-[120px] left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(74,111,165,0.2)_0%,transparent_60%)] opacity-0 blur-[60px] transition-opacity duration-1000" />
      <div className="cta-glow pointer-events-none absolute -bottom-[60px] left-[30%] h-[300px] w-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(90,138,191,0.1)_0%,transparent_60%)] opacity-0 blur-[50px] transition-opacity delay-200 duration-1000" />

      <div className="relative z-10 mx-auto max-w-content px-6 py-20 text-center md:px-10 lg:px-20 lg:py-[120px]">
        <ScrollReveal>
          <p className="text-[13px] font-semibold uppercase tracking-[1.5px] text-accent-light">
            Connect
          </p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="mb-6 mt-4 text-4xl font-bold text-text-primary">
            Let&apos;s Connect
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="mb-10 text-[17px] text-text-body">
            Open to opportunities and conversations around digital leadership, AI-driven execution, and product operations.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/sarun-teeravechyan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-accent px-7 py-3.5 text-[15px] text-white shadow-[0_0_20px_rgba(74,111,165,0.2)] transition-all hover:bg-accent-light hover:shadow-[0_0_30px_rgba(74,111,165,0.35)]"
            >
              LinkedIn
            </a>
            <a
              href="mailto:steerave@gmail.com"
              className="inline-block rounded-md border border-[rgba(74,111,165,0.4)] bg-transparent px-7 py-3.5 text-[15px] text-accent-light transition-all hover:border-accent-light hover:bg-[rgba(74,111,165,0.1)] hover:text-white"
            >
              Email
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create `components/Footer.tsx`**

```tsx
export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-6 text-center text-[13px] text-text-muted">
      © 2026 Sarun (Joe) Teeravechyan
    </footer>
  );
}
```

- [ ] **Step 3: Update `app/page.tsx` — final assembly**

Add imports for CTA and Footer. Final page.tsx structure:

```tsx
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CredibilityStrip from "@/components/CredibilityStrip";
import WhatIDo from "@/components/WhatIDo";
import CaseStudy, { type CaseStudyData } from "@/components/CaseStudy";
import AIProjects from "@/components/AIProjects";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const caseStudies: { data: CaseStudyData; reversed: boolean }[] = [
  {
    data: {
      title: "Scaling a National Digital Promotion with First-Time Ticketless Architecture",
      overview: "Led digital execution for a high-visibility national promotional campaign for a global quick-service restaurant brand, introducing a first-time ticketless participation system across the U.S.",
      challenge: [
        "Millions of users nationwide",
        "Real-time system reliability under peak load",
        "10+ cross-functional stakeholders",
        "High visibility and tight timelines",
      ],
      whatIDid: [
        "Established structured delivery framework",
        "Implemented LIT, MUAT, Pilot testing phases",
        "Built communication and escalation pathways",
        "Partnered with engineering to mitigate risk",
      ],
      impact: [
        "Supported millions of user interactions",
        "Maintained high system uptime",
        "Reduced cross-team ambiguity",
        "Created repeatable execution model",
      ],
      insight: "At scale, execution quality depends on how well the system is coordinated end-to-end.",
    },
    reversed: false,
  },
  {
    data: {
      title: "Delivering a Cashless Reward System with Live Financial Integrations",
      overview: "Led implementation of a cashless reward system for a national campaign, integrating with financial infrastructure partners.",
      challenge: [
        "No sandbox environment (production-based testing)",
        "Integration with external financial systems",
        "Real-time validation and payout flows",
        "High risk of user impact",
      ],
      whatIDid: [
        "Designed controlled production testing strategy",
        "Implemented contingency mechanisms",
        "Coordinated across partners and internal teams",
        "Established real-time monitoring",
      ],
      impact: [
        "Delivered real-time cashless reward system",
        "Enabled high-volume validation and payouts",
        "Maintained strong user experience",
        "Created scalable integration model",
      ],
      insight: "When constraints are high, disciplined execution becomes the advantage.",
    },
    reversed: true,
  },
  {
    data: {
      title: "Building Scalable Delivery Systems Across National Programs",
      overview: "Standardized delivery processes across multiple large-scale digital programs for a global consumer brand.",
      challenge: [
        "Inconsistent workflows",
        "Fragmented communication",
        "Lack of standardized checkpoints",
        "Scaling coordination complexity",
      ],
      whatIDid: [
        "Introduced standardized templates and workflows",
        "Defined delivery phases and checkpoints",
        "Established communication cadence",
        "Aligned teams on operating model",
      ],
      impact: [
        "Improved delivery consistency",
        "Reduced operational friction",
        "Increased cross-team alignment",
        "Built scalable execution framework",
      ],
      insight: "Scalable execution is about system design, not effort.",
    },
    reversed: false,
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CredibilityStrip />
        <WhatIDo />
        {caseStudies.map((cs) => (
          <div key={cs.data.title}>
            <div className="section-glow" />
            <CaseStudy data={cs.data} reversed={cs.reversed} />
          </div>
        ))}
        <div className="section-glow" />
        <AIProjects />
        <div className="section-glow" />
        <About />
      </main>
      <CTA />
      <Footer />
    </>
  );
}
```

- [ ] **Step 4: Verify full page**

Run `npm run dev`. Scroll through entire page top to bottom:
- Nav sticky with blur ✓
- Hero loads with staggered animation + image placeholder ✓
- Credibility numbers count up ✓
- What I Do cards stagger in ✓
- Three case studies alternate sides ✓
- Blue glow dividers between sections ✓
- AI Projects two cards ✓
- About with elevated lead paragraph ✓
- CTA with glows fading in ✓
- Footer copyright ✓
- All anchor links scroll to correct sections ✓
- Mobile responsive: check at 375px viewport ✓

- [ ] **Step 5: Commit**

```bash
git add components/CTA.tsx components/Footer.tsx app/page.tsx
git commit -m "feat: add CTA section with glow animation and footer, complete page assembly

Co-Authored-By: Claude <noreply@anthropic.com>"
git push
```

---

### Task 11: README + CHANGELOG + Final Polish

**Files:**
- Create: `README.md`, `CHANGELOG.md`
- Modify: `WORKING_NOTES.md`

- [ ] **Step 1: Create `README.md`**

```markdown
# Sarun (Joe) Teeravechyan — Portfolio Site

Personal portfolio website showcasing digital leadership experience and AI projects.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Deployed on Vercel

## Features

- Blue-tinted dark theme inspired by Stripe/Linear/Vercel
- Scroll-triggered animations with IntersectionObserver
- Count-up credibility stats
- Alternating case study layouts
- Fully responsive (mobile, tablet, desktop)
- SVG favicon
- SEO meta tags and Open Graph support

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/            → Root layout, page, global styles
components/     → Modular section components
public/         → Static assets
```

## Deployment

Deployed automatically via Vercel on push to `main`.
```

- [ ] **Step 2: Create `CHANGELOG.md`**

```markdown
# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- Full single-page portfolio site with 9 sections
- Blue-tinted dark theme with custom color palette
- Scroll-triggered animations (fade, slide, scale)
- Count-up animation on credibility strip numbers
- Alternating case study layouts with image placeholders
- AI Projects section with Job Search Tool and Task Manager cards
- Sticky nav with backdrop blur and smooth scroll anchor links
- CTA section with radial blue glow effects
- SVG "ST" monogram favicon
- SEO metadata and Open Graph tags
- Fully responsive design across mobile, tablet, and desktop
- Reduced motion support for accessibility
```

- [ ] **Step 3: Run production build to verify no errors**

```bash
npm run build
```

Expected: Build succeeds with no errors.

- [ ] **Step 4: Update `WORKING_NOTES.md`**

Update the "Current Status" and "Session Log" sections to reflect the completed build.

- [ ] **Step 5: Commit**

```bash
git add README.md CHANGELOG.md WORKING_NOTES.md
git commit -m "docs: add README, CHANGELOG, and update working notes

Co-Authored-By: Claude <noreply@anthropic.com>"
git push
```

---

## Summary

| Task | Component | Type |
|---|---|---|
| 1 | Project scaffold + git | Setup |
| 2 | ScrollReveal | Animation foundation |
| 3 | Nav | Server Component |
| 4 | Hero | Server Component (CSS animations) |
| 5 | CredibilityStrip | Client Component (count-up) |
| 6 | WhatIDo | Server Component + ScrollReveal |
| 7 | CaseStudy (×3) | Server Component + ScrollReveal |
| 8 | AIProjects | Server Component + ScrollReveal |
| 9 | About | Server Component + ScrollReveal |
| 10 | CTA + Footer | Client + Server Components |
| 11 | README + CHANGELOG | Docs |
