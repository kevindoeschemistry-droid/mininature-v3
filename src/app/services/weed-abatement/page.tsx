import type { Metadata } from "next";
import Link from "next/link";
import { Bug, ArrowRight, CheckCircle, AlertTriangle, Send } from "lucide-react";
import WeedAbatementForm from "./WeedAbatementForm";

export const metadata: Metadata = {
  title: "Weed Abatement & Invasive Species Management",
  description:
    "Ecological invasive species management — identify, remove, and replace with natives for lasting results in Ventura County.",
};

const INVASIVES = [
  {
    name: "Black Mustard",
    scientific: "Brassica nigra",
    emoji: "🌼",
    threat:
      "Dominates grasslands and disturbed areas, displaces native wildflowers, and increases fire risk with dry stalks.",
  },
  {
    name: "Ice Plant",
    scientific: "Carpobrotus edulis",
    emoji: "🟢",
    threat:
      "Smothers coastal bluffs and dunes, prevents native plant establishment, and destabilizes slopes despite its ground-cover appearance.",
  },
  {
    name: "Fountain Grass",
    scientific: "Pennisetum setaceum",
    emoji: "🌾",
    threat:
      "Highly flammable ornamental grass that escapes cultivation and outcompetes native bunch grasses in dry habitats.",
  },
  {
    name: "Tree Tobacco",
    scientific: "Nicotiana glauca",
    emoji: "🚬",
    threat:
      "Fast-growing invasive shrub that colonizes riparian areas and disturbed land. Toxic to wildlife and livestock.",
  },
  {
    name: "Castor Bean",
    scientific: "Ricinus communis",
    emoji: "☠️",
    threat:
      "Aggressive colonizer of waterways and vacant lots. All parts are highly toxic. Forms dense thickets that exclude native species.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Initial Assessment",
    description:
      "We survey your site to identify invasive species present, assess severity, map distribution, and evaluate native plant remnants worth protecting.",
  },
  {
    step: "02",
    title: "Removal Plan",
    description:
      "Custom removal strategy prioritizing the most ecologically damaging species first, using methods appropriate to each species — manual, mechanical, or targeted treatment.",
  },
  {
    step: "03",
    title: "Native Replanting",
    description:
      "Cleared areas are replanted with locally sourced native species selected to outcompete returning invasives and build resilient habitat.",
  },
  {
    step: "04",
    title: "Monitoring & Follow-Up",
    description:
      "Invasives come back. We schedule follow-up visits to remove regrowth, assess native establishment, and adjust the strategy as needed.",
  },
];

export default function WeedAbatementPage() {
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
            <span>Weed Abatement</span>
          </div>
          <div className="max-w-2xl">
            <Bug size={32} className="text-hummingbird-gold mb-4" />
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Weed Abatement &amp; Invasive Species Management
            </h1>
            <p className="text-sage text-lg leading-relaxed mb-6">
              We don&apos;t just clear weeds — we replace them with native plants
              that prevent reinvasion and build lasting habitat. Ecological weed
              management for Ventura County.
            </p>
            <Link href="#request" className="btn btn-primary">
              Request an Assessment <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="container-site py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
              Our Approach: Remove &amp; Replace
            </h2>
            <p className="text-sm text-forest-mid leading-relaxed mb-4">
              Most weed abatement just clear-cuts everything and walks away.
              That&apos;s a recipe for re-invasion — bare soil is an open
              invitation for aggressive invasive species to return even stronger.
            </p>
            <p className="text-sm text-forest-mid leading-relaxed mb-6">
              MiniNature takes a different approach: we identify invasive species,
              remove them using ecologically sound methods, and immediately
              replant with native species that will outcompete returning weeds.
              The result is not just a cleared lot, but the beginning of a
              functioning native ecosystem.
            </p>
            <div className="card-organic bg-hummingbird-gold/10 p-4 border border-hummingbird-gold/30">
              <div className="flex items-start gap-3">
                <AlertTriangle size={18} className="text-california-poppy shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-deep-forest mb-1">
                    Why Native Replacement Matters
                  </p>
                  <p className="text-xs text-forest-mid leading-relaxed">
                    Cleared ground without native replanting will be recolonized
                    by invasives within months. Native plants establish root
                    networks that physically prevent reinvasion, provide wildlife
                    habitat, reduce erosion, and build long-term ecological
                    resilience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
              Common Invasives We Target
            </h2>
            <div className="space-y-4">
              {INVASIVES.map((inv) => (
                <div key={inv.name} className="card-organic bg-white p-4 border border-lichen-cream">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl shrink-0">{inv.emoji}</span>
                    <div>
                      <h3 className="font-display font-semibold text-deep-forest text-sm">
                        {inv.name}{" "}
                        <span className="font-normal text-forest-mid italic">
                          ({inv.scientific})
                        </span>
                      </h3>
                      <p className="text-xs text-forest-mid leading-relaxed mt-1">
                        {inv.threat}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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

      {/* Services List */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-6">
          What&apos;s Included
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-organic bg-white p-6 border border-lichen-cream">
            <h3 className="font-display font-semibold text-deep-forest text-base mb-4">
              Assessment &amp; Planning
            </h3>
            <ul className="space-y-3">
              {[
                "Comprehensive invasive species survey",
                "Distribution mapping and severity scoring",
                "Native plant remnant identification",
                "Custom removal and replanting plan",
                "Timeline and cost estimate",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-reserve-green shrink-0 mt-0.5" />
                  <span className="text-sm text-forest-mid">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-organic bg-white p-6 border border-lichen-cream">
            <h3 className="font-display font-semibold text-deep-forest text-base mb-4">
              Removal &amp; Restoration
            </h3>
            <ul className="space-y-3">
              {[
                "Manual and mechanical invasive removal",
                "Debris hauling and disposal",
                "Soil preparation for native planting",
                "Native species installation",
                "Follow-up monitoring visits (3, 6, 12 months)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle size={14} className="text-reserve-green shrink-0 mt-0.5" />
                  <span className="text-sm text-forest-mid">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section id="request" className="bg-deep-forest text-white py-16">
        <div className="container-site max-w-2xl mx-auto">
          <Send size={28} className="text-sage mx-auto mb-4" />
          <h2 className="font-display font-bold text-2xl mb-2 text-center">
            Request an Assessment
          </h2>
          <p className="text-sage text-center mb-8">
            Describe your site and we&apos;ll schedule a free initial walkthrough
            to assess invasive species and recommend a plan.
          </p>
          <WeedAbatementForm />
        </div>
      </section>
    </div>
  );
}
