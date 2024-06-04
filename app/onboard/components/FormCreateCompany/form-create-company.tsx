"use client";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import React, { useActionState, useEffect } from "react";
import CompanyAction from "./actions/action";
import { findErrors } from "@/shared/lib/utils";
import { ErrorMessages } from "@/shared/lib/ErrorsMessage";
import { permanentRedirect, useRouter } from "next/navigation";
import { BiArrowBack, BiLoader } from "react-icons/bi";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import loadingCreateCompany from "@/public/images/loadingCreateCompany.svg";
import Image from "next/image";
import { TypeUser } from "@/shared/@types";
import { toast } from "sonner";

const FormCreateCompany = ({
  setCurrentOnboardStep,
  user,
}: {
  setCurrentOnboardStep: any;
  user: TypeUser;
}) => {
  const [result, submitAction, isPending] = useActionState(CompanyAction, {
    Company: [],
    // Company: [],
  });

  const nameErrors: any = findErrors("name", result.errors);
  const cnpjErrors: any = findErrors("cnpj", result.errors);
  const addressErrors: any = findErrors("address", result.errors);
  const cityErrors: any = findErrors("city", result.errors);
  const resultErrors: any = findErrors("result", result.errors);
  const emailErrors: any = findErrors("email", result.errors);
  const phoneErrors: any = findErrors("phone", result.errors);

  useEffect(() => {
    if (result.Company && result.Company.company?.name) {
      toast.success("Empresa criada com sucesso!");

      permanentRedirect(`/app/${result.Company.company.slugId}`);
    } else if (result.errors) {
      toast.error("Outra empresa já foi criada utilizando essas informações!");
    }
  }, [result]);
  return (
    <div className="flex flex-col text-start gap-6 relative">
      <header className="flex flex-col gap-1">
        <h1 className="text-[22px] lg:text-3xl font-bold flex items-baseline gap-1">
          Informações da Empresa {result.Company?.company?.name}
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
            <Label htmlFor="address">Endereço</Label>
            <Input
              id="address"
              type="text"
              name="address"
              placeholder="Endereço da empresa"
              className="w-full rounded-xl"
            />
            <ErrorMessages errors={addressErrors} />
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
          <input
            type="text"
            className="opacity-0 absolute top-[-9999px]"
            name="userId"
            value={user.id}
          />
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
      <Button
        onClick={() => setCurrentOnboardStep(2)}
        className=" rounded-xl  self-end absolute top-[-100px] left-0"
        variant={"outline"}
        type="button"
      >
        <BiArrowBack />
      </Button>

      <Dialog open={isPending}>
        <DialogContent className="flex flex-col justify-center items-center text-center w-max bg-transparent">
          <DialogHeader className=" flex flex-col justify-center items-center">
            <span className="animate-spin text-5xl text-primary an-spin ">
              <BiLoader />
            </span>
            <DialogTitle>Estamos configurando seu perfil...</DialogTitle>
            <DialogDescription>
              Aguarde, isso pode levar alguns instantes.
            </DialogDescription>
          </DialogHeader>
          <Image
            src={loadingCreateCompany}
            alt="onboard"
            className="max-w-32 "
            width={1920}
            height={1920}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FormCreateCompany;
