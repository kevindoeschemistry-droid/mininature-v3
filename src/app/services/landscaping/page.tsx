import type { Metadata } from "next";
import Link from "next/link";
import { Flower2, ArrowRight, CheckCircle, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Native Landscaping Services",
  description:
    "Professional native plant design, installation, and maintenance for organizations, businesses, and public spaces in Ventura County.",
};

const SERVICE_AREAS = [
  {
    emoji: "🎨",
    title: "Design & Installation",
    description:
      "Custom native plant landscape designs tailored to your site's soil, sun, and water conditions. We handle everything from plant selection to ground preparation and planting.",
    includes: [
      "Site assessment and soil analysis",
      "Custom planting plan with native species palette",
      "Irrigation design (drip systems preferred)",
      "Ground preparation and mulching",
      "Professional installation by trained crew",
      "Plant sourcing from local native nurseries",
    ],
    pricing: "Contact for a project quote — pricing based on site size and scope.",
  },
  {
    emoji: "💰",
    title: "Fundraising Support",
    description:
      "We help organizations secure funding for their native landscaping projects through grant writing assistance, donor engagement strategies, and community fundraising event planning.",
    includes: [
      "Grant research and application support",
      "Project budget development",
      "Donor outreach materials",
      "Community fundraising event coordination",
      "Impact reporting for funders",
    ],
    pricing: "Contact for a consultation — sliding scale available for nonprofits.",
  },
  {
    emoji: "🎉",
    title: "Community Event Facilitation",
    description:
      "Turn your landscaping project into a community-building event. We organize volunteer planting days, educational workshops, and celebration events around your installation.",
    includes: [
      "Volunteer recruitment and coordination",
      "Tool and material provisioning",
      "On-site training for volunteer planters",
      "Photography and social media coverage",
      "Post-event impact summary",
    ],
    pricing: "Contact for event planning quote — can be bundled with installation.",
  },
  {
    emoji: "🔧",
    title: "Ongoing Maintenance",
    description:
      "Native landscapes need less maintenance than conventional ones, but they still benefit from expert care — especially in the first two years of establishment.",
    includes: [
      "Seasonal weeding and invasive removal",
      "Irrigation monitoring and adjustment",
      "Plant health assessments",
      "Pruning and deadheading",
      "Annual species diversity report",
      "Replanting as needed",
    ],
    pricing: "Monthly and quarterly plans available — contact for rates.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We visit your site, discuss your goals, assess conditions, and determine the best approach for a thriving native landscape.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Our team creates a custom planting plan with species selected for your specific microclimate, soil type, and aesthetic goals.",
  },
  {
    step: "03",
    title: "Installation",
    description:
      "Professional crew handles ground prep, irrigation, planting, and mulching. Community planting days available for qualifying projects.",
  },
  {
    step: "04",
    title: "Maintenance Plan",
    description:
      "We provide a tailored care schedule and offer ongoing maintenance to ensure your landscape establishes and thrives long-term.",
  },
];

const PORTFOLIO = [
  {
    title: "Oxnard Community Center Courtyard",
    description:
      "Replaced 2,400 sq ft of turf with drought-tolerant native plantings including California Fuchsia, Deer Grass, and Cleveland Sage. Water use reduced by 70%.",
    size: "2,400 sq ft",
  },
  {
    title: "Ventura Business Park Entryway",
    description:
      "Designed and installed a welcoming native plant entrance garden featuring Toyon, Manzanita, and seasonal wildflowers for year-round color.",
    size: "1,800 sq ft",
  },
  {
    title: "Camarillo School Garden",
    description:
      "Created an outdoor learning garden with labeled native species, a pollinator habitat zone, and a seed-saving station for student use.",
    size: "3,200 sq ft",
  },
];

export default function LandscapingPage() {
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
            <span>Landscaping</span>
          </div>
          <div className="max-w-2xl">
            <Flower2 size={32} className="text-hummingbird-gold mb-4" />
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Native Landscaping
            </h1>
            <p className="text-sage text-lg leading-relaxed mb-4">
              Professional native plant design, installation, and maintenance
              that transforms ordinary spaces into thriving habitats.
            </p>
            <div className="bg-white/10 rounded-lg p-3 mb-6">
              <p className="text-sm text-mint-mist">
                📋 <strong>Note:</strong> Our landscaping services are for
                organizations, businesses, municipalities, and institutions —
                not private residences.
              </p>
            </div>
            <Link href="#request-quote" className="btn btn-primary">
              Request a Quote <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-8">
          Service Areas
        </h2>
        <div className="space-y-8">
          {SERVICE_AREAS.map((area) => (
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
                  <div className="mb-4">
                    <p className="text-xs font-mono-accent uppercase tracking-widest text-sage mb-2">
                      What&apos;s Included
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {area.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle
                            size={14}
                            className="text-reserve-green shrink-0 mt-0.5"
                          />
                          <span className="text-sm text-forest-mid">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-forest-mid italic">{area.pricing}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-mint-mist py-16">
        <div className="container-site">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-8 text-center">
            Our Process
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
        </div>
      </section>

      {/* Portfolio */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-8">
          Recent Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO.map((project) => (
            <div
              key={project.title}
              className="card-organic bg-white border border-lichen-cream overflow-hidden"
            >
              <div className="bg-sage/20 h-48 flex items-center justify-center">
                <span className="text-4xl">📷</span>
              </div>
              <div className="p-6">
                <span className="text-xs font-mono-accent uppercase tracking-widest text-sage">
                  {project.size}
                </span>
                <h3 className="font-display font-semibold text-deep-forest text-base mt-1 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-forest-mid leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Request a Quote */}
      <section id="request-quote" className="bg-deep-forest text-white py-16">
        <div className="container-site max-w-2xl mx-auto">
          <Send size={28} className="text-sage mx-auto mb-4" />
          <h2 className="font-display font-bold text-2xl mb-2 text-center">
            Request a Quote
          </h2>
          <p className="text-sage text-center mb-8">
            Tell us about your project and we&apos;ll get back to you within two
            business days.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
                  Organization Name
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
                  Approximate Site Size
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
                  placeholder="e.g. 2,000 sq ft"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
                Project Description
              </label>
              <textarea
                rows={4}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
                placeholder="Tell us about your site, goals, timeline, and any existing conditions..."
              />
            </div>
            <button type="submit" className="btn btn-primary w-full justify-center">
              Submit Request <ArrowRight size={14} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
