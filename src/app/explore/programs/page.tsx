import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight, TreePine, Users, Sprout, Flower2, GraduationCap, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Programs",
  description: "Explore MiniNature Reserve programs — from Reservist Training to School Reserves, Indigenous Plant Knowledge, and the Pollinator Pathway Initiative.",
};

const PROGRAMS = [
  {
    emoji: "🏕️",
    icon: TreePine,
    color: "bg-reserve-green",
    title: "Reserve Creator Program",
    description:
      "Our flagship program walks you through every step of creating a native plant reserve — from site assessment and plant selection to installation day and long-term stewardship. Includes a free MNR Kit.",
    audience: "Homeowners, renters with landlord permission, community groups",
    href: "/get-involved/make-a-reserve",
    cta: "Start Your Reserve",
  },
  {
    emoji: "🎓",
    icon: GraduationCap,
    color: "bg-forest-mid",
    title: "Reservist Training",
    description:
      "A self-paced certification course covering native plant ID, ecological design, soil biology, irrigation best practices, and community engagement. Graduates become official MiniNature Reservists.",
    audience: "Aspiring Reservists, volunteers, educators, landscapers",
    href: "/get-involved/training",
    cta: "Enroll in Training",
  },
  {
    emoji: "🏫",
    icon: Users,
    color: "bg-california-poppy",
    title: "School Reserves",
    description:
      "Bring living classrooms to K-12 campuses. We provide curriculum-aligned lesson plans, installation support, biodiversity tracking tools, and student volunteer coordination through ViviServe.",
    audience: "Teachers, administrators, school garden coordinators",
    href: "/partner/schools-veriserve",
    cta: "Bring to Your School",
  },
  {
    emoji: "🪶",
    icon: Globe,
    color: "bg-hummingbird-gold",
    title: "Indigenous Plant Knowledge",
    description:
      "Developed in partnership with Chumash knowledge-keepers, this program offers workshops on traditional ecological practices, native plant uses, and indigenous land stewardship. Open to all.",
    audience: "Community members, students, educators, land stewards",
    href: "/explore/programs",
    cta: "Explore Workshops",
  },
  {
    emoji: "🌱",
    icon: Sprout,
    color: "bg-sage",
    title: "Community Nursery Network",
    description:
      "A network of backyard and community nurseries growing California native plants from locally-sourced seed. Members learn propagation techniques and supply plants for new reserves at no cost.",
    audience: "Gardeners, propagation enthusiasts, reserve creators",
    href: "/explore/nurseries",
    cta: "Join the Network",
  },
  {
    emoji: "🦋",
    icon: Flower2,
    color: "bg-deep-forest",
    title: "Pollinator Pathway Initiative",
    description:
      "Connecting reserves into continuous corridors of habitat for bees, butterflies, and hummingbirds. We map gaps, coordinate plantings, and track pollinator activity across neighborhoods.",
    audience: "Neighborhoods, HOAs, city planners, ecological researchers",
    href: "/get-involved/make-a-reserve",
    cta: "Map Your Corridor",
  },
];

const STATS = [
  { num: "6", label: "Active programs" },
  { num: "420+", label: "Program participants" },
  { num: "21", label: "Reserves created through programs" },
];

export default function ProgramsPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-reserve-green text-white py-20">
        <div className="container-site">
          <div className="flex items-center gap-2 text-xs font-mono-accent uppercase tracking-widest text-sage mb-4">
            <BookOpen size={14} />
            Our Programs
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-5 max-w-2xl leading-tight">
            Programs That Grow Reserves &amp; Reservists
          </h1>
          <p className="text-sage text-lg max-w-xl leading-relaxed">
            From hands-on training to school partnerships and indigenous knowledge workshops —
            every program is designed to put more native plants in the ground and more people in
            the movement.
          </p>
        </div>
      </section>

      {/* Programs grid */}
      <section className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROGRAMS.map((program) => (
            <Link key={program.title} href={program.href} className="group block">
              <div className="card-organic bg-white p-6 border border-lichen-cream h-full flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-3xl">{program.emoji}</span>
                  <div
                    className={`${program.color} w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <program.icon size={18} className="text-white" />
                  </div>
                </div>
                <h2 className="font-display font-semibold text-xl text-deep-forest mb-2 group-hover:text-reserve-green transition-colors">
                  {program.title}
                </h2>
                <p className="text-sm text-forest-mid leading-relaxed flex-1 mb-3">
                  {program.description}
                </p>
                <p className="text-xs text-sage bg-mint-mist rounded-full px-3 py-1.5 inline-block mb-4 self-start">
                  👤 {program.audience}
                </p>
                <div className="flex items-center gap-1.5 text-sm font-medium text-reserve-green mt-auto">
                  {program.cta}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Impact stats */}
      <section className="bg-reserve-green text-white py-12">
        <div className="container-site">
          <h2 className="font-display font-bold text-2xl text-center mb-8">Impact So Far</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display font-bold text-4xl text-hummingbird-gold mb-1">
                  {s.num}
                </div>
                <div className="text-sage text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-site py-16">
        <div className="bg-mint-mist rounded-organic-lg p-10 text-center">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-3">
            Ready to Get Involved?
          </h2>
          <p className="text-forest-mid mb-6 max-w-md mx-auto text-sm leading-relaxed">
            Whether you want to create a reserve, earn your Reservist certification, or bring native
            habitat to a school — there is a program for you.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/get-involved" className="btn btn-primary">
              <Users size={16} />
              Get Involved
            </Link>
            <Link href="/explore" className="btn btn-secondary">
              Back to Explore
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
