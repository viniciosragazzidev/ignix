"use client";

import LoginWithGoogleButton from "@/shared/components/login-with-google";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";

import { Link } from "next-view-transitions";
import React from "react";

const LoginForm = () => {
  return (
    <div className="flex flex-col text-start gap-6 p-4 w-full max-w-sm">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold flex items-baseline gap-1">
          Faça Login
        </h1>
        <span className="text-sm text-muted-foreground">
          Informe abaixo suas credenciais de acesso.
        </span>
      </header>

      <form
        action=""
        className="flex flex-col gap-4  w-full max-w-xs md:max-w-sm"
      >
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
        <div className="flex items-center gap-1 justify-end ">
          <span className="text-xs text-muted-foreground cursor-pointer hover:underline hover:text-primary/80 transition-all">
            Esqueceu sua senha?
          </span>
        </div>
        <Link href={"/onboard"}>
          <Button
            className="w-full rounded-xl"
            variant={"default"}
          >
            {" "}
            Entrar{" "}
          </Button>
        </Link>
      </form>
      <LoginWithGoogleButton />
      <div className="flex items-center gap-1 justify-center ">
        <span className="text-xs text-muted-foreground cursor-pointer hover:underline hover:text-primary/80 transition-all">
          Ainda não possui uma conta?
        </span>
        <Link
          href="/register"
          className="text-xs text-primary cursor-pointer hover:underline hover:text-primary/80 transition-all"
        >
          Crie agora
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
