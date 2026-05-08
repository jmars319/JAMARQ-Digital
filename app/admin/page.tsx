import { loginAdmin, logoutAdmin } from "@/app/admin/actions";
import { ChangeAdminPasswordForm } from "@/components/admin-password-form";
import { adminPasswordIsUsable, isAdminAuthenticated } from "@/lib/admin";
import {
  getContentModuleSummary,
  listRecentContactSubmissions,
} from "@/lib/content-repository";

export const metadata = {
  title: "Admin",
  description: "Lightweight JAMARQ Digital admin surface.",
};

export const runtime = "nodejs";

type AdminPageProps = {
  searchParams: Promise<{ error?: string | string[] }>;
};

export default async function AdminPage({ searchParams }: AdminPageProps) {
  const authenticated = await isAdminAuthenticated();
  const params = await searchParams;

  if (!authenticated) {
    const configured = await adminPasswordIsUsable();
    return (
      <AdminLogin configured={configured} hasError={params.error === "invalid"} />
    );
  }

  const [contentModules, recentSubmissions] = await Promise.all([
    getContentModuleSummary(),
    listRecentContactSubmissions(),
  ]);

  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
        <div className="flex flex-col gap-6 border-b border-slate pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-jamarq-cyan">
              JAMARQ Digital
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-normal text-jamarq-white sm:text-5xl">
              Admin
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-jamarq-gray">
              Lightweight protected controls for settings that need to live
              outside the public build. Structured public records are
              DB-backed with code seed fallbacks.
            </p>
          </div>
          <form action={logoutAdmin}>
            <button
              type="submit"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate px-5 text-sm font-semibold text-mist transition hover:border-red-300/60 hover:bg-red-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-200/70"
            >
              Sign out
            </button>
          </form>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="rounded-lg border border-slate bg-steel/80 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-jamarq-cyan">
              Security
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-jamarq-white">
              Password management
            </h2>
            <p className="mt-3 text-sm leading-6 text-jamarq-gray">
              The environment password is the bootstrap fallback. Password
              changes made here are stored as a hash in the Turso database.
            </p>
          </div>
          <ChangeAdminPasswordForm />
        </div>

        <div className="mt-5 rounded-lg border border-slate bg-steel/80 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-jamarq-cyan">
            DB content modules
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-jamarq-white">
            Seeded and ready
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-jamarq-gray">
            Structured public content now reads from the database with code
            fallbacks. Full editing controls can be added module by module
            without changing the public routes again.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {contentModules.map((module) => (
              <div
                key={module.label}
                className="rounded border border-slate bg-jamarq-black/70 p-4"
              >
                <p className="text-2xl font-semibold text-jamarq-white">
                  {module.count}
                </p>
                <p className="mt-1 text-sm font-semibold text-mist">
                  {module.label}
                </p>
                <p className="mt-2 text-xs leading-5 text-jamarq-gray">
                  {module.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 rounded-lg border border-slate bg-steel/80 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-jamarq-cyan">
            Recent contact submissions
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-jamarq-white">
            Intake snapshot
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-jamarq-gray">
            New inquiries are recorded in the database before email delivery is
            marked as sent or failed.
          </p>
          {recentSubmissions.length === 0 ? (
            <div className="mt-5 rounded border border-slate bg-jamarq-black/70 p-4 text-sm text-jamarq-gray">
              No contact submissions have been recorded yet.
            </div>
          ) : (
            <div className="mt-5 grid gap-3">
              {recentSubmissions.map((submission) => (
                <article
                  key={submission.id}
                  className="rounded border border-slate bg-jamarq-black/70 p-4"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-mist">
                        {submission.name}
                      </p>
                      <p className="mt-1 text-xs text-jamarq-gray">
                        {submission.email}
                        {submission.company ? ` / ${submission.company}` : ""}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em]">
                      <span className="rounded-full border border-slate px-2 py-1 text-jamarq-gray">
                        {submission.status}
                      </span>
                      <span className="rounded-full border border-slate px-2 py-1 text-jamarq-gray">
                        email {submission.emailStatus}
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-jamarq-gray">
                    {submission.projectDetails}
                  </p>
                  <p className="mt-3 text-xs text-jamarq-gray">
                    {formatAdminDate(submission.createdAt)} / Source:{" "}
                    {submission.source || "Unknown"}
                  </p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

function formatAdminDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function AdminLogin({
  configured,
  hasError,
}: {
  configured: boolean;
  hasError: boolean;
}) {
  return (
    <main id="main-content" className="min-h-screen bg-jamarq-black text-jamarq-white">
      <section className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-jamarq-cyan">
            JAMARQ Digital
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal text-jamarq-white sm:text-5xl">
            Admin
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-jamarq-gray">
            Protected settings for early admin functionality. This route is not
            linked from the public navigation and only appears quietly in the
            footer.
          </p>
        </div>
        <form
          action={loginAdmin}
          className="mt-8 rounded-lg border border-slate bg-steel/80 p-6"
        >
          {!configured ? (
            <div className="mb-5 rounded border border-red-300/40 bg-red-400/10 px-4 py-3 text-sm text-red-100">
              Set ADMIN_PASSWORD before using the admin area.
            </div>
          ) : null}
          {hasError ? (
            <div className="mb-5 rounded border border-red-300/40 bg-red-400/10 px-4 py-3 text-sm text-red-100">
              Invalid admin password.
            </div>
          ) : null}
          <label>
            <span className="text-sm font-medium text-mist">
              Admin password
            </span>
            <input
              name="password"
              type="password"
              disabled={!configured}
              className="mt-2 h-11 w-full rounded border border-slate bg-jamarq-black px-3 text-sm text-jamarq-white outline-none transition placeholder:text-jamarq-gray focus:border-jamarq-cyan focus:ring-2 focus:ring-jamarq-cyan/20 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </label>
          <button
            type="submit"
            disabled={!configured}
            className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-jamarq-cyan px-5 text-sm font-semibold text-jamarq-black shadow-[0_0_24px_rgba(9,166,214,0.22)] transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jamarq-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-jamarq-black disabled:cursor-not-allowed disabled:opacity-60"
          >
            Sign in
          </button>
        </form>
      </section>
    </main>
  );
}
