import type { Metadata } from "next";
import Link from "next/link";
import { Sprout, ArrowRight, CheckCircle, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Contract Growing & Horticultural Services",
  description:
    "Professional native plant propagation, seed collection, contract growing, and plant sourcing for restoration projects in Ventura County.",
};

const SERVICES = [
  {
    emoji: "🌱",
    title: "Contract Native Plant Growing",
    description:
      "We grow California native plants to order for your restoration, landscaping, or mitigation project. Specify species, quantities, container size, and delivery timeline — we handle the rest.",
    details: [
      "Custom species lists tailored to your project site",
      "Seed-source verified, locally adapted genetics",
      "Container sizes from plugs to 5-gallon",
      "Delivery or pickup from our Oxnard nursery",
    ],
  },
  {
    emoji: "🌾",
    title: "Seed Collection & Processing",
    description:
      "Professional wild seed collection from permitted sites across Ventura County. We collect, clean, test viability, and store seeds for your projects or seed bank.",
    details: [
      "Permitted collection from local wild populations",
      "Species-specific cleaning and processing",
      "Viability testing and documentation",
      "Bulk seed available for direct seeding projects",
    ],
  },
  {
    emoji: "✂️",
    title: "Propagation Services",
    description:
      "Expert propagation from seed, cutting, and division. We specialize in hard-to-grow native species and can scale production for large restoration projects.",
    details: [
      "Seed stratification and scarification protocols",
      "Softwood and hardwood cutting propagation",
      "Division and transplant services",
      "Propagation protocol development for rare species",
    ],
  },
  {
    emoji: "🔍",
    title: "Plant Sourcing",
    description:
      "Need native plants but don't know where to find them? We source from our own nursery and a network of trusted growers across Southern California.",
    details: [
      "Access to 150+ species through our grower network",
      "Quality inspection before delivery",
      "Consolidated ordering and logistics",
      "Substitution recommendations when species are unavailable",
    ],
  },
  {
    emoji: "📋",
    title: "Habitat Restoration Plant Palettes",
    description:
      "Custom plant palettes designed for specific habitat types, soil conditions, and restoration goals. We match species to your site's ecology for maximum establishment success.",
    details: [
      "Coastal sage scrub, riparian, oak woodland, and grassland palettes",
      "Soil and microclimate matching",
      "Seasonal bloom succession planning",
      "Pollinator and wildlife habitat optimization",
    ],
  },
];

const CAPACITY = [
  { label: "Species Available", value: "150+" },
  { label: "Annual Growing Capacity", value: "25,000+ plants" },
  { label: "Seed Species in Collection", value: "80+" },
  { label: "Container Sizes", value: "Plugs to 5-gal" },
];

const CLIENTS = [
  {
    emoji: "📐",
    title: "Landscape Architects",
    description:
      "Native plant sourcing and custom growing for residential, commercial, and public landscape projects.",
  },
  {
    emoji: "🏛️",
    title: "Cities & Agencies",
    description:
      "Contract growing for municipal restoration, median plantings, park projects, and mitigation requirements.",
  },
  {
    emoji: "🌊",
    title: "Restoration Projects",
    description:
      "Large-scale plant production for habitat restoration, stream bank stabilization, and ecological mitigation.",
  },
  {
    emoji: "🏗️",
    title: "Developers",
    description:
      "Native plant sourcing for CEQA mitigation, green infrastructure, and sustainable development landscaping.",
  },
];

export default function HorticulturePage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-reserve-green text-white section-pad">
        <div className="container-site">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono-accent uppercase tracking-widest text-sage">
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <span>Horticulture</span>
          </div>
          <div className="max-w-2xl">
            <Sprout size={32} className="text-hummingbird-gold mb-4" />
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Contract Growing &amp; Horticultural Services
            </h1>
            <p className="text-sage text-lg leading-relaxed mb-6">
              Professional native plant propagation, seed collection, and
              contract growing — from locally adapted genetics, grown right here
              in Ventura County.
            </p>
            <Link href="#inquiry" className="btn btn-primary">
              Inquire About Growing <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Capacity Stats */}
      <div className="bg-deep-forest text-white">
        <div className="container-site py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {CAPACITY.map((stat) => (
              <div key={stat.label}>
                <p className="font-display font-bold text-2xl text-hummingbird-gold">
                  {stat.value}
                </p>
                <p className="text-xs font-mono-accent uppercase tracking-widest text-sage mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-8">
          Our Services
        </h2>
        <div className="space-y-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="card-organic bg-white p-6 border border-lichen-cream"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl shrink-0">{service.emoji}</span>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-deep-forest text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-forest-mid leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <CheckCircle
                          size={14}
                          className="text-reserve-green shrink-0 mt-0.5"
                        />
                        <span className="text-sm text-forest-mid">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who Uses This */}
      <section className="bg-mint-mist py-16">
        <div className="container-site">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-8 text-center">
            Who Uses Our Growing Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLIENTS.map((client) => (
              <div
                key={client.title}
                className="card-organic bg-white p-6 border border-lichen-cream text-center"
              >
                <span className="text-3xl block mb-3">{client.emoji}</span>
                <h3 className="font-display font-semibold text-deep-forest text-base mb-2">
                  {client.title}
                </h3>
                <p className="text-xs text-forest-mid leading-relaxed">
                  {client.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="bg-deep-forest text-white py-16">
        <div className="container-site max-w-2xl mx-auto">
          <Send size={28} className="text-sage mx-auto mb-4" />
          <h2 className="font-display font-bold text-2xl mb-2 text-center">
            Growing Inquiry
          </h2>
          <p className="text-sage text-center mb-8">
            Tell us what you need and we&apos;ll put together a growing proposal
            with timeline and pricing.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
                  Organization
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
                  placeholder="Your organization"
                />
              </div>
              <div>
                <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
                  Contact Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
                  placeholder="you@org.com"
                />
              </div>
              <div>
                <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
                  Service Type
                </label>
                <select className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-hummingbird-gold">
                  <option value="">Select a service</option>
                  <option value="contract-growing">Contract Growing</option>
                  <option value="seed-collection">Seed Collection</option>
                  <option value="propagation">Propagation Services</option>
                  <option value="plant-sourcing">Plant Sourcing</option>
                  <option value="plant-palette">Plant Palette Design</option>
                  <option value="multiple">Multiple Services</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
                Project Details
              </label>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
                placeholder="Describe species needed, quantities, container sizes, timeline, and project location..."
              />
            </div>
            <button type="submit" className="btn btn-primary w-full justify-center">
              Submit Inquiry <ArrowRight size={14} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
