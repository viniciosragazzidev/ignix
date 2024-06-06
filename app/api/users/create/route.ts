import db from "@/services/db";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  const body = await request.json();

  try {
    const updateUser = await db.user.update({
      where: {
        id: body.id,
      },
      data: {
        name: body.name,
        surname: body.surname,
        cpf: body.cpf,
        gender: body.gender,
        birthdate: new Date(body.birthdate),
        email: body.email,
        phone: body.phone,
      },
    });
    return NextResponse.json({ user: updateUser, status: 200 });
  } catch (error) {
    return NextResponse.json({
      error: error,
      status: 500,
    });
  }
}
