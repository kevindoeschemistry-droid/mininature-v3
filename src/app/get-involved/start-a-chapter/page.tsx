import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Flag, Calendar, Users, Megaphone, BookOpen, Check, MapPin } from "lucide-react";
import ChapterApplicationForm from "./ChapterApplicationForm";

export const metadata: Metadata = {
  title: "Start a Chapter",
  description: "Lead a local MiniNature chapter. Organize events, recruit reservists, and grow the native habitat movement in your community.",
};

const CHAPTER_BENEFITS = [
  {
    icon: Calendar,
    title: "Organize Local Events",
    description: "Host install days, plant swaps, workshops, and community walks. You set the schedule and format that works for your area.",
  },
  {
    icon: Users,
    title: "Recruit Reservists",
    description: "Help neighbors and community members start their own reserves. You are the local ambassador for urban habitat restoration.",
  },
  {
    icon: Megaphone,
    title: "Represent MiniNature Locally",
    description: "Be the face of MiniNature in your community. Attend city council meetings, partner with local organizations, and spread the word.",
  },
  {
    icon: BookOpen,
    title: "Access Resources & Training",
    description: "Get chapter leader training, promotional materials, native plant guides, and direct support from the MiniNature team.",
  },
];

const REQUIREMENTS = [
  "Genuine passion for native plants and habitat restoration",
  "Ability to host or coordinate monthly meetups (virtual or in-person)",
  "3 or more founding members to launch with",
  "Commitment to MiniNature values: inclusion, stewardship, community",
  "Located in or near Ventura County, CA (expanding to other regions soon)",
];

const RESPONSIBILITIES = [
  {
    icon: "📅",
    title: "Monthly Meetups",
    body: "Organize at least one gathering per month. This can be a planting day, a walk through local reserves, a workshop, or a casual social meetup.",
  },
  {
    icon: "🌱",
    title: "Reserve Recruitment",
    body: "Actively identify potential reserve sites in your area and help interested neighbors through the application process.",
  },
  {
    icon: "📣",
    title: "Community Outreach",
    body: "Spread the word through social media, local events, farmers markets, and neighborhood newsletters. We provide templates and materials.",
  },
  {
    icon: "📊",
    title: "Quarterly Reporting",
    body: "Share a brief update each quarter on chapter activities, new reserves, and community engagement. Helps us track the movement.",
  },
  {
    icon: "🤝",
    title: "Volunteer Coordination",
    body: "Recruit and manage local volunteers for install days and maintenance events. We provide training on volunteer management.",
  },
  {
    icon: "🗺️",
    title: "Local Knowledge",
    body: "Be the go-to person for native plant questions in your area. Know which species thrive in your microclimate and where to source them.",
  },
];

const CURRENT_CHAPTERS = [
  { name: "Downtown Ventura", members: 12, reserves: 8 },
  { name: "Oxnard Shores", members: 8, reserves: 5 },
  { name: "Ojai Valley", members: 6, reserves: 4 },
  { name: "Camarillo", members: 5, reserves: 3 },
];

