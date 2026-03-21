import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Phone, ExternalLink, Leaf, Sprout, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Community Nurseries",
  description: "Find local native plant nurseries, community growing programs, and propagation workshops near you.",
};

const NURSERIES = [
  {
    id: "1",
    name: "MiniNature Community Nursery",
    type: "Community Nursery",
    typeColor: "bg-reserve-green/10 text-reserve-green",
    address: "1801 Joliet Place, Oxnard, CA 93033",
    hours: "Sat 8 AM – 12 PM",
    description: "Our community propagation nursery, hosted in partnership with Community Roots Garden. Staffed by volunteers and specializing in Ventura County native plants for reserve installations. Free plants available for reserve creators and stewards.",
    specialties: ["California Fuchsia", "Hummingbird Sage", "Coyote Mint", "Native Grasses"],
    phone: undefined,
    free: true,
    emoji: "🌿",
  },
  {
    id: "2",
    name: "Theodore Payne Foundation",
    type: "Native Plant Nursery",
    typeColor: "bg-sage/20 text-deep-forest",
    address: "10459 Tuxford St, Sun Valley, CA 91352",
    hours: "Thu–Sun 8:30 AM – 4:30 PM",
    description: "California's premier native plant nursery with over 300 species. Also offers excellent workshops on seed saving and habitat gardening.",
    specialties: ["Oaks", "Buckwheat", "Penstemon", "Native Bunch Grasses"],
    website: "https://theodorepayne.org",
    free: false,
    emoji: "🌳",
  },
  {
    id: "3",
    name: "Las Pilitas Nursery — Escondido",
    type: "Specialty Native Nursery",
    typeColor: "bg-california-poppy/10 text-deep-forest",
    address: "3232 Las Pilitas Rd, Santa Margarita, CA",
    hours: "By appointment · Seasonal open days",
    description: "One of the best-stocked California native plant sources in the state, with expert staff advice and a legendary plant database online.",
    specialties: ["Sage Species", "Ceanothus", "Manzanita", "Rare Natives"],
    website: "https://laspilitas.com",
    free: false,
    emoji: "🌾",
  },
  {
    id: "4",
    name: "Ventura Botanical Gardens Propagation Lab",
    type: "Program Partner",
    typeColor: "bg-hummingbird-gold/15 text-deep-forest",
    address: "567 Main St, Ventura, CA 93001",
    hours: "Volunteer days: 2nd & 4th Sat 9 AM – 12 PM",
    description: "Join propagation volunteer days and take home plants you grow yourself. An excellent entry point for learning plant propagation alongside community members.",
    specialties: ["Native Perennials", "Coastal Scrub", "Riparian Plants"],
    free: true,
    emoji: "🧑‍🌾",
  },
];

const GROW_TIPS = [
  {
    icon: "💧",
    title: "Start with easy growers",
    tip: "California Fuchsia, Hummingbird Sage, and Coyote Mint are fast-establishing, drought-tolerant, and loved by pollinators.",
  },
  {
    icon: "☀️",
    title: "Match plant to sunlight",
    tip: "Most California natives need full sun (6+ hours). Shade-tolerant species like Wild Ginger work for shadier spots.",
  },
  {
    icon: "🪣",
    title: "Water deeply but rarely",
    tip: "Once established (6–12 months), most California natives thrive with monthly deep irrigation. Overwatering is the #1 killer.",
  },
  {
    icon: "🌱",
    title: "Skip the fertilizer",
    tip: "Native plants evolved in lean soils. Fertilizer causes excess leafy growth and reduces bloom and root depth.",
  },
];

