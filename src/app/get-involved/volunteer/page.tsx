import type { Metadata } from "next";
import Link from "next/link";
import { Users, Calendar, Clock, MapPin, CheckCircle, ArrowRight, Heart, ShieldCheck, Award, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Volunteer",
  description: "Join a planting day, help maintain a reserve, or assist with workshops. No experience needed — hours verified through VeriServe.",
};

const VOLUNTEER_ROLES = [
  {
    emoji: "🌱",
    title: "Reserve Installer",
    commitment: "One-day events",
    description: "Show up on install day, dig holes, plant natives, and help transform bare strips into living habitat. No experience needed.",
    skills: ["No experience needed", "Physical activity", "Outdoors all day"],
    color: "bg-mint-mist",
  },
  {
    emoji: "🔧",
    title: "Reserve Steward",
    commitment: "Monthly, 1–2 hrs",
    description: "Adopt a reserve near your home and visit monthly to water, weed, and report on its health. The most impactful volunteer role.",
    skills: ["Reliable commitment", "Basic plant ID", "Local to a reserve"],
    color: "bg-lichen-cream",
  },
  {
    emoji: "📸",
    title: "Community Photographer",
    commitment: "Flexible",
    description: "Document reserve transformations, events, and wildlife sightings. Your photos go into the reserve profile and social channels.",
    skills: ["Camera or smartphone", "Eye for nature"],
    color: "bg-mint-mist",
  },
  {
    emoji: "👩‍🏫",
    title: "Workshop Facilitator",
    commitment: "Seasonal",
    description: "Lead plant identification walks, propagation workshops, or youth education sessions at school reserves.",
    skills: ["Plant knowledge", "Teaching comfort", "Fluent Spanish a plus"],
    color: "bg-lichen-cream",
  },
  {
    emoji: "🗺️",
    title: "Community Outreach",
    commitment: "Flexible",
    description: "Talk to neighbors, hand out flyers, table at community events, and help recruit new reserve creators in underserved neighborhoods.",
    skills: ["Outgoing", "Community connections", "Bilingual a big plus"],
    color: "bg-mint-mist",
  },
  {
    emoji: "💻",
    title: "Digital & Design",
    commitment: "Remote / project-based",
    description: "Help with social media, graphic design, data entry for reserve profiles, grant writing support, or web updates.",
    skills: ["Digital skills", "Creative", "Self-directed"],
    color: "bg-lichen-cream",
  },
];

const UPCOMING = [
  {
    title: "Spring Install Day — W 3rd Street",
    date: "April 19, 2025",
    time: "9 AM – 2 PM",
    location: "W 3rd St, Oxnard",
    spots: 13,
  },
  {
    title: "School Reserve Volunteer Day",
    date: "April 26, 2025",
    time: "9:30 AM – 12:30 PM",
    location: "Colonia Middle School",
    spots: 9,
  },
  {
    title: "Monthly Stewardship — La Mariposa Reserve",
    date: "May 3, 2025",
    time: "8 AM – 10 AM",
    location: "W 5th Street Parkway",
    spots: 4,
  },
];

const VERISERVE_URL = "https://veriserve.kevindoeschemistry.com/";

