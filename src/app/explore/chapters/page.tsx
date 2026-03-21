import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Users, Calendar, Mail, ArrowRight, Sprout, HandHeart, GraduationCap, PartyPopper } from "lucide-react";

export const metadata: Metadata = {
  title: "Find a Chapter",
  description: "Discover local MiniNature chapters near you, connect with fellow Reservists, and bring native habitat restoration to your community.",
};

const CHAPTERS = [
  {
    emoji: "🌿",
    name: "Ventura County",
    location: "Ventura, Oxnard, Camarillo, Thousand Oaks",
    members: 84,
    status: "Active — Flagship",
    statusColor: "bg-reserve-green text-white",
    meeting: "2nd Saturday of each month, 9 AM",
    description:
      "Our founding chapter and the heart of MiniNature. Home to 21 reserves, weekly volunteer sessions, and the original Reservist Training program.",
    contactHref: "mailto:ventura@mininaturereserve.org",
  },
  {
    emoji: "🐬",
    name: "Santa Barbara County",
    location: "Santa Barbara, Goleta, Carpinteria",
    members: 31,
    status: "Growing",
    statusColor: "bg-forest-mid text-white",
    meeting: "1st Sunday of each month, 10 AM",
    description:
      "Launched in 2024 with three reserves along the Goleta coast. Partnering with UCSB Environmental Studies for campus micro-habitat installations.",
    contactHref: "mailto:santabarbara@mininaturereserve.org",
  },
  {
    emoji: "🌴",
    name: "Los Angeles County",
    location: "Pasadena, Eagle Rock, Highland Park",
    members: 12,
    status: "Launching Soon",
    statusColor: "bg-california-poppy text-white",
    meeting: "Monthly virtual meetup — date TBD",
    description:
      "A group of passionate Angelenos scouting parkway strips and building partnerships with local nurseries. First install planned for spring 2026.",
    contactHref: "mailto:losangeles@mininaturereserve.org",
  },
  {
    emoji: "☀️",
    name: "San Diego County",
    location: "San Diego, Encinitas, Oceanside",
    members: 5,
    status: "Interest Stage",
    statusColor: "bg-sage text-white",
    meeting: "Not yet scheduled",
    description:
      "Early conversations and interest forms rolling in. If you are in San Diego and want to lead, this chapter is yours to shape.",
    contactHref: "mailto:sandiego@mininaturereserve.org",
  },
];

const BENEFITS = [
  {
    icon: PartyPopper,
    title: "Local Events",
    description:
      "Installation days, native plant walks, and seasonal celebrations — all organized by and for your neighborhood.",
  },
  {
    icon: Sprout,
    title: "Plant Swaps",
    description:
      "Trade cuttings, seeds, and starter plants with fellow chapter members. The cheapest way to fill a new reserve.",
  },
  {
    icon: GraduationCap,
    title: "Mentorship",
    description:
      "Experienced Reservists pair with newcomers to share hands-on knowledge about native species, soil prep, and irrigation.",
  },
  {
    icon: HandHeart,
    title: "Community",
    description:
      "Meet neighbors who care about the same things you do. Chapters are where lifelong friendships (and reserves) begin.",
  },
];

export default function ChaptersPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-reserve-green text-white py-20">
        <div className="container-site">
          <div className="flex items-center gap-2 text-xs font-mono-accent uppercase tracking-widest text-sage mb-4">
            <MapPin size={14} />
            Chapter Network
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-5 max-w-2xl leading-tight">
            Find a Chapter Near You
          </h1>
          <p className="text-sage text-lg max-w-xl leading-relaxed">
            MiniNature chapters are community-led groups that organize installs, host workshops, and grow the
            reserve network in their region. Find yours — or start one.
          </p>
        </div>
      </section>

      {/* Chapter directory */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-8">
          Active &amp; Emerging Chapters
        </h2>

        <div className="space-y-5">
          {CHAPTERS.map((chapter) => (
            <div
              key={chapter.name}
              className="card-organic bg-white p-6 border border-lichen-cream"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-5">
                {/* Emoji & Title */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{chapter.emoji}</span>
                    <div>
                      <h3 className="font-display font-semibold text-xl text-deep-forest">
                        {chapter.name}
                      </h3>
                      <p className="text-sm text-forest-mid flex items-center gap-1">
                        <MapPin size={13} />
                        {chapter.location}
                      </p>
                    </div>
                    <span
                      className={`${chapter.statusColor} text-xs font-medium px-2.5 py-1 rounded-full ml-auto md:ml-4 whitespace-nowrap`}
                    >
                      {chapter.status}
                    </span>
                  </div>
                  <p className="text-sm text-forest-mid leading-relaxed mb-4">
                    {chapter.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-forest-mid">
                    <span className="flex items-center gap-1.5">
                      <Users size={14} className="text-reserve-green" />
                      {chapter.members} members
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-reserve-green" />
                      {chapter.meeting}
                    </span>
                  </div>
                </div>

                {/* Contact */}
                <div className="shrink-0">
                  <a
                    href={chapter.contactHref}
                    className="btn btn-secondary inline-flex items-center gap-1.5 text-sm"
                  >
                    <Mail size={14} />
                    Contact Chapter
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why join a chapter */}
      <section className="bg-deep-forest text-white py-16">
        <div className="container-site">
          <h2 className="font-display font-bold text-2xl mb-3 text-center">
            Why Join a Chapter?
          </h2>
          <p className="text-sage text-center mb-10 max-w-lg mx-auto text-sm leading-relaxed">
            Chapters are where the MiniNature mission comes alive at the local level.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((b) => (
              <div key={b.title} className="text-center">
                <div className="bg-forest-mid w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <b.icon size={22} className="text-hummingbird-gold" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 text-hummingbird-gold">
                  {b.title}
                </h3>
                <p className="text-sage text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-site py-16">
        <div className="bg-mint-mist rounded-organic-lg p-10 text-center">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-3">
            Don&apos;t see your area?
          </h2>
          <p className="text-forest-mid mb-6 max-w-md mx-auto text-sm leading-relaxed">
            We provide everything you need — training, materials, and national network support — to
            bring MiniNature to your city. It starts with one person.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/get-involved/start-a-chapter" className="btn btn-primary">
              <MapPin size={16} />
              Start a Chapter
            </Link>
            <Link href="/explore" className="btn btn-secondary">
              Back to Explore
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
