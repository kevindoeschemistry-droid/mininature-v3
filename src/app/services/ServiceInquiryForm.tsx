"use client";

import { ArrowRight } from "lucide-react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import FormStatus from "@/components/forms/FormStatus";
import SubmitButton from "@/components/forms/SubmitButton";

const SERVICE_OPTIONS = [
  "Landscaping",
  "For Municipalities",
  "Educational Activities",
  "Contract Growing & Horticulture",
  "Trail Maintenance",
  "Weed Abatement",
  "Consulting",
];

export default function ServiceInquiryForm() {
  const { status, errorMessage, handleSubmit, reset } =
    useFormSubmit("Services Inquiry");

  return (
    <>
      <FormStatus
        status={status}
        errorMessage={errorMessage}
        onDismiss={reset}
      />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
              Name <span className="text-california-poppy">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
              Email <span className="text-california-poppy">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
              Organization
            </label>
            <input
              type="text"
              name="organization"
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
              placeholder="Your organization (optional)"
            />
          </div>
          <div>
            <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
              Service Interest <span className="text-california-poppy">*</span>
            </label>
            <select
              name="service_interest"
              required
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
            >
              <option value="" className="text-deep-forest">
                Select a service...
              </option>
              {SERVICE_OPTIONS.map((service) => (
                <option key={service} value={service} className="text-deep-forest">
                  {service}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
            Message <span className="text-california-poppy">*</span>
          </label>
          <textarea
            name="message"
            rows={4}
            required
            className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
            placeholder="Tell us about your project, goals, timeline, and any questions..."
          />
        </div>
        <SubmitButton status={status} className="w-full justify-center">
          Send Inquiry <ArrowRight size={14} />
        </SubmitButton>
      </form>
    </>
  );
}
