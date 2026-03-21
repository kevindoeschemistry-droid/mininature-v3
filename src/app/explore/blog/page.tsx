import type { Metadata } from "next";
import Link from "next/link";
import { PenLine, ArrowRight, Clock, Tag } from "lucide-react";
import BlogNewsletter from "./BlogNewsletter";

export const metadata: Metadata = {
  title: "Blog",
  description: "Field notes, plant guides, community stories, and behind-the-scenes dispatches from the MiniNature Reserve network.",
};

const TAGS = ["All", "Field Notes", "Plant Guides", "Community", "Behind the Scenes"];

const FEATURED_POST = {
  title: "Why Parkway Strips Are the Future of Urban Ecology",
  author: "Kevin Kabra",
  date: "March 12, 2026",
  category: "Field Notes",
  readTime: "8 min read",
  excerpt:
    "That narrow strip of land between the sidewalk and the street might be the most undervalued ecological real estate in California. Here is how MiniNature is turning thousands of square feet of turf into thriving native habitat — one parkway at a time.",
  href: "/explore/blog/parkway-strips-urban-ecology",
};

const POSTS = [
  {
    title: "5 Native Plants That Thrive in Ventura County Clay Soil",
    category: "Plant Guides",
    date: "March 5, 2026",
    readTime: "5 min read",
    excerpt:
      "Heavy clay does not have to be a dealbreaker. These five California natives actually prefer it — and they bring pollinators along for the ride.",
    href: "/explore/blog/native-plants-clay-soil",
  },
  {
    title: "Meet the Reservists: Diana Torres on Building Community One Garden at a Time",
    category: "Community",
    date: "February 24, 2026",
    readTime: "6 min read",
    excerpt:
      "Diana joined a volunteer install day on a whim. Two years later she has created four reserves and trained a dozen neighbors in native landscaping.",
    href: "/explore/blog/meet-diana-torres",
  },
  {
    title: "How We Design a Reserve: From Soil Test to Planting Day",
    category: "Behind the Scenes",
    date: "February 15, 2026",
    readTime: "7 min read",
    excerpt:
      "A step-by-step look at the process behind every MiniNature Reserve — including the spreadsheet nobody asked for but everyone needs.",
    href: "/explore/blog/how-we-design-a-reserve",
  },
  {
    title: "Spring Pollinator Report: What We Saw in February",
    category: "Field Notes",
    date: "February 8, 2026",
    readTime: "4 min read",
    excerpt:
      "Twelve reserves, sixty observation hours, and one very persistent Anna's hummingbird. Our monthly pollinator monitoring data is in.",
    href: "/explore/blog/spring-pollinator-report",
  },
  {
    title: "The Case for Buckwheat: California's Unsung Pollinator Magnet",
    category: "Plant Guides",
    date: "January 30, 2026",
    readTime: "5 min read",
    excerpt:
      "Eriogonum fasciculatum may not win beauty contests, but no other plant in our palette supports as many native bee species per square foot.",
    href: "/explore/blog/case-for-buckwheat",
  },
  {
    title: "Reserve #21 Is Live: The Story Behind Our Newest Installation",
    category: "Community",
    date: "January 18, 2026",
    readTime: "6 min read",
    excerpt:
      "A retired teacher, a reluctant HOA, and 47 native plants later — Reserve #21 in Camarillo is officially on the map.",
    href: "/explore/blog/reserve-21-live",
  },
];

const POPULAR_TAGS = [
  "Native Plants",
  "Parkway Strips",
  "Pollinators",
  "Ventura County",
  "Volunteer Stories",
  "Buckwheat",
  "Sage",
  "Installation Tips",
  "Water-Wise",
  "Chumash Knowledge",
];

export default function BlogPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-reserve-green text-white py-20">
        <div className="container-site">
          <div className="flex items-center gap-2 text-xs font-mono-accent uppercase tracking-widest text-sage mb-4">
            <PenLine size={14} />
            From the Field
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl mb-5 max-w-2xl leading-tight">
            Blog
          </h1>
          <p className="text-sage text-lg max-w-xl leading-relaxed">
            Field notes, plant guides, community stories, and dispatches from the MiniNature
            Reserve network.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="container-site py-16">
        <h2 className="font-display font-bold text-2xl text-deep-forest mb-6">Featured</h2>
        <Link href={FEATURED_POST.href} className="group block">
          <div className="card-organic bg-white border border-lichen-cream overflow-hidden md:flex">
            {/* Image placeholder */}
            <div className="bg-lichen-cream md:w-2/5 h-56 md:h-auto flex items-center justify-center shrink-0">
              <span className="text-6xl">🌿</span>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-2">
                {FEATURED_POST.category}
              </span>
              <h3 className="font-display font-bold text-2xl md:text-3xl text-deep-forest mb-3 group-hover:text-reserve-green transition-colors leading-tight">
                {FEATURED_POST.title}
              </h3>
              <p className="text-sm text-forest-mid leading-relaxed mb-4 max-w-lg">
                {FEATURED_POST.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-sage mb-4">
                <span>{FEATURED_POST.author}</span>
                <span>{FEATURED_POST.date}</span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {FEATURED_POST.readTime}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-sm font-medium text-reserve-green">
                Read More
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Filter bar */}
      <section className="container-site">
        <div className="flex flex-wrap gap-2 mb-10">
          {TAGS.map((tag, i) => (
            <button
              key={tag}
              className={`text-sm px-4 py-2 rounded-full font-medium transition-colors ${
                i === 0
                  ? "bg-reserve-green text-white"
                  : "bg-white border border-lichen-cream text-forest-mid hover:border-reserve-green hover:text-reserve-green"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Main content area */}
      <section className="container-site pb-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Posts grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {POSTS.map((post) => (
                <Link key={post.title} href={post.href} className="group block">
                  <div className="card-organic bg-white border border-lichen-cream h-full flex flex-col overflow-hidden">
                    {/* Image placeholder */}
                    <div className="bg-lichen-cream h-40 flex items-center justify-center">
                      <span className="text-4xl">
                        {post.category === "Plant Guides"
                          ? "🌱"
                          : post.category === "Community"
                            ? "🤝"
                            : post.category === "Behind the Scenes"
                              ? "🔧"
                              : "📝"}
                      </span>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <span className="text-xs font-mono-accent uppercase tracking-widest text-reserve-green mb-2">
                        {post.category}
                      </span>
                      <h3 className="font-display font-semibold text-lg text-deep-forest mb-2 group-hover:text-reserve-green transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-sage mb-3">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1">
                          <Clock size={11} />
                          {post.readTime}
                        </span>
                      </div>
                      <p className="text-sm text-forest-mid leading-relaxed line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-1.5 text-sm font-medium text-reserve-green mt-4">
                        Read More
                        <ArrowRight
                          size={14}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-72 shrink-0 space-y-8">
            {/* Newsletter signup */}
            <BlogNewsletter />

            {/* Popular tags */}
            <div className="card-organic bg-white p-6 border border-lichen-cream">
              <h3 className="font-display font-semibold text-lg text-deep-forest mb-4 flex items-center gap-2">
                <Tag size={16} className="text-reserve-green" />
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {POPULAR_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-mint-mist text-forest-mid px-3 py-1.5 rounded-full hover:bg-reserve-green hover:text-white transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
