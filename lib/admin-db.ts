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
  await getAdminDb().execute({
    sql: `
      CREATE TABLE IF NOT EXISTS admin_settings (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL,
        updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
      );
    `,
    args: [],
  });
}
