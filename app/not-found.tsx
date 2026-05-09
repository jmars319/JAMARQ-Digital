import Link from "next/link";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      <section className="mx-auto max-w-3xl px-5 pb-20 pt-32 text-center md:px-10">
        <p className="text-xs uppercase tracking-[0.35em] text-jamarq-gray">
          Not found
        </p>
        <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
          This page is not available.
        </h1>
        <p className="mt-5 text-lg leading-8 text-jamarq-gray">
          The route may have moved, or the page may no longer be public.
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
      </section>
      <Footer />
    </main>
  );
}
