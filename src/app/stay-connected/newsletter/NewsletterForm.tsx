'use client';

import { Mail, CheckCircle } from "lucide-react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import FormStatus from "@/components/forms/FormStatus";
import SubmitButton from "@/components/forms/SubmitButton";

const INTEREST_OPTIONS = [
  { value: "events", label: "Events" },
  { value: "plant-tips", label: "Plant Tips" },
  { value: "volunteer", label: "Volunteer Ops" },
  { value: "stories", label: "Stories" },
  { value: "all", label: "All of the Above" },
];

export default function NewsletterForm() {
  const { status, errorMessage, handleSubmit, reset } = useFormSubmit("Newsletter Signup");

  return (
    <div className="card-organic bg-white p-8 border border-lichen-cream">
      <FormStatus
        status={status}
        errorMessage={errorMessage}
        successMessage="You're subscribed! Check your inbox for a welcome message."
        onDismiss={reset}
      />
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1.5">
            Email <span className="text-california-poppy">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="you@email.com"
            className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-deep-forest placeholder:text-forest-mid/40 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1.5">
            First Name
          </label>
          <input
            type="text"
            name="first_name"
            placeholder="Your first name"
            className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-deep-forest placeholder:text-forest-mid/40 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-deep-forest mb-3">
            Interests
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {INTEREST_OPTIONS.map((opt) => (
              <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="interests"
                  value={opt.value}
                  className="accent-reserve-green"
                />
                <span className="text-sm text-forest-mid">{opt.label}</span>
              </label>
            ))}
          </div>
        </div>

        <SubmitButton status={status} className="w-full justify-center py-3.5 text-base">
          Subscribe to Field Notes <Mail size={16} />
        </SubmitButton>
      </form>

      <div className="flex items-start gap-2 mt-5 pt-5 border-t border-lichen-cream">
        <CheckCircle size={14} className="text-sage shrink-0 mt-0.5" />
        <p className="text-xs text-forest-mid leading-relaxed">
          We never share your email. Unsubscribe anytime with one click. We send one email per month — no spam, ever.
        </p>
      </div>
    </div>
  );
}
