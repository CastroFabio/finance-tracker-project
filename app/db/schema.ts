import { pgTable, text } from "drizzle-orm/pg-core";
import { pl } from "zod/v4/locales";

export const accounts = pgTable("accounts", {
  id: text("id").primaryKey(),
  plaidId: text("plaid_id"),
  name: text("name").notNull(),
  email: text("user_id").notNull(),
});
