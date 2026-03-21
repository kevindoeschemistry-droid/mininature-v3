import type { Metadata } from "next";
import Link from "next/link";
import { Award, CheckCircle, ArrowRight, MapPin, Users, BookOpen, Signpost } from "lucide-react";

export const metadata: Metadata = {
  title: "Apply for Honorary MNR Status",
  description: "Get your existing native garden recognized as an Honorary MiniNature Reserve. Join the network and appear on our map.",
};

const REQUIREMENTS = [
  { icon: "🌿", title: "50%+ California Natives", description: "At least half the plants in your garden must be species native to California — ideally Ventura County natives." },
  { icon: "📐", title: "Minimum 25 sq ft", description: "Your native garden area should be at least 25 square feet. Container gardens and balcony setups can qualify if densely planted." },
  { icon: "📅", title: "Established 6+ Months", description: "The garden should have been in place for at least six months to demonstrate viability and establishment." },
  { icon: "📍", title: "Willing to Be on the Map", description: "Honorary MNRs appear on our public reserve map. Your general neighborhood is shown, not your exact address." },
];

const BENEFITS = [
  { icon: Signpost, title: "Official MNR Sign", description: "Receive a beautiful weatherproof sign identifying your garden as an Honorary MiniNature Reserve." },
  { icon: MapPin, title: "Map Listing", description: "Your reserve appears on the MiniNature Reserve map, joining a growing network of urban habitats." },
  { icon: Users, title: "Community Network", description: "Connect with other reserve stewards for plant swaps, advice, and seasonal events." },
  { icon: BookOpen, title: "Stewardship Resources", description: "Access our plant care guides, native species database, and seasonal maintenance calendars." },
];

export default function HonoraryStatusPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-deep-forest text-white section-pad">
        <div className="container-site">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono-accent uppercase tracking-widest text-sage">
            <Link href="/partner" className="hover:text-white transition-colors">Partnerships</Link>
            <span>/</span>
            <span>Honorary Status</span>
          </div>
          <div className="max-w-2xl">
            <Award size={32} className="text-hummingbird-gold mb-4" />
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Apply for Honorary<br />
              <em className="text-hummingbird-gold not-italic">MNR Status</em>
            </h1>
            <p className="text-sage text-lg leading-relaxed mb-6">
              Already growing California natives? Get your garden recognized as an Honorary
              MiniNature Reserve and join our network of urban habitat stewards.
            </p>
            <a href="#application-form" className="btn btn-primary">
              Apply Now <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* What Is It */}
      <section className="container-site py-16">
        <div className="max-w-3xl">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">What Is Honorary MNR Status?</h2>
          <p className="text-forest-mid leading-relaxed mb-4">
            Honorary MNR Status is our way of recognizing existing native plant gardens that are
            already doing the work of urban habitat restoration. Whether you planted a pollinator
            strip along your fence line or converted your whole yard to native species, your garden
            is part of the solution.
          </p>
          <p className="text-forest-mid leading-relaxed">
            By joining the Honorary program, your garden becomes an official node in our growing
            network of reserves — visible on our map, connected to other stewards, and supported
            with resources to help your habitat thrive.
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-lichen-cream py-16">
        <div className="container-site">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-2 text-center">Requirements</h2>
          <p className="text-forest-mid text-sm mb-10 text-center max-w-lg mx-auto">
            To qualify for Honorary MNR Status, your garden should meet these four criteria.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {REQUIREMENTS.map((r) => (
              <div key={r.title} className="card-organic bg-white p-6 border border-lichen-cream">
                <span className="text-2xl mb-3 block">{r.icon}</span>
                <h3 className="font-display font-semibold text-deep-forest text-lg mb-1">{r.title}</h3>
                <p className="text-sm text-forest-mid leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-2 text-center">Benefits</h2>
        <p className="text-forest-mid text-sm mb-10 text-center max-w-lg mx-auto">
          Here&apos;s what you get as an Honorary MNR steward.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((b) => (
            <div key={b.title} className="text-center">
              <div className="bg-mint-mist w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <b.icon size={22} className="text-reserve-green" />
              </div>
              <h3 className="font-display font-semibold text-deep-forest mb-2">{b.title}</h3>
              <p className="text-xs text-forest-mid leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="bg-mint-mist py-16">
        <div className="container-site">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display font-bold text-2xl text-deep-forest mb-2 text-center">
              Apply for Honorary Status
            </h2>
            <p className="text-forest-mid text-sm mb-8 text-center">
              Tell us about your native garden. We&apos;ll review your application and follow up
              within two weeks.
            </p>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-deep-forest mb-1">Your Name *</label>
                  <input type="text" required placeholder="Full name"
                    className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-deep-forest mb-1">Email *</label>
                  <input type="email" required placeholder="you@example.com"
                    className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1">Garden Address *</label>
                <input type="text" required placeholder="Street address, City, CA ZIP"
                  className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-deep-forest mb-1">Garden Size (sq ft) *</label>
                  <input type="number" required min={25} placeholder="e.g. 150"
                    className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-deep-forest mb-1">Native Plant % *</label>
                  <select required
                    className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest focus:outline-none focus:ring-2 focus:ring-reserve-green">
                    <option value="">Select range</option>
                    <option value="50-60">50–60%</option>
                    <option value="60-75">60–75%</option>
                    <option value="75-90">75–90%</option>
                    <option value="90-100">90–100%</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1">Photos of Your Garden</label>
                <div className="w-full rounded-xl border-2 border-dashed border-lichen-cream bg-white px-4 py-8 text-center">
                  <p className="text-sm text-sage mb-1">Drag and drop photos here, or click to browse</p>
                  <p className="text-xs text-sage">JPG, PNG up to 10 MB each (max 5 photos)</p>
                  <input type="file" accept="image/*" multiple
                    className="mt-3 text-sm text-forest-mid file:mr-3 file:rounded-full file:border-0 file:bg-reserve-green file:px-4 file:py-2 file:text-xs file:font-medium file:text-white file:cursor-pointer" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-deep-forest mb-1">Describe Your Garden *</label>
                <textarea required rows={4} placeholder="Tell us about your native plants, what wildlife you've seen, how long the garden has been established, and why you'd like Honorary status."
                  className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green resize-y" />
              </div>
              <div className="text-center pt-2">
                <button type="submit" className="btn btn-primary">
                  Submit Application <ArrowRight size={14} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-site py-16 text-center max-w-xl mx-auto">
        <h2 className="font-display font-bold text-xl text-deep-forest mb-3">
          Not sure if you qualify?
        </h2>
        <p className="text-forest-mid text-sm mb-5">
          No worries — send us a few photos and we&apos;ll give you honest feedback and suggestions
          for getting your garden to Honorary status.
        </p>
        <Link href="/contact" className="btn btn-secondary">
          Ask Us <ArrowRight size={14} />
        </Link>
      </section>
    </div>
  );
}
