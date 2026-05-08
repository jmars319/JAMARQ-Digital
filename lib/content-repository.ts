import { ensureAdminDb, getAdminDb } from "@/lib/admin-db";
import {
  caseStudyDisplayOrder,
  caseStudySummaries,
  type CaseStudyKey,
} from "@/lib/caseStudySummaries";

export type CaseStudySummaryRecord = {
  key: string;
  slug: string;
  title: string;
  micro: string;
  hoverShort: string;
  hoverUltraShort: string;
  category: string;
  problem: string;
  completed: string;
  outcome: string;
};

export type SuiteLink = {
  id: string;
  label: string;
  href: string;
  description: string;
  siteKey: string;
};

export type ContactSubmissionInput = {
  name: string;
  email: string;
  company: string;
  budget: string;
  projectDetails: string;
  subject: string;
  source: string;
};

export type ContactSubmissionRecord = {
  id: string;
  name: string;
  email: string;
  company: string;
  budget: string;
  projectDetails: string;
  subject: string;
  source: string;
  status: string;
  emailStatus: string;
  createdAt: string;
};

function logDbFallback(message: string, error: unknown) {
  if (process.env.LIBSQL_URL) {
    console.error(message, error);
  }
}

const suiteLinkSeeds: SuiteLink[] = [
  {
    id: "jamarq-digital",
    label: "JAMARQ Digital",
    href: "https://jamarq.digital",
    description: "Websites, rebuilds, online presence, and web systems.",
    siteKey: "jamarq",
  },
  {
    id: "tenra-dev",
    label: "Tenra.dev",
    href: "https://tenra.dev",
    description: "Software products, internal tools, and local-first systems.",
    siteKey: "tenra",
  },
  {
    id: "vaexil-tv",
    label: "Vaexil.tv",
    href: "https://vaexil.tv",
    description: "Stream hub, guide archive, and VaexCore surface.",
    siteKey: "vaexil",
  },
];

const caseStudyHomeCardSeeds: Record<
  CaseStudyKey,
  { problem: string; completed: string; outcome: string }
> = {
  mmh: {
    problem:
      "The venue needed online event discovery, reserved seating requests, and admin tools that matched how staff actually manage events.",
    completed:
      "Built a custom website, secure admin workspace, seating layouts, reservation flow, and automated notifications.",
    outcome:
      "The system now matches venue operations, and the first reserved seating request came in two days after launch.",
  },
  trbg: {
    problem:
      "The restaurant's previous vendor-run site was slow, restrictive, and hard to update week to week.",
    completed:
      "Rebuilt the site with a clearer menu experience, stronger mobile performance, and a simple admin workflow for ongoing updates.",
    outcome:
      "The owners can manage content directly, and load times dropped from roughly 4 to 6 seconds to under 1.5 seconds.",
  },
  mms: {
    problem:
      "The old site was barebones, slow, and could not collect quote requests without a phone call.",
    completed:
      "Built a full rebuild with inventory controls, a custom quote workflow, and owner-friendly admin tools.",
    outcome:
      "Customers can request quotes online, the site reached a 98/100 desktop PageSpeed score, and the first online quote arrived 16 days after launch.",
  },
  mjr: {
    problem:
      "The business needed a clear service website for junk removal, demolition, and hauling that made phone contact and coverage easy to understand.",
    completed:
      "Built a static-first service site with organized service lines, Triad coverage copy, direct contact paths, and documented handoff notes.",
    outcome:
      "Visitors can quickly confirm fit and contact the owner, while the operator keeps control of the domain, hosting, inbox, and update path.",
  },
};

function fallbackCaseStudies(): CaseStudySummaryRecord[] {
  return caseStudyDisplayOrder.map((key) => ({
    key,
    ...caseStudySummaries[key],
    ...caseStudyHomeCardSeeds[key],
  }));
}

async function seedContentTables() {
  await ensureAdminDb();

  await getAdminDb().batch([
    ...caseStudyDisplayOrder.map((key, index) => {
      const study = caseStudySummaries[key];

      return {
        sql: `
          INSERT INTO case_study_summaries (
            slug,
            title,
            micro,
            hover_short,
            hover_ultra_short,
            category,
            display_order,
            is_published
          )
          VALUES (?, ?, ?, ?, ?, ?, ?, 1)
          ON CONFLICT(slug) DO NOTHING;
        `,
        args: [
          study.slug,
          study.title,
          study.micro,
          study.hoverShort,
          study.hoverUltraShort,
          study.category,
          index,
        ],
      };
    }),
    ...suiteLinkSeeds.map((link, index) => ({
      sql: `
        INSERT INTO suite_links (
          id,
          label,
          href,
          description,
          site_key,
          display_order,
          is_published
        )
        VALUES (?, ?, ?, ?, ?, ?, 1)
        ON CONFLICT(id) DO NOTHING;
      `,
      args: [
        link.id,
        link.label,
        link.href,
        link.description,
        link.siteKey,
        index,
      ],
    })),
    ...caseStudyDisplayOrder.map((key) => {
      const study = caseStudySummaries[key];
      const card = caseStudyHomeCardSeeds[key];

      return {
        sql: `
          INSERT INTO case_study_home_cards (
            slug,
            problem,
            completed,
            outcome
          )
          VALUES (?, ?, ?, ?)
          ON CONFLICT(slug) DO NOTHING;
        `,
        args: [study.slug, card.problem, card.completed, card.outcome],
      };
    }),
  ]);
}

