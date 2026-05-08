export type AdminPasswordField =
  | "currentPassword"
  | "newPassword"
  | "confirmPassword";

export type AdminActionState = {
  ok: boolean;
  message: string;
  fieldErrors?: Partial<Record<AdminPasswordField, string[]>>;
};
