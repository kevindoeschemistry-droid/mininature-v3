import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  ArrowRight,
  CheckCircle,
  MapPin,
  Sprout,
  Ruler,
  Star,
  Shield,
  Trophy,
} from "lucide-react";
import { RESERVES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Adopt an MNR",
  description:
    "Sponsor a MiniNature Reserve with annual support. Get recognition, updates, and the satisfaction of sustaining native habitat.",
};

const TIERS = [
  {
    name: "Steward",
    price: 250,
    icon: Shield,
    color: "bg-sage",
    perks: [
      "Name on reserve acknowledgment sign",
      "Quarterly impact updates with photos",
      "Annual impact report",
      "Tax-deductible receipt",
    ],
  },
  {
    name: "Guardian",
    price: 500,
    icon: Star,
    color: "bg-reserve-green",
    highlighted: true,
    perks: [
      "Everything in Steward",
      "Your name or honoree on reserve sign",
      "Custom naming opportunity",
      "Invitation to reserve events",
      "Spotlight in newsletter",
    ],
  },
  {
    name: "Champion",
    price: 1000,
    icon: Trophy,
    color: "bg-hummingbird-gold",
    perks: [
      "Everything in Guardian",
      "Permanent dedication plaque at reserve",
      "VIP access to all MiniNature events",
      "Behind-the-scenes install day experience",
      "Featured donor story on website",
    ],
  },
];

const availableReserves = RESERVES.filter(
  (r) => r.adoptionStatus === "available"
);

export default function AdoptPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-reserve-green text-white section-pad">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-sage mb-4">
              Adopt a Reserve
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-5 leading-tight">
              Adopt a MiniNature Reserve
            </h1>
            <p className="text-sage text-lg leading-relaxed">
              When you adopt a reserve, you provide sustained annual support that
              keeps native habitat thriving — covering maintenance, replanting,
              and community programming at your chosen site.
            </p>
          </div>
        </div>
      </section>

      {/* What adoption means */}
      <section className="container-site py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-3">
            What Does Adoption Mean?
          </h2>
          <p className="text-forest-mid leading-relaxed">
            Adopting a MiniNature Reserve means committing annual financial
            support to a specific habitat site. Your sponsorship covers seasonal
            maintenance, plant replacements, watering infrastructure, and
            community education programs tied to your reserve. In return, you
            receive recognition, regular updates, and the satisfaction of knowing
            your reserve is thriving.
          </p>
        </div>

        {/* Tiers */}
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-6 text-center">
          Adoption Tiers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`card-organic bg-white p-7 flex flex-col ${
                tier.highlighted ? "ring-2 ring-reserve-green" : ""
              }`}
            >
              {tier.highlighted && (
                <div className="text-xs font-medium text-reserve-green mb-2">
                  ⭐ Most Popular
                </div>
              )}
              <div
                className={`${tier.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}
              >
                <tier.icon size={20} className="text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-deep-forest mb-1">
                {tier.name}
              </h3>
              <div className="font-display font-bold text-2xl text-reserve-green mb-4">
                ${tier.price}
                <span className="text-sm font-normal text-forest-mid">
                  /year
                </span>
              </div>
              <ul className="space-y-2 flex-1 mb-6">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 text-sm text-forest-mid">
                    <CheckCircle
                      size={14}
                      className="text-reserve-green shrink-0 mt-0.5"
                    />
                    {perk}
                  </li>
                ))}
              </ul>
              <button
                className={`btn w-full justify-center ${
                  tier.highlighted ? "btn-primary" : "btn-secondary"
                }`}
              >
                Adopt as {tier.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Adoptable reserves */}
      <section className="bg-lichen-cream py-16">
        <div className="container-site">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-2 text-center">
            Available Reserves
          </h2>
          <p className="text-center text-forest-mid mb-8 text-sm">
            These reserves are currently seeking adoption sponsors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {availableReserves.map((reserve) => (
              <div
                key={reserve.id}
                className="card-organic bg-white p-6 border border-lichen-cream flex flex-col"
              >
                <h3 className="font-display font-semibold text-lg text-deep-forest mb-2">
                  {reserve.name}
                </h3>
                <div className="space-y-1.5 mb-4">
                  <div className="flex items-center gap-2 text-sm text-forest-mid">
                    <MapPin size={13} className="text-reserve-green shrink-0" />
                    {reserve.locationName}, {reserve.city}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-forest-mid">
                    <Ruler size={13} className="text-reserve-green shrink-0" />
                    {reserve.sizeSqft} sq ft
                  </div>
                  <div className="flex items-center gap-2 text-sm text-forest-mid">
                    <Sprout size={13} className="text-reserve-green shrink-0" />
                    {reserve.nativePlantCount} native species
                  </div>
                </div>
                <p className="text-sm text-forest-mid leading-relaxed flex-1 mb-4">
                  {reserve.summary}
                </p>
                <button className="btn btn-secondary w-full justify-center text-sm">
                  <Heart size={14} />
                  Adopt This Reserve
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-6 text-center">
          Benefits of Adoption
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {[
            { emoji: "📸", title: "Photo Updates", desc: "Seasonal photos of your reserve as it grows and changes" },
            { emoji: "📊", title: "Impact Reports", desc: "Annual data on species, pollinators, and community use" },
            { emoji: "💌", title: "Personal Connection", desc: "Direct communication with your reserve's steward" },
            { emoji: "🧾", title: "Tax Deduction", desc: "Full tax-deductible receipt for your annual contribution" },
          ].map((b) => (
            <div
              key={b.title}
              className="card-organic bg-white p-5 border border-lichen-cream text-center"
            >
              <span className="text-2xl block mb-2">{b.emoji}</span>
              <h3 className="font-display font-semibold text-sm text-deep-forest mb-1">
                {b.title}
              </h3>
              <p className="text-xs text-forest-mid">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Adoption form */}
      <section className="bg-lichen-cream py-16">
        <div className="container-site max-w-2xl mx-auto">
          <div className="card-organic bg-white p-8">
            <h2 className="font-display font-semibold text-2xl text-deep-forest mb-2">
              Start Your Adoption
            </h2>
            <p className="text-sm text-forest-mid mb-6">
              Fill out this form and we&apos;ll connect you with an available
              reserve that matches your interests.
            </p>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-deep-forest mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-deep-forest mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
                  />
                </div>
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
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1.5">
                  Preferred Tier
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm bg-white">
                  <option>Steward ($250/year)</option>
                  <option>Guardian ($500/year)</option>
                  <option>Champion ($1,000/year)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1.5">
                  Preferred Reserve{" "}
                  <span className="text-forest-mid font-normal">(optional)</span>
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm bg-white">
                  <option>No preference — match me!</option>
                  {availableReserves.map((r) => (
                    <option key={r.id}>{r.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1.5">
                  Message{" "}
                  <span className="text-forest-mid font-normal">(optional)</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us why you'd like to adopt a reserve..."
                  className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm resize-none"
                />
              </div>
              <button className="btn btn-primary w-full justify-center text-base py-3">
                <Heart size={16} />
                Submit Adoption Interest
              </button>
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
