import db from "@/services/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(response: NextResponse, request: NextRequest) {
  const users = await db.user.findMany();
  return new Response(JSON.stringify(users), { status: 200 });
}
