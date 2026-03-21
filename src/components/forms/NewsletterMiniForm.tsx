"use client";

import { useFormSubmit } from "@/hooks/useFormSubmit";
import FormStatus from "./FormStatus";
import SubmitButton from "./SubmitButton";

interface NewsletterMiniFormProps {
  darkMode?: boolean;
}

export default function NewsletterMiniForm({
  darkMode = false,
}: NewsletterMiniFormProps) {
  const { status, errorMessage, handleSubmit, reset } =
    useFormSubmit("Newsletter Signup");

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          className={
            darkMode
              ? "flex-1 px-4 py-2 rounded-full bg-forest-mid text-white placeholder:text-sage text-sm border border-forest-mid focus:border-sage outline-none"
              : "flex-1 px-4 py-2 rounded-full bg-white text-deep-forest placeholder:text-forest-mid/50 text-sm border border-lichen-cream focus:border-sage outline-none"
          }
        />
        <input type="hidden" name="form_type" value="newsletter" />
        <SubmitButton status={status} className="text-sm shrink-0">
          Subscribe
        </SubmitButton>
      </form>
      <div className="mt-3">
        <FormStatus
          status={status}
          errorMessage={errorMessage}
          successMessage="You're subscribed! Check your inbox for a welcome message."
          onDismiss={reset}
        />
      </div>
    </div>
  );
}
