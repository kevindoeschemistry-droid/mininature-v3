import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, TreePine, Users, MapPin, BookOpen, Package, QrCode, Heart, Sprout } from "lucide-react";

export const metadata: Metadata = {
  title: "Make a Reserve",
  description: "Turn any space into native habitat. We provide the plants, training, and support. 21 reserves and counting across Ventura County.",
};

const SPACE_TYPES = [
  { emoji: "🛤️", label: "Parkway / sidewalk strip" },
  { emoji: "🏡", label: "Front yard" },
  { emoji: "🌿", label: "Side yard" },
  { emoji: "🏫", label: "Schoolyard" },
  { emoji: "🏙️", label: "Median strip" },
  { emoji: "🌱", label: "Community garden" },
  { emoji: "🏢", label: "Corporate campus" },
  { emoji: "🏞️", label: "Park border" },
];

const RESERVE_PATHS = [
  {
    icon: Package,
    title: "MNR Kit",
    badge: "Most Popular",
    badgeColor: "bg-hummingbird-gold text-reserve-green",
    description: "Request a free installation kit with native plants, soil amendment, and planting guide. Perfect for parkways and small front yards.",
    requirements: "25-500 sq ft · Sunny location · You provide the labor",
    cta: "Get a Free Kit",
    href: "/get-involved/mnr-kit",
  },
  {
    icon: Users,
    title: "Community Install Day",
    badge: "Volunteer-powered",
    badgeColor: "bg-mint-mist text-forest-mid",
    description: "Schedule a full community installation event. MiniNature coordinates volunteers, brings all materials, and transforms your space in a single day.",
    requirements: "Any size · We bring everything · Great for larger spaces",
    cta: "Schedule an Install",
    href: "#apply",
  },
  {
    icon: TreePine,
    title: "DIY / Guerrilla",
    badge: "Self-guided",
    badgeColor: "bg-lichen-cream text-deep-forest",
    description: "Plant on your own using our native plant guide, then register your garden to appear on the map and join the network.",
    requirements: "Any size · Use our plant guide · Register when ready",
    cta: "Download the Guide",
    href: "#apply",
  },
  {
    icon: Heart,
    title: "Honorary MNR",
    badge: "Existing gardens",
    badgeColor: "bg-sage/20 text-reserve-green",
    description: "Already have a native plant garden? Register it as an Honorary MiniNature Reserve and join the network with an official sign.",
    requirements: "50%+ native plants · Any size · Already established",
    cta: "Register Your Garden",
    href: "#apply",
  },
  {
    icon: BookOpen,
    title: "School Reserve",
    badge: "Educational",
    badgeColor: "bg-california-poppy/15 text-deep-forest",
    description: "Create a school campus reserve with curriculum support, biodiversity tracking tools, and a dedicated student volunteer program.",
    requirements: "Campus space · Teacher sponsor · School enrollment",
    cta: "Start a School Reserve",
    href: "/get-involved/schools",
  },
];

const WHAT_WE_PROVIDE = [
  { icon: "🌱", label: "Native plant selection & sourcing" },
  { icon: "📦", label: "Free MNR Kit (qualifying spaces)" },
  { icon: "👥", label: "Volunteer install day coordination" },
  { icon: "🏷️", label: "Official MNR sign with QR code" },
  { icon: "🗺️", label: "Map listing + reserve profile page" },
  { icon: "📚", label: "Ongoing stewardship resources" },
  { icon: "🤝", label: "Community connections & support" },
  { icon: "📊", label: "Biodiversity tracking tools (optional)" },
];

