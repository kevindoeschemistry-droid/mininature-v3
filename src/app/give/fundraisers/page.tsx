import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Run a Fundraiser",
  description:
    "Start a birthday, school, or workplace fundraising drive for MiniNature Reserve. We provide tools, coaching, and recognition.",
};

const FUNDRAISER_TYPES = [
  {
    emoji: "🎂",
    title: "Birthday Fundraiser",
    description:
      "Skip the gifts and ask friends to donate to native habitat instead. Perfect for milestone birthdays.",
    example: "Goal: $300 — enough to install a parkway garden",
  },
  {
    emoji: "🏫",
    title: "School Drive",
    description:
      "Rally students and families to fund a school reserve. Great for ecology units, Earth Day, or service learning.",
    example: "Goal: $500 — funds a school campus native garden",
  },
  {
    emoji: "🏢",
    title: "Workplace Campaign",
    description:
      "Organize a matching gift drive, casual Friday donations, or team volunteer day with a fundraising component.",
    example: "Goal: $1,000 — installs a full community reserve",
  },
  {
    emoji: "🎪",
    title: "Event Fundraiser",
    description:
      "Host a plant sale, garden tour, neighborhood potluck, or any creative event with proceeds supporting MiniNature.",
    example: "Goal: $250 — buys 30 native seedlings",
  },
  {
    emoji: "📱",
    title: "Social Media Challenge",
    description:
      "Launch a challenge on Instagram, TikTok, or Facebook. Tag friends, share before-and-after photos, go viral for habitat.",
    example: "Goal: $150 — plants a pollinator patch",
  },
];

const STEPS = [
  {
    num: "1",
    title: "Choose Your Type",
    description:
      "Pick a fundraiser format that fits your life — birthday, school, workplace, event, or social media.",
  },
  {
    num: "2",
    title: "Set a Goal",
    description:
      "Choose a fundraising target. We'll help you pick a meaningful amount tied to real habitat outcomes.",
  },
  {
    num: "3",
    title: "Share & Collect",
    description:
      "Use our shareable page, graphics, and impact stats to spread the word. Donations go directly to MiniNature.",
  },
];

const ACTIVE_FUNDRAISERS = [
  {
    name: "Maria's 30th Birthday Garden",
    creator: "Maria G.",
    type: "Birthday Fundraiser",
    goal: 300,
    raised: 245,
    supporters: 14,
  },
  {
    name: "Oxnard High Earth Day Drive",
    creator: "Oxnard High Eco Club",
    type: "School Drive",
    goal: 500,
    raised: 180,
    supporters: 22,
  },
  {
    name: "ViviServe Team Challenge",
    creator: "ViviServe Engineering",
    type: "Workplace Campaign",
    goal: 1000,
    raised: 720,
    supporters: 31,
  },
];

