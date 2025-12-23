"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useContactModal, type ContactModalOptions } from "./ContactModalProvider";

interface ContactModalTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  prefill?: ContactModalOptions;
}

export function ContactModalTrigger({ children, prefill, className = "", ...rest }: ContactModalTriggerProps) {
  const { openContactModal } = useContactModal();

  return (
    <button
      type="button"
      {...rest}
      className={className}
      onClick={(event) => {
        rest.onClick?.(event);
        if (event.defaultPrevented) {
          return;
        }
        openContactModal(prefill);
      }}
    >
      {children}
    </button>
  );
}
