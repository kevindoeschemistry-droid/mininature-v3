"use client";

import { ArrowRight } from "lucide-react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import FormStatus from "@/components/forms/FormStatus";
import SubmitButton from "@/components/forms/SubmitButton";

export default function HostInstallationForm() {
  const { status, errorMessage, handleSubmit, reset } = useFormSubmit("Host Installation Inquiry");

  return (
    <>
      <FormStatus status={status} errorMessage={errorMessage} onDismiss={reset} />
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1">Organization Name *</label>
          <input type="text" name="organization" required placeholder="e.g. First Lutheran Church of Ventura"
            className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-deep-forest mb-1">Contact Name *</label>
            <input type="text" name="contact_name" required placeholder="Your full name"
              className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green" />
          </div>
          <div>
            <label className="block text-sm font-medium text-deep-forest mb-1">Email *</label>
            <input type="email" name="email" required placeholder="you@org.com"
              className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1">Site Address *</label>
          <input type="text" name="site_address" required placeholder="Street address, City, CA ZIP"
            className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green" />
        </div>
        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1">Describe Your Space *</label>
          <textarea name="space_description" required rows={4} placeholder="Tell us about the area — approximate size, sun exposure, current state, and any goals you have."
            className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green resize-y" />
        </div>
        <div className="text-center pt-2">
          <SubmitButton status={status}>
            Submit Inquiry <ArrowRight size={14} />
          </SubmitButton>
        </div>
      </form>
    </>
  );
}
