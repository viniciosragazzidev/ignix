import db from "@/services/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { orderId: string } }
) {
  const { orderId } = params;
  const unitId = req.nextUrl.searchParams.get("unitId");

  try {
    const order = await db.unitOrder.findUnique({
      where: {
        id: Number(orderId),
        companyUnitId: unitId,
      },
      include: {
        client: true,
        itens: true,
      },
    });

    if (order) {
      return NextResponse.json({ order: order, status: 200 });
    } else {
      return NextResponse.json({ error: "order not found", status: 500 });
    }
  } catch (error) {
    return NextResponse.json({
      error: "Ops, something went wrong",
      status: 500,
    });
  }
}
