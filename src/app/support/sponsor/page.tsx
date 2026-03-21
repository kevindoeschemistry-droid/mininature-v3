import type { Metadata } from "next";
import Link from "next/link";
import { Trophy, Heart, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Sponsor a Reserve",
  description: "Name a MiniNature Reserve in honor of someone special, in memory of a loved one, or as a gift to your community.",
};

const TIERS = [
  {
    name: "California Poppy",
    amount: "$100",
    perks: [
      "Social media shoutout to 5,800+ followers",
      "Listed as sponsor on our website",
      "Tax-deductible donation receipt",
    ],
    color: "bg-california-poppy/10",
  },
  {
    name: "Hummingbird Sage",
    amount: "$250",
    perks: [
      "Everything in California Poppy",
      "Logo featured in our newsletter (1,200+ subscribers)",
      "Recognition in our monthly Field Notes email",
    ],
    color: "bg-sage/20",
  },
  {
    name: "Woolly Blue Curls",
    amount: "$500",
    featured: true,
    perks: [
      "Everything in Hummingbird Sage",
      "Logo on Reservist graduation certificates",
      "Shoutout at community events & install days",
      "Reached by 90,000+ monthly Instagram views",
    ],
    color: "bg-reserve-green/10",
  },
  {
    name: "Coast Live Oak",
    amount: "$1,000+",
    perks: [
      "Everything in Woolly Blue Curls",
      "Press release recognition",
      "Custom signage at a named reserve site",
      "Premier placement on website and materials",
    ],
    color: "bg-deep-forest/10",
  },
];

export default function SponsorPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      <section className="bg-hummingbird-gold text-deep-forest section-pad">
        <div className="container-site">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono-accent uppercase tracking-widest text-deep-forest/60">
            <Link href="/support" className="hover:text-deep-forest transition-colors">Support</Link>
            <span>/</span>
            <span>Sponsor a Reserve</span>
          </div>
          <Trophy size={36} className="text-deep-forest mb-4" />
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
            Sponsor a Reserve
          </h1>
          <p className="text-deep-forest/80 text-lg leading-relaxed max-w-xl mb-6">
            Create a lasting living memorial, honor a milestone, or give someone you love
            a habitat that will grow and thrive for decades.
          </p>
          <a href="#sponsor-form" className="btn bg-deep-forest text-white hover:bg-deep-forest/90">
            Dedicate a Reserve
          </a>
        </div>
      </section>

      {/* Tiers */}
      <section className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {TIERS.map((tier) => (
            <div key={tier.name} className={`card-organic ${tier.color} p-7 ${tier.featured ? "ring-2 ring-reserve-green" : ""}`}>
              {tier.featured && (
                <div className="text-xs font-medium text-reserve-green mb-3">⭐ Most Popular</div>
              )}
              <div className="font-display font-bold text-2xl text-reserve-green mb-1">{tier.amount}</div>
              <h3 className="font-display font-semibold text-deep-forest text-xl mb-4">{tier.name}</h3>
              <div className="space-y-2">
                {tier.perks.map((p) => (
                  <div key={p} className="flex items-start gap-2 text-xs text-forest-mid">
                    <CheckCircle size={12} className="text-reserve-green shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section id="sponsor-form" className="bg-lichen-cream py-16">
        <div className="container-site max-w-xl mx-auto">
          <div className="text-center mb-8">
            <Heart size={28} className="text-reserve-green mx-auto mb-3" />
            <h2 className="font-display font-bold text-2xl text-deep-forest mb-2">
              Start a Sponsorship
            </h2>
            <p className="text-forest-mid text-sm">
              Tell us about your dedication and preferred tier. We&apos;ll follow up within 2 business days.
            </p>
          </div>
          <div className="card-organic bg-white p-8">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1.5">Your Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1.5">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1.5">Sponsorship Tier</label>
                <select className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-sm bg-white text-deep-forest">
                  {TIERS.map((t) => <option key={t.name}>{t.name} ({t.amount})</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1.5">Dedication name or message</label>
                <textarea rows={3} placeholder="e.g. 'In memory of Grandma Rosa, who loved her garden'" className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-sm resize-none" />
              </div>
              <button type="submit" className="btn btn-primary w-full justify-center py-3">
                Submit Sponsorship Inquiry <ArrowRight size={14} />
              </button>
            </form>
          </div>
          <p className="text-center text-xs text-forest-mid mt-4">
            Questions? <Link href="/contact" className="text-reserve-green underline">Contact us</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
