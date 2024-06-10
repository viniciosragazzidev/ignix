"use client";

import { ScrollArea, ScrollBar } from "@/shared/components/ui/scroll-area";
import Image from "next/image";
import React from "react";
import { BiBall, BiImage, BiPencil } from "react-icons/bi";
import StatusBadge from "../../components/status-badge";
import { formatarCurrency } from "@/shared/lib/utils";
import { Button } from "@/shared/components/ui/button";
import { orderItemType } from "./form-create-item";
import NoImage from "@/public/images/noImage.png";
const TableItensOrder = ({
  itens,
  setCurrentItem,
  setOpenCreateItem,
}: {
  itens: any;
  setCurrentItem: any;
  setOpenCreateItem: any;
}) => {
  return (
    <ScrollArea className="w-full h-full max-h-56 max-sm:max-w-md pb-4">
      <ScrollBar orientation="horizontal"></ScrollBar>
      {itens && itens.length > 0 ? (
        <ScrollArea className="w-full h-full  ">
          <ScrollBar orientation="vertical"></ScrollBar>

          <table className="min-w-[600px] overflow-x-scroll">
            <thead>
              <tr className="w-full text-sm font-semibold  text-left ">
                <th className="px-2 pt-3 pb-4">
                  <span className="flex items-center gap-2">
                    <BiImage className="text-primary text-lg" /> Imagem
                  </span>
                </th>
                <th className="px-2">Informações</th>
                <th className="px-2 max-sm:">Descrição</th>
                <th className="px-2">Status</th>
                <th className="px-2">Valor</th>
                <th className="px-2"></th>
              </tr>
            </thead>

            <tbody className="w-full">
              {itens?.map((item: orderItemType) => (
                <tr
                  key={item.id}
                  className="text-[13px] text-muted-foreground text-left "
                >
                  <td className="min-w-36 p-2  pl-5">
                    <div className="w-[58px] h-[58px] relative rounded-xl overflow-hidden ">
                      <Image
                        src={item.images[0] ? item.images[0] : NoImage}
                        alt="image"
                        className="object-cover"
                        fill
                      />
                    </div>
                  </td>
                  <td className="min-w-36 px-1 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-200">
                        {item.name}{" "}
                        <span className="text-primary"> {item.brand} </span>
                      </span>
                      <span>
                        {item.model} {item.numberSerie}
                      </span>
                    </div>
                  </td>
                  <td className="min-w-52 px-1 wrap max-sm: ">
                    <p className="relative overflow-hidden overflow-ellipsis whitespace-pre-line ">
                      {item.occurrenceDescription}
                    </p>
                  </td>
                  <td className="min-w-24 px-1 whitespace-nowrap">
                    <StatusBadge
                      className={"text-xs"}
                      status={item.status}
                    />
                  </td>
                  <td className="min-w-20 px-1 whitespace-nowrap">
                    {formatarCurrency({ currency: item.amountValue + "" })}
                  </td>
                  <td className=" px-1 whitespace-nowrap">
                    <Button
                      size={"sm"}
                      type="button"
                      onClick={() => {
                        setCurrentItem(item);
                        setOpenCreateItem(true);
                      }}
                      variant={"link"}
                    >
                      <BiPencil />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollArea>
      ) : (
        <div className="w-full h-full min-h-40 flex items-center justify-center flex-col text-center">
          <BiBall className="text-primary text-5xl" />
          <span>Nenhum item encontrado</span>
        </div>
      )}
    </ScrollArea>
  );
};

export default TableItensOrder;
