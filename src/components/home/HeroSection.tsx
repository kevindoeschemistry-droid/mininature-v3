"use client";

import Link from "next/link";
import { MapPin, TreePine, Users, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const hummingbirdRef = useRef<SVGSVGElement>(null);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-end overflow-hidden">
      {/* Background: gradient from gray-urban to rich green */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] via-reserve-green to-deep-forest" />

      {/* Animated color bloom overlay — simulates habitat spreading */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 70% 60%, rgba(82,183,136,0.4) 0%, transparent 60%),
            radial-gradient(ellipse 40% 30% at 55% 65%, rgba(232,168,56,0.2) 0%, transparent 50%)
          `,
        }}
      />

      {/* Urban texture overlay (subtle grid) */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Hummingbird SVG animation */}
      <div className="absolute top-1/3 right-[15%] animate-hummingbird hidden lg:block">
        <HummingbirdHero />
      </div>

      {/* Floral scatter — native plants emerging */}
      <div className="absolute bottom-0 right-0 opacity-30 hidden lg:block">
        <FloralAccent />
      </div>

      {/* Hero content */}
      <div className="relative z-10 container-site pb-20 pt-24 lg:pb-28">
        {/* Movement tag */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-mono-accent uppercase tracking-widest mb-6 border border-white/20">
          <div className="w-2 h-2 rounded-full bg-adoptable animate-pulse" />
          21 reserves · 6 neighborhoods · growing
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold text-white text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 max-w-3xl">
          Restoring Urban
          <br />
          <span className="text-hummingbird-gold italic">Biodiversity,</span>
          <br />
          One City Block at a Time.
        </h1>

        {/* Subheading */}
        <p className="text-sage text-lg md:text-xl max-w-xl leading-relaxed mb-10">
          MiniNature Reserves are small native-plant habitats that bring pollinators,
          birds, and life back to cities — created and cared for by communities like yours.
        </p>

        {/* CTA cluster */}
        <div className="flex flex-wrap gap-3">
          <Link href="/explore/reserves" className="btn btn-primary text-base px-6 py-3">
            <MapPin size={18} />
            Explore Reserves
          </Link>
          <Link href="/get-involved/make-a-reserve" className="btn btn-outline-white text-base px-6 py-3">
            <TreePine size={18} />
            Make a Reserve
          </Link>
          <Link href="/get-involved/volunteer" className="btn btn-outline-white text-base px-6 py-3">
            <Users size={18} />
            Volunteer
          </Link>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex items-center gap-2 text-sage/60 text-xs">
          <div className="w-px h-6 bg-sage/30" />
          <span className="font-mono-accent">scroll to explore</span>
        </div>
      </div>
    </section>
  );
}

function HummingbirdHero() {
  return (
    <svg
      width="180"
      height="180"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <ellipse cx="110" cy="100" rx="45" ry="18" fill="#E8F1EC" fillOpacity="0.9" />
      {/* Head */}
      <ellipse cx="68" cy="90" rx="20" ry="16" fill="#E8F1EC" fillOpacity="0.9" />
      {/* Beak */}
      <line x1="50" y1="87" x2="20" y2="82" stroke="#E8A838" strokeWidth="3" strokeLinecap="round" />
      {/* Eye */}
      <circle cx="60" cy="86" r="4" fill="#1B4332" />
      <circle cx="61" cy="85" r="1.5" fill="white" />
      {/* Tail */}
      <ellipse cx="152" cy="105" rx="20" ry="7" fill="#8FAF7E" fillOpacity="0.8" transform="rotate(10 152 105)" />
      {/* Upper wing */}
      <ellipse cx="115" cy="75" rx="35" ry="10" fill="#52B788" fillOpacity="0.7" transform="rotate(-35 115 75)" />
      {/* Lower wing */}
      <ellipse cx="115" cy="125" rx="35" ry="10" fill="#52B788" fillOpacity="0.5" transform="rotate(35 115 125)" />
      {/* Throat flash */}
      <ellipse cx="80" cy="96" rx="12" ry="8" fill="#E86A2E" fillOpacity="0.8" />
    </svg>
  );
}

function FloralAccent() {
  return (
    <svg width="400" height="300" viewBox="0 0 400 300" fill="none">
      {/* California Fuchsia stems and flowers */}
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} transform={`translate(${i * 70 + 20}, 0)`}>
          <line x1="30" y1="300" x2="25" y2={180 - i * 20} stroke="#52B788" strokeWidth="2" />
          <ellipse cx="22" cy={170 - i * 20} rx="8" ry="20" fill="#E86A2E" fillOpacity="0.6" transform={`rotate(${-15 + i * 5} 22 ${170 - i * 20})`} />
        </g>
      ))}
    </svg>
  );
}
