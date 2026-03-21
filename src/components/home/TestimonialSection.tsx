import { TESTIMONIALS } from "@/lib/data";

export default function TestimonialSection() {
  const primary = TESTIMONIALS[0];
  const secondary = TESTIMONIALS.slice(1, 4);

  return (
    <section className="section-pad bg-reserve-green text-white overflow-hidden">
      <div className="container-site">
        <div className="text-xs font-mono-accent uppercase tracking-widest text-sage mb-10 text-center">
          Community Voice
        </div>

        {/* Primary large quote */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-5xl text-hummingbird-gold font-display leading-none mb-4">"</div>
          <p className="font-display text-xl md:text-2xl leading-relaxed text-white italic mb-6">
            {primary.quote}
          </p>
          <div className="text-sage text-sm">
            — {primary.authorName}, {primary.authorRole}
          </div>
        </div>

        {/* Secondary testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondary.map((t) => (
            <div
              key={t.id}
              className="bg-forest-mid/50 rounded-organic p-6 border border-forest-mid"
            >
              <div className="text-3xl text-hummingbird-gold font-display leading-none mb-3">"</div>
              <p className="text-sm text-lichen-cream leading-relaxed italic mb-4 line-clamp-4">
                {t.quote}
              </p>
              <div className="text-xs text-sage">
                <div className="font-medium text-white">{t.authorName}</div>
                <div>{t.authorRole}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
