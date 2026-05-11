"use client";

import dynamic from "next/dynamic";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type FormEvent,
  type ReactNode
} from "react";
import { loadContactModal } from "./contactModalLoader";

export type ContactFormValues = {
  name: string;
  email: string;
  company: string;
  budget: string;
  projectDetails: string;
};

export type ContactModalStatus = "idle" | "loading" | "success" | "error";

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
const ContactModal = dynamic(
  () => loadContactModal().then((mod) => mod.ContactModal),
  { ssr: false }
);

const defaultFormValues: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  budget: "",
  projectDetails: ""
};

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
  const [status, setStatus] = useState<ContactModalStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formOpenedAt, setFormOpenedAt] = useState(Date.now());

  const resetForm = useCallback(() => {
    setFormValues((prev) => ({
      ...defaultFormValues,
      projectDetails: options.initialMessage ?? prev.projectDetails
    }));
    setStatus("idle");
    setErrorMessage(null);
  }, [options.initialMessage]);

  const openContactModal = useCallback((incomingOptions?: ContactModalOptions) => {
    void loadContactModal();
    setOptions(incomingOptions ?? {});
    setIsOpen(true);
    setFormOpenedAt(Date.now());
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
        const submittedFormData = new FormData(event.currentTarget);
        const jamarqHp = String(submittedFormData.get("jamarq_hp") ?? "");

        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ...formValues,
            subject: options.subject,
            source: options.source,
            jamarq_hp: jamarqHp,
            startedAt: formOpenedAt
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
          "Something went wrong while sending your message. Please retry the form in a moment."
        );
      }
    },
    [formOpenedAt, formValues, options.source, options.subject, closeContactModal]
  );

  return (
    <ContactModalContext.Provider value={{ openContactModal, closeContactModal }}>
      {children}
      <ContactModal
        isOpen={isOpen}
        formValues={formValues}
        status={status}
        errorMessage={errorMessage}
        onClose={closeContactModal}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </ContactModalContext.Provider>
  );
}
