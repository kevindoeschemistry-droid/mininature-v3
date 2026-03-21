import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Building2, TreePine, Megaphone, ArrowRight, CheckCircle, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Partner with MiniNature",
  description: "Partner with MiniNature Reserve to restore urban biodiversity. Municipal, corporate, and media partnerships available.",
};

const PARTNER_TYPES = [
  {
    icon: Building2,
    emoji: "🏙️",
    title: "Municipal & Government",
    tagline: "Turn city land into urban habitat",
    description: "Partner with us to install reserves on city-owned land — medians, parkways, school grounds, park edges. We handle the design, installation, community engagement, and long-term stewardship.",
    benefits: ["Turnkey reserve installation", "Community engagement events", "Before/after documentation", "Biodiversity impact data"],
    href: "/partner",
    color: "bg-reserve-green",
  },
  {
    icon: TreePine,
    emoji: "🌿",
    title: "Corporate & Business",
    tagline: "Meaningful environmental commitment",
    description: "Sponsor a reserve, fund an installation day, or name a site as part of your corporate giving program. We provide documentation and impact metrics for ESG reporting.",
    benefits: ["Named reserve opportunity", "Employee volunteer day", "ESG impact reporting", "Brand placement on site signage"],
    href: "/partner",
    color: "bg-deep-forest",
  },
  {
    icon: Megaphone,
    emoji: "📻",
    title: "Media & Press",
    tagline: "Tell the story of urban nature",
    description: "Embed with a reserve installation, interview our indigenous knowledge partners, or feature a reserve steward story. We have rich visual content and compelling human stories ready.",
    benefits: ["Full media access to installs", "Expert sources & interviews", "High-res photo library", "B-roll footage available"],
    href: "/about/press",
    color: "bg-california-poppy",
  },
];

const CURRENT_PARTNERS = [
  { name: "Community Roots Garden", type: "Community Partner", img: null, emoji: "🌱", href: "https://www.communityrootsgarden.org/", darken: false },
  { name: "Agromin", type: "Sponsor", img: "/logos/agromin.webp", emoji: "🌿", href: "https://agromin.com/", darken: false },
  { name: "REI", type: "Sponsor", img: "/logos/rei.svg", emoji: "🏕️", href: "https://www.rei.com/", darken: false },
  { name: "Village & Wilderness", type: "Nonprofit Partner", img: "/logos/village-wilderness.png", emoji: "🌲", href: "https://www.villageandwilderness.org/", darken: true },
  { name: "Social Justice Fund for Ventura County", type: "Funder", img: "/logos/sjf-vc.png", emoji: "🤝", href: null, darken: false },
  { name: "Rose Foundation", type: "Funder", img: "/logos/rose-foundation.svg", emoji: "🌸", href: null, darken: false },
  { name: "Holdfast Collective", type: "Partner", img: null, emoji: "🦾", href: null, darken: false },
  { name: "Whole Foods Market", type: "Sponsor", img: "/logos/whole-foods.svg", emoji: "🛒", href: null, darken: false },
];

export default function PartnerPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-deep-forest text-white section-pad">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-hummingbird-gold mb-4">
              Partnerships
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-5 leading-tight">
              Build Urban Nature<br />
              <em className="text-hummingbird-gold not-italic">Together</em>
            </h1>
            <p className="text-sage text-lg leading-relaxed mb-8">
              MiniNature Reserve partners with municipalities, businesses, and media to accelerate
              urban biodiversity restoration across Southern California — and beyond.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Start a Partnership Conversation
            </Link>
          </div>
        </div>
      </section>

      {/* Partner type cards */}
      <section className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PARTNER_TYPES.map((pt) => (
            <Link key={pt.href} href={pt.href} className="group block">
              <div className="card-organic bg-white h-full flex flex-col p-7 hover:shadow-card-hover transition-shadow">
                <div className={`${pt.color} w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <pt.icon size={20} className="text-white" />
                </div>
                <span className="text-2xl mb-2">{pt.emoji}</span>
                <h2 className="font-display font-semibold text-xl text-deep-forest mb-1 group-hover:text-reserve-green transition-colors">
                  {pt.title}
                </h2>
                <p className="text-xs text-reserve-green font-medium mb-3">{pt.tagline}</p>
                <p className="text-sm text-forest-mid leading-relaxed mb-5 flex-1">
                  {pt.description}
                </p>
                <div className="space-y-2 mb-5">
                  {pt.benefits.map((b) => (
                    <div key={b} className="flex items-center gap-2 text-xs text-forest-mid">
                      <CheckCircle size={12} className="text-reserve-green shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-sm font-medium text-reserve-green group-hover:gap-2.5 transition-all">
                  Learn More <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Current partners */}
      <section className="bg-lichen-cream py-16">
        <div className="container-site">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-2xl text-deep-forest mb-2">
              Current Partners
            </h2>
            <p className="text-forest-mid text-sm">
              Organizations helping us build a greener Southern California.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-5">
            {CURRENT_PARTNERS.map((p) => {
              const inner = (
                <div className="flex flex-col items-center justify-center gap-2 w-36 h-20">
                  {p.img ? (
                    <Image src={p.img} alt={p.name} width={120} height={40} className="max-h-10 max-w-[120px] w-auto object-contain" style={p.darken ? {filter: "brightness(0)"} : undefined} />
                  ) : (
                    <span className="text-3xl">{p.emoji}</span>
                  )}
                  <div className="text-center">
                    <div className="font-medium text-deep-forest text-xs leading-tight">{p.name}</div>
                    <div className="text-[10px] text-forest-mid mt-0.5">{p.type}</div>
                  </div>
                </div>
              );
              return p.href ? (
                <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer"
                  className="card-organic bg-white px-4 py-4 flex items-center justify-center hover:shadow-card-hover transition-shadow">
                  {inner}
                </a>
              ) : (
                <div key={p.name} className="card-organic bg-white px-4 py-4 flex items-center justify-center">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-reserve-green text-white py-16">
        <div className="container-site max-w-3xl mx-auto text-center">
          <Star size={20} className="text-hummingbird-gold mx-auto mb-5" />
          <blockquote className="font-display text-xl italic font-semibold leading-relaxed mb-5">
            &ldquo;The way MiniNature connects ecological restoration with cultural heritage and
            community is unlike anything I&apos;ve seen in the conservation sector.&rdquo;
          </blockquote>
          <div className="text-sage text-sm">Foundation Program Officer · Environmental Funder</div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-site py-16 text-center max-w-xl mx-auto">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
          Ready to explore a partnership?
        </h2>
        <p className="text-forest-mid mb-6">
          We&apos;re a small team but we move fast. Tell us about your organization and
          goals and we&apos;ll respond within 48 hours.
        </p>
        <Link href="/contact" className="btn btn-primary inline-flex">
          Get in Touch <ArrowRight size={14} />
        </Link>
      </section>
    </div>
  );
}
