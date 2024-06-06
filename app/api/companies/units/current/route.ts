import db from "@/services/db";
import { NextResponse, NextRequest } from "next/server";
export async function GET(request: NextRequest) {
  const unitSlug = request.nextUrl.searchParams.get("unitSlug");
  try {
    if (unitSlug) {
      const unit = await db.companyUnit.findFirst({
        where: {
          slugId: unitSlug,
        },
      });
      return NextResponse.json({ unit: unit, status: 200 });
    } else {
      return NextResponse.json({ error: "Unit not found", status: 404 });
    }
  } catch (error) {
    NextResponse.json({ error: "Algo deu errado!", status: 500 });
  }
}
