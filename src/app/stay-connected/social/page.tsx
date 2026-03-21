import type { Metadata } from "next";
import { Share2, ArrowRight, ExternalLink, Camera, Hash } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Social Media",
  description: "Follow MiniNature Reserve on Instagram, YouTube, Facebook, TikTok, and LinkedIn for daily updates, tutorials, and community stories.",
};

const SOCIAL_PLATFORMS = [
  {
    name: "Instagram",
    handle: "@mininaturereserve",
    emoji: "📸",
    description: "Daily reserve photos, stories, and reels showcasing native plant transformations and wildlife encounters across Ventura County.",
    url: "https://instagram.com/mininaturereserve",
    followers: "3.2K followers",
    color: "bg-gradient-to-br from-purple-500/10 to-california-poppy/10",
  },
  {
    name: "YouTube",
    handle: "MiniNature Reserve",
    emoji: "🎬",
    description: "Planting tutorials, reserve tours, and community stories. Learn how to start and maintain your own native habitat reserve.",
    url: "https://youtube.com/@mininaturereserve",
    followers: "1.8K subscribers",
    color: "bg-red-50",
  },
  {
    name: "Facebook",
    handle: "MiniNature Reserve",
    emoji: "👥",
    description: "Event updates, community discussions, and local news. Join our Facebook group for neighborhood-level coordination.",
    url: "https://facebook.com/mininaturereserve",
    followers: "2.5K followers",
    color: "bg-blue-50",
  },
  {
    name: "TikTok",
    handle: "@mininaturereserve",
    emoji: "🎵",
    description: "Quick tips, time-lapse transformation videos, and behind-the-scenes looks at reserve installations and volunteer events.",
    url: "https://tiktok.com/@mininaturereserve",
    followers: "4.1K followers",
    color: "bg-gray-50",
  },
  {
    name: "LinkedIn",
    handle: "MiniNature Reserve",
    emoji: "💼",
    description: "Professional updates, partnership announcements, and impact reports. Connect with us for corporate and municipal collaborations.",
    url: "https://linkedin.com/company/mininaturereserve",
    followers: "850 followers",
    color: "bg-blue-50",
  },
];

const HASHTAGS = ["#MiniNatureReserve", "#NativePlants", "#UrbanHabitat"];

const RECENT_POSTS = [
  {
    platform: "Instagram",
    emoji: "📸",
    title: "Before & after: This Oxnard front yard went from bare dirt to a thriving sage scrub habitat in just 4 months!",
    date: "2 days ago",
    engagement: "234 likes",
  },
  {
    platform: "YouTube",
    emoji: "🎬",
    title: "How to Plant California Buckwheat — Complete Guide for Beginners",
    date: "1 week ago",
    engagement: "1.2K views",
  },
  {
    platform: "TikTok",
    emoji: "🎵",
    title: "POV: You spot a Cooper's Hawk nesting in your 6-month-old reserve",
    date: "3 days ago",
    engagement: "8.5K views",
  },
];

export default function SocialPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-reserve-green text-white py-16">
        <div className="container-site">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono-accent uppercase tracking-widest text-sage mb-4">
              <Share2 size={14} />
              Follow Us
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Social Media
            </h1>
            <p className="text-sage text-lg leading-relaxed">
              Follow MiniNature Reserve for daily updates, reserve photos, planting tutorials,
              and community stories from across Ventura County.
            </p>
          </div>
        </div>
      </section>

      <div className="container-site py-16">
        {/* Platform Grid */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-deep-forest mb-8 text-center">
            Find Us Everywhere
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOCIAL_PLATFORMS.map((platform) => (
              <div key={platform.name} className="card-organic bg-white border border-lichen-cream overflow-hidden flex flex-col">
                <div className={`${platform.color} p-6 text-center`}>
                  <span className="text-4xl block mb-2">{platform.emoji}</span>
                  <h3 className="font-display font-bold text-xl text-deep-forest">
                    {platform.name}
                  </h3>
                  <p className="text-xs font-mono-accent text-forest-mid mt-1">{platform.handle}</p>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-forest-mid text-sm leading-relaxed mb-4 flex-1">
                    {platform.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono-accent text-sage uppercase tracking-wide">
                      {platform.followers}
                    </span>
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary text-sm py-2 px-5"
                    >
                      Follow <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Share Your Story */}
        <section className="mb-16">
          <div className="card-organic bg-deep-forest text-white p-10 text-center max-w-3xl mx-auto">
            <span className="text-3xl block mb-4">
              <Camera size={32} className="mx-auto text-hummingbird-gold" />
            </span>
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-3">
              Share Your Story
            </h2>
            <p className="text-sage text-sm mb-6 max-w-lg mx-auto leading-relaxed">
              We love seeing your reserves! Tag us in your posts and use our hashtags for a
              chance to be featured on our channels and in our monthly newsletter.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {HASHTAGS.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 text-sm font-mono-accent text-sage"
                >
                  <Hash size={12} />
                  {tag.replace("#", "")}
                </span>
              ))}
            </div>
            <p className="text-sage/60 text-xs">
              Tag <span className="text-white font-medium">@mininaturereserve</span> on any platform
            </p>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-deep-forest mb-8 text-center">
            Recent Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {RECENT_POSTS.map((post) => (
              <div key={post.title} className="card-organic bg-white p-6 border border-lichen-cream">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">{post.emoji}</span>
                  <span className="text-xs font-mono-accent text-sage uppercase tracking-wide">
                    {post.platform}
                  </span>
                </div>
                <p className="text-deep-forest text-sm font-medium leading-relaxed mb-4">
                  {post.title}
                </p>
                <div className="flex items-center justify-between text-xs text-forest-mid">
                  <span>{post.date}</span>
                  <span className="font-mono-accent">{post.engagement}</span>
                </div>
              </div>
            ))}
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