export default function StartAChapterPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-reserve-green text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 40% 60%, rgba(82,183,136,0.5) 0%, transparent 50%),
                               radial-gradient(circle at 75% 30%, rgba(232,168,56,0.3) 0%, transparent 40%)`,
            }}
          />
        </div>
        <div className="relative container-site">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-xs font-mono-accent uppercase tracking-widest mb-6 border border-white/20">
              <Flag size={12} />
              Lead the Movement
            </div>
            <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight mb-6">
              Start a{" "}
              <span className="text-hummingbird-gold italic">MiniNature Chapter.</span>
            </h1>
            <p className="text-sage text-lg md:text-xl leading-relaxed mb-8">
              Chapters are the grassroots engine of MiniNature. Lead a local team of reservists, organize events, and grow the native habitat network in your community.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#apply" className="btn btn-primary text-base px-7 py-3.5">
                Apply to Lead a Chapter
                <ArrowRight size={18} />
              </a>
              <a href="#what-is-a-chapter" className="btn btn-outline-white text-base px-7 py-3.5">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Chapter */}
      <section id="what-is-a-chapter" className="section-pad">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-3">
                About Chapters
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-forest mb-4">
                What Is a MiniNature Chapter?
              </h2>
              <p className="text-forest-mid leading-relaxed mb-4">
                A MiniNature chapter is a locally-led group of volunteers who organize habitat restoration activities in their neighborhood or city. Chapter leaders serve as the connective tissue between MiniNature&apos;s mission and on-the-ground action.
              </p>
              <p className="text-forest-mid leading-relaxed mb-4">
                Each chapter operates semi-independently, tailoring activities to local needs while staying connected to the broader MiniNature network. You decide when to meet, what events to host, and how to grow your local community of reservists.
              </p>
              <p className="text-forest-mid leading-relaxed mb-6">
                MiniNature provides the framework, training, materials, and ongoing support. You provide the local knowledge, energy, and passion to make it happen in your corner of Ventura County.
              </p>
              <div className="bg-mint-mist rounded-organic-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">🌿</div>
                  <div>
                    <h3 className="font-display font-semibold text-deep-forest mb-1">
                      Think of it like a local book club &mdash; but for native plants.
                    </h3>
                    <p className="text-sm text-forest-mid">
                      Regular meetups, shared learning, community building, and the satisfaction of watching your neighborhood transform one reserve at a time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Chapters Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-organic-lg p-6 shadow-card sticky top-24">
                <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-3">
                  Active Chapters
                </div>
                <h3 className="font-display font-semibold text-xl text-deep-forest mb-4">
                  Current Chapters
                </h3>
                <div className="space-y-3 mb-6">
                  {CURRENT_CHAPTERS.map((chapter) => (
                    <div key={chapter.name} className="flex items-center justify-between bg-fog-white rounded-xl p-3">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-mint-mist rounded-lg">
                          <MapPin size={14} className="text-reserve-green" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-deep-forest">{chapter.name}</div>
                          <div className="text-xs text-forest-mid">{chapter.members} members</div>
                        </div>
                      </div>
                      <div className="text-xs font-mono-accent text-forest-mid">
                        {chapter.reserves} reserves
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/explore/chapters" className="btn btn-outline text-sm w-full justify-center">
                  View All Chapters
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad bg-lichen-cream">
        <div className="container-site">
          <div className="text-center mb-10">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-2">
              Why Lead
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-forest">
              Benefits of Starting a Chapter
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CHAPTER_BENEFITS.map((benefit) => (
              <div key={benefit.title} className="card-organic bg-white p-6 border border-lichen-cream">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-mint-mist rounded-xl shrink-0">
                    <benefit.icon size={24} className="text-reserve-green" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-deep-forest mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-forest-mid leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-pad">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-3">
                What You Need
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-forest mb-4">
                Chapter Requirements
              </h2>
              <p className="text-forest-mid leading-relaxed mb-6">
                Starting a chapter does not require a degree in ecology or years of experience. It requires passion, commitment, and a few friends who share your vision.
              </p>
              <div className="space-y-3">
                {REQUIREMENTS.map((req) => (
                  <div key={req} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                    <div className="mt-0.5 p-0.5 bg-adoptable rounded-full shrink-0">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-sm text-forest-mid">{req}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-reserve-green rounded-organic-lg p-8 text-white">
              <div className="text-xs font-mono-accent uppercase tracking-widest text-sage mb-4">
                What You Get
              </div>
              <h3 className="font-display font-bold text-2xl mb-6">
                MiniNature Provides
              </h3>
              <div className="space-y-4">
                {[
                  "Chapter leader training program (virtual, self-paced)",
                  "Branded materials: flyers, social templates, signage",
                  "Access to MNR Kit inventory for your chapter area",
                  "Direct line to MiniNature leadership for support",
                  "Monthly chapter leader calls with other leaders",
                  "Event planning toolkit and volunteer management resources",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 p-0.5 bg-hummingbird-gold rounded-full shrink-0">
                      <Check size={12} className="text-reserve-green" />
                    </div>
                    <span className="text-sm text-sage">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Leader Responsibilities */}
      <section className="section-pad bg-mint-mist">
        <div className="container-site">
          <div className="text-center mb-10">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-2">
              The Role
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-forest">
              Chapter Leader Responsibilities
            </h2>
            <p className="text-forest-mid max-w-lg mx-auto mt-3">
              Being a chapter leader is rewarding but takes commitment. Here is what you can expect.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {RESPONSIBILITIES.map((resp) => (
              <div key={resp.title} className="bg-white rounded-organic p-6 shadow-card">
                <div className="text-3xl mb-3">{resp.icon}</div>
                <h3 className="font-display font-semibold text-lg text-deep-forest mb-2">
                  {resp.title}
                </h3>
                <p className="text-sm text-forest-mid leading-relaxed">
                  {resp.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white rounded-organic-lg p-6 shadow-card text-center">
            <p className="text-sm text-forest-mid">
              <span className="font-semibold text-deep-forest">Time commitment:</span>{" "}
              Approximately 5&ndash;10 hours per month, depending on event frequency and chapter size. Most leaders find it energizing, not draining.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="section-pad">
        <div className="container-site max-w-2xl">
          <div className="text-center mb-10">
            <div className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-3">
              Get Started
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-deep-forest mb-3">
              Apply to Start a Chapter
            </h2>
            <p className="text-forest-mid">
              Tell us about yourself and your vision. We&apos;ll schedule a call to discuss next steps.
            </p>
          </div>

          <ChapterApplicationForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-pad bg-reserve-green text-white">
        <div className="container-site text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-4">
            Not Ready to Lead a Chapter?
          </h2>
          <p className="text-sage text-sm max-w-xl mx-auto mb-8">
            There are many ways to get involved with MiniNature. Start your own reserve, volunteer at install days, or join an existing chapter near you.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/get-involved/make-a-reserve" className="btn btn-primary text-base px-7 py-3.5">
              Make a Reserve
              <ArrowRight size={18} />
            </Link>
            <Link href="/get-involved" className="btn btn-outline-white text-base px-7 py-3.5">
              All Ways to Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
