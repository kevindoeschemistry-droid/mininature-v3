'use client';

import { useFormSubmit } from "@/hooks/useFormSubmit";
import FormStatus from "@/components/forms/FormStatus";
import SubmitButton from "@/components/forms/SubmitButton";

export default function TrainingForm() {
  const { status, errorMessage, handleSubmit, reset } = useFormSubmit("Training Registration");

  return (
    <div className="card-organic bg-white p-8">
      <FormStatus status={status} errorMessage={errorMessage} onDismiss={reset} />
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-deep-forest mb-1.5">First Name</label>
            <input type="text" name="first_name" required className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-deep-forest mb-1.5">Last Name</label>
            <input type="text" name="last_name" required className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-sm" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1.5">Email</label>
          <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-sm" />
        </div>
        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1.5">How did you hear about us?</label>
          <select name="referral_source" className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-sm text-deep-forest bg-white">
            <option value="social-media">Social media (Instagram/Facebook)</option>
            <option value="friend">Friend or neighbor</option>
            <option value="event">Attended a MiniNature event</option>
            <option value="newsletter">Newsletter</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-deep-forest mb-1.5">
            Why do you want to become a Reservist?
          </label>
          <textarea name="motivation" rows={4} className="w-full px-4 py-3 rounded-xl border border-lichen-cream focus:border-reserve-green outline-none text-sm resize-none" />
        </div>
        <SubmitButton status={status} className="w-full justify-center py-3 text-base">
          Submit Application
        </SubmitButton>
      </form>
    </div>
  );
}
