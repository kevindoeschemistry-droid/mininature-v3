import type { Metadata } from "next";
import Link from "next/link";
import { RESERVES } from "@/lib/data";
import ReserveCard from "@/components/ui/ReserveCard";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "All Reserves",
  description: "Browse all MiniNature Reserves — native plant habitats across Ventura County.",
};

export default function ReservesPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Page header */}
      <div className="bg-reserve-green text-white py-16">
        <div className="container-site">
          <div className="text-xs font-mono-accent uppercase tracking-widest text-sage mb-3">
            The Network
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            All MiniNature Reserves
          </h1>
          <p className="text-sage text-lg max-w-xl">
            {RESERVES.length} active locations and growing. Each reserve is a pocket of
            restored nature, built by community and sustained by care.
          </p>
          <div className="flex gap-3 mt-6">
            <Link href="/explore/map" className="btn btn-primary text-sm">
              <MapPin size={15} />
              View on Map
            </Link>
            <Link href="/get-involved/make-a-reserve" className="btn btn-outline-white text-sm">
              Make a Reserve
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Reserve grid */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESERVES.map((reserve) => (
            <ReserveCard key={reserve.id} reserve={reserve} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-mint-mist rounded-organic-lg p-12">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-3">
            Don&apos;t see one near you?
          </h2>
          <p className="text-forest-mid mb-6 max-w-md mx-auto">
            Starting a MiniNature Reserve is free. We provide the plants, training, and support. You provide the space.
          </p>
          <Link href="/get-involved/make-a-reserve" className="btn btn-primary">
            Make a Reserve in Your Area
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
