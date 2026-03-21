import type { Metadata } from "next";
import Link from "next/link";
import { Compass, ArrowRight, CheckCircle, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Consulting Services",
  description:
    "Expert guidance on habitat restoration planning, native plant palettes, grant writing, community engagement, and biodiversity assessments.",
};

const CONSULTING_AREAS = [
  {
    emoji: "🗺️",
    title: "Habitat Restoration Planning",
    description:
      "Comprehensive restoration plans for degraded sites — from initial assessment through long-term monitoring. We design phased approaches that work with your budget and timeline.",
    details: [
      "Site assessment and ecological baseline survey",
      "Restoration goal setting and success metrics",
      "Phased implementation plan",
      "Species selection and planting design",
      "Monitoring and adaptive management protocols",
    ],
  },
  {
    emoji: "🌿",
    title: "Native Plant Palette Design",
    description:
      "Custom plant palettes for landscape projects, mitigation sites, and green infrastructure. We match species to your site conditions, aesthetic goals, and ecological objectives.",
    details: [
      "Microclimate and soil analysis",
      "Species lists with sourcing guidance",
      "Seasonal bloom succession planning",
      "Pollinator and wildlife habitat integration",
      "Irrigation reduction strategies",
    ],
  },
  {
    emoji: "📝",
    title: "Grant Writing Support",
    description:
      "Help securing funding for green projects from state, federal, and private sources. We assist with proposal narratives, budgets, and environmental justifications.",
    details: [
      "Grant opportunity research and matching",
      "Proposal narrative development",
      "Budget preparation and justification",
      "Environmental benefit documentation",
      "Reporting compliance support",
    ],
  },
  {
    emoji: "🤝",
    title: "Community Engagement Strategy",
    description:
      "Design outreach programs that build community support for environmental projects. From volunteer programs to public education campaigns, we help you engage your community.",
    details: [
      "Stakeholder mapping and analysis",
      "Volunteer program design",
      "Public meeting facilitation",
      "Educational material development",
      "Social media and outreach strategy",
    ],
  },
  {
    emoji: "🔬",
    title: "Biodiversity Assessments",
    description:
      "Document the plant and wildlife species on your property or project site. Our assessments provide the ecological data you need for planning, permitting, and grant applications.",
    details: [
      "Native and non-native plant species inventory",
      "Pollinator and bird surveys",
      "Habitat quality evaluation",
      "Recommendations for ecological improvement",
      "Photo documentation and reporting",
    ],
  },
];

const CLIENTS = [
  { emoji: "🏛️", title: "Cities & Agencies", description: "Municipal planning, public works, and parks departments seeking ecological expertise." },
  { emoji: "💚", title: "Nonprofits", description: "Conservation organizations, land trusts, and community groups needing technical support." },
  { emoji: "🏗️", title: "Developers", description: "Projects requiring CEQA compliance, mitigation planning, or green infrastructure design." },
  { emoji: "📐", title: "Landscape Architects", description: "Firms looking for native plant expertise and ecological design partnership." },
  { emoji: "🏫", title: "Schools & Universities", description: "Campus sustainability projects, outdoor classrooms, and research partnerships." },
];

const PROCESS = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "A free 30-minute conversation to understand your project, goals, and constraints. We determine if we are the right fit.",
  },
  {
    step: "02",
    title: "Scope Definition",
    description:
      "We define deliverables, timeline, and budget. For nonprofits, we discuss sliding-scale options.",
  },
  {
    step: "03",
    title: "Proposal",
    description:
      "You receive a clear proposal outlining our approach, deliverables, timeline, and cost — no surprises.",
  },
  {
    step: "04",
    title: "Engagement",
    description:
      "We dive in. Regular check-ins, transparent communication, and deliverables on schedule.",
  },
];

