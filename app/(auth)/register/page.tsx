import React from "react";
import RegisterForm from "./components/register-form";
import Image from "next/image";
import ignix from "@/public/images/ignix.svg";

const Register = () => {
  return (
    <div className="w-full min-h-screen border-b-2 border-primary  flex flex-col justify-center">
      <span className="flex justify-center lg:absolute   top-0  left-10 mt-6 max-lg:mb-6 font-bold text-xl max-lg:text-3xl items-center gap-1 ">
        <Image
          src={ignix}
          alt="logo"
          width={24}
          height={24}
        />{" "}
        Ignix
      </span>
      <div className="flex items-center justify-center h-max">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
