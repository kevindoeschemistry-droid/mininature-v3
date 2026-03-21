import type { Metadata } from "next";
import Link from "next/link";
import { DollarSign, Users, Gift, ArrowRight, CheckCircle, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Run a Fundraiser",
  description: "Birthday fundraiser, school drive, workplace campaign — grow MiniNature's impact with a community fundraiser.",
};

const TYPES = [
  { emoji: "🎂", title: "Birthday Fundraiser", description: "Turn your birthday into habitat. Ask friends to donate instead of buying gifts." },
  { emoji: "🏫", title: "School Drive", description: "Engage your school community in raising funds for a campus or neighborhood reserve." },
  { emoji: "💼", title: "Workplace Campaign", description: "Organize a matching gift campaign or Green Week fundraiser at your company." },
  { emoji: "🏃", title: "Challenge Fundraiser", description: "Hike a trail, run a 5K, or do a plant-a-thon and collect pledges per reserve installed." },
  { emoji: "🎨", title: "Art Sale / Event", description: "Host a benefit dinner, art auction, plant sale, or pop-up market for MiniNature." },
  { emoji: "📱", title: "Online Campaign", description: "Launch a social media fundraiser on your birthday or any day you choose." },
];

export default function FundraisersPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      <section className="bg-california-poppy text-white section-pad">
        <div className="container-site">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono-accent uppercase tracking-widest text-white/70">
            <Link href="/support" className="hover:text-white transition-colors">Support</Link>
            <span>/</span>
            <span>Fundraisers</span>
          </div>
          <Sparkles size={32} className="text-white mb-4" />
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
            Run a Fundraiser
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-xl mb-6">
            Whether it&apos;s your birthday, your company&apos;s green week, or just a great reason to
            bring friends together — you can raise funds for urban biodiversity.
          </p>
          <a href="#start" className="btn bg-white text-california-poppy hover:bg-white/90 font-semibold text-lg px-8 py-4">
            🎉 Start a Fundraiser
          </a>
        </div>
      </section>

      {/* Fundraiser types */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-8">Fundraiser Ideas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TYPES.map((t) => (
            <div key={t.title} className="card-organic bg-white p-6">
              <span className="text-3xl mb-3 block">{t.emoji}</span>
              <h3 className="font-display font-semibold text-deep-forest text-base mb-2">{t.title}</h3>
              <p className="text-xs text-forest-mid leading-relaxed">{t.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What you get */}
      <section className="bg-lichen-cream py-16">
        <div className="container-site max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-6 text-center">
            What We Provide Fundraisers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Gift, text: "Custom fundraiser page with your name and goal" },
              { icon: Users, text: "Shareable link and social media toolkit" },
              { icon: DollarSign, text: "Tax receipts sent automatically to all donors" },
              { icon: CheckCircle, text: "Impact update: where your funds went" },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3 card-organic bg-white p-4">
                <item.icon size={16} className="text-reserve-green shrink-0 mt-0.5" />
                <span className="text-sm text-forest-mid">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="start" className="container-site py-16 max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-2">Ready to Start?</h2>
          <p className="text-forest-mid text-sm">Tell us about your idea and we&apos;ll set up your fundraiser page.</p>
        </div>
        <div className="card-organic bg-white p-8">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1.5">Your Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1.5">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-sm" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-deep-forest mb-1.5">Fundraiser Type</label>
              <select className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-sm bg-white text-deep-forest">
                {TYPES.map((t) => <option key={t.title}>{t.title}</option>)}
                <option>Something else</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-deep-forest mb-1.5">Fundraising Goal ($)</label>
              <input type="number" placeholder="e.g. 500" className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-deep-forest mb-1.5">Tell us more</label>
              <textarea rows={3} placeholder="What's your occasion, timeline, or idea?" className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-sm resize-none" />
            </div>
            <button type="submit" className="btn btn-primary w-full justify-center py-3">
              Start My Fundraiser <ArrowRight size={14} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
