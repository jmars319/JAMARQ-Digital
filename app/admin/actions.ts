"use server";

import {
  assertAdmin,
  clearAdminSession,
  passwordMatches,
  setAdminSession,
  setStoredAdminPassword,
} from "@/lib/admin";
import type { AdminActionState } from "@/lib/admin-types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function validatePasswordChange(
  currentPassword: string,
  newPassword: string,
  confirmPassword: string,
) {
  const fieldErrors: NonNullable<AdminActionState["fieldErrors"]> = {};

  if (!currentPassword) {
    fieldErrors.currentPassword = ["Enter the current password."];
  }

  if (newPassword.length < 12) {
    fieldErrors.newPassword = ["Use at least 12 characters."];
  } else if (newPassword.length > 128) {
    fieldErrors.newPassword = ["Use 128 characters or fewer."];
  }

  if (!confirmPassword) {
    fieldErrors.confirmPassword = ["Confirm the new password."];
  } else if (newPassword !== confirmPassword) {
    fieldErrors.confirmPassword = ["Passwords do not match."];
  }

  if (currentPassword && newPassword && currentPassword === newPassword) {
    fieldErrors.newPassword = [
      "Choose a password that is different from the current one.",
    ];
  }

  return Object.keys(fieldErrors).length > 0 ? fieldErrors : null;
}

export async function loginAdmin(formData: FormData) {
  const password = getString(formData, "password");

  if (!password || !(await passwordMatches(password))) {
    redirect("/admin?error=invalid");
  }

  await setAdminSession();
  redirect("/admin");
}

export async function logoutAdmin() {
  await clearAdminSession();
  redirect("/admin");
}

export async function changeAdminPassword(
  _previousState: AdminActionState,
  formData: FormData,
): Promise<AdminActionState> {
  await assertAdmin();

  const currentPassword = getString(formData, "currentPassword");
  const newPassword = getString(formData, "newPassword");
  const confirmPassword = getString(formData, "confirmPassword");
  const fieldErrors = validatePasswordChange(
    currentPassword,
    newPassword,
    confirmPassword,
  );

  if (fieldErrors) {
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      fieldErrors,
    };
  }

  if (!(await passwordMatches(currentPassword))) {
    return {
      ok: false,
      message: "Current password is incorrect.",
      fieldErrors: {
        currentPassword: ["Current password is incorrect."],
      },
    };
  }

  await setStoredAdminPassword(newPassword);
  await setAdminSession();
  revalidatePath("/admin");

  return {
    ok: true,
    message: "Admin password changed.",
  };
}
