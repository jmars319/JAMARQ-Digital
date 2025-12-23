"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type FormEvent,
  type ReactNode
} from "react";
import { createPortal } from "react-dom";

type ContactFormValues = {
  name: string;
  email: string;
  company: string;
  budget: string;
  projectDetails: string;
};

export type ContactModalOptions = {
  subject?: string;
  source?: string;
  initialMessage?: string;
};

type ContactModalContextValue = {
  openContactModal: (options?: ContactModalOptions) => void;
  closeContactModal: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | undefined>(undefined);

const defaultFormValues: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  budget: "",
  projectDetails: ""
};

const LABEL_CLASSES = "text-xs uppercase tracking-[0.3em] text-slate";
const INPUT_CLASSES =
  "w-full rounded-lg border border-slate bg-jamarq-black/40 px-4 py-2 text-jamarq-white focus:outline-none focus:ring-2 focus:ring-jamarq-cyan";

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useContactModal must be used within a ContactModalProvider");
  }
  return context;
}

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formValues, setFormValues] = useState<ContactFormValues>(defaultFormValues);
  const [options, setOptions] = useState<ContactModalOptions>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const resetForm = useCallback(() => {
    setFormValues((prev) => ({
      ...defaultFormValues,
      projectDetails: options.initialMessage ?? prev.projectDetails
    }));
    setStatus("idle");
    setErrorMessage(null);
  }, [options.initialMessage]);

  const openContactModal = useCallback((incomingOptions?: ContactModalOptions) => {
    setOptions(incomingOptions ?? {});
    setIsOpen(true);
    setFormValues({
      ...defaultFormValues,
      projectDetails: incomingOptions?.initialMessage ?? ""
    });
    setStatus("idle");
    setErrorMessage(null);
  }, []);

  const closeContactModal = useCallback(() => {
    setIsOpen(false);
    resetForm();
  }, [resetForm]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeContactModal();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeContactModal]);

  const handleChange = useCallback((field: keyof ContactFormValues, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!formValues.name.trim() || !formValues.email.trim() || !formValues.projectDetails.trim()) {
        setErrorMessage("Name, email, and project details are required.");
        return;
      }

      setStatus("loading");
      setErrorMessage(null);

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ...formValues,
            subject: options.subject,
            source: options.source
          })
        });

        if (!response.ok) {
          throw new Error("Unable to send your message. Please try again.");
        }

        setStatus("success");
        setTimeout(() => {
          closeContactModal();
        }, 1500);
      } catch (error) {
        console.error(error);
        setStatus("error");
        setErrorMessage(
          "Something went wrong while sending your message. Please retry or email hello@jamarq.digital."
        );
      }
    },
    [formValues, options.source, options.subject, closeContactModal]
  );

  const modalContent = useMemo(() => {
    if (!isOpen || typeof document === "undefined") {
      return null;
    }

    return createPortal(
      <div
        className="modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-jamarq-black/80 backdrop-blur-sm px-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <div className="modal-content relative w-full max-w-2xl rounded-3xl border border-slate bg-jamarq-black p-8 shadow-2xl">
          <button
            type="button"
            className="absolute top-4 right-4 text-jamarq-gray hover:text-jamarq-cyan focus:outline-none focus:ring-2 focus:ring-jamarq-cyan focus:ring-offset-2 focus:ring-offset-jamarq-black rounded-full p-1"
            onClick={closeContactModal}
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
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="space-y-2 text-sm">
                <span className="text-jamarq-gray">Name *</span>
                <input
                  type="text"
                  required
                  value={formValues.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                  className={INPUT_CLASSES}
                />
              </label>
              <label className="space-y-2 text-sm">
                <span className="text-jamarq-gray">Email *</span>
                <input
                  type="email"
                  required
                  value={formValues.email}
                  onChange={(event) => handleChange("email", event.target.value)}
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
                  onChange={(event) => handleChange("company", event.target.value)}
                  className={INPUT_CLASSES}
                />
              </label>
              <label className="space-y-2 text-sm">
                <span className="text-jamarq-gray">Budget range</span>
                <input
                  type="text"
                  value={formValues.budget}
                  onChange={(event) => handleChange("budget", event.target.value)}
                  placeholder="$4k–$8k"
                  className={INPUT_CLASSES}
                />
              </label>
            </div>
            <label className="space-y-2 text-sm block">
              <span className="text-jamarq-gray">Project details *</span>
              <textarea
                required
                value={formValues.projectDetails}
                onChange={(event) => handleChange("projectDetails", event.target.value)}
                rows={5}
                className="w-full rounded-lg border border-slate bg-jamarq-black/40 px-4 py-3 text-jamarq-white focus:outline-none focus:ring-2 focus:ring-jamarq-cyan"
              />
            </label>
            {errorMessage && <p className="text-sm text-red-400">{errorMessage}</p>}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-xs text-jamarq-gray">
                This message goes straight to hello@jamarq.digital. No list, no spam.
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
  }, [closeContactModal, formValues, handleChange, handleSubmit, isOpen, status, errorMessage]);

  return (
    <ContactModalContext.Provider value={{ openContactModal, closeContactModal }}>
      {children}
      {modalContent}
    </ContactModalContext.Provider>
  );
}
