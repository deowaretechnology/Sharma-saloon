# Sharma's Salon — Home Page

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

Every home page section is its own component under `src/components/`:

- `TopBar.tsx` — thin info bar (hours, location, socials, call now)
- `Navbar.tsx` — sticky header with logo, nav links, search, Book Appointment
- `Hero.tsx` — cinematic video hero, 3-slide auto-rotation, mute toggle
  with slow audio fade-in, scroll indicator
- `TrustStrip.tsx` — 6 USP icons
- `PopularServices.tsx` — service cards grid
- `ForHimHer.tsx` — "Beauty Has No Gender" 3-column unisex section
- `About.tsx` — brand story + stats
- `LatestReels.tsx` — Instagram-style reels grid
- `Gallery.tsx` — filterable transformation gallery
- `Testimonials.tsx` — client review carousel
- `FinalCTA.tsx` — booking call-to-action banner
- `Blog.tsx` — beauty tips articles
- `QuickBenefits.tsx` — small benefits strip
- `Footer.tsx` — links, contact, Google Map embed, legal bar, back-to-top

All copy/data lives in `src/lib/data.ts` — edit that file to change phone
number, address, services, gallery items, testimonials, blog posts, etc.
without touching component code.

## Placeholder assets (swap these before going live)

- **Images** — every photo currently points to `picsum.photos` (random
  stock placeholders) so the layout looks complete immediately. Replace
  each `image:`/`src` in `src/lib/data.ts` and the section components with
  your real salon photography.
- **Hero videos** — see `public/videos/README.txt`. Drop in
  `hero-1.mp4`, `hero-2.mp4`, `hero-3.mp4`.
- **Logo** — currently a plain "S" monogram in the navbar/footer. Replace
  with an `<img>` pointing at your real logo file once you have it, same
  way as the earlier Vite project.

## Notes

- Google Fonts (Playfair Display, Poppins, Yellowtail) load via
  `next/font/google` — needs internet access at build time.
- The footer map uses a no-API-key Google Maps embed
  (`google.com/maps?q=...&output=embed`) — swap the query for your exact
  address/pin.
