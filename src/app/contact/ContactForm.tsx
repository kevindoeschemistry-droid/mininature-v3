'use client';

import { ArrowRight } from "lucide-react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import FormStatus from "@/components/forms/FormStatus";
import SubmitButton from "@/components/forms/SubmitButton";

const CONTACT_TOPICS = [
  { value: "general", label: "General Inquiry" },
  { value: "reserve", label: "Starting a Reserve" },
  { value: "volunteer", label: "Volunteering" },
  { value: "school", label: "School Partnership" },
  { value: "corporate", label: "Corporate Partnership" },
  { value: "municipal", label: "Municipal Partnership" },
  { value: "media", label: "Media / Press" },
  { value: "donate", label: "Donation Question" },
  { value: "other", label: "Other" },
];

export default function ContactForm() {
  const { status, errorMessage, handleSubmit, reset } = useFormSubmit("Contact Form");

  return (
    <>
      <FormStatus status={status} errorMessage={errorMessage} onDismiss={reset} />
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-deep-forest mb-1.5">
              First Name <span className="text-california-poppy">*</span>
            </label>
            <input
              type="text"
              name="first_name"
              required
              placeholder="Your first name"
              className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-deep-forest placeholder:text-forest-mid/40 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-deep-forest mb-1.5">
              Last Name <span className="text-california-poppy">*</span>
            </label>
            <input
              type="text"
              name="last_name"
              required
              placeholder="Your last name"
              className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-deep-forest placeholder:text-forest-mid/40 text-sm"
            />
          </div>
        </div>

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
          <label className="block text-sm font-medium text-deep-forest mb-1.5">Phone (optional)</label>
          <input
            type="tel"
            name="phone"
            placeholder="(805) 555-1234"
            className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-deep-forest placeholder:text-forest-mid/40 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1.5">
            Topic <span className="text-california-poppy">*</span>
          </label>
          <select
            name="topic"
            required
            className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-sm bg-white text-deep-forest"
          >
            <option value="">Select a topic...</option>
            {CONTACT_TOPICS.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1.5">
            Message <span className="text-california-poppy">*</span>
          </label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell us what's on your mind..."
            className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-deep-forest placeholder:text-forest-mid/40 text-sm resize-none"
          />
        </div>

        {/* Subscribe */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" name="newsletter" className="accent-reserve-green mt-1" />
          <span className="text-sm text-forest-mid">
            Subscribe me to the MiniNature Field Notes newsletter (monthly, unsubscribe anytime)
          </span>
        </label>

        <SubmitButton status={status} className="w-full justify-center py-3.5 text-base">
          Send Message <ArrowRight size={16} />
        </SubmitButton>
      </form>
    </>
  );
}
