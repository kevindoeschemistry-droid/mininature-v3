import type { Metadata } from "next";
import Link from "next/link";
import { Heart, DollarSign, Trophy, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Support MiniNature",
  description: "Support urban biodiversity restoration. Donate, sponsor a reserve, or run a fundraiser for MiniNature Reserve.",
};

const WAYS = [
  {
    icon: Heart,
    emoji: "💚",
    title: "Donate",
    tagline: "Fund habitat, directly",
    description: "$50 plants a species. $250 funds a parkway strip. $1,000 installs an entire reserve. Every dollar goes directly to habitat restoration.",
    cta: "Donate Now",
    href: "/give/donate",
    color: "bg-reserve-green",
    highlight: true,
  },
  {
    icon: Trophy,
    emoji: "🏆",
    title: "Sponsor a Reserve",
    tagline: "Name a habitat",
    description: "Sponsor a MiniNature Reserve in honor of someone special, in memory of a loved one, or as a lasting gift to your community.",
    cta: "Learn About Sponsoring",
    href: "/give/adopt",
    color: "bg-hummingbird-gold",
    highlight: false,
  },
  {
    icon: DollarSign,
    emoji: "🎉",
    title: "Run a Fundraiser",
    tagline: "Grow your impact",
    description: "Birthday fundraiser, school drive, workplace campaign — we provide tools, coaching, and recognition for community fundraisers.",
    cta: "Start a Fundraiser",
    href: "/give/fundraisers",
    color: "bg-california-poppy",
    highlight: false,
  },
];

const IMPACT_AMOUNTS = [
  { amount: "$25", impact: "Buys 3 native plant seedlings" },
  { amount: "$50", impact: "Plants a full pollinator species" },
  { amount: "$150", impact: "Funds tools for one install day" },
  { amount: "$250", impact: "Installs a 50 sq ft parkway strip" },
  { amount: "$500", impact: "Trains a new Reservist" },
  { amount: "$1,000", impact: "Installs a complete MiniNature Reserve" },
];

export default function SupportPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-reserve-green text-white section-pad">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-sage mb-4">Support</div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-5 leading-tight">
              Grow Urban Nature<br />
              <em className="text-hummingbird-gold not-italic">With Your Support</em>
            </h1>
            <p className="text-sage text-lg leading-relaxed mb-8">
              MiniNature Reserve is a community-funded nonprofit. Your support directly funds
              native plant habitat, community training, and youth education programs.
            </p>
            <Link href="/give/donate" className="btn btn-primary text-base px-8 py-3">
              Donate Today
            </Link>
          </div>
        </div>
      </section>

      {/* Ways to give */}
      <section className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WAYS.map((way) => (
            <div key={way.title} className={`card-organic bg-white p-7 flex flex-col ${way.highlight ? "ring-2 ring-reserve-green" : ""}`}>
              {way.highlight && (
                <div className="text-xs font-medium text-reserve-green mb-2">⭐ Most Impactful</div>
              )}
              <div className={`${way.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                <way.icon size={20} className="text-white" />
              </div>
              <span className="text-3xl mb-2">{way.emoji}</span>
              <h2 className="font-display font-semibold text-xl text-deep-forest mb-1">
                {way.title}
              </h2>
              <p className="text-xs text-reserve-green font-medium mb-3">{way.tagline}</p>
              <p className="text-sm text-forest-mid leading-relaxed flex-1 mb-5">
                {way.description}
              </p>
              <Link href={way.href} className={`btn text-sm ${way.highlight ? "btn-primary" : "btn-secondary"}`}>
                {way.cta} <ArrowRight size={13} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Impact table */}
      <section className="bg-lichen-cream py-16">
        <div className="container-site max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-2 text-center">
            Your Dollars at Work
          </h2>
          <p className="text-center text-forest-mid mb-8 text-sm">
            100% of donations go directly to reserve installation and stewardship programs.
          </p>
          <div className="card-organic bg-white overflow-hidden">
            {IMPACT_AMOUNTS.map((item, i) => (
              <div key={item.amount} className={`flex items-center gap-4 px-6 py-4 ${i % 2 === 0 ? "bg-white" : "bg-mint-mist/50"}`}>
                <span className="font-display font-bold text-xl text-reserve-green w-16 shrink-0">
                  {item.amount}
                </span>
                <div className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-reserve-green shrink-0" />
                  <span className="text-sm text-deep-forest">{item.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 501c3 note */}
      <section className="container-site py-12 text-center max-w-xl mx-auto">
        <p className="text-sm text-forest-mid">
          MiniNature Reserve is a 501(c)(3) nonprofit organization. All donations are tax-deductible
          to the extent permitted by law. EIN: 88-XXXXXXX.
        </p>
      </section>
    </div>
  );
}
