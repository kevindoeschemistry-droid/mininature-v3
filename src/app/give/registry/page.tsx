import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Gift, AlertCircle, Clock, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Registry",
  description:
    "Browse our wishlist of in-kind donations — tools, plants, materials, and services that support native habitat restoration.",
};

type UrgencyLevel = "needed_now" | "ongoing" | "nice_to_have";

interface RegistryItem {
  name: string;
  description: string;
  urgency: UrgencyLevel;
  estimatedValue: string;
}

interface RegistryCategory {
  emoji: string;
  title: string;
  items: RegistryItem[];
}

const URGENCY_CONFIG: Record<UrgencyLevel, { label: string; icon: typeof AlertCircle; color: string }> = {
  needed_now: {
    label: "Needed Now",
    icon: AlertCircle,
    color: "text-california-poppy",
  },
  ongoing: { label: "Ongoing", icon: Clock, color: "text-reserve-green" },
  nice_to_have: {
    label: "Nice to Have",
    icon: Sparkles,
    color: "text-sage",
  },
};

const CATEGORIES: RegistryCategory[] = [
  {
    emoji: "🔧",
    title: "Tools & Equipment",
    items: [
      {
        name: "Shovels & Spades",
        description:
          "Digging tools for install days. Round-point shovels and flat spades preferred.",
        urgency: "needed_now",
        estimatedValue: "$25-40 each",
      },
      {
        name: "Wheelbarrows",
        description:
          "Heavy-duty wheelbarrows for moving soil, mulch, and plants during installation.",
        urgency: "needed_now",
        estimatedValue: "$60-120 each",
      },
      {
        name: "Garden Hoses & Nozzles",
        description:
          "50-100 ft hoses with adjustable nozzles for watering newly installed reserves.",
        urgency: "ongoing",
        estimatedValue: "$30-50 each",
      },
      {
        name: "Hand Pruners & Loppers",
        description:
          "Bypass-style pruners for maintenance days. Loppers for woody species management.",
        urgency: "nice_to_have",
        estimatedValue: "$15-35 each",
      },
    ],
  },
  {
    emoji: "🌿",
    title: "Plants & Materials",
    items: [
      {
        name: "Native Plant Seeds",
        description:
          "Locally-sourced California native seeds: milkweed, buckwheat, sage, poppy, needlegrass.",
        urgency: "needed_now",
        estimatedValue: "$5-20 per packet",
      },
      {
        name: "Mulch (Arborist Chips)",
        description:
          "Natural wood chip mulch for weed suppression and moisture retention. Bulk delivery preferred.",
        urgency: "ongoing",
        estimatedValue: "$40-80 per cubic yard",
      },
      {
        name: "Soil Amendments",
        description:
          "Compost, worm castings, or mycorrhizal inoculant to improve planting soil.",
        urgency: "ongoing",
        estimatedValue: "$15-40 per bag",
      },
      {
        name: "Drip Irrigation Supplies",
        description:
          "Drip tubing, emitters, timers, and connectors for establishing reserves.",
        urgency: "nice_to_have",
        estimatedValue: "$50-150 per kit",
      },
    ],
  },
  {
    emoji: "🛠️",
    title: "Services",
    items: [
      {
        name: "Truck / Trailer for Hauling",
        description:
          "Occasional use of a pickup truck or utility trailer for moving plants, soil, and mulch to sites.",
        urgency: "needed_now",
        estimatedValue: "$50-100 per trip",
      },
      {
        name: "Photography",
        description:
          "Document install days, capture before/after shots, and photograph pollinators for our site.",
        urgency: "ongoing",
        estimatedValue: "$200-500 per session",
      },
      {
        name: "Graphic Design",
        description:
          "Help design reserve signs, flyers, social media graphics, and educational materials.",
        urgency: "nice_to_have",
        estimatedValue: "$300-800 per project",
      },
      {
        name: "Web Development",
        description:
          "Help maintain and improve our website, maps, and digital tools.",
        urgency: "nice_to_have",
        estimatedValue: "$500-2000 per project",
      },
    ],
  },
  {
    emoji: "💻",
    title: "Technology",
    items: [
      {
        name: "Tablets for Field Work",
        description:
          "Rugged tablets or iPads for species identification, data collection, and mapping in the field.",
        urgency: "nice_to_have",
        estimatedValue: "$200-400 each",
      },
      {
        name: "Trail Cameras",
        description:
          "Motion-activated wildlife cameras to document animal visitors at reserves.",
        urgency: "ongoing",
        estimatedValue: "$40-80 each",
      },
      {
        name: "Weather Station",
        description:
          "A small weather station to monitor microclimate conditions at key reserve sites.",
        urgency: "nice_to_have",
        estimatedValue: "$100-250",
      },
    ],
  },
];

