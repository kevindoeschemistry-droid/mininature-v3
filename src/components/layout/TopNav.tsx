"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Menu, X, ChevronDown, Search, MapPin, Users, Calendar, BookOpen, Leaf, TreePine,
  Heart, Building, Globe, ShoppingBag, Newspaper, PenLine, Package, Flag, GraduationCap,
  Wrench, Landmark, BookOpenCheck, Scissors, HardHat, MessageSquare, Gift, ListChecks,
  Ribbon, HeartHandshake, Mail, MessageCircle, Share2, Award, Handshake, School, Percent,
  Sprout, FlowerIcon,
} from "lucide-react";

const NAV_ITEMS = [
  {
    label: "Explore",
    href: "/explore",
    children: [
      { label: "Find a Chapter", href: "/explore/chapters", icon: Flag, desc: "Local chapters near you" },
      { label: "Find a Reserve", href: "/explore/reserves", icon: MapPin, desc: "Map & profiles of all MNRs" },
      { label: "Reserve Map", href: "/explore/map", icon: Globe, desc: "Interactive map of all reserves" },
      { label: "Community Events", href: "/explore/events", icon: Calendar, desc: "Attend upcoming events" },
      { label: "Community Nurseries", href: "/explore/nurseries", icon: Leaf, desc: "Local native plant sources" },
      { label: "Programs", href: "/explore/programs", icon: BookOpenCheck, desc: "Our programs & initiatives" },
      { label: "Stories & News", href: "/explore/stories", icon: Newspaper, desc: "News, press, and field notes" },
      { label: "Blog", href: "/explore/blog", icon: PenLine, desc: "Articles & reflections" },
    ],
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    children: [
      { label: "Make a Reserve", href: "/get-involved/make-a-reserve", icon: TreePine, desc: "Turn any space into habitat", highlight: true },
      { label: "MNR Kit Giveaway", href: "/get-involved/mnr-kit", icon: Package, desc: "Get a free MNR starter kit" },
      { label: "Start a Chapter", href: "/get-involved/start-a-chapter", icon: Flag, desc: "Lead a local chapter" },
      { label: "Volunteer", href: "/get-involved/volunteer", icon: Users, desc: "Volunteer or join VeriServe" },
      { label: "Reservist Training", href: "/get-involved/training", icon: BookOpen, desc: "Become a certified reservist" },
    ],
  },
  {
    label: "Partner",
    href: "/partner",
    children: [
      { label: "Host an MNR Installation", href: "/partner/host-installation", icon: Building, desc: "Bring an MNR to your space" },
      { label: "Honorary MNR Status", href: "/partner/honorary-status", icon: Award, desc: "Apply for honorary status" },
      { label: "Sponsorship Opportunities", href: "/partner/sponsorship", icon: Handshake, desc: "Sponsor reserves & programs" },
      { label: "Schools on VeriServe", href: "/partner/schools-veriserve", icon: School, desc: "Get your school involved" },
      { label: "1% for the Planet", href: "/partner/one-percent", icon: Percent, desc: "Join the 1% commitment" },
      { label: "Other Partnerships", href: "/partner/other", icon: Globe, desc: "Explore more ways to partner" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Landscaping", href: "/services/landscaping", icon: Sprout, desc: "Design, install & maintain MNRs" },
      { label: "For Municipalities", href: "/services/municipalities", icon: Landmark, desc: "City & public land services" },
      { label: "Educational Activities", href: "/services/education", icon: GraduationCap, desc: "Book a learning experience" },
      { label: "Contract Growing", href: "/services/horticulture", icon: FlowerIcon, desc: "Growing & horticultural services" },
      { label: "Trail Maintenance", href: "/services/trail-maintenance", icon: HardHat, desc: "Trail upkeep & restoration" },
      { label: "Weed Abatement", href: "/services/weed-abatement", icon: Scissors, desc: "Invasive species management" },
      { label: "Consulting", href: "/services/consulting", icon: MessageSquare, desc: "Expert guidance & planning" },
    ],
  },
  {
    label: "Give",
    href: "/give",
    children: [
      { label: "Donate", href: "/give/donate", icon: Heart, desc: "Fund habitat, directly" },
      { label: "Adopt an MNR", href: "/give/adopt", icon: HeartHandshake, desc: "Name a habitat for someone special" },
      { label: "Run a Fundraiser", href: "/give/fundraisers", icon: Globe, desc: "Birthday, school, or workplace drive" },
      { label: "Fund a New MNR", href: "/give/fund-new-mnr", icon: TreePine, desc: "Help plant a new garden" },
      { label: "Registry", href: "/give/registry", icon: ListChecks, desc: "In-kind donation wishlist" },
      { label: "Memorial Giving", href: "/give/memorial", icon: Ribbon, desc: "Honor a loved one" },
      { label: "Legacy Donation", href: "/give/legacy", icon: Gift, desc: "Plan a lasting gift" },
    ],
  },
  {
    label: "Stay Connected",
    href: "/stay-connected",
    children: [
      { label: "Join our Newsletter", href: "/stay-connected/newsletter", icon: Mail, desc: "Monthly stories & updates" },
      { label: "Join our Discord", href: "/stay-connected/discord", icon: MessageCircle, desc: "Chat with the community" },
      { label: "Social Media", href: "/stay-connected/social", icon: Share2, desc: "Follow us everywhere" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Mission", href: "/about/mission", icon: Leaf, desc: "What we stand for" },
      { label: "Native Plants", href: "/about/native-plants", icon: TreePine, desc: "Species guide & ecology" },
      { label: "Our History", href: "/about/history", icon: BookOpen, desc: "How MiniNature started" },
      { label: "Our Team", href: "/about/team", icon: Users, desc: "Staff, board & advisors" },
      { label: "Impact & Data", href: "/about/impact", icon: Globe, desc: "Metrics & outcomes" },
      { label: "Press & Media", href: "/about/press", icon: Newspaper, desc: "Press kit & media coverage" },
    ],
  },
];

export default function TopNav() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <HummingbirdLogo />
              <div className="leading-tight">
                <div className="font-display font-bold text-reserve-green text-sm leading-none">MiniNature</div>
                <div className="font-display text-xs text-forest-mid leading-none">Reserve</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-deep-forest hover:text-reserve-green rounded-lg hover:bg-mint-mist transition-colors">
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${openMenu === item.label ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Mega dropdown */}
                  {openMenu === item.label && (
                    <div
                      className="absolute top-full left-0 mt-1 bg-white rounded-organic shadow-map-popup border border-lichen-cream min-w-[280px] p-3 grid gap-1"
                      style={{
                        animation: "fadeUp 0.15s ease-out",
                        gridTemplateColumns: "1fr",
                      }}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`flex items-start gap-3 p-3 rounded-xl hover:bg-mint-mist transition-colors group ${
                            "highlight" in child && child.highlight ? "bg-mint-mist border border-sage/30" : ""
                          }`}
                          onClick={() => setOpenMenu(null)}
                        >
                          <div className="mt-0.5 p-1.5 rounded-lg bg-lichen-cream group-hover:bg-sage/20">
                            <child.icon size={14} className="text-reserve-green" />
                          </div>
                          <div>
                            <div className={`text-sm font-medium text-deep-forest group-hover:text-reserve-green ${
                              "highlight" in child && child.highlight ? "text-reserve-green" : ""
                            }`}>
                              {child.label}
                              {"highlight" in child && child.highlight && (
                                <span className="ml-2 text-xs bg-hummingbird-gold text-reserve-green px-1.5 py-0.5 rounded-full">Key action</span>
                              )}
                            </div>
                            <div className="text-xs text-forest-mid mt-0.5">{child.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/shop"
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-deep-forest hover:text-reserve-green rounded-lg hover:bg-mint-mist transition-colors"
              >
                Shop
              </Link>
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <button className="hidden md:flex p-2 rounded-full hover:bg-mint-mist text-deep-forest transition-colors">
                <Search size={18} />
              </button>
              <Link
                href="/get-involved/make-a-reserve"
                className="hidden md:flex btn btn-primary text-sm"
              >
                Make a Reserve
              </Link>
              <Link
                href="/give/donate"
                className="btn btn-secondary text-sm"
              >
                Donate
              </Link>
              {/* Mobile menu toggle */}
              <button
                className="lg:hidden p-2 rounded-full hover:bg-mint-mist text-deep-forest"
                onClick={() => setMobileOpen(true)}
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] flex">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative z-10 bg-white w-[320px] h-full overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-lichen-cream">
              <div className="flex items-center gap-2">
                <HummingbirdLogo small />
                <span className="font-display font-bold text-reserve-green">MiniNature</span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-full hover:bg-mint-mist"
              >
                <X size={20} />
              </button>
            </div>

            {/* Start a Reserve CTA */}
            <div className="p-4 border-b border-lichen-cream">
              <Link
                href="/get-involved/make-a-reserve"
                className="btn btn-primary w-full justify-center text-sm"
                onClick={() => setMobileOpen(false)}
              >
                <TreePine size={16} />
                Make a Reserve
              </Link>
            </div>

            {/* Nav accordion */}
            <div className="p-4">
              {NAV_ITEMS.map((item) => (
                <MobileNavGroup key={item.label} item={item} onClose={() => setMobileOpen(false)} />
              ))}
              <Link
                href="/shop"
                className="flex items-center gap-2 py-3 text-sm font-medium text-deep-forest hover:text-reserve-green border-b border-lichen-cream"
                onClick={() => setMobileOpen(false)}
              >
                <ShoppingBag size={14} />
                Shop
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed header + breathing room */}
      <div className="h-24 lg:h-28" />
    </>
  );
}

