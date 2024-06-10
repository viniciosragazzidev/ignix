"use server";
import db from "@/services/db";

const currentUrl = process.env.NEXT_PUBLIC_APP_URL;

export const getOrders = async ({
  period,
  unitySlug,
  page,
  itemsPerPage,
  search,
}: {
  period: string;
  unitySlug: string;
  page: string;
  itemsPerPage: string;
  search?: string;
}) => {
  const currentUnitId = await fetch(
    `${currentUrl}/api/companies/units/current?unitSlug=${unitySlug}`,
    {
      method: "GET",
      next: {
        revalidate: 3600,
        tags: ["currentUnit"],
      },
    }
  )
    .then((res) => res.json())
    .then((data) => data.unit.id);

  const searchData = search ? search : "";

  try {
    const orders = await fetch(
      `${currentUrl}/api/companies/units/orders?unitId=${currentUnitId}&period=${period}&page=${page}&itemsPerPage=${itemsPerPage}&search=${searchData}`,
      {
        method: "GET",
        next: {
          revalidate: 3600,
          tags: ["orders"],
        },
      }
    ).then((res) => res.json());
    console.log({
      orders_action: orders,
    });

    return orders;
  } catch (error) {
    return {
      error_action: error,
    };
  }
};

export const createOrder = async ({ os }: { os: any }) => {
  const client = os.client;
  const itens = os.itens;
  const order = {
    status: os.status,
    orderDescription: os.orderDescription,
    totalAmount: os.totalAmount,
  };

  try {
    const createClient = await db.unitClient.create({
      data: {
        ...client,

        CompanyUnit: {
          connect: {
            id: os.companyUnitId,
          },
        },
      },
    });

    const createOrder = await db.unitOrder.create({
      data: {
        ...order,
        client: {
          connect: {
            id: createClient.id,
          },
        },
        createdBy: {
          connect: {
            id: os.createById,
          },
        },
        CompanyUnit: {
          connect: {
            id: os.companyUnitId,
          },
        },
      },
    });

    const createItensOrder = await db.orderItem.createMany({
      data: [
        ...itens.map((item: any) => ({
          ...item,
          unitOrderId: createOrder.id,
          userId: os.createById,
        })),
      ],
    });

    console.log("created order");
    return {
      success: true,
      orderId: createOrder.id,
    };
  } catch (error) {
    console.log(error);

    return {
      error: error,
    };
  }
};
