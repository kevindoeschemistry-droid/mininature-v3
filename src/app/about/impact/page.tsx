import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, ArrowRight, Leaf, Users, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Impact & Data",
  description: "MiniNature Reserve impact metrics — square footage restored, species planted, volunteers engaged, and ecological outcomes.",
};

const HEADLINE_STATS = [
  { num: "21", suffix: "", label: "Active reserves", icon: MapPin, color: "text-reserve-green" },
  { num: "35,000", suffix: "+ sq ft", label: "Native habitat restored", icon: Leaf, color: "text-hummingbird-gold" },
  { num: "3,500", suffix: "+", label: "Native plants installed", icon: Leaf, color: "text-california-poppy" },
  { num: "1,500", suffix: "+", label: "Volunteers engaged", icon: Users, color: "text-sage" },
  { num: "4,000", suffix: "+", label: "Volunteer hours logged", icon: Clock, color: "text-reserve-green" },
  { num: "3", suffix: " cities", label: "Oxnard, Ventura, Port Hueneme", icon: MapPin, color: "text-deep-forest" },
];

const RESERVE_BREAKDOWN = [
  { type: "Kit Reserves", count: 9, pct: 43, color: "bg-reserve-green" },
  { type: "Guerrilla / DIY", count: 5, pct: 24, color: "bg-sage" },
  { type: "School Reserves", count: 3, pct: 14, color: "bg-hummingbird-gold" },
  { type: "Paid Partnership", count: 3, pct: 14, color: "bg-california-poppy" },
  { type: "Honorary MNR", count: 1, pct: 5, color: "bg-forest-mid" },
];

const SPECIES_HIGHLIGHTS = [
  { name: "Hummingbirds sighted", count: "14 of 21 reserves", emoji: "🐦" },
  { name: "Native bee species documented", count: "40+", emoji: "🐝" },
  { name: "Butterfly species documented", count: "12+", emoji: "🦋" },
  { name: "Native plant species installed", count: "60+", emoji: "🌿" },
  { name: "Schools participating", count: "3", emoji: "🏫" },
  { name: "Students reached", count: "515+", emoji: "👩‍🎓" },
];

const ANNUAL = [
  { year: "2021", reserves: 4, sqft: 2200, volunteers: 85 },
  { year: "2022", reserves: 7, sqft: 8500, volunteers: 280 },
  { year: "2023", reserves: 14, sqft: 21000, volunteers: 780 },
  { year: "2024", reserves: 21, sqft: 35000, volunteers: 1500 },
];

export default function ImpactPage() {
  const maxVolunteers = Math.max(...ANNUAL.map((y) => y.volunteers));

  return (
    <div className="bg-fog-white min-h-screen">
      <section className="bg-deep-forest text-white section-pad">
        <div className="container-site">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono-accent uppercase tracking-widest text-sage">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <span>/</span>
            <span>Impact</span>
          </div>
          <div className="max-w-2xl">
            <BarChart3 size={32} className="text-hummingbird-gold mb-4" />
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Impact &amp; Data
            </h1>
            <p className="text-sage text-lg leading-relaxed">
              Transparent metrics on every reserve installed, every volunteer hour logged,
              and every species returned to urban habitat.
            </p>
          </div>
        </div>
      </section>

      {/* Headline stats */}
      <section className="container-site py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {HEADLINE_STATS.map((s) => (
            <div key={s.label} className="card-organic bg-white p-6 text-center">
              <s.icon size={20} className={`${s.color} mx-auto mb-2`} />
              <div className={`font-display font-bold text-3xl md:text-4xl ${s.color} mb-1`}>
                {s.num}{s.suffix}
              </div>
              <div className="text-xs text-forest-mid">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Growth chart (visual) */}
      <section className="bg-lichen-cream py-16">
        <div className="container-site">
          <h2 className="font-display font-bold text-xl text-deep-forest mb-8">Year-over-Year Growth</h2>
          <div className="card-organic bg-white p-8 max-w-3xl">
            <div className="flex items-end gap-4 h-48">
              {ANNUAL.map((y) => {
                const height = Math.round((y.volunteers / maxVolunteers) * 100);
                return (
                  <div key={y.year} className="flex-1 flex flex-col items-center gap-2">
                    <div className="text-xs font-mono-accent text-reserve-green font-bold">
                      {y.volunteers.toLocaleString()}
                    </div>
                    <div
                      className="w-full bg-reserve-green rounded-t-lg transition-all"
                      style={{ height: `${height}%` }}
                    />
                    <div className="text-xs text-forest-mid font-medium">{y.year}</div>
                    <div className="text-xs text-forest-mid">{y.reserves} reserves</div>
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-forest-mid mt-4 text-center">Volunteers engaged per year</p>
          </div>
        </div>
      </section>

      {/* Reserve breakdown */}
      <section className="container-site py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display font-bold text-xl text-deep-forest mb-6">
              Reserve Types
            </h2>
            <div className="space-y-3">
              {RESERVE_BREAKDOWN.map((r) => (
                <div key={r.type}>
                  <div className="flex items-center justify-between mb-1 text-sm">
                    <span className="text-deep-forest font-medium">{r.type}</span>
                    <span className="text-forest-mid text-xs">{r.count} reserves ({r.pct}%)</span>
                  </div>
                  <div className="h-3 bg-lichen-cream rounded-full overflow-hidden">
                    <div className={`h-full ${r.color} rounded-full`} style={{ width: `${r.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-deep-forest mb-6">
              Wildlife &amp; Ecology
            </h2>
            <div className="space-y-3">
              {SPECIES_HIGHLIGHTS.map((s) => (
                <div key={s.name} className="flex items-center justify-between card-organic bg-white px-5 py-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{s.emoji}</span>
                    <span className="text-sm text-deep-forest">{s.name}</span>
                  </div>
                  <span className="font-display font-semibold text-reserve-green text-sm">{s.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Report CTA */}
      <section className="bg-reserve-green text-white py-12">
        <div className="container-site text-center max-w-xl mx-auto">
          <h2 className="font-display font-bold text-xl mb-4">
            Download the Full Impact Report
          </h2>
          <p className="text-sage mb-6 text-sm">
            Our annual impact report includes per-reserve data, methodology notes, and
            ecological findings. Available for funders, partners, and researchers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary">
              Request Report <ArrowRight size={14} />
            </Link>
            <Link href="/about/press" className="btn btn-outline-white">
              Press &amp; Media
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
