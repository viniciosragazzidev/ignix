import { auth } from "@/services/auth";
import NavbarApp from "../_components/navbar-app";
import NavbarMenuItens from "./_components/navbar-menu-itens";
import SelectPeriod from "./_components/select-period";

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
    <div className="w-full  flex justify-center sm:h-screen sm:overflow-hidden">
      <div className="w-full h-full ">
        <div className="  w-full border-b pb-3 border-primary/5 mb-3">
          <NavbarMenuItens params={params} />
        </div>
        {children}
      </div>
    </div>
  );
}
