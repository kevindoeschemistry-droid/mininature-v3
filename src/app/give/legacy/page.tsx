import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  TreePine,
  Mail,
  Phone,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Legacy Donation",
  description:
    "Include MiniNature Reserve in your estate plan. Planned giving ensures native habitat restoration for generations to come.",
};

const GIFT_TYPES = [
  {
    emoji: "📜",
    title: "Bequest in Your Will",
    description:
      "Include MiniNature Reserve as a beneficiary in your will or living trust. You can designate a specific dollar amount, a percentage of your estate, or a residual gift after other bequests are fulfilled.",
    example:
      "Sample language: 'I give [amount/percentage] to MiniNature Reserve, a 501(c)(3) nonprofit, EIN 88-XXXXXXX, for its general charitable purposes.'",
  },
  {
    emoji: "🏦",
    title: "Retirement Account Beneficiary",
    description:
      "Name MiniNature Reserve as a beneficiary of your IRA, 401(k), or other retirement account. This is one of the most tax-efficient ways to give, since retirement assets can be heavily taxed when left to individuals.",
    example:
      "Contact your plan administrator and designate MiniNature Reserve as a primary or contingent beneficiary.",
  },
  {
    emoji: "🛡️",
    title: "Life Insurance Beneficiary",
    description:
      "Designate MiniNature Reserve as a beneficiary of a life insurance policy. You can name us as a primary or contingent beneficiary for all or a portion of the policy.",
    example:
      "An existing policy you no longer need can become a powerful conservation gift.",
  },
  {
    emoji: "💎",
    title: "Donor-Advised Fund",
    description:
      "Recommend a grant to MiniNature Reserve from your donor-advised fund (DAF). You can make a one-time recommendation or set up recurring grants for sustained impact.",
    example:
      "Search for 'MiniNature Reserve' in your DAF provider's grant portal.",
  },
];

const HERITAGE_BENEFITS = [
  "Exclusive Heritage Circle recognition on our website",
  "Annual Heritage Circle gathering and garden tour",
  "Personal updates from MiniNature leadership",
  "Recognition in our annual impact report",
  "A native plant species named in your honor at a reserve",
  "Invitation to all MiniNature events and installations",
];

