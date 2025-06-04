// app/api/repairs/route.js
import { db } from "@/app/lib/db";
import { repairs } from "@/app/lib/schema";

export async function GET() {
  const data = await db.select().from(repairs).orderBy(repairs.id.desc());
  return Response.json(data);
}