export async function listCaseStudySummaries() {
  try {
    await seedContentTables();

    const result = await getAdminDb().execute({
      sql: `
        SELECT
          slug,
          title,
          micro,
          hover_short,
          hover_ultra_short,
          category,
          problem,
          completed,
          outcome
        FROM case_study_summaries
        LEFT JOIN case_study_home_cards USING (slug)
        WHERE is_published = 1
        ORDER BY display_order ASC, title ASC;
      `,
      args: [],
    });

    return result.rows.map((row) => ({
      key: String(row.slug),
      slug: String(row.slug),
      title: String(row.title),
      micro: String(row.micro),
      hoverShort: String(row.hover_short),
      hoverUltraShort: String(row.hover_ultra_short),
      category: String(row.category),
      problem: String(row.problem || ""),
      completed: String(row.completed || ""),
      outcome: String(row.outcome || ""),
    }));
  } catch (error) {
    logDbFallback(
      "JAMARQ content DB unavailable; using case study seed data.",
      error,
    );
    return fallbackCaseStudies();
  }
}

export async function listSuiteLinks(currentSiteKey: string) {
  try {
    await seedContentTables();

    const result = await getAdminDb().execute({
      sql: `
        SELECT id, label, href, description, site_key
        FROM suite_links
        WHERE is_published = 1
          AND site_key <> ?
        ORDER BY display_order ASC, label ASC;
      `,
      args: [currentSiteKey],
    });

    return result.rows.map((row) => ({
      id: String(row.id),
      label: String(row.label),
      href: String(row.href),
      description: String(row.description),
      siteKey: String(row.site_key),
    }));
  } catch (error) {
    logDbFallback(
      "JAMARQ suite link DB unavailable; using link seed data.",
      error,
    );
    return suiteLinkSeeds.filter((link) => link.siteKey !== currentSiteKey);
  }
}

export async function recordContactSubmission(input: ContactSubmissionInput) {
  try {
    await ensureAdminDb();

    const id = crypto.randomUUID();

    await getAdminDb().execute({
      sql: `
        INSERT INTO contact_submissions (
          id,
          name,
          email,
          company,
          budget,
          project_details,
          subject,
          source
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?);
      `,
      args: [
        id,
        input.name,
        input.email,
        input.company,
        input.budget,
        input.projectDetails,
        input.subject,
        input.source,
      ],
    });

    return id;
  } catch (error) {
    console.error("Failed to record JAMARQ contact submission.", error);
    return "";
  }
}

export async function updateContactSubmissionEmailStatus(
  id: string,
  emailStatus: "sent" | "failed",
) {
  if (!id) {
    return;
  }

  try {
    await ensureAdminDb();

    await getAdminDb().execute({
      sql: `
        UPDATE contact_submissions
        SET email_status = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?;
      `,
      args: [emailStatus, id],
    });
  } catch (error) {
    console.error("Failed to update JAMARQ contact submission status.", error);
  }
}

export async function listRecentContactSubmissions(limit = 5) {
  try {
    await ensureAdminDb();

    const result = await getAdminDb().execute({
      sql: `
        SELECT
          id,
          name,
          email,
          company,
          budget,
          project_details,
          subject,
          source,
          status,
          email_status,
          created_at
        FROM contact_submissions
        ORDER BY created_at DESC
        LIMIT ?;
      `,
      args: [limit],
    });

    return result.rows.map((row) => ({
      id: String(row.id),
      name: String(row.name),
      email: String(row.email),
      company: String(row.company || ""),
      budget: String(row.budget || ""),
      projectDetails: String(row.project_details || ""),
      subject: String(row.subject || ""),
      source: String(row.source || ""),
      status: String(row.status),
      emailStatus: String(row.email_status),
      createdAt: String(row.created_at),
    })) satisfies ContactSubmissionRecord[];
  } catch (error) {
    console.error("Failed to load recent JAMARQ contact submissions.", error);
    return [];
  }
}

export async function getContentModuleSummary() {
  try {
    await seedContentTables();

    const [caseStudies, homeCards, suiteLinks, submissions] = await Promise.all([
      getAdminDb().execute("SELECT COUNT(*) AS count FROM case_study_summaries;"),
      getAdminDb().execute("SELECT COUNT(*) AS count FROM case_study_home_cards;"),
      getAdminDb().execute("SELECT COUNT(*) AS count FROM suite_links;"),
      getAdminDb().execute("SELECT COUNT(*) AS count FROM contact_submissions;"),
    ]);

    return [
      {
        label: "Case studies",
        count: Number(caseStudies.rows[0]?.count || 0),
        note: "Public index cards are seeded and read from the database.",
      },
      {
        label: "Home work cards",
        count: Number(homeCards.rows[0]?.count || 0),
        note: "Homepage problem/build/outcome cards are database-backed.",
      },
      {
        label: "Suite links",
        count: Number(suiteLinks.rows[0]?.count || 0),
        note: "Footer links are shared across the JAMARQ/Tenra/Vaexil family.",
      },
      {
        label: "Contact submissions",
        count: Number(submissions.rows[0]?.count || 0),
        note: "New inquiries are recorded before SendGrid delivery.",
      },
    ];
  } catch (error) {
    console.error("Failed to load JAMARQ content module summary.", error);
    return [];
  }
}

export type { CaseStudyKey };
