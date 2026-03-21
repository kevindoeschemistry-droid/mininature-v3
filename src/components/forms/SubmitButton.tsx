"use client";

import { Loader2 } from "lucide-react";

interface SubmitButtonProps {
  status: "idle" | "submitting" | "success" | "error";
  children: React.ReactNode;
  className?: string;
}

export default function SubmitButton({
  status,
  children,
  className = "",
}: SubmitButtonProps) {
  const isSubmitting = status === "submitting";

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`btn btn-primary ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""} ${className}`}
    >
      {isSubmitting ? (
        <>
          <Loader2 size={16} className="animate-spin" />
          Sending...
        </>
      ) : (
        children
      )}
    </button>
  );
}
