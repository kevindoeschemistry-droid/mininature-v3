"use client";

import { ArrowRight } from "lucide-react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import FormStatus from "@/components/forms/FormStatus";
import SubmitButton from "@/components/forms/SubmitButton";

export default function SponsorshipForm() {
  const { status, errorMessage, handleSubmit, reset } = useFormSubmit("Sponsorship Inquiry");

  return (
    <>
      <FormStatus status={status} errorMessage={errorMessage} onDismiss={reset} />
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-deep-forest mb-1">Contact Name *</label>
            <input type="text" name="contact_name" required placeholder="Your full name"
              className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green" />
          </div>
          <div>
            <label className="block text-sm font-medium text-deep-forest mb-1">Email *</label>
            <input type="email" name="email" required placeholder="you@company.com"
              className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1">Organization Name *</label>
          <input type="text" name="organization" required placeholder="Your company or organization"
            className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green" />
        </div>
        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1">Interested Tier</label>
          <select name="tier"
            className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest focus:outline-none focus:ring-2 focus:ring-reserve-green">
            <option value="">Not sure yet</option>
            <option value="seedling">Seedling ($1,000/yr)</option>
            <option value="pollinator">Pollinator ($5,000/yr)</option>
            <option value="habitat-champion">Habitat Champion ($10,000+/yr)</option>
            <option value="custom">Custom / Multi-Year</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1">Message</label>
          <textarea name="message" rows={4} placeholder="Tell us about your organization's sustainability goals or any questions about sponsorship."
            className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green resize-y" />
        </div>
        <div className="text-center pt-2">
          <SubmitButton status={status}>
            Send Inquiry <ArrowRight size={14} />
          </SubmitButton>
        </div>
      </form>
    </>
  );
}
