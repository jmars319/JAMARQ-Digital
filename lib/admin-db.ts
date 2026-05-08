import { createClient, type Client } from "@libsql/client";
import { mkdirSync } from "node:fs";
import { join } from "node:path";

const localDataDir = join(process.cwd(), ".data");

declare global {
  var jamarqAdminDbClient: Client | undefined;
  var jamarqAdminDbReady: Promise<void> | undefined;
}

export function getAdminDb() {
  if (!globalThis.jamarqAdminDbClient) {
    const url =
      process.env.LIBSQL_URL ||
      (process.env.NODE_ENV === "production"
        ? ""
        : "file:.data/jamarq-admin.db");

    if (!url) {
      throw new Error(
        "LIBSQL_URL is required in production for the JAMARQ admin database.",
      );
    }

    if (process.env.VERCEL && url.startsWith("file:")) {
      throw new Error(
        "Vercel deployments require a hosted libSQL/Turso database. Set LIBSQL_URL instead of using a local file.",
      );
    }

    if (url.startsWith("file:")) {
      mkdirSync(localDataDir, { recursive: true });
    }

    globalThis.jamarqAdminDbClient = createClient({
      url,
      authToken: process.env.LIBSQL_AUTH_TOKEN || undefined,
    });
  }

  return globalThis.jamarqAdminDbClient;
}

export async function ensureAdminDb() {
  if (!globalThis.jamarqAdminDbReady) {
    globalThis.jamarqAdminDbReady = migrateAdminDb();
  }

  return globalThis.jamarqAdminDbReady;
}

async function migrateAdminDb() {
  await getAdminDb().batch([
    {
      sql: `
      CREATE TABLE IF NOT EXISTS admin_settings (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL,
        updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
      );
    `,
      args: [],
    },
    {
      sql: `
        CREATE TABLE IF NOT EXISTS case_study_summaries (
          slug TEXT PRIMARY KEY,
          title TEXT NOT NULL,
          micro TEXT NOT NULL,
          hover_short TEXT NOT NULL,
          hover_ultra_short TEXT NOT NULL,
          category TEXT NOT NULL,
          display_order INTEGER NOT NULL,
          is_published INTEGER NOT NULL DEFAULT 1,
          updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
        );
      `,
      args: [],
    },
    {
      sql: `
        CREATE TABLE IF NOT EXISTS suite_links (
          id TEXT PRIMARY KEY,
          label TEXT NOT NULL,
          href TEXT NOT NULL,
          description TEXT NOT NULL,
          site_key TEXT NOT NULL,
          display_order INTEGER NOT NULL,
          is_published INTEGER NOT NULL DEFAULT 1,
          updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
        );
      `,
      args: [],
    },
    {
      sql: `
        CREATE TABLE IF NOT EXISTS case_study_home_cards (
          slug TEXT PRIMARY KEY,
          problem TEXT NOT NULL,
          completed TEXT NOT NULL,
          outcome TEXT NOT NULL,
          updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY(slug) REFERENCES case_study_summaries(slug)
        );
      `,
      args: [],
    },
    {
      sql: `
        CREATE TABLE IF NOT EXISTS contact_submissions (
          id TEXT PRIMARY KEY,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          company TEXT,
          budget TEXT,
          project_details TEXT NOT NULL,
          subject TEXT NOT NULL,
          source TEXT NOT NULL,
          status TEXT NOT NULL DEFAULT 'received',
          email_status TEXT NOT NULL DEFAULT 'pending',
          created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
          updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
        );
      `,
      args: [],
    },
    {
      sql: `
        CREATE INDEX IF NOT EXISTS idx_case_study_summaries_order
        ON case_study_summaries(display_order);
      `,
      args: [],
    },
    {
      sql: `
        CREATE INDEX IF NOT EXISTS idx_suite_links_order
        ON suite_links(display_order);
      `,
      args: [],
    },
    {
      sql: `
        CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at
        ON contact_submissions(created_at);
      `,
      args: [],
    },
  ]);
}
