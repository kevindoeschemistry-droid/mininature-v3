import Link from "next/link";
import { TreePine, Users, Heart, ArrowRight } from "lucide-react";

const PANELS = [
  {
    icon: TreePine,
    color: "bg-reserve-green",
    iconColor: "text-sage",
    title: "Make a Reserve",
    description:
      "Transform any small space into thriving native habitat. Free kit, training, and community support included.",
    cta: "Get Started",
    href: "/get-involved/make-a-reserve",
    ctaStyle: "btn btn-primary",
  },
  {
    icon: Users,
    color: "bg-california-poppy",
    iconColor: "text-white",
    title: "Volunteer Near You",
    description:
      "Join a community install day, help maintain a reserve, or lead your own. Events happen monthly.",
    cta: "Sign Up",
    href: "/get-involved/volunteer",
    ctaStyle: "btn btn-outline-white",
  },
  {
    icon: Heart,
    color: "bg-hummingbird-gold",
    iconColor: "text-reserve-green",
    title: "Support a Reserve",
    description:
      "Adopt a reserve for $500/year. Your support covers watering, maintenance, and an acknowledgment sign.",
    cta: "Donate",
    href: "/give/donate",
    ctaStyle: "btn btn-secondary",
  },
];

export default function FinalCTA() {
  return (
    <section className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {PANELS.map((panel, idx) => (
          <div
            key={idx}
            className={`${panel.color} p-12 lg:p-16 flex flex-col`}
          >
            <panel.icon
              size={40}
              className={`${panel.iconColor} mb-6`}
            />
            <h3 className="font-display font-bold text-2xl text-white mb-3">
              {panel.title}
            </h3>
            <p
              className={`text-sm leading-relaxed mb-8 flex-1 ${
                panel.color === "bg-hummingbird-gold"
                  ? "text-deep-forest/80"
                  : "text-white/80"
              }`}
            >
              {panel.description}
            </p>
            <Link
              href={panel.href}
              className={`${panel.ctaStyle} self-start`}
            >
              {panel.cta}
              <ArrowRight size={15} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
