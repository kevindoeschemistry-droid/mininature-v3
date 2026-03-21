import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Sprout, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Fund a New MNR",
  description:
    "Help plant a new MiniNature Reserve. Each planned garden has its own fundraising meter — when it fills, the garden gets planted.",
};

const PLANNED_RESERVES = [
  {
    name: "5th Street Pollinator Corridor",
    location: "W 5th Street, Oxnard",
    description:
      "A 600 sq ft pollinator highway connecting two existing reserves. Will feature milkweed, sage, and buckwheat to create a continuous flight path for monarchs and native bees.",
    goal: 2500,
    raised: 1675,
    species: 16,
  },
  {
    name: "Colonia Neighborhood Reserve",
    location: "Colonia del Sol, Oxnard",
    description:
      "A front-yard demonstration garden in the Colonia neighborhood, designed with community input to showcase drought-tolerant native landscaping.",
    goal: 1800,
    raised: 612,
    species: 10,
  },
  {
    name: "Channel Islands School Garden",
    location: "Channel Islands High School, Oxnard",
    description:
      "A student-designed outdoor classroom with California native plants representing all five Channel Islands ecosystems. Part of the school's environmental science curriculum.",
    goal: 3200,
    raised: 384,
    species: 22,
  },
  {
    name: "Rose Park Median",
    location: "Rose Avenue, Oxnard",
    description:
      "Transforming a bare concrete median into a blooming strip of California poppies, coastal buckwheat, and hummingbird sage — right in the heart of the neighborhood.",
    goal: 1500,
    raised: 1335,
    species: 8,
  },
  {
    name: "Saviers Road Pocket Prairie",
    location: "Saviers Road, Oxnard",
    description:
      "A vacant lot conversion bringing back native bunch grasses and wildflowers to create a pocket prairie habitat for ground-nesting birds and pollinators.",
    goal: 2000,
    raised: 460,
    species: 14,
  },
];

export default function FundNewMnrPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-deep-forest text-white section-pad">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-sage mb-4">
              <Sprout size={12} className="inline -mt-0.5 mr-1" />
              Plant a Garden
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-5 leading-tight">
              Fund a New
              <br />
              <em className="text-hummingbird-gold not-italic">
                MiniNature Reserve
              </em>
            </h1>
            <p className="text-sage text-lg leading-relaxed">
              Each planned reserve has its own fundraising goal. When the meter
              fills, the garden gets planted. Pick a project, contribute any
              amount, and watch it grow toward installation day.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container-site py-12">
        <div className="max-w-3xl mx-auto bg-mint-mist rounded-organic-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              {
                emoji: "🎯",
                title: "Pick a Project",
                desc: "Browse planned reserves and choose one that speaks to you.",
              },
              {
                emoji: "💰",
                title: "Contribute Any Amount",
                desc: "Every dollar moves the meter closer to the goal.",
              },
              {
                emoji: "🌱",
                title: "Watch It Get Planted",
                desc: "When fully funded, we schedule an install day and plant!",
              },
            ].map((s) => (
              <div key={s.title}>
                <span className="text-2xl block mb-2">{s.emoji}</span>
                <h3 className="font-display font-semibold text-sm text-deep-forest mb-1">
                  {s.title}
                </h3>
                <p className="text-xs text-forest-mid">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reserve funding grid */}
      <section className="container-site pb-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-2 text-center">
          Planned Reserves
        </h2>
        <p className="text-center text-forest-mid mb-8 text-sm">
          Contribute to any of these upcoming projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PLANNED_RESERVES.map((reserve) => {
            const pct = Math.round((reserve.raised / reserve.goal) * 100);
            const remaining = reserve.goal - reserve.raised;
            return (
              <div
                key={reserve.name}
                className="card-organic bg-white p-6 border border-lichen-cream flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display font-semibold text-lg text-deep-forest mb-1">
                      {reserve.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-forest-mid">
                      <MapPin size={11} className="text-reserve-green" />
                      {reserve.location}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-forest-mid bg-mint-mist px-2 py-1 rounded-full">
                    <Sprout size={11} className="text-reserve-green" />
                    {reserve.species} species
                  </div>
                </div>

                <p className="text-sm text-forest-mid leading-relaxed flex-1 mb-4">
                  {reserve.description}
                </p>

                {/* Progress */}
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-bold text-reserve-green">
                      ${reserve.raised.toLocaleString()} raised
                    </span>
                    <span className="text-forest-mid">
                      ${reserve.goal.toLocaleString()} goal
                    </span>
                  </div>
                  <div className="h-4 bg-mint-mist rounded-full overflow-hidden">
                    <div
                      className="h-full bg-reserve-green rounded-full transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-forest-mid mt-1">
                    <span>{pct}% funded</span>
                    <span>${remaining.toLocaleString()} to go</span>
                  </div>
                </div>

                <button className="btn btn-primary w-full justify-center text-sm">
                  Contribute
                  <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Suggest a location */}
      <section className="bg-lichen-cream py-16">
        <div className="container-site max-w-2xl mx-auto">
          <div className="card-organic bg-white p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-deep-forest flex items-center justify-center">
                <Send size={18} className="text-white" />
              </div>
              <div>
                <h2 className="font-display font-semibold text-2xl text-deep-forest">
                  Suggest a Location
                </h2>
                <p className="text-sm text-forest-mid">
                  Know a spot that could use native habitat? Tell us about it.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-deep-forest mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-deep-forest mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1.5">
                  Location Address or Description
                </label>
                <input
                  type="text"
                  placeholder="e.g., 'Corner of A St and 5th, Oxnard — empty median strip'"
                  className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1.5">
                  Why This Location?
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us why this spot would make a great native habitat..."
                  className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm resize-none"
                />
              </div>
              <button className="btn btn-secondary w-full justify-center text-sm">
                <Send size={14} />
                Submit Suggestion
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="container-site py-8 text-center">
        <Link
          href="/give"
          className="text-sm text-forest-mid hover:text-reserve-green transition-colors inline-flex items-center gap-1"
        >
          <ArrowRight size={12} className="rotate-180" />
          Back to all giving options
        </Link>
      </section>
    </div>
  );
}
