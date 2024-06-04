import db from "@/services/db";
const currentUrl = process.env.NEXT_PUBLIC_APP_URL;

export const getOrders = async ({
  period,
  unitySlug,
  page,
  itemsPerPage,
}: {
  period: string;
  unitySlug: string;
  page: string;
  itemsPerPage: string;
}) => {
  const currentUnitId = await db.companyUnit.findFirst({
    where: {
      slugId: unitySlug,
    },
    select: {
      id: true,
    },
  });
  try {
    const orders = await fetch(
      `${currentUrl}/api/companies/units/orders?unitId=${currentUnitId}&period=${period}`,
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
