"use client";

import { ArrowRight } from "lucide-react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import FormStatus from "@/components/forms/FormStatus";
import SubmitButton from "@/components/forms/SubmitButton";

export default function MunicipalInquiryForm() {
  const { status, errorMessage, handleSubmit, reset } = useFormSubmit("Municipal Services Inquiry");

  return (
    <>
      <FormStatus status={status} errorMessage={errorMessage} onDismiss={reset} />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
              City / Agency Name
            </label>
            <input
              type="text"
              name="city_agency"
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
              placeholder="e.g. City of Ventura"
            />
          </div>
          <div>
            <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
              Department
            </label>
            <input
              type="text"
              name="department"
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
              placeholder="e.g. Parks & Recreation"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <div>
            <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
              placeholder="you@city.gov"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
            Services of Interest
          </label>
          <select name="service_interest" className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-hummingbird-gold">
            <option value="">Select a service area</option>
            <option value="row">Public Right-of-Way Plantings</option>
            <option value="park">Park Restoration</option>
            <option value="median">Median Beautification</option>
            <option value="stormwater">Stormwater Management</option>
            <option value="heat">Urban Heat Island Mitigation</option>
            <option value="multiple">Multiple Services</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
            Project Details
          </label>
          <textarea
            name="project_details"
            rows={4}
            className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
            placeholder="Tell us about the sites you're considering, budget timeline, and any specific goals..."
          />
        </div>
        <SubmitButton status={status} className="w-full justify-center">
          Submit Inquiry <ArrowRight size={14} />
        </SubmitButton>
      </form>
    </>
  );
}
