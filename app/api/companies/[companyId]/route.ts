import db from "@/services/db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  try {
    const profile = await db.profileUser.findUnique({
      where: {
        userId: userId,
      },
      include: {
        companies: true,
        createdCompanies: true,
      },
    });

    if (profile) {
      return NextResponse.json({ profile: profile, status: 200 });
    } else {
      return NextResponse.json({ error: "Profile not found", status: 500 });
    }
  } catch (error) {
    return NextResponse.json({
      error: "Ops, something went wrong",
      status: 500,
    });
  }
}
