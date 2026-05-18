import Link from "next/link";

const STATUS_COPY = {
  accessDenied: {
    code: "403",
    eyebrow: "Access denied",
    title: "This JAMARQ Digital page is not available publicly.",
    body: "The page may require a valid admin session or may be restricted to the JAMARQ Digital team.",
  },
  notFound: {
    code: "404",
    eyebrow: "Page not found",
    title: "This page is not available.",
    body: "The route may have moved, or the page may no longer be public.",
  },
  serverError: {
    code: "500",
    eyebrow: "Server error",
    title: "Something went wrong.",
    body: "The site hit an unexpected issue. Please return home and try again shortly.",
  },
  maintenance: {
    code: "503",
    eyebrow: "Maintenance",
    title: "This site is temporarily unavailable.",
    body: "Maintenance or a temporary host issue may be in progress. Please check back soon.",
  },
};

export type StatusPageKind = keyof typeof STATUS_COPY;

export function StatusPage({
  kind = "notFound",
  children,
}: {
  kind?: StatusPageKind;
  children?: React.ReactNode;
}) {
  const copy = STATUS_COPY[kind];

  return (
    <main
      id="main-content"
      className="min-h-[70vh] bg-jamarq-black px-5 py-24 text-jamarq-white md:px-10"
    >
      <section className="mx-auto max-w-3xl rounded-xl border border-slate bg-steel/70 p-8 text-center shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
        <p className="text-xs uppercase tracking-[0.35em] text-jamarq-cyan">
          JAMARQ Digital
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-jamarq-gray">
          {copy.code} / {copy.eyebrow}
        </p>
        <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
          {copy.title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-jamarq-gray">
          {copy.body}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-jamarq-cyan px-6 text-sm font-semibold text-jamarq-black"
          >
            Go home
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate px-6 text-sm font-semibold text-mist transition hover:border-jamarq-cyan hover:text-jamarq-cyan"
          >
            Contact
          </Link>
        </div>
        {children ? <div className="mt-6">{children}</div> : null}
      </section>
    </main>
  );
}
