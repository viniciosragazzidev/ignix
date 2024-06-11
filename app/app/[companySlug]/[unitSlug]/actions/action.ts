"use server";

import { cookies } from "next/headers";

const currentUrl = process.env.NEXT_PUBLIC_APP_URL;
export const getCurrentUnit = async (unitSlug: string) => {
  const currentUnitId = await fetch(
    `${currentUrl}/api/companies/units/current?unitSlug=${unitSlug}`,
    {
      method: "GET",
      next: {
        revalidate: 3600,
        tags: ["currentUnit"],
      },
    }
  )
    .then((res) => res.json())
    .then((data) => data.unit);
  console.log(currentUnitId);

  return currentUnitId;
};
