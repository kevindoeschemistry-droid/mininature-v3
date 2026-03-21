import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our History",
  description: "How a small backyard nursery grew into a community movement restoring native plants and biodiversity across Ventura County.",
};

const CHAPTERS = [
  {
    label: "Beginnings",
    title: "A Backyard Nursery",
    year: "2020",
    emoji: "🌱",
    description:
      "In 2020, a small backyard nursery of native plants became the foundation for MiniNature Reserve. These first seedlings represented the vision of bringing biodiversity back into urban spaces.",
    milestone: false,
  },
  {
    label: "First Steps",
    title: "The First Planting",
    year: "Early Days",
    emoji: "🤝",
    description:
      "With the help of volunteers, the first MiniNature Reserve took root in Oxnard. An empty parkway was transformed into a pocket of thriving nature.",
    milestone: true,
  },
  {
    label: "Growth",
    title: "Branching Out",
    year: "Ongoing",
    emoji: "🌳",
    description:
      "Our work has expanded to include a 1,500 square foot community nursery, guerrilla gardens, Indigenous cooking classes, and multilingual environmental education — all free to the community and in partnership with Community Roots Garden.",
    milestone: true,
  },
];

export default function HistoryPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      <section className="bg-deep-forest text-white section-pad">
        <div className="container-site">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono-accent uppercase tracking-widest text-sage">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <span>/</span>
            <span>History</span>
          </div>
          <div className="max-w-2xl">
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Our History
            </h1>
            <p className="text-sage text-lg leading-relaxed">
              How a small backyard nursery grew into a community movement
              restoring native plants and biodiversity across Ventura County.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container-site py-16">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-lichen-cream" />

            <div className="space-y-10">
              {CHAPTERS.map((chapter) => (
                <div key={chapter.title} className="relative flex gap-6">
                  {/* Node */}
                  <div
                    className={`shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl z-10 ${
                      chapter.milestone
                        ? "bg-reserve-green text-white shadow-card"
                        : "bg-white border-2 border-lichen-cream"
                    }`}
                  >
                    {chapter.emoji}
                  </div>

                  {/* Content */}
                  <div
                    className={`card-organic bg-white p-6 flex-1 ${
                      chapter.milestone ? "border-l-4 border-reserve-green" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono-accent text-forest-mid uppercase tracking-wider">
                        {chapter.label}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-deep-forest text-xl mb-3">
                      {chapter.title}
                    </h3>
                    <p className="text-sm text-forest-mid leading-relaxed">
                      {chapter.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact counters */}
      <section className="bg-lichen-cream py-16">
        <div className="container-site">
          <h2 className="font-display font-bold text-xl text-deep-forest mb-8 text-center">
            Where We Are Today
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto">
            {[
              { num: "35,000+", suffix: "sq ft", label: "Restored" },
              { num: "3,500+", suffix: "plants", label: "Native Plants Installed" },
              { num: "1,500+", suffix: "people", label: "Volunteers" },
              { num: "4,000+", suffix: "hours", label: "Volunteer Hours" },
            ].map((s) => (
              <div key={s.label} className="card-organic bg-white p-6 text-center">
                <div className="font-display font-bold text-3xl text-reserve-green mb-0.5">
                  {s.num}
                </div>
                <div className="text-xs font-medium text-deep-forest mb-0.5">{s.suffix}</div>
                <div className="text-xs text-forest-mid">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner callout */}
      <section className="container-site py-12">
        <div className="max-w-2xl mx-auto card-organic bg-white p-8 text-center">
          <div className="text-4xl mb-4">🤲</div>
          <h3 className="font-display font-semibold text-deep-forest text-xl mb-3">
            In Partnership with Community Roots Garden
          </h3>
          <p className="text-forest-mid text-sm leading-relaxed">
            Our growth has been deeply intertwined with Community Roots Garden,
            whose shared commitment to environmental justice, Indigenous knowledge,
            and free community education has helped shape MiniNature Reserve into
            what it is today.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-reserve-green text-white py-12">
        <div className="container-site text-center max-w-xl mx-auto">
          <h2 className="font-display font-bold text-2xl mb-4">
            Be a part of what comes next
          </h2>
          <p className="text-sage mb-6">
            Be a part of a movement to restore nature in our cities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/get-involved/make-a-reserve" className="btn btn-primary">
              Make a Reserve
            </Link>
            <Link href="/give/donate" className="btn btn-outline-white">
              Donate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