export default function FundraisersPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-reserve-green text-white section-pad">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-sage mb-4">
              Community Fundraising
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-5 leading-tight">
              Run a Fundraiser for
              <br />
              <em className="text-hummingbird-gold not-italic">
                Native Habitat
              </em>
            </h1>
            <p className="text-sage text-lg leading-relaxed">
              Turn birthdays, school events, workplace campaigns, and social
              media into funding for real native plant habitat in your
              community.
            </p>
          </div>
        </div>
      </section>

      {/* Fundraiser types */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-2 text-center">
          Choose Your Fundraiser
        </h2>
        <p className="text-center text-forest-mid mb-10 text-sm max-w-lg mx-auto">
          Pick a format that fits your life and community. Every type comes with
          our full support.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FUNDRAISER_TYPES.map((ft) => (
            <div
              key={ft.title}
              className="card-organic bg-white p-6 border border-lichen-cream flex flex-col"
            >
              <span className="text-3xl mb-3">{ft.emoji}</span>
              <h3 className="font-display font-semibold text-lg text-deep-forest mb-2">
                {ft.title}
              </h3>
              <p className="text-sm text-forest-mid leading-relaxed flex-1 mb-3">
                {ft.description}
              </p>
              <div className="text-xs text-reserve-green font-medium bg-mint-mist px-3 py-1.5 rounded-full inline-block">
                {ft.example}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-lichen-cream py-16">
        <div className="container-site max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-8 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEPS.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-12 h-12 rounded-full bg-reserve-green text-white font-display font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-display font-semibold text-deep-forest mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-forest-mid leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit */}
      <section className="container-site py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-2 text-center">
            Your Fundraiser Toolkit
          </h2>
          <p className="text-center text-forest-mid mb-8 text-sm">
            We set you up for success with everything you need.
          </p>
          <div className="card-organic bg-white p-8 border border-lichen-cream">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Personalized donation page with your story",
                "Shareable social media graphics",
                "Real-time progress tracking",
                "Impact stats to share with donors",
                "Email templates for outreach",
                "Recognition on our website and newsletter",
                "Coaching from our team if you need it",
                "Thank-you cards for your supporters",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 text-sm text-forest-mid"
                >
                  <CheckCircle
                    size={14}
                    className="text-reserve-green shrink-0 mt-0.5"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Active fundraisers */}
      <section className="bg-lichen-cream py-16">
        <div className="container-site">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-2 text-center">
            Active Fundraisers
          </h2>
          <p className="text-center text-forest-mid mb-8 text-sm">
            See what our community is raising right now.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACTIVE_FUNDRAISERS.map((f) => {
              const pct = Math.round((f.raised / f.goal) * 100);
              return (
                <div
                  key={f.name}
                  className="card-organic bg-white p-6 border border-lichen-cream"
                >
                  <div className="text-xs font-mono-accent uppercase tracking-widest text-sage mb-2">
                    {f.type}
                  </div>
                  <h3 className="font-display font-semibold text-deep-forest mb-1">
                    {f.name}
                  </h3>
                  <p className="text-xs text-forest-mid mb-4">
                    by {f.creator} · {f.supporters} supporters
                  </p>

                  {/* Progress bar */}
                  <div className="mb-2">
                    <div className="h-3 bg-mint-mist rounded-full overflow-hidden">
                      <div
                        className="h-full bg-reserve-green rounded-full transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-bold text-reserve-green">
                      ${f.raised.toLocaleString()}
                    </span>
                    <span className="text-forest-mid">
                      of ${f.goal.toLocaleString()} ({pct}%)
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Start form */}
      <section className="container-site py-16">
        <div className="max-w-2xl mx-auto">
          <div className="card-organic bg-white p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-reserve-green flex items-center justify-center">
                <Users size={18} className="text-white" />
              </div>
              <div>
                <h2 className="font-display font-semibold text-2xl text-deep-forest">
                  Start a Fundraiser
                </h2>
                <p className="text-sm text-forest-mid">
                  We&apos;ll get you set up within 24 hours.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-deep-forest mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-deep-forest mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1.5">
                  Fundraiser Type
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm bg-white">
                  <option>Birthday Fundraiser</option>
                  <option>School Drive</option>
                  <option>Workplace Campaign</option>
                  <option>Event Fundraiser</option>
                  <option>Social Media Challenge</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1.5">
                  Fundraising Goal
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-forest-mid">
                    $
                  </span>
                  <input
                    type="number"
                    placeholder="500"
                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1.5">
                  Tell Us About Your Fundraiser
                </label>
                <textarea
                  rows={3}
                  placeholder="What's the occasion? Who will you be inviting?"
                  className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm resize-none"
                />
              </div>
              <button className="btn btn-primary w-full justify-center text-base py-3">
                Launch My Fundraiser
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="container-site pb-12 text-center">
        <Link
          href="/give"
          className="text-sm text-forest-mid hover:text-reserve-green transition-colors inline-flex items-center gap-1"
        >
          <ArrowRight size={12} className="rotate-180" />
          Back to all giving options
        </Link>
      </section>
    </div>
  );
}
