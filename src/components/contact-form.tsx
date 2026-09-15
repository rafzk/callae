"use client";

import { useId, useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error" | "unconfigured";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const formId = useId();
  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    // Honeypot — left empty by real visitors, filled in by most bots.
    website: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  function updateField<K extends keyof typeof values>(key: K, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): Errors {
    const next: Errors = {};
    if (values.name.trim().length < 2) {
      next.name = "Please enter your name.";
    }
    if (!EMAIL_PATTERN.test(values.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (values.message.trim().length < 10) {
      next.message = "Please add a few words about what you're building.";
    }
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (values.website.trim().length > 0) {
      // Honeypot triggered — quietly drop the submission.
      return;
    }

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setStatus("idle");
      return;
    }

    if (!siteConfig.web3FormsAccessKey) {
      setStatus("unconfigured");
      return;
    }

    setStatus("submitting");
    setServerMessage(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: siteConfig.web3FormsAccessKey,
          subject: `New enquiry from ${values.name} via callae.eu`,
          from_name: values.name,
          name: values.name,
          email: values.email,
          company: values.company,
          message: values.message,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setValues({ name: "", email: "", company: "", message: "", website: "" });
      } else {
        setStatus("error");
        setServerMessage(
          typeof result.message === "string" ? result.message : null
        );
      }
    } catch {
      setStatus("error");
      setServerMessage(null);
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form noValidate onSubmit={handleSubmit} className="mt-10 space-y-6">
      {/* Honeypot field — hidden from sighted and screen-reader users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>Leave this field empty</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => updateField("website", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field
          id={`${formId}-name`}
          label="Name"
          required
          error={errors.name}
        >
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
            className={inputClass(Boolean(errors.name))}
          />
        </Field>

        <Field
          id={`${formId}-email`}
          label="Email"
          required
          error={errors.email}
        >
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? `${formId}-email-error` : undefined}
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={inputClass(Boolean(errors.email))}
          />
        </Field>
      </div>

      <Field id={`${formId}-company`} label="Company" optional>
        <input
          id={`${formId}-company`}
          name="company"
          type="text"
          autoComplete="organization"
          value={values.company}
          onChange={(e) => updateField("company", e.target.value)}
          className={inputClass(false)}
        />
      </Field>

      <Field
        id={`${formId}-message`}
        label="Message"
        required
        error={errors.message}
      >
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={5}
          required
          aria-required="true"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
          value={values.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={inputClass(Boolean(errors.message))}
        />
      </Field>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-lift inline-flex items-center justify-center rounded-full bg-green px-7 py-3.5 text-sm font-medium text-paper disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending…" : "Send message"}
        </button>
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-sm font-medium text-ink-soft underline decoration-line underline-offset-4 hover:text-ink"
        >
          or email {siteConfig.email} directly
        </a>
      </div>

      <div aria-live="polite" className="text-sm">
        {status === "unconfigured" ? (
          <p className="border border-line bg-paper-deep px-4 py-3 text-ink-soft">
            Online submission isn&rsquo;t connected yet, so this message
            wouldn&rsquo;t reach us — please email{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-ink underline decoration-line underline-offset-4"
            >
              {siteConfig.email}
            </a>{" "}
            directly instead.
          </p>
        ) : null}
        {status === "success" ? (
          <p className="border border-green/30 bg-green-soft px-4 py-3 text-green-deep">
            Thanks — your message has been sent. We&rsquo;ll get back to you
            shortly.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="border border-line bg-paper-deep px-4 py-3 text-ink-soft">
            {serverMessage ??
              "Something went wrong sending your message."}{" "}
            Please try again, or email{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-medium text-ink underline decoration-line underline-offset-4"
            >
              {siteConfig.email}
            </a>{" "}
            directly.
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {label}
        {optional ? (
          <span className="ml-1 font-normal text-ink-faint">(optional)</span>
        ) : null}
        {required ? (
          <span aria-hidden className="ml-0.5 text-green">
            *
          </span>
        ) : null}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-[#8a3324]">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return [
    "w-full border bg-paper px-4 py-3 text-base text-ink placeholder:text-ink-faint",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-paper",
    hasError ? "border-[#8a3324]" : "border-line",
  ].join(" ");
}
