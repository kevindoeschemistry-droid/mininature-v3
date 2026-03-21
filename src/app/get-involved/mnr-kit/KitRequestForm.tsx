'use client';

import { ArrowRight } from "lucide-react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import FormStatus from "@/components/forms/FormStatus";
import SubmitButton from "@/components/forms/SubmitButton";

export default function KitRequestForm() {
  const { status, errorMessage, handleSubmit, reset } = useFormSubmit("MNR Kit Request");

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
          Space Address *
        </label>
        <input
          type="text"
          name="space_address"
          required
          placeholder="Street address where you want to plant"
          className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1.5">
            Approximate Space Size (sq ft) *
          </label>
          <input
            type="number"
            name="space_size"
            required
            placeholder="e.g. 100"
            className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1.5">
            Space Type *
          </label>
          <select name="space_type" required className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm bg-white">
            <option value="">Select type...</option>
            <option value="parkway">Parkway / sidewalk strip</option>
            <option value="front-yard">Front yard</option>
            <option value="side-yard">Side yard</option>
            <option value="backyard">Backyard</option>
            <option value="community">Community / shared space</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-deep-forest mb-1.5">
          Sun Exposure
        </label>
        <select name="sun_exposure" className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm bg-white">
          <option value="">Select exposure...</option>
          <option value="full-sun">Full sun (6+ hours)</option>
          <option value="partial-sun">Partial sun (4-6 hours)</option>
          <option value="partial-shade">Partial shade (2-4 hours)</option>
          <option value="not-sure">Not sure</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-deep-forest mb-1.5">
          Anything else we should know?
        </label>
        <textarea
          name="message"
          rows={3}
          placeholder="Soil type, existing plants, any preferences for plant species..."
          className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-sage focus:outline-none text-sm resize-none"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="kit-commit"
          name="care_commitment"
          className="mt-1 accent-reserve-green"
        />
        <label htmlFor="kit-commit" className="text-xs text-forest-mid leading-relaxed">
          I understand that I will need to provide basic watering during the first growing season and will follow the care calendar included with the kit.
        </label>
      </div>

      <SubmitButton status={status} className="w-full justify-center text-base py-4">
        Request My Free Kit
        <ArrowRight size={18} />
      </SubmitButton>

      <p className="text-xs text-center text-forest-mid">
        We&apos;ll review your application and schedule a site assessment within 1&ndash;2 weeks.
      </p>
    </form>
  );
}
