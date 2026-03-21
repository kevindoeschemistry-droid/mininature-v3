import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { RESERVES } from "@/lib/data";
import { MapPin, Calendar, Leaf, Users, Heart, ArrowRight, ExternalLink, Share2 } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return RESERVES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const reserve = RESERVES.find((r) => r.slug === slug);
  if (!reserve) return { title: "Reserve Not Found" };
  return {
    title: reserve.name,
    description: reserve.summary,
  };
}

const TYPE_LABELS: Record<string, string> = {
  kit: "MNR Kit Reserve",
  guerrilla: "Guerrilla Reserve",
  paid_partnership: "Partnership Reserve",
  honorary: "Honorary MNR",
  school: "School Reserve",
};

const STATUS_CONFIG: Record<string, { label: string; color: string }> = {
  available: { label: "Available for Adoption", color: "bg-adoptable text-white" },
  adopted: { label: "Adopted", color: "bg-forest-mid/20 text-forest-mid" },
  not_available: { label: "Stewardship Full", color: "bg-lichen-cream text-forest-mid" },
};

const MAINTENANCE_CONFIG: Record<string, { label: string; dot: string }> = {
  thriving: { label: "Thriving", dot: "bg-adoptable" },
  needs_attention: { label: "Needs Attention", dot: "bg-hummingbird-gold" },
  dormant: { label: "Dormant", dot: "bg-sage" },
};

