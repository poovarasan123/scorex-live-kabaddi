# ScoreX — Premium Landing Page

A dark, sports-tech landing page for the ScoreX Kabaddi scoring app. Built as a pure static site so it drops straight onto cPanel/shared hosting.

## Stack

Rescaffold the project from the current TanStack Start template to a clean **Vite + React + JavaScript** setup.

- Vite (React + JS template)
- React Router DOM
- Tailwind CSS (with custom theme tokens for the orange/dark palette)
- Framer Motion (animations, scroll reveals, parallax)
- Lucide React (icons)
- react-countup (animated stats)
- Output: static `dist/` — uploadable to cPanel as-is. Includes `.htaccess` for SPA route fallback.

## Folder structure

```text
public/
  logo.png                  (user-uploaded ScoreX logo, copied here)
  screenshots/1..8.png      (placeholder PNGs, swap later)
  .htaccess                 (SPA fallback for cPanel/Apache)
src/
  main.jsx
  App.jsx                   (Router + Routes)
  index.css                 (Tailwind + theme tokens)
  components/
    Navbar.jsx
    Footer.jsx
    Hero.jsx
    Stats.jsx
    Features.jsx
    Screenshots.jsx
    HowItWorks.jsx
    Offline.jsx
    WhyScoreX.jsx
    Testimonials.jsx
    FAQ.jsx
    CTA.jsx
    PhoneMockup.jsx
    ui/SectionHeading.jsx
  pages/
    Home.jsx
    NotFound.jsx
  hooks/useInViewOnce.js
  assets/                   (any imported images)
```

## Sections (single-page Home)

1. **Navbar** — sticky, glass blur, logo + nav links + Download CTA
2. **Hero** — split layout. Left: headline, subtext, Download + Watch Demo buttons. Right: animated stacked phone mockups with floating sports glyphs (whistle, scoreboard). Gradient glow background.
3. **Stats** — 4 CountUp counters (Matches Managed, Teams Scored, Tournament Support, Offline Reliability)
4. **Features** — grid of cards with Lucide icons for: Real-time scoring, Raid actions (Out/Bonus/Lona/Super Raid/Super Tackle), Match controls (Timeouts/Cards/Reservations/Subs), Offline-first, Fast workflow, Pro match management, Reusable Compose architecture. Scroll-in animations.
5. **Screenshots Gallery** — desktop: alternating zig-zag rows with phone frame + copy; mobile: swipe carousel (Framer Motion drag). Hover zoom + parallax.
6. **How It Works** — vertical timeline with animated connector line drawing on scroll. 5 steps.
7. **Offline-First** — visual flow: Device → Local Storage → Sync. Animated pulses on each node.
8. **Why ScoreX** — two comparison cards side-by-side: Manual vs ScoreX, with check/x icons.
9. **Testimonials** — 3 sample cards (organizer, referee, tournament director) with avatars.
10. **FAQ** — animated accordion (4 items).
11. **CTA** — gradient block, "Run Kabaddi Matches Like a Pro" + Download / Contact buttons.
12. **Footer** — logo, quick links, social icons, copyright.

## Design system

- Background base: `#0F172A`, surface `#111827`, elevated `#1E293B`
- Primary: `#FF6B00`, accent `#FF8C42`
- Gradient: `linear-gradient(135deg, #FF6B00, #FF8C42)`
- Subtle radial orange glows behind hero and CTA
- Glassmorphism cards: `bg-white/5 backdrop-blur border border-white/10`
- Typography: Inter for body, **Space Grotesk** (or similar bold display) for headings via Google Fonts
- Rounded-2xl, generous spacing, strong visual hierarchy

## Animation pattern

A reusable `useInViewOnce` hook + Framer Motion `motion.div` variants for fade-up / scale-in. Hero gets a staggered entrance. Phone mockups float with infinite `y` keyframes. Timeline connector uses `pathLength` SVG animation tied to scroll.

## Performance

- Vite code splitting (route-level via `React.lazy` even though it's single page — keeps NotFound out of main bundle)
- `loading="lazy"` + `decoding="async"` on all `<img>`
- `framer-motion` LazyMotion + domAnimation to shrink bundle
- Preload hero phone images, lazy everything else
- Compress placeholder PNGs

## SEO

- `index.html` with full meta: title, description, keywords, OG tags, Twitter card, theme-color
- JSON-LD `SoftwareApplication` schema
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`, single `<h1>`)
- `robots.txt` + `sitemap.xml` in `public/`
- Alt text on every image

## Assets

- ScoreX logo (uploaded) → `public/logo.png` + favicon variants
- 8 screenshots → solid dark placeholder PNGs at `public/screenshots/1..8.png` with the slot number stamped on them, so the layout looks intentional until you swap them

## Deployment notes for cPanel

After `npm run build`, upload everything inside `dist/` to `public_html/`. The included `.htaccess` rewrites unknown paths to `index.html` so React Router deep links work.

## Out of scope

- No backend, no forms wired to email/CRM (Contact button links to `mailto:`)
- No real analytics — placeholder for GA if you want it later
- Real screenshot images are placeholders; swap the 8 PNGs in `public/screenshots/` after build
