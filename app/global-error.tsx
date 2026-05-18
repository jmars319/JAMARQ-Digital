"use client";

import { StatusPage } from "@/components/StatusPage";
import "./globals.css";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-jamarq-black text-jamarq-white">
        <StatusPage kind="serverError">
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-jamarq-cyan px-6 text-sm font-semibold text-jamarq-cyan transition hover:bg-jamarq-cyan hover:text-jamarq-black"
          >
            Try again
          </button>
        </StatusPage>
      </body>
    </html>
  );
}
