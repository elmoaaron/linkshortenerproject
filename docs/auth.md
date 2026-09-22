# Authentication (Clerk)

## Stack

- Clerk is the **only** auth mechanism in this app. Do not add custom
  sessions, JWT handling, NextAuth, or any other auth library/flow.
- `@clerk/nextjs` (v7) for auth/session handling, `@clerk/ui` for themed
  Clerk components (`shadcn` theme — see [styling-ui.md](./styling-ui.md)).

## Where auth lives

- Route-level protection runs in [proxy.ts](../proxy.ts) via `clerkMiddleware()`
  — **not** `middleware.ts` (see [nextjs-conventions.md](./nextjs-conventions.md)
  for why). Keep the existing `matcher` config's asset-exclusion pattern and
  the `/(api|trpc)(.*)` / `/__clerk/:path*` entries when editing it.
- `app/layout.tsx` wraps the whole app in `<ClerkProvider appearance={{ theme:
  shadcn }}>` and renders `SignInButton` / `SignUpButton` / `UserButton` in the
  header, gated by Clerk's declarative `<Show when="signed-in">` /
  `<Show when="signed-out">` components. Prefer `<Show>` over manual
  `useUser()`/`useAuth()` branching for simple conditional UI.
- Sign-in/up pages use Clerk's optional catch-all route convention:
  `app/sign-in/[[...sign-in]]/page.tsx` and `app/sign-up/[[...sign-up]]/page.tsx`.
  Keep these exact paths — they match Clerk's default redirect URLs.
- Sign in and sign up must always be launched as **modals**, never as a full
  page navigation. Use Clerk's `<SignInButton mode="modal">` /
  `<SignUpButton mode="modal">` (or the equivalent `useClerk().openSignIn()` /
  `openSignUp()` calls) everywhere a sign-in/up trigger is rendered.

## Protecting data and routes

- In Server Components, Server Actions, and Route Handlers, get the current
  session with `auth()` from `@clerk/nextjs/server`.
- For hard route-level protection (redirect unauthenticated users before a
  route renders), use `auth.protect()` inside `clerkMiddleware()` in
  `proxy.ts`, scoped with the matcher rather than ad-hoc checks in every page.
- `/dashboard` is a protected route: unauthenticated users must never render
  it. Enforce this in `proxy.ts` (e.g. `if (isDashboardRoute(req)) auth.protect();`)
  rather than relying on client-side checks.
- Signed-in users hitting the homepage (`/`) must be redirected to
  `/dashboard`. Perform this redirect server-side (e.g. `redirect()` in
  `app/page.tsx` after checking `auth()`), not with a client-side effect.

## Local tooling

- Local Clerk CLI/dev quirks (corporate CA certs, etc.) are unrelated to app
  code — see repo memory `clerk-setup.md` if you need to run the Clerk CLI
  locally.
