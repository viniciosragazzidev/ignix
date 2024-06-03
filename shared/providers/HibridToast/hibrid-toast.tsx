import { cookies } from "next/headers";
import { Toaster } from "@/shared/components/ui/sonner";
import HibridToastClient from "./hibrid-toast-client";

export function HibridToaster() {
  const hibrid = cookies().get("hibrid");

  return (
    <>
      <Toaster />
      <HibridToastClient hibrid={hibrid?.value} />
    </>
  );
}

export async function  setHibrid(hibrid: {
  type: "success" | "error" | "signin" | "signout";
  message: string;
  random?: string;
}) {
  cookies().set("hibrid", JSON.stringify({ ...hibrid, random: Date.now() }), {
    path: "/",
    expires: Date.now(),
  });

  return hibrid;
}
