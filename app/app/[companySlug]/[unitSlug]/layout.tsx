"use server";
import NavbarMenuItens from "./_components/navbar-menu-itens";

export default async function UnitAreaLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    companySlug: string;
    unitSlug: string;
  };
}) {
  return (
    <div className="w-full  flex justify-center sm:h-screen sm:overflow-hidden">
      <div className="w-full h-full ">
        <div className="  w-full border-b pb-3 border-primary/5">
          <NavbarMenuItens params={params} />
        </div>
        {children}
      </div>
    </div>
  );
}
