"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const PILLARS = [
  {
    id: "land",
    label: "Land",
    emoji: "🌿",
    headline: "Reviving the Land with Native Plants",
    body: "From empty parkways to schoolyards, we transform neglected spaces into thriving MiniNature Reserves. Each reserve provides habitat for pollinators, wildlife, and future generations. Native plants require far less water, no pesticides, and actively restore the ecological web.",
    cta: "Why Native Plants?",
    href: "/about",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800",
    stat: "35,000+ sq ft restored",
  },
  {
    id: "community",
    label: "Community",
    emoji: "👥",
    headline: "Connecting Generations to Heal the Planet",
    body: "We are volunteer-powered and Gen Z–led. Our community install events bring people together across generations to learn, grow, and restore nature side by side. Every reserve is a gathering point — a place where neighbors become stewards.",
    cta: "Get Involved",
    href: "/get-involved/volunteer",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800",
    stat: "1,500+ volunteers engaged",
  },
  {
    id: "culture",
    label: "Culture",
    emoji: "🌸",
    headline: "Honoring Indigenous Heritage",
    body: "We celebrate the heritage of the Chumash, the indigenous people of California's central and southern coastal regions, and the deep cultural value of native plants through workshops, cooking classes, and storytelling. Plants carry memory, medicine, and meaning.",
    cta: "Explore Workshops",
    href: "/explore/programs",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    stat: "Cultural roots, living forward",
  },
];

export default function PillarsSection() {
  const [active, setActive] = useState("land");
  const pillar = PILLARS.find((p) => p.id === active)!;

  return (
    <section className="section-pad bg-mint-mist">
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-2">
            Our Work
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-forest">
            Land. Community. Culture.
          </h2>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 justify-center mb-10 flex-wrap">
          {PILLARS.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                active === p.id
                  ? "bg-reserve-green text-white shadow-md"
                  : "bg-white text-deep-forest hover:bg-lichen-cream"
              }`}
            >
              <span>{p.emoji}</span>
              {p.label}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full text-xs font-mono-accent text-reserve-green mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-adoptable" />
              {pillar.stat}
            </div>
            <h3 className="font-display font-bold text-2xl md:text-3xl text-deep-forest mb-4 leading-tight">
              {pillar.headline}
            </h3>
            <p className="text-forest-mid leading-relaxed mb-6">
              {pillar.body}
            </p>
            <Link href={pillar.href} className="btn btn-secondary text-sm">
              {pillar.cta}
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Image */}
          <div className="rounded-organic-lg overflow-hidden h-72 lg:h-[400px] shadow-card">
            <Image
              src={pillar.image}
              alt={pillar.headline}
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
