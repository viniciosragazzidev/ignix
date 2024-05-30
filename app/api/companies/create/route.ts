import db from "@/services/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  try {
    const company = await db.company.create({
      data: {
        address: body.address,
        city: body.city,
        cnpj: body.cnpj,
        email: body.email,
        name: body.name,
        phone: body.phone,
        state: body.state,
        creator: {
          connect: {
            id: body.creatorId,
          },
        },
        users: {
          connect: {
            id: body.creatorId,
          },
        },
      },
    });

    const companyUser = await db.companyUser.create({
      data: {
        companyId: company.id,
        profileId: body.creatorId,
      },
    });

    return NextResponse.json({
      company: company,
      companyUser: companyUser,
      status: 200,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      error: "Ops, something went wrong",
      status: 500,
    });
  }
}
