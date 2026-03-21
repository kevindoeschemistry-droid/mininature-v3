import type { Metadata } from "next";
import Link from "next/link";
import { Percent, ArrowRight, CheckCircle, Globe, TrendingUp, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "1% for the Planet",
  description: "MiniNature Reserve is a 1% for the Planet environmental partner. Learn how your business can direct its 1% to urban habitat restoration.",
};

const HOW_WE_PARTICIPATE = [
  { emoji: "🌱", title: "Approved Environmental Partner", description: "MiniNature Reserve is an approved nonprofit recipient in the 1% for the Planet network, meaning businesses can direct their 1% commitment to us." },
  { emoji: "📊", title: "Transparent Impact Reporting", description: "Every dollar is tracked to specific reserve installations. Donors receive detailed impact reports showing exactly where their contribution went." },
  { emoji: "🤝", title: "Direct Relationship", description: "Unlike large intermediary funds, your contribution goes directly to on-the-ground habitat restoration in Ventura County and Southern California." },
];

const HOW_TO_JOIN = [
  { icon: Globe, title: "Join 1% for the Planet", description: "If you're not yet a member, sign up at onepercentfortheplanet.org. Membership commits your business to donating 1% of annual sales to environmental nonprofits." },
  { icon: Handshake, title: "Designate MiniNature Reserve", description: "When selecting your nonprofit partners, search for MiniNature Reserve in the 1% directory. You can direct part or all of your 1% to us." },
  { icon: TrendingUp, title: "See Your Impact Grow", description: "We'll keep you updated with quarterly reports, photos from installations your funds support, and invitations to see your impact in person." },
];

const IMPACT_AREAS = [
  { emoji: "🌿", title: "Native Plant Reserves", value: "60+", description: "reserves installed across Ventura County" },
  { emoji: "🦋", title: "Pollinator Habitat", value: "85K+", description: "square feet of habitat restored" },
  { emoji: "👥", title: "Community Engagement", value: "3,000+", description: "volunteer hours contributed" },
  { emoji: "🎓", title: "Education Programs", value: "12", description: "schools enrolled in VeriServe" },
];

export default function OnePercentPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-reserve-green text-white section-pad">
        <div className="container-site">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono-accent uppercase tracking-widest text-sage">
            <Link href="/partner" className="hover:text-white transition-colors">Partnerships</Link>
            <span>/</span>
            <span>1% for the Planet</span>
          </div>
          <div className="max-w-2xl">
            <Percent size={32} className="text-hummingbird-gold mb-4" />
            <div className="text-xs font-mono-accent uppercase tracking-widest text-hummingbird-gold mb-4">
              Environmental Commitment
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              1% for the<br />
              <em className="text-hummingbird-gold not-italic">Planet</em>
            </h1>
            <p className="text-sage text-lg leading-relaxed mb-6">
              MiniNature Reserve is a certified 1% for the Planet environmental partner.
              Direct your business&apos;s 1% commitment to urban native habitat restoration
              right here in Southern California.
            </p>
            <a href="#contact-cta" className="btn btn-primary">
              Partner With Us <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* What Is 1% */}
      <section className="container-site py-16">
        <div className="max-w-3xl">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">What Is 1% for the Planet?</h2>
          <p className="text-forest-mid leading-relaxed mb-4">
            1% for the Planet is a global network of businesses, nonprofits, and individuals
            working together for a healthy planet. Member businesses commit to donating 1% of
            their annual sales to approved environmental organizations — not 1% of profits, but
            1% of total revenue.
          </p>
          <p className="text-forest-mid leading-relaxed mb-4">
            Founded in 2002, the network has certified over $650 million in environmental giving.
            It connects companies that want to make a real environmental commitment with vetted
            nonprofit partners doing measurable, on-the-ground work.
          </p>
          <p className="text-forest-mid leading-relaxed">
            As an approved environmental partner, MiniNature Reserve can receive 1% contributions
            from any member business — and we put every dollar toward native habitat restoration
            in communities that need it most.
          </p>
        </div>
      </section>

      {/* How We Participate */}
      <section className="bg-lichen-cream py-16">
        <div className="container-site">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-2 text-center">
            How MiniNature Participates
          </h2>
          <p className="text-forest-mid text-sm mb-10 text-center max-w-lg mx-auto">
            We&apos;re not just a name in a directory. Here&apos;s what makes us a strong 1% partner.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOW_WE_PARTICIPATE.map((item) => (
              <div key={item.title} className="card-organic bg-white p-6 border border-lichen-cream">
                <span className="text-2xl mb-3 block">{item.emoji}</span>
                <h3 className="font-display font-semibold text-deep-forest text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-forest-mid leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-2 text-center">
          How Businesses Can Join Through MiniNature
        </h2>
        <p className="text-forest-mid text-sm mb-10 text-center max-w-lg mx-auto">
          Whether you&apos;re already a 1% member or considering joining, here&apos;s how to
          direct your giving to urban habitat restoration.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOW_TO_JOIN.map((item, i) => (
            <div key={item.title} className="text-center">
              <div className="bg-mint-mist w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <item.icon size={22} className="text-reserve-green" />
              </div>
              <div className="text-xs font-mono-accent text-sage mb-1">Step {String(i + 1).padStart(2, "0")}</div>
              <h3 className="font-display font-semibold text-deep-forest text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-forest-mid leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact */}
      <section className="bg-deep-forest text-white py-16">
        <div className="container-site">
          <h2 className="font-display font-bold text-2xl text-center mb-2">Impact of 1% Contributions</h2>
          <p className="text-sage text-sm text-center mb-10 max-w-lg mx-auto">
            Here&apos;s what 1% contributions have helped us accomplish so far.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {IMPACT_AREAS.map((area) => (
              <div key={area.title} className="text-center">
                <span className="text-3xl block mb-2">{area.emoji}</span>
                <div className="font-display font-bold text-3xl text-hummingbird-gold mb-1">{area.value}</div>
                <div className="text-white text-sm font-medium mb-0.5">{area.title}</div>
                <div className="text-sage text-xs">{area.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact-cta" className="container-site py-16 text-center max-w-xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
          Ready to Direct Your 1%?
        </h2>
        <p className="text-forest-mid text-sm mb-6 leading-relaxed">
          Whether you&apos;re an existing 1% for the Planet member or exploring the commitment
          for the first time, we&apos;d love to talk. Reach out and we&apos;ll walk you through
          the process.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/contact" className="btn btn-primary">
            Get in Touch <ArrowRight size={14} />
          </Link>
          <a href="https://www.onepercentfortheplanet.org/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Visit 1% for the Planet <ArrowRight size={14} />
          </a>
        </div>
      </section>
    </div>
  );
}
