"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, MapPin, Leaf, Users, Filter, X, Heart } from "lucide-react";
import dynamic from "next/dynamic";
import { RESERVES } from "@/lib/data";
import type { Reserve, ReserveType, AdoptionStatus } from "@/types";

const MapEmbed = dynamic(() => import("@/components/map/MiniMapEmbed"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-mint-mist flex items-center justify-center">
      <div className="text-center text-forest-mid">
        <MapPin size={40} className="mx-auto mb-3 opacity-40" />
        <p className="text-sm">Loading map...</p>
      </div>
    </div>
  ),
});

const TYPE_FILTERS: { label: string; value: ReserveType | "all" }[] = [
  { label: "All Reserves", value: "all" },
  { label: "MNR Kit", value: "kit" },
  { label: "Guerrilla", value: "guerrilla" },
  { label: "Partnership", value: "paid_partnership" },
  { label: "School Reserve", value: "school" },
  { label: "Honorary", value: "honorary" },
];

const STATUS_FILTERS: { label: string; value: AdoptionStatus | "all" }[] = [
  { label: "Any Status", value: "all" },
  { label: "Available for Adoption", value: "available" },
  { label: "Adopted", value: "adopted" },
];

export default function MapPageClient() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<ReserveType | "all">("all");
  const [statusFilter, setStatusFilter] = useState<AdoptionStatus | "all">("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return RESERVES.filter((r) => {
      const matchSearch =
        !search ||
        r.name.toLowerCase().includes(search.toLowerCase()) ||
        r.city.toLowerCase().includes(search.toLowerCase()) ||
        r.locationName.toLowerCase().includes(search.toLowerCase());
      const matchType = typeFilter === "all" || r.reserveType === typeFilter;
      const matchStatus = statusFilter === "all" || r.adoptionStatus === statusFilter;
      return matchSearch && matchType && matchStatus;
    });
  }, [search, typeFilter, statusFilter]);

  const selectedReserve = selectedId ? RESERVES.find((r) => r.id === selectedId) : null;

  const hasFilters = typeFilter !== "all" || statusFilter !== "all" || search;

  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden">
      {/* Left panel */}
      <div className="w-full lg:w-[380px] shrink-0 flex flex-col bg-white border-r border-lichen-cream overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-lichen-cream">
          <h1 className="font-display font-bold text-xl text-deep-forest mb-4">
            Find a MiniNature Reserve
          </h1>

          {/* Search */}
          <div className="relative mb-4">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-forest-mid" />
            <input
              type="text"
              placeholder="Search by name, city, or area..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm rounded-full border border-lichen-cream focus:border-sage focus:outline-none bg-fog-white"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-forest-mid hover:text-deep-forest"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Type filter chips */}
          <div className="flex gap-1.5 flex-wrap mb-3">
            {TYPE_FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setTypeFilter(f.value)}
                className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                  typeFilter === f.value
                    ? "bg-reserve-green text-white"
                    : "bg-lichen-cream text-forest-mid hover:bg-mint-mist"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Adoption filter */}
          <div className="flex gap-1.5">
            {STATUS_FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setStatusFilter(f.value)}
                className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all flex items-center gap-1 ${
                  statusFilter === f.value
                    ? "bg-adoptable text-white"
                    : "bg-lichen-cream text-forest-mid hover:bg-mint-mist"
                }`}
              >
                {f.value === "available" && <Heart size={10} />}
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="px-5 py-3 text-xs font-mono-accent text-forest-mid border-b border-lichen-cream flex items-center justify-between">
          <span>{filtered.length} reserve{filtered.length !== 1 ? "s" : ""} found</span>
          {hasFilters && (
            <button
              onClick={() => { setSearch(""); setTypeFilter("all"); setStatusFilter("all"); }}
              className="text-reserve-green hover:text-deep-forest transition-colors"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Reserve list */}
        <div className="flex-1 overflow-y-auto">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-forest-mid">
              <MapPin size={32} className="mx-auto mb-3 opacity-30" />
              <p className="text-sm">No reserves match your filters.</p>
            </div>
          ) : (
            filtered.map((reserve) => (
              <ReserveListItem
                key={reserve.id}
                reserve={reserve}
                isSelected={selectedId === reserve.id}
                onClick={() => setSelectedId(reserve.id === selectedId ? null : reserve.id)}
              />
            ))
          )}
        </div>

        {/* Start a Reserve CTA */}
        <div className="p-4 border-t border-lichen-cream bg-mint-mist">
          <p className="text-xs text-forest-mid mb-2">Don&apos;t see one near you?</p>
          <Link
            href="/get-involved/make-a-reserve"
            className="btn btn-primary w-full justify-center text-sm py-2.5"
          >
            Start a Reserve in Your Area
          </Link>
        </div>
      </div>

      {/* Map panel */}
      <div className="flex-1 relative hidden lg:block">
        <MapEmbed
          reserves={filtered}
          selectedId={selectedId || undefined}
          onSelectReserve={(id) => setSelectedId(id === selectedId ? null : id)}
          height="100%"
        />

        {/* Selected reserve detail card */}
        {selectedReserve && (
          <div className="absolute bottom-6 left-6 right-6 max-w-sm bg-white rounded-organic shadow-map-popup p-5 z-[1000]">
            <button
              onClick={() => setSelectedId(null)}
              className="absolute top-3 right-3 p-1 rounded-full hover:bg-lichen-cream"
            >
              <X size={14} />
            </button>
            <div className="flex gap-4">
              <div
                className="w-20 h-20 rounded-xl shrink-0 bg-lichen-cream"
                style={{
                  backgroundImage: `url(${selectedReserve.heroPhoto})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm text-deep-forest mb-1 leading-tight">
                  {selectedReserve.name}
                </h3>
                <div className="flex items-center gap-1 text-xs text-forest-mid mb-2">
                  <MapPin size={10} />
                  <span className="truncate">{selectedReserve.city}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-forest-mid mb-3">
                  <span className="flex items-center gap-1"><Leaf size={9} />{selectedReserve.nativePlantCount} sp.</span>
                  <span>{selectedReserve.sizeSqft} sq ft</span>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/explore/reserves/${selectedReserve.slug}`}
                    className="btn btn-secondary text-xs px-3 py-1.5"
                  >
                    Learn More
                  </Link>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${selectedReserve.lat},${selectedReserve.lng}`}
                    target="_blank"
                    rel="noopener"
                    className="btn btn-outline text-xs px-3 py-1.5"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ReserveListItem({
  reserve,
  isSelected,
  onClick,
}: {
  reserve: Reserve;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-4 p-4 border-b border-lichen-cream text-left transition-colors ${
        isSelected
          ? "bg-mint-mist border-l-4 border-l-reserve-green"
          : "hover:bg-fog-white"
      }`}
    >
      <div
        className="w-14 h-14 rounded-xl shrink-0 bg-lichen-cream"
        style={{
          backgroundImage: `url(${reserve.heroPhoto})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="flex-1 min-w-0">
        <div className="font-medium text-sm text-deep-forest mb-0.5 truncate">
          {reserve.name}
        </div>
        <div className="flex items-center gap-1 text-xs text-forest-mid mb-1">
          <MapPin size={9} />
          <span className="truncate">{reserve.city}</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-forest-mid">
          <span className="flex items-center gap-1">
            <Leaf size={9} />
            {reserve.nativePlantCount} species
          </span>
          {reserve.adoptionStatus === "available" && (
            <span className="flex items-center gap-1 text-adoptable font-medium">
              <Heart size={9} />
              Adoptable
            </span>
          )}
        </div>
      </div>
    </button>
  );
}
