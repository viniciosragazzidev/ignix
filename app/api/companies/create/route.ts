import db from "@/services/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const slugId =
    body.name.replace(/\s+/g, "-").toLowerCase() +
    "-" +
    Math.random().toString(36).substr(2, 5);
  try {
    const user = await db.user.update({
      where: {
        id: body.creatorId,
      },
      data: {
        role: "ADMIN",
      },
    });
    const company = await db.company.create({
      data: {
        address: body.address,
        city: body.city,
        cnpj: body.cnpj,
        email: body.email,
        name: body.name,
        phone: body.phone,
        state: body.state,
        slugId: slugId,
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
        companyName: company.name,
        slugId: company.slugId,
        userId: body.creatorId,
      },
    });

    const companyUnitHead = await db.companyUnit.create({
      data: {
        name: "Sede",
        address: body.address,
        city: body.city,
        email: body.email,
        phone: body.phone,
        slugId: `unit-sede`,
        state: body.state,
        companyId: company.id,
        users: {
          connect: {
            id: body.creatorId,
          },
        },
      },
    });

    return NextResponse.json({
      company: company,
      companyUser: companyUser,
      status: 200,
    });
  } catch (error) {
    //console.log(error);

    return NextResponse.json({
      error: "Ops, something went wrong",
      status: 500,
    });
  }
}
