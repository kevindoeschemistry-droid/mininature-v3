import type { Metadata } from "next";
import Link from "next/link";
import { ShoppingBag, ArrowRight, ExternalLink, Leaf, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Shop",
  description: "Support MiniNature Reserve by purchasing merch. Every purchase funds native habitat restoration in Ventura County.",
};

const PRODUCTS = [
  {
    name: "Basic Logo Tee (Masc Fit)",
    price: "$25.00",
    status: "In stock",
    details: ["Eco-friendly", "100% Cotton"],
    image: "/images/shop-tee-placeholder.svg",
    href: "https://www.mininature.org/shop#!/Basic-Logo-Tee-Masc-FIt/p/822139005",
  },
];

export default function ShopPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-reserve-green text-white section-pad">
        <div className="container-site">
          <div className="max-w-xl">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-sage mb-4">Shop</div>
            <ShoppingBag size={32} className="text-hummingbird-gold mb-4" />
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              MiniNature Shop
            </h1>
            <p className="text-sage text-lg leading-relaxed">
              Rep the mission. Every purchase supports native habitat restoration
              in Ventura County.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-8">Merch</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-organic bg-white group hover:shadow-lg transition-shadow"
            >
              {/* Product image area */}
              <div className="aspect-square bg-mint-mist rounded-t-organic flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <Leaf size={64} className="text-sage/40 mx-auto mb-3" />
                  <span className="text-xs text-forest-mid/50 font-mono-accent uppercase tracking-widest">
                    MiniNature Reserve
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-reserve-green/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="btn bg-white text-reserve-green font-semibold text-sm">
                    Buy on mininature.org <ExternalLink size={13} />
                  </span>
                </div>
              </div>

              {/* Product info */}
              <div className="p-5">
                <h3 className="font-display font-semibold text-deep-forest text-lg mb-1 group-hover:text-reserve-green transition-colors">
                  {product.name}
                </h3>
                <p className="text-2xl font-bold text-reserve-green mb-3">{product.price}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {product.details.map((d) => (
                    <span key={d} className="inline-flex items-center gap-1 text-xs bg-mint-mist text-forest-mid px-2.5 py-1 rounded-full">
                      <Check size={10} className="text-reserve-green" />
                      {d}
                    </span>
                  ))}
                </div>

                <span className="inline-block text-xs font-medium text-reserve-green bg-reserve-green/10 px-2.5 py-1 rounded-full">
                  {product.status}
                </span>
              </div>
            </a>
          ))}

          {/* Coming Soon placeholder */}
          <div className="card-organic bg-white border-2 border-dashed border-lichen-cream flex flex-col items-center justify-center p-8 text-center min-h-[360px]">
            <ShoppingBag size={40} className="text-sage/30 mb-4" />
            <h3 className="font-display font-semibold text-forest-mid text-base mb-2">More merch coming soon</h3>
            <p className="text-xs text-forest-mid/60 leading-relaxed max-w-[200px]">
              Follow us on Instagram for drop announcements and limited-edition gear.
            </p>
          </div>
        </div>
      </section>

      {/* Info banner */}
      <section className="bg-lichen-cream py-12">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
            <div>
              <div className="text-2xl mb-2">🌱</div>
              <h3 className="font-display font-semibold text-deep-forest text-sm mb-1">100% Mission-Funded</h3>
              <p className="text-xs text-forest-mid">All proceeds go directly to native habitat restoration.</p>
            </div>
            <div>
              <div className="text-2xl mb-2">♻️</div>
              <h3 className="font-display font-semibold text-deep-forest text-sm mb-1">Eco-Friendly Materials</h3>
              <p className="text-xs text-forest-mid">100% cotton, sustainably sourced.</p>
            </div>
            <div>
              <div className="text-2xl mb-2">📦</div>
              <h3 className="font-display font-semibold text-deep-forest text-sm mb-1">Secure Checkout</h3>
              <p className="text-xs text-forest-mid">Powered by Ecwid with PayPal &amp; card options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="container-site py-16 max-w-xl mx-auto text-center">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-3">
          More Ways to Support
        </h2>
        <p className="text-forest-mid mb-6">
          Beyond merch, you can fund native habitat directly.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/give/donate" className="btn btn-primary">
            Donate <ArrowRight size={14} />
          </Link>
          <Link href="/give/adopt" className="btn btn-secondary">
            Sponsor a Reserve <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
