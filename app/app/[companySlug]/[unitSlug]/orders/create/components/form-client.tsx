"use client";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
const FormClient = ({
  register,
  errors,
  gender,
  setGender,
}: {
  register: any;
  errors: any;
  gender: any;
  setGender: any;
}) => {
  return (
    <div
      // action={submitAction}
      className="flex flex-col gap-4 max-w-lg text-sm  "
    >
      <div className="grid grid-cols-2 max-[340px]:grid-cols-1  gap-2">
        <div className=" sm:col-span-1 gap-2">
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            type="text"
            {...register("name")}
            placeholder="Insira seu nome"
            className="w-full rounded-xl"
          />
          {errors.name && (
            <span className="text-red-500 text-xs peer absolute bottom-[-5px]">
              {errors.name.message + ""}
            </span>
          )}
        </div>
        <div className="sm:col-span-1 gap-2">
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
            <span className="text-red-500 text-xs peer absolute bottom-[-5px]">
              {errors.surname.message + ""}
            </span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        <div className=" sm:col-span-1 gap-2">
          <Label htmlFor="address">Endereço</Label>
          <Input
            id="address"
            type="text"
            {...register("address")}
            placeholder="Rua dos bobos, no 0"
            className="w-full rounded-xl"
          />
          {errors.address && (
            <span className="text-red-500 text-xs peer absolute bottom-[-5px]">
              {errors.address.message + ""}
            </span>
          )}
        </div>
        <div className="sm:col-span-1 gap-2">
          <Label htmlFor="city">Cidade</Label>
          <Input
            id="city"
            type="text"
            {...register("city")}
            placeholder="Cidade A"
            className="w-full rounded-xl"
          />
          {errors.city && (
            <span className="text-red-500 text-xs peer absolute bottom-[-5px]">
              {errors.city.message + ""}
            </span>
          )}
        </div>
        <div className="sm:col-span-1 gap-2">
          <Label htmlFor="state">Estado</Label>
          <Input
            id="state"
            type="text"
            {...register("state")}
            name="surname"
            placeholder="Estado A"
            className="w-full rounded-xl"
          />
          {errors.state && (
            <span className="text-red-500 text-xs peer absolute bottom-[-5px]">
              {errors.state.message + ""}
            </span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="cpf">CPF</Label>
          <Input
            id="cpf"
            {...register("document")}
            type="text"
            name="cpf"
            placeholder="Insira seu CPF"
            className="w-full rounded-xl"
          />
          {errors.document && (
            <span className="text-red-500 text-xs peer absolute bottom-[-5px]">
              {errors.document.message + ""}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="gender">Gênero</Label>
          <Select
            name="gender"
            onValueChange={(value) => setGender(value)}
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
        <div className="flex flex-col gap-2">
          <Label htmlFor="birthdate">Data de nascimento</Label>
          <Input
            id="birthdate"
            {...register("birthdate")}
            type="date"
            className="w-full rounded-xl"
          />

          {errors.birthdate && (
            <span className="text-red-500 text-xs peer absolute bottom-[-5px]">
              {errors.birthdate.message + ""}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 max-[340px]:grid-cols-1  gap-2">
        <div className="flex flex-col gap-2">
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
            <span className="text-red-500 text-xs peer absolute bottom-[-5px]">
              {errors.email.message + ""}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Telefone</Label>
          <Input
            id="phone"
            {...register("phone")}
            type="text"
            placeholder="Insira seu telefone"
            className="w-full rounded-xl"
          />

          {errors.phone && (
            <span className="text-red-500 text-xs peer absolute bottom-[-5px]">
              {errors.phone.message + ""}
            </span>
          )}
        </div>
      </div>
      {/* <Button
// onClick={() => setStep(2)}
className="w-full rounded-xl max-w-[120px] text-muted self-end"
variant={"default"}
type="submit"
>
{isPending ? <BiLoader className="animate-spin" /> : "Enviar"}
</Button> */}
    </div>
  );
};

export default FormClient;
