import type { Metadata } from "next";
import Link from "next/link";
import { Heart, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Give",
  description:
    "Support native habitat restoration through donations, reserve adoption, fundraisers, and more.",
};

const GIVING_OPTIONS = [
  {
    emoji: "💚",
    title: "Donate",
    description:
      "Make a one-time or monthly gift to fund native plants, community programs, and education.",
    href: "/give/donate",
  },
  {
    emoji: "🏡",
    title: "Adopt an MNR",
    description:
      "Sponsor a specific MiniNature Reserve with annual support. Get recognition, updates, and impact reports.",
    href: "/give/adopt",
  },
  {
    emoji: "🎉",
    title: "Run a Fundraiser",
    description:
      "Launch a birthday, school, or workplace fundraising campaign with our tools and coaching.",
    href: "/give/fundraisers",
  },
  {
    emoji: "🌱",
    title: "Fund a New MNR",
    description:
      "Contribute to a specific planned reserve. Watch the funding meter fill and the garden get planted.",
    href: "/give/fund-new-mnr",
  },
  {
    emoji: "🎁",
    title: "Registry",
    description:
      "Browse our wishlist of tools, plants, materials, and services we need — give in-kind instead of cash.",
    href: "/give/registry",
  },
  {
    emoji: "🕊️",
    title: "Memorial Giving",
    description:
      "Honor a loved one with a donation that plants native habitat in their memory.",
    href: "/give/memorial",
  },
  {
    emoji: "🌳",
    title: "Legacy Donation",
    description:
      "Include MiniNature in your estate plan with a bequest, beneficiary designation, or charitable trust.",
    href: "/give/legacy",
  },
];

const BREAKDOWN = [
  { pct: "60%", label: "Native plants & habitat installation" },
  { pct: "25%", label: "Community programs & events" },
  { pct: "15%", label: "Education & outreach" },
];

const IMPACT_STATS = [
  { value: "$127K", label: "Raised to date" },
  { value: "21", label: "Reserves planted" },
  { value: "35,000", label: "Sq ft restored" },
];

export default function GivePage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-reserve-green text-white section-pad">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-sage mb-4">
              <Heart size={12} className="inline -mt-0.5 mr-1" />
              Support the Mission
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-5 leading-tight">
              Every Contribution Grows
              <br />
              <em className="text-hummingbird-gold not-italic">
                Native Habitat
              </em>
            </h1>
            <p className="text-sage text-lg leading-relaxed mb-8">
              Whether you give $25 or $25,000, donate your time or your old
              wheelbarrow, every contribution directly supports native plant
              habitat restoration in Ventura County.
            </p>
            <Link href="/give/donate" className="btn btn-primary text-base px-8 py-3">
              Donate Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Giving options grid */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-2 text-center">
          Ways to Give
        </h2>
        <p className="text-center text-forest-mid mb-10 text-sm max-w-lg mx-auto">
          From quick donations to legacy planning, there are many ways to fuel
          urban habitat restoration.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GIVING_OPTIONS.map((opt) => (
            <Link
              key={opt.href}
              href={opt.href}
              className="card-organic bg-white p-6 border border-lichen-cream flex flex-col hover:shadow-card transition-shadow group"
            >
              <span className="text-3xl mb-3">{opt.emoji}</span>
              <h3 className="font-display font-semibold text-lg text-deep-forest mb-1 group-hover:text-reserve-green transition-colors">
                {opt.title}
              </h3>
              <p className="text-sm text-forest-mid leading-relaxed flex-1 mb-4">
                {opt.description}
              </p>
              <span className="text-sm text-reserve-green font-medium flex items-center gap-1">
                Learn more <ArrowRight size={13} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Where your money goes */}
      <section className="bg-lichen-cream py-16">
        <div className="container-site max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-2 text-center">
            Where Your Money Goes
          </h2>
          <p className="text-center text-forest-mid mb-8 text-sm">
            100% of donations fund reserve installation and stewardship. We keep
            overhead low so your dollars go into the ground.
          </p>
          <div className="card-organic bg-white p-8">
            <div className="space-y-4">
              {BREAKDOWN.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-deep-forest font-medium">
                      {item.label}
                    </span>
                    <span className="font-bold text-reserve-green">
                      {item.pct}
                    </span>
                  </div>
                  <div className="h-3 bg-mint-mist rounded-full overflow-hidden">
                    <div
                      className="h-full bg-reserve-green rounded-full"
                      style={{ width: item.pct }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-8 text-center">
          Your Impact So Far
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {IMPACT_STATS.map((stat) => (
            <div
              key={stat.label}
              className="card-organic bg-white p-6 border border-lichen-cream text-center"
            >
              <div className="font-display font-bold text-3xl text-reserve-green mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-forest-mid">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-2xl mx-auto bg-mint-mist rounded-organic-lg p-8 text-center">
          <span className="text-3xl mb-3 block">💬</span>
          <blockquote className="text-deep-forest text-lg leading-relaxed italic mb-4">
            &ldquo;Donating to MiniNature felt different — I could see exactly
            where my money went. Three months later, there were monarch
            butterflies on the milkweed I helped plant.&rdquo;
          </blockquote>
          <div className="text-sm font-medium text-reserve-green">
            Sarah M., Monthly Donor
          </div>
          <div className="text-xs text-forest-mid">Ventura, CA</div>
        </div>
      </section>

      {/* 501c3 */}
      <section className="container-site pb-16 text-center max-w-xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-sm text-forest-mid">
          <CheckCircle size={14} className="text-reserve-green" />
          MiniNature Reserve is a 501(c)(3) nonprofit. All donations are
          tax-deductible.
        </div>
      </section>
    </div>
  );
}
