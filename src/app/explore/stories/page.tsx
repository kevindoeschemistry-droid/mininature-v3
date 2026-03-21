import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Newspaper, Tag, ArrowRight, Clock } from "lucide-react";
import StoriesNewsletter from "./StoriesNewsletter";

export const metadata: Metadata = {
  title: "Stories & News",
  description: "Field notes, plant spotlights, community stories, and press coverage from the MiniNature Reserve network.",
};

const FEATURED_STORY = {
  id: "1",
  category: "Community Story",
  categoryColor: "bg-reserve-green/10 text-reserve-green",
  title: "From Concrete to Corridor: How a Parkway Became a Pollinator Habitat",
  excerpt: "What started as a strip of dead grass and impervious concrete in Oxnard is now a thriving 400 sq ft native plant habitat. MiniNature volunteers turned an overlooked parkway into a living corridor for hummingbirds, native bees, and monarchs.",
  author: "MiniNature Team",
  date: "March 5, 2025",
  readTime: "4 min",
  image: "https://images.unsplash.com/photo-1490750967868-88df5691cc11?w=900",
  tag: "🌿 Reserve Story",
};

const STORIES = [
  {
    id: "2",
    category: "Plant Spotlight",
    categoryColor: "bg-sage/20 text-deep-forest",
    title: "California Fuchsia: The Hummingbird's Favorite",
    excerpt: "This vivid scarlet-flowered native blooms late summer through fall — exactly when hummingbirds need fuel for migration. A must-plant for any reserve.",
    author: "MiniNature Team",
    date: "Feb 20, 2025",
    readTime: "3 min",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600",
    tag: "🌺 Plant Guide",
  },
  {
    id: "3",
    category: "Field Notes",
    categoryColor: "bg-hummingbird-gold/15 text-deep-forest",
    title: "What We Learned Installing 3 Reserves in One Day",
    excerpt: "Our biggest install day yet — three new parkway reserves, 86 volunteers, and a lot of lessons learned about timing, plant prep, and community organizing.",
    author: "MiniNature Team",
    date: "Feb 8, 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600",
    tag: "🛠️ Field Notes",
  },
  {
    id: "4",
    category: "School Program",
    categoryColor: "bg-california-poppy/10 text-deep-forest",
    title: "6th Graders Design Their Own Nature Reserve",
    excerpt: "At Colonia Middle School, ecology class moved outside. Students designed and planted a native habitat as part of a semester-long project culminating in a real reserve installation.",
    author: "MiniNature Team",
    date: "Jan 22, 2025",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600",
    tag: "🏫 Education",
  },
  {
    id: "5",
    category: "Press",
    categoryColor: "bg-deep-forest/10 text-deep-forest",
    title: "Ventura County Star: \u201cTiny Habitats Making a Big Difference\u201d",
    excerpt: "The Ventura County Star covered our spring installation season, featuring interviews with reserve stewards and a look at the ecological impact data.",
    author: "Ventura County Star",
    date: "Jan 10, 2025",
    readTime: "2 min",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600",
    tag: "📰 Press",
  },
  {
    id: "6",
    category: "Indigenous Knowledge",
    categoryColor: "bg-reserve-green/10 text-reserve-green",
    title: "White Sage: Sacred Plant, Threatened Species",
    excerpt: "White sage is central to Chumash ceremony and increasingly overharvested commercially. Here's why we plant it only in partnership with indigenous community members.",
    author: "MiniNature + Chumash Bear Circle",
    date: "Dec 15, 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600",
    tag: "🌿 Indigenous Knowledge",
  },
];

const TAGS = ["All", "Reserve Story", "Plant Guide", "Field Notes", "Education", "Press", "Indigenous Knowledge"];

