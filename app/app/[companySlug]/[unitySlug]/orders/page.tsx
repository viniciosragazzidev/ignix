"use server";
import React from "react";
import SelectPeriod from "../_components/select-period";
import { Button } from "@/shared/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import { cookies } from "next/headers";
import { getOrders } from "./actions/action";

const Orders = async ({
  params,
}: {
  params: { companySlug: string; unitySlug: string };
}) => {
  const getPeriod = async ({ period }: { period: string }) => {
    "use server";
    cookies().set("period", period, { path: "/" });
    return period;
  };

  const period = cookies().get("period");
  const orders = await getOrders({
    period: period?.value || "30",
    unitySlug: params?.unitySlug,
  });

  console.log(orders);

  return (
    <div className="w-full h-full pt-2">
      <div className="w-full flex justify-end">
        <div className="w-full max-w-min flex justify-center items-center gap-4">
          <SelectPeriod
            action={({ period }: { period: string }) => {
              "use server";
              return getPeriod({ period });
            }}
          />
          <Button
            className="ml-auto"
            size="sm"
          >
            <FaPlus />
          </Button>
        </div>
      </div>
      Orders
    </div>
  );
};

export default Orders;
