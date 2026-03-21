import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, CheckCircle, ArrowRight, ClipboardCheck, UserPlus, Rocket } from "lucide-react";
import SchoolEnrollmentForm from "./SchoolEnrollmentForm";

export const metadata: Metadata = {
  title: "Get Your School on VeriServe",
  description: "Connect your school with VeriServe for verified volunteer hour tracking. Easy administration, digital transcripts, and real impact.",
};

const BENEFITS = [
  { emoji: "✅", title: "Verified Student Hours", description: "Every volunteer session is tracked and verified through VeriServe. No more paper sign-in sheets or honor-system logging." },
  { emoji: "📄", title: "Digital Transcripts", description: "Students get a digital volunteer transcript they can share with colleges, scholarship committees, and employers." },
  { emoji: "⚡", title: "Easy Administration", description: "Teachers and counselors get a simple dashboard to view student hours, approve sessions, and export reports." },
  { emoji: "🌿", title: "Real Environmental Impact", description: "Students contribute to native habitat restoration — meaningful work with measurable ecological outcomes." },
  { emoji: "🎓", title: "Service Learning Ready", description: "VeriServe hours count toward community service requirements, service learning credits, and CAS (IB) portfolios." },
  { emoji: "📊", title: "School-Wide Reporting", description: "Aggregate reports show your school's total environmental impact — great for newsletters, accreditation, and grants." },
];

const STEPS = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Enroll Your School",
    description: "Fill out the form below. We'll set up your school on VeriServe and create administrator accounts for your designated contact.",
  },
  {
    icon: UserPlus,
    step: "02",
    title: "Invite Students",
    description: "Share your school's VeriServe link with students. They create free accounts and can start logging hours immediately.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Start Volunteering",
    description: "Students sign up for reserve workdays, installations, and stewardship sessions. Hours are automatically tracked and verified.",
  },
];

export default function SchoolsVeriservePage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-reserve-green text-white section-pad">
        <div className="container-site">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono-accent uppercase tracking-widest text-sage">
            <Link href="/partner" className="hover:text-white transition-colors">Partnerships</Link>
            <span>/</span>
            <span>Schools &amp; VeriServe</span>
          </div>
          <div className="max-w-2xl">
            <GraduationCap size={32} className="text-hummingbird-gold mb-4" />
            <div className="text-xs font-mono-accent uppercase tracking-widest text-hummingbird-gold mb-4">
              Schools &amp; VeriServe
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Get Your School on<br />
              <em className="text-hummingbird-gold not-italic">VeriServe</em>
            </h1>
            <p className="text-sage text-lg leading-relaxed mb-6">
              VeriServe is our volunteer hour verification platform. Schools enroll for free and
              students get verified, trackable community service hours for real environmental work.
            </p>
            <a href="#enrollment-form" className="btn btn-primary">
              Enroll Your School <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* What Is VeriServe */}
      <section className="container-site py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">What Is VeriServe?</h2>
            <p className="text-forest-mid leading-relaxed mb-4">
              VeriServe is MiniNature Reserve&apos;s volunteer hour verification platform built
              specifically for student community service. It replaces paper forms with a simple
              digital system that tracks, verifies, and reports volunteer hours.
            </p>
            <p className="text-forest-mid leading-relaxed mb-4">
              When students volunteer at reserve installations, maintenance days, or stewardship
              events, their hours are logged in real time by our site leaders. The hours are verified,
              timestamped, and tied to their individual VeriServe profile.
            </p>
            <p className="text-forest-mid leading-relaxed">
              Schools get a free administrator dashboard with full visibility into student
              participation — no more chasing down forms or relying on self-reported hours.
            </p>
          </div>
          <div className="card-organic bg-deep-forest text-white p-8">
            <h3 className="font-display font-semibold text-lg mb-4">📊 By the Numbers</h3>
            <div className="space-y-4">
              {[
                { value: "12", label: "Schools enrolled in Ventura County" },
                { value: "480+", label: "Students with active VeriServe accounts" },
                { value: "3,200+", label: "Verified volunteer hours logged" },
                { value: "100%", label: "Free for schools and students" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                  <span className="text-sm">{stat.label}</span>
                  <span className="font-display font-bold text-hummingbird-gold text-lg">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-lichen-cream py-16">
        <div className="container-site">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-2 text-center">Benefits for Schools</h2>
          <p className="text-forest-mid text-sm mb-10 text-center max-w-lg mx-auto">
            VeriServe makes volunteer tracking easy for everyone — students, teachers, and administrators.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b) => (
              <div key={b.title} className="card-organic bg-white p-6 border border-lichen-cream">
                <span className="text-2xl mb-3 block">{b.emoji}</span>
                <h3 className="font-display font-semibold text-deep-forest text-lg mb-1">{b.title}</h3>
                <p className="text-sm text-forest-mid leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Enroll */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-2 text-center">How to Enroll</h2>
        <p className="text-forest-mid text-sm mb-10 text-center max-w-lg mx-auto">
          Getting your school on VeriServe takes less than 10 minutes. Here&apos;s the process.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((s) => (
            <div key={s.step} className="text-center">
              <div className="bg-mint-mist w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <s.icon size={22} className="text-reserve-green" />
              </div>
              <div className="text-xs font-mono-accent text-sage mb-1">Step {s.step}</div>
              <h3 className="font-display font-semibold text-deep-forest text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-forest-mid leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enrollment Form */}
      <section id="enrollment-form" className="bg-mint-mist py-16">
        <div className="container-site">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-2xl text-deep-forest mb-2 text-center">
              School Enrollment Form
            </h2>
            <p className="text-forest-mid text-sm mb-8 text-center">
              Fill out the form and we&apos;ll get your school set up on VeriServe within one week.
            </p>
            <SchoolEnrollmentForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-site py-16 text-center max-w-xl mx-auto">
        <h2 className="font-display font-bold text-xl text-deep-forest mb-3">
          Questions about VeriServe?
        </h2>
        <p className="text-forest-mid text-sm mb-5">
          We&apos;re happy to do a quick walkthrough with your team. Reach out and we&apos;ll
          schedule a 15-minute demo.
        </p>
        <Link href="/contact" className="btn btn-secondary">
          Contact Us <ArrowRight size={14} />
        </Link>
      </section>
    </div>
  );
}
