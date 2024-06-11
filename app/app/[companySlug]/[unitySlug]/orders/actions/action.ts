"use server";
import db from "@/services/db";
import { setHibrid } from "@/shared/providers/HibridToast";

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
    // Verifica se o cliente já existe no banco de dados
    const existingClient = await db.unitClient.findFirst({
      where: {
        document: client.document,
      },
    });

    let clientId;

    if (existingClient) {
      // Se o cliente já existir, usamos o ID do cliente existente
      clientId = existingClient.id;
    } else {
      // Se o cliente não existir, criamos um novo cliente
      const createdClient = await db.unitClient.create({
        data: {
          ...client,
          CompanyUnit: {
            connect: {
              id: os.companyUnitId,
            },
          },
        },
      });

      clientId = createdClient.id;
    }

    // Cria o pedido usando o ID do cliente (existente ou recém-criado)
    const createdOrder = await db.unitOrder.create({
      data: {
        ...order,
        client: {
          connect: {
            id: clientId,
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

    // Cria os itens do pedido
    const createItensOrder = await db.orderItem.createMany({
      data: itens.map((item: any) => ({
        ...item,
        unitOrderId: createdOrder.id,
        userId: os.createById,
      })),
    });

    setHibrid({
      message: "Seu pedido foi criado com sucesso!",
      type: "success",
    });
    return {
      success: true,
      orderId: createdOrder.id,
    };
  } catch (error) {
    console.log(error);

    return {
      error: error,
    };
  }
};
