"use client";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import React, { Suspense, useEffect } from "react";
import { BiExport, BiLoader, BiSearch } from "react-icons/bi";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import OrdersTable from "./orders-table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";

interface OrdersTableControllerProps {
  orders: any;
  perPage?: string;
  page?: string;
  action: ({
    page,
    itemsPerPage,
    search,
  }: {
    page: string;
    itemsPerPage: string;
    search?: string;
  }) => Promise<{ currentPage: string; itemsPerPage: string }>;
}
const OrdersTableController = ({
  orders,
  perPage = "10",
  page = "1",
  action,
}: OrdersTableControllerProps) => {
  const totalItems = orders.total_items;
  const itemsPerPage =
    totalItems < orders.items_per_page ? totalItems : orders.items_per_page;

  const currentPage = orders.current_page;
  const totalPages = orders.total_pages;

  const [pageState, setPageState] = React.useState(currentPage || 1);
  const [perPageState, setPerPageState] = React.useState(itemsPerPage || 10);
  const onChange = ({
    e = perPageState,
    page = pageState,
    search,
  }: {
    e?: any;
    page?: number;
    search?: string;
  }) => {
    const currentPageF = e > totalItems ? 1 : page || currentPage;
    action({
      itemsPerPage: e || itemsPerPage,
      page: currentPageF,
      search,
    });

    setPageState(currentPageF);
    setPerPageState(e);
  };

  // Função debounce
  function debounce(func: (...args: any[]) => void, wait: number) {
    let timeout: ReturnType<typeof setTimeout>;
    return function (this: { someProperty: string }, ...args: any[]) {
      // Use this.someProperty here
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  const [searchLoading, setSearchLoading] = React.useState(false);
  const onChangeInputSearch = debounce((e: any) => {
    action({ page: "1", itemsPerPage, search: e.target.value });
  }, 0);

  return (
    <div className="w-full h-full flex flex-col gap-5 pt-5">
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
              onChange={onChangeInputSearch}
              // value={search}
              placeholder="Pesquisar"
              className="pl-10"
              type="search"
            />
            <span
              className={`absolute top-1/2 animate-spin -translate-y-1/2 right-3 text-primary opacity-0  ${
                searchLoading && "opacity-100"
              }`}
            >
              <BiLoader className={`block`} />
            </span>
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
      {orders.total_items && Number(orders.total_items) > 0 && (
        <div className="flex w-full justify-between py-4 border-t border-primary/5">
          <span className="text-sm text-muted-foreground">
            Mostrando <span className="font-bold">{itemsPerPage}</span> de{" "}
            <span className="font-bold">{totalItems}</span> itens
          </span>

          <div className="flex gap-6 items-center">
            <div className="flex items-center gap-1">
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                Itens por página
              </span>
              <Select
                defaultValue={perPageState + "" || "10"}
                value={perPageState < 10 ? "10" : perPageState + ""}
                onValueChange={(e) => {
                  onChange({ e });
                }}
              >
                <SelectTrigger className="w-[80px] text-slate-100">
                  <SelectValue placeholder={10} />
                </SelectTrigger>

                <SelectContent className="bg-background">
                  <SelectItem value={"10"}>10</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <span className="text-sm text-muted-foreground">
              Pagina {pageState} de {totalPages}
            </span>
            <div className="flex items-center gap-4">
              <span
                onClick={() => currentPage > 1 && onChange({ page: 1 })}
                className={`p-1 rounded-md bg-muted/30 ${
                  currentPage == 1
                    ? "opacity-40 cursor-default"
                    : "cursor-pointer hover:text-primary hover:bg-muted/50"
                }   transition-all active:scale-95`}
              >
                <span className="block">
                  <MdKeyboardDoubleArrowLeft />
                </span>
              </span>
              <span
                onClick={() =>
                  currentPage > 1 && onChange({ page: pageState - 1 })
                }
                className={`p-1 rounded-md bg-muted/30 ${
                  currentPage == 1
                    ? "opacity-40 cursor-default"
                    : "cursor-pointer hover:text-primary hover:bg-muted/50"
                }   transition-all active:scale-95`}
              >
                <span className="block">
                  <MdOutlineKeyboardArrowLeft />
                </span>
              </span>
              <span
                onClick={() =>
                  currentPage < totalPages && onChange({ page: pageState + 1 })
                }
                className={`p-1 rounded-md bg-muted/30 ${
                  currentPage == totalPages
                    ? "opacity-40 cursor-default"
                    : "cursor-pointer hover:text-primary hover:bg-muted/50"
                }   transition-all active:scale-95`}
              >
                <span className="block">
                  <MdOutlineKeyboardArrowRight />
                </span>
              </span>
              <span
                onClick={() =>
                  currentPage < totalPages && onChange({ page: totalPages })
                }
                className={`p-1 rounded-md bg-muted/30 ${
                  currentPage == totalPages
                    ? "opacity-40 cursor-default"
                    : "cursor-pointer hover:text-primary hover:bg-muted/50"
                }   transition-all active:scale-95`}
              >
                <span className="block">
                  <MdKeyboardDoubleArrowRight />
                </span>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersTableController;
