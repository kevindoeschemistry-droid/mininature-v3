"use client";

import { ArrowRight } from "lucide-react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import FormStatus from "@/components/forms/FormStatus";
import SubmitButton from "@/components/forms/SubmitButton";

export default function TrailMaintenanceForm() {
  const { status, errorMessage, handleSubmit, reset } = useFormSubmit("Trail Maintenance Request");

  return (
    <>
      <FormStatus status={status} errorMessage={errorMessage} onDismiss={reset} />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
              Organization / Agency
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
              Trail / Location Name
            </label>
            <input
              type="text"
              name="trail_location"
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
              placeholder="e.g. Ventura River Trail"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
            Services Needed
          </label>
          <select name="services_needed" className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-hummingbird-gold">
            <option value="">Select a service</option>
            <option value="clearing">Trail Clearing</option>
            <option value="erosion">Erosion Control</option>
            <option value="revegetation">Native Revegetation</option>
            <option value="signage">Signage Installation</option>
            <option value="accessibility">Accessibility Improvements</option>
            <option value="seasonal">Seasonal Maintenance Plan</option>
            <option value="multiple">Multiple Services</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
            Description
          </label>
          <textarea
            name="description"
            rows={4}
            className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
            placeholder="Describe the trail conditions, issues, approximate length, and any urgency..."
          />
        </div>
        <SubmitButton status={status} className="w-full justify-center">
          Submit Request <ArrowRight size={14} />
        </SubmitButton>
      </form>
    </>
  );
}
