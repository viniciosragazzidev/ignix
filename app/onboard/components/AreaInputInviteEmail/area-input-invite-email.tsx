"use client";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import React, { useActionState, useEffect } from "react";
import { BiArrowBack, BiLoader, BiSend } from "react-icons/bi";
import { BsEnvelopeSlash } from "react-icons/bs";
import { findErrors } from "@/shared/lib/utils";
import { ErrorMessages } from "@/shared/lib/ErrorsMessage";
import OrderInviteAction from "./actions/action";

const AreaInputInviteEmail = ({
  setSend,
  setCurrentOnboardStep,
}: {
  setSend: any;
  setCurrentOnboardStep: any;
}) => {
  const [result, submitAction, isPending] = useActionState(OrderInviteAction, {
    errors: [],
  });

  const emailErrors = findErrors("email", result.errors);

  useEffect(() => {
    if (result.OrderInvite) {
      // setSend(true);
    }
  }, [result.OrderInvite]);
  return (
    <div className="flex flex-col text-center items-center  relative gap-6 max-w-xl fadeIn">
      <header className="flex flex-col gap-1 text-center items-center">
        <span className="text-6xl text-primary max-lg:self-center lg:mb-4">
          <BsEnvelopeSlash />
        </span>
        <h1 className="text-[22px] lg:text-3xl font-bold flex items-baseline gap-1">
          Convite Não Encontrado {result.OrderInvite?.name}
        </h1>
        <span className="text-sm  text-muted-foreground">
          Insira abaixo o e-mail da empresa que deseja ingressar e{" "}
          <strong>aguarde aprovação.</strong>
        </span>
      </header>

      <form
        action={submitAction}
        className="w-full flex flex-col items-center max-w-sm"
      >
        <div className="flex  w-full items-center">
          <Input
            type="email"
            autoComplete="off"
            placeholder="Email da empresa"
            name="email"
          />
          <Button
            className="ml-2"
            type="submit"
          >
            {isPending ? <BiLoader className="animate-spin" /> : <BiSend />}
          </Button>
        </div>
        <span>
          <ErrorMessages errors={emailErrors} />{" "}
          <span className="opacity-0">.</span>
        </span>
      </form>
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

export default AreaInputInviteEmail;
