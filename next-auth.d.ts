import { AppRole } from "@prisma/client";
import type { User } from "next-auth";
import "next-auth/jwt";
import { TypeCompany, TypeCompanyUser } from "./shared/@types";

type UserId = string;

declare module "next-auth/jwt" {
  interface JWT {
    userId: UserId;
    role: AppRole;
    CompanyUser: TypeCompanyUser[];
    units: any;
    cpf: string;
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: UserId;
      role: AppRole;
      CompanyUser: TypeCompanyUser[];
      units: any;
      cpf: string;
    };
  }
}
