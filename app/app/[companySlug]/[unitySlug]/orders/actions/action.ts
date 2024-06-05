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
  const currentUnitId = await db.companyUnit.findFirst({
    where: {
      slugId: unitySlug,
    },
    select: {
      id: true,
    },
  });
  const searchData = search ? search : "";
  console.log(searchData, search);

  try {
    const orders = await fetch(
      `${currentUrl}/api/companies/units/orders?unitId=${currentUnitId?.id}&period=${period}&page=${page}&itemsPerPage=${itemsPerPage}&search=${searchData}` ||
        "",
      {
        method: "GET",
        next: {
          revalidate: 3600,
          tags: ["orders"],
        },
      }
    ).then((res) => res.json());

    return orders;
  } catch (error) {
    console.log(error);
  }
};
