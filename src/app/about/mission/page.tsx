import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Leaf, Users, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Mission",
  description: "MiniNature Reserve exists to restore and preserve nature and native plants in urban environments through landscape projects that engage, educate, and empower the local community.",
};

export default function MissionPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <div className="bg-deep-forest text-white py-20">
        <div className="container-site max-w-3xl">
          <div className="text-xs font-mono-accent uppercase tracking-widest text-sage mb-4">About MiniNature</div>
          <div className="text-xs font-medium text-hummingbird-gold mb-6 uppercase tracking-widest">
            A grassroots, Gen Z-led movement
          </div>
          <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight mb-6">
            Our Mission
          </h1>
          <p className="font-display text-xl md:text-2xl text-sage/90 leading-relaxed">
            We exist to restore and preserve nature and native plants in urban environments
            through landscape projects that engage, educate, and empower the local community.
          </p>
        </div>
      </div>

      {/* The Problem */}
      <div className="bg-lichen-cream py-16">
        <div className="container-site max-w-3xl">
          <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-3">
            The Problem
          </div>
          <h2 className="font-display font-bold text-3xl text-deep-forest mb-5">
            Losing Our Native Roots
          </h2>
          <p className="text-forest-mid text-lg leading-relaxed">
            Concrete is taking over, erasing native life and silencing our landscapes.
            Yet nature can return — together we can restore Ventura County&apos;s native plants
            and reclaim the land.
          </p>
        </div>
      </div>

      {/* Our Vision */}
      <div className="container-site py-16 max-w-3xl">
        <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-3">
          Our Vision
        </div>
        <h2 className="font-display font-bold text-3xl text-deep-forest mb-5">
          Cities in Bloom
        </h2>
        <p className="text-forest-mid text-lg leading-relaxed mb-12">
          We envision cities where native plants overthrow concrete, and communities —
          especially those long silenced — take back the land and power through climate action.
        </p>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Leaf,
              color: "bg-reserve-green",
              title: "Land",
              body: "From empty parkways to schoolyards, we transform neglected spaces into thriving MiniNature Reserves — providing habitat for pollinators, wildlife, and future generations.",
            },
            {
              icon: Users,
              color: "bg-california-poppy",
              title: "Community",
              body: "We are volunteer-powered and Gen Z–led. Our events bring people together across generations to learn, grow, and restore nature side by side.",
            },
            {
              icon: Globe,
              color: "bg-hummingbird-gold",
              title: "Culture",
              body: "We celebrate the heritage of the Chumash and the deep cultural value of native plants through workshops, cooking classes, and storytelling.",
            },
          ].map((p) => (
            <div key={p.title} className="bg-white rounded-organic p-6 shadow-card">
              <div className={`${p.color} w-10 h-10 rounded-xl flex items-center justify-center mb-4`}>
                <p.icon size={18} className="text-white" />
              </div>
              <h3 className="font-display font-semibold text-lg text-deep-forest mb-2">{p.title}</h3>
              <p className="text-sm text-forest-mid leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Approach */}
      <div className="bg-lichen-cream py-16">
        <div className="container-site max-w-3xl">
          <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-3">
            Our Approach
          </div>
          <h2 className="font-display font-bold text-3xl text-deep-forest mb-5">
            The MiniNature Reserve
          </h2>
          <p className="text-forest-mid text-lg leading-relaxed">
            A MiniNature Reserve is a small pocket of nature within the city, designed to
            restore biodiversity where concrete dominates. These spaces provide habitat for
            native plants and pollinators, while offering communities a chance to reconnect
            with land and culture.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/about/native-plants" className="btn btn-secondary text-sm">
              Why Native Plants? <ArrowRight size={14} />
            </Link>
            <Link href="/about/history" className="btn btn-outline text-sm">
              Our History <ArrowRight size={14} />
            </Link>
            <Link href="/explore/map" className="btn btn-outline text-sm">
              See the Network <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-reserve-green text-white py-16">
        <div className="container-site text-center max-w-xl mx-auto">
          <h2 className="font-display font-bold text-2xl mb-4">
            Be a part of a movement to restore nature in our cities
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/give/donate" className="btn btn-primary">
              Donate
            </Link>
            <Link href="/get-involved" className="btn btn-outline-white">
              Get Involved <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
