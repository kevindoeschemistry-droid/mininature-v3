"use client";

import { ArrowRight } from "lucide-react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import FormStatus from "@/components/forms/FormStatus";
import SubmitButton from "@/components/forms/SubmitButton";

export default function PartnershipInquiryForm() {
  const { status, errorMessage, handleSubmit, reset } = useFormSubmit("Partnership Inquiry");

  return (
    <>
      <FormStatus status={status} errorMessage={errorMessage} onDismiss={reset} />
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-deep-forest mb-1">Your Name *</label>
            <input type="text" name="name" required placeholder="Full name"
              className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green" />
          </div>
          <div>
            <label className="block text-sm font-medium text-deep-forest mb-1">Email *</label>
            <input type="email" name="email" required placeholder="you@example.com"
              className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1">Organization (if applicable)</label>
          <input type="text" name="organization" placeholder="Your company, school, or organization"
            className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green" />
        </div>
        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1">Partnership Type *</label>
          <select name="partnership_type" required
            className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest focus:outline-none focus:ring-2 focus:ring-reserve-green">
            <option value="">Select a category</option>
            <option value="media">Media & Press</option>
            <option value="research">Research & Academia</option>
            <option value="government">Government Grants</option>
            <option value="faith">Faith Communities</option>
            <option value="nonprofit">Nonprofit Collaborations</option>
            <option value="individual">Individual Champions</option>
            <option value="other">Something Else</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1">Tell Us About Your Idea *</label>
          <textarea name="idea" required rows={5} placeholder="What kind of partnership are you imagining? What are your goals? How do you think we could work together?"
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
