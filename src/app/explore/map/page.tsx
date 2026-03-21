import type { Metadata } from "next";
import MapPageClient from "./MapPageClient";

export const metadata: Metadata = {
  title: "Explore the Map",
  description: "Find MiniNature Reserves near you. Interactive map of all active native plant habitats across Ventura County.",
};

export default function MapPage() {
  return <MapPageClient />;
}
