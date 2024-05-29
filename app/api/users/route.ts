import db from "@/services/db";
import { NextResponse, NextRequest } from "next/server";
export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const users = await db.user.findMany();
    return NextResponse.json({ users: users, status: 200 });
  } catch (error) {
    NextResponse.json({ error: "Algo deu errado!", status: 500 });
  }
}
