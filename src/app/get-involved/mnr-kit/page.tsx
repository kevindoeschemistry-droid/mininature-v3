import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Package, Check, Sun, Ruler, Leaf, Calendar, MapPin, HelpCircle, ChevronDown } from "lucide-react";
import KitRequestForm from "./KitRequestForm";

export const metadata: Metadata = {
  title: "MNR Kit Giveaway",
  description: "Get a free MNR starter kit with native plants, soil amendment, and planting guide. Everything you need to create a thriving native habitat.",
};

const KIT_ITEMS = [
  {
    icon: "🌱",
    title: "6-12 Native Plants",
    description: "Species hand-selected for your specific microclimate, sun exposure, and soil type. Sourced from local native plant nurseries.",
  },
  {
    icon: "🪴",
    title: "Organic Soil Amendment",
    description: "High-quality compost and mulch blend to give your plants the best start. Enough to prepare your entire planting area.",
  },
  {
    icon: "🌾",
    title: "Biodegradable Weed Barrier",
    description: "Natural jute weed barrier that suppresses weeds during establishment, then breaks down and enriches the soil.",
  },
  {
    icon: "📖",
    title: "Planting Guide with Spacing Diagrams",
    description: "Step-by-step visual guide showing exactly where to place each plant for optimal growth and aesthetic appeal.",
  },
  {
    icon: "🏷️",
    title: "Official MNR Sign with QR Code",
    description: "A weatherproof sign identifying your space as a MiniNature Reserve. The QR code links to your reserve&apos;s profile page.",
  },
  {
    icon: "📅",
    title: "Care Calendar for First Year",
    description: "Month-by-month watering, pruning, and maintenance schedule tailored to Ventura County&apos;s climate cycles.",
  },
];

const QUALIFYING_SPACES = [
  { icon: Sun, label: "Any sunny strip 25-500 sq ft" },
  { icon: MapPin, label: "Parkways & sidewalk strips" },
  { icon: Leaf, label: "Front yards & side yards" },
  { icon: Ruler, label: "Community & shared spaces" },
];

const PROCESS_STEPS = [
  {
    n: "01",
    title: "Apply Online",
    icon: "📋",
    body: "Fill out a quick application with your name, address, and space details. Include a photo if you can. Takes about 5 minutes.",
    detail: "5-minute form",
  },
  {
    n: "02",
    title: "Site Assessment",
    icon: "📍",
    body: "A MiniNature volunteer visits your space (or reviews your photos) to assess sunlight, soil, and select the right plant palette for your location.",
    detail: "Usually within 2 weeks",
  },
  {
    n: "03",
    title: "Kit Delivery & Install Support",
    icon: "📦",
    body: "We deliver your custom kit with everything you need. You can plant it yourself with our guide, or we can coordinate volunteers to help you on install day.",
    detail: "Full support included",
  },
];

const FAQ_ITEMS = [
  {
    question: "How much does the kit cost?",
    answer: "Nothing. MNR Kits are completely free for qualifying spaces in Ventura County. The program is funded through grants, donations, and community partnerships.",
  },
  {
    question: "Do I need gardening experience?",
    answer: "Not at all. The kit comes with a detailed planting guide with spacing diagrams, and we offer install support if you want help. Many of our most successful reserves were planted by first-time gardeners.",
  },
  {
    question: "How long until the plants are established?",
    answer: "Most native plants establish within one growing season (about 6-12 months). During the first year, you will need to water regularly following the care calendar. After that, most species are drought-tolerant and low-maintenance.",
  },
  {
    question: "What if some of the plants die?",
    answer: "It happens! We have a 95% survival rate, but if plants do not make it during the first year, we will replace them at no cost. Just let us know through your reserve profile page.",
  },
  {
    question: "Can I choose which plants I get?",
    answer: "We select plants based on your site conditions (sun, soil, space size) to maximize success. However, we are happy to incorporate your preferences when possible. Let us know your favorites in the application.",
  },
];

