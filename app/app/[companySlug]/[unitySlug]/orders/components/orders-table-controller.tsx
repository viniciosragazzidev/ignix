"use client";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import React, { Suspense } from "react";
import { BiExport, BiSearch } from "react-icons/bi";
import OrdersTable from "./orders-table";

interface OrdersTableControllerProps {
  orders: any[];
}
const OrdersTableController = ({ orders }: OrdersTableControllerProps) => {
  return (
    <div className="w-full h-full flex flex-col gap-5">
      <div className="flex w-full justify-between">
        <div className="flex w-full items-center gap-4">
          <div className="select w-max p-2 rounded-full text-sm">
            <ul className="flex">
              <li className="px-3 bg-accent-medium text-primary rounded-full py-1">
                Todos
              </li>
              <li className="px-3 py-1">Abertos</li>
              <li className="px-3 py-1">Concluídos</li>
            </ul>
          </div>

          <div className="w-full max-w-sm relative block">
            <BiSearch className="absolute block top-1/2 -translate-y-1/2 left-3 text-primary" />
            <Input
              placeholder="Pesquisar"
              className="pl-10"
              type="search"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button
            className="flex items-center gap-2"
            variant={"outline"}
          >
            <BiExport className="text-primary" /> Exportar
          </Button>
        </div>
      </div>
      <OrdersTable orders={orders} />{" "}
      <div className="flex">area de paginação</div>
    </div>
  );
};

export default OrdersTableController;
