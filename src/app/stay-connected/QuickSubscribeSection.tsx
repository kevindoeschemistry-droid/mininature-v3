'use client';

import NewsletterMiniForm from "@/components/forms/NewsletterMiniForm";

export default function QuickSubscribeSection() {
  return (
    <section className="bg-deep-forest text-white py-16">
      <div className="container-site">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-2xl mb-3 block">📬</span>
          <h2 className="font-display font-bold text-2xl md:text-3xl mb-3">
            Quick Subscribe
          </h2>
          <p className="text-sage text-sm mb-8">
            Get our monthly Field Notes newsletter — stories from the reserves, plant spotlights, and upcoming events.
          </p>
          <div className="max-w-lg mx-auto">
            <NewsletterMiniForm darkMode={true} />
          </div>
          <p className="text-sage/60 text-xs mt-4">
            We never share your email. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