export default async function ReserveProfilePage({ params }: Props) {
  const { slug } = await params;
  const reserve = RESERVES.find((r) => r.slug === slug);
  if (!reserve) notFound();

  const typeLabel = TYPE_LABELS[reserve.reserveType];
  const statusConfig = STATUS_CONFIG[reserve.adoptionStatus];
  const maintenanceConfig = MAINTENANCE_CONFIG[reserve.maintenanceStatus];

  const relatedReserves = RESERVES.filter(
    (r) => r.id !== reserve.id && r.city === reserve.city
  ).slice(0, 3);

  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <div className="relative h-[55vh] overflow-hidden">
        <img
          src={reserve.heroPhoto}
          alt={reserve.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container-site">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="reserve-type-badge bg-white/20 text-white backdrop-blur-sm">
                {typeLabel}
              </span>
              <span className={`reserve-type-badge ${statusConfig.color}`}>
                {statusConfig.label}
              </span>
            </div>
            <h1 className="font-display font-bold text-3xl md:text-5xl text-white mb-2">
              {reserve.name}
            </h1>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <MapPin size={14} />
              <span>{reserve.locationName}, {reserve.city}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick stats bar */}
      <div className="bg-reserve-green text-white">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-forest-mid py-5">
            {[
              { value: `${reserve.sizeSqft.toLocaleString()} sq ft`, label: "Restored" },
              { value: `${reserve.nativePlantCount}`, label: "Native Species" },
              { value: `${reserve.volunteersCount}`, label: "Volunteers" },
              { value: new Date(reserve.installDate).toLocaleDateString("en-US", { month: "short", year: "numeric" }), label: "Installed" },
            ].map((stat) => (
              <div key={stat.label} className="px-6 text-center first:pl-0 last:pr-0">
                <div className="font-display font-bold text-xl text-hummingbird-gold">
                  {stat.value}
                </div>
                <div className="text-xs font-mono-accent text-sage uppercase tracking-widest mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container-site py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: story */}
          <div className="lg:col-span-2 space-y-10">
            {/* Summary */}
            <div>
              <h2 className="font-display font-semibold text-2xl text-deep-forest mb-4">
                The Story
              </h2>
              <p className="text-forest-mid leading-relaxed text-lg">
                {reserve.summary}
              </p>
              {reserve.fullStory && (
                <p className="text-forest-mid leading-relaxed mt-4">
                  {reserve.fullStory}
                </p>
              )}
            </div>

            {/* Species list */}
            {reserve.species && reserve.species.length > 0 && (
              <div>
                <h2 className="font-display font-semibold text-2xl text-deep-forest mb-4">
                  Native Plants in This Reserve
                </h2>
                <div className="flex flex-wrap gap-2">
                  {reserve.species.map((sp) => (
                    <span
                      key={sp}
                      className="flex items-center gap-1.5 px-3 py-2 bg-white rounded-xl text-sm text-forest-mid border border-lichen-cream"
                    >
                      <Leaf size={13} className="text-reserve-green" />
                      {sp}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Photos grid */}
            {reserve.photos.length > 1 && (
              <div>
                <h2 className="font-display font-semibold text-2xl text-deep-forest mb-4">
                  Gallery
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {reserve.photos.map((photo, i) => (
                    <div key={i} className="rounded-organic overflow-hidden aspect-[4/3]">
                      <img
                        src={photo}
                        alt={`${reserve.name} photo ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: sidebar */}
          <div className="space-y-6">
            {/* Action buttons */}
            <div className="bg-white rounded-organic p-6 shadow-card space-y-3">
              <h3 className="font-semibold text-deep-forest text-sm uppercase tracking-wider mb-4">
                Get Involved
              </h3>
              {reserve.adoptionStatus === "available" && (
                <Link
                  href="/get-involved/adopt"
                  className="btn btn-primary w-full justify-center text-sm"
                >
                  <Heart size={15} />
                  Adopt This Reserve
                </Link>
              )}
              <Link
                href="/get-involved/volunteer"
                className="btn btn-secondary w-full justify-center text-sm"
              >
                <Users size={15} />
                Volunteer Here
              </Link>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${reserve.lat},${reserve.lng}`}
                target="_blank"
                rel="noopener"
                className="btn btn-outline w-full justify-center text-sm"
              >
                <MapPin size={15} />
                Get Directions
                <ExternalLink size={12} />
              </a>
              <button className="btn btn-ghost w-full justify-center text-sm text-forest-mid">
                <Share2 size={15} />
                Share This Reserve
              </button>
            </div>

            {/* Classification */}
            <div className="bg-white rounded-organic p-6 shadow-card">
              <h3 className="font-semibold text-deep-forest text-sm uppercase tracking-wider mb-4">
                Reserve Details
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-forest-mid">Type</span>
                  <span className="font-medium text-deep-forest">{typeLabel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-forest-mid">Status</span>
                  <span className={`reserve-type-badge text-xs ${statusConfig.color}`}>
                    {statusConfig.label}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-forest-mid">Health</span>
                  <span className="flex items-center gap-1.5 font-medium text-deep-forest">
                    <span className={`w-2 h-2 rounded-full ${maintenanceConfig.dot}`} />
                    {maintenanceConfig.label}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-forest-mid">City</span>
                  <span className="font-medium text-deep-forest">{reserve.city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-forest-mid">Installed</span>
                  <span className="font-medium text-deep-forest">
                    {new Date(reserve.installDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                  </span>
                </div>
              </div>
            </div>

            {/* Creator */}
            {reserve.creatorName && (
              <div className="bg-white rounded-organic p-6 shadow-card">
                <h3 className="font-semibold text-deep-forest text-sm uppercase tracking-wider mb-4">
                  Created By
                </h3>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-mint-mist flex items-center justify-center text-reserve-green font-bold text-sm">
                    {reserve.creatorName.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-sm text-deep-forest">{reserve.creatorName}</div>
                    <div className="text-xs text-forest-mid">{reserve.creatorRole}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Adoption CTA */}
            {reserve.adoptionStatus === "available" && (
              <div className="bg-mint-mist rounded-organic p-6 border border-sage/30">
                <div className="flex items-center gap-2 text-reserve-green font-semibold text-sm mb-2">
                  <Heart size={16} />
                  Adopt This Reserve
                </div>
                <p className="text-xs text-forest-mid leading-relaxed mb-4">
                  For $500/year your name or organization appears on the reserve sign and website. Includes quarterly stewardship updates.
                </p>
                <Link
                  href="/get-involved/adopt"
                  className="btn btn-secondary w-full justify-center text-xs py-2.5"
                >
                  Learn About Adoption
                  <ArrowRight size={12} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related reserves */}
      {relatedReserves.length > 0 && (
        <div className="bg-lichen-cream py-16">
          <div className="container-site">
            <h2 className="font-display font-bold text-2xl text-deep-forest mb-8">
              More Reserves in {reserve.city}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedReserves.map((r) => (
                <Link key={r.id} href={`/explore/reserves/${r.slug}`} className="group block">
                  <div className="card-organic bg-white">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={r.heroPhoto}
                        alt={r.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-sm text-deep-forest group-hover:text-reserve-green transition-colors">
                        {r.name}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-forest-mid mt-1">
                        <MapPin size={10} />
                        {r.locationName}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/explore/reserves" className="btn btn-outline text-sm">
                View All Reserves
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
