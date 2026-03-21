import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ReserveCard from "@/components/ui/ReserveCard";
import { RESERVES } from "@/lib/data";

export default function FeaturedReserves() {
  const featured = RESERVES.filter((r) => r.featured).slice(0, 3);

  return (
    <section className="section-pad bg-fog-white">
      <div className="container-site">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-2">
              The Reserves
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-forest">
              Featured MiniNature Reserves
            </h2>
            <p className="text-forest-mid mt-2 max-w-lg">
              Every reserve has a story. Explore the habitats our community has built.
            </p>
          </div>
          <Link
            href="/explore/reserves"
            className="hidden md:flex btn btn-outline text-sm shrink-0 ml-6"
          >
            All {RESERVES.length} Reserves
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Reserve cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((reserve) => (
            <ReserveCard key={reserve.id} reserve={reserve} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 md:hidden">
          <Link
            href="/explore/reserves"
            className="btn btn-outline w-full justify-center text-sm"
          >
            Explore All Reserves
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
