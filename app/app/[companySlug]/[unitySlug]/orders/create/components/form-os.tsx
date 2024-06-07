"use client";

import React from "react";
import { ScrollArea } from "@/shared/components/ui/scroll-area";
import {
  BiCheck,
  BiDevices,
  BiPaperPlane,
  BiPlus,
  BiSlideshow,
  BiUser,
} from "react-icons/bi";
import FormClient from "./form-client";
import { Button } from "@/shared/components/ui/button";
import TableItensOrder from "./table-itens-order";
import FormCreateItem from "./form-create-item";
import { Textarea } from "@/shared/components/ui/textarea";
import { Label } from "@/shared/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import StatusBadge, { Status } from "../../components/status-badge";
import { status_itens } from "@/shared/constants";
const FormOS = () => {
  const [openCreateItem, setOpenCreateItem] = React.useState(false);
  const [status, setStatus] = React.useState<string>("PENDING");
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
        <div className="flex flex-col max-sm:col-span-1 w-full h-full col-span-2 max-sm:min-h-screen gap-5">
          <ScrollArea className="  w-full h-full">
            <div className="client-area py-3 flex flex-col gap-5">
              <header>
                <h3 className="text-lg  flex gap-1 font-semibold items-center">
                  {" "}
                  <BiUser className="text-primary " /> Dados do cliente
                </h3>
              </header>
              <FormClient />
            </div>
            <div className="w-full h-full  sm:h-24 col-span-2 pt-4">
              <Label
                htmlFor="description"
                className="text-left flex font-semibold items-center gap-1 pb-4 text-lg "
              >
                <span className="text-primary ">
                  <BiPaperPlane />
                </span>{" "}
                Descricão da Ordem
              </Label>
              <Textarea
                id="description"
                name="description"
                className="w-full h-full resize-none"
                placeholder="Type your message here."
              />
            </div>
          </ScrollArea>
        </div>
        <ScrollArea className="flex w-full h-full max-sm:col-span-1 col-span-3 max-sm:min-h-screen md:px-5  relative">
          <header className="pb-5 flex justify-between">
            <div className="flex flex-col">
              <h3 className="text-lg  flex gap-1 font-semibold items-center">
                <span className="text-primary ">
                  <BiDevices />
                </span>{" "}
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

          <div className="w-36 h-min col-span-1 sm:col-span-2 grid max-sm:mt-6 gap-5">
            <Label
              htmlFor="status"
              className="text-left flex items-center gap-1 "
            >
              Status
            </Label>
            <Select
              name="status"
              defaultValue={status}
              value={status}
              onValueChange={setStatus}
              required
            >
              <SelectTrigger className="w-full rounded-xl border-none focus:ring-transparent shadow-none outline-none">
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {status_itens.map((status: any) => (
                    <SelectItem
                      className="focus:bg-transparent cursor-pointer"
                      key={status.id}
                      value={status.value}
                    >
                      <StatusBadge
                        className={
                          "bg-transparent hover:bg-transparent hover:scale-[0.98] transition-all"
                        }
                        status={status.value}
                      />
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="flex  w-full h-full justify-end  pb-10">
            <h1 className="text-5xl font-semibold">
              <span className="text-primary  text-3xl">R$</span> 0,00
            </h1>
          </div>
          <div className="w-full flex justify-center items-center">
            <Button className="w-full max-w-[140px] flex gap-2 self-end font-semibold">
              <BiCheck className="text-xl " /> Enviar Ordem
            </Button>
          </div>
        </ScrollArea>
      </form>
    </>
  );
};

export default FormOS;
