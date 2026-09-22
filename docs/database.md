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
  [nextjs-conventions.md](./nextjs-conventions.md)).

## Migrations

- Change the schema by editing `db/schema.ts`, then generate/apply migrations
  with the `drizzle-kit` CLI (e.g. `npx drizzle-kit generate`,
  `npx drizzle-kit migrate`, or `npx drizzle-kit push` for prototyping) rather
  than hand-writing SQL migration files.
- Commit generated migration files under `./drizzle` alongside the schema
  change that produced them.
