"use client";

import { ArrowRight } from "lucide-react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import FormStatus from "@/components/forms/FormStatus";
import SubmitButton from "@/components/forms/SubmitButton";

export default function HonoraryStatusForm() {
  const { status, errorMessage, handleSubmit, reset } = useFormSubmit("Honorary MNR Application");

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
          <label className="block text-sm font-medium text-deep-forest mb-1">Garden Address *</label>
          <input type="text" name="garden_address" required placeholder="Street address, City, CA ZIP"
            className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-deep-forest mb-1">Garden Size (sq ft) *</label>
            <input type="number" name="garden_size" required min={25} placeholder="e.g. 150"
              className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green" />
          </div>
          <div>
            <label className="block text-sm font-medium text-deep-forest mb-1">Native Plant % *</label>
            <select name="native_plant_percentage" required
              className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest focus:outline-none focus:ring-2 focus:ring-reserve-green">
              <option value="">Select range</option>
              <option value="50-60">50–60%</option>
              <option value="60-75">60–75%</option>
              <option value="75-90">75–90%</option>
              <option value="90-100">90–100%</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1">Photos of Your Garden</label>
          <div className="w-full rounded-xl border-2 border-dashed border-lichen-cream bg-white px-4 py-8 text-center">
            <p className="text-sm text-sage mb-1">Drag and drop photos here, or click to browse</p>
            <p className="text-xs text-sage">JPG, PNG up to 10 MB each (max 5 photos)</p>
            <input type="file" name="photos" accept="image/*" multiple
              className="mt-3 text-sm text-forest-mid file:mr-3 file:rounded-full file:border-0 file:bg-reserve-green file:px-4 file:py-2 file:text-xs file:font-medium file:text-white file:cursor-pointer" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1">Describe Your Garden *</label>
          <textarea name="garden_description" required rows={4} placeholder="Tell us about your native plants, what wildlife you've seen, how long the garden has been established, and why you'd like Honorary status."
            className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green resize-y" />
        </div>
        <div className="text-center pt-2">
          <SubmitButton status={status}>
            Submit Application <ArrowRight size={14} />
          </SubmitButton>
        </div>
      </form>
    </>
  );
}
