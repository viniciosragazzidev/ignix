"use client";

import { formatarCurrency, formatarData } from "@/shared/lib/utils";
import React from "react";
import { BsChatDots, BsEye, BsThreeDots } from "react-icons/bs";
import { TbNotesOff } from "react-icons/tb";
import StatusBadge, { Status } from "./status-badge";

interface DataOrdersType {
  id: string;
  client: {
    client_name: string;
    client_phone: string;
  };
  itens: [
    {
      id: string;
      name: string;
      brand: string;
      model: string;
    }
  ];
  createdAt: string;
  totalAmount: string;
  status: Status;
}
interface OrdersTableProps {
  orders: any;
}

const theadItems = ["ID", "Cliente", "Itens", "Entrada", "Status", "Valor", ""];
const OrdersTable = ({ orders }: OrdersTableProps) => {
  const dataOrders = orders.orders;
  const orders_formated = dataOrders.map((order: any) => {
    return {
      id: order.id,
      client: {
        client_name: order.client.name,
        client_phone: order.client.phone,
      },
      itens: order.itens.map((item: any) => {
        return {
          id: item.id,
          name: item.name,
          brand: item.brand,
          model: item.model,
        };
      }),
      createdAt: formatarData(order.createdAt),
      totalAmount: formatarCurrency(
        order.itens.reduce(
          (total: number, item: any) => total + item.amountValue,
          0
        )
      ),
      status: order.status,
    };
  });
  console.log(orders_formated);

  return (
    <div
      className={`flex w-full min-w-[480px] ${
        dataOrders.length === 0 ? "" : "min-h-[300px]"
      }`}
    >
      {dataOrders.length > 0 ? (
        <table className="w-full h-full">
          <thead className="w-full border-b border-primary/5">
            <tr className=" ">
              {theadItems.map((item) => (
                <th
                  key={item}
                  className={`text-sm font-medium text-left py-4   ${
                    item === "ID" ? "text-primary" : "text-slate-100/80"
                  }`}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders_formated.map((order: DataOrdersType) => (
              <tr
                key={order.id}
                className="w-full border-b border-primary/5"
              >
                <td className="text-sm font-medium text-primary py-4 text-start">
                  {order.id}
                </td>
                <td className="text-sm text-primary py-4 text-start ">
                  <div className="flex flex-col ">
                    <span className="font-medium">
                      {order.client.client_name}
                    </span>
                    <span className="text-slate-100/80">
                      {order.client.client_phone}
                    </span>
                  </div>
                </td>
                <td className="text-sm text-primary py-4 text-start ">
                  <div className="flex flex-col ">
                    <div className="flex gap-1">
                      <span className="font-medium">{order.itens[0].name}</span>
                      <span className="font-medium text-slate-100">
                        {order.itens[0].brand}
                      </span>
                    </div>
                    <div className="flex w-full justify-between gap-3">
                      <span className="font-medium text-muted-foreground">
                        {order.itens[0].model}
                      </span>
                      <span className="text-xs text-slate-100 cursor-pointer flex items-center gap-1 mr-8 ">
                        <BsEye className="text-primary" /> Ver todos
                      </span>
                    </div>
                  </div>
                </td>
                <td className="text-[13px]  py-4 text-start  ">
                  {order.createdAt}
                </td>
                <td className="text-sm text-primary py-4 text-start ">
                  <StatusBadge status={order.status} />
                </td>
                <td className="text-sm text-primary py-4 text-start ">
                  {order.totalAmount}
                </td>
                <td className="text-sm text-primary py-4 cursor-pointer text-start ">
                  <BsThreeDots className="text-primary" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="w-full h-full flex justify-center py-10   gap-3 items-center">
          <TbNotesOff className="text-4xl text-primary" />
          <h1 className="">Nenhum pedido encontrado</h1>
        </div>
      )}
    </div>
  );
};

export default OrdersTable;
