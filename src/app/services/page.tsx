import type { Metadata } from "next";
import Link from "next/link";
import { Wrench, ArrowRight, Leaf, Users, Heart, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional native landscaping, consulting, and horticultural services for organizations, municipalities, and institutions in Ventura County.",
};

const SERVICES = [
  {
    emoji: "🌿",
    title: "Landscaping",
    description:
      "Native plant design, installation, and maintenance for organizations, businesses, and public spaces — not private residences.",
    href: "/services/landscaping",
  },
  {
    emoji: "🏛️",
    title: "For Municipalities",
    description:
      "Public right-of-way plantings, park restoration, median beautification, and stormwater management with native plants.",
    href: "/services/municipalities",
  },
  {
    emoji: "📚",
    title: "Educational Activities",
    description:
      "Book a native plant walk, pollinator workshop, seed saving class, or community planting day for your group.",
    href: "/services/education",
  },
  {
    emoji: "🌱",
    title: "Contract Growing",
    description:
      "Professional native plant propagation, seed collection, and contract growing for restoration projects and landscapers.",
    href: "/services/horticulture",
  },
  {
    emoji: "🥾",
    title: "Trail Maintenance",
    description:
      "Trail clearing, erosion control, native revegetation, and signage installation for Ventura County trails and public lands.",
    href: "/services/trail-maintenance",
  },
  {
    emoji: "🔥",
    title: "Weed Abatement",
    description:
      "Invasive species identification, removal, and native replanting — not just clear-cutting, but ecological restoration.",
    href: "/services/weed-abatement",
  },
  {
    emoji: "🧭",
    title: "Consulting",
    description:
      "Expert guidance on habitat restoration planning, native plant palettes, grant writing, and biodiversity assessments.",
    href: "/services/consulting",
  },
];

const WHY_US = [
  {
    icon: Leaf,
    title: "Native Plant Expertise",
    description:
      "Deep knowledge of Ventura County's native ecosystems, soils, and microclimates. We grow what belongs here.",
  },
  {
    icon: Users,
    title: "Community-Driven",
    description:
      "Every project strengthens our network of volunteers, reservists, and community partners. You hire a movement, not just a crew.",
  },
  {
    icon: Heart,
    title: "Mission-Funded",
    description:
      "Revenue from services directly funds free community programs, reserve installations, and native plant giveaways.",
  },
  {
    icon: MapPin,
    title: "Local Knowledge",
    description:
      "Based in Oxnard, working across Ventura County. We know the soil, the climate, the neighborhoods, and the plants that thrive here.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-reserve-green text-white section-pad">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Wrench size={16} className="text-sage" />
              <span className="text-xs font-mono-accent uppercase tracking-widest text-sage">
                Professional Services
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Services
            </h1>
            <p className="text-sage text-lg leading-relaxed mb-6">
              MiniNature offers professional native landscaping, consulting, and
              horticultural services for organizations, municipalities, and
              institutions. Every dollar earned funds our community conservation
              mission.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Request a Consultation <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-8">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="card-organic bg-white p-6 border border-lichen-cream group hover:border-reserve-green/30 transition-colors"
            >
              <span className="text-3xl block mb-3">{service.emoji}</span>
              <h3 className="font-display font-semibold text-deep-forest text-lg mb-2 group-hover:text-reserve-green transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-forest-mid leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="text-sm font-medium text-reserve-green flex items-center gap-1">
                Learn more <ArrowRight size={13} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose MiniNature */}
      <section className="bg-mint-mist py-16">
        <div className="container-site">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-8 text-center">
            Why Choose MiniNature?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {WHY_US.map((item) => (
              <div
                key={item.title}
                className="card-organic bg-white p-6 border border-lichen-cream"
              >
                <item.icon
                  size={22}
                  className="text-reserve-green mb-3"
                />
                <h3 className="font-display font-semibold text-deep-forest text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-forest-mid leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-deep-forest text-white py-16">
        <div className="container-site text-center max-w-2xl mx-auto">
          <Wrench size={28} className="text-sage mx-auto mb-4" />
          <h2 className="font-display font-bold text-2xl mb-4">
            Ready to get started?
          </h2>
          <p className="text-sage leading-relaxed mb-6">
            Tell us about your project and we&apos;ll connect you with the right
            team member. All service revenue funds our community conservation
            programs.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Contact Us <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
