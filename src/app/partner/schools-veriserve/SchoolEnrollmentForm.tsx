"use client";

import { ArrowRight } from "lucide-react";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import FormStatus from "@/components/forms/FormStatus";
import SubmitButton from "@/components/forms/SubmitButton";

export default function SchoolEnrollmentForm() {
  const { status, errorMessage, handleSubmit, reset } = useFormSubmit("VeriServe School Enrollment");

  return (
    <>
      <FormStatus status={status} errorMessage={errorMessage} onDismiss={reset} />
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1">School Name *</label>
          <input type="text" name="school_name" required placeholder="e.g. Buena High School"
            className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-deep-forest mb-1">Contact Person *</label>
            <input type="text" name="contact_person" required placeholder="Teacher or counselor name"
              className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green" />
          </div>
          <div>
            <label className="block text-sm font-medium text-deep-forest mb-1">Email *</label>
            <input type="email" name="email" required placeholder="contact@school.edu"
              className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-deep-forest mb-1">Your Role *</label>
            <select name="role" required
              className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest focus:outline-none focus:ring-2 focus:ring-reserve-green">
              <option value="">Select role</option>
              <option value="teacher">Teacher</option>
              <option value="counselor">Counselor</option>
              <option value="administrator">Administrator</option>
              <option value="club-advisor">Club Advisor</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-deep-forest mb-1">Estimated # of Students</label>
            <input type="number" name="estimated_students" min={1} placeholder="e.g. 30"
              className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1">Anything else?</label>
          <textarea name="additional_info" rows={3} placeholder="Any questions or context about your school's community service program."
            className="w-full rounded-xl border border-lichen-cream bg-white px-4 py-3 text-sm text-deep-forest placeholder:text-sage focus:outline-none focus:ring-2 focus:ring-reserve-green resize-y" />
        </div>
        <div className="text-center pt-2">
          <SubmitButton status={status}>
            Enroll School <ArrowRight size={14} />
          </SubmitButton>
        </div>
      </form>
    </>
  );
}
