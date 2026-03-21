import type { Metadata } from "next";
import EventsPageClient from "./EventsPageClient";

export const metadata: Metadata = {
  title: "Community Events",
  description: "Join MiniNature Reserve planting days, workshops, and community events. All skill levels welcome.",
};

export default function EventsPage() {
  return <EventsPageClient />;
}
