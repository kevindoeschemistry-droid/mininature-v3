import type { Metadata } from "next";
import Link from "next/link";
import { Heart, CheckCircle, ArrowRight, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Sponsorship Opportunities",
  description: "Sponsor MiniNature Reserve programs. Seedling, Pollinator, and Habitat Champion tiers for corporate and organizational partners.",
};

const TIERS = [
  {
    emoji: "🌱",
    name: "Seedling",
    price: "$1,000",
    period: "/year",
    color: "bg-sage",
    description: "A meaningful first step for small businesses and local organizations.",
    includes: [
      "Logo on the MiniNature website sponsors page",
      "Social media shout-out (2x per year)",
      "Annual impact report with your contribution highlighted",
      "Invitation to reserve installation events",
      "Digital badge for your website or emails",
    ],
  },
  {
    emoji: "🦋",
    name: "Pollinator",
    price: "$5,000",
    period: "/year",
    color: "bg-reserve-green",
    featured: true,
    description: "Our most popular tier — meaningful impact with real visibility.",
    includes: [
      "Everything in Seedling, plus:",
      "Logo on reserve signage at one named site",
      "One employee volunteer day at a reserve (up to 20 people)",
      "Quarterly impact reports with photos and species data",
      "Social media features (4x per year)",
      "Featured story in our annual newsletter",
      "ESG-ready impact documentation",
    ],
  },
  {
    emoji: "🏆",
    name: "Habitat Champion",
    price: "$10,000+",
    period: "/year",
    color: "bg-deep-forest",
    description: "For organizations ready to lead on urban biodiversity.",
    includes: [
      "Everything in Pollinator, plus:",
      "Naming rights for a new reserve installation",
      "Custom reserve plaque with your organization's story",
      "Two employee volunteer days per year",
      "Dedicated account manager",
      "Keynote invitation at our annual gathering",
      "Co-branded press releases for installations",
      "Priority logo placement across all materials",
    ],
  },
];

const CURRENT_SPONSORS = [
  { name: "Agromin", tier: "Habitat Champion", emoji: "🌿" },
  { name: "REI", tier: "Pollinator", emoji: "🏕️" },
  { name: "Whole Foods Market", tier: "Pollinator", emoji: "🛒" },
  { name: "Community Roots Garden", tier: "Seedling", emoji: "🌱" },
];

export default function SponsorshipPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-deep-forest text-white section-pad">
        <div className="container-site">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono-accent uppercase tracking-widest text-sage">
            <Link href="/partner" className="hover:text-white transition-colors">Partnerships</Link>
            <span>/</span>
            <span>Sponsorship</span>
          </div>
          <div className="max-w-2xl">
            <Heart size={32} className="text-hummingbird-gold mb-4" />
            <div className="text-xs font-mono-accent uppercase tracking-widest text-hummingbird-gold mb-4">
              Corporate &amp; Organization Sponsorship
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Sponsor Urban<br />
              <em className="text-hummingbird-gold not-italic">Habitat Restoration</em>
            </h1>
            <p className="text-sage text-lg leading-relaxed mb-6">
              Your sponsorship funds the installation and stewardship of native plant reserves
              in Ventura County communities that need them most.
            </p>
            <a href="#contact-form" className="btn btn-primary">
              Become a Sponsor <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-2 text-center">Sponsorship Tiers</h2>
        <p className="text-forest-mid text-sm mb-10 text-center max-w-lg mx-auto">
          Choose the level that fits your organization. All tiers include tax-deductible receipts
          and impact documentation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIERS.map((tier) => (
            <div key={tier.name}
              className={`card-organic bg-white p-7 border flex flex-col ${
                tier.featured ? "border-reserve-green ring-2 ring-reserve-green/20" : "border-lichen-cream"
              }`}>
              {tier.featured && (
                <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-3 flex items-center gap-1">
                  <Star size={12} /> Most Popular
                </div>
              )}
              <span className="text-3xl mb-3">{tier.emoji}</span>
              <h3 className="font-display font-bold text-xl text-deep-forest mb-1">{tier.name}</h3>
              <div className="mb-3">
                <span className="font-display font-bold text-2xl text-reserve-green">{tier.price}</span>
                <span className="text-sm text-forest-mid">{tier.period}</span>
              </div>
              <p className="text-sm text-forest-mid leading-relaxed mb-5">{tier.description}</p>
              <div className="space-y-2.5 mb-6 flex-1">
                {tier.includes.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-reserve-green shrink-0 mt-0.5" />
                    <span className="text-xs text-forest-mid leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <a href="#contact-form" className={`btn text-sm text-center justify-center ${
                tier.featured ? "btn-primary" : "btn-secondary"
              }`}>
                Choose {tier.name} <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="bg-lichen-cream py-16">
        <div className="container-site">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-2 text-center">Current Sponsors</h2>
          <p className="text-forest-mid text-sm mb-8 text-center">
            Thank you to our sponsors for making urban habitat restoration possible.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            {CURRENT_SPONSORS.map((s) => (
              <div key={s.name} className="card-organic bg-white px-6 py-5 flex items-center gap-4 min-w-[220px]">
                <span className="text-2xl">{s.emoji}</span>
                <div>
                  <div className="font-medium text-deep-forest text-sm">{s.name}</div>
                  <div className="text-xs text-reserve-green font-medium">{s.tier}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-reserve-green text-white py-16">
        <div className="container-site text-center max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-2xl mb-6">Your Sponsorship Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "60+", label: "Reserves Installed" },
              { value: "85K+", label: "Sq Ft Restored" },
              { value: "200+", label: "Native Species Planted" },
              { value: "3,000+", label: "Volunteer Hours" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-bold text-3xl text-hummingbird-gold mb-1">{stat.value}</div>
                <div className="text-sage text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="container-site py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-2 text-center">
            Sponsorship Inquiry
          </h2>
          <p className="text-forest-mid text-sm mb-8 text-center">
            Interested in sponsoring? Let us know about your organization and we&apos;ll send
            over a detailed sponsorship packet.
          </p>
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1">Contact Name *</label>
                <input type="text" required placeholder="Your full name"
                  className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green" />
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1">Email *</label>
                <input type="email" required placeholder="you@company.com"
                  className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-deep-forest mb-1">Organization Name *</label>
              <input type="text" required placeholder="Your company or organization"
                className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green" />
            </div>
            <div>
              <label className="block text-sm font-medium text-deep-forest mb-1">Interested Tier</label>
              <select
                className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest focus:outline-none focus:ring-2 focus:ring-reserve-green">
                <option value="">Not sure yet</option>
                <option value="seedling">Seedling ($1,000/yr)</option>
                <option value="pollinator">Pollinator ($5,000/yr)</option>
                <option value="habitat-champion">Habitat Champion ($10,000+/yr)</option>
                <option value="custom">Custom / Multi-Year</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-deep-forest mb-1">Message</label>
              <textarea rows={4} placeholder="Tell us about your organization's sustainability goals or any questions about sponsorship."
                className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green resize-y" />
            </div>
            <div className="text-center pt-2">
              <button type="submit" className="btn btn-primary">
                Send Inquiry <ArrowRight size={14} />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
