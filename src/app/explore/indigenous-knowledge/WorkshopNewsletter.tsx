'use client';

import NewsletterMiniForm from "@/components/forms/NewsletterMiniForm";

export default function WorkshopNewsletter() {
  return (
    <div className="card-organic bg-lichen-cream border border-sage/20 p-6">
      <h3 className="font-display font-semibold text-deep-forest text-base mb-2">
        Workshop Reminders
      </h3>
      <p className="text-xs text-forest-mid leading-relaxed mb-3">
        Get notified when new workshops are added.
      </p>
      <NewsletterMiniForm darkMode={false} />
    </div>
  );
}
