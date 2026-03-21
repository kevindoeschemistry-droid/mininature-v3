"use client";
import { useState, FormEvent } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function useFormSubmit(formName: string) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      // In development without key, simulate success
      await new Promise((r) => setTimeout(r, 1000));
      setStatus("success");
      form.reset();
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("subject", `MiniNature: ${formName}`);
    formData.append("from_name", "MiniNature Reserve Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(
          data.message || "Something went wrong. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
    }
  };

  const reset = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  return { status, errorMessage, handleSubmit, reset };
}
