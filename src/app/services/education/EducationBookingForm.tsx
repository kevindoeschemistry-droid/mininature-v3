"use client";

import { ArrowRight } from "lucide-react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import FormStatus from "@/components/forms/FormStatus";
import SubmitButton from "@/components/forms/SubmitButton";

export default function EducationBookingForm() {
  const { status, errorMessage, handleSubmit, reset } = useFormSubmit("Educational Activity Booking");

  return (
    <>
      <FormStatus status={status} errorMessage={errorMessage} onDismiss={reset} />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
              Organization / School
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
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
              placeholder="(805) 555-0100"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
            Activity Type
          </label>
          <select name="activity_type" className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-hummingbird-gold">
            <option value="">Select an activity</option>
            <option value="plant-walk">Native Plant ID Walk</option>
            <option value="pollinator">Pollinator Workshop</option>
            <option value="seed-saving">Seed Saving Class</option>
            <option value="school-garden">School Garden Installation</option>
            <option value="planting-day">Community Planting Day</option>
            <option value="indigenous">Indigenous Plant Knowledge Session</option>
            <option value="custom">Custom Program</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
              Preferred Date
            </label>
            <input
              type="date"
              name="preferred_date"
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
            />
          </div>
          <div>
            <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
              Group Size
            </label>
            <input
              type="number"
              name="group_size"
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
              placeholder="e.g. 25"
            />
          </div>
          <div>
            <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
              Age Range
            </label>
            <input
              type="text"
              name="age_range"
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
              placeholder="e.g. 8–12 years"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
            Additional Details
          </label>
          <textarea
            name="additional_details"
            rows={3}
            className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
            placeholder="Any specific goals, accessibility needs, or location preferences..."
          />
        </div>
        <SubmitButton status={status} className="w-full justify-center">
          Submit Booking Request <ArrowRight size={14} />
        </SubmitButton>
      </form>
    </>
  );
}
