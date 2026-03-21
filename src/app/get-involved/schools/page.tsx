import type { Metadata } from "next";
import Link from "next/link";
import { School, Leaf, Users, BookOpen, CheckCircle, ArrowRight, Star } from "lucide-react";
import SchoolForm from "./SchoolForm";

export const metadata: Metadata = {
  title: "School Programs",
  description: "Bring a MiniNature Reserve to your school campus. Curriculum-connected, free to schools, and student-led.",
};

const PROGRAMS = [
  {
    emoji: "🏫",
    title: "Campus Reserve Installation",
    grade: "K–12",
    duration: "One school year",
    description: "Students design and install a real native plant habitat on school grounds. The project integrates science, math, art, and social studies standards.",
    features: ["Standards-aligned curriculum", "Free plants & materials", "Professional installation support", "Ongoing stewardship curriculum"],
    color: "bg-mint-mist",
  },
  {
    emoji: "🌱",
    title: "Junior Reservist Program",
    grade: "Grades 4–8",
    duration: "8-week curriculum",
    description: "An 8-week classroom program that teaches native plant ecology, habitat design, and citizen science — culminating in a reserve planting day.",
    features: ["8 lesson plans provided", "Lab-style activities", "Field journal notebooks", "Plant ID certification"],
    color: "bg-lichen-cream",
  },
  {
    emoji: "🦋",
    title: "Pollinator Science Project",
    grade: "Grades 6–12",
    duration: "Semester project",
    description: "Students monitor pollinator populations at a school reserve using real scientific protocols, contribute data to a regional database, and present findings.",
    features: ["NGSS-aligned inquiry project", "Real data contribution", "Access to monitoring tools", "Science fair support"],
    color: "bg-mint-mist",
  },
  {
    emoji: "🌿",
    title: "Indigenous Plant Knowledge Unit",
    grade: "Grades 5–12",
    duration: "3–5 class sessions",
    description: "A Chumash knowledge-keeper co-teaches alongside classroom teachers, sharing the cultural, medicinal, and ecological significance of native California plants.",
    features: ["Co-taught with Chumash educator", "Student plant journals", "Native plant tasting (edible species)", "Cultural context materials"],
    color: "bg-lichen-cream",
  },
];

const PARTICIPATING_SCHOOLS = [
  { name: "Colonia Middle School", type: "Middle School", city: "Oxnard", reserves: 1, students: 180 },
  { name: "Fremont Elementary", type: "Elementary", city: "Oxnard", reserves: 1, students: 95 },
  { name: "Hueneme High School", type: "High School", city: "Port Hueneme", reserves: 0, students: 240, upcoming: true },
];

