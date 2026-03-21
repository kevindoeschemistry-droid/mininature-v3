import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, CheckCircle, ArrowRight, Clock, Star, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Reservist Training",
  description: "Become a certified MiniNature Reservist. Learn plant ID, habitat design, installation techniques, and stewardship.",
};

const MODULES = [
  {
    num: "01",
    title: "California Native Plants 101",
    hours: "3 hours",
    format: "In-person workshop",
    description: "Identify the 30 most common Southern California native plants by sight. Learn growth habits, water needs, wildlife value, and seasonal patterns.",
    outcomes: ["ID 30 native species", "Match plants to site conditions", "Understand bloom calendars"],
  },
  {
    num: "02",
    title: "Habitat Design Principles",
    hours: "2 hours",
    format: "In-person workshop",
    description: "Design a reserve for maximum ecological function — layering, plant spacing, water flow, wildlife corridors, and aesthetic considerations.",
    outcomes: ["Create a planting plan", "Design for pollinators & birds", "Work with small spaces"],
  },
  {
    num: "03",
    title: "Installation Day Practicum",
    hours: "Full day (6 hrs)",
    format: "Field training",
    description: "Get hands-on installation experience at a real reserve site. Work under a Lead Reservist to prepare soil, install plants, and mulch.",
    outcomes: ["Soil prep & amendment", "Proper planting depth", "Irrigation setup basics"],
  },
  {
    num: "04",
    title: "Long-term Stewardship",
    hours: "2 hours",
    format: "In-person + self-paced",
    description: "Learn how to maintain a reserve through all seasons — irrigation schedules, weeding strategies, pruning, and monitoring wildlife activity.",
    outcomes: ["Seasonal maintenance plans", "Weed ID & removal", "Monitoring logs"],
  },
  {
    num: "05",
    title: "Community Engagement",
    hours: "1.5 hours",
    format: "Workshop",
    description: "How to involve neighbors, run volunteer days, talk to skeptical property owners, and build a stewardship community around your reserve.",
    outcomes: ["Neighbor engagement scripts", "Run a volunteer day", "Handle common objections"],
  },
];

// MiniNature recruits one cohort per year with fall and spring application windows.

export default function TrainingPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-deep-forest text-white section-pad">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={16} className="text-hummingbird-gold" />
                <span className="text-xs font-mono-accent uppercase tracking-widest text-hummingbird-gold">
                  Reservist Training Program
                </span>
              </div>
              <h1 className="font-display font-bold text-4xl md:text-5xl mb-5 leading-tight">
                Become a Certified<br />
                <em className="text-hummingbird-gold not-italic">MiniNature Reservist</em>
              </h1>
              <p className="text-sage text-lg leading-relaxed mb-6">
                Our 5-module training program gives you everything you need to design, install,
                and steward a MiniNature Reserve — and teach others to do the same.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#apply" className="btn btn-primary">
                  Apply for Next Cohort
                </a>
                <Link href="/get-involved/volunteer" className="btn btn-outline-white">
                  Volunteer First
                </Link>
              </div>
            </div>

            {/* Credential summary */}
            <div className="bg-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <Star size={16} className="text-hummingbird-gold" />
                <span className="text-hummingbird-gold text-sm font-medium">What You Earn</span>
              </div>
              <ul className="space-y-3">
                {[
                  "Certified MiniNature Reservist credential",
                  "Access to free plant packs for your reserves",
                  "Listed as Lead Reservist in your neighborhood",
                  "Priority placement on installation teams",
                  "Invitation to annual Reservist Summit",
                  "Support from MiniNature staff & lead mentors",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-sage">
                    <CheckCircle size={15} className="text-hummingbird-gold shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="container-site py-16">
        <div className="max-w-3xl">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-2">Training Curriculum</h2>
          <p className="text-forest-mid mb-8">
            Five modules, delivered over 5 Saturday mornings. All in-person, all in Ventura County. Free.
          </p>
          <div className="space-y-4">
            {MODULES.map((mod) => (
              <div key={mod.num} className="card-organic bg-white p-6 flex gap-5">
                <div className="shrink-0 w-12 text-center">
                  <div className="font-mono-accent text-2xl font-bold text-reserve-green/30 leading-none">
                    {mod.num}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="font-display font-semibold text-deep-forest text-lg">
                      {mod.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-forest-mid shrink-0">
                      <span className="flex items-center gap-1"><Clock size={10} />{mod.hours}</span>
                      <span className="flex items-center gap-1"><BookOpen size={10} />{mod.format}</span>
                    </div>
                  </div>
                  <p className="text-sm text-forest-mid leading-relaxed mb-3">
                    {mod.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {mod.outcomes.map((o) => (
                      <span key={o} className="reserve-type-badge bg-mint-mist text-reserve-green">
                        ✓ {o}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cohort info */}
      <section className="bg-mint-mist py-16">
        <div className="container-site">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
            Cohort Schedule
          </h2>
          <p className="text-forest-mid mb-8 max-w-xl">
            We recruit <strong>one cohort per year</strong>, with application windows in both fall and spring.
            Cohorts are small — typically 12 participants — to ensure personalized mentorship and meaningful community.
          </p>
          <div className="card-organic bg-white p-8 max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="font-display font-bold text-3xl text-reserve-green mb-1">1×</div>
                <div className="text-sm text-forest-mid">per year</div>
              </div>
              <div className="text-center">
                <div className="font-display font-bold text-3xl text-reserve-green mb-1">12</div>
                <div className="text-sm text-forest-mid">spots per cohort</div>
              </div>
              <div className="text-center">
                <div className="font-display font-bold text-3xl text-reserve-green mb-1">Free</div>
                <div className="text-sm text-forest-mid">no cost to participate</div>
              </div>
            </div>
            <div className="border-t border-lichen-cream mt-6 pt-6">
              <p className="text-sm text-forest-mid mb-4">
                Applications are reviewed on a rolling basis. Priority given to Ventura County residents.
                Fall and spring application windows are announced via our newsletter and social media.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#apply" className="btn btn-primary text-sm">
                  Apply Now
                </a>
                <Link href="/explore/events" className="btn btn-secondary text-sm">
                  Check Events Calendar <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application */}
      <section id="apply" className="container-site py-16">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <GraduationCap size={28} className="text-reserve-green mx-auto mb-3" />
            <h2 className="font-display font-bold text-3xl text-deep-forest mb-3">
              Apply for Reservist Training
            </h2>
            <p className="text-forest-mid text-sm">
              Free. Open to all. No prior experience required — just commitment and curiosity.
            </p>
          </div>
          <div className="card-organic bg-white p-8">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-deep-forest mb-1.5">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-deep-forest mb-1.5">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1.5">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1.5">How did you hear about us?</label>
                <select className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-sm text-deep-forest bg-white">
                  <option>Social media (Instagram/Facebook)</option>
                  <option>Friend or neighbor</option>
                  <option>Attended a MiniNature event</option>
                  <option>Newsletter</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1.5">
                  Why do you want to become a Reservist?
                </label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-sm resize-none" />
              </div>
              <button type="submit" className="btn btn-primary w-full justify-center py-3 text-base">
                Submit Application
              </button>
            </form>
          </div>
          <p className="text-center text-xs text-forest-mid mt-4">
            Questions? <Link href="/contact" className="text-reserve-green underline">Contact us</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
