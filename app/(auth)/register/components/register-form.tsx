"use client";

import Logo from "@/shared/components/Logo";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import {
  QuestionMarkCircledIcon,
  QuestionMarkIcon,
} from "@radix-ui/react-icons";
import { Link } from "next-view-transitions";
import React from "react";
import { FaGoogle } from "react-icons/fa6";

const RegisterForm = () => {
  return (
    <div className="flex flex-col  text-start gap-6 p-4 w-full max-w-sm">
      <header className="flex flex-col gap-1 ">
        <h1 className="text-3xl font-bold flex items-baseline gap-1">
          Crie uma conta
        </h1>
        <span className="text-sm text-muted-foreground">
          Informe abaixo as informações de acesso.
        </span>
      </header>

      <form
        action=""
        className="flex flex-col gap-4  w-full max-w-xs md:max-w-sm"
      >
        <div className="flex gap-2 items-center">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              type="text"
              placeholder="Insira seu nome"
              className="w-full rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="surname">Sobrenome</Label>
            <Input
              id="surname"
              type="text"
              placeholder="Insira seu sobrenome"
              className="w-full rounded-xl"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Insira seu email"
            className="w-full rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            placeholder="Insira sua senha"
            className="w-full rounded-xl"
          />
        </div>

        <Button
          className="w-full rounded-xl"
          variant={"default"}
        >
          {" "}
          Criar conta{" "}
        </Button>
      </form>

      <Button
        variant={"outline"}
        className="w-full rounded-xl flex items-center gap-2  hover:text-accent-foreground hover:bg-transparent hover:border-primary/50 "
      >
        <FaGoogle className="text-primary" /> Entrar com o Google
      </Button>
      <div className="flex items-center gap-1 justify-center ">
        <span className="text-xs text-muted-foreground cursor-pointer hover:underline hover:text-primary/80 transition-all">
          Já tem uma conta?
        </span>
        <Link
          href="/login"
          className="text-xs text-primary cursor-pointer hover:underline hover:text-primary/80 transition-all"
        >
          Faça Login
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
