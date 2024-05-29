"use client";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import React, { use, useActionState, useEffect } from "react";
import profileAction from "./actions/action";
import { findErrors } from "@/shared/lib/utils";
import { ErrorMessages } from "@/shared/lib/ErrorsMessage";
interface FormProfileProps {
  setCurrentOnboardStep: any;
}

const FormProfile = ({ setCurrentOnboardStep }: FormProfileProps) => {
  const [state = { errors: [], profile: null }, submitAction, isPending] =
    useActionState(profileAction, {
      errors: [],
    });

  const nameErrors: any = findErrors("name", state.errors);
  const surnameErrors: any = findErrors("surname", state.errors);
  const emailErrors: any = findErrors("email", state.errors);
  const phoneErrors: any = findErrors("phone", state.errors);
  const cpfErrors: any = findErrors("cpf", state.errors);
  const birthdateErrors: any = findErrors("birthdate", state.errors);
  const genderErrors: any = findErrors("gender", state.errors);

  useEffect(() => {
    if (state.profile) {
      setCurrentOnboardStep(2);
    }
  }, [state.profile]);
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
              name="name"
              placeholder="Insira seu nome"
              className="w-full rounded-xl"
            />

            <ErrorMessages errors={nameErrors} />
          </div>
          <div className="  sm:col-span-1 gap-2">
            <Label htmlFor="surname">Sobrenome</Label>
            <Input
              id="surname"
              type="text"
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
            <Input
              id="gender"
              name="gender"
              type="text"
              placeholder="Insira seu gênero"
              className="w-full rounded-xl"
            />

            <ErrorMessages errors={genderErrors} />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="birthdate">Data de nascimento</Label>
            <Input
              id="birthdate"
              name="birthdate"
              type="text"
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
          {isPending ? "Carregando..." : "Enviar"}
        </Button>
      </form>
    </div>
  );
};

export default FormProfile;
