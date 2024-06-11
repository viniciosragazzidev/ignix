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
import FormCreateItem, { orderItemType } from "./form-create-item";
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
import { status_itens } from "@/shared/constants";
import {
  formatarCurrency,
  getCurrentUnitIdByUnitSlug,
} from "@/shared/lib/utils";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/shared/components/ui/input";
import { toast } from "sonner";
import { createOrder } from "../../actions/action";
const OsSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório!"),
  surname: z.string().min(1, "Sobrenome é obrigatório!"),
  document: z.string().min(1, "CPF é obrigatório!"),
  address: z.string().min(1, "Endereço é obrigatório!"),
  city: z.string().min(1, "Cidade é obrigatório!"),
  state: z.string().min(1, "Estado é obrigatório!"),
  email: z.string().email().min(1, "Email é obrigatório!"),
  phone: z.string().min(1, "Telefone é obrigatório!"),
  birthdate: z.string().optional(),
  gender: z.string().optional(),
  orderDescription: z.string().min(1, "Descricão é obrigatório!"),
  status: z.string().optional(),
});
export type orderType = z.infer<typeof OsSchema>;

const FormOS = ({
  user,
  params,
  action,
}: {
  user: any;
  params: { companySlug: string; unitSlug: string };
  action: any;
}) => {
  const [openCreateItem, setOpenCreateItem] = React.useState(false);
  const [status, setStatus] = React.useState<string>("PENDING");
  const [orderDescription, setOrderDescription] = React.useState<string>("");
  const [items, setItems] = React.useState([]);
  const [currentItem, setCurrentItem] = React.useState({} || null);

  const [gender, setGender] = React.useState<string>("Masculino");
  const totalAmount = formatarCurrency({
    currency:
      items.reduce((acc: number, item: orderItemType) => {
        return acc + Number(item.amountValue);
      }, 0) + "",
  }).replace("R$", "");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<orderType>({
    resolver: zodResolver(OsSchema),
  });

  const onSubmit = async (data: any) => {
    const companyUnitId = getCurrentUnitIdByUnitSlug({
      unitSlug: params.unitSlug,
      user: user,
    });
    const client = {
      name: data.name,
      surname: data.surname,
      document: data.document,
      address: data.address,
      city: data.city,
      state: data.state,
      email: data.email,
      phone: data.phone,
      birthdate: new Date(data.birthdate),
      gender: gender,
    };
    const os = {
      client: client,
      status: status,
      itens: items,
      orderDescription: data.orderDescription,
      totalAmount: totalAmount,
      createById: user?.id || "",
      companyUnitId: companyUnitId?.id || "",
    };

    if (items.length < 1) {
      toast("❌ Adicione pelo menos um item ao Orçamento");
    } else {
      const osResult = await action({ os: os });
      console.log(os);
    }
  };
  return (
    <>
      <FormCreateItem
        items={items}
        setItems={setItems}
        openCreateItem={openCreateItem}
        currentItem={currentItem}
        setOpenCreateItem={setOpenCreateItem}
        setCurrentItem={setCurrentItem}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="  grid max-sm:grid-cols-1 grid-cols-5 sm: gap-5 w-full h-full "
      >
        <div className="flex flex-col max-sm:col-span-1 w-full h-full col-span-2 py-4  sm:border-r sm:border-primary/5 sm:pr-4 max-sm:min-h-screen gap-5">
          <ScrollArea className="  w-full h-full max-h-[calc(100vh-12rem)] ">
            <div className="client-area py-3 flex flex-col gap-5  px-6">
              <header>
                <h3 className="text-lg  flex gap-1 font-semibold items-center">
                  {" "}
                  <BiUser className="text-primary " /> Dados do cliente
                </h3>
              </header>

              <div
                // action={submitAction}
                className="flex flex-col  max-w-lg text-sm  gap-9 "
              >
                <div className="grid grid-cols-2 max-[340px]:grid-cols-1  gap-2">
                  <div className=" sm:col-span-1 gap-2 relative">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      type="text"
                      {...register("name")}
                      placeholder="Insira seu nome"
                      className="w-full rounded-xl"
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xs peer absolute bottom-[-20px]">
                        {errors.name.message + ""}
                      </span>
                    )}
                  </div>
                  <div className="sm:col-span-1 gap-2 relative">
                    <Label htmlFor="surname">Sobrenome</Label>
                    <Input
                      id="surname"
                      type="text"
                      {...register("surname")}
                      name="surname"
                      placeholder="Insira seu sobrenome"
                      className="w-full rounded-xl"
                    />
                    {errors.surname && (
                      <span className="text-red-500 text-xs peer absolute bottom-[-20px]">
                        {errors.surname.message + ""}
                      </span>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  <div className=" sm:col-span-1 gap-2 relative">
                    <Label htmlFor="address">Endereço</Label>
                    <Input
                      id="address"
                      type="text"
                      {...register("address")}
                      placeholder="Rua dos bobos, no 0"
                      className="w-full rounded-xl"
                    />
                    {errors.address && (
                      <span className="text-red-500 text-xs peer absolute bottom-[-20px]">
                        {errors.address.message + ""}
                      </span>
                    )}
                  </div>
                  <div className="sm:col-span-1 gap-2 relative">
                    <Label htmlFor="city">Cidade</Label>
                    <Input
                      id="city"
                      type="text"
                      {...register("city")}
                      placeholder="Cidade A"
                      className="w-full rounded-xl"
                    />
                    {errors.city && (
                      <span className="text-red-500 text-xs peer absolute bottom-[-20px]">
                        {errors.city.message + ""}
                      </span>
                    )}
                  </div>
                  <div className="sm:col-span-1 gap-2 relative">
                    <Label htmlFor="state">Estado</Label>
                    <Input
                      id="state"
                      type="text"
                      {...register("state")}
                      placeholder="Estado A"
                      className="w-full rounded-xl"
                    />
                    {errors.state && (
                      <span className="text-red-500 text-xs peer absolute bottom-[-20px]">
                        {errors.state.message + ""}
                      </span>
                    )}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  <div className="flex flex-col gap-2 relative">
                    <Label htmlFor="cpf">CPF</Label>
                    <Input
                      id="cpf"
                      {...register("document")}
                      type="text"
                      placeholder="Insira seu CPF"
                      className="w-full rounded-xl"
                    />
                    {errors.document && (
                      <span className="text-red-500 text-xs peer absolute bottom-[-20px]">
                        {errors.document.message + ""}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 relative">
                    <Label htmlFor="gender">Gênero</Label>
                    <Select
                      {...register("gender")}
                      onValueChange={setGender}
                      defaultValue={gender}
                      value={gender}
                    >
                      <SelectTrigger className="w-full rounded-xl">
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Masculino">Masculino</SelectItem>
                          <SelectItem value="Feminino">Feminino</SelectItem>
                          <SelectItem value="Outro">Outro</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2 relative">
                    <Label htmlFor="birthdate">Data de nascimento</Label>
                    <Input
                      id="birthdate"
                      {...register("birthdate")}
                      type="date"
                      className="w-full rounded-xl"
                    />

                    {errors.birthdate && (
                      <span className="text-red-500 text-xs peer absolute bottom-[-20px]">
                        {errors.birthdate.message + ""}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 max-[340px]:grid-cols-1  gap-2">
                  <div className="flex flex-col gap-2 relative">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      //   defaultValue={user?.email}
                      placeholder="Insira seu email"
                      className="w-full rounded-xl"
                    />

                    {errors.email && (
                      <span className="text-red-500 text-xs peer absolute bottom-[-20px]">
                        {errors.email.message + ""}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 relative">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      {...register("phone")}
                      type="text"
                      placeholder="Insira seu telefone"
                      className="w-full rounded-xl"
                    />

                    {errors.phone && (
                      <span className="text-red-500 text-xs peer absolute bottom-[-20px]">
                        {errors.phone.message + ""}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full   col-span-2   px-4 pt-6 ">
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
                {...register("orderDescription")}
                className="w-full h-full min-h-32 resize-none"
                placeholder="Type your message here."
              />
              {errors.orderDescription && (
                <span className="text-red-500 text-xs peer absolute bottom-[-20px]">
                  {errors.orderDescription.message + ""}
                </span>
              )}
            </div>
            <div className="w-full h-full  sm:h-10 col-span-2   px-4 "></div>
          </ScrollArea>
        </div>
        <div className="flex w-full h-full max-sm:col-span-1 col-span-3  max-sm:min-h-screen md:px-5  relative">
          <div className="w-full h-full sm:pl-8">
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
            <TableItensOrder
              setOpenCreateItem={setOpenCreateItem}
              setCurrentItem={setCurrentItem}
              itens={items}
            />

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

            <div className="flex  w-full justify-end  pb-5">
              <h1 className="text-5xl font-semibold">
                <span className="text-primary  text-3xl">R$</span> {totalAmount}
              </h1>
            </div>
            <div className="w-full flex justify-center items-center">
              <Button
                type="submit"
                className="w-full max-w-[140px] flex gap-2 self-end font-semibold"
              >
                <BiCheck className="text-xl " /> Enviar Ordem
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormOS;