export default function SchoolsPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-reserve-green text-white section-pad">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <School size={16} className="text-sage" />
                <span className="text-xs font-mono-accent uppercase tracking-widest text-sage">
                  School Programs
                </span>
              </div>
              <h1 className="font-display font-bold text-4xl md:text-5xl mb-5 leading-tight">
                Nature Starts<br />
                in the Classroom
              </h1>
              <p className="text-sage text-lg leading-relaxed mb-8">
                Free curriculum, free plants, and expert support to help your school build a
                living outdoor classroom that teaches ecology, science, and community care.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#apply" className="btn btn-primary">
                  Apply for Your School
                </a>
                <Link href="/explore/reserves" className="btn btn-outline-white">
                  See School Reserves
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "3", label: "Partner schools" },
                { num: "515+", label: "Students reached" },
                { num: "100%", label: "Free to schools" },
                { num: "8", label: "Lesson plans included" },
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

      {/* Programs */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-2">Programs</h2>
        <p className="text-forest-mid mb-8 max-w-xl">
          Choose the program that best fits your grade level, curriculum goals, and available space.
          All programs are free and include materials support.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROGRAMS.map((prog) => (
            <div key={prog.title} className={`card-organic ${prog.color} p-7`}>
              <div className="text-3xl mb-3">{prog.emoji}</div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="reserve-type-badge bg-reserve-green/10 text-reserve-green">
                  {prog.grade}
                </span>
                <span className="reserve-type-badge bg-white text-forest-mid border border-lichen-cream">
                  {prog.duration}
                </span>
              </div>
              <h3 className="font-display font-semibold text-deep-forest text-xl mb-2">
                {prog.title}
              </h3>
              <p className="text-sm text-forest-mid leading-relaxed mb-4">
                {prog.description}
              </p>
              <div className="space-y-2">
                {prog.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-xs text-forest-mid">
                    <CheckCircle size={12} className="text-reserve-green shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Participating schools */}
      <section className="bg-lichen-cream py-16">
        <div className="container-site">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-6">
            Partner Schools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PARTICIPATING_SCHOOLS.map((school) => (
              <div key={school.name} className="card-organic bg-white p-6">
                <div className="flex items-start justify-between mb-3">
                  <School size={20} className="text-reserve-green" />
                  {school.upcoming && (
                    <span className="reserve-type-badge bg-hummingbird-gold/15 text-deep-forest">
                      Coming Soon
                    </span>
                  )}
                  {!school.upcoming && school.reserves > 0 && (
                    <span className="reserve-type-badge bg-adoptable/10 text-reserve-green">
                      Active Reserve
                    </span>
                  )}
                </div>
                <h3 className="font-display font-semibold text-deep-forest text-base mb-1">
                  {school.name}
                </h3>
                <div className="text-xs text-forest-mid mb-3">
                  {school.type} · {school.city}
                </div>
                <div className="flex items-center gap-4 text-xs text-forest-mid">
                  <div className="flex items-center gap-1">
                    <Users size={11} />
                    <span>{school.students} students reached</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher testimonial */}
      <section className="bg-deep-forest text-white py-16">
        <div className="container-site max-w-3xl mx-auto text-center">
          <Star size={20} className="text-hummingbird-gold mx-auto mb-5" />
          <blockquote className="font-display text-2xl italic font-semibold leading-relaxed mb-5 text-white">
            &ldquo;Watching our students design and plant their own reserve was one of the most powerful
            teaching moments I&apos;ve had in 12 years of teaching.&rdquo;
          </blockquote>
          <div className="text-sage text-sm">
            Partner Teacher · 6th Grade Science, Colonia Middle School
          </div>
        </div>
      </section>

      {/* Application */}
      <section id="apply" className="container-site py-16">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <Leaf size={28} className="text-reserve-green mx-auto mb-3" />
            <h2 className="font-display font-bold text-3xl text-deep-forest mb-3">
              Apply for Your School
            </h2>
            <p className="text-forest-mid text-sm">
              Applications are reviewed on a rolling basis. We prioritize Title I schools and under-resourced districts.
            </p>
          </div>
          <SchoolForm />
          <p className="text-center text-xs text-forest-mid mt-4">
            Questions? Email{" "}
            <a href="mailto:info@mininature.org" className="text-reserve-green underline">
              info@mininature.org
            </a>
          </p>
        </div>
      </section>

      {/* Bottom links */}
      <section className="bg-mint-mist py-12">
        <div className="container-site">
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="text-center">
              <BookOpen size={20} className="text-reserve-green mx-auto mb-2" />
              <p className="text-sm font-medium text-deep-forest mb-1">Educator Resources</p>
              <p className="text-xs text-forest-mid mb-2">Lesson plans, worksheets, and field guides</p>
              <Link href="/contact" className="btn btn-secondary text-sm">
                Request Curriculum <ArrowRight size={13} />
              </Link>
            </div>
            <div className="hidden md:block w-px h-16 bg-lichen-cream" />
            <div className="text-center">
              <Users size={20} className="text-reserve-green mx-auto mb-2" />
              <p className="text-sm font-medium text-deep-forest mb-1">Volunteer at a School Reserve</p>
              <p className="text-xs text-forest-mid mb-2">Help students maintain their habitat</p>
              <Link href="/get-involved/volunteer" className="btn btn-secondary text-sm">
                Volunteer <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
