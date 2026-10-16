import type { Metadata } from "next";
import { Link2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getUserLinks } from "@/data/links";

export const metadata: Metadata = {
  title: "Your links",
};

const dateFormatter = new Intl.DateTimeFormat("en", {
  dateStyle: "medium",
  timeZone: "UTC",
});

export default async function Page() {
  const links = await getUserLinks();

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-12">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold tracking-tight">Your links</h1>
        <p className="text-muted-foreground">
          {links.length} saved {links.length === 1 ? "link" : "links"}. Most
          recent first.
        </p>
      </header>

      {links.length === 0 ? (
        <Card>
          <CardHeader className="justify-items-center gap-3 text-center">
            <Link2 className="size-8 text-muted-foreground" aria-hidden />
            <CardTitle>
              <h2>No links yet</h2>
            </CardTitle>
            <CardDescription>
              Your saved links will appear here once you create your first one.
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <ul className="flex flex-col gap-4" aria-label="Your saved links">
          {links.map((link) => (
            <li key={link.id} className="min-w-0">
              <Card>
                <CardHeader>
                  <CardDescription>Short code</CardDescription>
                  <CardTitle>
                    <h2 className="break-all font-mono">{link.shortCode}</h2>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-1 text-xs font-medium text-muted-foreground">
                    Destination
                  </p>
                  <p className="break-all">{link.originalUrl}</p>
                </CardContent>
                <CardFooter className="text-xs text-muted-foreground">
                  <span>
                    Created{" "}
                    <time dateTime={link.createdAt.toISOString()}>
                      {dateFormatter.format(link.createdAt)}
                    </time>
                  </span>
                </CardFooter>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
