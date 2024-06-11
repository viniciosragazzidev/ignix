"use server";

import { auth } from "@/services/auth";
import { redirect } from "next/navigation";
import LogoutButton from "@/shared/components/logout-button";
import Logo from "@/shared/components/Logo";
import { DropdownMenuAvatarProfile } from "@/shared/components/popover-avatar-profile";
import NavbarMenuItens from "./[unitSlug]/_components/navbar-menu-itens";
import NavbarApp from "./_components/navbar-app";

interface companyAreaProps {
  children: React.ReactNode;
  params: { companySlug: string; unitSlug: string };
}
export default async function CompanyAreaLayout({
  children,
  params,
}: companyAreaProps) {
  const session = await auth();
  if (!session) return;

  const user: any = session.user;
  if (!user || user?.CompanyUser?.length === 0) {
    redirect("/onboard");
  }
  const slugId = user.CompanyUser[0].slugId;
  if (params.companySlug !== slugId) {
    redirect(`/app/${slugId}`);
  }

  return (
    <div className="flex flex-col w-full  sm:h-screen sm:overflow-hidden">
      <NavbarApp user={user} />
      {children}
    </div>
  );
}
