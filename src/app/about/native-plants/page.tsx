import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Native Plants",
  description: "A guide to the California native plant species used in MiniNature Reserves — and why each one matters for urban wildlife.",
};

const PLANTS = [
  {
    commonName: "California Fuchsia",
    scientificName: "Epilobium canum",
    emoji: "🌺",
    bloomSeason: "Aug – Nov",
    height: "1–3 ft",
    water: "Very Low",
    wildlife: ["Hummingbirds", "Native bees", "Butterflies"],
    description: "One of the most reliable late-season bloomers, providing critical nectar for hummingbirds during fall migration. Fiery scarlet-orange tubular flowers on silver-green foliage.",
    funFact: "Hummingbirds were spotted at La Mariposa Reserve within the first week of installation, drawn by this species.",
    category: "Perennial",
  },
  {
    commonName: "Hummingbird Sage",
    scientificName: "Salvia spathacea",
    emoji: "💜",
    bloomSeason: "Mar – May",
    height: "1–2 ft",
    water: "Low",
    wildlife: ["Hummingbirds", "Bumblebees"],
    description: "Large, fragrant magenta flowers on tall spikes rise above spreading aromatic ground cover. One of the most shade-tolerant California sages.",
    funFact: "The leaves smell like fresh fruit when crushed — a favorite with school children during reserve walks.",
    category: "Perennial",
  },
  {
    commonName: "Coyote Mint",
    scientificName: "Monardella villosa",
    emoji: "🟣",
    bloomSeason: "Jun – Sep",
    height: "0.5–1.5 ft",
    water: "Very Low",
    wildlife: ["Native bees", "Hoverflies", "Skippers"],
    description: "A compact, aromatic native mint with dense round lavender flower heads. A pollinator powerhouse that supports dozens of bee species.",
    funFact: "Studies show Coyote Mint supports over 40 native bee species — more than almost any other California plant of its size.",
    category: "Perennial",
  },
  {
    commonName: "California Poppy",
    scientificName: "Eschscholzia californica",
    emoji: "🟠",
    bloomSeason: "Mar – May",
    height: "0.5–1.5 ft",
    water: "Very Low",
    wildlife: ["Native bees", "Pollen beetles", "Butterflies"],
    description: "California's state flower. Self-seeds prolifically and naturalizes in sunny disturbed soils. The vivid orange blooms open in sunlight and close on overcast days.",
    funFact: "California Poppy seeds can remain viable in soil for up to 80 years, waiting for the right conditions to bloom.",
    category: "Annual",
  },
  {
    commonName: "White Sage",
    scientificName: "Salvia apiana",
    emoji: "⚪",
    bloomSeason: "Apr – Jul",
    height: "3–5 ft",
    water: "Very Low",
    wildlife: ["Carpenter bees", "Native bees", "Birds"],
    description: "Iconic white-silver aromatic shrub with deep cultural significance to Chumash people. We plant White Sage only in partnership with indigenous community members.",
    funFact: "White Sage is sacred in Chumash ceremony. Commercial over-harvesting is threatening wild populations — please do not purchase or harvest wild sage bundles.",
    category: "Shrub",
    chumash: true,
  },
  {
    commonName: "Toyon",
    scientificName: "Heteromeles arbutifolia",
    emoji: "🔴",
    bloomSeason: "Jun – Jul (berries: winter)",
    height: "6–15 ft",
    water: "Low",
    wildlife: ["Mockingbirds", "Cedar waxwings", "Thrushes"],
    description: "A large native shrub with showy white summer flowers and spectacular red berries in winter. The plant that gave Hollywood its name. A cornerstone of the bird-friendly reserve.",
    funFact: "The name 'Hollywood' likely derives from early English settlers misidentifying Toyon as English Holly.",
    category: "Shrub",
  },
  {
    commonName: "Sticky Monkeyflower",
    scientificName: "Diplacus aurantiacus",
    emoji: "🟡",
    bloomSeason: "Mar – Sep",
    height: "2–4 ft",
    water: "Low",
    wildlife: ["Hummingbirds", "Native bees", "Sphinx moths"],
    description: "A versatile, long-blooming shrub with sticky leaves and tubular orange-yellow flowers. Highly adaptable and reliable across most reserve site conditions.",
    funFact: "Individual Sticky Monkeyflower plants can bloom continuously for 6 months in coastal Southern California.",
    category: "Shrub",
  },
  {
    commonName: "Coastal Buckwheat",
    scientificName: "Eriogonum parvifolium",
    emoji: "🌾",
    bloomSeason: "Jun – Oct",
    height: "1–2 ft",
    water: "Very Low",
    wildlife: ["Acmon blue butterfly", "Native bees", "Birds (seeds)"],
    description: "A sprawling, mat-forming shrublet with creamy-white to pinkish flower clusters. Essential larval host plant for several butterfly species, particularly the Acmon Blue.",
    funFact: "Buckwheat is the host plant for 7 species of native California blue butterflies — a butterfly reserve is almost impossible without it.",
    category: "Shrub",
  },
];

const CATEGORIES = ["All", "Annual", "Perennial", "Shrub"];
const WATER_COLORS: Record<string, string> = {
  "Very Low": "bg-sage/20 text-deep-forest",
  "Low": "bg-mint-mist text-reserve-green",
  "Moderate": "bg-hummingbird-gold/15 text-deep-forest",
};

