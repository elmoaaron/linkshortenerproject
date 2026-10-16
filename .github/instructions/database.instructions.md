---
description: Database guidelines for Drizzle ORM and Neon.
applyTo: "{db/**/*.ts,data/**/*.ts,app/**/*.ts,app/**/*.tsx}"
---

# Database (Drizzle ORM + Neon)

## Stack

- ORM: `drizzle-orm` (v1 RC) with the `drizzle-orm/neon-http` driver against a
  Neon serverless Postgres database.
- CLI: `drizzle-kit`, configured in [drizzle.config.ts](../drizzle.config.ts)
  (`schema: "./db/schema.ts"`, `dialect: "postgresql"`, migrations output to
  `./drizzle`).

## Conventions

- Define all tables/relations in [db/schema.ts](../db/schema.ts) using
  `drizzle-orm/pg-core` (e.g. `pgTable`). Keep the schema as the single source
  of truth for the database shape.
- Import the shared client from [db/index.ts](../db/index.ts) as the default
  export: `import db from "@/db"`. Don't instantiate additional `drizzle()`
  clients elsewhere.
- `DATABASE_URL` is read from the environment (`.env.local`, gitignored) —
  never hardcode connection strings or commit real credentials.
- Only use the `db` client from Server Components, Server Actions, or Route
  Handlers. Never import it into a `"use client"` component (see
  [nextjs-conventions.instructions.md](./nextjs-conventions.instructions.md)).
- Keep database reads in helpers under `data/` and call them from Server
  Components rather than querying in components. [getUserLinks](../data/links.ts)
  gets the current Clerk user, rejects unauthenticated access, and selects only
  that user's links, newest first (with descending IDs to break timestamp ties).
  The [dashboard](../app/dashboard/page.tsx) renders the short code, destination,
  and creation date, or an empty state when the user has no saved links.

## Migrations

- Change the schema by editing `db/schema.ts`, then generate/apply migrations
  with the `drizzle-kit` CLI (e.g. `npx drizzle-kit generate`,
  `npx drizzle-kit migrate`, or `npx drizzle-kit push` for prototyping) rather
  than hand-writing SQL migration files.
- Commit generated migration files under `./drizzle` alongside the schema
  change that produced them.
