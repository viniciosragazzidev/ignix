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
  return (
    <Sheet
      open={openCreateItem}
      onOpenChange={setOpenCreateItem}
    >
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Adicione um novo item</SheetTitle>
          <SheetDescription>
            Informe abaixo as informações nescessárias para a criação de um novo
            item.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="name"
              className="text-right"
            >
              Name
            </Label>
            <Input
              id="name"
              value="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="username"
              className="text-right"
            >
              Username
            </Label>
            <Input
              id="username"
              value="@peduarte"
              className="col-span-3"
            />
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
