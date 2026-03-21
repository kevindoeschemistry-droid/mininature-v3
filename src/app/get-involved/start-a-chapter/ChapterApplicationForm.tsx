'use client';

import { ArrowRight } from "lucide-react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import FormStatus from "@/components/forms/FormStatus";
import SubmitButton from "@/components/forms/SubmitButton";

export default function ChapterApplicationForm() {
  const { status, errorMessage, handleSubmit, reset } = useFormSubmit("Chapter Application");

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-organic-lg p-8 shadow-card space-y-6">
      <FormStatus status={status} errorMessage={errorMessage} onDismiss={reset} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1.5">
            Your Name *
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Full name"
            className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-deep-forest mb-1.5">
          City / Region *
        </label>
        <input
          type="text"
          name="city_region"
          required
          placeholder="e.g. East Ventura, Oxnard, Ojai"
          className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-deep-forest mb-1.5">
          How many founding members do you have? *
        </label>
        <select name="founding_members" required className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm bg-white">
          <option value="">Select...</option>
          <option value="1">Just me so far</option>
          <option value="2">2 people</option>
          <option value="3-5">3-5 people</option>
          <option value="6-10">6-10 people</option>
          <option value="10+">10+ people</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-deep-forest mb-1.5">
          Why do you want to start a chapter? *
        </label>
        <textarea
          name="motivation"
          required
          rows={5}
          placeholder="Tell us about your connection to native plants, your community, and what you hope to accomplish as a chapter leader..."
          className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-deep-forest mb-1.5">
          Relevant Experience (optional)
        </label>
        <textarea
          name="experience"
          rows={3}
          placeholder="Any gardening, organizing, teaching, or community leadership experience..."
          className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm resize-none"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="chapter-commit"
          name="commitment"
          className="mt-1 accent-reserve-green"
        />
        <label htmlFor="chapter-commit" className="text-xs text-forest-mid leading-relaxed">
          I understand that chapter leadership requires an ongoing commitment of approximately 5&ndash;10 hours per month and I am ready to take on that responsibility.
        </label>
      </div>

      <SubmitButton status={status} className="w-full justify-center text-base py-4">
        Submit Chapter Application
        <ArrowRight size={18} />
      </SubmitButton>

      <p className="text-xs text-center text-forest-mid">
        We&apos;ll review your application and schedule an introductory call within 1&ndash;2 weeks.
      </p>
    </form>
  );
}
