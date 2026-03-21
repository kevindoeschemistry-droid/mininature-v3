import type { Metadata } from "next";
import Link from "next/link";
import { Newspaper, Download, Mail, ExternalLink, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Press & Media",
  description: "Press releases, media coverage, expert contacts, and downloadable assets for MiniNature Reserve.",
};

const COVERAGE = [
  {
    outlet: "Ventura County Star",
    headline: "Debut of Native Plant Fest brings green thumbs to Oxnard",
    date: "February 14, 2022",
    type: "Print & Web",
    emoji: "📰",
    href: "https://www.vcstar.com/story/news/local/communities/county/2022/02/14/native-plant-fest-oxnard-ventura-county/6768585001/",
  },
  {
    outlet: "Sustain VC",
    headline: "Celebrate OAKtober 2023 this October",
    date: "October 2023",
    type: "Web",
    emoji: "🌿",
    href: "https://sustain.ventura.org/2023-oaktober-events/",
  },
  {
    outlet: "Condor John",
    headline: "MiniNature is a Big Deal in Oxnard",
    date: "2023",
    type: "Editorial",
    emoji: "🦅",
    href: "https://drive.google.com/file/d/1v0bgwiOTQoiizxWzwNJXX3sqcbT7lPoO/view",
  },
  {
    outlet: "Los Padres ForestWatch",
    headline: "Community Spotlight: Mini Nature Reserve",
    date: "January 2023",
    type: "Newsletter",
    emoji: "🌲",
    href: "https://myemail.constantcontact.com/January-eNews--Groups-File-Opening-Arguments-in-Pine-Mountain-Logging-Appeal.html?soid=1101746485334&aid=2xLBtxZaEcg",
  },
  {
    outlet: "Instagram",
    headline: "Instagram Reel — @alynettework",
    date: "2023",
    type: "Social",
    emoji: "📱",
    href: "https://www.instagram.com/reel/CqyEIKSgYes/",
  },
  {
    outlet: "Amigos805",
    headline: "Social Justice Fund for Ventura County Fellow Update",
    date: "2022",
    type: "Web",
    emoji: "🤝",
    href: "https://amigos805.com/social-justice-fund-for-ventura-county-fellow-update/",
  },
];

const CONTACTS = [
  {
    name: "Diego Magaña",
    role: "Executive Director & Co-founder",
    email: "info@mininature.org",
    availability: "Media interviews, organizational stories, mission",
  },
  {
    name: "Press Team",
    role: "General Media Inquiries",
    email: "info@mininature.org",
    availability: "All media requests — responds within 24 hrs",
  },
];

const ASSETS = [
  { name: "Organization Overview (1-page PDF)", size: "320 KB", icon: Download },
  { name: "2024 Impact Report (Full)", size: "2.4 MB", icon: Download },
  { name: "High-Res Logo Set (SVG + PNG)", size: "1.1 MB", icon: Download },
  { name: "Founder Headshots", size: "8.2 MB", icon: Download },
  { name: "Reserve Photo Library (ZIP)", size: "45 MB", icon: Download },
  { name: "B-Roll Footage Request Form", size: "—", icon: Mail },
];

