"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, MapPin, Users, Clock, Leaf, ArrowRight, Filter } from "lucide-react";
import NewsletterMiniForm from "@/components/forms/NewsletterMiniForm";
import { EVENTS } from "@/lib/data";

const EVENT_TYPE_LABELS: Record<string, { label: string; color: string; emoji: string }> = {
  install:          { label: "Install Day",         color: "bg-reserve-green/10 text-reserve-green",     emoji: "🌱" },
  volunteer:        { label: "Volunteer",            color: "bg-sage/20 text-reserve-green",              emoji: "🤝" },
  workshop:         { label: "Workshop",             color: "bg-hummingbird-gold/15 text-deep-forest",    emoji: "📚" },
  indigenous_class: { label: "Indigenous Knowledge", color: "bg-california-poppy/10 text-deep-forest",   emoji: "🌿" },
  community:        { label: "Community",            color: "bg-mint-mist text-reserve-green",            emoji: "🏘️" },
  school:           { label: "School Program",       color: "bg-lichen-cream text-deep-forest",           emoji: "🏫" },
  fundraiser:       { label: "Fundraiser",           color: "bg-adoptable/10 text-reserve-green",         emoji: "💚" },
};

const FILTER_LABEL_TO_TYPE: Record<string, string | null> = {
  "All": null,
  "Install Day": "install",
  "Volunteer": "volunteer",
  "Workshop": "workshop",
  "Indigenous Knowledge": "indigenous_class",
  "School Program": "school",
  "Community": "community",
  "Fundraiser": "fundraiser",
};

const FILTER_OPTIONS = Object.keys(FILTER_LABEL_TO_TYPE);

function formatTime(iso: string) {
  const d = new Date(iso);
  return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}

const UPCOMING_EVENTS = [
  ...EVENTS,
  {
    id: "4",
    slug: "native-bee-workshop-june",
    title: "Native Bee Identification Workshop",
    description: "Learn to identify and support the 80+ native bee species found in Ventura County. We'll walk through reserve sites and observe live specimens with a local entomologist.",
    eventType: "workshop" as const,
    locationName: "La Mariposa Reserve",
    address: "500 W 5th Street, Oxnard, CA",
    startAt: "2025-06-07T09:00:00",
    endAt: "2025-06-07T11:30:00",
    capacity: 20,
    rsvpCount: 8,
    rsvpUrl: "https://www.eventbrite.com/o/mininature-reserve-30777988501",
  },
  {
    id: "5",
    slug: "summer-school-reserve-planting",
    title: "Summer School Reserve Planting",
    description: "Help students design and install a new native plant garden at a Ventura County elementary school. A family-friendly event welcoming all ages.",
    eventType: "school" as const,
    locationName: "Fremont Elementary School",
    address: "2000 Fremont Ave, Oxnard, CA",
    startAt: "2025-06-21T10:00:00",
    endAt: "2025-06-21T13:00:00",
    capacity: 30,
    rsvpCount: 14,
    rsvpUrl: "https://www.eventbrite.com/o/mininature-reserve-30777988501",
  },
];

