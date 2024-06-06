import { auth } from "@/services/auth";
import db from "@/services/db";
const currentUrl = process.env.NEXT_PUBLIC_APP_URL;
export const getUnitsCompany = async () => {
  const session = await auth();
  try {
    const response = await db.companyUnit.findMany({
      where: {
        users: {
          some: {
            id: session?.user.id,
          },
        },
      },
    });
    const data = response;
    return data;
  } catch (error) {
    return error;
  }
};
