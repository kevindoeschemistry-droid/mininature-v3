import type { Metadata } from "next";
import Link from "next/link";
import { TreePine, Users, Heart, BookOpen, Package, School, Globe, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Start a reserve, volunteer, adopt an MNR, or join a training. There are many ways to be part of the MiniNature movement.",
};

const PATHWAYS = [
  {
    icon: TreePine,
    color: "bg-reserve-green",
    title: "Make a Reserve",
    description: "Transform any small space into a native plant habitat. Free kit, community install support, and permanent map listing included.",
    cta: "Make a Reserve",
    href: "/get-involved/make-a-reserve",
    highlight: true,
    tag: "Core action",
  },
  {
    icon: Users,
    color: "bg-forest-mid",
    title: "Volunteer",
    description: "Join a community install day, help maintain an existing reserve, or lead volunteer efforts in your neighborhood.",
    cta: "Sign Up to Volunteer",
    href: "/get-involved/volunteer",
    tag: "Open now",
  },
  {
    icon: Heart,
    color: "bg-adoptable",
    title: "Adopt an MNR",
    description: "Sponsor a reserve for $500/year. Your name or organization goes on the sign, and you receive quarterly stewardship updates.",
    cta: "Adopt a Reserve",
    href: "/get-involved/adopt",
    tag: "3 available",
  },
  {
    icon: Package,
    color: "bg-hummingbird-gold",
    title: "Get an MNR Kit",
    description: "Request a free native plant installation kit for your qualifying space. Includes plant selection guide and soil amendment.",
    cta: "Request a Kit",
    href: "/get-involved/kit",
    tag: "Free",
  },
  {
    icon: BookOpen,
    color: "bg-california-poppy",
    title: "Reservist Training",
    description: "Become a certified MiniNature Reservist. Learn installation technique, native plant identification, and stewardship practices.",
    cta: "Join the Course",
    href: "/get-involved/training",
    tag: "Self-paced",
  },
  {
    icon: School,
    color: "bg-sage",
    title: "Schools & ViviServe",
    description: "Bring native habitat to your school campus with curriculum support, biodiversity tracking tools, and student volunteer programs.",
    cta: "School Programs",
    href: "/get-involved/schools",
    tag: "K–12",
  },
  {
    icon: MapPin,
    color: "bg-deep-forest",
    title: "Register Your Garden",
    description: "Already have a native plant garden? Register it as an Honorary MiniNature Reserve and join the map with an official sign.",
    cta: "Register Now",
    href: "/get-involved/register",
    tag: "Existing gardens",
  },
  {
    icon: Globe,
    color: "bg-forest-mid",
    title: "Start a Chapter",
    description: "Bring MiniNature to your city. We support chapter leaders with training, materials, and national network resources.",
    cta: "Start a Chapter",
    href: "/get-involved/start-a-chapter",
    tag: "Leadership",
  },
];

export default function GetInvolvedPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Header */}
      <div className="bg-reserve-green text-white py-16">
        <div className="container-site">
          <div className="text-xs font-mono-accent uppercase tracking-widest text-sage mb-3">Get Involved</div>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
            Many Ways to Join the Movement
          </h1>
          <p className="text-sage text-lg max-w-xl">
            Whether you have a small strip of land, a weekend to give, or a whole campus to transform — there&apos;s a place for you in the MiniNature network.
          </p>
        </div>
      </div>

      {/* Pathways grid */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {PATHWAYS.map((pathway) => (
            <Link key={pathway.href} href={pathway.href} className="group block">
              <div className={`card-organic bg-white h-full flex flex-col ${pathway.highlight ? "ring-2 ring-reserve-green" : ""}`}>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${pathway.color} w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <pathway.icon size={18} className="text-white" />
                    </div>
                    <span className="text-xs bg-lichen-cream text-forest-mid px-2.5 py-1 rounded-full font-medium">
                      {pathway.tag}
                    </span>
                  </div>
                  <h2 className="font-display font-semibold text-lg text-deep-forest mb-2 group-hover:text-reserve-green transition-colors">
                    {pathway.title}
                  </h2>
                  <p className="text-sm text-forest-mid leading-relaxed flex-1 mb-4">
                    {pathway.description}
                  </p>
                  <div className="flex items-center gap-1 text-sm font-medium text-reserve-green">
                    {pathway.cta}
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-mint-mist rounded-organic-lg p-10 text-center">
          <h2 className="font-display font-bold text-2xl text-deep-forest mb-3">
            Not sure where to start?
          </h2>
          <p className="text-forest-mid mb-6 max-w-md mx-auto text-sm">
            The most impactful first step is usually starting or adopting a reserve. It takes 5 minutes to apply — we handle the rest.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/get-involved/make-a-reserve" className="btn btn-primary">
              <TreePine size={16} />
              Make a Reserve
            </Link>
            <Link href="/get-involved/volunteer" className="btn btn-outline">
              <Users size={16} />
              Volunteer First
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