export default function MNRKitPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-reserve-green text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 60% 40%, rgba(82,183,136,0.5) 0%, transparent 50%),
                               radial-gradient(circle at 25% 80%, rgba(232,168,56,0.3) 0%, transparent 40%)`,
            }}
          />
        </div>
        <div className="relative container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-xs font-mono-accent uppercase tracking-widest mb-6 border border-white/20">
                <Package size={12} />
                Free Kit Program
              </div>
              <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight mb-6">
                The MNR Kit{" "}
                <span className="text-hummingbird-gold italic">Giveaway.</span>
              </h1>
              <p className="text-sage text-lg md:text-xl leading-relaxed mb-8">
                Everything you need to create a thriving native habitat &mdash; delivered to your door, completely free. Native plants, soil, tools, and ongoing support.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#apply" className="btn btn-primary text-base px-7 py-3.5">
                  Request a Free Kit
                  <ArrowRight size={18} />
                </a>
                <a href="#whats-inside" className="btn btn-outline-white text-base px-7 py-3.5">
                  See What&apos;s Inside
                </a>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-3 gap-4">
              {[
                { value: "200+", label: "Kits Distributed" },
                { value: "95%", label: "Survival Rate" },
                { value: "Free", label: "Forever" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-organic p-5 text-center border border-white/10">
                  <div className="font-display font-bold text-2xl text-hummingbird-gold mb-1">{stat.value}</div>
                  <div className="text-xs text-sage/80 font-mono-accent uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar - mobile only */}
      <section className="lg:hidden bg-deep-forest text-white py-6">
        <div className="container-site">
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { value: "200+", label: "Kits Distributed" },
              { value: "95%", label: "Survival Rate" },
              { value: "Free", label: "Forever" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-bold text-xl text-hummingbird-gold">{stat.value}</div>
                <div className="text-xs text-sage/70 font-mono-accent">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's in the Kit */}
      <section id="whats-inside" className="section-pad">
        <div className="container-site">
          <div className="text-center mb-10">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-2">
              Kit Contents
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-forest mb-3">
              What&apos;s In the Kit
            </h2>
            <p className="text-forest-mid max-w-lg mx-auto">
              Each kit is custom-assembled for your specific site. Here&apos;s what every MNR Kit includes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {KIT_ITEMS.map((item) => (
              <div key={item.title} className="card-organic bg-white p-6 border border-lichen-cream">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-display font-semibold text-lg text-deep-forest mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-forest-mid leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Qualifies */}
      <section className="section-pad bg-lichen-cream">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-3">
                Eligibility
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-forest mb-4">
                Who Qualifies
              </h2>
              <p className="text-forest-mid leading-relaxed mb-6">
                If you have a sunny patch of ground in Ventura County that could use some life, you probably qualify. We keep the bar low because every square foot of native habitat matters.
              </p>
              <div className="space-y-4">
                {QUALIFYING_SPACES.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 bg-white rounded-xl p-4">
                    <div className="p-2 bg-mint-mist rounded-lg">
                      <item.icon size={20} className="text-reserve-green" />
                    </div>
                    <span className="text-sm font-medium text-deep-forest">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-organic-lg p-8 shadow-card">
              <h3 className="font-display font-semibold text-xl text-deep-forest mb-4">
                Quick Eligibility Check
              </h3>
              <div className="space-y-3">
                {[
                  "Space receives 6+ hours of sun per day",
                  "Located in Ventura County, CA",
                  "Between 25 and 500 square feet",
                  "You have permission to plant (owner or renter with approval)",
                  "Willing to provide basic care during first year",
                ].map((req) => (
                  <div key={req} className="flex items-start gap-3">
                    <div className="mt-0.5 p-0.5 bg-adoptable rounded-full">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-sm text-forest-mid">{req}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-mint-mist rounded-xl p-4">
                <p className="text-xs text-forest-mid">
                  Not sure if you qualify? Apply anyway! We review every application individually and work with you to find a solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get One */}
      <section className="section-pad">
        <div className="container-site">
          <div className="text-center mb-10">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-2">
              The Process
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-forest">
              How to Get Your Free Kit
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step) => (
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
                <p className="text-sm text-forest-mid leading-relaxed mb-4">
                  {step.body}
                </p>
                <div className="text-xs bg-mint-mist text-reserve-green px-3 py-1.5 rounded-full inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-adoptable" />
                  {step.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Placeholder */}
      <section className="section-pad bg-mint-mist">
        <div className="container-site">
          <div className="text-center mb-10">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-2">
              In the Field
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-forest mb-3">
              Kit Installs in Action
            </h2>
            <p className="text-forest-mid max-w-lg mx-auto">
              See what MNR Kits look like before, during, and after installation across Ventura County.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400", alt: "Native plants in a parkway reserve" },
              { src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400", alt: "Community members planting together" },
              { src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400", alt: "Blooming California native wildflowers" },
              { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400", alt: "Established native plant garden" },
            ].map((photo) => (
              <div key={photo.alt} className="aspect-square rounded-organic overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="container-site max-w-3xl">
          <div className="text-center mb-10">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-2">
              Common Questions
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-forest">
              Kit FAQ
            </h2>
          </div>
          <div className="space-y-4">
            {FAQ_ITEMS.map((faq) => (
              <details key={faq.question} className="group bg-white rounded-organic shadow-card overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-display font-semibold text-deep-forest pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown size={20} className="text-forest-mid shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-sm text-forest-mid leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="section-pad bg-lichen-cream">
        <div className="container-site max-w-2xl">
          <div className="text-center mb-10">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-3">
              Request a Kit
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-forest mb-3">
              Apply for Your Free MNR Kit
            </h2>
            <p className="text-forest-mid">
              Takes 5 minutes. We&apos;ll review your space and get back to you within a week.
            </p>
          </div>

          <KitRequestForm />
        </div>
      </section>

      {/* Back to Make a Reserve CTA */}
      <section className="section-pad bg-reserve-green text-white">
        <div className="container-site text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-4">
            Not Sure the Kit Is Right for You?
          </h2>
          <p className="text-sage text-sm max-w-xl mx-auto mb-8">
            The MNR Kit is just one of five ways to make a reserve. Explore all your options and find the path that fits your space and style.
          </p>
          <Link href="/get-involved/make-a-reserve#paths" className="btn btn-primary text-base px-7 py-3.5">
            See All Reserve Options
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
