"use client";

import { ArrowRight } from "lucide-react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import FormStatus from "@/components/forms/FormStatus";
import SubmitButton from "@/components/forms/SubmitButton";

export default function ContractGrowingForm() {
  const { status, errorMessage, handleSubmit, reset } = useFormSubmit("Contract Growing Inquiry");

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
              Service Type
            </label>
            <select name="service_type" className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-hummingbird-gold">
              <option value="">Select a service</option>
              <option value="contract-growing">Contract Growing</option>
              <option value="seed-collection">Seed Collection</option>
              <option value="propagation">Propagation Services</option>
              <option value="plant-sourcing">Plant Sourcing</option>
              <option value="plant-palette">Plant Palette Design</option>
              <option value="multiple">Multiple Services</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-xs font-mono-accent uppercase tracking-widest text-sage mb-1">
            Project Details
          </label>
          <textarea
            name="project_details"
            rows={4}
            className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-sage/60 focus:outline-none focus:ring-2 focus:ring-hummingbird-gold"
            placeholder="Describe species needed, quantities, container sizes, timeline, and project location..."
          />
        </div>
        <SubmitButton status={status} className="w-full justify-center">
          Submit Inquiry <ArrowRight size={14} />
        </SubmitButton>
      </form>
    </>
  );
}
