"use server";

import { getCurrentProfile } from "@/app/app/actions/action";
import { auth } from "@/services/auth";
import { revalidatePath } from "next/cache";
const currentUrl = process.env.NEXT_PUBLIC_APP_URL;

export const createProfile = async (data: any) => {
  const session = await auth();
  const userId = session?.user.id;

  try {
    const profile = await fetch(`${currentUrl}/api/profile/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        ...data,
      }),
    });

    const profileData = await profile.json();

    revalidatePath("/onboard");
    return profileData;
  } catch (error) {
    console.log(error);
  }
};
export const createCompany = async (data: any) => {
  const session = await auth();
  const profile = await getCurrentProfile({ id: session!.user.id });
  const profileId = profile?.profile.id;
  try {
    const profile = await fetch(`${currentUrl}/api/companies/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        creatorId: profileId,

        ...data,
      }),
    });

    const profileData = await profile.json();

    revalidatePath("/onboard");
    return profileData;
  } catch (error) {
    console.log(error);
  }
};
