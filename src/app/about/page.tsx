import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, Users, BookOpen, BarChart3, Newspaper, ArrowRight, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About MiniNature Reserve",
  description: "Learn about MiniNature Reserve — our mission, team, history, and approach to urban biodiversity restoration.",
};

const SECTIONS = [
  {
    icon: Heart,
    title: "Our Mission",
    description: "Why we exist, what we believe, and the vision driving every reserve we install.",
    href: "/about/mission",
    color: "bg-reserve-green",
  },
  {
    icon: Users,
    title: "Our Team",
    description: "Meet the Reservists, educators, ecologists, and community organizers behind MiniNature.",
    href: "/about/team",
    color: "bg-forest-mid",
  },
  {
    icon: Leaf,
    title: "Our History",
    description: "From a single parkway strip in 2021 to 21 reserves across 3 cities — the story so far.",
    href: "/about/history",
    color: "bg-california-poppy",
  },
  {
    icon: BookOpen,
    title: "Native Plants",
    description: "A guide to the California native species we plant and why each one matters.",
    href: "/about/native-plants",
    color: "bg-sage",
  },
  {
    icon: BarChart3,
    title: "Impact & Data",
    description: "Sq footage restored, species installed, volunteers engaged, and ecological outcomes.",
    href: "/about/impact",
    color: "bg-deep-forest",
  },
  {
    icon: Newspaper,
    title: "Press & Media",
    description: "Press releases, media coverage, expert contacts, and downloadable assets.",
    href: "/about/press",
    color: "bg-hummingbird-gold",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-mint-mist border-b border-lichen-cream py-20">
        <div className="container-site">
          <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-4">About Us</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-deep-forest mb-5 max-w-2xl leading-tight">
            Rooted in Community,<br />
            <em className="not-italic text-reserve-green">Growing in Nature</em>
          </h1>
          <p className="text-forest-mid text-lg max-w-xl leading-relaxed mb-8">
            MiniNature Reserve is a 501(c)(3) nonprofit dedicated to restoring urban biodiversity
            through community-led native habitat installation, indigenous knowledge programs,
            and youth education.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/about/mission" className="btn btn-primary">
              Our Mission
            </Link>
            <Link href="/give/donate" className="btn btn-secondary">
              Support Our Work <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="bg-reserve-green text-white py-12">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "21", label: "Active reserves" },
              { num: "35,000+", label: "Sq ft restored" },
              { num: "3,500+", label: "Native plants installed" },
              { num: "2021", label: "Year founded" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display font-bold text-3xl text-hummingbird-gold mb-1">{s.num}</div>
                <div className="text-sage text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation grid */}
      <section className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SECTIONS.map((section) => (
            <Link key={section.href} href={section.href} className="group block">
              <div className="card-organic bg-white p-8 h-full flex flex-col">
                <div className={`${section.color} w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <section.icon size={20} className="text-white" />
                </div>
                <h2 className="font-display font-semibold text-xl text-deep-forest mb-2 group-hover:text-reserve-green transition-colors">
                  {section.title}
                </h2>
                <p className="text-sm text-forest-mid leading-relaxed flex-1 mb-4">
                  {section.description}
                </p>
                <div className="flex items-center gap-1.5 text-sm font-medium text-reserve-green">
                  Learn More
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-deep-forest text-white py-16">
        <div className="container-site max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-2xl mb-10 text-center">What We Believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { emoji: "🌍", title: "Every patch counts", body: "Biodiversity doesn't require wilderness. A 4-foot parkway strip, done right, can support dozens of species and anchor a neighborhood ecological network." },
              { emoji: "🤝", title: "Community is the method", body: "We don't install reserves for communities — we build them with communities. Indigenous knowledge-keepers, students, and neighbors are our co-designers." },
              { emoji: "🌱", title: "Education over ornament", body: "Each reserve is also a classroom. Plant ID signs, workshop connections, and reserve profiles turn every site into a living learning experience." },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <span className="text-4xl block mb-4">{v.emoji}</span>
                <h3 className="font-display font-semibold text-lg mb-3 text-hummingbird-gold">{v.title}</h3>
                <p className="text-sage text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
