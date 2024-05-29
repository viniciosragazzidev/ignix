import db from "@/services/db";

export async function GET(response: Response, request: Request) {
  const users = await db.user.findMany();
  return new Response(JSON.stringify(users), { status: 200 });
}