function MobileNavGroup({ item, onClose }: { item: typeof NAV_ITEMS[0]; onClose: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-lichen-cream last:border-0">
      <button
        className="flex items-center justify-between w-full py-3 text-sm font-medium text-deep-forest"
        onClick={() => setOpen(!open)}
      >
        {item.label}
        <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="pb-3 space-y-1">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="flex items-center gap-2 px-3 py-2 text-sm text-forest-mid hover:text-reserve-green hover:bg-mint-mist rounded-lg"
              onClick={onClose}
            >
              <child.icon size={14} />
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function HummingbirdLogo({ small = false }: { small?: boolean }) {
  const size = small ? 28 : 36;
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className="text-reserve-green">
      {/* Simplified hummingbird silhouette */}
      <ellipse cx="55" cy="50" rx="28" ry="12" fill="currentColor" />
      <ellipse cx="30" cy="46" rx="16" ry="8" fill="currentColor" transform="rotate(-20 30 46)" />
      <ellipse cx="78" cy="52" rx="18" ry="6" fill="currentColor" transform="rotate(15 78 52)" />
      <line x1="22" y1="44" x2="8" y2="40" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <ellipse cx="70" cy="35" rx="12" ry="8" fill="currentColor" transform="rotate(-30 70 35)" />
      <ellipse cx="70" cy="65" rx="12" ry="8" fill="currentColor" transform="rotate(30 70 65)" />
      <circle cx="32" cy="43" r="3" fill="#E8F1EC" />
    </svg>
  );
}
