"use client";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import React, { useActionState } from "react";
import userAction from "./actions/action";
import { findErrors } from "@/shared/lib/utils";
import { ErrorMessages } from "@/shared/lib/ErrorsMessage";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
interface FormUserProps {
  setCurrentOnboardStep: any;
  user: any;
}
import { toast } from "sonner";
import { BiLoader } from "react-icons/bi";

const FormUser = ({ setCurrentOnboardStep, user }: FormUserProps) => {
  const [state = { errors: [], user: null }, submitAction, isPending] =
    useActionState(userAction, {
      errors: [],
    });

  const nameErrors: any = findErrors("name", state.errors);
  const surnameErrors: any = findErrors("surname", state.errors);
  const emailErrors: any = findErrors("email", state.errors);
  const phoneErrors: any = findErrors("phone", state.errors);
  const cpfErrors: any = findErrors("cpf", state.errors);
  const birthdateErrors: any = findErrors("birthdate", state.errors);
  const genderErrors: any = findErrors("gender", state.errors);

  return (
    <div className="flex flex-col text-start gap-6">
      <header className="flex flex-col gap-1">
        <h1 className="text-[22px] lg:text-3xl font-bold flex items-baseline gap-1">
          Informações pessoais
        </h1>
        <span className="text-sm text-muted-foreground">
          Informe abaixo suas informações pessoais para completar seu cadastro.
        </span>
      </header>

      <form
        action={submitAction}
        className="flex flex-col gap-4 max-w-lg "
      >
        <div className="grid grid-cols-2 max-[340px]:grid-cols-1  gap-2">
          <div className=" sm:col-span-1 gap-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              type="text"
              defaultValue={user?.name?.split(" ")[0]}
              name="name"
              placeholder="Insira seu nome"
              className="w-full rounded-xl"
            />

            <ErrorMessages errors={nameErrors} />
          </div>
          <div className="sm:col-span-1 gap-2">
            <Label htmlFor="surname">Sobrenome</Label>
            <Input
              id="surname"
              type="text"
              defaultValue={user?.name?.split(" ")[1]}
              name="surname"
              placeholder="Insira seu sobrenome"
              className="w-full rounded-xl"
            />

            <ErrorMessages errors={surnameErrors} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="cpf">CPF</Label>
            <Input
              id="cpf"
              type="text"
              name="cpf"
              placeholder="Insira seu CPF"
              className="w-full rounded-xl"
            />

            <ErrorMessages errors={cpfErrors} />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="gender">Gênero</Label>
            <Select
              name="gender"
              required
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
            <ErrorMessages errors={genderErrors} />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="birthdate">Data de nascimento</Label>
            <Input
              id="birthdate"
              name="birthdate"
              type="date"
              className="w-full rounded-xl"
            />

            <ErrorMessages errors={birthdateErrors} />
          </div>
        </div>

        <div className="grid grid-cols-2 max-[340px]:grid-cols-1  gap-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="Insira seu email"
              className="w-full rounded-xl"
            />

            <ErrorMessages errors={emailErrors} />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input
              id="phone"
              name="phone"
              type="text"
              placeholder="Insira seu telefone"
              className="w-full rounded-xl"
            />

            <ErrorMessages errors={phoneErrors} />
          </div>
        </div>
        <Button
          // onClick={() => setStep(2)}
          className="w-full rounded-xl max-w-[120px] text-muted self-end"
          variant={"default"}
          type="submit"
        >
          {isPending ? <BiLoader className="animate-spin" /> : "Enviar"}
        </Button>
      </form>
    </div>
  );
};

export default FormUser;
