import type { Metadata } from "next";
import { Mail, ArrowRight, BookOpen, Sprout, Calendar, Users, Sun, CheckCircle } from "lucide-react";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

export const metadata: Metadata = {
  title: "Join Our Newsletter",
  description: "Subscribe to MiniNature Field Notes — monthly stories, native plant spotlights, and event updates from Ventura County reserves.",
};

const NEWSLETTER_CONTENT = [
  { emoji: "📖", icon: BookOpen, title: "Stories from the Reserves", description: "Hear from real community members transforming their yards into thriving native habitats." },
  { emoji: "🌿", icon: Sprout, title: "Native Plant Spotlights", description: "Each month we feature a Ventura County native plant with growing tips, wildlife benefits, and sourcing info." },
  { emoji: "📅", icon: Calendar, title: "Upcoming Events", description: "Planting days, workshops, volunteer opportunities, and community gatherings across the county." },
  { emoji: "🤝", icon: Users, title: "Volunteer Spotlights", description: "Celebrating the people who make MiniNature possible — their stories, impact, and advice for newcomers." },
  { emoji: "☀️", icon: Sun, title: "Seasonal Growing Tips", description: "What to plant, prune, water, and watch for each month in our Mediterranean climate." },
];

const PAST_ISSUES = [
  { title: "Spring Planting Season is Here!", date: "March 2026", emoji: "🌸" },
  { title: "Winter Wildlife in Your Reserve", date: "February 2026", emoji: "🦉" },
  { title: "Year in Review: 50 New Reserves!", date: "January 2026", emoji: "🎉" },
];

export default function NewsletterPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-reserve-green text-white py-16">
        <div className="container-site">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono-accent uppercase tracking-widest text-sage mb-4">
              <Mail size={14} />
              Field Notes
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Join Our Newsletter
            </h1>
            <p className="text-sage text-lg leading-relaxed">
              Get monthly stories, native plant spotlights, and event updates delivered straight
              to your inbox. Join 2,000+ readers who care about urban habitat restoration.
            </p>
          </div>
        </div>
      </section>

      <div className="container-site py-16">
        {/* What You'll Get */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-deep-forest mb-8 text-center">
            What You&apos;ll Get
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEWSLETTER_CONTENT.map((item) => (
              <div key={item.title} className="card-organic bg-white p-6 border border-lichen-cream">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{item.emoji}</span>
                  <h3 className="font-display font-semibold text-deep-forest">
                    {item.title}
                  </h3>
                </div>
                <p className="text-forest-mid text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Sample Preview */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-deep-forest mb-8 text-center">
            Sneak Peek
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="card-organic bg-white border border-lichen-cream overflow-hidden">
              <div className="bg-reserve-green text-white p-6">
                <div className="flex items-center gap-2 text-xs font-mono-accent uppercase tracking-widest text-sage mb-2">
                  <Mail size={12} />
                  MiniNature Field Notes
                </div>
                <h3 className="font-display font-bold text-xl">
                  March 2026 — Spring Planting Season is Here! 🌸
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-lg shrink-0">🌿</span>
                  <div>
                    <p className="font-semibold text-deep-forest text-sm mb-1">Plant Spotlight: California Buckwheat</p>
                    <p className="text-forest-mid text-xs leading-relaxed">
                      This drought-tolerant powerhouse attracts over 70 species of native bees. Learn where to source it and how to plant it this spring...
                    </p>
                  </div>
                </div>
                <div className="border-t border-lichen-cream pt-4 flex items-start gap-3">
                  <span className="text-lg shrink-0">📅</span>
                  <div>
                    <p className="font-semibold text-deep-forest text-sm mb-1">Upcoming: Community Planting Day</p>
                    <p className="text-forest-mid text-xs leading-relaxed">
                      Join us March 29th at Arroyo Verde Park for our biggest planting event of the year. 200 native plants, 50 volunteers, one amazing morning...
                    </p>
                  </div>
                </div>
                <div className="border-t border-lichen-cream pt-4 flex items-start gap-3">
                  <span className="text-lg shrink-0">🤝</span>
                  <div>
                    <p className="font-semibold text-deep-forest text-sm mb-1">Volunteer Spotlight: Maria G.</p>
                    <p className="text-forest-mid text-xs leading-relaxed">
                      From a bare front yard to a certified MiniNature Reserve in 6 months — Maria shares her journey and top tips for beginners...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Signup Form */}
        <section className="mb-16" id="signup">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-deep-forest mb-8 text-center">
            Subscribe to Field Notes
          </h2>
          <div className="max-w-xl mx-auto">
            <NewsletterForm />
          </div>
        </section>

        {/* Past Issues */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-deep-forest mb-8 text-center">
            Past Issues
          </h2>
          <div className="max-w-xl mx-auto space-y-3">
            {PAST_ISSUES.map((issue) => (
              <div key={issue.date} className="card-organic bg-white p-5 border border-lichen-cream">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{issue.emoji}</span>
                    <div>
                      <p className="font-semibold text-deep-forest text-sm">{issue.title}</p>
                      <p className="text-xs text-forest-mid font-mono-accent">{issue.date}</p>
                    </div>
                  </div>
                  <span className="text-xs text-sage hover:text-reserve-green cursor-pointer flex items-center gap-1 transition-colors">
                    Read <ArrowRight size={12} />
                  </span>
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
