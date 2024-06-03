import db from "@/services/db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  try {
    const user = await db.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        units: true,
        createdCompanies: true,
      },
    });

    if (user) {
      return NextResponse.json({ user: user, status: 200 });
    } else {
      return NextResponse.json({ error: "user not found", status: 500 });
    }
  } catch (error) {
    return NextResponse.json({
      error: "Ops, something went wrong",
      status: 500,
    });
  }
}
