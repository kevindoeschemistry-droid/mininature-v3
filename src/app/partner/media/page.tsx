import type { Metadata } from "next";
import Link from "next/link";
import { Megaphone, Camera, Mic, FileImage, ArrowRight, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Media & Press Partnerships",
  description: "Media access, press resources, expert sources, and visual content for journalists covering urban ecology and nature restoration.",
};

const STORY_ANGLES = [
  { emoji: "🏙️", title: "Urban Rewilding", description: "How grassroots volunteers are transforming Oxnard's concrete strips into pollinator corridors." },
  { emoji: "🌿", title: "Indigenous Land Stewardship", description: "Chumash knowledge-keepers co-leading ecological restoration on their ancestral homeland." },
  { emoji: "👩‍🏫", title: "Students as Scientists", description: "6th graders designing real habitats and contributing to regional biodiversity data." },
  { emoji: "🦋", title: "Pollinator Crisis Response", description: "How small-scale habitat restoration is creating refuges for native bee and butterfly species." },
  { emoji: "🏘️", title: "Community-Led Climate Action", description: "Latino and immigrant communities driving environmental restoration in an underserved city." },
];

const MEDIA_ASSETS = [
  { icon: Camera, title: "Photo Library", description: "300+ high-resolution images from reserve installations, events, and wildlife sightings. Free for media use." },
  { icon: FileImage, title: "Press Kit", description: "Organization overview, key stats, leadership bios, and brand assets. PDF and web formats." },
  { icon: Mic, title: "Expert Interviews", description: "Access to founders, indigenous knowledge facilitators, reserve stewards, and ecologists." },
];

export default function MediaPartnerPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      <section className="bg-california-poppy text-white section-pad">
        <div className="container-site">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono-accent uppercase tracking-widest text-white/70">
            <Link href="/partner" className="hover:text-white transition-colors">Partnerships</Link>
            <span>/</span>
            <span>Media</span>
          </div>
          <div className="max-w-2xl">
            <Megaphone size={32} className="text-white mb-4" />
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Media &amp; Press
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              MiniNature Reserve is a story of community, culture, and ecological restoration.
              We make it easy for journalists, filmmakers, and content creators to tell it.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:info@mininature.org" className="btn bg-white text-california-poppy hover:bg-white/90 font-semibold gap-2">
                <Mail size={16} /> info@mininature.org
              </a>
              <Link href="/about/press" className="btn border-2 border-white text-white hover:bg-white/10">
                Download Press Kit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Story angles */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-2">Story Angles</h2>
        <p className="text-forest-mid mb-8">Ready-to-pitch angles with contacts and visual assets.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {STORY_ANGLES.map((angle) => (
            <div key={angle.title} className="card-organic bg-white p-6">
              <span className="text-3xl mb-3 block">{angle.emoji}</span>
              <h3 className="font-display font-semibold text-deep-forest text-base mb-2">{angle.title}</h3>
              <p className="text-xs text-forest-mid leading-relaxed">{angle.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Media assets */}
      <section className="bg-lichen-cream py-16">
        <div className="container-site">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-8">Media Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MEDIA_ASSETS.map((asset) => (
              <div key={asset.title} className="card-organic bg-white p-6">
                <asset.icon size={24} className="text-reserve-green mb-4" />
                <h3 className="font-display font-semibold text-deep-forest text-lg mb-2">{asset.title}</h3>
                <p className="text-sm text-forest-mid leading-relaxed mb-4">{asset.description}</p>
                <Link href="/contact" className="btn btn-secondary text-sm">
                  Request Access <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="container-site py-16 max-w-xl mx-auto text-center">
        <Mail size={28} className="text-reserve-green mx-auto mb-4" />
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-3">Press Inquiries</h2>
        <p className="text-forest-mid mb-6">
          We respond to all press inquiries within 24 hours. For embed requests and filming permissions, please allow 48 hours.
        </p>
        <a href="mailto:info@mininature.org" className="btn btn-primary">
          info@mininature.org <ArrowRight size={14} />
        </a>
      </section>
    </div>
  );
}
