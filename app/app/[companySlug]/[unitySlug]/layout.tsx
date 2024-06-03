import { auth } from "@/services/auth";
import NavbarApp from "../_components/navbar-app";
import NavbarMenuItens from "./_components/navbar-menu-itens";

export default async function UnitAreaLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    companySlug: string;
    unitySlug: string;
  };
}) {
  return (
    <div className="">
      <NavbarMenuItens params={params} />
      {children}
    </div>
  );
}
