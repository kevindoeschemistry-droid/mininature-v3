"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  ArrowRight,
  Leaf,
  Users,
  TreePine,
  CheckCircle,
} from "lucide-react";

const AMOUNTS = [
  { amount: 25, label: "Plants 3 native seedlings", icon: "🌱" },
  { amount: 50, label: "Restores 10 sq ft of habitat", icon: "🌿" },
  { amount: 100, label: "Equips a volunteer for a day", icon: "🤝" },
  { amount: 250, label: "Funds a school reserve visit", icon: "🏫" },
  {
    amount: 500,
    label: "Adopts a full MNR for 1 year",
    icon: "💚",
    highlighted: true,
  },
  { amount: 1000, label: "Installs a new community reserve", icon: "🗺️" },
];

export default function DonatePageClient() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">(
    "one-time"
  );

  function handlePresetClick(amount: number) {
    setSelectedAmount(amount);
    setCustomAmount("");
  }

  function handleCustomChange(value: string) {
    setCustomAmount(value);
    setSelectedAmount(null);
  }

  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <div className="bg-reserve-green text-white py-16">
        <div className="container-site">
          <div className="text-xs font-mono-accent uppercase tracking-widest text-sage mb-3">
            Give
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Your Donation Restores Urban Habitat
          </h1>
          <p className="text-sage text-lg max-w-xl">
            Every dollar goes directly toward native plants, community events,
            and growing the network of MiniNature Reserves across Ventura
            County.
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
                {AMOUNTS.map((a) => {
                  const isActive = selectedAmount === a.amount;
                  return (
                    <button
                      key={a.amount}
                      onClick={() => handlePresetClick(a.amount)}
                      className={`p-4 rounded-organic text-left border-2 transition-all ${
                        isActive
                          ? "bg-reserve-green text-white border-reserve-green"
                          : "bg-white text-deep-forest border-lichen-cream hover:border-reserve-green"
                      }`}
                    >
                      <div className="text-2xl mb-1">{a.icon}</div>
                      <div
                        className={`font-display font-bold text-xl ${
                          isActive ? "text-white" : "text-deep-forest"
                        }`}
                      >
                        ${a.amount}
                      </div>
                      <div
                        className={`text-xs mt-0.5 ${
                          isActive ? "text-white/80" : "text-forest-mid"
                        }`}
                      >
                        {a.label}
                      </div>
                      {a.highlighted && !isActive && (
                        <div className="text-xs text-reserve-green font-medium mt-1">
                          Most popular
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Custom amount */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-deep-forest mb-1.5">
                  Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-forest-mid">
                    $
                  </span>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => handleCustomChange(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
                  />
                </div>
              </div>

              {/* Frequency */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-deep-forest mb-2">
                  Frequency
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setFrequency("one-time")}
                    className={`flex-1 py-2.5 rounded-full text-sm font-medium transition-colors ${
                      frequency === "one-time"
                        ? "bg-reserve-green text-white border-reserve-green"
                        : "bg-white text-deep-forest border-lichen-cream hover:border-reserve-green"
                    } border-2`}
                  >
                    One-time
                  </button>
                  <button
                    onClick={() => setFrequency("monthly")}
                    className={`flex-1 py-2.5 rounded-full text-sm font-medium transition-colors ${
                      frequency === "monthly"
                        ? "bg-reserve-green text-white border-reserve-green"
                        : "bg-white text-deep-forest border-lichen-cream hover:border-reserve-green"
                    } border-2`}
                  >
                    Monthly
                  </button>
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
                MiniNature Reserve is a 501(c)(3) nonprofit. Your donation is
                tax-deductible. You&apos;ll be taken to our secure donation
                platform.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Where your money goes */}
            <div className="bg-mint-mist rounded-organic p-6">
              <h3 className="font-semibold text-deep-forest mb-4">
                Where Your Money Goes
              </h3>
              <div className="space-y-3">
                {[
                  { pct: "60%", label: "Native plants & habitat materials" },
                  { pct: "25%", label: "Community programs & events" },
                  { pct: "15%", label: "Education & outreach" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-forest-mid">{item.label}</span>
                      <span className="font-medium text-reserve-green">
                        {item.pct}
                      </span>
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

            {/* Other ways to give */}
            <div className="bg-white rounded-organic p-6 shadow-card">
              <h3 className="font-semibold text-deep-forest mb-3">
                Other Ways to Give
              </h3>
              <div className="space-y-2">
                {[
                  { label: "Adopt an MNR", href: "/give/adopt", icon: Heart },
                  {
                    label: "Fund a New Reserve",
                    href: "/give/fund-new-mnr",
                    icon: TreePine,
                  },
                  {
                    label: "Registry (In-Kind)",
                    href: "/give/registry",
                    icon: Users,
                  },
                  {
                    label: "Memorial Giving",
                    href: "/give/memorial",
                    icon: Leaf,
                  },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-forest-mid hover:text-reserve-green transition-colors p-2 rounded-lg hover:bg-mint-mist"
                  >
                    <item.icon size={14} />
                    {item.label}
                    <ArrowRight size={12} className="ml-auto" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Tax note */}
            <div className="bg-white rounded-organic p-6 shadow-card">
              <div className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  className="text-reserve-green shrink-0 mt-0.5"
                />
                <div>
                  <h4 className="font-semibold text-deep-forest text-sm mb-1">
                    Tax-Deductible
                  </h4>
                  <p className="text-xs text-forest-mid leading-relaxed">
                    MiniNature Reserve is a registered 501(c)(3) nonprofit
                    organization (EIN: 88-XXXXXXX). Your donation is
                    tax-deductible to the full extent permitted by law.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
