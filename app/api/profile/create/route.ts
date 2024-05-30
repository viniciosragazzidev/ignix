import db from "@/services/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  try {
    const profile = await db.profileUser.create({
      data: {
        ...body,
      },
    });

    return NextResponse.json({ profile: profile, status: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      error: "Ops, something went wrong",
      status: 500,
    });
  }
}
