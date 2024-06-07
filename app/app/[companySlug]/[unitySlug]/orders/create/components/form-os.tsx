"use client";

import React from "react";
import { ScrollArea } from "@/shared/components/ui/scroll-area";
import { BiCheck, BiPlus, BiUser } from "react-icons/bi";
import FormClient from "./form-client";
import { Button } from "@/shared/components/ui/button";
import TableItensOrder from "./table-itens-order";
import FormCreateItem from "./form-create-item";
const FormOS = () => {
  const [openCreateItem, setOpenCreateItem] = React.useState(false);
  const [items, setItems] = React.useState([]);
  return (
    <>
      <FormCreateItem
        items={items}
        setItems={setItems}
        openCreateItem={openCreateItem}
        setOpenCreateItem={setOpenCreateItem}
      />
      <form
        action=""
        className="  grid max-sm:grid-cols-1 grid-cols-5 sm: gap-5 w-full h-full"
      >
        <div className="flex flex-col max-sm:col-span-1 w-full h-full col-span-2 max-sm:min-h-screen ">
          <header className="py-5  border-b border-b-primary/5">
            <h1 className="text-xl font-bold text-primary flex flex-col">
              Nova Ordem de Serviço
            </h1>
            <p className="text-sm text-muted-foreground">
              Informe abaixo todos os dados nescessários para a criação de uma
              nova ordem.
            </p>

            <div className="flex w-full justify-end">
              <Button className="mt-4 w-full max-w-52 self-center flex gap-1">
                <BiCheck className="text-xl " /> Criar Ordem
              </Button>
            </div>
          </header>
          <ScrollArea className="  w-full h-[calc(100vh-200px)]">
            <div className="client-area py-3 flex flex-col gap-5">
              <header>
                <h3 className="text-lg  flex gap-1 font-semibold items-center">
                  {" "}
                  <BiUser className="text-primary " /> Dados do cliente
                </h3>
              </header>
              <FormClient />
            </div>
          </ScrollArea>
        </div>
        <ScrollArea className="flex w-full h-full max-sm:col-span-1 col-span-3 max-sm:min-h-screen md:px-5  relative">
          <header className="pb-5 flex justify-between">
            <div className="flex flex-col">
              <h3 className="text-lg  flex gap-1 font-semibold items-center">
                Itens da Ordem
              </h3>
              <p className="text-sm text-muted-foreground">
                Lista de itens que serão incluidos na ordem.
              </p>
            </div>
            <Button
              type="button"
              onClick={() => setOpenCreateItem(true)}
              variant={"outline"}
            >
              <BiPlus className="text-xl " /> Adicionar Item
            </Button>
          </header>
          <TableItensOrder itens={items} />
        </ScrollArea>
      </form>
    </>
  );
};

export default FormOS;