export default function RegistryPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-reserve-green text-white section-pad">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-sage mb-4">
              <Gift size={12} className="inline -mt-0.5 mr-1" />
              In-Kind Giving
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-5 leading-tight">
              Our Wishlist
            </h1>
            <p className="text-sage text-lg leading-relaxed">
              Not everything we need costs money. Browse our registry of tools,
              plants, materials, and services. If you have it gathering dust in
              your garage, it could be building habitat in someone&apos;s
              parkway.
            </p>
          </div>
        </div>
      </section>

      {/* Urgency legend */}
      <section className="container-site py-6">
        <div className="flex flex-wrap gap-4 justify-center">
          {Object.entries(URGENCY_CONFIG).map(([key, config]) => (
            <div key={key} className="flex items-center gap-1.5 text-xs">
              <config.icon size={12} className={config.color} />
              <span className={`font-medium ${config.color}`}>
                {config.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container-site pb-16">
        <div className="space-y-10">
          {CATEGORIES.map((cat) => (
            <div key={cat.title}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.emoji}</span>
                <h2 className="font-display font-bold text-xl text-deep-forest">
                  {cat.title}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.items.map((item) => {
                  const urgency = URGENCY_CONFIG[item.urgency];
                  return (
                    <div
                      key={item.name}
                      className="card-organic bg-white p-5 border border-lichen-cream"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-display font-semibold text-deep-forest">
                          {item.name}
                        </h3>
                        <div
                          className={`flex items-center gap-1 text-xs font-medium ${urgency.color} shrink-0 ml-2`}
                        >
                          <urgency.icon size={11} />
                          {urgency.label}
                        </div>
                      </div>
                      <p className="text-sm text-forest-mid leading-relaxed mb-3">
                        {item.description}
                      </p>
                      <div className="text-xs text-forest-mid">
                        Estimated value:{" "}
                        <span className="font-medium text-deep-forest">
                          {item.estimatedValue}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Offer form */}
      <section className="bg-lichen-cream py-16">
        <div className="container-site max-w-2xl mx-auto">
          <div className="card-organic bg-white p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-reserve-green flex items-center justify-center">
                <Gift size={18} className="text-white" />
              </div>
              <div>
                <h2 className="font-display font-semibold text-2xl text-deep-forest">
                  Offer a Donation
                </h2>
                <p className="text-sm text-forest-mid">
                  Have something on our list — or something we haven&apos;t
                  thought of? Let us know.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-deep-forest mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-deep-forest mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1.5">
                  What Can You Offer?
                </label>
                <input
                  type="text"
                  placeholder="e.g., 'Two wheelbarrows', 'Photography services', 'Native sage plants'"
                  className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1.5">
                  Description{" "}
                  <span className="text-forest-mid font-normal">(optional)</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Condition, quantity, availability, or any other details..."
                  className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm resize-none"
                />
              </div>
              <button className="btn btn-primary w-full justify-center text-base py-3">
                <Gift size={16} />
                Submit Offer
              </button>
              <p className="text-xs text-center text-forest-mid">
                In-kind donations may be tax-deductible. We&apos;ll provide a
                receipt upon request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="container-site py-8 text-center">
        <Link
          href="/give"
          className="text-sm text-forest-mid hover:text-reserve-green transition-colors inline-flex items-center gap-1"
        >
          <ArrowRight size={12} className="rotate-180" />
          Back to all giving options
        </Link>
      </section>
    </div>
  );
}
