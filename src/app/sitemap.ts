import type { MetadataRoute } from "next";

const BASE_URL = "https://mininaturereserve.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Homepage
  const homepage: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // Top-level pages
  const topLevel: MetadataRoute.Sitemap = [
    "contact",
    "shop",
    "privacy",
    "terms",
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: slug === "shop" ? "weekly" as const : "monthly" as const,
    priority: slug === "contact" || slug === "shop" ? 0.7 : 0.3,
  }));

  // Explore section
  const explore: MetadataRoute.Sitemap = [
    "",
    "reserves",
    "nurseries",
    "chapters",
    "programs",
    "events",
    "blog",
  ].map((slug) => ({
    url: slug ? `${BASE_URL}/explore/${slug}` : `${BASE_URL}/explore`,
    lastModified: now,
    changeFrequency: ["events", "blog"].includes(slug)
      ? "weekly" as const
      : "monthly" as const,
    priority: slug === "" ? 0.9 : 0.7,
  }));

  // Get Involved section
  const getInvolved: MetadataRoute.Sitemap = [
    "",
    "volunteer",
    "make-a-reserve",
    "start-a-chapter",
    "training",
    "mnr-kit",
  ].map((slug) => ({
    url: slug
      ? `${BASE_URL}/get-involved/${slug}`
      : `${BASE_URL}/get-involved`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: slug === "" ? 0.9 : 0.7,
  }));

  // Partner section
  const partner: MetadataRoute.Sitemap = [
    "",
    "schools-veriserve",
    "sponsorship",
    "host-installation",
    "honorary-status",
    "one-percent",
    "other",
  ].map((slug) => ({
    url: slug ? `${BASE_URL}/partner/${slug}` : `${BASE_URL}/partner`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: slug === "" ? 0.8 : 0.6,
  }));

  // Services section
  const services: MetadataRoute.Sitemap = [
    "",
  ].map((slug) => ({
    url: slug ? `${BASE_URL}/services/${slug}` : `${BASE_URL}/services`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: slug === "" ? 0.8 : 0.6,
  }));

  // Give section
  const give: MetadataRoute.Sitemap = [
    "",
    "donate",
    "adopt",
    "fundraisers",
    "fund-new-mnr",
    "registry",
    "memorial",
  ].map((slug) => ({
    url: slug ? `${BASE_URL}/give/${slug}` : `${BASE_URL}/give`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: slug === "" || slug === "donate" ? 0.9 : 0.6,
  }));

  // Stay Connected section
  const stayConnected: MetadataRoute.Sitemap = [
    "",
  ].map((slug) => ({
    url: slug
      ? `${BASE_URL}/stay-connected/${slug}`
      : `${BASE_URL}/stay-connected`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: slug === "" ? 0.7 : 0.5,
  }));

  // About section
  const about: MetadataRoute.Sitemap = [
    "",
    "mission",
    "team",
    "impact",
    "press",
  ].map((slug) => ({
    url: slug ? `${BASE_URL}/about/${slug}` : `${BASE_URL}/about`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: slug === "" || slug === "mission" ? 0.8 : 0.6,
  }));

  return [
    ...homepage,
    ...topLevel,
    ...explore,
    ...getInvolved,
    ...partner,
    ...services,
    ...give,
    ...stayConnected,
    ...about,
  ];
}
