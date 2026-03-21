import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Calendar, Leaf, BookOpen, Newspaper, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Explore",
  description: "Explore the MiniNature Reserve network — find reserves, events, nurseries, and indigenous knowledge classes.",
};

const SECTIONS = [
  {
    icon: MapPin,
    color: "bg-reserve-green",
    title: "Find a Reserve",
    description: "Interactive map of all 21 active MiniNature Reserves. Filter by type, adoption availability, and location.",
    href: "/explore/reserves",
    cta: "Browse Reserves",
  },
  {
    icon: Leaf,
    color: "bg-forest-mid",
    title: "Reserve Profiles",
    description: "Browse stories, plants, and stats for every reserve in the network. See who created them and how to get involved.",
    href: "/explore/reserves",
    cta: "Browse Reserves",
  },
  {
    icon: Calendar,
    color: "bg-california-poppy",
    title: "Community Events",
    description: "Installation days, volunteer sessions, workshops, and more. All upcoming events in one place.",
    href: "/explore/events",
    cta: "View Events",
  },
  {
    icon: BookOpen,
    color: "bg-hummingbird-gold",
    title: "Programs",
    description: "Our programs and initiatives including workshops, indigenous knowledge, and community education.",
    href: "/explore/programs",
    cta: "View Programs",
  },
  {
    icon: Leaf,
    color: "bg-sage",
    title: "Community Nurseries",
    description: "Find local native plant sources, community growing programs, and propagation workshops.",
    href: "/explore/nurseries",
    cta: "Find Nurseries",
  },
  {
    icon: Newspaper,
    color: "bg-deep-forest",
    title: "Blog",
    description: "Field notes, plant spotlights, community stories, and press coverage from the MiniNature network.",
    href: "/explore/blog",
    cta: "Read Blog",
  },
];

export default function ExplorePage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Header */}
      <div className="bg-mint-mist border-b border-lichen-cream py-16">
        <div className="container-site">
          <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-3">Explore</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-deep-forest mb-4">
            Discover the Network
          </h1>
          <p className="text-forest-mid text-lg max-w-xl">
            Find reserves, events, and resources — all built and sustained by community.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SECTIONS.map((section) => (
            <Link key={section.href} href={section.href} className="group block">
              <div className="card-organic bg-white p-8 h-full flex flex-col">
                <div className={`${section.color} w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <section.icon size={20} className="text-white" />
                </div>
                <h2 className="font-display font-semibold text-xl text-deep-forest mb-2 group-hover:text-reserve-green transition-colors">
                  {section.title}
                </h2>
                <p className="text-sm text-forest-mid leading-relaxed flex-1 mb-4">
                  {section.description}
                </p>
                <div className="flex items-center gap-1.5 text-sm font-medium text-reserve-green">
                  {section.cta}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
