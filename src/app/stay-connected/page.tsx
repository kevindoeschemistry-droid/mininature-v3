import type { Metadata } from "next";
import {
  MessageCircle,
  Mail,
  ArrowRight,
  Bell,
  Heart,
  Users,
  Calendar,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import NewsletterMiniForm from "@/components/forms/NewsletterMiniForm";

export const metadata: Metadata = {
  title: "Stay Connected",
  description:
    "Stay in the loop with the MiniNature Reserve community — newsletter, Discord, and social media.",
};

const SOCIAL_LINKS = [
  {
    platform: "Instagram",
    handle: "@mininaturereserve",
    url: "https://instagram.com/mininaturereserve",
    emoji: "\u{1F4F8}",
    description: "Daily reserve photos, planting reels, and community stories.",
  },
  {
    platform: "YouTube",
    handle: "@MiniNatureReserve",
    url: "https://youtube.com/@MiniNatureReserve",
    emoji: "\u{1F3AC}",
    description:
      "Planting tutorials, reserve tours, and native species spotlights.",
  },
  {
    platform: "TikTok",
    handle: "@mininaturereserve",
    url: "https://tiktok.com/@mininaturereserve",
    emoji: "\u{1F3B5}",
    description: "Quick tips, before-and-after transformations, and fun nature clips.",
  },
  {
    platform: "Facebook",
    handle: "MiniNature Reserve",
    url: "https://facebook.com/mininaturereserve",
    emoji: "\u{1F44D}",
    description: "Event announcements, volunteer recaps, and community discussion.",
  },
  {
    platform: "LinkedIn",
    handle: "MiniNature Reserve",
    url: "https://linkedin.com/company/mininaturereserve",
    emoji: "\u{1F4BC}",
    description:
      "Organizational updates, partnership news, and conservation industry insights.",
  },
];

const WHY_CONNECTED = [
  {
    emoji: "\u{1F514}",
    icon: Bell,
    title: "First to Know",
    description:
      "Get early access to event registrations, new reserve launches, and seasonal planting guides before anyone else.",
  },
  {
    emoji: "\u{1F381}",
    icon: Heart,
    title: "Exclusive Content",
    description:
      "Members-only plant care deep dives, behind-the-scenes reserve tours, and interviews with local ecologists.",
  },
  {
    emoji: "\u{1F91D}",
    icon: Users,
    title: "Community Support",
    description:
      "Connect with experienced native plant gardeners who can help you identify species, troubleshoot issues, and celebrate wins.",
  },
  {
    emoji: "\u{1F4C5}",
    icon: Calendar,
    title: "Volunteer Opportunities",
    description:
      "Be the first to sign up for planting days, habitat restoration events, and community workshops across Ventura County.",
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
              Stay in the loop with the MiniNature Reserve community. Subscribe
              to our newsletter, join our Discord, or follow us on social media.
            </p>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="bg-deep-forest text-white py-16">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center gap-2 text-xs font-mono-accent uppercase tracking-widest text-sage mb-3 justify-center">
              <Mail size={12} />
              Newsletter
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-3">
              Field Notes Newsletter
            </h2>
            <p className="text-sage leading-relaxed mb-3">
              Our monthly newsletter brings you stories from the reserves, plant
              spotlights, seasonal planting guides, and upcoming events. Join
              over 2,000 readers who care about native habitat restoration.
            </p>
            <p className="text-sage/70 text-sm mb-8">
              Delivered on the first Tuesday of each month. We never share your
              email. Unsubscribe anytime.
            </p>
            <div className="max-w-lg mx-auto">
              <NewsletterMiniForm darkMode={true} />
            </div>
          </div>
        </div>
      </section>

      {/* ── DISCORD ── */}
      <section className="container-site py-16">
        <div className="max-w-3xl mx-auto">
          <div className="card-organic bg-white p-8 md:p-10 border border-lichen-cream">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-3">
                  <MessageCircle size={12} />
                  Discord Community
                </div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-deep-forest mb-3">
                  Join the Conversation
                </h2>
                <p className="text-forest-mid leading-relaxed mb-3">
                  Our Discord server is where the MiniNature community comes
                  together in real time. Chat with fellow reservists, get native
                  plant identification help, share photos of your yard
                  transformations, and coordinate volunteer efforts.
                </p>
                <ul className="space-y-2 text-sm text-forest-mid mb-6">
                  {[
                    "Plant ID help from experienced gardeners",
                    "Seasonal planting tips and discussions",
                    "Volunteer coordination for planting days",
                    "Share your native garden progress photos",
                    "Direct access to MiniNature staff",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-reserve-green mt-0.5">
                        <ArrowRight size={12} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://discord.gg/y6YzU6H3Gm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary inline-flex items-center gap-2"
                >
                  <MessageCircle size={16} />
                  Join Our Discord
                  <ExternalLink size={14} />
                </a>
                <p className="text-xs text-forest-mid mt-3">
                  500+ members and growing. Free to join.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL MEDIA ── */}
      <section className="bg-lichen-cream py-16">
        <div className="container-site">
          <div className="text-center mb-10">
            <div className="flex items-center gap-2 text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-3 justify-center">
              <ExternalLink size={12} />
              Social Media
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-deep-forest mb-3">
              Follow Along
            </h2>
            <p className="text-forest-mid max-w-xl mx-auto">
              Follow us for daily updates, reserve photos, planting tutorials,
              and community stories across your favorite platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group card-organic bg-white p-6 border border-lichen-cream hover:border-reserve-green transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{social.emoji}</span>
                  <div>
                    <h3 className="font-display font-semibold text-deep-forest group-hover:text-reserve-green transition-colors">
                      {social.platform}
                    </h3>
                    <p className="text-xs text-forest-mid font-mono-accent">
                      {social.handle}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-forest-mid leading-relaxed">
                  {social.description}
                </p>
              </a>
            ))}
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
            Being part of the MiniNature community means more than just
            following along — it means making a real impact on urban habitat
            restoration in Ventura County.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {WHY_CONNECTED.map((item) => (
            <div
              key={item.title}
              className="card-organic bg-white p-6 border border-lichen-cream"
            >
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
        <Link
          href="/"
          className="text-sm text-forest-mid hover:text-reserve-green inline-flex items-center gap-2 transition-colors"
        >
          <ArrowRight size={14} className="rotate-180" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
