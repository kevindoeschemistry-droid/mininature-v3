import type { Metadata } from "next";
import Link from "next/link";
import { Heart, ArrowRight, Leaf, Users, TreePine } from "lucide-react";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support urban biodiversity restoration. Your donation plants native habitat in cities across Ventura County.",
};

const AMOUNTS = [
  { amount: 25, label: "Plants 1 native species", icon: "🌱" },
  { amount: 50, label: "Restores 10 sq ft of habitat", icon: "🌿" },
  { amount: 100, label: "Equips a volunteer for a day", icon: "🤝" },
  { amount: 250, label: "Funds a school reserve visit", icon: "🏫" },
  { amount: 500, label: "Adopts a full MNR for 1 year", icon: "💚", highlighted: true },
  { amount: 1000, label: "Installs a new community reserve", icon: "🗺️" },
];

export default function DonatePage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <div className="bg-reserve-green text-white py-16">
        <div className="container-site">
          <div className="text-xs font-mono-accent uppercase tracking-widest text-sage mb-3">Support the Mission</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Your Donation Restores Urban Habitat
          </h1>
          <p className="text-sage text-lg max-w-xl">
            Every dollar goes directly toward native plants, community events, and growing the network of MiniNature Reserves.
          </p>
        </div>
      </div>

      {/* Donation form */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-organic-lg p-8 shadow-card">
              <h2 className="font-display font-semibold text-2xl text-deep-forest mb-6">
                Choose Your Impact
              </h2>

              {/* Amount presets */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {AMOUNTS.map((a) => (
                  <button
                    key={a.amount}
                    className={`p-4 rounded-organic text-left border-2 transition-all hover:border-reserve-green hover:shadow-card ${
                      a.highlighted
                        ? "border-reserve-green bg-mint-mist"
                        : "border-lichen-cream bg-fog-white"
                    }`}
                  >
                    <div className="text-2xl mb-1">{a.icon}</div>
                    <div className="font-display font-bold text-xl text-deep-forest">${a.amount}</div>
                    <div className="text-xs text-forest-mid mt-0.5">{a.label}</div>
                    {a.highlighted && (
                      <div className="text-xs text-reserve-green font-medium mt-1">Most popular</div>
                    )}
                  </button>
                ))}
              </div>

              {/* Custom amount */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-deep-forest mb-1.5">
                  Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-forest-mid">$</span>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
                  />
                </div>
              </div>

              {/* Frequency */}
              <div className="flex gap-2 mb-6">
                <button className="flex-1 py-2.5 rounded-full bg-reserve-green text-white text-sm font-medium">
                  One-time
                </button>
                <button className="flex-1 py-2.5 rounded-full bg-lichen-cream text-deep-forest text-sm font-medium">
                  Monthly
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-deep-forest mb-1.5">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-deep-forest mb-1.5">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-deep-forest mb-1.5">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm" />
                </div>
              </div>

              <a
                href="https://secure.qgiv.com/for/mininat"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full justify-center text-base py-4 mt-6"
              >
                <Heart size={18} />
                Donate Securely via Qgiv
              </a>
              <p className="text-xs text-center text-forest-mid mt-3">
                MiniNature Reserve is a 501(c)(3) nonprofit. Your donation is tax-deductible.
                You&apos;ll be taken to our secure donation platform.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-mint-mist rounded-organic p-6">
              <h3 className="font-semibold text-deep-forest mb-4">Where Your Money Goes</h3>
              <div className="space-y-3">
                {[
                  { pct: "60%", label: "Native plants & habitat materials" },
                  { pct: "25%", label: "Community programs & events" },
                  { pct: "15%", label: "Education & outreach" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-forest-mid">{item.label}</span>
                      <span className="font-medium text-reserve-green">{item.pct}</span>
                    </div>
                    <div className="h-1.5 bg-lichen-cream rounded-full overflow-hidden">
                      <div
                        className="h-full bg-reserve-green rounded-full"
                        style={{ width: item.pct }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-organic p-6 shadow-card">
              <h3 className="font-semibold text-deep-forest mb-3">Other Ways to Give</h3>
              <div className="space-y-2">
                {[
                  { label: "Adopt an MNR", href: "/get-involved/adopt", icon: Heart },
                  { label: "Active Fundraisers", href: "/give/fundraisers", icon: TreePine },
                  { label: "Become a Sponsor", href: "/give/adopt", icon: Users },
                  { label: "Memorial Giving", href: "/give/memorial", icon: Leaf },
                ].map((item) => (
                  <Link key={item.href} href={item.href} className="flex items-center gap-2 text-sm text-forest-mid hover:text-reserve-green transition-colors p-2 rounded-lg hover:bg-mint-mist">
                    <item.icon size={14} />
                    {item.label}
                    <ArrowRight size={12} className="ml-auto" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
