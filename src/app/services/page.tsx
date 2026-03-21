import type { Metadata } from "next";
import {
  Wrench,
  ArrowRight,
  Leaf,
  Users,
  Heart,
  MapPin,
  Flower2,
  Building2,
  BookOpen,
  Sprout,
  Footprints,
  Flame,
  Compass,
  CheckCircle,
  Send,
} from "lucide-react";
import ServiceInquiryForm from "./ServiceInquiryForm";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional native landscaping, consulting, and horticultural services for organizations, municipalities, and institutions in Ventura County.",
};

const SERVICES = [
  {
    id: "landscaping",
    icon: Flower2,
    emoji: "🌿",
    title: "Landscaping",
    description:
      "Professional native plant design, installation, and maintenance that transforms ordinary spaces into thriving habitats. Our landscaping services are for organizations, businesses, municipalities, and institutions — not private residences.",
    offerings: [
      "Custom native plant landscape design and site assessment",
      "Professional installation with irrigation design",
      "Fundraising support and grant application assistance",
      "Community planting day event facilitation",
      "Ongoing maintenance plans (monthly and quarterly)",
      "Plant sourcing from local native nurseries",
    ],
  },
  {
    id: "municipalities",
    icon: Building2,
    emoji: "🏛️",
    title: "For Municipalities",
    description:
      "Partner with local government to green public spaces using native plants. We design and install resilient landscapes for rights-of-way, parks, medians, and stormwater infrastructure that reduce maintenance costs and fight urban heat islands.",
    offerings: [
      "Right-of-way native plantings and beautification",
      "Park restoration and habitat creation",
      "Median and streetscape native landscaping",
      "Stormwater bioswale and rain garden design",
      "Urban heat island mitigation strategies",
      "Public space pollinator habitat corridors",
    ],
  },
  {
    id: "education",
    icon: BookOpen,
    emoji: "📚",
    title: "Educational Activities",
    description:
      "Book engaging, hands-on environmental education experiences for your school, community group, or organization. Our programs connect people with Ventura County's native ecosystems through direct experience.",
    offerings: [
      "Guided native plant identification walks",
      "Pollinator habitat and ecology workshops",
      "Seed saving and propagation classes",
      "School garden design and installation",
      "Community planting day coordination",
      "Youth conservation leadership programs",
    ],
  },
  {
    id: "horticulture",
    icon: Sprout,
    emoji: "🌱",
    title: "Contract Growing & Horticulture",
    description:
      "Professional native plant propagation and contract growing for restoration projects, landscapers, and agencies. We grow locally sourced, genetically appropriate native plants for Ventura County ecosystems.",
    offerings: [
      "Contract growing of native species to specification",
      "Seed collection from local wild populations",
      "Native plant propagation and nursery services",
      "Wholesale native plant supply for large projects",
      "Custom species mixes for restoration sites",
      "Consultation on plant sourcing and genetics",
    ],
  },
  {
    id: "trail-maintenance",
    icon: Footprints,
    emoji: "🥾",
    title: "Trail Maintenance",
    description:
      "Keep Ventura County's trails safe, accessible, and ecologically healthy. Our crews handle clearing, erosion control, revegetation, and signage installation for public lands and trail systems.",
    offerings: [
      "Trail clearing and brush management",
      "Erosion control and drainage improvement",
      "Native revegetation along trail corridors",
      "Interpretive signage design and installation",
      "Trailhead habitat restoration",
      "Volunteer trail day coordination",
    ],
  },
  {
    id: "weed-abatement",
    icon: Flame,
    emoji: "🔥",
    title: "Weed Abatement",
    description:
      "Invasive species management done right — not just clear-cutting, but ecological restoration. We remove invasive plants and replace them with native species that restore habitat, reduce fire risk, and prevent re-invasion.",
    offerings: [
      "Invasive species identification and mapping",
      "Targeted removal with minimal site disturbance",
      "Native replanting to prevent re-invasion",
      "Fire risk reduction through native transition",
      "Long-term management and monitoring plans",
      "Compliance documentation and reporting",
    ],
  },
  {
    id: "consulting",
    icon: Compass,
    emoji: "🧭",
    title: "Consulting",
    description:
      "Expert guidance on habitat restoration planning, native plant palettes, grant writing, community engagement, and biodiversity assessments — grounded in Ventura County ecology and real-world project experience.",
    offerings: [
      "Habitat restoration planning and phased implementation",
      "Native plant palette design for any site conditions",
      "Grant writing support and funding strategy",
      "Community engagement and outreach programs",
      "Biodiversity assessments and species inventories",
      "CEQA compliance and mitigation planning support",
    ],
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
            <a href="#inquiry" className="btn btn-primary">
              Request a Consultation <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-12">
          What We Offer
        </h2>
        <div className="space-y-12">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`card-organic bg-white p-8 border border-lichen-cream ${
                index % 2 === 1 ? "md:ml-8" : "md:mr-8"
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-mint-mist rounded-full flex items-center justify-center shrink-0">
                  <service.icon size={22} className="text-reserve-green" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-deep-forest text-xl md:text-2xl">
                    {service.title}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-forest-mid leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="mb-6">
                <p className="text-xs font-mono-accent uppercase tracking-widest text-sage mb-3">
                  Key Offerings
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {service.offerings.map((item) => (
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
              <a
                href="#inquiry"
                className="inline-flex items-center gap-1 text-sm font-medium text-reserve-green hover:text-deep-forest transition-colors"
              >
                Inquire about {service.title} <ArrowRight size={13} />
              </a>
            </div>
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

      {/* Inquiry Form */}
      <section id="inquiry" className="bg-deep-forest text-white py-16">
        <div className="container-site max-w-2xl mx-auto">
          <Send size={28} className="text-sage mx-auto mb-4" />
          <h2 className="font-display font-bold text-2xl mb-2 text-center">
            Request a Quote
          </h2>
          <p className="text-sage text-center mb-8">
            Tell us about your project and we&apos;ll connect you with the right
            team member. All service revenue funds our community conservation
            programs.
          </p>
          <ServiceInquiryForm />
        </div>
      </section>
    </div>
  );
}
