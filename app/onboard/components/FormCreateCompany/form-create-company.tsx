"use client";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import React, { useActionState, useEffect } from "react";
import CompanyAction from "./actions/action";
import { findErrors } from "@/shared/lib/utils";
import { ErrorMessages } from "@/shared/lib/ErrorsMessage";
import { useRouter } from "next/navigation";
import { BiLoader } from "react-icons/bi";

const FormCreateCompany = ({
  setCurrentOnboardStep,
}: {
  setCurrentOnboardStep: any;
}) => {
  const [state = { errors: [], Company: null }, submitAction, isPending] =
    useActionState(CompanyAction, {
      errors: [],
    });

  const nameErrors: any = findErrors("name", state.errors);
  const cnpjErrors: any = findErrors("cnpj", state.errors);
  const andressErrors: any = findErrors("andress", state.errors);
  const cityErrors: any = findErrors("city", state.errors);
  const stateErrors: any = findErrors("state", state.errors);
  const emailErrors: any = findErrors("email", state.errors);
  const phoneErrors: any = findErrors("phone", state.errors);

  const router = useRouter();
  useEffect(() => {
    if (state.Company) {
      router.push("/");
    }
  }, [state.Company]);
  return (
    <div className="flex flex-col text-start gap-6">
      <header className="flex flex-col gap-1">
        <h1 className="text-[22px] lg:text-3xl font-bold flex items-baseline gap-1">
          Informações da Empresa
        </h1>
        <span className="text-sm text-muted-foreground">
          Informe abaixo os dados da empresa que você deseja cadastrar na
          plataforma.
        </span>
      </header>

      <form
        action={submitAction}
        className="flex flex-col gap-4 max-w-lg "
      >
        <div className="grid grid-cols-2 max-[340px]:grid-cols-1  gap-2">
          <div className=" sm:col-span-1 gap-2">
            <Label htmlFor="name">Nome da empresa</Label>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Nome empresa"
              className="w-full rounded-xl"
            />
            <ErrorMessages errors={nameErrors} />
          </div>
          <div className="  sm:col-span-1 gap-2">
            <Label htmlFor="cnpj">CNPJ</Label>
            <Input
              id="cnpj"
              type="text"
              name="cnpj"
              placeholder="CNPJ da empresa"
              className="w-full rounded-xl"
            />
            <ErrorMessages errors={cnpjErrors} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          <div className="flex flex-col gap-2 col-span-2">
            <Label htmlFor="andress">Endereço</Label>
            <Input
              id="andress"
              type="text"
              name="andress"
              placeholder="Endereço da empresa"
              className="w-full rounded-xl"
            />
            <ErrorMessages errors={andressErrors} />
          </div>
          <div className="flex flex-col gap-2 col-span-1">
            <Label htmlFor="city">Cidade</Label>
            <Input
              id="city"
              placeholder="Selecionar Cidade"
              type="text"
              name="city"
              className="w-full rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-2 col-span-1">
            <Label htmlFor="state">Estado</Label>
            <Input
              id="state"
              placeholder="Selecionar Estado"
              type="text"
              name="state"
              className="w-full rounded-xl"
            />
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
        <div className="grid grid-cols-1  gap-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="area">Area de Atuação</Label>
            <Input
              id="area"
              type="text"
              placeholder="Selecione a area de atuação"
              className="w-full rounded-xl"
            />
          </div>
        </div>
        <Button
          className="w-full rounded-xl max-w-[120px] text-muted self-end"
          variant={"default"}
          type="submit"
        >
          {isPending ? (
            <span className="animate-spin">
              <BiLoader />
            </span>
          ) : (
            "Criar Empresa"
          )}
        </Button>
      </form>
    </div>
  );
};

export default FormCreateCompany;