export default function EventsPageClient() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filteredEvents = selectedFilter === "All"
    ? UPCOMING_EVENTS
    : UPCOMING_EVENTS.filter((e) => e.eventType === FILTER_LABEL_TO_TYPE[selectedFilter]);

  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-reserve-green text-white section-pad">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Calendar size={16} className="text-sage" />
              <span className="text-xs font-mono-accent uppercase tracking-widest text-sage">Community Calendar</span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Events &amp; Install Days
            </h1>
            <p className="text-sage text-lg leading-relaxed">
              Join a planting day, attend a workshop, or learn from indigenous plant knowledge-keepers.
              All skill levels welcome — we provide tools, plants, and training.
            </p>
          </div>
        </div>
      </section>

      {/* Filter bar */}
      <div className="sticky top-[64px] z-30 bg-white border-b border-lichen-cream shadow-sm">
        <div className="container-site py-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <span className="flex items-center gap-1 text-xs text-forest-mid shrink-0 mr-1">
              <Filter size={12} /> Filter:
            </span>
            {FILTER_OPTIONS.map((f) => (
              <button
                key={f}
                onClick={() => setSelectedFilter(f)}
                className={`shrink-0 text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                  f === selectedFilter
                    ? "bg-reserve-green text-white border-reserve-green"
                    : "bg-white text-forest-mid border-lichen-cream hover:border-reserve-green hover:text-reserve-green"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Eventbrite embed */}
      <div className="bg-hummingbird-gold/10 border-b border-hummingbird-gold/30">
        <div className="container-site py-6">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-2xl">📅</span>
            <div>
              <p className="text-sm font-medium text-deep-forest">
                Browse &amp; RSVP to upcoming events
              </p>
              <p className="text-xs text-forest-mid">
                Set reminders and find exact addresses for all upcoming install days, workshops, and community events.
              </p>
            </div>
          </div>
          <div className="rounded-organic overflow-hidden border border-lichen-cream bg-white">
            <iframe
              src="https://www.eventbrite.com/o/mininature-reserve-30777988501"
              width="100%"
              height="500"
              frameBorder="0"
              className="w-full"
              title="MiniNature Reserve Events on Eventbrite"
              allow="payment"
            />
          </div>
        </div>
      </div>

      <div className="container-site py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Event list */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-display font-semibold text-deep-forest text-xl">
                Upcoming Events <span className="text-forest-mid font-sans font-normal text-base">({filteredEvents.length})</span>
              </h2>
            </div>

            {filteredEvents.length === 0 && (
              <div className="card-organic bg-white p-8 text-center">
                <p className="text-forest-mid text-sm">No upcoming events match this filter. Check back soon!</p>
              </div>
            )}

            {filteredEvents.map((event) => {
              const typeInfo = EVENT_TYPE_LABELS[event.eventType] || EVENT_TYPE_LABELS.community;
              const spotsLeft = (event.capacity ?? 0) - event.rsvpCount;
              const pctFull = event.capacity ? Math.round((event.rsvpCount / event.capacity) * 100) : 0;

              return (
                <div key={event.id} className="card-organic bg-white p-6 flex flex-col md:flex-row gap-5">
                  {/* Date block */}
                  <div className="shrink-0 w-16 text-center">
                    <div className="bg-mint-mist rounded-xl p-2">
                      <div className="text-xs font-mono-accent uppercase text-forest-mid">
                        {new Date(event.startAt).toLocaleDateString("en-US", { month: "short" })}
                      </div>
                      <div className="font-display font-bold text-2xl text-deep-forest leading-none">
                        {new Date(event.startAt).getDate()}
                      </div>
                      <div className="text-xs text-forest-mid">
                        {new Date(event.startAt).toLocaleDateString("en-US", { weekday: "short" })}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <span className={`reserve-type-badge mb-2 inline-flex ${typeInfo.color}`}>
                          {typeInfo.emoji} {typeInfo.label}
                        </span>
                        <h3 className="font-display font-semibold text-deep-forest text-lg leading-tight">
                          {event.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-forest-mid leading-relaxed mb-3 line-clamp-2">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-forest-mid mb-4">
                      <div className="flex items-center gap-1">
                        <Clock size={11} />
                        <span>{formatTime(event.startAt)} – {formatTime(event.endAt)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={11} />
                        <span>{event.locationName}</span>
                      </div>
                      {event.capacity && (
                        <div className="flex items-center gap-1">
                          <Users size={11} />
                          <span>{event.rsvpCount}/{event.capacity} RSVPs</span>
                        </div>
                      )}
                    </div>

                    {/* RSVP bar */}
                    {event.capacity && (
                      <div className="mb-4">
                        <div className="h-1.5 bg-lichen-cream rounded-full overflow-hidden">
                          <div
                            className="h-full bg-adoptable rounded-full transition-all"
                            style={{ width: `${pctFull}%` }}
                          />
                        </div>
                        <div className="text-xs text-forest-mid mt-1">
                          {spotsLeft > 0 ? `${spotsLeft} spots remaining` : "Event full — join waitlist"}
                        </div>
                      </div>
                    )}

                    <a
                      href={event.rsvpUrl || "https://www.eventbrite.com/o/mininature-reserve-30777988501"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary text-sm"
                    >
                      RSVP Free
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick RSVP CTA */}
            <div className="card-organic bg-reserve-green text-white p-6">
              <Leaf size={20} className="text-sage mb-3" />
              <h3 className="font-display font-semibold text-lg mb-2">Never miss a planting day</h3>
              <p className="text-sage text-sm leading-relaxed mb-4">
                Get event reminders and field notes delivered monthly.
              </p>
              <NewsletterMiniForm darkMode={true} />
            </div>

            {/* Want to host? */}
            <div className="card-organic bg-white p-6 border border-lichen-cream">
              <h3 className="font-display font-semibold text-deep-forest text-lg mb-2">
                Want to Host an Event?
              </h3>
              <p className="text-sm text-forest-mid leading-relaxed mb-4">
                Have a space that could host a planting day, workshop, or plant swap? We handle planning, materials, and promotion.
              </p>
              <Link href="/contact" className="btn btn-secondary text-sm">
                Contact Us <ArrowRight size={14} />
              </Link>
            </div>

            {/* Event types legend */}
            <div className="card-organic bg-white p-6 border border-lichen-cream">
              <h3 className="font-display font-semibold text-deep-forest mb-3">Event Types</h3>
              <div className="space-y-2">
                {Object.entries(EVENT_TYPE_LABELS).map(([, info]) => (
                  <div key={info.label} className="flex items-center gap-2 text-sm">
                    <span>{info.emoji}</span>
                    <span className={`reserve-type-badge ${info.color}`}>{info.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
