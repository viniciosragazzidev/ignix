"use client";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import React, { useActionState, useEffect } from "react";
import { BiLoader, BiSend } from "react-icons/bi";
import { BsEnvelopeSlash } from "react-icons/bs";
import { findErrors } from "@/shared/lib/utils";
import { ErrorMessages } from "@/shared/lib/ErrorsMessage";
import OrderInviteAction from "./actions/action";

const AreaInputInviteEmail = ({ setSend }: { setSend: any }) => {
  const [state = { errors: [], OrderInvite: null }, submitAction, isPending] =
    useActionState(OrderInviteAction, {
      errors: [],
    });

  const emailErrors = findErrors("email", state.errors);

  useEffect(() => {
    if (state.OrderInvite) {
      setSend(true);
    }
  }, [state.OrderInvite]);
  return (
    <div className="flex flex-col text-center items-center  gap-6 max-w-xl fadeIn">
      <header className="flex flex-col gap-1 text-center items-center">
        <span className="text-6xl text-primary max-lg:self-center lg:mb-4">
          <BsEnvelopeSlash />
        </span>
        <h1 className="text-[22px] lg:text-3xl font-bold flex items-baseline gap-1">
          Convite Não Encontrado
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
    </div>
  );
};

export default AreaInputInviteEmail;
