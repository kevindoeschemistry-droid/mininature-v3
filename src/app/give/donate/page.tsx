import type { Metadata } from "next";
import DonatePageClient from "./DonatePageClient";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support urban biodiversity restoration. Your donation plants native habitat in cities across Ventura County.",
};

export default function DonatePage() {
  return <DonatePageClient />;
}
