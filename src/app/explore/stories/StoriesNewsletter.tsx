'use client';

import { Newspaper } from "lucide-react";
import NewsletterMiniForm from "@/components/forms/NewsletterMiniForm";

export default function StoriesNewsletter() {
  return (
    <div className="card-organic bg-reserve-green text-white p-6">
      <Newspaper size={20} className="text-sage mb-3" />
      <h3 className="font-display font-semibold text-lg mb-2">
        Field Notes Newsletter
      </h3>
      <p className="text-sage text-sm leading-relaxed mb-4">
        Monthly stories, plant spotlights, and event highlights delivered to your inbox.
      </p>
      <NewsletterMiniForm darkMode={true} />
    </div>
  );
}
