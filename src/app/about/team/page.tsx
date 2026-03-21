import type { Metadata } from "next";
import Link from "next/link";
import { Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the team, board, and volunteers behind MiniNature Reserve.",
};

const STAFF = [
  {
    name: "Diego Magaña",
    role: "Executive Director & Co-founder",
    emoji: "🌿",
  },
  {
    name: "Miranda Magaña",
    role: "Co-founder",
    emoji: "🌱",
  },
  {
    name: "Solimar Gutierrez",
    role: "Director of Outreach and Events",
    emoji: "🤝",
  },
  {
    name: "Zachary Scurrah",
    role: "Nursery and Restoration Manager",
    emoji: "🌳",
  },
];

const BOARD = [
  { name: "Abel Magana", role: "Treasurer" },
  { name: "Alex Sabedra", role: "Member, Chief Tabling Officer" },
  { name: "Kevin Braza", role: "Member, Lead Engineer" },
  { name: "Maelynn Escamilla", role: "Member, Discord Community Manager" },
];

const ADVISORY = [
  { name: "Andrew Mansmann", role: "Member" },
  { name: "Francisco Contreras", role: "Member" },
  { name: "Jacob Marquez", role: "Member" },
  { name: "Sabrina Taal", role: "Volunteer Resource Development" },
];

export default function TeamPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-reserve-green text-white section-pad">
        <div className="container-site">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono-accent uppercase tracking-widest text-sage">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <span>/</span>
            <span>Team</span>
          </div>
          <div className="max-w-2xl">
            <Users size={32} className="text-hummingbird-gold mb-4" />
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Our Team
            </h1>
            <p className="text-sage text-lg leading-relaxed">
              MiniNature Reserve is powered by youth leaders, volunteers, and
              community partners working together to bring nature back into the city.
            </p>
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-xl text-deep-forest mb-8">Staff</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAFF.map((member) => (
            <div key={member.name} className="card-organic bg-white p-6 text-center">
              <div className="w-16 h-16 bg-mint-mist rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto">
                {member.emoji}
              </div>
              <h3 className="font-display font-semibold text-deep-forest text-base mb-1">
                {member.name}
              </h3>
              <p className="text-xs text-reserve-green font-medium leading-snug">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Board */}
      <section className="bg-lichen-cream py-16">
        <div className="container-site">
          <h2 className="font-display font-bold text-xl text-deep-forest mb-6">
            Board of Directors
          </h2>
          <p className="text-forest-mid text-sm mb-8 max-w-xl">
            Meet the dedicated board members guiding MiniNature Reserve&apos;s mission
            to restore nature in our cities.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BOARD.map((b) => (
              <div key={b.name} className="card-organic bg-white p-5">
                <div className="w-10 h-10 bg-reserve-green/10 rounded-xl flex items-center justify-center text-reserve-green text-sm font-bold mb-3">
                  {b.name.charAt(0)}
                </div>
                <p className="font-medium text-deep-forest text-sm">{b.name}</p>
                <p className="text-xs text-forest-mid mt-0.5">{b.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-xl text-deep-forest mb-6">
          Advisory Board of Workers &amp; Volunteers
        </h2>
        <p className="text-forest-mid text-sm mb-8 max-w-xl">
          Meet the volunteers restoring nature in our cities and empowering communities
          through hands-on action.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ADVISORY.map((a) => (
            <div key={a.name} className="card-organic bg-white p-5">
              <div className="w-10 h-10 bg-mint-mist rounded-xl flex items-center justify-center text-deep-forest text-sm font-bold mb-3">
                {a.name.charAt(0)}
              </div>
              <p className="font-medium text-deep-forest text-sm">{a.name}</p>
              <p className="text-xs text-forest-mid mt-0.5">{a.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-deep-forest text-white py-12">
        <div className="container-site text-center max-w-xl mx-auto">
          <h2 className="font-display font-bold text-2xl mb-4">
            Join Our Team
          </h2>
          <p className="text-sage mb-6 text-sm">
            We occasionally have openings for staff, paid fellows, and long-term volunteers.
            Get in touch to learn more.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Get in Touch <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
