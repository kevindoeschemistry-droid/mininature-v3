import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Heart, Leaf, Shield, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Memorial & Legacy Giving",
  description:
    "Honor a loved one with a native plant dedication or include MiniNature Reserve in your estate plan. Create a lasting impact for generations.",
};

const WHAT_FAMILY_RECEIVES = [
  {
    emoji: "\u{1F48C}",
    title: "Personalized Card",
    description:
      "A hand-designed card sent to the honoree's family, sharing that a gift has been made in their loved one's memory.",
  },
  {
    emoji: "\u{1F4F8}",
    title: "Photo of Planted Species",
    description:
      "A photograph of the native plants dedicated in their honor, showing exactly what is growing in their name.",
  },
  {
    emoji: "\u{1F5FA}\u{FE0F}",
    title: "Map Location",
    description:
      "A digital map showing the exact location of the dedicated plants within a MiniNature Reserve.",
  },
];

const LEGACY_GIFT_TYPES = [
  {
    emoji: "\u{1F4DC}",
    title: "Bequest in Your Will",
    description:
      "Include MiniNature Reserve in your will or living trust. A bequest can be a specific dollar amount, a percentage of your estate, or the remainder after other gifts are fulfilled.",
  },
  {
    emoji: "\u{1F4B0}",
    title: "Retirement Account Beneficiary",
    description:
      "Name MiniNature Reserve as a beneficiary of your IRA, 401(k), or other retirement account. This is one of the most tax-efficient ways to make a lasting gift.",
  },
  {
    emoji: "\u{1F6E1}\u{FE0F}",
    title: "Life Insurance Beneficiary",
    description:
      "Designate MiniNature Reserve as a beneficiary of a life insurance policy. You can donate an existing policy or name us as a partial or full beneficiary.",
  },
  {
    emoji: "\u{2764}\u{FE0F}",
    title: "Donor-Advised Fund",
    description:
      "Recommend a grant from your donor-advised fund to support native habitat restoration. DAF gifts are a simple, flexible way to give from your charitable fund.",
  },
];

export default function MemorialAndLegacyPage() {
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
              Memorial &amp; Legacy Giving
            </h1>
            <p className="text-sage text-lg leading-relaxed">
              Honor someone special with a gift that grows, or create a lasting
              legacy by including MiniNature Reserve in your estate plan. Every
              gift plants native habitat that supports wildlife for generations.
            </p>
          </div>
        </div>
      </section>

      {/* ── MEMORIAL GIVING ── */}
      <section className="container-site py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-3 justify-center">
            <Heart size={12} />
            Memorial Giving
          </div>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-deep-forest mb-3 text-center">
            A Living Tribute
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
                desc: "We dedicate native plants at a reserve in their honor \u2014 species that support local wildlife.",
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

      {/* ── PLANNED GIVING / LEGACY ── */}
      <section className="bg-deep-forest text-white py-16">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-xs font-mono-accent uppercase tracking-widest text-sage mb-3 justify-center">
              <Leaf size={12} />
              Planned Giving
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-3 text-center">
              Include MiniNature in Your Estate Plan
            </h2>
            <p className="text-sage text-center leading-relaxed max-w-xl mx-auto mb-12">
              A planned gift ensures that native habitat restoration continues
              for generations. There are several flexible ways to leave a
              lasting legacy through your estate.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {LEGACY_GIFT_TYPES.map((gift) => (
                <div
                  key={gift.title}
                  className="card-organic bg-forest-mid/20 border border-forest-mid/30 p-6"
                >
                  <span className="text-3xl block mb-3">{gift.emoji}</span>
                  <h3 className="font-display font-semibold text-white text-lg mb-2">
                    {gift.title}
                  </h3>
                  <p className="text-sage text-sm leading-relaxed">
                    {gift.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Circle */}
      <section className="bg-lichen-cream py-16">
        <div className="container-site max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="w-14 h-14 rounded-full bg-deep-forest text-white flex items-center justify-center mx-auto mb-4">
              <Star size={24} />
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-deep-forest mb-3">
              The Heritage Circle
            </h2>
            <p className="text-forest-mid leading-relaxed max-w-xl mx-auto">
              The Heritage Circle honors those who have included MiniNature
              Reserve in their estate plans. Members receive special recognition
              and a deeper connection to our mission.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: "\u{1F333}",
                title: "Name on the Legacy Wall",
                desc: "Permanent recognition at our flagship reserve, honoring your commitment to future generations of native habitat.",
              },
              {
                emoji: "\u{1F4E8}",
                title: "Annual Impact Report",
                desc: "A personalized report sharing how legacy gifts are funding new reserves, restoration projects, and community programs.",
              },
              {
                emoji: "\u{1F331}",
                title: "Exclusive Events",
                desc: "Invitations to Heritage Circle gatherings, behind-the-scenes reserve tours, and conversations with our conservation team.",
              },
            ].map((perk) => (
              <div
                key={perk.title}
                className="card-organic bg-white p-6 border border-lichen-cream text-center"
              >
                <span className="text-3xl block mb-3">{perk.emoji}</span>
                <h3 className="font-display font-semibold text-deep-forest mb-2">
                  {perk.title}
                </h3>
                <p className="text-sm text-forest-mid leading-relaxed">
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-forest-mid text-sm leading-relaxed max-w-lg mx-auto mb-6">
              Interested in joining the Heritage Circle? We would love to talk
              with you about how a planned gift can align with your values and
              financial goals.
            </p>
            <Link
              href="/about/contact"
              className="btn btn-primary inline-flex items-center gap-2"
            >
              <Shield size={16} />
              Contact Us About Legacy Giving
            </Link>
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
            When you plant in someone&apos;s memory or include MiniNature in
            your estate plan, you create a living ecosystem that grows, evolves,
            and supports wildlife for decades. It is a tribute that breathes,
            blooms, and gives back to the community every single day.
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