export default function NativePlantsPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      <section className="bg-reserve-green text-white section-pad">
        <div className="container-site">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono-accent uppercase tracking-widest text-sage">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <span>/</span>
            <span>Native Plants</span>
          </div>
          <div className="max-w-2xl">
            <Leaf size={32} className="text-hummingbird-gold mb-4" />
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Why Native Plants?
            </h1>
            <p className="text-sage text-lg leading-relaxed">
              California native plants are uniquely adapted to our environment, provide vital
              habitat for wildlife, and bring natural beauty to our communities. Protecting
              and promoting them is key to a healthier, more resilient future.
            </p>
          </div>
        </div>
      </section>

      {/* Climate context */}
      <section className="bg-deep-forest text-white py-14">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-4xl">
            <div>
              <div className="text-xs font-mono-accent uppercase tracking-widest text-hummingbird-gold mb-3">
                Fastest-Warming Ventura County
              </div>
              <h2 className="font-display font-bold text-2xl md:text-3xl mb-4 leading-tight">
                Our region is on the frontlines of climate change
              </h2>
              <p className="text-sage leading-relaxed mb-6">
                MiniNature Reserve is based in Ventura County — the fastest-warming county in
                the continental United States. This region faces hotter heat waves, longer
                droughts, and severe wildfires.
              </p>
              <blockquote className="border-l-4 border-hummingbird-gold pl-4">
                <p className="text-sage italic text-sm leading-relaxed">
                  &ldquo;Ventura County has warmed 4.7&deg;F since 1895 — twice the global average.&rdquo;
                </p>
                <cite className="text-xs text-forest-mid mt-2 block not-italic">
                  — National Oceanic and Atmospheric Administration (NOAA)
                </cite>
              </blockquote>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Biodiversity Support", desc: "Native plants provide essential habitat and food for local wildlife, insects, birds, and pollinators.", emoji: "🐝" },
                { title: "Water Conservation", desc: "Adapted to local climates, native plants need far less water than non-native species — critical in drought-prone regions.", emoji: "💧" },
                { title: "Reduced Soil Erosion", desc: "Deep-rooted native plants stabilize soil and prevent erosion, especially important on riverbanks and coastal areas.", emoji: "🌍" },
                { title: "Improved Air Quality", desc: "Native vegetation filters pollutants from the air — especially valuable in dense urban areas.", emoji: "💨" },
                { title: "Carbon Sequestration", desc: "Native vegetation absorbs CO₂, mitigating the effects of climate change by reducing greenhouse gas concentrations.", emoji: "🌿" },
                { title: "Low Maintenance", desc: "Well-adapted to local conditions, native plants reduce the need for fertilizers, pesticides, and excessive upkeep.", emoji: "✅" },
              ].map((b) => (
                <div key={b.title} className="bg-white/10 rounded-2xl p-4">
                  <span className="text-xl">{b.emoji}</span>
                  <h3 className="text-sm font-semibold mt-2 mb-1">{b.title}</h3>
                  <p className="text-xs text-sage leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Species guide divider */}
      <section className="container-site pt-16 pb-4">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-2">
          Native Plants in Action
        </h2>
        <p className="text-forest-mid mb-2">
          Every plant in a MiniNature Reserve is chosen for ecological function, cultural
          significance, and resilience. Here are the species that form the backbone of our network.
        </p>
      </section>

      {/* Filter */}
      <div className="sticky top-[64px] z-30 bg-white border-b border-lichen-cream shadow-sm">
        <div className="container-site py-3 flex gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                c === "All"
                  ? "bg-reserve-green text-white border-reserve-green"
                  : "bg-white text-forest-mid border-lichen-cream hover:border-reserve-green hover:text-reserve-green"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <section className="container-site pb-12 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PLANTS.map((plant) => (
            <div key={plant.commonName} className="card-organic bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl shrink-0">{plant.emoji}</div>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-1">
                    <span className="reserve-type-badge bg-lichen-cream text-forest-mid">
                      {plant.category}
                    </span>
                    <span className={`reserve-type-badge ${WATER_COLORS[plant.water] || "bg-lichen-cream text-forest-mid"}`}>
                      💧 {plant.water} Water
                    </span>
                    {plant.chumash && (
                      <span className="reserve-type-badge bg-hummingbird-gold/15 text-deep-forest">
                        🌿 Culturally Significant
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-semibold text-deep-forest text-lg mb-0.5">
                    {plant.commonName}
                  </h3>
                  <p className="text-xs text-forest-mid italic mb-3">{plant.scientificName}</p>

                  <div className="flex flex-wrap gap-3 text-xs text-forest-mid mb-3">
                    <span>🌸 {plant.bloomSeason}</span>
                    <span>📏 {plant.height}</span>
                  </div>

                  <p className="text-sm text-forest-mid leading-relaxed mb-3">
                    {plant.description}
                  </p>

                  {/* Wildlife */}
                  <div className="mb-3">
                    <p className="text-xs font-medium text-deep-forest mb-1.5">Wildlife Supported:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {plant.wildlife.map((w) => (
                        <span key={w} className="reserve-type-badge bg-mint-mist text-reserve-green">
                          {w}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Fun fact */}
                  <div className="bg-lichen-cream rounded-xl p-3">
                    <p className="text-xs text-forest-mid">
                      <span className="font-medium text-deep-forest">🌟 Did you know? </span>
                      {plant.funFact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deep-forest text-white py-12">
        <div className="container-site text-center max-w-xl mx-auto">
          <h2 className="font-display font-bold text-xl mb-4">Want to grow these plants?</h2>
          <p className="text-sage mb-6 text-sm">
            Find native plants at our community nursery or start a reserve and receive a free plant starter pack.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/explore/nurseries" className="btn btn-primary">
              Find Plants
            </Link>
            <Link href="/get-involved/make-a-reserve" className="btn btn-outline-white">
              Make a Reserve <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
