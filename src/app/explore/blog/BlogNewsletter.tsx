'use client';

import NewsletterMiniForm from "@/components/forms/NewsletterMiniForm";

export default function BlogNewsletter() {
  return (
    <div className="card-organic bg-white p-6 border border-lichen-cream">
      <h3 className="font-display font-semibold text-lg text-deep-forest mb-2">
        Stay in the Loop
      </h3>
      <p className="text-sm text-forest-mid leading-relaxed mb-4">
        Get monthly field notes, plant spotlights, and community updates delivered to your
        inbox.
      </p>
      <NewsletterMiniForm darkMode={false} />
    </div>
  );
}
