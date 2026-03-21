import Link from "next/link";
import { ArrowRight } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: "🌱",
    title: "Find Your Space",
    description:
      "Any sunny corner, parkway strip, schoolyard, or yard qualifies. As small as 25 sq ft — even a narrow strip becomes a pollinator corridor.",
    hint: "No experience required.",
  },
  {
    number: "02",
    icon: "🌿",
    title: "Install Native Plants",
    description:
      "MiniNature provides a free kit, training, and community volunteers. Choose DIY with our guide, a community install day, or professional installation.",
    hint: "We bring the plants & tools.",
  },
  {
    number: "03",
    icon: "🗺",
    title: "Join the Network",
    description:
      "Your reserve gets a permanent map profile, an official QR-code sign, and access to a community of stewards, volunteers, and ongoing support.",
    hint: "Visible on the map forever.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-pad bg-lichen-cream">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-3">
            The Process
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-forest mb-4">
            How MiniNature Works
          </h2>
          <p className="text-forest-mid max-w-xl mx-auto">
            Three simple steps to transform any small space into thriving urban habitat.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {STEPS.map((step, idx) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {idx < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-6 h-px bg-sage z-10" style={{ width: "calc(100% - 280px + 24px)", left: "calc(280px - 12px)" }}>
                </div>
              )}

              <div className="bg-white rounded-organic p-8 h-full shadow-card">
                {/* Number + emoji */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{step.icon}</div>
                  <div className="font-mono-accent text-xs text-reserve-green font-medium uppercase tracking-widest">
                    Step {step.number}
                  </div>
                </div>

                <h3 className="font-display font-semibold text-xl text-deep-forest mb-3">
                  {step.title}
                </h3>
                <p className="text-forest-mid text-sm leading-relaxed mb-4">
                  {step.description}
                </p>
                <div className="inline-flex items-center gap-1.5 text-xs bg-mint-mist text-reserve-green px-3 py-1.5 rounded-full font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-adoptable" />
                  {step.hint}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/get-involved/make-a-reserve"
            className="btn btn-primary text-base px-8 py-4"
          >
            Make a Reserve — It&apos;s Free
            <ArrowRight size={18} />
          </Link>
          <div className="mt-4 text-xs text-forest-mid">
            Takes 5 minutes to apply · No experience needed
          </div>
        </div>
      </div>
    </section>
  );
}
