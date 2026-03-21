# MiniNature Reserve — Platform Redesign v3

A Next.js 15 + Tailwind CSS platform redesign for [MiniNature Reserve](https://www.mininature.org/).

## Stack

- **Framework**: Next.js 15 (App Router, Turbopack)
- **Styling**: Tailwind CSS 4 + custom design tokens
- **Map**: Leaflet.js (dynamic import, SSR-safe)
- **Icons**: Lucide React
- **Animation**: CSS keyframes + Intersection Observer count-up
- **Fonts**: Playfair Display · Inter · DM Mono

## Getting Started

```bash
npm install
npm run dev
# → http://localhost:3001
```

## Key Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, impact bar, map preview, how-it-works, featured reserves |
| `/explore` | Explore landing |
| `/explore/map` | Full interactive map with filters + two-panel layout |
| `/explore/reserves` | Reserve directory |
| `/explore/reserves/[slug]` | Individual reserve profile page |
| `/get-involved` | Get Involved landing |
| `/get-involved/start-a-reserve` | ★ Primary growth page + application form |
| `/support/donate` | Donation page with ecological amount presets |
| `/about/mission` | Mission + What is an MNR |

## Design System

### Colors
| Token | Hex | Use |
|-------|-----|-----|
| `reserve-green` | `#1B4332` | Primary base, nav, secondary CTAs |
| `deep-forest` | `#0D2B1F` | Dark text, footer |
| `hummingbird-gold` | `#E8A838` | Primary action CTA |
| `california-poppy` | `#E86A2E` | Warm accent |
| `sage` | `#8FAF7E` | Tertiary highlights |
| `adoptable` | `#52B788` | Adoption status |
| `fog-white` | `#F5F3EE` | Page background |
| `mint-mist` | `#E8F1EC` | Section backgrounds |
| `lichen-cream` | `#EAE8E0` | Card backgrounds |

### Buttons
```html
<button class="btn btn-primary">Gold pill — primary CTA</button>
<button class="btn btn-secondary">Green pill — secondary CTA</button>
<button class="btn btn-outline">Outlined pill</button>
<button class="btn btn-outline-white">White outlined (dark bg)</button>
```

### Cards
```html
<div class="card-organic">Rounded 24px card with hover lift</div>
```

## Architecture

```
src/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx                # Root layout (Nav + Footer)
│   ├── not-found.tsx
│   ├── explore/
│   │   ├── page.tsx
│   │   ├── map/page.tsx + MapPageClient.tsx
│   │   └── reserves/
│   │       ├── page.tsx
│   │       └── [slug]/page.tsx
│   ├── get-involved/
│   │   ├── page.tsx
│   │   └── start-a-reserve/page.tsx
│   ├── support/donate/page.tsx
│   └── about/mission/page.tsx
├── components/
│   ├── layout/  TopNav.tsx · Footer.tsx
│   ├── home/    HeroSection · ImpactBar · MapPreview · HowItWorks
│   │            FeaturedReserves · PillarsSection · Testimonials · FinalCTA
│   ├── map/     MiniMapEmbed.tsx (Leaflet, dynamic)
│   └── ui/      ReserveCard.tsx · StatCounter.tsx
├── lib/data.ts                   # Sample data
└── types/index.ts                # TypeScript interfaces
```

## Phase Roadmap

### Phase 1 ✓ (This build)
Navigation · Homepage · Map · Reserve profiles · Key conversion pages · Design system

### Phase 2
CMS integration (Sanity/Contentful) · Form backends · Events calendar · Indigenous knowledge page

### Phase 3
School/ViviServe leaderboard · Adopt-a-Square habitat grid · Biodiversity sighting logs · Before/after slider

### Phase 4
Volunteer accounts · Reserve health dashboards · Per-reserve fundraiser pages · Partner portal
