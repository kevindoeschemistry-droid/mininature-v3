import Link from "next/link";
import Image from "next/image";
import { MapPin, Leaf, Users, Heart } from "lucide-react";
import type { Reserve } from "@/types";

const TYPE_LABELS: Record<string, { label: string; color: string }> = {
  kit: { label: "MNR Kit", color: "bg-mint-mist text-forest-mid" },
  guerrilla: { label: "Guerrilla", color: "bg-lichen-cream text-deep-forest" },
  paid_partnership: { label: "Partnership", color: "bg-sage/20 text-reserve-green" },
  honorary: { label: "Honorary", color: "bg-hummingbird-gold/20 text-deep-forest" },
  school: { label: "School Reserve", color: "bg-california-poppy/15 text-deep-forest" },
};

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  available: { label: "Available for Adoption", color: "bg-adoptable text-white" },
  adopted: { label: "Adopted", color: "bg-forest-mid/20 text-forest-mid" },
  not_available: { label: "Stewardship Full", color: "bg-lichen-cream text-forest-mid" },
};

interface Props {
  reserve: Reserve;
  compact?: boolean;
}

export default function ReserveCard({ reserve, compact = false }: Props) {
  const typeInfo = TYPE_LABELS[reserve.reserveType] || TYPE_LABELS.kit;
  const statusInfo = STATUS_LABELS[reserve.adoptionStatus];

  return (
    <Link href={`/explore/reserves/${reserve.slug}`} className="block group">
      <div className="card-organic bg-white h-full flex flex-col">
        {/* Photo */}
        <div className="relative overflow-hidden" style={{ paddingBottom: compact ? "60%" : "66%" }}>
          <Image
            src={reserve.heroPhoto}
            alt={reserve.name}
            width={800}
            height={530}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Type badge */}
          <div className="absolute top-3 left-3">
            <span className={`reserve-type-badge ${typeInfo.color}`}>
              {typeInfo.label}
            </span>
          </div>
          {/* Adoption badge */}
          {reserve.adoptionStatus === "available" && (
            <div className="absolute top-3 right-3">
              <span className={`reserve-type-badge ${statusInfo.color} flex items-center gap-1`}>
                <Heart size={9} fill="white" />
                Adoptable
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-display font-semibold text-deep-forest text-lg leading-tight mb-1 group-hover:text-reserve-green transition-colors">
            {reserve.name}
          </h3>

          <div className="flex items-center gap-1 text-sm text-forest-mid mb-3">
            <MapPin size={12} className="shrink-0" />
            <span>{reserve.locationName}, {reserve.city}</span>
          </div>

          {!compact && (
            <p className="text-sm text-forest-mid leading-relaxed mb-4 flex-1 line-clamp-2">
              {reserve.summary}
            </p>
          )}

          {/* Stats */}
          <div className="flex items-center gap-4 text-xs font-mono-accent text-forest-mid mt-auto pt-3 border-t border-lichen-cream">
            <div className="flex items-center gap-1">
              <Leaf size={11} />
              <span>{reserve.nativePlantCount} species</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={11} />
              <span>{reserve.volunteersCount} volunteers</span>
            </div>
            <div className="flex items-center gap-1">
              <span>{reserve.sizeSqft.toLocaleString()} sq ft</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
