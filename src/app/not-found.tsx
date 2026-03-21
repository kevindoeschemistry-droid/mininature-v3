import Link from "next/link";
import { TreePine, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-fog-white flex items-center justify-center">
      <div className="text-center max-w-md px-6">
        <div className="text-8xl mb-6">🌿</div>
        <h1 className="font-display font-bold text-3xl text-deep-forest mb-3">
          This page is still growing.
        </h1>
        <p className="text-forest-mid mb-8">
          We couldn&apos;t find the page you were looking for. Maybe it moved, or maybe it&apos;s a future habitat waiting to be planted.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn btn-secondary">
            Back to Home
          </Link>
          <Link href="/explore/map" className="btn btn-outline">
            <TreePine size={15} />
            Find a Reserve
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
