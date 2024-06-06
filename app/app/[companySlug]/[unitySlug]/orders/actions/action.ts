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
