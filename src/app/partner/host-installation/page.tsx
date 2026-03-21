import type { Metadata } from "next";
import Link from "next/link";
import { Building, CheckCircle, ArrowRight, ClipboardList, Search, Paintbrush, Shovel, HeartHandshake } from "lucide-react";
import HostInstallationForm from "./HostInstallationForm";

export const metadata: Metadata = {
  title: "Host an MNR Installation",
  description: "Bring a MiniNature Reserve to your business, church, or community space. We handle design, installation, and ongoing support.",
};

const WHO_CAN_HOST = [
  { emoji: "🏢", label: "Businesses & Offices", description: "Storefronts, office parks, parking lot edges, employee courtyards" },
  { emoji: "⛪", label: "Churches & Faith Communities", description: "Churchyards, fellowship hall gardens, memorial spaces" },
  { emoji: "🏛️", label: "Community Centers", description: "Public-facing grounds, entryway plantings, gathering areas" },
  { emoji: "🏘️", label: "HOAs & Apartment Complexes", description: "Common areas, pool surrounds, entrance medians" },
  { emoji: "🌳", label: "Parks & Recreation", description: "Park edges, trail buffers, picnic area borders" },
  { emoji: "📚", label: "Libraries & Schools", description: "Reading gardens, outdoor classrooms, campus entries" },
];

const WE_PROVIDE = [
  "Free site assessment and feasibility review",
  "Custom ecological planting design",
  "All native plants and materials",
  "Professional installation or volunteer install day",
  "Interpretive signage with plant IDs and QR codes",
  "18 months of post-installation monitoring",
  "Listing on the MiniNature Reserve map",
];

const YOU_PROVIDE = [
  "A suitable outdoor space (min. 50 sq ft)",
  "Written permission from the property owner",
  "Access to water for the first establishment year",
  "A site contact for coordination",
  "Willingness to keep the reserve accessible to the public",
];

const PROCESS = [
  { icon: ClipboardList, step: "01", title: "Inquiry", description: "Fill out the form below or call us. Tell us about your space, goals, and timeline." },
  { icon: Search, step: "02", title: "Site Assessment", description: "Our team visits to evaluate sun, soil, drainage, and foot traffic. We'll tell you honestly if the site is a fit." },
  { icon: Paintbrush, step: "03", title: "Design", description: "We create a custom native planting plan tailored to your site conditions and aesthetic preferences." },
  { icon: Shovel, step: "04", title: "Installation", description: "Our crew installs the reserve — or we organize a community volunteer install day for your team." },
  { icon: HeartHandshake, step: "05", title: "Ongoing Support", description: "Trained Reservists monitor the habitat. You get quarterly updates, species counts, and a proud new sign." },
];

export default function HostInstallationPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-reserve-green text-white section-pad">
        <div className="container-site">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono-accent uppercase tracking-widest text-sage">
            <Link href="/partner" className="hover:text-white transition-colors">Partnerships</Link>
            <span>/</span>
            <span>Host an Installation</span>
          </div>
          <div className="max-w-2xl">
            <Building size={32} className="text-hummingbird-gold mb-4" />
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Host an MNR Installation<br />
              <em className="text-hummingbird-gold not-italic">at Your Space</em>
            </h1>
            <p className="text-sage text-lg leading-relaxed mb-6">
              Transform an unused corner of your property into a thriving native habitat.
              We design, install, and steward it — you provide the space and the welcome.
            </p>
            <a href="#inquiry-form" className="btn btn-primary">
              Start Your Inquiry <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Who Can Host */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-2">Who Can Host?</h2>
        <p className="text-forest-mid text-sm mb-8 max-w-xl">
          MNR installations are designed for organizations and public-facing spaces —
          <strong className="text-deep-forest"> not private homes</strong>. If you&apos;re a homeowner,
          check out our <Link href="/services#landscaping" className="text-reserve-green underline hover:text-deep-forest transition-colors">landscaping services</Link> instead.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHO_CAN_HOST.map((h) => (
            <div key={h.label} className="card-organic bg-white p-6 border border-lichen-cream">
              <span className="text-2xl mb-3 block">{h.emoji}</span>
              <h3 className="font-display font-semibold text-deep-forest text-lg mb-1">{h.label}</h3>
              <p className="text-sm text-forest-mid leading-relaxed">{h.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We / You Provide */}
      <section className="bg-lichen-cream py-16">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card-organic bg-reserve-green text-white p-8">
              <h3 className="font-display font-bold text-xl mb-6">🌿 What We Provide</h3>
              <div className="space-y-3">
                {WE_PROVIDE.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-hummingbird-gold shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-organic bg-white p-8 border border-lichen-cream">
              <h3 className="font-display font-bold text-xl text-deep-forest mb-6">🤝 What You Provide</h3>
              <div className="space-y-3">
                {YOU_PROVIDE.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-reserve-green shrink-0 mt-0.5" />
                    <span className="text-sm text-forest-mid leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-2 text-center">The Process</h2>
        <p className="text-forest-mid text-sm mb-10 text-center max-w-lg mx-auto">
          From first conversation to thriving habitat — here&apos;s how it works.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {PROCESS.map((p) => (
            <div key={p.step} className="text-center">
              <div className="bg-mint-mist w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <p.icon size={22} className="text-reserve-green" />
              </div>
              <div className="text-xs font-mono-accent text-sage mb-1">Step {p.step}</div>
              <h3 className="font-display font-semibold text-deep-forest mb-2">{p.title}</h3>
              <p className="text-xs text-forest-mid leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Landscaping CTA */}
      <section className="bg-deep-forest text-white py-12">
        <div className="container-site text-center max-w-xl">
          <p className="text-sage text-sm mb-3">Looking for something different?</p>
          <h2 className="font-display font-bold text-xl mb-4">
            Want Native Plants at Your Home?
          </h2>
          <p className="text-sage text-sm mb-6 leading-relaxed">
            Our MNR installations are for organizations, but we also offer full native landscaping
            services for residential properties.
          </p>
          <Link href="/services#landscaping" className="btn btn-primary">
            View Landscaping Services <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="container-site py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-2 text-center">
            Start Your Inquiry
          </h2>
          <p className="text-forest-mid text-sm mb-8 text-center">
            Tell us about your space and we&apos;ll be in touch within a few days to discuss next steps.
          </p>
          <HostInstallationForm />
        </div>
      </section>
    </div>
  );
}
