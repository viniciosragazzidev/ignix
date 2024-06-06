import db from "@/services/db";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const page = parseInt(req.nextUrl.searchParams.get("page") || "1", 10);

  const itemsPerPage = parseInt(
    req.nextUrl.searchParams.get("itemsPerPage") || "10"
  );
  const unitId = req.nextUrl.searchParams.get("unitId");
  const periodInDays = parseInt(
    req.nextUrl.searchParams.get("periodInDays") || "30",
    10
  );

  const search = decodeURIComponent(
    req.nextUrl.searchParams.get("search")?.toString() || " "
  );
  //console.log(search);

  const offset = (page - 1) * itemsPerPage;

  try {
    const orders = await db.unitOrder.findMany({
      where: {
        AND: [
          {
            companyUnitId: unitId,
            createdAt: {
              gte: new Date(Date.now() - periodInDays * 24 * 60 * 60 * 1000),
            },
          },
          {
            OR: [
              {
                client: {
                  id: {
                    contains: search,
                    mode: "insensitive", // Default value: default
                  },
                },
              },
              {
                client: {
                  name: {
                    contains: search,
                    mode: "insensitive", // Default value: default
                  },
                },
              },
              {
                client: {
                  phone: {
                    contains: search,
                    mode: "insensitive", // Default value: default
                  },
                },
              },
              {
                itens: {
                  every: {
                    name: {
                      contains: search,
                      mode: "insensitive", // Default value: default
                    },
                  },
                },
              },
            ],
          },
        ],
      },
      include: {
        client: true,
        itens: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      skip: offset,
      take: itemsPerPage,
    });
    const totalItems = await db.unitOrder.count({
      where: {
        companyUnitId: unitId,
        createdAt: {
          gte: new Date(Date.now() - periodInDays * 24 * 60 * 60 * 1000),
        },
      },
    }); // Correção aqui
    return NextResponse.json({
      total_items: totalItems,
      items_per_page: itemsPerPage,
      current_page: page,
      total_pages: Math.ceil(totalItems / itemsPerPage),
      orders,

      status: 200,
    });
  } catch (err) {
    return NextResponse.json({ error: err, status: 500 });
  }
}
