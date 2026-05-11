"use client";

import { createPortal } from "react-dom";
import type { FormEvent } from "react";

type ContactFormValues = {
  name: string;
  email: string;
  company: string;
  budget: string;
  projectDetails: string;
};

type ContactModalStatus = "idle" | "loading" | "success" | "error";

type ContactModalProps = {
  isOpen: boolean;
  formValues: ContactFormValues;
  status: ContactModalStatus;
  errorMessage: string | null;
  onClose: () => void;
  onChange: (field: keyof ContactFormValues, value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const LABEL_CLASSES = "text-xs uppercase tracking-[0.3em] text-jamarq-gray";
const INPUT_CLASSES =
  "w-full rounded-lg border border-slate bg-jamarq-black/40 px-4 py-2 text-jamarq-white focus:outline-none focus:ring-2 focus:ring-jamarq-cyan";

export function ContactModal({
  isOpen,
  formValues,
  status,
  errorMessage,
  onClose,
  onChange,
  onSubmit
}: ContactModalProps) {
  if (!isOpen || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      className="modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-jamarq-black/88 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div className="modal-content relative w-full max-w-2xl rounded-3xl border border-slate bg-jamarq-black p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
        <button
          type="button"
          className="absolute top-4 right-4 text-jamarq-gray hover:text-jamarq-cyan focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black rounded-full p-1"
          onClick={onClose}
          aria-label="Close contact form"
        >
          ×
        </button>
        <div className="space-y-3 mb-6">
          <p className={LABEL_CLASSES}>Contact</p>
          <h2 id="contact-modal-title" className="text-2xl md:text-3xl font-semibold">
            Tell me about your project
          </h2>
          <p className="text-jamarq-gray">
            Fill out the form below and I’ll respond within one business day. No sales team, just me.
          </p>
        </div>
        <form className="space-y-5" onSubmit={onSubmit}>
          <input
            type="text"
            name="jamarq_hp"
            autoComplete="new-password"
            tabIndex={-1}
            className="hidden"
            aria-hidden="true"
            aria-label="Leave this field blank"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="space-y-2 text-sm">
              <span className="text-jamarq-gray">Name *</span>
              <input
                type="text"
                required
                value={formValues.name}
                onChange={(event) => onChange("name", event.target.value)}
                className={INPUT_CLASSES}
              />
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-jamarq-gray">Email *</span>
              <input
                type="email"
                required
                value={formValues.email}
                onChange={(event) => onChange("email", event.target.value)}
                className={INPUT_CLASSES}
              />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="space-y-2 text-sm">
              <span className="text-jamarq-gray">Company (optional)</span>
              <input
                type="text"
                value={formValues.company}
                onChange={(event) => onChange("company", event.target.value)}
                className={INPUT_CLASSES}
              />
            </label>
            <label className="space-y-2 text-sm">
              <span className="text-jamarq-gray">Budget range</span>
              <input
                type="text"
                value={formValues.budget}
                onChange={(event) => onChange("budget", event.target.value)}
                placeholder="$2.5k–$15k+"
                className={INPUT_CLASSES}
              />
            </label>
          </div>
          <label className="space-y-2 text-sm block">
            <span className="text-jamarq-gray">Project details *</span>
            <textarea
              required
              value={formValues.projectDetails}
              onChange={(event) => onChange("projectDetails", event.target.value)}
              rows={5}
              className="w-full rounded-lg border border-slate bg-jamarq-black/40 px-4 py-3 text-jamarq-white focus:outline-none focus:ring-2 focus:ring-jamarq-cyan"
            />
          </label>
          {errorMessage && <p className="text-sm text-red-400">{errorMessage}</p>}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xs text-jamarq-gray">
              This form routes directly to JAMARQ intake. No list, no spam.
            </p>
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center bg-jamarq-cyan text-jamarq-black px-6 py-2 rounded-md font-semibold text-sm hover:bg-opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending…" : status === "success" ? "Sent!" : "Send message"}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}
