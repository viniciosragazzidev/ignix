"use client";

import { AppContext } from "@/shared/context/AppContext";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import React, { use, useEffect } from "react";

const NavbarMenuItens = ({
  params,
}: {
  params: { companySlug: string; unitSlug: string };
}) => {
  const pathname = usePathname();
  const pathnameSlice = pathname?.split("/");
  const currentDefaultUrl = `/app/${params?.companySlug}/${params?.unitSlug}`;
  const navbarItens = [
    {
      name: "Dashboard",
      label: "dashboard",
      path: `${currentDefaultUrl}`,
    },
    {
      name: "Serviços",
      label: "orders",
      path: `${currentDefaultUrl}/orders`,
    },
    {
      name: "Vendas",
      label: "sales",
      path: `${currentDefaultUrl}/sales`,
    },
    {
      name: "Fluxo de Caixa",
      label: "cash-flow",
      path: `${currentDefaultUrl}/cash-flow`,
    },
    {
      name: "Clientes",
      label: "clients",
      path: `${currentDefaultUrl}/clients`,
    },
  ];

  return (
    <ul
      className={`${
        !params?.unitSlug ||
        pathname ===
          `/app/${params.companySlug}/${params.unitSlug}/orders/create`
          ? "hidden"
          : "flex"
      }  gap-1  w-full min-w-sm max-[380px]:overflow-x-auto px-4`}
    >
      {navbarItens.map((item) => (
        <li
          key={item.label}
          className={`px-2 py-0.5 rounded-lg ${
            (item.label === pathnameSlice[4] ||
              (item.label === "dashboard" && !pathnameSlice[4])) &&
            "text-primary font-bold bg-accent-medium "
          }`}
        >
          <Link
            key={item.label}
            href={item.path}
            className="text-sm hover:text-primary whitespace-nowrap"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarMenuItens;
