import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY ?? "";
const SENDGRID_TO_EMAIL = process.env.SENDGRID_TO_EMAIL ?? process.env.CONTACT_TO_EMAIL ?? "";
const SENDGRID_FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL ?? SENDGRID_TO_EMAIL;

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

export async function POST(request: Request) {
  if (!SENDGRID_API_KEY || !SENDGRID_TO_EMAIL || !SENDGRID_FROM_EMAIL) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const { name, email, company, budget, projectDetails, subject, source } = body;

  if (!name || !email || !projectDetails) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const safeName = String(name).trim();
  const safeEmail = String(email).trim();
  const safeCompany = company ? String(company).trim() : "Not provided";
  const safeBudget = budget ? String(budget).trim() : "Not provided";
  const safeDetails = String(projectDetails).trim();
  const safeSubject = subject ? String(subject).trim() : "New JAMARQ Digital inquiry";
  const safeSource = source ? String(source).trim() : "Unknown source";

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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("SendGrid error", error);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
