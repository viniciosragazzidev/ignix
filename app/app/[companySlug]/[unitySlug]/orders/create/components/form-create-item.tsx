"use client";

import React from "react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { StatusA } from "../../components/status-badge";
import { status_itens } from "@/shared/constants";
import { Status } from "@prisma/client";
const FormCreateItem = ({
  setItems,
  items,
  setOpenCreateItem,
  openCreateItem,
}: {
  setItems: React.Dispatch<React.SetStateAction<any>>;
  items: any;
  setOpenCreateItem: React.Dispatch<React.SetStateAction<boolean>>;
  openCreateItem: boolean;
}) => {
  console.log();

  return (
    <Sheet
      open={openCreateItem}
      onOpenChange={setOpenCreateItem}
    >
      <SheetContent>
        <SheetHeader className="border-b border-primary/5 pb-5">
          <SheetTitle>Adicione um novo item</SheetTitle>
          <SheetDescription>
            Informe abaixo as informações nescessárias para a criação de um novo
            item.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="grid grid-cols-1 items-center gap-4">
              <Label
                htmlFor="name"
                className="text-left flex items-center gap-1 text-primary"
              >
                Nome do Item
              </Label>
              <Input
                id="name"
                placeholder="Teclado..."
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-1 items-center gap-4">
              <Label
                htmlFor="brand"
                className="text-left flex items-center gap-1 text-primary"
              >
                Marca
              </Label>
              <Input
                id="brand"
                placeholder="Logitech..."
                className="col-span-3"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="grid grid-cols-1 items-center gap-4">
              <Label
                htmlFor="model"
                className="text-left flex items-center gap-1 text-primary"
              >
                Modelo
              </Label>
              <Input
                id="model"
                placeholder="456TA"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-1 items-center gap-4">
              <Label
                htmlFor="numberSerie"
                className="text-left flex items-center gap-1 text-primary"
              >
                Número de serie
              </Label>
              <Input
                id="numberSerie"
                placeholder="5A6GF33A"
                className="col-span-3"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="grid grid-cols-1 items-center gap-4">
              <Label
                htmlFor="color"
                className="text-left flex items-center gap-1 text-primary"
              >
                Cor
              </Label>
              <Input
                id="color"
                placeholder="Preto"
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-1 items-center gap-4">
              <Label
                htmlFor="status"
                className="text-left flex items-center gap-1 text-primary"
              >
                Status
              </Label>
              <Select
                name="status"
                defaultValue={Status.PENDING}
                required
              >
                <SelectTrigger className="w-full rounded-xl">
                  <SelectValue placeholder="Selecione..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {status_itens.map((status: any) => (
                      <SelectItem
                        key={status.id}
                        value={status.value}
                      >
                        {status.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default FormCreateItem;
