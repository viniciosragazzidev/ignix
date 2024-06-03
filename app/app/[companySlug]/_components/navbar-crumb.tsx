"use client";
import { AppContext } from "@/shared/context/AppContext";
import { usePathname } from "next/navigation";
import React, { use } from "react";

const NavbarCrumb = ({ user }: { user: any }) => {
  const pathname = usePathname();
  const pathnameSplited = pathname.split("/");
  const currentCompany = user.CompanyUser[0].companyName;
  const currentUnit = user.units.filter(
    (company: any) => company.slugId === pathnameSplited[3]
  )[0]?.name;

  console.log(user);

  return (
    <>
      <h1>
        {currentCompany} / {currentUnit}
      </h1>
    </>
  );
};

export default NavbarCrumb;
