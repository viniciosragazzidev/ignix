import db from "@/services/db";
import { NextResponse, NextRequest } from "next/server";
export async function GET(
  request: NextRequest,
  params: { params: { companyId: string } }
) {
  try {
    const companyUnits = await db.companyUnit.findMany({
      where: {
        companyId: params.params.companyId,
      },
    });

    return NextResponse.json({ companyUnits });
  } catch (error) {
    NextResponse.json({ error_companyId: "Algo deu errado!", status: 500 });
  }
}
