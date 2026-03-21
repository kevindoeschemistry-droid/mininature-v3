import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with MiniNature Reserve — general inquiries, media requests, school partnerships, and more.",
};

const CONTACT_TOPICS = [
  { value: "general", label: "General Inquiry" },
  { value: "reserve", label: "Starting a Reserve" },
  { value: "volunteer", label: "Volunteering" },
  { value: "school", label: "School Partnership" },
  { value: "corporate", label: "Corporate Partnership" },
  { value: "municipal", label: "Municipal Partnership" },
  { value: "media", label: "Media / Press" },
  { value: "donate", label: "Donation Question" },
  { value: "other", label: "Other" },
];

const QUICK_LINKS = [
  { label: "Make a Reserve", href: "/get-involved/make-a-reserve", emoji: "🌱" },
  { label: "Volunteer Sign-up", href: "/get-involved/volunteer", emoji: "🤝" },
  { label: "School Programs", href: "/get-involved/schools", emoji: "🏫" },
  { label: "Corporate Partnerships", href: "/partner/corporate", emoji: "🌿" },
  { label: "Press & Media", href: "/about/press", emoji: "📰" },
  { label: "Donate", href: "/give/donate", emoji: "💚" },
];

export default function ContactPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-reserve-green text-white py-16">
        <div className="container-site">
          <div className="max-w-xl">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-sage mb-4">Contact</div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Get in Touch
            </h1>
            <p className="text-sage text-lg leading-relaxed">
              Whether you want to start a reserve, volunteer, partner with us, or just say hello —
              we&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <div className="container-site py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="font-display font-bold text-xl text-deep-forest mb-6">Send a Message</h2>
            <div className="card-organic bg-white p-8">
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-deep-forest mb-1.5">
                      First Name <span className="text-california-poppy">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your first name"
                      className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-deep-forest placeholder:text-forest-mid/40 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-deep-forest mb-1.5">
                      Last Name <span className="text-california-poppy">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your last name"
                      className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-deep-forest placeholder:text-forest-mid/40 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-forest mb-1.5">
                    Email <span className="text-california-poppy">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-deep-forest placeholder:text-forest-mid/40 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-forest mb-1.5">Phone (optional)</label>
                  <input
                    type="tel"
                    placeholder="(805) 555-1234"
                    className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-deep-forest placeholder:text-forest-mid/40 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-forest mb-1.5">
                    Topic <span className="text-california-poppy">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-sm bg-white text-deep-forest"
                  >
                    <option value="">Select a topic...</option>
                    {CONTACT_TOPICS.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-deep-forest mb-1.5">
                    Message <span className="text-california-poppy">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-deep-forest placeholder:text-forest-mid/40 text-sm resize-none"
                  />
                </div>

                {/* Subscribe */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="accent-reserve-green mt-1" />
                  <span className="text-sm text-forest-mid">
                    Subscribe me to the MiniNature Field Notes newsletter (monthly, unsubscribe anytime)
                  </span>
                </label>

                <button
                  type="submit"
                  className="btn btn-primary w-full justify-center py-3.5 text-base"
                >
                  Send Message <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact details */}
            <div className="card-organic bg-white border border-lichen-cream p-6">
              <h3 className="font-display font-semibold text-deep-forest text-lg mb-5">
                Contact Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-reserve-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-forest-mid mb-0.5">General & Press</p>
                    <a href="mailto:info@mininature.org" className="text-sm text-deep-forest hover:text-reserve-green">
                      info@mininature.org
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-reserve-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-forest-mid mb-0.5">Phone</p>
                    <a href="tel:+18058168732" className="text-sm text-deep-forest hover:text-reserve-green">
                      (805) 816-8732
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-reserve-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-forest-mid mb-0.5">Location</p>
                    <p className="text-sm text-deep-forest">
                      Oxnard, CA · Ventura County
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-reserve-green shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-forest-mid mb-0.5">Response Time</p>
                    <p className="text-sm text-deep-forest">Within 2 business days</p>
                    <p className="text-xs text-forest-mid">Media: within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="card-organic bg-mint-mist border border-sage/20 p-6">
              <h3 className="font-display font-semibold text-deep-forest text-base mb-3">
                Common Requests
              </h3>
              <div className="space-y-1">
                {QUICK_LINKS.map((ql) => (
                  <Link
                    key={ql.href}
                    href={ql.href}
                    className="flex items-center justify-between text-sm py-2 text-forest-mid hover:text-reserve-green transition-colors group"
                  >
                    <span className="flex items-center gap-2">
                      <span>{ql.emoji}</span>
                      <span>{ql.label}</span>
                    </span>
                    <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="card-organic bg-deep-forest text-white p-6">
              <h3 className="font-display font-semibold text-lg mb-3">Follow Along</h3>
              <p className="text-sage text-xs mb-4">
                Reserve updates, wildlife sightings, and installation photos every week.
              </p>
              <div className="space-y-2">
                {[
                  { label: "Instagram", handle: "@mininaturereserve" },
                  { label: "Facebook", handle: "MiniNature Reserve" },
                  { label: "YouTube", handle: "MiniNature Reserve" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center justify-between text-xs">
                    <span className="text-sage">{s.label}</span>
                    <span className="text-white font-medium">{s.handle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
