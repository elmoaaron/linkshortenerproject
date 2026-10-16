import { pgTable, integer, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const links = pgTable("links", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  userId: varchar("user_id", { length: 255 }).notNull(),
  shortCode: varchar("short_code", { length: 16 }).notNull().unique(),
  originalUrl: text("original_url").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
