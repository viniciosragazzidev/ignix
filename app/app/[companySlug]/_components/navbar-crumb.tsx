"use client";
import { Badge } from "@/shared/components/ui/badge";
import { AppContext } from "@/shared/context/AppContext";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import React, { use } from "react";
import { BiChevronRight } from "react-icons/bi";

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
      <div className="flex text-sm gap-2 items-center ">
        <Link
          className={`flex gap-2`}
          href={`/app/${user.CompanyUser[0].slugId}`}
        >
          {currentCompany}

          <span>
            <Badge className="bg-accent text-accent-foreground hover:bg-accent text-[10px] p-0 px-1 py-0 tracking-widest">
              {" "}
              PRO
            </Badge>
          </span>
        </Link>
        <span
          className={`text-muted-foreground text-lg ${
            !currentUnit && "hidden"
          }`}
        >
          <BiChevronRight />
        </span>
        <span className="text-primary">
          {currentUnit ? `${currentUnit}` : ""}
        </span>
      </div>
    </>
  );
};

export default NavbarCrumb;
