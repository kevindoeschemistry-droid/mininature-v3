import type { Metadata } from "next";
import Link from "next/link";
import { Building2, MapPin, CheckCircle, ArrowRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Municipal & Government Partnerships",
  description: "Partner with MiniNature to restore native habitat on city-owned land — medians, parkways, school grounds, and parks.",
};

const SERVICES = [
  { title: "Site Assessment", description: "We evaluate your city-owned parcels for reserve suitability — soil, sun exposure, maintenance access, and community context." },
  { title: "Reserve Design", description: "Our ecological designers create a planting plan optimized for native pollinators, drought tolerance, and aesthetic quality." },
  { title: "Community Install Day", description: "We organize and lead a public volunteer installation event — great for community engagement and press." },
  { title: "Long-term Stewardship", description: "Trained Reservists monitor and maintain the habitat for at least 18 months post-installation." },
  { title: "Impact Documentation", description: "Quarterly reports with photos, species counts, volunteer hours, and ecological health metrics." },
  { title: "Public Education Signage", description: "Beautiful interpretive signs for each reserve with plant IDs, wildlife guides, and QR code to the reserve profile." },
];

const PARTNERS = [
  { name: "City of Oxnard", reserves: 12, sqft: 22000 },
  { name: "Ventura County", reserves: 5, sqft: 8500 },
  { name: "Port Hueneme", reserves: 2, sqft: 2800 },
];

export default function MunicipalPartnerPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      <section className="bg-reserve-green text-white section-pad">
        <div className="container-site">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono-accent uppercase tracking-widest text-sage">
            <Link href="/partner" className="hover:text-white transition-colors">Partnerships</Link>
            <span>/</span>
            <span>Municipal</span>
          </div>
          <div className="max-w-2xl">
            <Building2 size={32} className="text-hummingbird-gold mb-4" />
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Municipal &amp; Government Partnerships
            </h1>
            <p className="text-sage text-lg leading-relaxed mb-6">
              Turn city-owned strips, medians, and park edges into thriving native habitats.
              We handle everything — community engagement, design, installation, and stewardship.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      <section className="container-site py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display font-bold text-2xl text-deep-forest mb-6">What We Provide</h2>
            <div className="space-y-4">
              {SERVICES.map((s) => (
                <div key={s.title} className="flex gap-4">
                  <CheckCircle size={18} className="text-reserve-green shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-deep-forest text-sm mb-0.5">{s.title}</p>
                    <p className="text-xs text-forest-mid leading-relaxed">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="card-organic bg-deep-forest text-white p-6">
              <h3 className="font-display font-semibold text-lg mb-4">Current Municipal Partners</h3>
              {PARTNERS.map((p) => (
                <div key={p.name} className="flex items-center justify-between py-3 border-b border-white/10 last:border-0">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-sage" />
                    <span className="text-sm font-medium">{p.name}</span>
                  </div>
                  <div className="text-right text-xs text-sage">
                    <div>{p.reserves} reserves</div>
                    <div>{p.sqft.toLocaleString()} sq ft</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-organic bg-lichen-cream p-6">
              <FileText size={20} className="text-reserve-green mb-3" />
              <h3 className="font-display font-semibold text-deep-forest text-lg mb-2">
                Download Partnership Overview
              </h3>
              <p className="text-sm text-forest-mid leading-relaxed mb-4">
                One-page summary of our municipal partnership model, costs, and typical outcomes.
              </p>
              <Link href="/contact" className="btn btn-secondary text-sm">
                Request PDF <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mint-mist py-12">
        <div className="container-site text-center max-w-xl">
          <h2 className="font-display font-bold text-xl text-deep-forest mb-3">
            Ready to bring nature to your city?
          </h2>
          <p className="text-forest-mid text-sm mb-5">
            We work with cities of all sizes. Let&apos;s start with a no-obligation site walk.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Schedule a Site Visit <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
