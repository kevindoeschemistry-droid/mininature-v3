import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Memorial Giving",
  description:
    "Honor a loved one with a gift that plants native habitat in their memory. A living tribute that grows for years to come.",
};

const WHAT_FAMILY_RECEIVES = [
  {
    emoji: "💌",
    title: "Personalized Card",
    description:
      "A hand-designed card sent to the honoree's family, sharing that a gift has been made in their loved one's memory.",
  },
  {
    emoji: "📸",
    title: "Photo of Planted Species",
    description:
      "A photograph of the native plants dedicated in their honor, showing exactly what is growing in their name.",
  },
  {
    emoji: "🗺️",
    title: "Map Location",
    description:
      "A digital map showing the exact location of the dedicated plants within a MiniNature Reserve.",
  },
];

export default function MemorialPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-deep-forest text-white section-pad">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-sage mb-4">
              <Heart size={12} className="inline -mt-0.5 mr-1" />
              Honor &amp; Remember
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-5 leading-tight">
              A Living Tribute
            </h1>
            <p className="text-sage text-lg leading-relaxed">
              Honor someone special with a gift that grows. Your memorial
              donation plants native species that create lasting habitat —
              attracting hummingbirds, butterflies, and bees in their name.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container-site py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-3 text-center">
            How Memorial Giving Works
          </h2>
          <p className="text-center text-forest-mid mb-10 leading-relaxed max-w-xl mx-auto">
            When you make a memorial donation, we plant native California
            species in honor of your loved one at a MiniNature Reserve. Their
            memory becomes part of a living ecosystem that supports pollinators
            and restores urban habitat for years to come.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "1",
                title: "You Give",
                desc: "Make a donation in memory of someone you love. Choose any amount that feels right.",
              },
              {
                num: "2",
                title: "We Plant",
                desc: "We dedicate native plants at a reserve in their honor — species that support local wildlife.",
              },
              {
                num: "3",
                title: "Their Family Receives",
                desc: "We send a personalized card, a photo of the planted species, and a map of the dedicated site.",
              },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-12 h-12 rounded-full bg-deep-forest text-white font-display font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-display font-semibold text-deep-forest mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-forest-mid leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What family receives */}
      <section className="bg-lichen-cream py-16">
        <div className="container-site">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-2 text-center">
            What the Family Receives
          </h2>
          <p className="text-center text-forest-mid mb-8 text-sm">
            Every memorial gift is treated with care and respect.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {WHAT_FAMILY_RECEIVES.map((item) => (
              <div
                key={item.title}
                className="card-organic bg-white p-6 border border-lichen-cream text-center"
              >
                <span className="text-3xl block mb-3">{item.emoji}</span>
                <h3 className="font-display font-semibold text-deep-forest mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-forest-mid leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memorial form */}
      <section className="container-site py-16">
        <div className="max-w-2xl mx-auto">
          <div className="card-organic bg-white p-8 shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-deep-forest flex items-center justify-center">
                <Heart size={18} className="text-white" />
              </div>
              <div>
                <h2 className="font-display font-semibold text-2xl text-deep-forest">
                  Make a Memorial Gift
                </h2>
                <p className="text-sm text-forest-mid">
                  Every detail is handled with thoughtfulness and care.
                </p>
              </div>
            </div>
            <div className="space-y-5">
              {/* Your info */}
              <div>
                <h3 className="text-sm font-semibold text-deep-forest mb-3 uppercase tracking-wide">
                  Your Information
                </h3>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-deep-forest mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-deep-forest mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Honoree info */}
              <div>
                <h3 className="text-sm font-semibold text-deep-forest mb-3 uppercase tracking-wide">
                  In Memory Of
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-deep-forest mb-1.5">
                      Honoree&apos;s Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-deep-forest mb-1.5">
                      Your Relationship{" "}
                      <span className="text-forest-mid font-normal">
                        (optional)
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Mother, Friend, Colleague"
                      className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-deep-forest mb-1.5">
                      Tribute Message{" "}
                      <span className="text-forest-mid font-normal">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="A few words about the person you're honoring..."
                      className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Amount */}
              <div>
                <h3 className="text-sm font-semibold text-deep-forest mb-3 uppercase tracking-wide">
                  Donation Amount
                </h3>
                <div className="grid grid-cols-4 gap-2 mb-3">
                  {[50, 100, 250, 500].map((amt) => (
                    <button
                      key={amt}
                      className="py-2.5 rounded-xl border-2 border-lichen-cream bg-fog-white text-deep-forest font-display font-bold text-sm hover:border-reserve-green hover:bg-mint-mist transition-all"
                    >
                      ${amt}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-forest-mid">
                    $
                  </span>
                  <input
                    type="number"
                    placeholder="Custom amount"
                    className="w-full pl-8 pr-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
                  />
                </div>
              </div>

              <button className="btn btn-primary w-full justify-center text-base py-4">
                <Heart size={18} />
                Make Memorial Gift
              </button>
              <p className="text-xs text-center text-forest-mid">
                MiniNature Reserve is a 501(c)(3) nonprofit. Your memorial gift
                is fully tax-deductible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A living legacy */}
      <section className="bg-mint-mist py-16">
        <div className="container-site max-w-2xl mx-auto text-center">
          <Leaf
            size={32}
            className="text-reserve-green mx-auto mb-4"
          />
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
            A Living Legacy
          </h2>
          <p className="text-forest-mid leading-relaxed mb-3">
            Unlike cut flowers that fade, native plants create lasting habitat.
            California Fuchsia blooms year after year, drawing hummingbirds.
            Milkweed feeds monarch butterflies on their migration. Coastal sage
            provides shelter for native bees and lizards.
          </p>
          <p className="text-forest-mid leading-relaxed">
            When you plant in someone&apos;s memory, you create a living
            ecosystem that grows, evolves, and supports wildlife for decades.
            It is a tribute that breathes, blooms, and gives back to the
            community every single day.
          </p>
        </div>
      </section>

      {/* Back link */}
      <section className="container-site py-8 text-center">
        <Link
          href="/give"
          className="text-sm text-forest-mid hover:text-reserve-green transition-colors inline-flex items-center gap-1"
        >
          <ArrowRight size={12} className="rotate-180" />
          Back to all giving options
        </Link>
      </section>
    </div>
  );
}
