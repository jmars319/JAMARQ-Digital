import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import {
  recordContactSubmission,
  updateContactSubmissionEmailStatus,
} from "@/lib/content-repository";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY ?? "";
const SENDGRID_TO_EMAIL = process.env.SENDGRID_TO_EMAIL ?? process.env.CONTACT_TO_EMAIL ?? "";
const SENDGRID_FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL ?? SENDGRID_TO_EMAIL;
const MAX_PAYLOAD_BYTES = 16_000;
const MIN_SUBMIT_MS = 800;

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

function readContentLength(request: Request) {
  const value = Number(request.headers.get("content-length") || 0);
  return Number.isFinite(value) ? value : 0;
}

function readText(
  body: Record<string, unknown>,
  key: string,
  maxLength: number,
) {
  const value = body[key];
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 160;
}

function isSpamTrap(body: Record<string, unknown>) {
  const website = readText(body, "website", 200);
  const startedAt = Number(body.startedAt);

  return (
    website.length > 0 ||
    (Number.isFinite(startedAt) && Date.now() - startedAt < MIN_SUBMIT_MS)
  );
}

export async function POST(request: Request) {
  if (readContentLength(request) > MAX_PAYLOAD_BYTES) {
    return NextResponse.json({ error: "Payload too large." }, { status: 413 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const payload = body as Record<string, unknown>;
  if (isSpamTrap(payload)) {
    return NextResponse.json({ success: true }, { status: 202 });
  }

  const safeName = readText(payload, "name", 100);
  const safeEmail = readText(payload, "email", 160);
  const safeCompany = readText(payload, "company", 120) || "Not provided";
  const safeBudget = readText(payload, "budget", 120) || "Not provided";
  const safeDetails = readText(payload, "projectDetails", 2_000);
  const safeSubject =
    readText(payload, "subject", 160) || "New JAMARQ Digital inquiry";
  const safeSource = readText(payload, "source", 120) || "Unknown source";

  if (!safeName || !safeEmail || safeDetails.length < 12) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  if (!isValidEmail(safeEmail)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const submissionId = await recordContactSubmission({
    name: safeName,
    email: safeEmail,
    company: safeCompany,
    budget: safeBudget,
    projectDetails: safeDetails,
    subject: safeSubject,
    source: safeSource,
  });

  if (!SENDGRID_API_KEY || !SENDGRID_TO_EMAIL || !SENDGRID_FROM_EMAIL) {
    console.warn("SendGrid is not configured. JAMARQ contact message was recorded only.");
    return NextResponse.json(
      { success: true, message: "Message recorded, email delivery disabled." },
      { status: 202 },
    );
  }

  const textBody = [
    `Name: ${safeName}`,
    `Email: ${safeEmail}`,
    `Company: ${safeCompany}`,
    `Budget: ${safeBudget}`,
    `Source: ${safeSource}`,
    "",
    "Project Details:",
    safeDetails
  ].join("\n");

  try {
    await sgMail.send({
      to: SENDGRID_TO_EMAIL,
      from: SENDGRID_FROM_EMAIL,
      replyTo: safeEmail,
      subject: `${safeSubject} — ${safeName}`,
      text: textBody
    });

    await updateContactSubmissionEmailStatus(submissionId, "sent");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("SendGrid error", error);
    await updateContactSubmissionEmailStatus(submissionId, "failed");
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
