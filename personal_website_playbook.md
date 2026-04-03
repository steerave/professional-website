# Personal Website Build Playbook (Updated)

## Overview
This document contains the full workflow to design and build a high-end executive personal website using AI tools. Updated based on hands-on experience — the original Framer and v0 steps have been replaced with a streamlined Claude Code-first approach.

---

## Tools Used
- Claude Code (Build)
- Vercel (Hosting + Deployment)
- GitHub (Version control + Vercel integration)

**Tools evaluated and skipped:**
- Framer — useful for structure wireframing (Wireframer AI), but does not produce visual design automatically. Applying a dark theme requires manual work in Framer's editor, defeating the purpose of using it as a design accelerator. Not worth the friction if your destination is a real codebase.
- v0 by Vercel — redundant if using Claude Code. Adds a middle step without meaningful benefit for this type of project.

---

## Project Documents
Before starting the build, create and maintain these four files in your project root:

| File | Purpose |
|---|---|
| `CLAUDE.md` | Project guidelines, workflow rules, references other docs. Claude Code reads this automatically. |
| `DESIGN_SYSTEM.md` | All visual specs — colors, typography, spacing, components. Single source of truth for design. |
| `personal_website_copy.md` | All approved copy. Single source of truth for content. Never edit copy in code — update here first. |
| `WORKING_NOTES.md` | Living log of decisions made, current status, open questions, next steps. Update after every session. |

---

## STEP 1 — WRITE YOUR COPY FIRST

Before touching any tool, write your real content. This is the hardest and most important step. No tool can do it for you, and weak content in a beautiful template will not convert.

You need:
- A hero headline and subheadline that are specific to you
- Real credibility stats you can stand behind
- Case studies with actual challenge, actions, and impact
- A genuine about section

**Guidelines:**
- Be specific. Generic copy ("digital leader delivering results") describes thousands of people.
- Use numbers where you can verify them. Leave out numbers you cannot stand behind.
- De-identify client work but keep the specificity of what you did and what happened.
- Copy doc is the single source of truth. All copy goes there first, then into the build.

---

## STEP 2 — CREATE PROJECT DOCUMENTS

Set up your four project documents before writing a single line of code. This saves significant time across multiple sessions and keeps Claude Code working consistently.

**Start your Next.js project:**
```bash
npx create-next-app@latest your-portfolio-name
cd your-portfolio-name
```

Then add your four documents to the project root. See the templates for each in the project files.

---

## STEP 3 — BUILD WITH CLAUDE CODE

Claude Code is the only build tool in this workflow. Give it a detailed prompt that includes:
- Tech stack (Next.js 14, Tailwind CSS)
- Design direction (reference DESIGN_SYSTEM.md)
- All copy (reference personal_website_copy.md)
- Section structure and component layout rules
- Technical requirements (responsive, sticky nav, meta tags, smooth scroll)

**Prompting tips:**
- Tell Claude Code what NOT to do as much as what to do (no decorative elements, do not compress spacing, do not invent copy)
- Reference the design system explicitly — "use the color and spacing values in DESIGN_SYSTEM.md"
- Ask for one section at a time if the full build feels unmanageable
- Expect 2–3 rounds of iteration. First pass gets structure right. Second pass refines typography and spacing. Third pass handles mobile.

**At the start of every Claude Code session:**
1. Claude Code reads CLAUDE.md automatically
2. You read WORKING_NOTES.md to know where you left off
3. At the end of every session, update WORKING_NOTES.md

---

## STEP 4 — DEPLOY TO VERCEL

Vercel is the natural hosting choice for a Next.js site. It is fast, free for personal projects, and deploys automatically from GitHub.

### Why Vercel
- Built by the same team as Next.js — zero configuration required
- Automatic deployments on every GitHub push
- Free SSL certificate (HTTPS) included
- Free tier is sufficient for a personal portfolio site
- Built-in analytics available on free tier
- Preview deployments for every branch — useful for testing changes before going live

### Hosting Setup (One Time)

**1. Push your project to GitHub**
```bash
git init
git add .
git commit -m "initial build"
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

**2. Connect to Vercel**
- Go to vercel.com and sign up with your GitHub account
- Click "Add New Project"
- Import your GitHub repository
- Vercel auto-detects Next.js — no configuration needed
- Click Deploy
- Your site is live at a vercel.app subdomain within minutes

**3. Connect a custom domain**
A custom domain looks significantly more professional than a vercel.app subdomain. Budget ~$15/year.

Recommended registrars:
- Namecheap
- Google Domains (now Squarespace Domains)
- Cloudflare Domains (cheapest, no markup)

Domain suggestions: yourname.com, yourfirstnamelastname.com, yourfirstnameinitial.co

Once you have a domain:
- Go to your project in Vercel dashboard → Settings → Domains
- Add your domain
- Vercel gives you DNS records to add at your registrar
- Propagates within minutes to a few hours

### Ongoing Deployment Workflow
After initial setup, deployment is automatic:
```bash
git add .
git commit -m "describe what you changed"
git push
```
Vercel detects the push and deploys automatically. Your live site updates within 30–60 seconds.

### What the Free Tier Includes
- Unlimited personal projects
- 100GB bandwidth per month (more than enough for a portfolio)
- Automatic HTTPS
- Global CDN
- Vercel Analytics (basic)

You do not need a paid Vercel plan for a personal portfolio site.

---

## Site Structure

Sections in order:
1. Nav (sticky, Joe T left / anchor links right)
2. Hero
3. Credibility Strip
4. What I Do (3 columns)
5. Case Studies (3 studies, full-width sections)
6. AI Projects
7. About
8. CTA

**Sections removed from original playbook:**
- "How I Think" — cut because quote-card format felt generic. Case studies carry the narrative weight instead.

---

## Final Notes

- Write copy first, build second
- CLAUDE.md and DESIGN_SYSTEM.md save significant time across sessions — set them up before you start
- Claude Code does not need a visual mockup if your design direction is written clearly
- Vercel is free, fast, and requires zero configuration for Next.js
- Buy a domain — it matters for the impression you make
- Update WORKING_NOTES.md at the end of every session
