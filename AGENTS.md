<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Instructions

This is a link shortener app built on Next.js 16 (App Router), React 19,
TypeScript, Clerk (auth), Drizzle ORM + Neon (Postgres), and Tailwind v4 +
shadcn/ui (base-nova style, `@base-ui/react` primitives).

Detailed, topic-specific coding standards live in `/docs`. **Before generating
ANY code**, you MUST read the individual instructions file(s) below relevant
to the area you're touching — this is not optional, skipping this step is the
most common cause of non-compliant changes:

- [docs/nextjs-conventions.md](docs/nextjs-conventions.md) — App Router
  conventions specific to this Next.js version: `proxy.ts` (not
  `middleware.ts`), async `params`/`searchParams`, `PageProps`/`LayoutProps`
  helpers, Server Components by default, metadata, root layout.
- [docs/typescript-react.md](docs/typescript-react.md) — TypeScript strict
  mode, component/export conventions, linting.
- [docs/styling-ui.md](docs/styling-ui.md) — Tailwind v4, shadcn/ui,
  `cn` class merging, icons, Clerk theming.
- [docs/database.md](docs/database.md) — Drizzle ORM + Neon schema,
  client usage, and migration workflow.
- [docs/auth.md](docs/auth.md) — Clerk setup: proxy-based route protection,
  provider/UI conventions, session access.

## Quick global rules

- Prefer editing existing files over creating new ones; only add a new file
  when the project genuinely needs it.
- Run `npm run lint` after making changes and fix any reported issues.
- Don't hardcode secrets — read them from environment variables
  (`.env.local`, gitignored).
