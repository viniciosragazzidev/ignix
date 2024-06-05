"use server";
import React, { Suspense } from "react";
import SelectPeriod from "../_components/select-period";
import { Button } from "@/shared/components/ui/button";
import { FaBox, FaFirstOrder, FaPlus } from "react-icons/fa6";
import { cookies } from "next/headers";
import { getOrders } from "./actions/action";
import CardValueInfo from "../_components/card-value-infos";
import OrdersInfoCards from "./components/orders-infos-cards";
import OrdersTableController from "./components/orders-table-controller";
import { revalidateTag } from "next/cache";

const Orders = async ({
  params,
}: {
  params: { companySlug: string; unitySlug: string };
}) => {
  const getPeriod = async ({ period }: { period: string }) => {
    "use server";
    cookies().set("period", period, { path: "/" });
    revalidateTag("orders");

    return period;
  };

  const getCurrentPageAndItemsPerPage = async ({
    currentPage,
    itemsPerPage,
    search,
  }: {
    currentPage: string;
    itemsPerPage: string;
    search?: string;
  }) => {
    "use server";
    cookies().set("currentPage", currentPage, { path: "/" });
    cookies().set("itemsPerPage", itemsPerPage, { path: "/" });
    cookies().set("search", search || "", { path: "/", expires: 0 });
    revalidateTag("orders");
    return { currentPage, itemsPerPage };
  };

  const period = cookies().get("period");
  const page = cookies().get("currentPage");
  const itemsPerPage = cookies().get("itemsPerPage");
  const search = cookies().get("search");

  const orders = await getOrders({
    period: period?.value || "30",
    unitySlug: params?.unitySlug,
    page: page?.value || "1",
    itemsPerPage: itemsPerPage?.value || "10",
    search: search?.value || "",
  });

  return (
    <div className="w-full h-full pt-2 flex flex-col gap-7">
      <div className="w-full flex justify-between">
        <h1 className="text-lg font-bold">Ordens de Serviço</h1>
        <div className="w-full max-w-min flex justify-center items-center gap-4">
          <SelectPeriod
            action={({ period }: { period: string }) => {
              "use server";
              return getPeriod({ period });
            }}
            period={period}
          />
          <Button
            className="ml-auto"
            size="sm"
          >
            <FaPlus />
          </Button>
        </div>
      </div>
      <OrdersInfoCards
        orders={orders}
        period={period}
      />
      <OrdersTableController
        action={({
          page,
          itemsPerPage,
          search,
        }: {
          page: string;
          itemsPerPage: string;
          search?: string;
        }) => {
          "use server";
          return getCurrentPageAndItemsPerPage({
            currentPage: page,
            itemsPerPage: itemsPerPage,
            search: search,
          });
        }}
        perPage={itemsPerPage?.value}
        page={page?.value}
        orders={orders}
      />
    </div>
  );
};

export default Orders;
