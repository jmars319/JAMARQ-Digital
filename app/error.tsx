"use client";

import { StatusPage } from "@/components/StatusPage";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <StatusPage kind="serverError">
      <button
        type="button"
        onClick={reset}
        className="inline-flex min-h-11 items-center justify-center rounded-md border border-jamarq-cyan px-6 text-sm font-semibold text-jamarq-cyan transition hover:bg-jamarq-cyan hover:text-jamarq-black"
      >
        Try again
      </button>
    </StatusPage>
  );
}
