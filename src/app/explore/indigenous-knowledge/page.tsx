import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Calendar, MapPin, Users, Leaf, Star, ArrowRight, Heart } from "lucide-react";
import WorkshopNewsletter from "./WorkshopNewsletter";

export const metadata: Metadata = {
  title: "Indigenous Knowledge",
  description: "Learn about Chumash plant traditions, native ecology, and traditional land stewardship through workshops and guided walks.",
};

const WORKSHOPS = [
  {
    id: "1",
    title: "Chumash Plant Medicine & Healing Traditions",
    facilitator: "hi ho stoqošlóq hi xus (Chumash Bear Circle)",
    facilitatorTitle: "Community Knowledge-Keepers",
    description: "A 3-hour immersive workshop exploring the plants used for centuries by Chumash people for medicine, ceremony, and daily life. Participants take home a plant ID guide and dried herb bundle.",
    nextDate: "Check Eventbrite for upcoming dates",
    location: "Heritage Square, Oxnard",
    capacity: 25,
    registered: 19,
    topics: ["White Sage", "Elderberry", "Yerba Santa", "Juncus Rush"],
    emoji: "🌿",
  },
  {
    id: "2",
    title: "Traditional Native Plant Cooking",
    facilitator: "hi ho stoqošlóq hi xus (Chumash Bear Circle)",
    facilitatorTitle: "Community Knowledge-Keepers",
    description: "Prepare traditional dishes using native California plants — chia seeds, acorn flour, elderflower, and more. Recipes, cultural context, and a shared meal included.",
    nextDate: "Check Eventbrite for upcoming dates",
    location: "Colonia Community Center",
    capacity: 20,
    registered: 11,
    topics: ["Chia", "Acorn", "Elderflower", "Islay Cherry"],
    emoji: "🍵",
  },
  {
    id: "3",
    title: "Reading the Landscape: Chumash Ecology Walk",
    facilitator: "hi ho stoqošlóq hi xus (Chumash Bear Circle)",
    facilitatorTitle: "Community Knowledge-Keepers",
    description: "A guided walk through native habitat, learning to read the land as Chumash people have for thousands of years. All workshops are co-designed and led by Chumash community members. Bring water and walking shoes.",
    nextDate: "Check Eventbrite for upcoming dates",
    location: "Heritage Square Reserve",
    capacity: 18,
    registered: 10,
    topics: ["Plant ID", "Soil Reading", "Animal Signs", "Seasonal Cycles"],
    emoji: "🦅",
  },
  {
    id: "4",
    title: "Seed Saving & Native Plant Propagation",
    facilitator: "MiniNature + Chumash Bear Circle",
    facilitatorTitle: "Community Workshop",
    description: "Learn traditional seed collection and storage methods alongside modern propagation techniques. Take home seed packets and seedlings to grow at home or install in a future reserve.",
    nextDate: "Check Eventbrite for upcoming dates",
    location: "MiniNature Community Nursery",
    capacity: 15,
    registered: 6,
    topics: ["Seed Collection", "Stratification", "Propagation", "Native Grasses"],
    emoji: "🌱",
  },
];

const PLANTS = [
  { name: "White Sage", chumash: "Sisi'aya", use: "Ceremony & purification" },
  { name: "Elderberry", chumash: "Hutash", use: "Medicine & food" },
  { name: "Toyon", chumash: "Shtonon", use: "Food & dye" },
  { name: "Juncus Rush", chumash: "Paxa", use: "Basket weaving" },
  { name: "Chia Sage", chumash: "Ts'iyi", use: "High-energy seed food" },
  { name: "Mugwort", chumash: "Momoy", use: "Ceremonial & medicinal" },
];

