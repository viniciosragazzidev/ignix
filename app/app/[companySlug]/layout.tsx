"use server";

import { auth } from "@/services/auth";
import { redirect } from "next/navigation";
import LogoutButton from "@/shared/components/logout-button";

interface companyAreaProps {

  children: React.ReactNode
  params : { companySlug: string }
}
export default async function CompanyAreaLayout( { children, params }: companyAreaProps) {
  const session = await auth();
 if(!session) return


    const user: any = session.user;
    if (!user || user?.CompanyUser?.length === 0) {
      redirect("/onboard");
    }
    const slugId = user.companies && user.companies[0].slugId
  if( params.companySlug !== slugId) {
    redirect(`/app/${slugId}`)
  }
 

  return (
    <div className="flex flex-col w-full h-screen">
    <header className="flex gap-3 justify-between w-full p-5">
      <nav className="flex gap-3 justify-between w-full">
        {user.name}  

        <LogoutButton/>
      </nav>
    </header>
    
    {children}
   </div>
  )
}