export default function MakeAReservePage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-reserve-green text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 70% 50%, rgba(82,183,136,0.5) 0%, transparent 50%),
                               radial-gradient(circle at 30% 70%, rgba(232,168,56,0.3) 0%, transparent 40%)`,
            }}
          />
        </div>
        <div className="relative container-site">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-xs font-mono-accent uppercase tracking-widest mb-6 border border-white/20">
              <Sprout size={12} />
              Make a Reserve
            </div>
            <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight mb-6">
              Make Your Own{" "}
              <span className="text-hummingbird-gold italic">MiniNature Reserve.</span>
            </h1>
            <p className="text-sage text-lg md:text-xl leading-relaxed mb-8">
              21 reserves. 35,000+ sq ft restored. Every new reserve strengthens Ventura County&apos;s urban habitat network. Yours could be next.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#apply" className="btn btn-primary text-base px-7 py-3.5">
                Make My Reserve
                <ArrowRight size={18} />
              </a>
              <a href="#paths" className="btn btn-outline-white text-base px-7 py-3.5">
                Explore Options
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <div className="font-display font-bold text-2xl text-hummingbird-gold">21</div>
                <div className="text-xs text-sage/80 font-mono-accent">Active Reserves</div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl text-hummingbird-gold">35k+</div>
                <div className="text-xs text-sage/80 font-mono-accent">Sq Ft Restored</div>
              </div>
              <div>
                <div className="font-display font-bold text-2xl text-hummingbird-gold">200+</div>
                <div className="text-xs text-sage/80 font-mono-accent">Kits Given</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What counts as a space */}
      <section className="section-pad">
        <div className="container-site">
          <div className="text-center mb-10">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-2">
              Any Space Works
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-forest mb-3">
              Where Can You Make a Reserve?
            </h2>
            <p className="text-forest-mid max-w-lg mx-auto">
              If you can plant in it, you can restore it. Minimum: 25 sq ft. Maximum: the more, the better.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {SPACE_TYPES.map((space) => (
              <div
                key={space.label}
                className="bg-white rounded-organic p-5 text-center shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="text-3xl mb-2">{space.emoji}</div>
                <div className="text-sm font-medium text-deep-forest">{space.label}</div>
              </div>
            ))}
          </div>
          <div className="bg-mint-mist rounded-organic-lg p-8 text-center">
            <p className="font-display text-xl text-reserve-green italic">
              &ldquo;If you can plant, you can restore.&rdquo;
            </p>
            <p className="text-sm text-forest-mid mt-2">No prior gardening experience required. We&apos;ll walk you through every step.</p>
          </div>
        </div>
      </section>

      {/* 3-step process */}
      <section className="section-pad bg-lichen-cream">
        <div className="container-site">
          <div className="text-center mb-10">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-2">
              The Process
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-forest">
              Three Steps to Make a Reserve
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                title: "Find Your Space",
                icon: "📍",
                body: "Identify a sunny patch of ground &mdash; your parkway, front yard, side yard, or any underused space. As small as 25 sq ft works. Tell us about it in a quick application.",
                detail: "5-minute application",
              },
              {
                n: "02",
                title: "Install",
                icon: "🌿",
                body: "Choose your path: Free MNR Kit you plant yourself, a Community Install Day with volunteers, or go DIY with our plant guide. We provide native plants and materials.",
                detail: "We provide plants & tools",
              },
              {
                n: "03",
                title: "Join the Network",
                icon: "🗺️",
                body: "Your reserve gets an official QR-code sign, a permanent profile on our map, and connection to a community of stewards across Ventura County.",
                detail: "Permanent map listing & sign",
              },
            ].map((step) => (
              <div key={step.n} className="bg-white rounded-organic p-8 shadow-card">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{step.icon}</div>
                  <div className="font-mono-accent text-xs text-reserve-green uppercase tracking-widest">
                    Step {step.n}
                  </div>
                </div>
                <h3 className="font-display font-semibold text-xl text-deep-forest mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-forest-mid leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: step.body }} />
                <div className="text-xs bg-mint-mist text-reserve-green px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-adoptable" />
                  {step.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What MiniNature provides */}
      <section className="section-pad">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-3">
                Full Support
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-forest mb-4">
                What MiniNature Provides
              </h2>
              <p className="text-forest-mid leading-relaxed mb-6">
                You don&apos;t have to do this alone. MiniNature provides the full ecosystem of support to make your reserve a success and keep it thriving for years.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {WHAT_WE_PROVIDE.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm text-forest-mid">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400"
                alt="Native plants thriving in an urban reserve"
                className="rounded-organic aspect-square object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400"
                alt="Community volunteers planting together"
                className="rounded-organic aspect-square object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reserve paths */}
      <section id="paths" className="section-pad bg-mint-mist">
        <div className="container-site">
          <div className="text-center mb-10">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-2">
              Choose Your Path
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-forest">
              Five Ways to Make a Reserve
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {RESERVE_PATHS.map((path, i) => (
              <div
                key={path.title}
                className={`bg-white rounded-organic p-7 shadow-card flex flex-col ${i === 0 ? "border-2 border-reserve-green" : ""}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 bg-lichen-cream rounded-xl">
                    <path.icon size={20} className="text-reserve-green" />
                  </div>
                  <span className={`reserve-type-badge ${path.badgeColor}`}>{path.badge}</span>
                </div>
                <h3 className="font-display font-semibold text-lg text-deep-forest mb-2">
                  {path.title}
                </h3>
                <p className="text-sm text-forest-mid leading-relaxed mb-3 flex-1">
                  {path.description}
                </p>
                <div className="text-xs text-forest-mid/70 bg-fog-white rounded-lg px-3 py-2 mb-5 font-mono-accent">
                  {path.requirements}
                </div>
                <Link href={path.href} className="btn btn-outline text-sm justify-center">
                  {path.cta}
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Movement counter */}
      <section className="section-pad bg-reserve-green text-white">
        <div className="container-site text-center">
          <div className="text-xs font-mono-accent uppercase tracking-widest text-sage mb-4">
            The Movement
          </div>
          <h2 className="font-display font-bold text-3xl text-white mb-6">
            Every Reserve Strengthens the Network
          </h2>
          <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between text-sm text-sage mb-2">
              <span>21 active reserves</span>
              <span>Goal: 50 by end of 2025</span>
            </div>
            <div className="h-3 bg-forest-mid rounded-full overflow-hidden">
              <div
                className="h-full bg-hummingbird-gold rounded-full"
                style={{ width: "42%" }}
              />
            </div>
            <div className="mt-2 text-xs text-sage">42% of goal reached</div>
          </div>
          <p className="text-sage text-sm max-w-xl mx-auto mb-8">
            Every reserve you make adds a node to an urban biodiversity network that grows more resilient, more visible, and more powerful with each addition.
          </p>
          <a href="#apply" className="btn btn-primary text-base px-7 py-3.5">
            Make a Reserve Now
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="section-pad">
        <div className="container-site max-w-2xl">
          <div className="text-center mb-10">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-3">
              Apply Now
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-forest mb-3">
              Make Your Reserve
            </h2>
            <p className="text-forest-mid">
              Takes 5 minutes. We&apos;ll review and respond within 3&ndash;5 business days.
            </p>
          </div>

          <form className="bg-white rounded-organic-lg p-8 shadow-card space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-deep-forest mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="(optional)"
                className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-deep-forest mb-1.5">
                Space Address / Location *
              </label>
              <input
                type="text"
                placeholder="Street address or cross streets"
                className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1.5">
                  Approximate Size (sq ft)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 150"
                  className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1.5">
                  Space Type
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm bg-white">
                  <option value="">Select type...</option>
                  <option>Front yard / parkway</option>
                  <option>Backyard / side yard</option>
                  <option>School campus</option>
                  <option>Community / public space</option>
                  <option>Corporate / institutional</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-deep-forest mb-1.5">
                Reserve Path Preference
              </label>
              <select className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm bg-white">
                <option value="">Select path...</option>
                <option>MNR Kit (free kit, I&apos;ll plant it myself)</option>
                <option>Community Install Day (volunteers install it)</option>
                <option>DIY / Guerrilla (using your plant guide)</option>
                <option>School Reserve</option>
                <option>Honorary MNR (existing native garden)</option>
                <option>Not sure yet</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-deep-forest mb-1.5">
                Anything else you&apos;d like to share?
              </label>
              <textarea
                rows={3}
                placeholder="Tell us about your space, your goals, or what excites you about making a reserve..."
                className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm resize-none"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="commit"
                className="mt-1 accent-reserve-green"
              />
              <label htmlFor="commit" className="text-xs text-forest-mid leading-relaxed">
                I commit to providing basic stewardship for my reserve (watering during establishment, keeping it reasonably tidy) and understand this is a long-term habitat for pollinators and wildlife.
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full justify-center text-base py-4"
            >
              Submit My Application
              <ArrowRight size={18} />
            </button>

            <p className="text-xs text-center text-forest-mid">
              We&apos;ll review your application and respond within 3&ndash;5 business days.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
