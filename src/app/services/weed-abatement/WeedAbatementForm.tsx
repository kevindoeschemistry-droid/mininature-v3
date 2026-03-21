"use client";

import { ArrowRight } from "lucide-react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import FormStatus from "@/components/forms/FormStatus";
import SubmitButton from "@/components/forms/SubmitButton";

export default function WeedAbatementForm() {
  const { status, errorMessage, handleSubmit, reset } = useFormSubmit("Weed Abatement Request");

  return (
    <>
      <FormStatus status={status} errorMessage={errorMessage} onDismiss={reset} />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
              Organization / Property
            </label>
            <input
              type="text"
              name="organization"
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
              placeholder="Your organization"
            />
          </div>
          <div>
            <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
              Contact Name
            </label>
            <input
              type="text"
              name="contact_name"
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
              placeholder="Your name"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
              placeholder="you@org.com"
            />
          </div>
          <div>
            <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
              Site Location
            </label>
            <input
              type="text"
              name="site_location"
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
              placeholder="Address or cross streets"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
            Site Description
          </label>
          <textarea
            name="site_description"
            rows={4}
            className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
            placeholder="Describe the site, approximate area, known invasive species, any previous management, and your goals..."
          />
        </div>
        <SubmitButton status={status} className="w-full justify-center">
          Submit Request <ArrowRight size={14} />
        </SubmitButton>
      </form>
    </>
  );
}
