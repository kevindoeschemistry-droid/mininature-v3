import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight, Clock, Users, Calendar, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Book an Educational Activity",
  description:
    "Schedule native plant walks, pollinator workshops, seed saving classes, and community planting days for your group or school.",
};

const ACTIVITIES = [
  {
    emoji: "🌿",
    title: "Native Plant ID Walk",
    description:
      "A guided walk through a local native habitat or reserve. Participants learn to identify common California native plants, understand their ecological roles, and discover which species attract pollinators.",
    duration: "1.5–2 hours",
    groupSize: "5–30 participants",
    ageRange: "Ages 8+",
  },
  {
    emoji: "🦋",
    title: "Pollinator Workshop",
    description:
      "Hands-on workshop exploring the relationship between native plants and local pollinators — bees, butterflies, hummingbirds, and more. Includes building a simple pollinator nesting structure to take home.",
    duration: "2 hours",
    groupSize: "10–25 participants",
    ageRange: "Ages 6+",
  },
  {
    emoji: "🌰",
    title: "Seed Saving Class",
    description:
      "Learn the art and science of collecting, cleaning, and storing native plant seeds. Participants practice with seasonal species and leave with seeds and a propagation guide.",
    duration: "1.5 hours",
    groupSize: "8–20 participants",
    ageRange: "Ages 12+",
  },
  {
    emoji: "🏫",
    title: "School Garden Installation",
    description:
      "A full-day program where students help design and plant a native garden on their school grounds. Includes curriculum-aligned lessons on ecology, water conservation, and habitat.",
    duration: "Full day (5–6 hours)",
    groupSize: "15–60 students",
    ageRange: "Grades K–12",
  },
  {
    emoji: "🌻",
    title: "Community Planting Day",
    description:
      "Rally your neighborhood, church, or community group for a hands-on planting event. We provide plants, tools, and guidance — you provide the enthusiasm and the site.",
    duration: "3–4 hours",
    groupSize: "10–100 participants",
    ageRange: "All ages",
  },
  {
    emoji: "🪶",
    title: "Indigenous Plant Knowledge Session",
    description:
      "Explore the traditional uses of California native plants by indigenous Chumash and Tongva peoples. Covers food, medicine, fiber, and ceremony in a respectful, educational format.",
    duration: "1.5–2 hours",
    groupSize: "10–30 participants",
    ageRange: "Ages 10+",
  },
];

export default function EducationPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-reserve-green text-white section-pad">
        <div className="container-site">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono-accent uppercase tracking-widest text-sage">
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <span>Education</span>
          </div>
          <div className="max-w-2xl">
            <BookOpen size={32} className="text-hummingbird-gold mb-4" />
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Book an Educational Activity
            </h1>
            <p className="text-sage text-lg leading-relaxed mb-6">
              Bring the wonder of native plants and ecosystems to your group,
              school, or organization. Our programs are led by experienced
              naturalists and educators who make ecology accessible and fun.
            </p>
            <Link href="#booking-form" className="btn btn-primary">
              Book an Activity <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Banner */}
      <div className="bg-hummingbird-gold/15 border-b border-hummingbird-gold/30">
        <div className="container-site py-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎓</span>
            <p className="text-sm text-deep-forest">
              <strong>Sliding scale pricing.</strong> All school programs are
              free. Nonprofit and community groups pay what they can. Business and
              institutional groups help subsidize public programming.
            </p>
          </div>
        </div>
      </div>

      {/* Activities */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-8">
          Available Activities
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {ACTIVITIES.map((activity) => (
            <div
              key={activity.title}
              className="card-organic bg-white p-6 border border-lichen-cream"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl shrink-0">{activity.emoji}</span>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-deep-forest text-lg mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-forest-mid leading-relaxed mb-4">
                    {activity.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs text-forest-mid">
                    <div className="flex items-center gap-1.5">
                      <Clock size={12} />
                      <span>{activity.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users size={12} />
                      <span>{activity.groupSize}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      <span>{activity.ageRange}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Info */}
      <section className="bg-mint-mist py-16">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card-organic bg-white p-6 border border-lichen-cream text-center">
              <span className="text-3xl block mb-3">📅</span>
              <h3 className="font-display font-semibold text-deep-forest text-base mb-2">
                Book 2+ Weeks Ahead
              </h3>
              <p className="text-xs text-forest-mid leading-relaxed">
                We recommend booking at least two weeks in advance to secure your
                preferred date and activity type.
              </p>
            </div>
            <div className="card-organic bg-white p-6 border border-lichen-cream text-center">
              <span className="text-3xl block mb-3">🗺️</span>
              <h3 className="font-display font-semibold text-deep-forest text-base mb-2">
                We Come to You
              </h3>
              <p className="text-xs text-forest-mid leading-relaxed">
                Activities can take place at your site, a local reserve, a park,
                or our community nursery in Oxnard. Ventura County locations
                preferred.
              </p>
            </div>
            <div className="card-organic bg-white p-6 border border-lichen-cream text-center">
              <span className="text-3xl block mb-3">♻️</span>
              <h3 className="font-display font-semibold text-deep-forest text-base mb-2">
                Custom Programs
              </h3>
              <p className="text-xs text-forest-mid leading-relaxed">
                Need something specific? We can design custom programming for
                your curriculum, team retreat, or special event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="bg-deep-forest text-white py-16">
        <div className="container-site max-w-2xl mx-auto">
          <Send size={28} className="text-sage mx-auto mb-4" />
          <h2 className="font-display font-bold text-2xl mb-2 text-center">
            Request a Booking
          </h2>
          <p className="text-sage text-center mb-8">
            Fill out the form below and we&apos;ll follow up within a few days
            to confirm your activity.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
                  Organization / School
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
                  placeholder="Your organization"
                />
              </div>
              <div>
                <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
                  Contact Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
                  placeholder="you@org.com"
                />
              </div>
              <div>
                <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
                  placeholder="(805) 555-0100"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
                Activity Type
              </label>
              <select className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-hummingbird-gold">
                <option value="">Select an activity</option>
                <option value="plant-walk">Native Plant ID Walk</option>
                <option value="pollinator">Pollinator Workshop</option>
                <option value="seed-saving">Seed Saving Class</option>
                <option value="school-garden">School Garden Installation</option>
                <option value="planting-day">Community Planting Day</option>
                <option value="indigenous">Indigenous Plant Knowledge Session</option>
                <option value="custom">Custom Program</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
                />
              </div>
              <div>
                <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
                  Group Size
                </label>
                <input
                  type="number"
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
                  placeholder="e.g. 25"
                />
              </div>
              <div>
                <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
                  Age Range
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
                  placeholder="e.g. 8–12 years"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
                Additional Details
              </label>
              <textarea
                rows={3}
                className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
                placeholder="Any specific goals, accessibility needs, or location preferences..."
              />
            </div>
            <button type="submit" className="btn btn-primary w-full justify-center">
              Submit Booking Request <ArrowRight size={14} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
