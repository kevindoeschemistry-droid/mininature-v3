import type { Metadata } from "next";
import { MessageCircle, ArrowRight, Shield, Heart, BookOpen, Eye, ExternalLink, Users, Zap, HelpCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Join Our Discord",
  description: "Join the MiniNature Discord — chat with fellow reservists, get plant ID help, and coordinate volunteer efforts in Ventura County.",
};

const CHANNELS = [
  { name: "#general", emoji: "🌿", description: "Introduce yourself, share updates, and chat about all things native habitat restoration in Ventura County." },
  { name: "#plant-id-help", emoji: "🔍", description: "Post a photo of a plant and our community will help you identify it — native or not, we've got you covered." },
  { name: "#reserve-show-and-tell", emoji: "📸", description: "Show off your reserve progress! Before-and-after photos, wildlife sightings, and first blooms." },
  { name: "#events", emoji: "📅", description: "Upcoming planting days, workshops, volunteer events, and community gatherings across the county." },
  { name: "#native-plant-swaps", emoji: "🌱", description: "Trade cuttings, seeds, and starts with other community members. Coordinate local pickups and swaps." },
  { name: "#volunteer-coordination", emoji: "🤝", description: "Organize volunteer groups, find planting buddies, and coordinate reserve installation help." },
];

const GUIDELINES = [
  { emoji: "💚", icon: Heart, title: "Be Kind & Welcoming", description: "Everyone starts somewhere. Treat all members with respect and patience, especially newcomers." },
  { emoji: "🎯", icon: BookOpen, title: "Stay On Topic", description: "Keep discussions relevant to native plants, habitat restoration, and our community mission." },
  { emoji: "🧠", icon: HelpCircle, title: "Share Knowledge Freely", description: "If you know something that could help, share it! Our community grows stronger when we teach each other." },
  { emoji: "👁️", icon: Eye, title: "Respect Privacy", description: "Don't share others' personal information or reserve locations without their explicit permission." },
];

const STATS = [
  { value: "500+", label: "Members", emoji: "👥" },
  { value: "50+", label: "Daily Messages", emoji: "💬" },
  { value: "24/7", label: "Always Helpful", emoji: "🌟" },
];

export default function DiscordPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-deep-forest text-white py-16">
        <div className="container-site">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono-accent uppercase tracking-widest text-sage mb-4">
              <MessageCircle size={14} />
              Community Chat
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Join Our Discord
            </h1>
            <p className="text-sage text-lg leading-relaxed">
              Real-time community for reservists, volunteers, and nature enthusiasts across
              Ventura County. Get help, share wins, and grow together.
            </p>
          </div>
        </div>
      </section>

      <div className="container-site py-16">
        {/* What is the MiniNature Discord */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-4xl block mb-4">💬</span>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-deep-forest mb-4">
              What is the MiniNature Discord?
            </h2>
            <p className="text-forest-mid leading-relaxed max-w-2xl mx-auto">
              Our Discord server is a free, real-time chat community where MiniNature reservists,
              volunteers, and native plant enthusiasts come together. Whether you need help
              identifying a plant, want to share your latest reserve transformation, or are
              looking for planting buddies in your neighborhood — this is the place.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {STATS.map((stat) => (
              <div key={stat.label} className="card-organic bg-white p-5 border border-lichen-cream text-center">
                <span className="text-2xl block mb-2">{stat.emoji}</span>
                <p className="font-display font-bold text-2xl text-deep-forest">{stat.value}</p>
                <p className="text-xs text-forest-mid font-mono-accent uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Channel Highlights */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-deep-forest mb-8 text-center">
            Channel Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {CHANNELS.map((channel) => (
              <div key={channel.name} className="card-organic bg-white p-6 border border-lichen-cream">
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{channel.emoji}</span>
                  <div>
                    <h3 className="font-mono-accent text-reserve-green font-medium text-sm mb-1">
                      {channel.name}
                    </h3>
                    <p className="text-forest-mid text-sm leading-relaxed">
                      {channel.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-deep-forest mb-8 text-center">
            Community Guidelines
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {GUIDELINES.map((rule) => (
              <div key={rule.title} className="card-organic bg-mint-mist border border-sage/20 p-5">
                <div className="flex items-start gap-3">
                  <span className="text-xl shrink-0">{rule.emoji}</span>
                  <div>
                    <h3 className="font-display font-semibold text-deep-forest text-sm mb-1">
                      {rule.title}
                    </h3>
                    <p className="text-forest-mid text-xs leading-relaxed">
                      {rule.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Join CTA */}
        <section className="mb-16">
          <div className="card-organic bg-deep-forest text-white p-10 text-center max-w-2xl mx-auto">
            <span className="text-4xl block mb-4">🚀</span>
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-3">
              Ready to Join?
            </h2>
            <p className="text-sage text-sm mb-8 max-w-md mx-auto leading-relaxed">
              Click the button below to join our Discord server. It&apos;s free, friendly, and full
              of people who care about native plants and urban habitat restoration.
            </p>
            <a
              href="https://discord.gg/mininature"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-base py-3.5 px-8 justify-center inline-flex"
            >
              Join the MiniNature Discord <ExternalLink size={16} />
            </a>
            <div className="flex items-center justify-center gap-6 mt-8 text-sage/80">
              <div className="flex items-center gap-1.5 text-xs">
                <Users size={12} />
                <span>500+ members</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                <Zap size={12} />
                <span>Active daily</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                <Shield size={12} />
                <span>Moderated</span>
              </div>
            </div>
          </div>
        </section>

        {/* Back link */}
        <Link href="/stay-connected" className="text-sm text-forest-mid hover:text-reserve-green inline-flex items-center gap-2 transition-colors">
          <ArrowRight size={14} className="rotate-180" />
          Back to Stay Connected
        </Link>
      </div>
    </div>
  );
}
