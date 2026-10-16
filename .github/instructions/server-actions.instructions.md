---
description: "Use when implementing data mutations, Server Actions, client-side mutation triggers, or database write helpers."
applyTo: "**/*.{ts,tsx}"
---

# Data Mutations and Server Actions

- ALL application data mutations MUST go through Server Actions. Do not mutate
  data through Route Handlers or directly from components.
- Server Actions MUST be called from Client Components (`"use client"`).
- Server Action files MUST be named `actions.ts`, begin with `"use server"`,
  and live in the same directory as the component that calls them.
- ALL data passed to Server Actions MUST have explicit, appropriate TypeScript
  types. NEVER use the `FormData` TypeScript type; pass typed values or objects.
- Server Actions MUST NOT throw errors. Return a typed object with an `error`
  property on failure or a `success` property on success. Catch validation,
  authentication, and database errors and return them using this result shape.
- EVERY Server Action MUST first check for a logged-in user with `auth()` from
  `@clerk/nextjs/server` and reject unauthenticated requests before continuing.
  Route protection alone is not sufficient.
- ALL input data MUST be validated inside the Server Action using Zod before
  any database operation. Pass only validated values to database helpers;
  client-side validation and TypeScript types do not replace server validation.
- ALL database operations MUST go through helper functions in `data/` that
  wrap Drizzle queries. Server Actions MUST NOT execute Drizzle queries directly.
- Use the authenticated user's identity for user-scoped operations, not a
  client-supplied user ID.