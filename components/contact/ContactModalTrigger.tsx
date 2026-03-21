"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useContactModal, type ContactModalOptions } from "./ContactModalProvider";
import { loadContactModal } from "./contactModalLoader";

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
      onPointerEnter={(event) => {
        rest.onPointerEnter?.(event);
        void loadContactModal();
      }}
      onFocus={(event) => {
        rest.onFocus?.(event);
        void loadContactModal();
      }}
      onTouchStart={(event) => {
        rest.onTouchStart?.(event);
        void loadContactModal();
      }}
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
