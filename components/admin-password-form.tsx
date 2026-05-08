"use client";

import { changeAdminPassword } from "@/app/admin/actions";
import type { AdminActionState } from "@/lib/admin-types";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const initialState: AdminActionState = {
  ok: false,
  message: "",
};

function FieldErrors({ errors }: { errors?: string[] }) {
  if (!errors?.length) {
    return null;
  }

  return <p className="mt-2 text-sm text-red-200">{errors[0]}</p>;
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex min-h-11 items-center justify-center rounded-full bg-jamarq-cyan px-5 text-sm font-semibold text-jamarq-black shadow-[0_0_24px_rgba(9,166,214,0.22)] transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jamarq-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-jamarq-black disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Saving..." : "Change password"}
    </button>
  );
}

export function ChangeAdminPasswordForm() {
  const [state, formAction] = useActionState(
    changeAdminPassword,
    initialState,
  );

  return (
    <form
      action={formAction}
      className="rounded-lg border border-slate bg-steel/80 p-5 sm:p-6"
    >
      {state.message ? (
        <div
          className={
            state.ok
              ? "mb-5 rounded border border-emerald-300/40 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100"
              : "mb-5 rounded border border-red-300/40 bg-red-400/10 px-4 py-3 text-sm text-red-100"
          }
          role="status"
        >
          {state.message}
        </div>
      ) : null}

      <div className="grid gap-4 lg:grid-cols-3">
        <label>
          <span className="text-sm font-medium text-mist">
            Current password
          </span>
          <input
            name="currentPassword"
            type="password"
            autoComplete="current-password"
            className="mt-2 h-11 w-full rounded border border-slate bg-jamarq-black px-3 text-sm text-jamarq-white outline-none transition placeholder:text-jamarq-gray focus:border-jamarq-cyan focus:ring-2 focus:ring-jamarq-cyan/20"
          />
          <FieldErrors errors={state.fieldErrors?.currentPassword} />
        </label>

        <label>
          <span className="text-sm font-medium text-mist">New password</span>
          <input
            name="newPassword"
            type="password"
            autoComplete="new-password"
            className="mt-2 h-11 w-full rounded border border-slate bg-jamarq-black px-3 text-sm text-jamarq-white outline-none transition placeholder:text-jamarq-gray focus:border-jamarq-cyan focus:ring-2 focus:ring-jamarq-cyan/20"
          />
          <FieldErrors errors={state.fieldErrors?.newPassword} />
        </label>

        <label>
          <span className="text-sm font-medium text-mist">
            Confirm password
          </span>
          <input
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            className="mt-2 h-11 w-full rounded border border-slate bg-jamarq-black px-3 text-sm text-jamarq-white outline-none transition placeholder:text-jamarq-gray focus:border-jamarq-cyan focus:ring-2 focus:ring-jamarq-cyan/20"
          />
          <FieldErrors errors={state.fieldErrors?.confirmPassword} />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm leading-6 text-jamarq-gray">
          New passwords must be at least 12 characters. Passwords are hashed
          before they are stored in the admin database.
        </p>
        <SubmitButton />
      </div>
    </form>
  );
}
