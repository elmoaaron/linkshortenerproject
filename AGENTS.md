<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Instructions

This is a link shortener app built on Next.js 16 (App Router), React 19,
TypeScript, Clerk (auth), Drizzle ORM + Neon (Postgres), and Tailwind v4 +
shadcn/ui (base-nova style, `@base-ui/react` primitives).

Detailed, topic-specific coding standards live in `.github/instructions`. **Before generating
ANY code**, you MUST read the individual instructions file(s) below relevant
to the area you're touching — this is not optional, skipping this step is the
most common cause of non-compliant changes:

- [.github/instructions/nextjs-conventions.instructions.md](.github/instructions/nextjs-conventions.instructions.md) — App Router
  conventions specific to this Next.js version: `proxy.ts` (not
  `middleware.ts`), async `params`/`searchParams`, `PageProps`/`LayoutProps`
  helpers, Server Components by default, metadata, root layout.
- [.github/instructions/typescript-react.instructions.md](.github/instructions/typescript-react.instructions.md) — TypeScript strict
  mode, component/export conventions, linting.
- [.github/instructions/styling-ui.instructions.md](.github/instructions/styling-ui.instructions.md) — Tailwind v4, shadcn/ui,
  `cn` class merging, icons, Clerk theming.
- [.github/instructions/database.instructions.md](.github/instructions/database.instructions.md) — Drizzle ORM + Neon schema,
  client usage, and migration workflow.
- [.github/instructions/auth.instructions.md](.github/instructions/auth.instructions.md) — Clerk setup: proxy-based route protection,
  provider/UI conventions, session access.
- [.github/instructions/data-fetching.instructions.md](.github/instructions/data-fetching.instructions.md) — server-component data fetching through helpers in `data/`.

## Quick global rules

- **NEVER create or use `middleware.ts`.** The middleware file convention is
  deprecated in Next.js 16, including this project's Next.js 16.3.5 version.
  Use the existing root [proxy.ts](proxy.ts) for request interception and
  Clerk route protection instead.
- Prefer editing existing files over creating new ones; only add a new file
  when the project genuinely needs it.
- Run `npm run lint` after making changes and fix any reported issues.
- Don't hardcode secrets — read them from environment variables
  (`.env.local`, gitignored).
