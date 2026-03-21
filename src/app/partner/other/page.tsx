import type { Metadata } from "next";
import Link from "next/link";
import { Puzzle, ArrowRight } from "lucide-react";
import PartnershipInquiryForm from "./PartnershipInquiryForm";

export const metadata: Metadata = {
  title: "Other Partnership Possibilities",
  description: "Explore additional ways to partner with MiniNature Reserve — media, research, government grants, faith communities, nonprofits, and more.",
};

const PARTNERSHIP_TYPES = [
  {
    emoji: "📻",
    title: "Media & Press",
    description: "Embed with a reserve installation, feature a steward profile, or cover the intersection of ecology and community. We have rich visual content, expert sources, and compelling stories ready to go.",
    example: "Example: A local TV station embedded with our crew for a full installation day and aired a 4-minute feature on urban biodiversity.",
  },
  {
    emoji: "🔬",
    title: "Research & Academia",
    description: "Our reserves are living laboratories. We partner with university researchers studying urban ecology, pollinator health, soil microbiomes, and community-based conservation.",
    example: "Example: A Cal State Channel Islands biology class conducts annual pollinator surveys across our reserve network.",
  },
  {
    emoji: "🏛️",
    title: "Government Grants",
    description: "We're experienced grant partners for city, county, state, and federal environmental programs. We can serve as a subcontractor, fiscal sponsor, or community partner on your grant application.",
    example: "Example: We partnered with the City of Oxnard on a CalFire urban greening grant that funded 8 new reserves.",
  },
  {
    emoji: "⛪",
    title: "Faith Communities",
    description: "Churches, temples, and faith organizations are natural partners for creation care and community stewardship. We help faith communities install native gardens as living expressions of their values.",
    example: "Example: A Ventura church converted their unused side yard into a native pollinator garden maintained by their youth group.",
  },
  {
    emoji: "🤝",
    title: "Nonprofit Collaborations",
    description: "We collaborate with other nonprofits working in environmental education, food justice, Indigenous knowledge, and community health. Cross-pollination makes all our work stronger.",
    example: "Example: We partner with Village & Wilderness on programs that connect Indigenous land stewardship with modern conservation.",
  },
  {
    emoji: "🌟",
    title: "Individual Champions",
    description: "Not every partnership is organizational. If you're an individual with skills, connections, or influence that could help our mission — we want to hear from you. Pro bono professionals, social media advocates, and community connectors are all welcome.",
    example: "Example: A retired landscape architect now volunteers as a design reviewer for all new reserve installations.",
  },
];

export default function OtherPartnershipsPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-deep-forest text-white section-pad">
        <div className="container-site">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono-accent uppercase tracking-widest text-sage">
            <Link href="/partner" className="hover:text-white transition-colors">Partnerships</Link>
            <span>/</span>
            <span>Other Possibilities</span>
          </div>
          <div className="max-w-2xl">
            <Puzzle size={32} className="text-hummingbird-gold mb-4" />
            <div className="text-xs font-mono-accent uppercase tracking-widest text-hummingbird-gold mb-4">
              Let&apos;s Work Together
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Other Partnership<br />
              <em className="text-hummingbird-gold not-italic">Possibilities</em>
            </h1>
            <p className="text-sage text-lg leading-relaxed mb-6">
              Don&apos;t see your kind of partnership on our main pages? We&apos;re always open to
              creative collaborations that advance urban biodiversity and community connection.
            </p>
            <a href="#inquiry-form" className="btn btn-primary">
              Propose a Partnership <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Partnership Types Grid */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-2 text-center">Ways to Partner</h2>
        <p className="text-forest-mid text-sm mb-10 text-center max-w-lg mx-auto">
          Here are some of the partnership types we&apos;ve explored — but this list isn&apos;t exhaustive.
          If you have an idea, reach out.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTNERSHIP_TYPES.map((pt) => (
            <div key={pt.title} className="card-organic bg-white p-6 border border-lichen-cream flex flex-col">
              <span className="text-3xl mb-3">{pt.emoji}</span>
              <h3 className="font-display font-semibold text-deep-forest text-lg mb-2">{pt.title}</h3>
              <p className="text-sm text-forest-mid leading-relaxed mb-4 flex-1">{pt.description}</p>
              <div className="bg-mint-mist rounded-xl px-4 py-3">
                <p className="text-xs text-reserve-green leading-relaxed italic">{pt.example}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="bg-lichen-cream py-16">
        <div className="container-site">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-2xl text-deep-forest mb-2 text-center">
              General Partnership Inquiry
            </h2>
            <p className="text-forest-mid text-sm mb-8 text-center">
              Tell us about yourself and the partnership you have in mind. We read every submission
              and respond within a week.
            </p>
            <PartnershipInquiryForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-site py-16 text-center max-w-xl mx-auto">
        <h2 className="font-display font-bold text-xl text-deep-forest mb-3">
          Prefer a conversation?
        </h2>
        <p className="text-forest-mid text-sm mb-5">
          Sometimes a quick call is better than a form. Reach out through our contact page and
          we&apos;ll set up a time to chat.
        </p>
        <Link href="/contact" className="btn btn-secondary">
          Contact Us <ArrowRight size={14} />
        </Link>
      </section>
    </div>
  );
}
