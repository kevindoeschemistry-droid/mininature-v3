"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { RESERVES } from "@/lib/data";
import dynamic from "next/dynamic";

// Dynamically import map to avoid SSR issues
const MiniMapEmbed = dynamic(() => import("@/components/map/MiniMapEmbed"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-mint-mist animate-pulse flex items-center justify-center rounded-organic">
      <div className="text-center text-forest-mid">
        <MapPin size={32} className="mx-auto mb-2 opacity-40" />
        <div className="text-sm">Loading map...</div>
      </div>
    </div>
  ),
});

export default function MapPreview() {
  const featuredReserves = RESERVES.filter((r) => r.featured).slice(0, 3);

  return (
    <section className="section-pad bg-fog-white">
      <div className="container-site">
        {/* Section header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-2">
              The Network
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-forest">
              Find a MiniNature Reserve Near You
            </h2>
            <p className="text-forest-mid mt-2">
              21 active locations across Ventura County and growing.
            </p>
          </div>
          <Link
            href="/explore/map"
            className="hidden md:flex btn btn-secondary text-sm shrink-0 ml-6"
          >
            View Full Map
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Map + list layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Featured reserve list */}
          <div className="space-y-3">
            {featuredReserves.map((reserve) => (
              <Link
                key={reserve.id}
                href={`/explore/reserves/${reserve.slug}`}
                className="flex items-center gap-4 p-4 bg-white rounded-organic border border-lichen-cream hover:border-sage hover:shadow-card transition-all group"
              >
                <div
                  className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-lichen-cream"
                  style={{
                    backgroundImage: `url(${reserve.heroPhoto})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-deep-forest text-sm group-hover:text-reserve-green transition-colors truncate">
                    {reserve.name}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-forest-mid mt-0.5">
                    <MapPin size={10} />
                    <span className="truncate">{reserve.city}</span>
                  </div>
                  <div className="text-xs text-forest-mid mt-1">
                    {reserve.nativePlantCount} species · {reserve.sizeSqft} sq ft
                  </div>
                </div>
                {reserve.adoptionStatus === "available" && (
                  <div className="shrink-0">
                    <span className="text-xs bg-adoptable/15 text-forest-mid px-2 py-1 rounded-full">
                      Adoptable
                    </span>
                  </div>
                )}
              </Link>
            ))}

            <Link
              href="/explore/reserves"
              className="flex items-center gap-2 p-4 text-sm font-medium text-reserve-green hover:text-deep-forest transition-colors"
            >
              <span>View all {RESERVES.length} reserves</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Map embed */}
          <div className="lg:col-span-2 h-[400px] lg:h-[450px] rounded-organic overflow-hidden shadow-card">
            <MiniMapEmbed reserves={RESERVES} />
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="mt-6 md:hidden">
          <Link href="/explore/map" className="btn btn-secondary w-full justify-center text-sm">
            Explore the Full Map
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
