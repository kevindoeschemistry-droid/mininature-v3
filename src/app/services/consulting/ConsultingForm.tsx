"use client";

import { ArrowRight } from "lucide-react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import FormStatus from "@/components/forms/FormStatus";
import SubmitButton from "@/components/forms/SubmitButton";

export default function ConsultingForm() {
  const { status, errorMessage, handleSubmit, reset } = useFormSubmit("Consulting Inquiry");

  return (
    <>
      <FormStatus status={status} errorMessage={errorMessage} onDismiss={reset} />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
              Organization
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
              Consulting Area
            </label>
            <select name="consulting_area" className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-hummingbird-gold">
              <option value="">Select an area</option>
              <option value="restoration">Habitat Restoration Planning</option>
              <option value="plant-palette">Native Plant Palette Design</option>
              <option value="grants">Grant Writing Support</option>
              <option value="engagement">Community Engagement Strategy</option>
              <option value="biodiversity">Biodiversity Assessment</option>
              <option value="other">Other / Multiple</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
            Project Description
          </label>
          <textarea
            name="project_description"
            rows={4}
            className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
            placeholder="Describe your project, goals, timeline, and any specific questions you have..."
          />
        </div>
        <SubmitButton status={status} className="w-full justify-center">
          Request a Discovery Call <ArrowRight size={14} />
        </SubmitButton>
      </form>
    </>
  );
}
