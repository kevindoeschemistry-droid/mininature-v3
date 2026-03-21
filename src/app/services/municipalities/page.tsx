import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  ArrowRight,
  CheckCircle,
  Droplets,
  TreePine,
  Sun,
  DollarSign,
  Send,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Municipal Services",
  description:
    "Native habitat restoration services for cities and government agencies — right-of-way plantings, park restoration, stormwater management, and more.",
};

const SERVICES = [
  {
    emoji: "🛤️",
    title: "Public Right-of-Way Plantings",
    description:
      "Transform bare medians, parkway strips, and road shoulders into low-maintenance native landscapes that conserve water and beautify neighborhoods.",
  },
  {
    emoji: "🏞️",
    title: "Park Restoration",
    description:
      "Restore degraded park areas with native plant communities that support pollinators, birds, and beneficial insects while reducing irrigation costs.",
  },
  {
    emoji: "🌺",
    title: "Median Beautification",
    description:
      "Replace high-water, high-maintenance median plantings with drought-adapted native species that provide year-round color and texture.",
  },
  {
    emoji: "💧",
    title: "Stormwater Management",
    description:
      "Design and install bioswales, rain gardens, and infiltration basins using native plants to manage runoff, filter pollutants, and recharge groundwater.",
  },
  {
    emoji: "🌡️",
    title: "Urban Heat Island Mitigation",
    description:
      "Strategic native tree and shrub plantings to reduce surface temperatures, improve air quality, and create comfortable outdoor spaces for residents.",
  },
];

const BENEFITS = [
  {
    icon: Droplets,
    title: "Water Savings",
    description:
      "Native plants require 60–80% less irrigation than conventional landscapes once established. Most cities see measurable water savings within 18 months.",
  },
  {
    icon: DollarSign,
    title: "Reduced Maintenance Costs",
    description:
      "No mowing, minimal pruning, no fertilizer, and no pesticides. Native landscapes typically cost 50% less to maintain than turf.",
  },
  {
    icon: TreePine,
    title: "Habitat Corridors",
    description:
      "Connected native plantings create wildlife corridors that support birds, butterflies, and native bees across urban environments.",
  },
  {
    icon: Sun,
    title: "Community Beautification",
    description:
      "Native landscapes build neighborhood pride and provide seasonal beauty — spring wildflowers, summer hummingbirds, fall color.",
  },
  {
    icon: CheckCircle,
    title: "Grant Eligibility",
    description:
      "Native restoration projects qualify for state and federal grants including CalRecycle, Urban Greening, and EPA Green Infrastructure funding.",
  },
];

export default function MunicipalitiesPage() {
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
            <span>Municipalities</span>
          </div>
          <div className="max-w-2xl">
            <Building2 size={32} className="text-hummingbird-gold mb-4" />
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Municipal Services
            </h1>
            <p className="text-sage text-lg leading-relaxed mb-6">
              Partner with MiniNature to bring native habitat to your city&apos;s
              public spaces. We handle design, installation, community engagement,
              and long-term stewardship — so your team doesn&apos;t have to.
            </p>
            <Link href="#municipal-inquiry" className="btn btn-primary">
              Start a Conversation <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-8">
          What We Do for Cities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="card-organic bg-white p-6 border border-lichen-cream"
            >
              <span className="text-3xl block mb-3">{service.emoji}</span>
              <h3 className="font-display font-semibold text-deep-forest text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-forest-mid leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-mint-mist py-16">
        <div className="container-site">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-8 text-center">
            Benefits for Your City
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="card-organic bg-white p-6 border border-lichen-cream"
              >
                <benefit.icon size={22} className="text-reserve-green mb-3" />
                <h3 className="font-display font-semibold text-deep-forest text-base mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-forest-mid leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="container-site py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-mono-accent uppercase tracking-widest text-sage mb-2 block">
              Case Study
            </span>
            <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
              City of Oxnard Partnership
            </h2>
            <p className="text-sm text-forest-mid leading-relaxed mb-4">
              Since 2022, MiniNature has partnered with the City of Oxnard to
              restore native habitat on city-owned parcels throughout the
              community. What started as a single median project has grown into a
              citywide program.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <CheckCircle size={16} className="text-reserve-green shrink-0" />
                <span className="text-sm text-forest-mid">
                  12 native habitat reserves installed on public land
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={16} className="text-reserve-green shrink-0" />
                <span className="text-sm text-forest-mid">
                  22,000+ sq ft of turf converted to native habitat
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={16} className="text-reserve-green shrink-0" />
                <span className="text-sm text-forest-mid">
                  Estimated 65% reduction in irrigation costs
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={16} className="text-reserve-green shrink-0" />
                <span className="text-sm text-forest-mid">
                  300+ community volunteers engaged in planting days
                </span>
              </div>
            </div>
            <Link href="/contact" className="btn btn-secondary">
              Read the Full Story <ArrowRight size={14} />
            </Link>
          </div>
          <div className="card-organic bg-sage/20 h-80 flex items-center justify-center">
            <div className="text-center">
              <span className="text-5xl block mb-3">🏙️</span>
              <p className="text-sm text-forest-mid">Project photos coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="municipal-inquiry" className="bg-deep-forest text-white py-16">
        <div className="container-site max-w-2xl mx-auto">
          <Send size={28} className="text-sage mx-auto mb-4" />
          <h2 className="font-display font-bold text-2xl mb-2 text-center">
            Municipal Inquiry
          </h2>
          <p className="text-sage text-center mb-8">
            Let&apos;s discuss how native habitat can benefit your city. We&apos;ll
            schedule a no-obligation site walk to explore possibilities.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
                  City / Agency Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
                  placeholder="e.g. City of Ventura"
                />
              </div>
              <div>
                <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
                  Department
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
                  placeholder="e.g. Parks & Recreation"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <div>
                <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
                  placeholder="you@city.gov"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
                Services of Interest
              </label>
              <select className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-hummingbird-gold">
                <option value="">Select a service area</option>
                <option value="row">Public Right-of-Way Plantings</option>
                <option value="park">Park Restoration</option>
                <option value="median">Median Beautification</option>
                <option value="stormwater">Stormwater Management</option>
                <option value="heat">Urban Heat Island Mitigation</option>
                <option value="multiple">Multiple Services</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
                Project Details
              </label>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
                placeholder="Tell us about the sites you're considering, budget timeline, and any specific goals..."
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