export default function PressPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      <section className="bg-deep-forest text-white section-pad">
        <div className="container-site">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono-accent uppercase tracking-widest text-sage">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <span>/</span>
            <span>Press</span>
          </div>
          <div className="max-w-2xl">
            <Newspaper size={32} className="text-hummingbird-gold mb-4" />
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Press &amp; Media
            </h1>
            <p className="text-sage text-lg leading-relaxed mb-6">
              Resources for journalists, filmmakers, and content creators covering
              urban ecology, community organizing, and environmental education.
            </p>
            <a href="mailto:info@mininature.org" className="btn btn-primary">
              <Mail size={16} /> info@mininature.org
            </a>
          </div>
        </div>
      </section>

      <div className="container-site py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            {/* Press Coverage */}
            <div>
              <h2 className="font-display font-bold text-xl text-deep-forest mb-6">Recent Coverage</h2>
              <div className="space-y-4">
                {COVERAGE.map((c) => (
                  <div key={c.headline} className="card-organic bg-white p-5 flex items-start gap-4">
                    <span className="text-2xl shrink-0">{c.emoji}</span>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-xs font-medium text-reserve-green mb-1">
                            {c.outlet} · {c.type}
                          </p>
                          <h3 className="font-display font-semibold text-deep-forest text-base leading-tight">
                            {c.headline}
                          </h3>
                        </div>
                        <a
                          href={c.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 text-forest-mid hover:text-reserve-green transition-colors"
                          aria-label={`Read full article: ${c.headline}`}
                        >
                          <ExternalLink size={14} />
                        </a>
                      </div>
                      <p className="text-xs text-forest-mid mt-1">{c.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Facts */}
            <div>
              <h2 className="font-display font-bold text-xl text-deep-forest mb-6">Key Facts for Media</h2>
              <div className="card-organic bg-lichen-cream p-6">
                <ul className="space-y-3">
                  {[
                    "Founded 2021 in Oxnard, California",
                    "501(c)(3) nonprofit organization",
                    "21 active reserves across Oxnard, Ventura, and Port Hueneme",
                    "35,000+ sq ft of native habitat restored",
                    "3,500+ native plants from 60+ California species",
                    "1,500+ community volunteers engaged",
                    "3 school partners, 515+ students reached",
                    "Indigenous knowledge program led by Chumash knowledge-keepers",
                    "100% community-funded; no government operating budget",
                  ].map((fact) => (
                    <li key={fact} className="flex items-start gap-2 text-sm text-forest-mid">
                      <span className="text-reserve-green shrink-0 mt-1">▸</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contacts */}
            <div className="card-organic bg-white border border-lichen-cream p-6">
              <h3 className="font-display font-semibold text-deep-forest text-lg mb-4">Media Contacts</h3>
              {CONTACTS.map((c) => (
                <div key={c.email + c.name} className="mb-4 last:mb-0 pb-4 last:pb-0 border-b border-lichen-cream last:border-0">
                  <p className="font-medium text-deep-forest text-sm">{c.name}</p>
                  <p className="text-xs text-forest-mid mb-1">{c.role}</p>
                  <a href={`mailto:${c.email}`} className="text-xs text-reserve-green hover:underline block mb-1">
                    {c.email}
                  </a>
                  <p className="text-xs text-forest-mid italic">{c.availability}</p>
                </div>
              ))}
              <div className="mt-3 pt-3 border-t border-lichen-cream">
                <p className="text-xs text-forest-mid">
                  Phone: <a href="tel:+18058168732" className="text-reserve-green hover:underline">805-816-8732</a>
                </p>
              </div>
            </div>

            {/* Assets */}
            <div className="card-organic bg-white border border-lichen-cream p-6">
              <h3 className="font-display font-semibold text-deep-forest text-lg mb-4">Downloadable Assets</h3>
              <div className="space-y-2">
                {ASSETS.map((a) => (
                  <Link
                    key={a.name}
                    href="/contact"
                    className="flex items-center justify-between text-xs text-forest-mid hover:text-reserve-green group transition-colors py-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <a.icon size={12} className="shrink-0" />
                      <span>{a.name}</span>
                    </div>
                    <span className="text-forest-mid/60 group-hover:text-reserve-green">{a.size}</span>
                  </Link>
                ))}
              </div>
              <p className="text-xs text-forest-mid mt-3 italic">
                All assets available via info@mininature.org
              </p>
            </div>

            {/* Media partnership CTA */}
            <div className="card-organic bg-reserve-green text-white p-6">
              <Newspaper size={20} className="text-sage mb-3" />
              <h3 className="font-display font-semibold text-lg mb-2">Embed with MiniNature</h3>
              <p className="text-sage text-sm leading-relaxed mb-4">
                Journalists and filmmakers are welcome to embed with our installation teams and
                indigenous knowledge workshops.
              </p>
              <Link href="/partner/media" className="btn btn-primary text-sm w-full justify-center">
                Media Partnership <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
