import type { Metadata } from "next";
import "./globals.css";
import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | MiniNature Reserve",
    default: "MiniNature Reserve — Restoring Urban Biodiversity",
  },
  description:
    "MiniNature Reserves are small native-plant habitats that support pollinators, birds, and biodiversity in urban environments. Find, create, and support reserves near you.",
  keywords: ["native plants", "urban biodiversity", "pollinator habitat", "MiniNature Reserve", "urban ecology", "Oxnard", "Ventura County"],
  openGraph: {
    siteName: "MiniNature Reserve",
    type: "website",
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
      </body>
    </html>
  );
}
