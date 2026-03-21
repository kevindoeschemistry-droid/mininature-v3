'use client';

import { useFormSubmit } from "@/hooks/useFormSubmit";
import FormStatus from "@/components/forms/FormStatus";
import SubmitButton from "@/components/forms/SubmitButton";

const PROGRAMS = [
  "Campus Reserve Installation",
  "Junior Reservist Program",
  "Pollinator Science Project",
  "Indigenous Plant Knowledge Unit",
];

export default function SchoolForm() {
  const { status, errorMessage, handleSubmit, reset } = useFormSubmit("School Program Inquiry");

  return (
    <div className="card-organic bg-white p-8">
      <FormStatus status={status} errorMessage={errorMessage} onDismiss={reset} />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1.5">School Name</label>
          <input type="text" name="school_name" required placeholder="e.g. Fremont Elementary" className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-sm" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-deep-forest mb-1.5">Your Name</label>
            <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-deep-forest mb-1.5">Role</label>
            <select name="role" className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-sm bg-white text-deep-forest">
              <option value="teacher">Teacher</option>
              <option value="principal">Principal</option>
              <option value="curriculum-coordinator">Curriculum Coordinator</option>
              <option value="parent-pta">Parent / PTA</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1.5">Email</label>
          <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1.5">Program of Interest</label>
          <select name="program" className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-sm bg-white text-deep-forest">
            {PROGRAMS.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
            <option value="not-sure">Not sure yet — need more info</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1.5">
            Tell us about your school and goals
          </label>
          <textarea name="message" rows={3} className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-sm resize-none" />
        </div>
        <SubmitButton status={status} className="w-full justify-center py-3 text-base">
          Submit School Application
        </SubmitButton>
      </form>
    </div>
  );
}