export default function IndigenousKnowledgePage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section
        className="relative text-white"
        style={{ background: "linear-gradient(135deg, #1B4332 0%, #2D6A4F 60%, #B8860B 100%)" }}
      >
        <div className="container-site section-pad">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={16} className="text-hummingbird-gold" />
              <span className="text-xs font-mono-accent uppercase tracking-widest text-hummingbird-gold">
                Indigenous Knowledge Program
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-5 leading-tight">
              Plants as Teachers,<br />
              <em className="text-hummingbird-gold not-italic">Land as Ancestor</em>
            </h1>
            <p className="text-sage text-lg leading-relaxed max-w-xl mb-8">
              The Chumash people have stewarded this landscape for over 10,000 years. Our workshops
              center indigenous ecological knowledge as foundational to all MiniNature work.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#workshops" className="btn btn-primary">
                Browse Workshops
              </Link>
              <Link href="/get-involved/volunteer" className="btn btn-outline-white">
                Join the Program
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative plant accent */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at right, #B8860B 0%, transparent 70%)" }} />
      </section>

      {/* Land Acknowledgment */}
      <div className="bg-lichen-cream border-b border-sage/20">
        <div className="container-site py-8">
          <div className="flex gap-4 items-start max-w-3xl">
            <Heart size={20} className="text-reserve-green shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-deep-forest mb-1">Land Acknowledgment</p>
              <p className="text-sm text-forest-mid leading-relaxed">
                MiniNature Reserve operates on the ancestral homeland of the Chumash people, who
                continue to steward this land today. We are grateful for the knowledge shared
                with us and committed to centering indigenous leadership in all ecological work.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Workshops */}
      <div id="workshops" className="container-site py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-display font-bold text-2xl text-deep-forest">
                Upcoming Workshops
              </h2>
              <span className="text-sm text-forest-mid">{WORKSHOPS.length} scheduled</span>
            </div>

            {WORKSHOPS.map((ws) => {
              const pct = Math.round((ws.registered / ws.capacity) * 100);
              const spotsLeft = ws.capacity - ws.registered;
              return (
                <div key={ws.id} className="card-organic bg-white p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl shrink-0">{ws.emoji}</div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-deep-forest text-lg mb-1 leading-tight">
                        {ws.title}
                      </h3>
                      <p className="text-xs text-reserve-green font-medium mb-3">
                        with {ws.facilitator} · {ws.facilitatorTitle}
                      </p>
                      <p className="text-sm text-forest-mid leading-relaxed mb-4">
                        {ws.description}
                      </p>

                      {/* Topics */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {ws.topics.map((t) => (
                          <span key={t} className="reserve-type-badge bg-mint-mist text-reserve-green">
                            🌿 {t}
                          </span>
                        ))}
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-4 text-xs text-forest-mid mb-4">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={11} />
                          <span>{ws.nextDate}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={11} />
                          <span>{ws.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Users size={11} />
                          <span>{ws.registered}/{ws.capacity} registered</span>
                        </div>
                      </div>

                      {/* Capacity bar */}
                      <div className="mb-4">
                        <div className="h-1.5 bg-lichen-cream rounded-full overflow-hidden">
                          <div
                            className="h-full bg-hummingbird-gold rounded-full"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <p className="text-xs text-forest-mid mt-1">
                          {spotsLeft > 0 ? `${spotsLeft} spots remaining` : "Full — join waitlist"}
                        </p>
                      </div>

                      <Link href="/get-involved/volunteer" className="btn btn-primary text-sm">
                        RSVP Free
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Chumash Plant Guide */}
            <div className="card-organic bg-deep-forest text-white p-6">
              <Leaf size={20} className="text-hummingbird-gold mb-3" />
              <h3 className="font-display font-semibold text-lg mb-4">
                Chumash Plant Names
              </h3>
              <div className="space-y-3">
                {PLANTS.map((p) => (
                  <div key={p.name} className="border-b border-white/10 pb-3 last:border-0 last:pb-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-sm font-medium text-white">{p.name}</span>
                        <div className="text-xs text-hummingbird-gold font-mono-accent">{p.chumash}</div>
                      </div>
                      <span className="text-xs text-sage text-right shrink-0">{p.use}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Facilitator CTA */}
            <div className="card-organic bg-white border border-lichen-cream p-6">
              <Star size={20} className="text-hummingbird-gold mb-3" />
              <h3 className="font-display font-semibold text-deep-forest text-lg mb-2">
                Share Your Knowledge
              </h3>
              <p className="text-sm text-forest-mid leading-relaxed mb-4">
                Are you an indigenous knowledge-keeper, herbalist, or traditional ecologist?
                We&apos;d love to partner with you to co-create workshops.
              </p>
              <Link href="/contact" className="btn btn-secondary text-sm w-full justify-center">
                Get in Touch <ArrowRight size={14} />
              </Link>
            </div>

            {/* Newsletter */}
            <WorkshopNewsletter />
          </div>
        </div>
      </div>

      {/* About the program */}
      <section className="bg-mint-mist py-16">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-3">
              About the Program
            </div>
            <h2 className="font-display font-bold text-3xl text-deep-forest mb-5">
              Co-created with Chumash community members
            </h2>
            <p className="text-forest-mid leading-relaxed mb-6">
              MiniNature&apos;s Indigenous Knowledge Program is co-created and co-led with
              <strong className="text-deep-forest"> hi ho stoqošlóq hi xus (Chumash Bear Circle)</strong>,
              a women-founded group of Chumash knowledge-keepers, cultural educators, and land stewards.
              We have hosted 15+ workshops together, weaving traditional plant knowledge into every
              reserve installation.
            </p>
            <p className="text-forest-mid leading-relaxed mb-8">
              Every MiniNature Reserve is planted with intention. We do not appropriate sacred knowledge —
              everything shared in workshops is offered with the explicit consent and leadership of
              indigenous community members. Facilitators are compensated fairly for their time and expertise.
            </p>
            <Link href="/about/mission" className="btn btn-secondary">
              Read Our Mission <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
