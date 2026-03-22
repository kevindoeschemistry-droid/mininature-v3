import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mininature.org"),
  title: {
    template: "%s | MiniNature Reserve",
    default: "MiniNature Reserve | Urban Native Plant Habitats",
  },
  description:
    "MiniNature Reserves are small native-plant habitats that support pollinators, birds, and biodiversity in urban environments. Find, create, and support reserves near you.",
  keywords: [
    "native plants",
    "urban biodiversity",
    "pollinator habitat",
    "MiniNature Reserve",
    "urban ecology",
    "Oxnard",
    "Ventura County",
  ],
  openGraph: {
    siteName: "MiniNature Reserve",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MiniNature Reserve | Urban Native Plant Habitats",
    description:
      "Small native-plant habitats that support pollinators, birds, and biodiversity in urban environments.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <TopNav />
        <main className="pb-16">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
