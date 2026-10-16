---
description: Tailwind, shadcn/ui, and visual conventions for the project.
applyTo: "{app/**/*.ts,app/**/*.tsx,app/**/*.css,components/**/*.ts,components/**/*.tsx,components/**/*.css}"
---

# Styling &amp; UI Components

## Tailwind CSS v4

- Tailwind is configured entirely in CSS via [app/globals.css](../app/globals.css)
  (`@import "tailwindcss"` + `@theme inline` blocks) — there is **no**
  `tailwind.config.ts/js`. Add new design tokens as CSS custom properties in
  `globals.css`, not in a JS config file.
- Dark mode uses the `@custom-variant dark (&:is(.dark *))` variant — toggle
  dark mode via a `.dark` class ancestor, not `prefers-color-scheme` overrides.

## Dark mode

- Theme switching is handled by `next-themes` via
  [components/theme-provider.tsx](../components/theme-provider.tsx)
  (`attribute="class"`, `defaultTheme="system"`, `enableSystem`), which wraps
  `ClerkProvider` in [app/layout.tsx](../app/layout.tsx). The root `<html>`
  element has `suppressHydrationWarning` to avoid theme-flash hydration
  warnings — keep it when editing the layout.
- [components/mode-toggle.tsx](../components/mode-toggle.tsx) provides the
  Light/Dark/System switcher UI (a `DropdownMenu` + `Button`) and lives in the
  header in `app/layout.tsx`. Reuse this component rather than adding another
  toggle; call `useTheme()` from `next-themes` if you need theme state
  elsewhere.
- All colors come from the CSS variables in `globals.css`
  (`--background`, `--foreground`, etc. and their `.dark` overrides), so new
  UI should use the `bg-*`/`text-*`/`border-*` token classes instead of
  hardcoded colors to stay theme-aware automatically.

## shadcn/ui

- All UI elements must use shadcn/ui components. Do not hand-roll custom
  components (buttons, inputs, dialogs, etc.) — if a needed primitive isn't
  in `components/ui/` yet, add it via the shadcn CLI first, then compose
  screens/features from those primitives.
- Component config lives in [components.json](../components.json): style
  `base-nova`, base color `neutral`, CSS variables enabled, icon library
  `lucide-react`, no prefix.
- Aliases: `@/components`, `@/components/ui`, `@/lib`, `@/lib/utils`,
  `@/hooks`. Use these when adding files so generated imports stay consistent.
- Add new shadcn components with the `shadcn` CLI (`npx shadcn add <name>`)
  rather than hand-copying component code, so they land in
  `components/ui/` with the right style/variants already applied.
- UI primitives come from `@base-ui/react` (e.g. `@base-ui/react/button`), not
  Radix UI — follow this project's existing base-ui-based components as the
  pattern for new ones.

## Class name merging

- Use the `cn` helper re-exported from [lib/utils.ts](../lib/utils.ts)
  (`import { cn } from "@/lib/utils"`) to merge conditional class names. Don't
  import `clsx` or `tailwind-merge` directly — `cn` already wraps them.

## Icons

- Use `lucide-react` for icons; don't add another icon library.

## Clerk theme

- [app/globals.css](../app/globals.css) imports `@clerk/ui/themes/shadcn.css`
  and [app/layout.tsx](../app/layout.tsx) passes `theme: shadcn` (from
  `@clerk/ui/themes`) to `ClerkProvider`'s `appearance` prop. If the shadcn
  theme/style changes, keep both in sync so Clerk's UI matches the app theme.
