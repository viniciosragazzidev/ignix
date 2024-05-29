"use server";

import { auth } from "@/services/auth";
import { redirect } from "next/navigation";
import { getCurrentProfile } from "./actions/action";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (session) {
    const data = await getCurrentProfile({ id: session!.user.id });
    const profile = data.data;
    if (profile) {
      redirect("/onboard");
    }
  }

  return <section>{children}</section>;
}
