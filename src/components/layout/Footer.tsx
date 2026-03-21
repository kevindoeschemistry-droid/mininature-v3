import Link from "next/link";
import { MapPin, Mail, Instagram, Youtube, Leaf, TreePine, Users, Heart, Building, BookOpen } from "lucide-react";
import NewsletterMiniForm from "@/components/forms/NewsletterMiniForm";

export default function Footer() {
  return (
    <footer className="bg-deep-forest text-white">
      <div className="container-site pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-reserve-green flex items-center justify-center">
                <Leaf size={16} className="text-sage" />
              </div>
              <span className="font-display font-bold text-lg">MiniNature Reserve</span>
            </div>
            <p className="text-sm text-sage leading-relaxed mb-6 max-w-xs">
              Restoring urban biodiversity, one city block at a time. We create and support native-plant habitats in urban environments across California.
            </p>
            <div className="flex gap-3 mb-6">
              <a href="https://instagram.com/mininaturereserve" target="_blank" rel="noopener" className="p-2 rounded-full bg-forest-mid hover:bg-reserve-green transition-colors">
                <Instagram size={16} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener" className="p-2 rounded-full bg-forest-mid hover:bg-reserve-green transition-colors">
                <Youtube size={16} />
              </a>
              <a href="mailto:info@mininature.org" className="p-2 rounded-full bg-forest-mid hover:bg-reserve-green transition-colors">
                <Mail size={16} />
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs text-sage">
              <MapPin size={12} />
              <span>Oxnard, CA · Ventura County</span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-mono-accent font-medium uppercase tracking-widest text-sage mb-4">Explore</h3>
            <ul className="space-y-2">
              {[
                { label: "Find a Chapter", href: "/explore/chapters" },
                { label: "Find a Reserve", href: "/explore/reserves" },
                { label: "Community Events", href: "/explore/events" },
                { label: "Programs", href: "/explore/programs" },
                { label: "Stories & News", href: "/explore/stories" },
                { label: "Blog", href: "/explore/blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-lichen-cream hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-xs font-mono-accent font-medium uppercase tracking-widest text-sage mb-4">Get Involved</h3>
            <ul className="space-y-2">
              {[
                { label: "Make a Reserve", href: "/get-involved/make-a-reserve" },
                { label: "Volunteer", href: "/get-involved/volunteer" },
                { label: "MNR Kit Giveaway", href: "/get-involved/mnr-kit" },
                { label: "Start a Chapter", href: "/get-involved/start-a-chapter" },
                { label: "Reservist Training", href: "/get-involved/training" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-lichen-cream hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Give + Services */}
          <div>
            <h3 className="text-xs font-mono-accent font-medium uppercase tracking-widest text-sage mb-4">Give</h3>
            <ul className="space-y-2 mb-6">
              {[
                { label: "Donate", href: "/give/donate" },
                { label: "Adopt an MNR", href: "/give/adopt" },
                { label: "Run a Fundraiser", href: "/give/fundraisers" },
                { label: "Fund a New MNR", href: "/give/fund-new-mnr" },
                { label: "Registry", href: "/give/registry" },
                { label: "Memorial Giving", href: "/give/memorial" },
                { label: "Legacy Donation", href: "/give/legacy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-lichen-cream hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-xs font-mono-accent font-medium uppercase tracking-widest text-sage mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                { label: "Landscaping", href: "/services/landscaping" },
                { label: "For Municipalities", href: "/services/municipalities" },
                { label: "Consulting", href: "/services/consulting" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-lichen-cream hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About + Stay Connected */}
          <div>
            <h3 className="text-xs font-mono-accent font-medium uppercase tracking-widest text-sage mb-4">About</h3>
            <ul className="space-y-2 mb-6">
              {[
                { label: "Our Mission", href: "/about/mission" },
                { label: "Our Team", href: "/about/team" },
                { label: "Impact & Data", href: "/about/impact" },
                { label: "Press & Media", href: "/about/press" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-lichen-cream hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-xs font-mono-accent font-medium uppercase tracking-widest text-sage mb-4">Stay Connected</h3>
            <ul className="space-y-2">
              {[
                { label: "Newsletter", href: "/stay-connected/newsletter" },
                { label: "Discord", href: "/stay-connected/discord" },
                { label: "Social Media", href: "/stay-connected/social" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-lichen-cream hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter strip */}
        <div className="mt-12 pt-8 border-t border-forest-mid">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="text-sm font-medium mb-1">Get field notes from the reserves</div>
              <div className="text-xs text-sage">Monthly stories, plant spotlights, and events.</div>
            </div>
            <div className="w-full md:w-auto md:min-w-[320px]">
              <NewsletterMiniForm darkMode={true} />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-forest-mid flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-sage">
          <div>© {new Date().getFullYear()} MiniNature Reserve. All rights reserved. 501(c)(3) nonprofit.</div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/shop" className="hover:text-white transition-colors">Shop</Link>
            <Link href="/stay-connected/newsletter" className="hover:text-white transition-colors">Newsletter</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
