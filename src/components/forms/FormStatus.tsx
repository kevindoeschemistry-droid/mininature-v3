"use client";

import { CheckCircle, AlertCircle, X } from "lucide-react";

interface FormStatusProps {
  status: "idle" | "submitting" | "success" | "error";
  errorMessage?: string;
  successMessage?: string;
  onDismiss?: () => void;
}

export default function FormStatus({
  status,
  errorMessage,
  successMessage,
  onDismiss,
}: FormStatusProps) {
  if (status === "idle" || status === "submitting") return null;

  if (status === "success") {
    return (
      <div
        className="flex items-center gap-3 bg-mint-mist border border-sage text-reserve-green px-5 py-4 rounded-organic transition-all duration-300 animate-fade-up"
        role="status"
      >
        <CheckCircle size={20} className="shrink-0 text-sage" />
        <p className="text-sm font-medium flex-1">
          {successMessage || "Thank you! We'll be in touch soon."}
        </p>
        {onDismiss && (
          <button
            type="button"
            onClick={onDismiss}
            className="shrink-0 p-1 rounded-full hover:bg-sage/20 transition-colors"
            aria-label="Dismiss"
          >
            <X size={16} />
          </button>
        )}
      </div>
    );
  }

  if (status === "error") {
    return (
      <div
        className="flex items-center gap-3 bg-california-poppy/10 border border-california-poppy text-deep-forest px-5 py-4 rounded-organic transition-all duration-300 animate-fade-up"
        role="alert"
      >
        <AlertCircle size={20} className="shrink-0 text-california-poppy" />
        <div className="flex-1">
          <p className="text-sm font-medium">
            {errorMessage || "Something went wrong. Please try again."}
          </p>
          <p className="text-xs text-forest-mid mt-1">
            If the problem persists, please email us at info@mininature.org.
          </p>
        </div>
      </div>
    );
  }

  return null;
}
