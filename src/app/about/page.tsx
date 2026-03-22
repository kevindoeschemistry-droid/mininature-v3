import type { Metadata } from "next";
import Link from "next/link";
import { Leaf, Users, BarChart3, Newspaper, ArrowRight, Heart, Sprout, Droplets, Bug, ShieldCheck, TreePine } from "lucide-react";

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

const MILESTONES = [
  {
    year: "2023",
    title: "The First Parkway Strip",
    description: "Kevin Kabra plants a single parkway strip with California native species in Oxnard, CA — the very first MiniNature Reserve.",
  },
  {
    year: "2023",
    title: "Community Takes Root",
    description: "Neighbors notice the butterflies and birds. Word spreads. Three more reserves are installed by community volunteers across Oxnard.",
  },
  {
    year: "2024",
    title: "A Movement Grows",
    description: "MiniNature expands across Ventura County. Schools, churches, and businesses begin hosting reserves. Volunteer install days become monthly events.",
  },
  {
    year: "2024",
    title: "501(c)(3) Status",
    description: "MiniNature Reserve incorporates as a nonprofit, formalizing the mission and opening the door to grants, partnerships, and larger-scale restoration.",
  },
  {
    year: "2025",
    title: "21 Reserves and Counting",
    description: "The network reaches 21 active reserves spanning 6 neighborhoods and 3 cities, with expansion underway into neighboring counties.",
  },
];

const KEY_SPECIES = [
  { name: "California Buckwheat", latin: "Eriogonum fasciculatum", benefit: "Premier pollinator plant, supports 50+ butterfly species" },
  { name: "Coast Sunflower", latin: "Encelia californica", benefit: "Year-round blooms for native bees and butterflies" },
  { name: "California Fuchsia", latin: "Epilobium canum", benefit: "Hummingbird magnet with vivid red-orange flowers" },
  { name: "White Sage", latin: "Salvia apiana", benefit: "Culturally significant, supports native pollinators" },
  { name: "Coyote Bush", latin: "Baccharis pilularis", benefit: "Keystone habitat plant, hosts 200+ insect species" },
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
              { num: "2023", label: "Year founded" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SECTIONS.map((section) => (
            <Link key={section.title} href={section.href} className="group block">
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

      {/* Our History */}
      <section id="history" className="bg-lichen-cream py-16">
        <div className="container-site max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-3">
              Where We Started
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-forest mb-4">
              Our History
            </h2>
            <p className="text-forest-mid max-w-xl mx-auto">
              What began as one person planting native species on a parkway strip in Oxnard
              has grown into a movement spanning Ventura County and beyond.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-sage/40 -translate-x-1/2 hidden md:block" />
            <div className="absolute left-6 top-0 bottom-0 w-px bg-sage/40 md:hidden" />

            <div className="space-y-8">
              {MILESTONES.map((milestone, idx) => (
                <div
                  key={idx}
                  className={`relative flex items-start gap-6 md:gap-10 ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Year badge */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-reserve-green items-center justify-center z-10 shadow-md">
                    <span className="text-white font-mono-accent text-xs font-bold">{milestone.year}</span>
                  </div>

                  {/* Mobile year badge */}
                  <div className="flex md:hidden w-12 h-12 rounded-full bg-reserve-green items-center justify-center z-10 shadow-md shrink-0">
                    <span className="text-white font-mono-accent text-[10px] font-bold">{milestone.year}</span>
                  </div>

                  {/* Content card */}
                  <div className={`flex-1 md:w-[calc(50%-3.5rem)] ${idx % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}>
                    <div className="bg-white rounded-organic p-6 shadow-card">
                      <h3 className="font-display font-semibold text-lg text-deep-forest mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-forest-mid leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1 md:w-[calc(50%-3.5rem)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Native Plants? */}
      <section id="native-plants" className="bg-fog-white py-16">
        <div className="container-site">
          <div className="text-center mb-12">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-3">
              The Science
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-forest mb-4">
              Why Native Plants?
            </h2>
            <p className="text-forest-mid max-w-2xl mx-auto">
              California native plants evolved alongside local wildlife over thousands of years,
              forming the ecological backbone of our region. Restoring them is the single most
              impactful thing we can do for urban biodiversity.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {[
              {
                icon: Bug,
                title: "10-50x More Wildlife",
                description: "Native plants support 10 to 50 times more pollinator and wildlife species than non-native ornamentals.",
              },
              {
                icon: Droplets,
                title: "Far Less Water",
                description: "Once established, natives thrive on rainfall alone — saving thousands of gallons compared to traditional landscaping.",
              },
              {
                icon: ShieldCheck,
                title: "Zero Chemicals",
                description: "No pesticides, herbicides, or synthetic fertilizers needed. Natives are adapted to local soils and resist local pests naturally.",
              },
              {
                icon: TreePine,
                title: "Deep Ecosystem Roots",
                description: "Every native plant is a node in a web of relationships — feeding insects, birds, and mammals that depend on them to survive.",
              },
            ].map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-organic p-6 shadow-card">
                <div className="w-10 h-10 rounded-lg bg-mint-mist flex items-center justify-center mb-4">
                  <benefit.icon size={20} className="text-reserve-green" />
                </div>
                <h3 className="font-display font-semibold text-deep-forest mb-2">{benefit.title}</h3>
                <p className="text-sm text-forest-mid leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Key species */}
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display font-semibold text-xl text-deep-forest mb-6 text-center">
              Key Species We Plant
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {KEY_SPECIES.map((species) => (
                <div key={species.name} className="flex items-start gap-3 bg-mint-mist rounded-organic p-4">
                  <Sprout size={18} className="text-reserve-green shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-deep-forest text-sm">{species.name}</div>
                    <div className="text-xs text-forest-mid italic mb-1">{species.latin}</div>
                    <div className="text-xs text-forest-mid">{species.benefit}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chumash stewardship */}
          <div className="max-w-3xl mx-auto mt-12 bg-deep-forest text-white rounded-organic-lg p-8 md:p-10">
            <div className="flex items-start gap-4">
              <Leaf size={28} className="text-hummingbird-gold shrink-0 mt-1" />
              <div>
                <h3 className="font-display font-semibold text-lg text-hummingbird-gold mb-3">
                  A Tradition of Land Stewardship
                </h3>
                <p className="text-sage text-sm leading-relaxed">
                  Long before modern conservation, the Chumash people of California&apos;s central
                  and southern coast cultivated and managed native plant communities through
                  intentional burning, seed gathering, and seasonal harvesting practices.
                  Their deep knowledge of native species sustained biodiversity across the region
                  for thousands of years. MiniNature Reserve honors this tradition by centering
                  indigenous knowledge in our restoration work and partnering with tribal
                  communities to carry these practices forward.
                </p>
              </div>
            </div>
          </div>
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
