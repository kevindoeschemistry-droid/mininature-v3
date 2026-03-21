import type { Metadata } from "next";
import { MessageCircle, Mail, Share2, ArrowRight, Bell, Heart, Users, Calendar } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stay Connected",
  description: "Stay in the loop with the MiniNature Reserve community — newsletter, Discord, and social media.",
};

const FEATURE_CARDS = [
  {
    title: "Newsletter",
    href: "/stay-connected/newsletter",
    icon: Mail,
    emoji: "📬",
    description: "Monthly stories, plant spotlights, and event updates delivered to your inbox.",
    cta: "Subscribe Now",
    highlight: "Join 2,000+ readers",
  },
  {
    title: "Discord Community",
    href: "/stay-connected/discord",
    icon: MessageCircle,
    emoji: "💬",
    description: "Chat with fellow reservists, share tips, get plant ID help, and coordinate volunteer efforts.",
    cta: "Join Discord",
    highlight: "500+ members",
  },
  {
    title: "Social Media",
    href: "/stay-connected/social",
    icon: Share2,
    emoji: "📸",
    description: "Follow us for daily updates, reserve photos, planting tutorials, and community stories.",
    cta: "Follow Us",
    highlight: "5 platforms",
  },
];

const WHY_CONNECTED = [
  {
    emoji: "🔔",
    icon: Bell,
    title: "First to Know",
    description: "Get early access to event registrations, new reserve launches, and seasonal planting guides before anyone else.",
  },
  {
    emoji: "🎁",
    icon: Heart,
    title: "Exclusive Content",
    description: "Members-only plant care deep dives, behind-the-scenes reserve tours, and interviews with local ecologists.",
  },
  {
    emoji: "🤝",
    icon: Users,
    title: "Community Support",
    description: "Connect with experienced native plant gardeners who can help you identify species, troubleshoot issues, and celebrate wins.",
  },
  {
    emoji: "📅",
    icon: Calendar,
    title: "Volunteer Opportunities",
    description: "Be the first to sign up for planting days, habitat restoration events, and community workshops across Ventura County.",
  },
];

export default function StayConnectedPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-reserve-green text-white py-16">
        <div className="container-site">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono-accent uppercase tracking-widest text-sage mb-4">
              <MessageCircle size={14} />
              Community
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Stay Connected
            </h1>
            <p className="text-sage text-lg leading-relaxed">
              Stay in the loop with the MiniNature Reserve community. Whether you prefer email,
              real-time chat, or social feeds — there&apos;s a place for you.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <div className="container-site py-16">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-deep-forest mb-3">
            Choose How You Connect
          </h2>
          <p className="text-forest-mid max-w-2xl mx-auto">
            From monthly newsletters to daily social updates, pick the channels that work best for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURE_CARDS.map((card) => (
            <Link key={card.href} href={card.href} className="group">
              <div className="card-organic bg-white p-8 border border-lichen-cream h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{card.emoji}</span>
                  <card.icon size={24} className="text-reserve-green" />
                </div>
                <h3 className="font-display font-bold text-xl text-deep-forest mb-2">
                  {card.title}
                </h3>
                <p className="text-forest-mid text-sm leading-relaxed mb-6 flex-1">
                  {card.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-accent text-sage uppercase tracking-wide">
                    {card.highlight}
                  </span>
                  <span className="btn btn-primary text-sm py-2 px-5 group-hover:translate-x-1 transition-transform">
                    {card.cta} <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Inline Newsletter Signup */}
      <section className="bg-deep-forest text-white py-16">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-2xl mb-3 block">📬</span>
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-3">
              Quick Subscribe
            </h2>
            <p className="text-sage text-sm mb-8">
              Get our monthly Field Notes newsletter — stories from the reserves, plant spotlights, and upcoming events.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                required
                placeholder="you@email.com"
                className="flex-1 px-4 py-3 rounded-xl border border-sage/30 bg-white/10 text-white placeholder:text-sage/60 outline-none focus:border-sage text-sm"
              />
              <button type="submit" className="btn btn-primary py-3 px-6 justify-center">
                Subscribe <Mail size={14} />
              </button>
            </form>
            <p className="text-sage/60 text-xs mt-4">
              We never share your email. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Why Stay Connected */}
      <section className="container-site py-16">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-deep-forest mb-3">
            Why Stay Connected?
          </h2>
          <p className="text-forest-mid max-w-2xl mx-auto">
            Being part of the MiniNature community means more than just following along — it means
            making a real impact on urban habitat restoration in Ventura County.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {WHY_CONNECTED.map((item) => (
            <div key={item.title} className="card-organic bg-white p-6 border border-lichen-cream">
              <div className="flex items-start gap-4">
                <span className="text-2xl shrink-0">{item.emoji}</span>
                <div>
                  <h3 className="font-display font-semibold text-deep-forest text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-forest-mid text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Back Link */}
      <div className="container-site pb-16">
        <Link href="/" className="text-sm text-forest-mid hover:text-reserve-green inline-flex items-center gap-2 transition-colors">
          <ArrowRight size={14} className="rotate-180" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
