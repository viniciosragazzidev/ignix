import db from "@/services/db";
import { NextResponse, NextRequest } from "next/server";
export async function GET(request: NextRequest, response: NextResponse) {
  try {
    const users = await db.user.findMany();
    return NextResponse.json({ users: users, status: 200 });
  } catch (error) {
    NextResponse.json({
      error_users: "Algo deu errado ao carregar os usuários!",
      status: 500,
    });
  }
}
