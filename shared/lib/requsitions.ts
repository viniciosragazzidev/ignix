"use server";

import { auth } from "@/services/auth";
import { revalidatePath } from "next/cache";
const currentUrl = process.env.NEXT_PUBLIC_APP_URL;

export const createUser = async (data: any) => {
  const session = await auth();
  const userId = session?.user.id;

  const userUpdatedData = {
    id: userId,
    ...data,
  };

  console.log(userUpdatedData);

  try {
    const user = await fetch(`${currentUrl}/api/users/create`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userUpdatedData),
    });

    const userData = await user.json();

    revalidatePath("/onboard");
    return userData;
  } catch (error) {
    return error;
  }
};
export const createCompany = async (data: any) => {
  const session = await auth();
  const user = session?.user;
  const userId = user?.id;
  try {
    const company = await fetch(`${currentUrl}/api/companies/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        creatorId: userId,

        ...data,
      }),
    });

    const companyData = await company.json();

    return companyData;
  } catch (error) {
    //console.log(error);
  }
};
