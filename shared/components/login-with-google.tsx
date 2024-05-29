"use client";
import { FaGoogle } from "react-icons/fa6";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

const LoginWithGoogleButton = () => {
  return (
    <Button
      onClick={() => signIn("google", { callbackUrl: "/app" })}
      variant={"outline"}
      className="w-full rounded-xl flex items-center gap-2  hover:text-accent-foreground hover:bg-transparent hover:border-primary/50 "
    >
      <FaGoogle className="text-primary" /> Entrar com o Google
    </Button>
  );
};

export default LoginWithGoogleButton;
