import Link from "next/link";
import { ArrowLeft, Leaf } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  subtitle: string;
  description: string;
  backLabel?: string;
  backHref?: string;
}

export default function PlaceholderPage({
  title,
  subtitle,
  description,
  backLabel = "Back to Home",
  backHref = "/",
}: PlaceholderPageProps) {
  return (
    <div className="bg-fog-white min-h-screen">
      <section className="bg-reserve-green text-white section-pad">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Leaf size={16} className="text-sage" />
              <span className="text-xs font-mono-accent uppercase tracking-widest text-sage">
                {subtitle}
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-sage text-lg leading-relaxed">{description}</p>
          </div>
        </div>
      </section>

      <div className="container-site py-16">
        <div className="max-w-xl mx-auto text-center">
          <div className="card-organic bg-white p-12 border border-lichen-cream">
            <div className="w-16 h-16 rounded-full bg-mint-mist flex items-center justify-center mx-auto mb-6">
              <Leaf size={28} className="text-reserve-green" />
            </div>
            <h2 className="font-display font-bold text-2xl text-deep-forest mb-3">
              Coming Soon
            </h2>
            <p className="text-forest-mid leading-relaxed mb-8">
              We&apos;re working on this page. Check back soon for updates.
            </p>
            <Link href={backHref} className="btn btn-primary">
              <ArrowLeft size={15} />
              {backLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