export default function NurseriesPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-reserve-green text-white section-pad">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Sprout size={16} className="text-sage" />
              <span className="text-xs font-mono-accent uppercase tracking-widest text-sage">
                Plant Sources
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Community Nurseries
            </h1>
            <p className="text-sage text-lg leading-relaxed mb-6">
              Find native plants, learn propagation, and connect with other growers.
              Our network includes free community nurseries, specialist retailers, and volunteer growing programs.
            </p>
            <Link href="#nurseries" className="btn btn-primary">
              Find Plants Near You
            </Link>
          </div>
        </div>
      </section>

      {/* Free Plants Banner */}
      <div className="bg-hummingbird-gold/15 border-b border-hummingbird-gold/30">
        <div className="container-site py-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎁</span>
            <p className="text-sm text-deep-forest">
              <strong>Reserve creators get free plants.</strong>{" "}
              If you&apos;re starting or maintaining a MiniNature Reserve, visit our community nursery
              on Saturdays for complimentary native plants.{" "}
              <Link href="/get-involved/make-a-reserve" className="underline font-medium text-reserve-green">
                Learn how to make a reserve →
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Nursery Grid */}
      <div id="nurseries" className="container-site py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <h2 className="font-display font-bold text-2xl text-deep-forest mb-6">
              Nurseries &amp; Growing Programs
            </h2>

            {NURSERIES.map((n) => (
              <div key={n.id} className="card-organic bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl shrink-0 mt-1">{n.emoji}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div>
                        <span className={`reserve-type-badge mb-2 inline-block ${n.typeColor}`}>
                          {n.type}
                        </span>
                        {n.free && (
                          <span className="reserve-type-badge ml-2 bg-adoptable/10 text-reserve-green">
                            Free Plants Available
                          </span>
                        )}
                        <h3 className="font-display font-semibold text-deep-forest text-lg leading-tight">
                          {n.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-forest-mid leading-relaxed mb-4">
                      {n.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {n.specialties.map((s) => (
                        <span key={s} className="reserve-type-badge bg-mint-mist text-reserve-green">
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs text-forest-mid">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={11} />
                        <span>{n.address}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={11} />
                        <span>{n.hours}</span>
                      </div>
                      {n.phone && (
                        <div className="flex items-center gap-1.5">
                          <Phone size={11} />
                          <span>{n.phone}</span>
                        </div>
                      )}
                      {n.website && (
                        <a
                          href={n.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-reserve-green hover:underline"
                        >
                          <ExternalLink size={11} />
                          <span>Visit Website</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA */}
            <div className="card-organic bg-reserve-green text-white p-6">
              <Leaf size={20} className="text-sage mb-3" />
              <h3 className="font-display font-semibold text-lg mb-2">
                Make a Reserve, Get Free Plants
              </h3>
              <p className="text-sage text-sm leading-relaxed mb-4">
                Reserve creators receive native plant starter packs. No experience needed —
                we guide you through every step.
              </p>
              <Link href="/get-involved/make-a-reserve" className="btn btn-primary text-sm w-full justify-center">
                Make a Reserve <ArrowRight size={14} />
              </Link>
            </div>

            {/* Growing Tips */}
            <div className="card-organic bg-white border border-lichen-cream p-6">
              <h3 className="font-display font-semibold text-deep-forest text-lg mb-4">
                Quick Growing Tips
              </h3>
              <div className="space-y-4">
                {GROW_TIPS.map((tip) => (
                  <div key={tip.title} className="flex gap-3">
                    <span className="text-xl shrink-0">{tip.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-deep-forest mb-0.5">{tip.title}</p>
                      <p className="text-xs text-forest-mid leading-relaxed">{tip.tip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Propagation Workshops */}
            <div className="card-organic bg-mint-mist border border-sage/20 p-6">
              <h3 className="font-display font-semibold text-deep-forest text-base mb-2">
                Propagation Workshops
              </h3>
              <p className="text-xs text-forest-mid leading-relaxed mb-3">
                Learn to grow your own native plants from seed and cutting in our monthly workshops.
              </p>
              <Link href="/explore/events" className="btn btn-secondary text-sm w-full justify-center">
                View Events <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Submit a Nursery */}
      <section className="bg-deep-forest text-white py-16">
        <div className="container-site text-center max-w-2xl mx-auto">
          <Sprout size={28} className="text-sage mx-auto mb-4" />
          <h2 className="font-display font-bold text-2xl mb-4">Know a great native plant source?</h2>
          <p className="text-sage leading-relaxed mb-6">
            Help us build the most complete native plant resource directory in Southern California.
            Submit a nursery, community garden, or propagation program to be listed here.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Submit a Nursery
          </Link>
        </div>
      </section>
    </div>
  );
}
