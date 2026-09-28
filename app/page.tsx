import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import {
  BarChart3,
  Link2,
  Lock,
  Moon,
  Shield,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import { LandingCta } from "@/components/landing-cta";

export const metadata: Metadata = {
  title: {
    absolute: "LinkShort — Short links that work",
  },
  description:
    "Create, manage, and track short links with a secure dashboard. Built for speed and simplicity.",
};

const features = [
  {
    title: "Instant short links",
    description:
      "Turn long URLs into clean, shareable short links in seconds from your dashboard.",
    icon: Link2,
  },
  {
    title: "Secure by default",
    description:
      "Sign in with Clerk. Your links and account stay protected without DIY auth.",
    icon: Lock,
  },
  {
    title: "Personal dashboard",
    description:
      "Manage every link in one place — create, review, and keep your list organized.",
    icon: Shield,
  },
  {
    title: "Fast redirects",
    description:
      "Lightweight redirects so visitors land on the right destination with minimal delay.",
    icon: Zap,
  },
  {
    title: "Click insights",
    description:
      "Track how your links perform so you know what gets shared and what converts.",
    icon: BarChart3,
  },
  {
    title: "Light & dark mode",
    description:
      "A clean UI that follows your system theme, or switch manually anytime.",
    icon: Moon,
  },
] as const;

export default async function Home() {
  const { userId } = await auth();
  if (userId) redirect("/dashboard");

  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-6 py-20 text-center sm:py-28">
        <p className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
          Link shortener for modern teams
        </p>
        <div className="flex max-w-2xl flex-col gap-4">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Short links. Clear dashboard. Zero friction.
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Create and manage short URLs in one place. Sign up free, open your
            dashboard, and share links that stay under your control.
          </p>
        </div>
        <LandingCta />
      </section>

      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Everything you need to share smarter
            </h2>
            <p className="mt-3 text-muted-foreground">
              Built on Next.js, Clerk, and Postgres so auth, data, and UI stay
              simple as you grow.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, description, icon: Icon }) => (
              <li
                key={title}
                className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5 text-left shadow-xs"
              >
                <div className="flex size-9 items-center justify-center rounded-lg border border-border bg-background">
                  <Icon className="size-4 text-foreground" aria-hidden />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-medium tracking-tight">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-6 py-16 text-center sm:py-20">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Ready to shorten your first link?
        </h2>
        <p className="max-w-md text-muted-foreground">
          Create an account, open the dashboard, and start sharing clean URLs
          in under a minute.
        </p>
        <LandingCta primaryLabel="Create your account" showSignIn={false} />
      </section>
    </div>
  );
}