export default function VolunteerPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-reserve-green text-white section-pad">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Users size={16} className="text-sage" />
                <span className="text-xs font-mono-accent uppercase tracking-widest text-sage">
                  Get Involved
                </span>
              </div>
              <h1 className="font-display font-bold text-4xl md:text-5xl mb-5 leading-tight">
                Volunteer with MiniNature
              </h1>
              <p className="text-sage text-lg leading-relaxed mb-8">
                Whether you have two hours on a Saturday or want to steward a reserve long-term,
                there&apos;s a role for you. No experience required — just a willingness to get your
                hands in the soil.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={VERISERVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Sign Up on VeriServe <ExternalLink size={14} />
                </a>
                <Link href="/explore/events" className="btn btn-outline-white">
                  View Upcoming Events
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "1,500+", label: "Volunteers to date" },
                { num: "4,000+", label: "Volunteer hours logged" },
                { num: "21", label: "Active reserves" },
                { num: "100%", label: "Free to participate" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-2xl p-5 text-center">
                  <div className="font-display font-bold text-3xl text-hummingbird-gold mb-1">{s.num}</div>
                  <div className="text-sage text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VeriServe callout */}
      <section className="bg-deep-forest text-white py-10">
        <div className="container-site">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck size={18} className="text-hummingbird-gold" />
                <span className="text-xs font-mono-accent uppercase tracking-widest text-sage">
                  Powered by VeriServe
                </span>
              </div>
              <h2 className="font-display font-bold text-xl md:text-2xl mb-2">
                Your hours, officially verified
              </h2>
              <p className="text-sage text-sm leading-relaxed max-w-xl">
                MiniNature uses VeriServe to track and certify every volunteer hour.
                Each hour is cryptographically signed — creating a permanent, tamper-proof
                record you can share with colleges, employers, or scholarship programs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <div className="flex items-start gap-3 bg-white/10 rounded-2xl px-5 py-4">
                <Award size={20} className="text-hummingbird-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Verified transcript</p>
                  <p className="text-xs text-sage">Share with schools &amp; employers</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white/10 rounded-2xl px-5 py-4">
                <ShieldCheck size={20} className="text-hummingbird-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">No paper forms</p>
                  <p className="text-xs text-sage">Hours follow you permanently</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-2">
          Volunteer Roles
        </h2>
        <p className="text-forest-mid mb-8">
          Find the role that fits your schedule, skills, and interests.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {VOLUNTEER_ROLES.map((role) => (
            <div key={role.title} className={`card-organic ${role.color} p-6`}>
              <div className="text-3xl mb-3">{role.emoji}</div>
              <h3 className="font-display font-semibold text-deep-forest text-lg mb-1">
                {role.title}
              </h3>
              <div className="flex items-center gap-1 text-xs text-reserve-green font-medium mb-3">
                <Clock size={11} />
                <span>{role.commitment}</span>
              </div>
              <p className="text-sm text-forest-mid leading-relaxed mb-4">
                {role.description}
              </p>
              <div className="space-y-1.5">
                {role.skills.map((s) => (
                  <div key={s} className="flex items-center gap-2 text-xs text-forest-mid">
                    <CheckCircle size={11} className="text-reserve-green shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming events */}
      <section className="bg-lichen-cream py-16">
        <div className="container-site">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display font-bold text-2xl text-deep-forest">
              Next Volunteer Opportunities
            </h2>
            <Link href="/explore/events" className="text-sm text-reserve-green font-medium hover:underline flex items-center gap-1">
              View all <ArrowRight size={13} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {UPCOMING.map((ev) => (
              <div key={ev.title} className="card-organic bg-white p-6">
                <div className="flex items-center gap-1.5 text-xs text-hummingbird-gold font-medium mb-2">
                  <Calendar size={11} />
                  <span>{ev.date}</span>
                </div>
                <h3 className="font-display font-semibold text-deep-forest text-base mb-3 leading-tight">
                  {ev.title}
                </h3>
                <div className="space-y-1 text-xs text-forest-mid mb-4">
                  <div className="flex items-center gap-1.5">
                    <Clock size={10} />
                    <span>{ev.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={10} />
                    <span>{ev.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users size={10} />
                    <span className="text-reserve-green font-medium">{ev.spots} spots left</span>
                  </div>
                </div>
                <a
                  href={VERISERVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-sm w-full justify-center"
                >
                  RSVP on VeriServe <ExternalLink size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VeriServe sign-up CTA */}
      <section id="sign-up" className="container-site py-16">
        <div className="max-w-2xl mx-auto text-center">
          <Heart size={28} className="text-reserve-green mx-auto mb-3" />
          <h2 className="font-display font-bold text-3xl text-deep-forest mb-3">
            Ready to get started?
          </h2>
          <p className="text-forest-mid mb-8 text-lg leading-relaxed">
            Create your free VeriServe account to browse MiniNature volunteer opportunities,
            log your hours, and build a verified service record.
          </p>

          <div className="card-organic bg-white p-8 text-left mb-6">
            <h3 className="font-display font-semibold text-deep-forest text-lg mb-5 text-center">
              How it works
            </h3>
            <ol className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Create your VeriServe account",
                  desc: "Sign up as a volunteer — free for students and community members.",
                },
                {
                  step: "2",
                  title: "Browse MiniNature events",
                  desc: "Find install days, stewardship sessions, and workshops near you.",
                },
                {
                  step: "3",
                  title: "Log your hours",
                  desc: "Your supervisor signs off digitally — creating a permanent verified record.",
                },
                {
                  step: "4",
                  title: "Share your transcript",
                  desc: "Download or share your verified service record with schools, colleges, or employers anytime.",
                },
              ].map((item) => (
                <li key={item.step} className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-reserve-green text-white text-sm font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {item.step}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-deep-forest">{item.title}</p>
                    <p className="text-xs text-forest-mid mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={VERISERVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-base py-3.5 px-8"
            >
              Create VeriServe Account <ExternalLink size={15} />
            </a>
            <Link href="/contact" className="btn btn-secondary text-base py-3.5 px-8">
              Questions? Contact Us
            </Link>
          </div>

          <p className="text-xs text-forest-mid mt-5">
            Already have an account?{" "}
            <a
              href={VERISERVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-reserve-green hover:underline"
            >
              Sign in to VeriServe →
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
