"use client";

import React from "react";
import ignix from "@/public/images/ignix.svg";
import Image from "next/image";
interface LogoProps {
  mode?: "simple" | "withText";
  size?: "small" | "medium" | "large";
}
const Logo = ({ mode = "simple", size }: LogoProps) => {
  return (
    <span>
      <Image
        src={ignix}
        width={size === "large" ? 64 : size === "medium" ? 42 : 32}
        alt="Ignix Logo"
      />
      {mode === "withText" && (
        <span
          className={` text-lg ${
            size === "large" ? "text-3xl" : "text-xl"
          } font-bold `}
        >
          Ignix
        </span>
      )}
    </span>
  );
};

export default Logo;
