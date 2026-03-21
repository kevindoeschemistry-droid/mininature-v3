import type { Metadata } from "next";
import Link from "next/link";
import { TreePine, CheckCircle, ArrowRight, BarChart3, Users, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate Partnerships",
  description: "Sponsor a reserve, fund an installation day, or name a site as part of your corporate environmental giving program.",
};

const TIERS = [
  {
    name: "Reserve Sponsor",
    price: "$2,500",
    period: "one-time",
    color: "bg-sage/20",
    headerColor: "bg-sage",
    description: "Fund the full installation of one MiniNature Reserve.",
    perks: [
      "Reserve named in your honor",
      "Sponsor credit on reserve profile page",
      "Installation day invitation for 5 employees",
      "Impact report at 6 and 12 months",
      "Reserve photo set for marketing use",
    ],
  },
  {
    name: "Habitat Builder",
    price: "$7,500",
    period: "one-time",
    color: "bg-reserve-green/10",
    headerColor: "bg-reserve-green",
    featured: true,
    description: "Fund 3 reserves and a full volunteer install day for your team.",
    perks: [
      "Three reserves bearing your company name",
      "Dedicated company volunteer day (up to 30 people)",
      "Signage at each reserve",
      "Press release co-distribution",
      "Annual ESG impact package",
      "Social media feature series",
    ],
  },
  {
    name: "Biodiversity Partner",
    price: "$20,000+",
    period: "annual",
    color: "bg-deep-forest/10",
    headerColor: "bg-deep-forest",
    description: "Multi-year partnership with maximum brand integration and community impact.",
    perks: [
      "Named neighborhood reserve cluster (5+ reserves)",
      "Quarterly employee volunteer events",
      "Co-branded educational materials",
      "Board advisory seat",
      "Custom impact dashboard",
      "Annual partner recognition ceremony",
    ],
  },
];

export default function CorporatePartnerPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      <section className="bg-deep-forest text-white section-pad">
        <div className="container-site">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono-accent uppercase tracking-widest text-sage">
            <Link href="/partner" className="hover:text-white transition-colors">Partnerships</Link>
            <span>/</span>
            <span>Corporate</span>
          </div>
          <div className="max-w-2xl">
            <TreePine size={32} className="text-hummingbird-gold mb-4" />
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Corporate &amp; Business Partnerships
            </h1>
            <p className="text-sage text-lg leading-relaxed mb-6">
              Go beyond carbon offsets. Fund real habitat restoration, engage your team in meaningful volunteer work,
              and build an authentic environmental brand story.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Talk to Our Partnerships Team
            </Link>
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="bg-lichen-cream py-12">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Leaf, title: "Real Ecological Impact", text: "Every dollar directly funds native plant installation and habitat stewardship. No overhead fluff." },
              { icon: Users, title: "Employee Engagement", text: "Hands-in-soil volunteer days are consistently rated as top employee experiences — great for culture and retention." },
              { icon: BarChart3, title: "Measurable Outcomes", text: "We provide data: square footage restored, species installed, volunteer hours, and pollinator counts." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <item.icon size={20} className="text-reserve-green shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-deep-forest text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-forest-mid leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-2 text-center">Partnership Tiers</h2>
        <p className="text-center text-forest-mid mb-10">All tiers are tax-deductible. Custom packages available.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIERS.map((tier) => (
            <div key={tier.name} className={`card-organic ${tier.color} overflow-hidden ${tier.featured ? "ring-2 ring-reserve-green" : ""}`}>
              {tier.featured && (
                <div className="bg-reserve-green text-white text-xs text-center py-1.5 font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-7">
                <div className={`w-8 h-1.5 ${tier.headerColor} rounded-full mb-4`} />
                <h3 className="font-display font-bold text-xl text-deep-forest mb-1">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold text-reserve-green">{tier.price}</span>
                  <span className="text-xs text-forest-mid">/ {tier.period}</span>
                </div>
                <p className="text-sm text-forest-mid mb-5 leading-relaxed">{tier.description}</p>
                <div className="space-y-2 mb-6">
                  {tier.perks.map((p) => (
                    <div key={p} className="flex items-start gap-2 text-xs text-forest-mid">
                      <CheckCircle size={12} className="text-reserve-green shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className={`btn text-sm w-full justify-center ${tier.featured ? "btn-primary" : "btn-secondary"}`}>
                  Get Started <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-forest-mid mt-6">
          Need a custom package? <Link href="/contact" className="text-reserve-green underline">Let&apos;s talk.</Link>
        </p>
      </section>
    </div>
  );
}