export default function StoriesPage() {
  return (
    <div className="bg-fog-white min-h-screen">
      {/* Hero */}
      <section className="bg-deep-forest text-white section-pad">
        <div className="container-site">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Newspaper size={16} className="text-sage" />
              <span className="text-xs font-mono-accent uppercase tracking-widest text-sage">
                Stories &amp; News
              </span>
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Field Notes from the Network
            </h1>
            <p className="text-sage text-lg leading-relaxed">
              Reserve stories, plant spotlights, installation field notes, school program updates,
              and press coverage — all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Tag filter */}
      <div className="sticky top-[64px] z-30 bg-white border-b border-lichen-cream shadow-sm">
        <div className="container-site py-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <Tag size={12} className="text-forest-mid shrink-0 mr-1" />
            {TAGS.map((t) => (
              <button
                key={t}
                className={`shrink-0 text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                  t === "All"
                    ? "bg-deep-forest text-white border-deep-forest"
                    : "bg-white text-forest-mid border-lichen-cream hover:border-deep-forest hover:text-deep-forest"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container-site py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main feed */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured */}
            <div className="card-organic bg-white overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={FEATURED_STORY.image}
                  alt={FEATURED_STORY.title}
                  width={900}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-4 left-4 reserve-type-badge bg-white text-deep-forest text-xs">
                  ⭐ Featured Story
                </span>
              </div>
              <div className="p-7">
                <span className={`reserve-type-badge mb-3 inline-block ${FEATURED_STORY.categoryColor}`}>
                  {FEATURED_STORY.tag}
                </span>
                <h2 className="font-display font-bold text-2xl text-deep-forest mb-3 leading-tight group-hover:text-reserve-green transition-colors">
                  {FEATURED_STORY.title}
                </h2>
                <p className="text-forest-mid leading-relaxed mb-4">
                  {FEATURED_STORY.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-forest-mid">
                    <span className="font-medium">{FEATURED_STORY.author}</span>
                    <span>·</span>
                    <span>{FEATURED_STORY.date}</span>
                    <span>·</span>
                    <div className="flex items-center gap-1">
                      <Clock size={11} />
                      <span>{FEATURED_STORY.readTime}</span>
                    </div>
                  </div>
                  <button className="flex items-center gap-1.5 text-sm font-medium text-reserve-green group-hover:gap-2.5 transition-all">
                    Read More <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Story Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {STORIES.map((story) => (
                <div key={story.id} className="card-organic bg-white overflow-hidden group cursor-pointer">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.title}
                      width={600}
                      height={160}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className={`reserve-type-badge mb-2 inline-block text-xs ${story.categoryColor}`}>
                      {story.tag}
                    </span>
                    <h3 className="font-display font-semibold text-deep-forest text-base leading-tight mb-2 group-hover:text-reserve-green transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-xs text-forest-mid leading-relaxed mb-3 line-clamp-2">
                      {story.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-forest-mid">
                      <span>{story.date}</span>
                      <span>·</span>
                      <div className="flex items-center gap-1">
                        <Clock size={10} />
                        <span>{story.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Newsletter */}
            <StoriesNewsletter />

            {/* Contribute */}
            <div className="card-organic bg-white border border-lichen-cream p-6">
              <h3 className="font-display font-semibold text-deep-forest text-lg mb-2">
                Share Your Story
              </h3>
              <p className="text-sm text-forest-mid leading-relaxed mb-4">
                Reserve steward, volunteer, or student? We&apos;d love to feature your MiniNature story.
              </p>
              <Link href="/contact" className="btn btn-secondary text-sm w-full justify-center">
                Submit a Story <ArrowRight size={14} />
              </Link>
            </div>

            {/* Press */}
            <div className="card-organic bg-lichen-cream border border-sage/20 p-6">
              <h3 className="font-display font-semibold text-deep-forest text-base mb-2">
                Press &amp; Media
              </h3>
              <p className="text-xs text-forest-mid leading-relaxed mb-3">
                Journalists and producers: find our press kit, high-resolution photos, and media contacts.
              </p>
              <Link href="/about/press" className="btn btn-secondary text-sm w-full justify-center">
                Press Kit <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
