import { accounts } from "@/db/schema";
import { HTTPException } from "hono/http-exception";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import { drizzle } from "drizzle-orm/neon-http";
import { Hono } from "hono";
import { eq } from "drizzle-orm";

const db = drizzle(process.env.DATABASE_URL!);

const app = new Hono().get("/", clerkMiddleware(), async (c) => {
  const auth = getAuth(c);
  if (!auth?.userId) {
    throw new HTTPException(401, {
      res: c.json({ error: "Unauthorized" }, 401),
    });
  }
  const data = await db
    .select({ id: accounts.id, name: accounts.name })
    .from(accounts)
    .where(eq(accounts.id, auth.userId));
  return c.json({ data });
});

export default app;
