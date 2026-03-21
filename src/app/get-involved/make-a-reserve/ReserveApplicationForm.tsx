'use client';

import { ArrowRight } from "lucide-react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import FormStatus from "@/components/forms/FormStatus";
import SubmitButton from "@/components/forms/SubmitButton";

export default function ReserveApplicationForm() {
  const { status, errorMessage, handleSubmit, reset } = useFormSubmit("Reserve Application");

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
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          placeholder="(optional)"
          className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-deep-forest mb-1.5">
          Space Address / Location *
        </label>
        <input
          type="text"
          name="space_address"
          required
          placeholder="Street address or cross streets"
          className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1.5">
            Approximate Size (sq ft)
          </label>
          <input
            type="number"
            name="space_size"
            placeholder="e.g. 150"
            className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1.5">
            Space Type
          </label>
          <select name="space_type" className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm bg-white">
            <option value="">Select type...</option>
            <option value="front-yard-parkway">Front yard / parkway</option>
            <option value="backyard-side-yard">Backyard / side yard</option>
            <option value="school-campus">School campus</option>
            <option value="community-public">Community / public space</option>
            <option value="corporate-institutional">Corporate / institutional</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-deep-forest mb-1.5">
          Reserve Path Preference
        </label>
        <select name="reserve_path" className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm bg-white">
          <option value="">Select path...</option>
          <option value="mnr-kit">MNR Kit (free kit, I&apos;ll plant it myself)</option>
          <option value="community-install">Community Install Day (volunteers install it)</option>
          <option value="diy-guerrilla">DIY / Guerrilla (using your plant guide)</option>
          <option value="school-reserve">School Reserve</option>
          <option value="honorary-mnr">Honorary MNR (existing native garden)</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-deep-forest mb-1.5">
          Anything else you&apos;d like to share?
        </label>
        <textarea
          name="message"
          rows={3}
          placeholder="Tell us about your space, your goals, or what excites you about making a reserve..."
          className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm resize-none"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="commit"
          name="stewardship_commitment"
          className="mt-1 accent-reserve-green"
        />
        <label htmlFor="commit" className="text-xs text-forest-mid leading-relaxed">
          I commit to providing basic stewardship for my reserve (watering during establishment, keeping it reasonably tidy) and understand this is a long-term habitat for pollinators and wildlife.
        </label>
      </div>

      <SubmitButton status={status} className="w-full justify-center text-base py-4">
        Submit My Application
        <ArrowRight size={18} />
      </SubmitButton>

      <p className="text-xs text-center text-forest-mid">
        We&apos;ll review your application and respond within 3&ndash;5 business days.
      </p>
    </form>
  );
}