export default function ConsultingPage() {
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
            <span>Consulting</span>
          </div>
          <div className="max-w-2xl">
            <Compass size={32} className="text-hummingbird-gold mb-4" />
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Consulting
            </h1>
            <p className="text-sage text-lg leading-relaxed mb-6">
              Expert guidance on habitat restoration, native plant design, grant
              writing, and community engagement — grounded in Ventura County
              ecology and real-world project experience.
            </p>
            <Link href="#contact" className="btn btn-primary">
              Schedule a Discovery Call <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Consulting Areas */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-8">
          Consulting Areas
        </h2>
        <div className="space-y-6">
          {CONSULTING_AREAS.map((area) => (
            <div
              key={area.title}
              className="card-organic bg-white p-6 border border-lichen-cream"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl shrink-0">{area.emoji}</span>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-deep-forest text-lg mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm text-forest-mid leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <ul className="space-y-2">
                    {area.details.map((detail) => (
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

      {/* Who Hires Us */}
      <section className="bg-mint-mist py-16">
        <div className="container-site">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-8 text-center">
            Who Hires Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CLIENTS.map((client) => (
              <div
                key={client.title}
                className="card-organic bg-white p-5 border border-lichen-cream text-center"
              >
                <span className="text-2xl block mb-2">{client.emoji}</span>
                <h3 className="font-display font-semibold text-deep-forest text-sm mb-1">
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

      {/* Process */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-8 text-center">
          How We Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {PROCESS.map((step) => (
            <div key={step.step} className="text-center">
              <div className="w-12 h-12 bg-reserve-green text-white rounded-full flex items-center justify-center font-mono-accent text-sm font-bold mx-auto mb-3">
                {step.step}
              </div>
              <h3 className="font-display font-semibold text-deep-forest text-base mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-forest-mid leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Rates */}
      <section className="bg-lichen-cream py-16">
        <div className="container-site max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-6 text-center">
            Rates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-organic bg-white p-6 border border-lichen-cream">
              <h3 className="font-display font-semibold text-deep-forest text-lg mb-2">
                Hourly Consulting
              </h3>
              <p className="font-display font-bold text-2xl text-reserve-green mb-2">
                $85 – $125<span className="text-sm font-normal text-forest-mid"> / hour</span>
              </p>
              <p className="text-sm text-forest-mid leading-relaxed">
                For advisory calls, design review, site visits, and short-term
                technical support. Sliding scale available for nonprofits and
                community organizations.
              </p>
            </div>
            <div className="card-organic bg-white p-6 border border-lichen-cream">
              <h3 className="font-display font-semibold text-deep-forest text-lg mb-2">
                Project-Based
              </h3>
              <p className="font-display font-bold text-2xl text-reserve-green mb-2">
                Custom Scope
              </p>
              <p className="text-sm text-forest-mid leading-relaxed">
                For restoration plans, grant applications, biodiversity
                assessments, and multi-phase engagements. We provide a fixed-fee
                proposal based on deliverables. Sliding scale for nonprofits.
              </p>
            </div>
          </div>
          <p className="text-xs text-forest-mid text-center mt-4 italic">
            All consulting revenue funds MiniNature&apos;s free community
            conservation programs.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="bg-deep-forest text-white py-16">
        <div className="container-site max-w-2xl mx-auto">
          <Send size={28} className="text-sage mx-auto mb-4" />
          <h2 className="font-display font-bold text-2xl mb-2 text-center">
            Start a Conversation
          </h2>
          <p className="text-sage text-center mb-8">
            Tell us about your project and we&apos;ll schedule a free 30-minute
            discovery call to explore how we can help.
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
                  Consulting Area
                </label>
                <select className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-hummingbird-gold">
                  <option value="">Select an area</option>
                  <option value="restoration">Habitat Restoration Planning</option>
                  <option value="plant-palette">Native Plant Palette Design</option>
                  <option value="grants">Grant Writing Support</option>
                  <option value="engagement">Community Engagement Strategy</option>
                  <option value="biodiversity">Biodiversity Assessment</option>
                  <option value="other">Other / Multiple</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
                Project Description
              </label>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
                placeholder="Describe your project, goals, timeline, and any specific questions you have..."
              />
            </div>
            <button type="submit" className="btn btn-primary w-full justify-center">
              Request a Discovery Call <ArrowRight size={14} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
