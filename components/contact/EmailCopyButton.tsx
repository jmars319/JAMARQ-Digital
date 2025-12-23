"use client";

import { useState } from "react";

interface EmailCopyButtonProps {
  email: string;
  label?: string;
  className?: string;
}

export function EmailCopyButton({ email, label, className = "" }: EmailCopyButtonProps) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard?.writeText(email);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch (error) {
          console.error("Clipboard copy failed", error);
        }
      }}
      className={`inline-flex items-center gap-3 text-jamarq-cyan hover:text-jamarq-magenta transition-colors ${className}`}
    >
      <span className="font-semibold text-xl">{label ?? email}</span>
      <span className="text-xs uppercase tracking-[0.3em] text-slate">
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}
