import { auth } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import db from "@/db";
import { links } from "@/db/schema";

export async function getUserLinks() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("You must be signed in to view your links.");
  }

  return db
    .select({
      id: links.id,
      shortCode: links.shortCode,
      originalUrl: links.originalUrl,
      createdAt: links.createdAt,
    })
    .from(links)
    .where(eq(links.userId, userId))
    .orderBy(desc(links.createdAt), desc(links.id));
}
