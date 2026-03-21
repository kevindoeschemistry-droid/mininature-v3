import type { Metadata } from "next";
import Link from "next/link";
import { Mountain, ArrowRight, CheckCircle, MapPin, Send } from "lucide-react";
import TrailMaintenanceForm from "./TrailMaintenanceForm";

export const metadata: Metadata = {
  title: "Trail Maintenance Services",
  description:
    "Professional trail clearing, erosion control, native revegetation, and signage installation for Ventura County trails and public lands.",
};

const SERVICES = [
  {
    emoji: "🪓",
    title: "Trail Clearing",
    description:
      "Remove overgrown vegetation, fallen debris, and encroaching invasive species to restore safe, accessible trail corridors. We clear with care — preserving native plants and habitat while removing hazards.",
    includes: [
      "Brush and debris removal",
      "Invasive species identification and selective removal",
      "Sight-line restoration for safety",
      "Trail width re-establishment",
    ],
  },
  {
    emoji: "🌧️",
    title: "Erosion Control",
    description:
      "Stabilize trail surfaces and hillsides with natural erosion control methods — check dams, water bars, native revegetation, and bioengineering techniques that work with the landscape.",
    includes: [
      "Water bar and check dam installation",
      "Trail regrading and drainage improvements",
      "Hillside stabilization with native plantings",
      "Jute netting and natural fiber erosion blankets",
    ],
  },
  {
    emoji: "🌿",
    title: "Native Revegetation Along Trails",
    description:
      "Restore trail margins and disturbed areas with locally sourced native plants. We design trailside plantings that stabilize soil, support wildlife, and add beauty to the hiking experience.",
    includes: [
      "Trail-edge native plant installation",
      "Post-fire revegetation",
      "Riparian buffer restoration along trail creek crossings",
      "Wildflower seeding for seasonal color",
    ],
  },
  {
    emoji: "🪧",
    title: "Signage Installation",
    description:
      "Design and install interpretive signage, trail markers, wayfinding signs, and plant identification labels. We create durable, weather-resistant signs that educate and guide trail users.",
    includes: [
      "Interpretive nature signs with QR codes",
      "Trail marker and wayfinding posts",
      "Native plant identification labels",
      "Regulatory and safety signage",
    ],
  },
  {
    emoji: "♿",
    title: "Accessibility Improvements",
    description:
      "Make trails more accessible with surface improvements, grade adjustments, rest areas, and accessible signage. We work toward inclusive outdoor access for people of all abilities.",
    includes: [
      "Trail surface grading and compaction",
      "Accessible rest area installation",
      "Tactile and braille signage options",
      "Wheelchair-accessible viewpoint construction",
    ],
  },
];

const SEASONS = [
  {
    season: "Spring",
    emoji: "🌸",
    tasks: "Invasive removal, wildflower seeding, trail surface repair after winter rains",
  },
  {
    season: "Summer",
    emoji: "☀️",
    tasks: "Fire fuel reduction, brush clearing, signage maintenance, irrigation of new plantings",
  },
  {
    season: "Fall",
    emoji: "🍂",
    tasks: "Seed collection, native planting installation, erosion prevention prep",
  },
  {
    season: "Winter",
    emoji: "🌧️",
    tasks: "Drainage maintenance, storm damage response, erosion monitoring, planning for spring",
  },
];

export default function TrailMaintenancePage() {
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
            <span>Trail Maintenance</span>
          </div>
          <div className="max-w-2xl">
            <Mountain size={32} className="text-hummingbird-gold mb-4" />
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Trail Maintenance
            </h1>
            <p className="text-sage text-lg leading-relaxed mb-6">
              Keep Ventura County&apos;s trails safe, beautiful, and ecologically
              healthy. We combine trail expertise with native plant knowledge to
              maintain trails that support both people and wildlife.
            </p>
            <Link href="#request" className="btn btn-primary">
              Request Trail Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <div className="bg-hummingbird-gold/15 border-b border-hummingbird-gold/30">
        <div className="container-site py-4">
          <div className="flex items-center gap-3">
            <MapPin size={18} className="text-deep-forest shrink-0" />
            <p className="text-sm text-deep-forest">
              <strong>Service Area:</strong> Ventura County trails, open spaces,
              and public lands — including city parks, county preserves, and
              land trust properties.
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-8">
          Trail Services
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
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.includes.map((item) => (
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
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seasonal Maintenance */}
      <section className="bg-mint-mist py-16">
        <div className="container-site">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-8 text-center">
            Seasonal Maintenance Plans
          </h2>
          <p className="text-sm text-forest-mid text-center max-w-2xl mx-auto mb-8">
            Trails need different care throughout the year. Our seasonal
            maintenance plans ensure your trails stay safe, accessible, and
            ecologically healthy year-round.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SEASONS.map((s) => (
              <div
                key={s.season}
                className="card-organic bg-white p-6 border border-lichen-cream text-center"
              >
                <span className="text-3xl block mb-3">{s.emoji}</span>
                <h3 className="font-display font-semibold text-deep-forest text-base mb-2">
                  {s.season}
                </h3>
                <p className="text-xs text-forest-mid leading-relaxed">
                  {s.tasks}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section id="request" className="bg-deep-forest text-white py-16">
        <div className="container-site max-w-2xl mx-auto">
          <Send size={28} className="text-sage mx-auto mb-4" />
          <h2 className="font-display font-bold text-2xl mb-2 text-center">
            Request Trail Services
          </h2>
          <p className="text-sage text-center mb-8">
            Tell us about the trail or open space that needs attention and
            we&apos;ll schedule a site assessment.
          </p>
          <TrailMaintenanceForm />
        </div>
      </section>
    </div>
  );
}
