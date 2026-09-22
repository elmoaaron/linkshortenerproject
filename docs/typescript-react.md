# TypeScript &amp; React Standards

## TypeScript

- `strict` mode is on ([tsconfig.json](../tsconfig.json)) — don't weaken it and
  don't use `any` to work around type errors; fix the underlying type instead.
- Use the `@/*` path alias (maps to the project root) for internal imports
  instead of relative `../../` chains, e.g. `import db from "@/db"`.
- Let TypeScript infer return types for simple functions; add explicit return
  types for exported functions/utilities where inference would be unclear.

## React components

- Functional components only, no class components.
- Prefer **named exports** for components (matches the existing
  [components/ui/button.tsx](../components/ui/button.tsx) pattern:
  `export { Button, buttonVariants }`), rather than default exports, except for
  Next.js file-convention entry points (`page.tsx`, `layout.tsx`, etc.) which
  Next requires to be default exports.
- Keep the server/client boundary explicit: don't add `"use client"` to a
  component unless it genuinely needs interactivity, state, effects, or
  browser APIs.
- Co-locate component variants with `class-variance-authority` (`cva`) the way
  [button.tsx](../components/ui/button.tsx) does, rather than branching
  className strings with conditionals.

## Linting

- The project uses ESLint's flat config with `eslint-config-next`
  (`core-web-vitals` + `typescript`) — see
  [eslint.config.mjs](../eslint.config.mjs).
- Run `npm run lint` before considering a change complete; fix reported issues
  rather than disabling rules inline unless there's no reasonable alternative.

## Naming

- Match existing casing conventions per directory: shadcn-generated files
  under `components/ui/` use lowercase/kebab-case filenames
  (e.g. `button.tsx`) with PascalCase exported component names.
- Route folders/files follow Next.js App Router conventions (see
  [nextjs-conventions.md](./nextjs-conventions.md)), not free-form naming.
