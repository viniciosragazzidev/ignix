"use client";

import React from "react";
import { BsEnvelopeCheck } from "react-icons/bs";
import { InputCodeInvite } from "./input-invite-code";
import { Button } from "@/shared/components/ui/button";
import { BiArrowBack, BiSend } from "react-icons/bi";

const AreaInviteCode = ({
  setCurrentOnboardStep,
}: {
  setCurrentOnboardStep: any;
}) => {
  return (
    <div className="flex flex-col text-center items-center relative  gap-6 max-w-xl opacity-0 fadeIn">
      <header className="flex flex-col gap-1 text-center items-center">
        <span className="text-6xl text-primary max-lg:self-center lg:mb-4">
          <BsEnvelopeCheck />
        </span>
        <h1 className="text-[22px] lg:text-3xl font-bold flex items-baseline gap-1">
          Solicitação Enviada
        </h1>
        {/* <span className="text-sm text-muted-foreground">
          Uma solicitação de acesso foi enviado para empresa informada.
        </span> */}
        <span className="text-sm pt-4">Informe o código de acesso:</span>
      </header>

      <div className="w-full flex justify-center items-center max-w-sm ">
        <InputCodeInvite />

        <Button className="ml-2">
          <BiSend />
        </Button>
      </div>
      <span className="text-xs text-muted-foreground">
        Você receberá o código de acesso por e-mail assim que for aprovado.
      </span>
      <Button
        onClick={() => setCurrentOnboardStep(2)}
        className=" rounded-xl  self-end absolute top-[-100px] left-0"
        variant={"outline"}
        type="button"
      >
        <BiArrowBack />
      </Button>
    </div>
  );
};

export default AreaInviteCode;