export default function LegacyPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-deep-forest text-white section-pad">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-sage mb-4">
              <TreePine size={12} className="inline -mt-0.5 mr-1" />
              Planned Giving
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-5 leading-tight">
              Leave a Legacy
              <br />
              <em className="text-hummingbird-gold not-italic">
                for Native Habitat
              </em>
            </h1>
            <p className="text-sage text-lg leading-relaxed">
              Planned gifts ensure that urban native habitat restoration
              continues for generations. Your legacy plants gardens that will
              bloom long after all of us, supporting pollinators, birds, and
              communities yet to come.
            </p>
          </div>
        </div>
      </section>

      {/* What is legacy giving */}
      <section className="container-site py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4 text-center">
            What Is Legacy Giving?
          </h2>
          <p className="text-forest-mid leading-relaxed text-center mb-4">
            Legacy giving — also called planned giving — allows you to make a
            meaningful gift to MiniNature Reserve through your estate plan.
            These gifts can include bequests in your will, beneficiary
            designations on retirement accounts or life insurance, and grants
            from donor-advised funds.
          </p>
          <p className="text-forest-mid leading-relaxed text-center">
            Planned gifts cost nothing during your lifetime, can offer
            significant tax benefits to your estate, and ensure that native
            habitat restoration continues in Ventura County for decades to
            come.
          </p>
        </div>
      </section>

      {/* Why leave a legacy */}
      <section className="bg-mint-mist py-16">
        <div className="container-site max-w-3xl mx-auto text-center">
          <span className="text-3xl block mb-3">🌳</span>
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-4">
            Why Leave a Legacy to MiniNature?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Permanent Impact",
                desc: "Your gift plants native habitat that grows and supports wildlife for generations, not just seasons.",
              },
              {
                title: "Community Transformation",
                desc: "Legacy gifts fund new reserves in underserved neighborhoods, transforming concrete into living ecosystems.",
              },
              {
                title: "Tax Advantages",
                desc: "Planned gifts can reduce estate taxes and provide other financial benefits for your heirs.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card-organic bg-white p-6 border border-lichen-cream"
              >
                <h3 className="font-display font-semibold text-deep-forest mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-forest-mid leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of planned gifts */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-2 text-center">
          Types of Planned Gifts
        </h2>
        <p className="text-center text-forest-mid mb-10 text-sm max-w-lg mx-auto">
          There are several ways to include MiniNature in your estate plan.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {GIFT_TYPES.map((gift) => (
            <div
              key={gift.title}
              className="card-organic bg-white p-6 border border-lichen-cream"
            >
              <span className="text-3xl block mb-3">{gift.emoji}</span>
              <h3 className="font-display font-semibold text-lg text-deep-forest mb-2">
                {gift.title}
              </h3>
              <p className="text-sm text-forest-mid leading-relaxed mb-3">
                {gift.description}
              </p>
              <div className="text-xs text-reserve-green bg-mint-mist p-3 rounded-lg">
                {gift.example}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Heritage Circle */}
      <section className="bg-lichen-cream py-16">
        <div className="container-site max-w-3xl mx-auto">
          <div className="card-organic bg-white p-8 text-center">
            <span className="text-3xl block mb-3">🏛️</span>
            <h2 className="font-display font-bold text-2xl text-deep-forest mb-3">
              The Heritage Circle
            </h2>
            <p className="text-forest-mid leading-relaxed mb-6 max-w-xl mx-auto">
              Our Heritage Circle recognizes individuals and families who have
              included MiniNature Reserve in their estate plans. Members receive
              special recognition and exclusive access throughout their
              lifetime.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-lg mx-auto">
              {HERITAGE_BENEFITS.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-2 text-sm text-forest-mid"
                >
                  <CheckCircle
                    size={14}
                    className="text-reserve-green shrink-0 mt-0.5"
                  />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="container-site py-16">
        <div className="max-w-2xl mx-auto">
          <div className="card-organic bg-white p-8 shadow-card text-center">
            <h2 className="font-display font-semibold text-2xl text-deep-forest mb-2">
              Let&apos;s Talk About Your Legacy
            </h2>
            <p className="text-sm text-forest-mid mb-8 max-w-lg mx-auto">
              We&apos;d love to discuss how a planned gift can align with your
              values and financial goals. Reach out to our team — all
              conversations are confidential.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-deep-forest flex items-center justify-center">
                  <Mail size={16} className="text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-forest-mid">Email</div>
                  <a
                    href="mailto:legacy@mininaturereserve.org"
                    className="text-reserve-green font-medium hover:underline"
                  >
                    legacy@mininaturereserve.org
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-deep-forest flex items-center justify-center">
                  <Phone size={16} className="text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-forest-mid">Phone</div>
                  <a
                    href="tel:+18055551234"
                    className="text-reserve-green font-medium hover:underline"
                  >
                    (805) 555-1234
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal disclaimer */}
      <section className="container-site pb-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-fog-white border border-lichen-cream rounded-organic p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle
                size={18}
                className="text-hummingbird-gold shrink-0 mt-0.5"
              />
              <div>
                <h3 className="font-semibold text-deep-forest text-sm mb-1">
                  Important Notice
                </h3>
                <p className="text-xs text-forest-mid leading-relaxed">
                  The information on this page is provided for general
                  educational purposes and is not intended as legal, tax, or
                  financial advice. We strongly encourage you to consult with
                  your own attorney, tax advisor, or financial planner before
                  making any planned giving decisions. MiniNature Reserve is a
                  501(c)(3) nonprofit organization (EIN: 88-XXXXXXX).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="container-site pb-12 text-center">
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
